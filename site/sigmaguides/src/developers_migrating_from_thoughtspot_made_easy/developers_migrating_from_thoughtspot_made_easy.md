author: pballai
id: developers_migrating_from_thoughtspot_made_easy
summary: developers_migrating_from_thoughtspot_made_easy
categories: developers
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags:
lastUpdated: 2026-07-01

# Migrating From ThoughtSpot Made Easy

## Overview
Duration: 5

A common ask from teams evaluating Sigma is migrating their ThoughtSpot footprint — usually to take advantage of all the amazing things Sigma offers. The conversion itself can be a blocker — and the part this QuickStart automates.

The usual ThoughtSpot-to-Sigma migration loop is rebuild-the-worksheet-by-hand, rewrite every search query and aggregate formula as a Sigma formula, recreate each Liveboard visualization, line the layout up against the source, then eyeball the numbers and hope nothing drifted in the translation. Done on a single Liveboard it's tedious. Across an entire org with dozens of Liveboards reading from a shared worksheet, it's the reason migration projects slip.

This QuickStart walks through a `Claude Code` skill called `thoughtspot-to-sigma` that automates the loop.

Point it at a ThoughtSpot worksheet (model); it exports the TML for the model and every Liveboard that reads it, translates the aggregate formulas and search-query filters into a Sigma data model and matching workbooks, mirrors each Liveboard's layout onto Sigma's grid, and runs a verification pass that compares every chart's numbers to ThoughtSpot's own `searchdata` API. It surfaces a punch list of anything it couldn't auto-translate — including chart kinds Sigma doesn't natively support (funnel, waterfall, treemap, heat-map, sankey all fall back to bar charts) — instead of silently producing a broken workbook.

For the demonstration, we'll run the skill end-to-end against the bundled `(Sample) Retail - Apparel` worksheet that ships with every ThoughtSpot trial tenant. You'll see the TML each phase produces, the converter's breakdown of how each search query mapped to a Sigma formula, the parity report against the live warehouse, and the resulting Sigma data model and workbook landed in your org — along with the gap list of items to hand-polish.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The skill runs the whole conversion — extract, translate, build, verify — and finishes with a documented parity check. The result is a working Sigma workbook on the warehouse plus the report that proves it matches the ThoughtSpot source, instead of a rebuilt-by-hand workbook you have to spot-check yourself.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> The migration is one-directional — ThoughtSpot is the source, Sigma is the target. ThoughtSpot worksheets often read from an in-memory <code>Falcon</code> engine rather than the warehouse directly — for the bundled sample worksheets, there is no warehouse table behind them at all. Sigma reads the warehouse live, so any Falcon-only data has to be extracted to a warehouse table first. The skill handles parity by running the comparison through ThoughtSpot's own <code>searchdata</code> API, so the numbers are always checked against what ThoughtSpot itself returns.
</aside>

<aside class="positive">
<strong>ABOUT THE SKILL CODE:</strong><br> The skill code used in this QuickStart is vendored into <code>sigmacomputing/quickstarts-public</code> for a stable reader experience — the version you clone matches what's captured in the screenshots and outputs below. The upstream skill at <a href="https://github.com/twells89/sigma-migration-skills">twells89/sigma-migration-skills</a> is actively evolving with new converter capabilities, bug fixes, and additional source-tool support. If you want the latest improvements after completing the QS, point your skill symlink at the upstream repo instead.
</aside>

<aside class="negative">
<strong>AI MODEL DIFFERENCES:</strong><br> Depending on the AI model and Claude Code version you're running, the exact prompt wording, option ordering, and intermediate messages may differ slightly from what's shown in this QuickStart. The substantive steps and decisions are the same — pick the option that matches the intent described, even if the label varies.
</aside>

### Target Audience
Sigma SEs, technical CSMs, and migration partners running ThoughtSpot-to-Sigma conversions — or scoping a batch migration with the companion `thoughtspot-assessment` skill.

### Prerequisites
- `Claude Code` installed (CLI or desktop).
- Sigma API credentials.
- ThoughtSpot tenant access with permission to export TML from the target worksheet and Liveboards. On an SSO trial, you'll grab a REST v2 bearer token from your logged-in browser session — no separate service account needed for a single demo run.
- `Python 3.10` or newer. macOS's stock system Python is typically 3.9 — older than the skill needs. If `python3 --version` reports anything below 3.10, install a newer interpreter via [Homebrew](https://brew.sh/) (`brew install python@3.12`) or [python.org](https://www.python.org/downloads/).
- `Node.js` (any recent LTS) for building the converter MCP. The conversion uses a separate MCP server, [`sigma-data-model-mcp`](https://github.com/twells89/sigma-data-model-mcp), cloned + built (`npm install && npm run build`) into `~/Desktop/sigma-data-model-mcp`. The skill prompts you to install it mid-conversion — no upfront work needed — but pre-build it if you'd rather skip the gate.
- A ThoughtSpot worksheet you're authorized to migrate. ThoughtSpot's bundled `(Sample)` worksheets are export-restricted by default — copy the sample into your own space first, or pick a worksheet you own.
- A warehouse reachable from Sigma (Snowflake, BigQuery, Databricks, Redshift, Postgres and others). For ThoughtSpot worksheets that read from Falcon (the in-memory engine) rather than a warehouse, you'll extract the data to your warehouse during `Prepare the Demo Data` — that step is covered below.

<aside class="negative">
<strong>NOTE:</strong><br> Use a non-production Sigma org for your first run. The skill creates real workbooks, and error-recovery paths may iterate via PUT to update them.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## The ThoughtSpot Migration Skill Family
Duration: 5

`thoughtspot-to-sigma` is one of two skills that ship together as a single repo (cloned in the next section). Most of this QuickStart focuses on the converter — but knowing where the assessment skill fits saves dead ends later when scoping a batch migration.

| Skill | Role | When to reach for it |
|-------|------|----------------------|
| `thoughtspot-assessment` | Scoping | Auditing a ThoughtSpot org before committing to a conversion plan. Emits a per-Liveboard complexity readout, a ranked migration shortlist (value/cost derived from `TS: BI Server` usage), a chart-type coverage scan, and a cluster plan that `thoughtspot-to-sigma` can consume in batch mode. |
| `thoughtspot-to-sigma` | Conversion | The subject of this QuickStart. Converts a single worksheet plus its Liveboards (or a batch via cluster plan) to a Sigma data model and matching workbooks with verified data parity. |

Here's how the two skills connect in a full migration — `thoughtspot-assessment` hands the converter a ranked shortlist and cluster plan, and `thoughtspot-to-sigma` produces the Sigma workbooks with a verified parity report:

<img src="assets/mfts_family_diagram.png" width="800"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Each skill does one thing well — scoping and conversion. Pick the smallest set that fits your job, and don't run the conversion until you've confirmed the data is somewhere Sigma can actually read.
</aside>

### Which skill for your situation

Not every migration needs both skills. Use the table below to map your scenario to the smallest set that fits.

In this QuickStart we're in the second row — one Liveboard on a Falcon-only sample worksheet — so we'll extract the data to Snowflake first, then run `thoughtspot-to-sigma`.

| Your situation | Skill(s) to use |
|----------------|-----------------|
| 1 Liveboard, worksheet already reads from your warehouse | `thoughtspot-to-sigma` |
| 1 Liveboard, Falcon-only worksheet with no warehouse copy of the data | Land the data in your warehouse first (covered in `Prepare the Demo Data`), then `thoughtspot-to-sigma` |
| 10+ Liveboards (any data source) | `thoughtspot-assessment` → `thoughtspot-to-sigma` in batch mode |
| Auditing ThoughtSpot sprawl without converting yet | `thoughtspot-assessment` only |

<aside class="negative">
<strong>NOTE:</strong><br> As the skill runs, you'll see filenames and log lines that reference internal phase numbers (e.g., <code>phase6-parity-thoughtspot.rb</code>). Those belong to the skill's own internal numbering — don't worry about matching them to this QuickStart's sections (<code>Bootstrap the Converter</code>, <code>Verifying Data Parity</code>). The full mapping is documented in the skill's <code>SKILL.md</code>.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Install and Configure the Skill
Duration: 10

First we need to clone the skill's GitHub repository, then run the setup scripts that capture your Sigma and ThoughtSpot credentials.

The two skills live in `sigmacomputing/quickstarts-public` under [thoughtspot-migration-skills/](https://github.com/sigmacomputing/quickstarts-public/tree/main/thoughtspot-migration-skills).

From a terminal, run each command below one at a time so you can confirm each step before moving on.

<aside class="positive">
<strong>NOTE:</strong><br> <code>~</code> in the commands below is shell shorthand for your home folder — <code>/Users/&lt;you&gt;</code> on macOS, <code>/home/&lt;you&gt;</code> on Linux. So <code>~/quickstarts-public</code> resolves to a <code>quickstarts-public/</code> folder directly inside your home directory.
</aside>

**Step 1: Create a local folder for the clone**<br>
We'll clone into this folder in the next step.

```copy-code
mkdir -p ~/quickstarts-public
```

**Step 2: Move into the new folder** so the next command runs in the right working directory.

```copy-code
cd ~/quickstarts-public
```

**Step 3: Clone the repo without pulling any files yet**<br>
The `--sparse` flag tells Git you'll choose which folders to fill in next. The trailing `.` clones into the current folder.

```copy-code
git clone --filter=blob:none --sparse https://github.com/sigmacomputing/quickstarts-public.git .
```

**Step 4: Fill in only the thoughtspot-migration-skills folder**<br>
Every other QuickStart asset in the repo stays empty on disk.

```copy-code
git sparse-checkout set thoughtspot-migration-skills
```

<img src="assets/mfts_01.png" width="800"/>

**Step 5: Symlink thoughtspot-to-sigma into the Claude skills folder**<br>
This lets Claude Code invoke `thoughtspot-to-sigma` as a skill.

```copy-code
ln -s ~/quickstarts-public/thoughtspot-migration-skills/thoughtspot-to-sigma ~/.claude/skills/thoughtspot-to-sigma
```

**Step 6: Symlink thoughtspot-assessment**<br>
Used to scope a ThoughtSpot org before conversion.

```copy-code
ln -s ~/quickstarts-public/thoughtspot-migration-skills/thoughtspot-assessment ~/.claude/skills/thoughtspot-assessment
```

Steps 5 and 6 should return with no error.

![divider](assets/horizonalline.png)

**Step 7: Install the one Python dependency the skill uses.**<br>
The skill's helpers read ThoughtSpot's TML (text-based modeling format) with `PyYAML`. Everything else the skill needs is in Python's standard library.

<aside class="negative">
<strong>NOTE:</strong><br> The skill requires Python 3.10 or newer. Check your version first with <code>python3 --version</code>. If it's older — macOS's stock Python is typically 3.9 — install a newer one via Homebrew and use it explicitly for the rest of this section: <code>brew install python@3.12</code>, then substitute <code>python3.12</code> wherever the steps below say <code>python3</code>. Avoid <code>pip3</code> as a shorthand — it can quietly resolve back to the old interpreter even after you install a new one.
</aside>

```copy-code
python3 -m pip install pyyaml
```

**Step 8: Capture your Sigma API credentials.**<br>
This script prompts for `SIGMA_BASE_URL`, `SIGMA_CLIENT_ID`, and `SIGMA_CLIENT_SECRET` and writes them into Claude's settings.

Run once per machine.

If you don't already have credentials, see [Configure API credentials in Sigma](https://help.sigmacomputing.com/sigma-computing/docs/configure-api-credentials-and-connectors-in-sigma) — the skill needs `API access` credentials, not embed.

```copy-code
ruby ~/.claude/skills/thoughtspot-to-sigma/scripts/setup.rb
```

<img src="assets/mfts_02.png" width="800"/>

**Step 9: Authenticate with ThoughtSpot.**<br>
ThoughtSpot's REST v2 API uses a bearer token. 

On an SSO trial without a local password, the quickest way to get one is to **open the token endpoint directly in the browser tab where you're already signed in to Thoughtspot**:

```copy-code
https://<your-tenant>.thoughtspot.cloud/api/rest/2.0/auth/session/token
```

The browser returns a small JSON payload:

<img src="assets/mfts_02a.png" width="800"/>

Copy the `token` value (the long string inside the quotes), then it in the code below to export both your tenant URL and the token in your terminal:

```copy-code
export TS_HOST="https://<your-tenant>.thoughtspot.cloud"
export TS_TOKEN="<paste-the-token-here>"
```

<aside class="positive">
<strong>NOTE:</strong><br> <code>export</code> is silent by design — the terminal returns nothing after each line, even when the command worked. To confirm both variables are set, run <code>echo "$TS_HOST"</code> and <code>echo "${TS_TOKEN:0:20}..."</code> — they should print your tenant URL and the first 20 characters of the token.
</aside>

<img src="assets/mfts_03.png" width="800"/>

<aside class="positive">
<strong>NOTE:</strong><br> Session tokens last for the duration of your browser session — typically about 24 hours. If a later command returns <code>401</code>, re-open the token URL in the browser and re-export <code>TS_TOKEN</code>. For a repeatable service identity (a token you don't have to refresh by hand), enable Trusted Authentication under <code>Develop</code> > <code>Customizations</code> > <code>Security Settings</code> and use the <code>get-ts-token.sh</code> helper shipped with the skill — see the skill's <code>SKILL.md</code> for that path.
</aside>

![divider](assets/horizonalline.png)

**Step 10: Verify the install.**<br>
This lists every model and Liveboard visible to your token — confirms both ThoughtSpot authentication and the skill's installation worked.

```copy-code
python3 ~/.claude/skills/thoughtspot-to-sigma/scripts/ts_discover.py
```

<img src="assets/mfts_04.png" width="800"/>

You should see your tenant's models and Liveboards listed. If you've copied the `(Sample) Retail - Apparel` worksheet into your own space (covered in the next section), it'll show too.

Verify Claude Code can invoke the skill by typing `claude` in your terminal to start Claude Code, then running:

```copy-code
claude
```

```copy-code
/thoughtspot-to-sigma
```

Claude should start reading the reference files and ask what worksheet you want to convert.

<!-- <img src="assets/mfts_05.png" width="800"/> -->

Pause at this response:

<!-- <img src="assets/mfts_06.png" width="800"/> -->

Before going any further, we need to prepare the data the worksheet uses.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare the Demo Data
Duration: 15

Data prep for a ThoughtSpot migration has an extra step compared to other source tools — and it's the unique-to-ThoughtSpot moment in this QuickStart.

ThoughtSpot's bundled `(Sample)` worksheets read from `Falcon`, ThoughtSpot's in-memory engine. There is no warehouse table behind them. Sigma reads the warehouse live, so any Falcon-only data has to be extracted to a warehouse table first. For real-world migrations the same pattern applies any time a ThoughtSpot worksheet's data lives only in Falcon and not in a connected warehouse.

Data prep has two halves:

1. **ThoughtSpot side — nothing to do here for this QuickStart.** We've already pulled the `(Sample) Retail - Apparel` data out of Falcon (22,425 rows of apparel sales spanning February 2021 through June 2026) and hosted the resulting CSV in Amazon S3. The Snowflake `COPY INTO` in the next step reads it from S3 directly — no local download needed.

<aside class="positive">
<strong>NOTE:</strong><br> For your own real-world migrations of Falcon-only worksheets, ThoughtSpot's REST v2 API exposes a <code>searchdata</code> endpoint that runs a TML search against a model and returns the underlying rows. The skill ships a <code>ts_lib.searchdata()</code> helper that wraps the endpoint — see the skill's <code>SKILL.md</code> for the pattern. You won't need it for this QuickStart.
</aside>

2. **Sigma side (this section)** — the extracted data needs to live in a warehouse Sigma can read. We'll land it in Snowflake.

The schema is a single denormalized fact table — `TS_APPAREL_FACT` — because the ThoughtSpot sample worksheet is already denormalized at the source. There are no separate dimension tables to recreate. Five columns:

- `ITEM_TYPE` — clothing category (Bags, Dresses, Jackets, Pants, Shirts, Shorts, Sweaters, etc.). 15 distinct values.
- `PRODUCT` — specific product within an item type. 345 distinct values.
- `MONTH` — Unix epoch seconds at month-start (e.g., `1612137600` = `2021-02-01 UTC`). ThoughtSpot's `searchdata` endpoint exports dates as epoch seconds; we store them as `NUMBER(10,0)` and convert to a real date in Sigma at the workbook layer.
- `QUANTITY_PURCHASED` — integer.
- `SALES` — decimal, two-place currency precision. Total across the file is `$970,696,156.87`, which is the parity number every chart will reconcile against.

```copy-code
USE ROLE ACCOUNTADMIN;
USE WAREHOUSE COMPUTE_WH;

CREATE DATABASE IF NOT EXISTS QUICKSTARTS;
CREATE SCHEMA  IF NOT EXISTS QUICKSTARTS.TS_RETAIL_APPAREL;
USE SCHEMA QUICKSTARTS.TS_RETAIL_APPAREL;

-- CSV format and external stage pointing at the public S3 bucket.
CREATE OR REPLACE FILE FORMAT csv_format
  TYPE = CSV
  FIELD_DELIMITER = ','
  SKIP_HEADER = 1
  FIELD_OPTIONALLY_ENCLOSED_BY = '"'
  NULL_IF = ('', 'NULL');

CREATE OR REPLACE STAGE ts_apparel_stage
  URL = 's3://sigma-quickstarts-main/thoughtspot/'
  FILE_FORMAT = csv_format;

-- Single denormalized fact table. snake_case_UPPER is the converter's canonical
-- warehouse naming convention; the CSV header already conforms, so no renames
-- are needed when the skill asks how the warehouse maps to the worksheet.
CREATE OR REPLACE TABLE TS_APPAREL_FACT (
  ITEM_TYPE          VARCHAR,
  PRODUCT            VARCHAR,
  MONTH              NUMBER(10,0),
  QUANTITY_PURCHASED NUMBER(38,0),
  SALES              NUMBER(20,2)
);

-- Load the CSV from S3.
COPY INTO TS_APPAREL_FACT
  FROM @ts_apparel_stage/APPAREL_FACT.csv
  ON_ERROR = ABORT_STATEMENT;

-- Grant Sigma's service role visibility on the new schema and its tables.
-- Substitute SIGMA_SERVICE_ROLE with the role your Sigma connection actually
-- uses if it differs — you can confirm it in Sigma under Administration >
-- Connections by clicking your Snowflake connection.
GRANT USAGE  ON DATABASE QUICKSTARTS                                  TO ROLE SIGMA_SERVICE_ROLE;
GRANT USAGE  ON SCHEMA   QUICKSTARTS.TS_RETAIL_APPAREL                TO ROLE SIGMA_SERVICE_ROLE;
GRANT SELECT ON ALL    TABLES IN SCHEMA QUICKSTARTS.TS_RETAIL_APPAREL TO ROLE SIGMA_SERVICE_ROLE;
GRANT SELECT ON FUTURE TABLES IN SCHEMA QUICKSTARTS.TS_RETAIL_APPAREL TO ROLE SIGMA_SERVICE_ROLE;

-- Sanity-check the load against ThoughtSpot's parity numbers.
SELECT
  COUNT(*)                                AS ROW_COUNT,    -- expected 22,425
  COUNT(DISTINCT ITEM_TYPE)               AS ITEM_TYPES,   -- expected 15
  COUNT(DISTINCT PRODUCT)                 AS PRODUCTS,     -- expected 345
  TO_CHAR(SUM(SALES), '$999,999,999.99')  AS TOTAL_SALES   -- expected $970,696,156.87
FROM TS_APPAREL_FACT;
```

<aside class="positive">
<strong>NOTE:</strong><br> <code>MONTH</code> is stored as Unix epoch seconds rather than a Snowflake <code>DATE</code> because that's the shape ThoughtSpot's <code>searchdata</code> API returns. Sigma converts it to a real date in the workbook with <code>DateFromUnix(MONTH)</code> — that conversion is part of what the skill writes into the converted data model. Storing the raw epoch in the warehouse keeps the round-trip lossless and matches the parity numbers ThoughtSpot itself returns.
</aside>

If the load completes cleanly, the sanity-check query at the bottom should return `22425 / 15 / 345 / $970,696,156.87`. Any mismatch means either a `COPY` partial-load error (check Snowflake's load history) or a different S3 file than expected:

<img src="assets/mfts_07.png" width="800"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The Falcon-to-warehouse extract is the moment ThoughtSpot data becomes governed warehouse data. Once it's landed, every downstream tool — Sigma, dbt, your own SQL — reads from the same source of truth instead of a private in-memory copy. The migration step doubles as a data-architecture upgrade.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare the Sigma Target Folder
Duration: 2

<!--
SECTION INTENT
- Same as Power BI / Qlik QS: create a Sigma folder, grab its ID from the URL, hold it for the next step.
- Sigma URL slug format note (22-char base62, not 36-char UUID).
- Reusable across the whole migration QS family — could eventually be a shared snippet.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Provide the Source and Target Inputs
Duration: 3

<!--
SECTION INTENT
- Mirror Power BI / Qlik structure: source picker (TS tenant URL / TML file / Assessment first), target picker (folder ID), three values (TS_HOST + token, model ID, Sigma folder ID).
- ThoughtSpot equivalents: workspace = TS org, report = TS Liveboard, source = TS worksheet/model, target = Sigma folder ID.
- Mention the `--model-tml` + `--liveboard-tml` offline mode using bundled fixtures as a quick demo fallback.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Map the Warehouse to ThoughtSpot
Duration: 5

<!--
SECTION INTENT
- Mirror Power BI / Qlik: source backing prompt (TS in-memory Falcon vs warehouse), Sigma connection ID, db/schema, naming-match prompt.
- ThoughtSpot nuance: model_tables[].fqn is a TS guid, not a qualified warehouse name. The skill needs TS_DB + TS_SCHEMA env vars to resolve real warehouse paths.
- For our (Sample) Retail - Apparel demo: warehouse home is QUICKSTARTS.TS_RETAIL_APPAREL.TS_APPAREL_FACT (we built it in Prepare Demo Data).
- Renames block if needed (TJ's extract already lands columns in snake_case_UPPER — likely empty).
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bootstrap the Converter
Duration: 7

<!--
SECTION INTENT
- Mirror Power BI / Qlik structure: 5 autonomous phases + MCP gate + build-commit gate + final DM landing.
- Same sigma-data-model-mcp dependency (general-purpose converter MCP — `convert_thoughtspot_to_sigma` is the per-source tool exposed).
- Step 2.5 — DM reuse check (mirrors Power BI Phase 3.5 / Tableau Phase 1.5): ts-dm-signature.py + find-or-pick-dm.rb. Document the score threshold (≥ 0.6 = ASK reuse-vs-new, < 0.6 = POST new).
- approval prompts callout (Shift+Tab + dynamic-shell-syntax Yes prompts) — same caveat applies.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbook Summary
Duration: 5

<!--
SECTION INTENT
- Mirror Power BI Workbook Summary: resolved-fields breakdown, build-decision prompt, WHY IT MATTERS framing on honest skill behavior.
- ThoughtSpot-specific resolution buckets: aggregate formulas (sum(x)/sum(y)) → DM metrics, search-query filters ([Col]='v') → element list-filters, TML sorts (sort by [Col]) → spec sort order, chart-type mapping (KPI/COLUMN/BAR/LINE/PIE→donut/PIVOT/TABLE/AREA/SCATTER/LINE_COLUMN→combo/GEO→region-map).
- (Sample) Retail - Apparel demo summary: 1 DM (single fact) + 1 workbook (title, 2 list controls, 2 KPIs, 2 bars, 1 line). Net Sales $970,696,156.87, 15 item types, 345 products.
- Unsupported chart kinds → bar-chart fallback (funnel/waterfall/treemap/heat-map/sankey).
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Suggested Next Steps
Duration: 3

<!--
SECTION INTENT
- Layout polish via apply_layouts.py (runs LAST in the pipeline — a bare PUT wipes spec.layout).
- Manual fix-up for any unsupported chart kinds (funnel/waterfall/treemap/heat-map/sankey).
- Cross-link to Sigma's AI Assistant + Actions for post-migration enhancement.
- RLS porting via apply_sigma_rls.py if the source had row-level security (not exercised in our demo).
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Verifying Data Parity
Duration: 10

<!--
SECTION INTENT
- Phase 6: parity check between ThoughtSpot and Sigma.
- ThoughtSpot equivalent of Power BI's executeQueries: ts_lib.searchdata (REST v2) for live parity, or warehouse SQL re-aggregation in offline mode.
- Two-pass parity orchestration: phase6-parity-thoughtspot.rb PASS 1 (plan + emit fetch instructions), PASS 2 --finalize (sentinel write), then assert-phase6-ran.rb must exit 0 before declaring GREEN.
- (Sample) Retail - Apparel parity from TJ's run: Total Sales $970,696,156.87 matches TS, controls populate 15 item types / 345 products.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Scaling Up — Batch Conversion
Duration: 5

<!--
SECTION INTENT
- thoughtspot-assessment workflow: inventory a TS org, score per-Liveboard complexity, emit ranked shortlist + cluster plan.
- Value/cost math derived from `TS: BI Server` usage (TS's internal usage tracker).
- chart-type coverage scan — flags Liveboards with unsupported chart kinds.
- HTML readout via render_html.py.
- Discovery speed callout: dependent-API-first + parallel + disk-cached TML export = 19.2s → 1.7s cold / 0.2s warm (matters for 200+ Liveboard estates).
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Common Issues and Fixes
Duration: 5

<!--
SECTION INTENT
- MCP gate (same as Power BI / Qlik / Tableau).
- Python 3.10+ requirement.
- Node.js requirement for sigma-data-model-mcp.
- ThoughtSpot-specific:
  - Falcon-only worksheets (no warehouse table) — extract via searchdata REST endpoint first (covered in Prepare Demo Data).
  - TS SSO trial token expiry — re-grab from /api/rest/2.0/auth/session/token.
  - TLS verification quirk on trial tenants — Python helpers use unverified SSL context.
  - TS Cloud edge WAF rejects User-Agent-less requests with HTML 403 — ts_lib always sends a UA.
  - System/sample objects can't be exported as TML (only own content) — copy/clone the sample to your own space first if you want to TML-export.
  - PATCH /v2/workbooks/{id} silently no-ops for renames — use PATCH /v2/files/{id} {"name": ...} instead.
- Snowflake role grants for the new schema.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What We've Covered
Duration: 5

<!--
SECTION INTENT (write last)
- Same shape as the Power BI / Tableau / Qlik Made Easy QS closers: not a checklist of tasks, but a narrative on what was built, why it matters, and what techniques are reusable.
- ThoughtSpot-specific angle: Falcon→warehouse extraction as the conceptual handoff between TS's in-memory model and Sigma's warehouse-native model. Once the data lives in the warehouse, the same pattern works for any source tool.
-->

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
