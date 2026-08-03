author: pballai
id: developers_migrating_from_sisense_made_easy
summary: developers_migrating_from_sisense_made_easy
categories: developers
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags:
lastUpdated: 2026-07-24

# Migrating From Sisense Made Easy

## Overview
Duration: 5

A common ask from teams evaluating Sigma is migrating their Sisense footprint — usually to take advantage of all the amazing things Sigma offers. The conversion itself can be a blocker — and the part this QuickStart automates.

The usual Sisense-to-Sigma migration loop is rebuild-the-ElastiCube-by-hand, rewrite every JAQL expression and calculated measure as a Sigma formula, recreate each dashboard's widgets and layout, then eyeball the numbers against the source and hope nothing drifted in the translation. Done on a single dashboard it's tedious. Across a real Sisense estate — typically dozens of dashboards reading from a handful of shared ElastiCubes — it's the reason migration projects slip.

This QuickStart walks through a `Claude Code` skill called `sisense-to-sigma` that automates the loop.

Point it at a Sisense dashboard; it discovers the dashboard's widgets and the ElastiCube or Live Connect data model behind them via the Sisense REST API. It translates each widget's JAQL expression into a Sigma formula, builds a Sigma data model from the warehouse tables the ElastiCube points at, mirrors the dashboard layout on Sigma's grid, and runs a parity pass comparing Sigma's results against the live warehouse. It surfaces a punch list of anything it couldn't auto-translate — instead of silently producing a broken workbook.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The skill runs the whole conversion — discover, translate, build, verify — and finishes with a documented parity check. The result is a working Sigma workbook on the warehouse plus the report that proves it matches the Sisense source, instead of a rebuilt-by-hand workbook you have to spot-check yourself.
</aside>

### What else this enables

A pure lift-and-shift is the floor, not the ceiling. The same skill family supports three follow-on moves that turn a migration into an upgrade:

- **Dedup before you migrate.** Most BI estates carry years of dashboard sprawl — multiple near-identical dashboards built by different teams over time. The assessment skill flags dashboards that are roughly 90% the same and recommends merging them before conversion. You move 200 dashboards instead of 800, and every downstream conversation is simpler. Pair this with the usage data the assessment pulls (who views what, how often) and you can confidently retire cold content rather than carry it forward.

- **Enhance, don't just translate.** Many "dashboards" in legacy tools are really input-driven workflows in disguise — a dashboard whose data is refreshed by uploading a file each morning is actually a forecasting app waiting to happen. After the lift-and-shift, the skill can suggest replacing those patterns with native Sigma constructs: input tables for write-back, Sigma Assistant for natural-language analysis, scheduled agents for routine summaries. The result isn't "the old dashboard, in a new tool" — it's "the workflow, finally done right."

- **Audit your source as a side effect.** The parity check that closes the run isn't just a confidence test on the migration — it's a fresh pair of eyes on the source platform's math. Sigma customers have caught multi-year calculation errors during their first migration run because the parity gate flagged a Sigma vs source mismatch and the source turned out to be wrong. Plan the migration as your final audit of the legacy system.

### Sample dashboard

For the demonstration, we'll convert a dashboard called `ECommerce Overview (Live)` — six widgets (Total Revenue and Total Quantity indicators, Revenue by Category column chart, Revenue by Country top-10 bar, Revenue Trend Yearly bar, and Quantity by Category pie) built on a Snowflake Live Connect data model. You'll see the discovery artifacts each phase produces, the converter's breakdown of how each JAQL expression mapped to a Sigma formula, the parity report against the live warehouse, and the resulting Sigma data model and workbook landed in your org — along with the gap list of items to hand-polish.

<img src="assets/mfss_01.png" width="800"/>

<aside class="positive">
<strong>ABOUT THE SKILL CODE:</strong><br> The skill code used in this QuickStart is vendored into <code>sigmacomputing/quickstarts-public</code> for a stable reader experience — the version you clone matches what's captured in the screenshots and outputs below. The upstream skill at <a href="https://github.com/twells89/sigma-migration-skills/tree/main/plugins/sisense-to-sigma">twells89/sigma-migration-skills</a> is actively evolving with new converter capabilities, bug fixes, and additional source-tool support. If you want the latest improvements after completing the QS, point your skill symlink at the upstream repo instead.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> The migration is one-directional — Sisense is the source, Sigma is the target. Sigma reads the warehouse live, so the conversion's accuracy depends on the warehouse tables behind your Sisense data model being reachable from a Sigma connection. For ElastiCube data models, the skill discovers the tables and joins from the ElastiCube definition and reconciles them back to the underlying warehouse columns. For Live Connect models, the skill reads the warehouse tables directly. Custom-SQL ElastiCube tables are surfaced alongside the Sigma equivalent and flagged for review. Parity is checked against the warehouse-resolved numbers, so any ElastiCube cache drift surfaces as an explicit row-level diff rather than getting buried.
</aside>

<aside class="negative">
<strong>AI MODEL DIFFERENCES:</strong><br> Depending on which AI, model, and version you're running, the exact prompt wording, option ordering, and intermediate messages may differ slightly from what's shown in this QuickStart. The substantive steps and decisions are the same — pick the option that matches the intent described, even if the label varies.
</aside>

### Target Audience
Sigma SEs, technical CSMs, and migration partners running Sisense-to-Sigma conversions — or scoping a batch migration with the companion `sisense-assessment` skill.

### Prerequisites
- `Claude Code` installed (CLI or desktop).
- Sigma API credentials.
- A Sisense instance with an account (email + password) that has at least read access to dashboards, widgets, and data models.
- `Python 3.10` or newer. macOS's stock system Python is typically 3.9 — older than the skill needs. If `python3 --version` reports anything below 3.10, install a newer interpreter via [Homebrew](https://brew.sh/) (`brew install python@3.12`) or [python.org](https://www.python.org/downloads/).
- `Node.js` (any recent LTS) for the converter MCP. The conversion uses a separate MCP server, [`sigma-data-model-mcp`](https://github.com/twells89/sigma-data-model-mcp), cloned + built (`npm install && npm run build`) into `~/Desktop/sigma-data-model-mcp`. The skill prompts you to install it mid-conversion — no upfront work needed — but pre-build it if you'd rather skip the gate.
- A warehouse reachable from Sigma (Snowflake, BigQuery, Databricks, Redshift, Postgres, and others) that your Sisense data model also queries.

<aside class="negative">
<strong>NOTE:</strong><br> Use a non-production Sigma org for your first run. The skill creates real workbooks, and error-recovery paths may iterate via PUT to update them.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## The Sisense Migration Skill Family
Duration: 5

`sisense-to-sigma` is one of two skills that ship together as a single repo (cloned in the next section). Most of this QuickStart focuses on the converter — but knowing where the assessment skill fits avoids dead ends later when scoping a batch migration.

| Skill | Role | When to reach for it |
|-------|------|----------------------|
| `sisense-assessment` | Scoping | Auditing a Sisense instance before committing to a conversion plan. Emits a per-dashboard complexity readout (widget-type mix, JAQL expression convertibility, ElastiCube vs Live Connect flags, multi-fact relationship count, filter/bookmark complexity), usage signal from Sisense's activity API, and a value/cost-ranked migration shortlist that `sisense-to-sigma` can consume. Read-only — only `GET`s against the Sisense API. |
| `sisense-to-sigma` | Conversion | The subject of this QuickStart. Converts a single Sisense dashboard (or a batch via shortlist) to a Sigma data model and matching workbook with verified row-level parity. |

Here's how the two skills connect in a full migration — `sisense-assessment` hands the converter a ranked shortlist, and `sisense-to-sigma` produces the Sigma workbooks with a verified parity report:

<img src="assets/mfss_family_diagram.png" width="800"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Each skill does one thing well — scoping and conversion. Pick the smallest set that fits your job, and don't run the conversion until you've confirmed the data is somewhere Sigma can actually read.
</aside>

### Which skill for your situation

Not every migration needs both skills. Use the table below to map your scenario to the smallest set that fits.

In this QuickStart we're in the first row — one Sisense dashboard whose Live Connect model reads directly from the same Snowflake warehouse Sigma will connect to.

| Your situation | Skill(s) to use |
|----------------|-----------------|
| 1 dashboard, Live Connect model reads from your warehouse | `sisense-to-sigma` |
| 1 dashboard, ElastiCube model with custom SQL tables | `sisense-to-sigma` (custom-SQL tables flagged for review) |
| 10+ dashboards (any data source) | `sisense-assessment` → `sisense-to-sigma` in batch mode |
| Auditing Sisense sprawl without converting yet | `sisense-assessment` only |

<aside class="negative">
<strong>NOTE:</strong><br> As the skill runs, you'll see filenames and log lines that reference internal phase numbers. Those belong to the skill's own internal numbering — they map onto the phases described in <code>Review the Output</code>. The full mapping is documented in the skill's <code>SKILL.md</code>.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Install and Configure the Skill
Duration: 15

First we need to clone the skill's GitHub repository, configure Sisense REST credentials, and capture your Sigma credentials.

The two skills live in `sigmacomputing/quickstarts-public` under [sisense-migration-skills/](https://github.com/sigmacomputing/quickstarts-public/tree/main/sisense-migration-skills).

From a terminal, run each command below one at a time so you can confirm each step before moving on.

<aside class="positive">
<strong>NOTE:</strong><br> <code>~</code> in the commands below is shell shorthand for your home folder — <code>/Users/&lt;you&gt;</code> on macOS, <code>/home/&lt;you&gt;</code> on Linux.
</aside>

**Step 1: Create a local folder for the clone**

```copy-code
mkdir -p ~/quickstarts-public
```

**Step 2: Move into the new folder**

```copy-code
cd ~/quickstarts-public
```

**Step 3: Clone the repo without pulling any files yet**

```copy-code
git clone --filter=blob:none --sparse https://github.com/sigmacomputing/quickstarts-public.git .
```

**Step 4: Fill in only the sisense-migration-skills folder**

```copy-code
git sparse-checkout set sisense-migration-skills
```

**Step 5: Symlink sisense-to-sigma into the Claude skills folder**

```copy-code
ln -s ~/quickstarts-public/sisense-migration-skills/sisense-to-sigma ~/.claude/skills/sisense-to-sigma
```

**Step 6: Symlink sisense-assessment**

```copy-code
ln -s ~/quickstarts-public/sisense-migration-skills/sisense-assessment ~/.claude/skills/sisense-assessment
```

Steps 5 and 6 should return with no error.

![divider](assets/horizonalline.png)

**Step 7: Add your Sigma API credentials.**<br>
The Sisense skill uses `bootstrap.sh`. 

Because `bootstrap.sh` is non-interactive, write your Sigma API credentials directly to the shared env file it reads:

```copy-code
cat >> ~/.sigma-migration/env <<'EOF'
export SIGMA_BASE_URL='https://aws-api.sigmacomputing.com'
export SIGMA_CLIENT_ID='{your-client-id}'
export SIGMA_CLIENT_SECRET='{your-client-secret}'
EOF
```

<aside class="positive">
<strong>NOTE:</strong><br> The env file lives at <code>~/.sigma-migration/env</code> in your home directory — not inside the project folder. It won't appear in VSCode Explorer, and that's expected. The migration scripts source it from that path automatically.
</aside>

Get `SIGMA_CLIENT_ID` and `SIGMA_CLIENT_SECRET` from Sigma under `Administration` > `Developer Access` > `Create New Client Credentials` (requires Admin role). 

For information, see: [Generate Sigma API client credentials](https://help.sigmacomputing.com/reference/generate-client-credentials)

`SIGMA_BASE_URL` should match your deployment region — `https://aws-api.sigmacomputing.com` covers AWS US East.

For GCP or Azure instances, see: [Supported regions, data platforms, and features](https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support)

![divider](assets/horizonalline.png)

**Step 8: Add your Sisense credentials.**<br>
The skill authenticates to Sisense using your account email and password — it POSTs to `/api/v1/authentication/login` at runtime to exchange them for a bearer token. Create the credential file and open it in `nano`:

```copy-code
mkdir -p ~/.sigma-migration && nano ~/.sigma-migration/sisense.env
```

Paste these three lines — substituting your actual values:

```copy-code
export SISENSE_BASE_URL="https://{your-sisense-host}"
export SISENSE_EMAIL="{your-full-login-email}"
export SISENSE_PASSWORD='{your-password}'
```

Save and exit: `Ctrl+O`, `Enter`, `Ctrl+X`. Then lock down the file:

```copy-code
chmod 600 ~/.sigma-migration/sisense.env
```

`SISENSE_BASE_URL` is the host with **no trailing slash**. For a cloud-hosted tenant it looks like `https://{your-tenant}.sisense.com`. `SISENSE_EMAIL` must be the full email address you use to log into Sisense — a bare username will be rejected.

<aside class="negative">
<strong>NOTE:</strong><br> Use single quotes around the password value (<code>'your-password'</code>) unless the password itself contains a single quote. Single quotes prevent shell expansion — characters like <code>$</code>, <code>&</code>, and backticks are treated literally. If the password contains a single quote, use double quotes and escape any <code>$</code> with a backslash (e.g., <code>"my\$pass"</code>).
</aside>

Verify auth works by running the skill's own auth script — it logs in and returns a token:

```copy-code
source ~/.sigma-migration/sisense.env && eval "$(bash ~/.claude/skills/sisense-to-sigma/scripts/sisense-auth.sh)" && curl -s -H "Authorization: Bearer ${SISENSE_API_TOKEN}" "${SISENSE_BASE_URL}/api/v1/dashboards?fields=oid,title" | python3 -c 'import sys,json; [print(d["oid"], "-", d["title"]) for d in json.load(sys.stdin)]'
```

You should see one line per dashboard. If the command returns nothing or a `401`: double-check `SISENSE_BASE_URL` (include the protocol, no trailing slash) and your email and password.

<aside class="positive">
<strong>NOTE:</strong><br> The skill mints a fresh Sisense bearer token from your email and password each time it runs. You do not need to generate or manage API tokens manually.
</aside>

![divider](assets/horizonalline.png)

**Step 9: Run the environment bootstrap.**<br>
This single command verifies that all runtime dependencies are in place (Ruby, Python 3, Node.js), installs any that are missing without requiring admin access, confirms that credentials are readable in `~/.sigma-migration/env`, and writes the sentinel file the skill gates on before starting. Run it once per machine:

```copy-code
bash ~/.claude/skills/sisense-to-sigma/scripts/bootstrap.sh
```

A successful run ends with:

```
bootstrap: COMPLETE — doctor green; sentinel written to ~/.sigma-migration/bootstrap.json.
```

If the output flags missing credentials, check your `~/.sigma-migration/env` entries and run `bootstrap.sh` again. If a runtime dependency fails to install, follow the message's suggestion (usually a Homebrew install) and rerun.

![divider](assets/horizonalline.png)

**Step 10: Verify Claude Code can invoke the skill.**<br>
Type `claude` in your terminal to start Claude Code, then invoke the skill:

```copy-code
claude
```

```copy-code
/sisense-to-sigma
```

<img src="assets/mfss_04.png" width="800"/>

Claude should start reading the reference files and ask what dashboard you want to convert.

Pause at this prompt — we'll hand it everything in one shot via the kickoff prompt in the `Run the Conversion` section later:

<img src="assets/mfss_04a.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> From here on, Claude Code asks for approval on every bash command the skill runs — and a full conversion fires dozens of them. For each prompt, pick option <code>2. Yes, and don't ask again</code> so Claude Code remembers that command pattern. After the first handful of approvals the prompts stop coming. Alternatively, press <code>Shift+Tab</code> once to switch to <code>auto mode on</code> for the rest of the session — fine for a trusted skill like this one, just don't use it for unknown code.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare the Demo Data
Duration: 10

The demo dashboard reads from a Snowflake e-commerce schema. We'll create that schema and load it from S3 so both Sisense (via Live Connect) and Sigma read from the same source of truth.

<aside class="negative">
<strong>NOTE:</strong><br> The DDL below grants access to <code>SIGMA_SERVICE_ROLE</code>. Substitute the role your Sigma connection actually uses if it differs — you can confirm it in Sigma under <code>Administration</code> > <code>Connections</code> by clicking your Snowflake connection.
</aside>

```copy-code
USE ROLE ACCOUNTADMIN;
USE WAREHOUSE COMPUTE_WH;

CREATE DATABASE IF NOT EXISTS QUICKSTARTS;
CREATE SCHEMA  IF NOT EXISTS QUICKSTARTS.SISENSE_ECOMMERCE;
USE SCHEMA QUICKSTARTS.SISENSE_ECOMMERCE;

CREATE OR REPLACE FILE FORMAT sisense_csv_format
  TYPE = CSV
  FIELD_DELIMITER = ','
  FIELD_OPTIONALLY_ENCLOSED_BY = '"'
  NULL_IF = ('', 'NULL')
  EMPTY_FIELD_AS_NULL = TRUE
  PARSE_HEADER = TRUE;

CREATE OR REPLACE STAGE sisense_ecommerce_stage
  URL = 's3://sigma-quickstarts-main/Sisense/'
  FILE_FORMAT = sisense_csv_format;

CREATE OR REPLACE TABLE BRAND (
  "Brand ID" NUMBER,
  "Brand"    VARCHAR
);

CREATE OR REPLACE TABLE CATEGORY (
  "Category ID" NUMBER,
  "Category"    VARCHAR
);

CREATE OR REPLACE TABLE COUNTRY (
  "Country ID" NUMBER,
  "Country"    VARCHAR
);

CREATE OR REPLACE TABLE COMMERCE (
  "Visit ID"    NUMBER,
  "Date"        DATE,
  "Brand ID"    NUMBER,
  "Category ID" NUMBER,
  "Country ID"  NUMBER,
  "Revenue"     FLOAT,
  "Quantity"    NUMBER,
  "Cost"        FLOAT,
  "Age Range"   VARCHAR,
  "Gender"      VARCHAR,
  "Condition"   VARCHAR
);

COPY INTO BRAND    FROM @sisense_ecommerce_stage/BRAND.csv    MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE;
COPY INTO CATEGORY FROM @sisense_ecommerce_stage/CATEGORY.csv MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE;
COPY INTO COUNTRY  FROM @sisense_ecommerce_stage/COUNTRY.csv  MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE;
COPY INTO COMMERCE FROM @sisense_ecommerce_stage/COMMERCE.csv MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE;

SELECT 'BRAND'    AS TBL_NAME, COUNT(*) AS ROW_COUNT FROM BRAND
UNION ALL
SELECT 'CATEGORY', COUNT(*) FROM CATEGORY
UNION ALL
SELECT 'COUNTRY',  COUNT(*) FROM COUNTRY
UNION ALL
SELECT 'COMMERCE', COUNT(*) FROM COMMERCE;

SELECT
  ROUND(SUM("Revenue"), 3) AS TOTAL_REVENUE,
  SUM("Quantity")          AS TOTAL_QUANTITY
FROM COMMERCE;

GRANT USAGE  ON DATABASE QUICKSTARTS                                    TO ROLE SIGMA_SERVICE_ROLE;
GRANT USAGE  ON SCHEMA   QUICKSTARTS.SISENSE_ECOMMERCE                  TO ROLE SIGMA_SERVICE_ROLE;
GRANT SELECT ON ALL    TABLES IN SCHEMA QUICKSTARTS.SISENSE_ECOMMERCE   TO ROLE SIGMA_SERVICE_ROLE;
GRANT SELECT ON FUTURE TABLES IN SCHEMA QUICKSTARTS.SISENSE_ECOMMERCE   TO ROLE SIGMA_SERVICE_ROLE;
```

<!-- mfss_02.png — screenshot of Snowflake COPY INTO results showing row counts (TBD) -->
<!-- <img src="assets/mfss_02.png" width="800"/> -->

Expected results:
- `COMMERCE` row count: `613,002`
- `TOTAL_REVENUE`: `39,759,625.515`
- `TOTAL_QUANTITY`: `91,206`

The revenue and quantity totals are the baseline aggregates we'll cross-check against the Sigma workbook after the conversion.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> When Sisense is already running in Live Connect mode against your warehouse, there's nothing to replicate — Sigma connects to the same tables directly. This is the cleanest migration path: one warehouse, two tools reading it, one conversion to make Sigma the destination.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Build the Demo Dashboard in Sisense
Duration: 10

We'll build the `ECommerce Overview (Live)` dashboard in Sisense using a Live Connect model pointed at the Snowflake schema from the previous section. That dashboard is what we'll convert in the next phase.

**Step 1: Create a Live Connect data model in Sisense.**

In Sisense, navigate to `Data` > `+ Add Data`. Choose `Live Connect` and select your Snowflake connection. Add all four tables from `QUICKSTARTS.SISENSE_ECOMMERCE`:

```copy-code
BRAND
CATEGORY
COMMERCE
COUNTRY
```

Define the three relationships (all many-to-one from COMMERCE):
- `COMMERCE."Brand ID"` → `BRAND."Brand ID"`
- `COMMERCE."Category ID"` → `CATEGORY."Category ID"`
- `COMMERCE."Country ID"` → `COUNTRY."Country ID"`

Name the model `Sample ECommerce` and save.

**Step 2: Create the dashboard and add widgets.**

`+ New Dashboard`. Name it `ECommerce Overview (Live)` and add the following six widgets using the `Sample ECommerce` model. All are built in Sisense's GUI widget builder — no custom scripts.

**Widget 1: Total Revenue** (indicator)
- Metric: `Sum of COMMERCE."Revenue"`
- Visualization: `Indicator` (the `123` icon, top-left of the chart type picker)
- Title: `Total Revenue`

**Widget 2: Total Quantity** (indicator)
- Metric: `Sum of COMMERCE."Quantity"`
- Visualization: `Indicator` (the `123` icon, top-left of the chart type picker)
- Title: `Total Quantity`

**Widget 3: Revenue by Category** (column chart)
- Metric: `Sum of COMMERCE."Revenue"`
- Dimension: `CATEGORY."Category"`
- Visualization: `Column Chart`
- Title: `Revenue by Category`

**Widget 4: Revenue by Country** (bar chart, top 10)
- Metric: `Sum of COMMERCE."Revenue"`
- Dimension: `COUNTRY."Country"`
- Visualization: `Bar Chart`
- Title: `Revenue by Country`
- Top 10: in the **Filters** panel (right sidebar) > `Regular filters` > `+` > select `Country` > set `Top` to `10` > `by: Total Revenue`

**Widget 5: Revenue Trend Yearly** (bar chart)
- Metric: `Sum of COMMERCE."Revenue"`
- Dimension: `COMMERCE."Date"` (grouped by `Years`)
- Visualization: `Bar Chart`
- Title: `Revenue Trend Yearly`

**Widget 6: Quantity by Category** (pie chart)
- Metric: `Sum of COMMERCE."Quantity"`
- Dimension: `CATEGORY."Category"`
- Visualization: `Pie Chart`
- Title: `Quantity by Category`

**Step 3: Capture the dashboard OID.**

With the dashboard open, copy the OID from the URL — it's the alphanumeric segment after `/app/main#/dashboards/`. Keep it for the kickoff prompt in `Run the Conversion`.

<!-- mfss_03.png — screenshot of the completed Sisense demo dashboard (TBD) -->
<!-- <img src="assets/mfss_03.png" width="800"/> -->

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Six widgets across four visualization types (indicator × 2, column, bar × 2, pie) exercises the major translation paths the converter handles — JAQL aggregations, date grouping, dimension breakouts, and Top N filtering. The two indicators establish the parity baseline values you'll verify when the conversion completes.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare the Sigma Target Folder
Duration: 2

The converter needs a Sigma folder to land the new data model and workbook in. The skill will ask for the folder's UUID — it's easier to have it ready before you return to the Claude prompt.

**Step 1: Create (or pick) a folder in Sigma.**<br>
Open your Sigma org, navigate to where you want the migrated workbook to live, and create a folder:

```copy-code
Sisense Migration Demo
```

**Step 2: Grab the folder ID.**<br>
Open the folder. The ID is the last segment of the URL — a short alphanumeric string, 21 characters. Copy it from the address bar and keep it on the clipboard for the next section.

<img src="assets/mfss_05.png" width="800"/>

<aside class="positive">
<strong>NOTE:</strong><br> The skill's prompt may refer to the folder "UUID". Paste the value from the URL exactly as it appears; the skill accepts that form directly.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Run the Conversion
Duration: 20

The skill can run interactively, asking for the dashboard, warehouse, and Sigma destination one at a time. For a known target — like ours — it's faster to give Claude the entire job in one message. The skill recognizes a structured kickoff prompt and walks the pipeline directly.

If Claude is still running and paused at the skill's first prompt from `Install and Configure the Skill`, return to that terminal. If you closed Claude after that step, restart it now:

```copy-code
claude
```

```copy-code
/sisense-to-sigma
```

Claude is asking how we want to proceed. Select option 2:

`2. Yes, allow reading from sisense-migration/ from this project.`

When Claude finishes asking for various checks and permissions it will stop here (or similar):

<img src="assets/mfss_05a.png" width="800"/>

Paste the block below. **Substitute your own values where the placeholders are:**

- `Dashboard OID` — the Sisense dashboard OID from the URL (the alphanumeric segment after `/app/main#/dashboards/`)
- `SIGMA_CONNECTION_ID` — your Snowflake connection ID from Sigma's `Administration` > `Connections`
- `SIGMA_FOLDER_ID` — the folder ID you copied at the end of the previous section

```copy-code
Run /sisense-to-sigma on the following. Walk every phase in SKILL.md end-to-end and stop only if a hard gate fails.

Sisense
- Credentials sourced from ~/.sigma-migration/sisense.env (SISENSE_BASE_URL, SISENSE_EMAIL, SISENSE_PASSWORD)
- Dashboard OID: {your-dashboard-oid}

Warehouse — same on both sides
- Sisense reads from Snowflake via Live Connect — database QUICKSTARTS, schema SISENSE_ECOMMERCE
- Sigma reads from Snowflake — same schema QUICKSTARTS.SISENSE_ECOMMERCE

Sigma
- SIGMA_API_TOKEN = mint from ~/.sigma-migration/env
- SIGMA_CONNECTION_ID: {your-snowflake-connection-id}
- SIGMA_FOLDER_ID: {your-folder-id}

Options
- Name prefix: Sisense Demo
- Auto-approve mid-pipeline questions: yes
- Parity: data should match exactly since both sides read from the same warehouse. Report any deltas.

Don't declare GREEN until the parity gate passes and the visual-QA loop passes.
```

For example:
<img src="assets/mfss_05b.png" width="800"/>

Claude reads the block, mints a fresh Sigma token from `~/.sigma-migration/env`, sources the Sisense credentials, and walks the phases end-to-end. The rest of the run is hands-off until a gate or decision point.

<aside class="negative">
<strong>NOTE:</strong><br> From here on, Claude Code asks for approval on every bash command the skill runs — and a full conversion fires dozens of them. For each prompt, pick option <code>2. Yes, and don't ask again</code> so Claude Code remembers that command pattern. After the first handful of approvals the prompts stop coming. Alternatively, press <code>Shift+Tab</code> once to switch to <code>auto mode on</code> for the rest of the session — fine for a trusted skill like this one, just don't use it for unknown code.
</aside>

<aside class="positive">
<strong>NOTE:</strong><br> The skill reuses the Sigma credentials written to <code>~/.sigma-migration/env</code> during Install and mints a fresh <code>SIGMA_API_TOKEN</code> from them at runtime. That's why the kickoff prompt says <code>mint from ~/.sigma-migration/env</code> instead of pasting a token. No manual Sigma-token wrangling per run.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Review the Output
Duration: 10

When the migration completes, Claude prints a final summary covering the whole pipeline — every phase's result, the visual-QA outcome, the hard-gate verdict, and the URLs of the new Sigma data model and workbook:

<img src="assets/mfss_07.png" width="800"/>

The summary walks through six phases plus a visual-QA pass:

- **Phase 0 — Discover.** Hits the Sisense REST API for the dashboard definition, every widget the dashboard references, the data model (ElastiCube or Live Connect) behind the widgets, table and column metadata, and dashboard filters. Writes everything to a workdir for the rest of the pipeline.
- **Phase 1 — Convert.** Translates each widget's JAQL expression into a Sigma data-model spec. Dashboard filters become Sigma controls. Calculated measures with formula-level JAQL become Sigma formulas. Custom-SQL ElastiCube tables are flagged alongside the generated Sigma equivalent.
- **Phase 2 — DM-reuse check.** Before posting a new data model, the skill scores existing Sigma DMs against this dashboard's tables/columns. On a strong match (≥0.6 overlap) it asks reuse-vs-new — skipping the build and avoiding sprawl across batch migrations.
- **Phase 3 — Data model POST.** Posts the new data model to Sigma, reads back the reassigned element IDs, and verifies every column resolves cleanly against your warehouse schema (no `type=error` columns). Multi-fact relationships with cardinality settings from the ElastiCube are honored.
- **Phase 4 — Workbook build.** Per Sisense widget (indicator / line / bar / pie / pivot / table / map / etc.), builds a matching Sigma element. Records the per-widget chart-kind decisions and any fallbacks for viz types Sigma doesn't natively support.
- **Phase 5 — Layout.** Maps Sisense's dashboard grid onto Sigma's 24-col grid. Dashboard filter bindings become Sigma controls wired to the relevant elements.
- **Phase 5b — Visual QA.** Renders the workbook's pages as PNGs and lints them — no overlapping tiles, no clipped widget titles, no dead zones, no orphan controls.
- **Phase 6 — Parity + hard gate.** Queries each Sigma element and compares against the Sisense widget's aggregation. 

Each widget reports `PASS within tolerance` or `FAIL`; the gate is GREEN only when all widgets pass. 

If the gate shows `BLOCKED — snow connection not configured`, the skill couldn't run the warehouse-side SQL comparison because the Snowflake CLI (`snow`) isn't configured on the machine — this is separate from the Sigma connection ID in the kickoff prompt. For a Live Connect demo where Sisense and Sigma both read the same live tables, this gate is confirmatory; the conversion is structurally correct. 

To unblock it fully, install and configure the [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`pip install snowflake-cli-labs`, then `snow connection add`) and re-run `verify_parity.py` directly.

Alternatively, if you have Homebrew installed: `brew install snowflake-cli-labs`.

Open the new workbook in Sigma to see the migrated dashboard:

<img src="assets/mfss_08.png" width="800"/>

Open the data model to see how the converter wired up the tables and relationships:

<img src="assets/mfss_09.png" width="800"/>

**Hand-polish items the skill flags rather than silently working around:**

- **Custom-SQL ElastiCube tables** — the skill surfaces the original SQL alongside the Sigma equivalent. Review the flagged items and confirm the generated formula captures the intended logic before signing off.
- **JAQL calculated measures with nested aggregations** — JAQL supports expressions like `Sum(If(...))` that have no single-step Sigma equivalent. The skill decomposes them into base columns + a Sigma formula and flags the result for review.
- **Multi-fact cardinality conflicts** — when two fact tables share a dimension at different granularities, the skill picks the correct join type and flags the relationship for confirmation. Review the data model's join cardinality before running parity.
- **BloX (custom JavaScript widgets)** — Sisense supports fully custom widget types via its BloX framework. These have no structural equivalent in Sigma and are flagged as manual items with a description of the original widget's visual intent.
- **Dashboard bookmarks / filter presets** — Sisense bookmarks that save a specific filter state are flagged as control defaults for hand-wiring.
- **Click-through navigation between dashboards** — when the target dashboard is also being migrated, the skill rewrites the click behavior to point at the new Sigma workbook. When the target isn't in scope, the click is flagged for manual wiring.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The skill finishes with a documented exit code and an explicit list of what it couldn't auto-translate — never a silent "looks good." Every gap surfaces as a follow-up item with a recommended fix, so you spend hand-polish time on the few items that need it instead of spot-checking every visualization for drift.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Scaling Up — Batch Conversion
Duration: 5

A single dashboard is the easy case. Real Sisense migrations involve dozens to hundreds of dashboards reading from a handful of shared ElastiCubes — and migrating them one-by-one through the converter loses the leverage of doing the planning work once. That's where the companion `sisense-assessment` skill comes in.

Point `sisense-assessment` at a Sisense instance and it inventories every dashboard, widget, and data model, scoring each on:

- **Per-dashboard complexity** — widget count, JAQL expression patterns, custom-SQL ElastiCube table flags, BloX widget count, filter/bookmark complexity, multi-fact relationship count
- **Converter-coverage classification** — every dashboard's widgets are scored against the *same* coverage tables `sisense-to-sigma` actually applies, so the readout reflects what the tool will really do — not a generic guess
- **Data model source** — ElastiCube vs Live Connect, warehouse reachability, custom-SQL table percentage
- **Usage signal** — view counts and recent-activity flags, used to flag cold and zero-view content for retirement instead of migration
- **Tag pills** — `migrate-first`, `easy-win`, `moderate`, `needs-gap-scout`, `retire` based on combined complexity + coverage + usage scores

The output is a Sigma-branded `readout.md` you can share with stakeholders, plus a ranked migration shortlist sorted by `value / (1 + cost)` — the cheapest, highest-value dashboards to convert first.

The shortlist becomes input to a **batch conversion plan** — `sisense-assessment` groups dashboards that share the same ElastiCube so one Sigma data model can serve a whole family of workbooks instead of producing N near-duplicate DMs. `sisense-to-sigma` consumes that plan in batch mode and runs the conversions concurrently.

Typical flow for a real migration engagement:

1. Run `sisense-assessment` against the target instance; review the shortlist with stakeholders.
2. Pick the top N dashboards to convert first — or drop the cold ones entirely.
3. Hand the batch plan to `sisense-to-sigma` and let it work through them.
4. Spot-check each output; file the inevitable gap items upstream.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Sigma's BI migration story is a process, not a single conversion. The assessment skill turns "how big is this migration?" from a guess into a defensible number — backed by per-dashboard effort estimates, converter-coverage scoring, and a retirement list for content nobody actually reads. That's the difference between a migration that ships and one that stalls in committee.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Common Issues and Fixes
Duration: 5

The following is a "grab bag" of things that might come up during real conversions, with the fix for each.

- **`python3 --version` reports 3.9.x and the skill refuses to run:**<br> macOS's stock Python is too old for the skill. Install Python 3.10+ via Homebrew (`brew install python@3.12`) or [python.org](https://www.python.org/downloads/), then use `python3.12 -m pip install` explicitly for any helpers.

- **Sisense REST calls return `401 Unauthorized`:**<br> The credentials in `~/.sigma-migration/sisense.env` are wrong or the account has been deactivated. Double-check `SISENSE_BASE_URL`, `SISENSE_EMAIL`, and `SISENSE_PASSWORD`, re-run the smoke test from the Install section, then retry the skill.

- **Discovery returns an empty widget list for a dashboard you can see in the UI:**<br> Either the dashboard OID is wrong (re-check the URL) or the account in `SISENSE_EMAIL` doesn't have permission to view that dashboard. Confirm the account has at least viewer access to the dashboard's folder.

- **Skill pauses at a "converter MCP gate" mid-run:**<br> The conversion delegates the data-model translation to a separate MCP server (`sigma-data-model-mcp`). If it isn't installed locally, the skill stops at the gate. Pick option `6. Chat about this` and tell Claude:<br>
 <code>Clone twells89/sigma-data-model-mcp into ~/Desktop/sigma-data-model-mcp for me, then run `npm install && npm run build` in that directory. Once the build is done, come back to the gate and pick option 1.</code><br>
 Claude runs the clone, install, and build, then returns to the gate.

- **`type=error` columns in the data model after Phase 3:**<br> A column the model declares can't be resolved against the warehouse schema. Usually a name mismatch between the Sisense ElastiCube table and the actual warehouse column. The Phase 3 verification output names the specific column — fix the column name in the warehouse or confirm the ElastiCube's custom SQL is the canonical source.

- **Custom-SQL ElastiCube table produces blank cells in the Sigma workbook:**<br> The converter generates a Sigma formula from the JAQL expression but can't verify the SQL logic without executing it. Review the flagged item in the manifest, confirm the SQL intent, and hand-author the Sigma equivalent on the affected element.

- **Multi-fact cardinality conflict reported at Phase 3:**<br> Sisense allows explicit many-to-many join cardinality between ElastiCube tables. The skill flags these and picks the most conservative join type (left outer). Review the data model's join cardinality, confirm it's correct for your dataset, and adjust if needed before running parity.

- **Schema not visible in Sigma after loading:**<br> Sigma's service role doesn't have access to the new schema. The DDL block in `Prepare the Demo Data` includes the `GRANT USAGE` and `GRANT SELECT` statements — if you skipped or modified them, run them now with the role name your Sigma connection actually uses (find it under `Administration` > `Connections`).

- **BloX widget flagged as "manual item":**<br> BloX widgets use arbitrary JavaScript and have no structural Sigma equivalent. The skill records the widget's title, dimensions, and the JSON props it was rendered with, so you have the context needed to hand-build a replacement. For widgets that display tabular data in a custom layout, a Sigma table element with conditional formatting is usually the right substitute.

- **SSL `CERTIFICATE_VERIFY_FAILED` from a corporate proxy:**<br> If your machine sits behind a TLS-inspection proxy (Netskope, Zscaler, Cisco Umbrella, Cloudflare WARP), Python may reject the rewritten cert chain even though `curl` works. Pull the proxy's root certificate out of Keychain and combine it with the macOS roots into a PEM Python can read, then point Python at it via `SSL_CERT_FILE` in `~/.sigma-migration/env`. (Same recipe as the other migration QuickStarts in this family.)

- **Parity gate shows `BLOCKED — snow connection not configured`:**<br> The skill's warehouse-side parity check (`verify_parity.py`) requires the Snowflake CLI (`snow`) — a separate tool from the Sigma connection ID you provided in the kickoff prompt. To unblock it: install the Snowflake CLI (`pip install snowflake-cli-labs`), run `snow connection add` to configure your Snowflake account credentials, then run `python3 scripts/verify_parity.py checks.json` from your skill workdir. For a Live Connect migration where Sisense and Sigma both read the same live warehouse tables, this gate is confirmatory — the conversion output is correct without it.

- **Many `Bash command — Contains shell syntax that cannot be statically analyzed — Do you want to proceed?` prompts during the run:**<br> The skill fires `eval "$(...)"` patterns to inject tokens dynamically. Click `1. Yes` on each — it's expected behavior, not a misconfiguration. After the run, you can use the `/fewer-permission-prompts` skill to scan the transcript and add those patterns to your `.claude/settings.local.json` so subsequent runs are silent.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What We've Covered
Duration: 5

What you built is less a single conversion and more a repeatable migration path. The skill took a Sisense dashboard — widgets, JAQL expressions, dashboard filters, data model relationships — and produced a Sigma data model, a workbook, and a row-level parity report against the live warehouse, all from a single structured prompt. No one rebuilt the dashboard by hand, and the parity numbers are evidence rather than hope.

The patterns worth carrying into your next migration:

- **Two skills, one workflow** — `sisense-assessment` scopes and prioritizes the instance; `sisense-to-sigma` converts and verifies. The same shape applies whether you're migrating one dashboard or every dashboard reading from a shared ElastiCube.
- **Live Connect is the straight path** — when Sisense already runs in Live Connect mode against your warehouse, there's no data to replicate. The skill reads the same warehouse columns from both sides and the parity check tightens to near-zero tolerance. ElastiCube models require one more step (verifying the ElastiCube's custom SQL logic translates cleanly), but the pipeline handles both.
- **Single-prompt kickoff** — once the warehouse data is in place and credentials are in `~/.sigma-migration/env`, the entire migration is one paste. The kickoff prompt reads the dashboard OID + warehouse coordinates + options in one shot, and the skill walks through every phase end-to-end without further interaction unless a gate genuinely needs your call.
- **Dashboard filters become Sigma controls** — every Sisense dashboard filter is translated to a Sigma control and wired to the relevant elements automatically. If you've built filter-driven dashboards in Sisense, the Sigma result is already interactive — no manual control wiring needed for standard filter types.
- **Parity as proof** — the Sisense-vs-Sigma comparison is what makes the result shippable. Without it you're spot-checking; with it you have evidence every measure lines up. When both sides read from the same live warehouse (as in this demo), parity is tight. A real engagement can apply a documented tolerance and still gate honestly.

A first-pass conversion produces a working starting point and a documented punch list, not a hand-polished workbook. The polish loop is short, and you know exactly what to look at. That's the migration approach you can scale across an entire Sisense instance.

**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
