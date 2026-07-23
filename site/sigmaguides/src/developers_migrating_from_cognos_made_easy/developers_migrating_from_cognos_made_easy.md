author: pballai
id: developers_migrating_from_cognos_made_easy
summary: developers_migrating_from_cognos_made_easy
categories: developers
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags:
lastUpdated: 2026-07-25

# Migrating From Cognos Made Easy

## Overview
Duration: 5

A common ask from teams evaluating Sigma is migrating their IBM Cognos Analytics footprint — usually to trade a server-administered, report-centric platform for a live-query workspace their analysts can actually drive. The conversion itself is often the thing that stalls the project.

The typical Cognos-to-Sigma migration loop is rebuild-the-data-module-by-hand, rewrite every Cognos expression and calculated measure as a Sigma formula, recreate each report's visualizations and layout, then eyeball the numbers and hope nothing drifted in the translation. Done on a single report it's tedious. Across a real Cognos estate — typically dozens of reports reading from shared packages and data modules — it's the reason migration projects slip.

This QuickStart walks through a `Claude Code` skill called `cognos-to-sigma` that automates the loop.

Point it at a Cognos report; it discovers the report's visualizations and the data module or package behind them via the Cognos REST API. It translates each visualization's expression into a Sigma formula, builds a Sigma data model from the warehouse tables the data module points at, mirrors the report layout on Sigma's grid, and runs a parity pass comparing Sigma's results against the live warehouse. It surfaces a punch list of anything it couldn't auto-translate — instead of silently producing a broken workbook.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The skill runs the whole conversion — discover, translate, build, verify — and finishes with a documented parity check. The result is a working Sigma workbook on the warehouse plus the report that proves it matches the Cognos source, instead of a rebuilt-by-hand workbook you have to spot-check yourself.
</aside>

### What else this enables

A pure lift-and-shift is the floor, not the ceiling. The same skill family supports three follow-on moves that turn a migration into an upgrade:

- **Dedup before you migrate.** Most Cognos estates carry years of report sprawl — near-identical reports built by different teams across overlapping packages. The assessment skill flags reports that are roughly 90% the same and recommends merging them before conversion. You move 200 reports instead of 800, and every downstream conversation is simpler. Pair this with usage data the assessment pulls (who views what, how often) and you can confidently retire cold content rather than carry it forward.

- **Enhance, don't just translate.** Many Cognos reports are really input-driven workflows in disguise — a parameterized report whose filters are reset each morning by a request to the admin is actually an analytics app waiting to happen. After the lift-and-shift, the skill can suggest replacing those patterns with native Sigma constructs: controls for interactive filtering, input tables for write-back, Sigma Assistant for natural-language analysis. The result isn't "the old report, in a new tool" — it's "the workflow, finally done right."

- **Audit your source as a side effect.** The parity check that closes the run isn't just a confidence test on the migration — it's a fresh pair of eyes on the source platform's math. Sigma customers have caught multi-year calculation errors during their first migration run because the parity gate flagged a Sigma vs source mismatch and the source turned out to be wrong. Plan the migration as your final audit of the legacy system.

### Sample report

For the demonstration, we'll convert a report called `{REPORT_NAME}` — {N} visualizations built on a {data module / package} that reads from Snowflake. You'll see the discovery artifacts each phase produces, the converter's breakdown of how each Cognos expression mapped to a Sigma formula, the parity report against the live warehouse, and the resulting Sigma data model and workbook landed in your org — along with the gap list of items to hand-polish.

<!-- <img src="assets/mfcg_01.png" width="800"/> -->

<aside class="positive">
<strong>ABOUT THE SKILL CODE:</strong><br> The skill code used in this QuickStart is vendored into <code>sigmacomputing/quickstarts-public</code> for a stable reader experience — the version you clone matches what's captured in the screenshots and outputs below. The upstream skill at <a href="https://github.com/twells89/sigma-migration-skills/tree/main/plugins/cognos-to-sigma">twells89/sigma-migration-skills</a> is actively evolving with new converter capabilities, bug fixes, and additional source-tool support. If you want the latest improvements after completing the QS, point your skill symlink at the upstream repo instead.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> The migration is one-directional — Cognos is the source, Sigma is the target. Sigma reads the warehouse live, so the conversion's accuracy depends on the warehouse tables behind your Cognos data module or package being reachable from a Sigma connection. For data module sources, the skill discovers the tables and joins from the module definition and reconciles them back to the underlying warehouse columns. Custom-SQL query subjects are surfaced alongside the Sigma equivalent and flagged for review. Parity is checked against the warehouse-resolved numbers, so any Cognos caching or aggregation drift surfaces as an explicit row-level diff rather than getting buried.
</aside>

<aside class="negative">
<strong>AI MODEL DIFFERENCES:</strong><br> Depending on which AI, model, and version you're running, the exact prompt wording, option ordering, and intermediate messages may differ slightly from what's shown in this QuickStart. The substantive steps and decisions are the same — pick the option that matches the intent described, even if the label varies.
</aside>

### Target Audience
Sigma SEs, technical CSMs, and migration partners running Cognos-to-Sigma conversions — or scoping a batch migration with the companion `cognos-assessment` skill.

### Prerequisites
- `Claude Code` installed (CLI or desktop).
- Sigma API credentials.
- An IBM Cognos Analytics instance with an account that has at least read access to reports and data modules.
- `Python 3.10` or newer. macOS's stock system Python is typically 3.9 — older than the skill needs. If `python3 --version` reports anything below 3.10, install a newer interpreter via [Homebrew](https://brew.sh/) (`brew install python@3.12`) or [python.org](https://www.python.org/downloads/).
- `Node.js` (any recent LTS) for the converter MCP.
- A warehouse reachable from Sigma (Snowflake, BigQuery, Databricks, Redshift, Postgres, and others) that your Cognos data module also queries.

<aside class="negative">
<strong>NOTE:</strong><br> Use a non-production Sigma org for your first run. The skill creates real workbooks, and error-recovery paths may iterate via PUT to update them.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## The Cognos Migration Skill Family
Duration: 5

`cognos-to-sigma` is one of two skills that ship together as a single repo (cloned in the next section). Most of this QuickStart focuses on the converter — but knowing where the assessment skill fits avoids dead ends later when scoping a batch migration.

| Skill | Role | When to reach for it |
|-------|------|----------------------|
| `cognos-assessment` | Scoping | Auditing a Cognos instance before committing to a conversion plan. Emits a per-report complexity readout (visualization-type mix, expression convertibility, data module vs package flags, join complexity, filter/parameter complexity), usage signal from Cognos's activity API, and a value/cost-ranked migration shortlist that `cognos-to-sigma` can consume. Read-only — only `GET`s against the Cognos API. |
| `cognos-to-sigma` | Conversion | The subject of this QuickStart. Converts a single Cognos report (or a batch via shortlist) to a Sigma data model and matching workbook with verified row-level parity. |

Here's how the two skills connect in a full migration — `cognos-assessment` hands the converter a ranked shortlist, and `cognos-to-sigma` produces the Sigma workbooks with a verified parity report:

<!-- <img src="assets/mfcg_family_diagram.png" width="800"/> -->

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Each skill does one thing well — scoping and conversion. Pick the smallest set that fits your job, and don't run the conversion until you've confirmed the data is somewhere Sigma can actually read.
</aside>

### Which skill for your situation

Not every migration needs both skills. Use the table below to map your scenario to the smallest set that fits.

In this QuickStart we're in the first row — one Cognos report whose data module reads directly from the same Snowflake warehouse Sigma will connect to.

| Your situation | Skill(s) to use |
|----------------|-----------------|
| One report to migrate, warehouse already in Sigma | `cognos-to-sigma` only |
| Need to scope your full estate first | `cognos-assessment` → `cognos-to-sigma` |
| Unknown data model complexity | Start with `cognos-assessment` to surface custom-SQL and multi-fact flags before committing |
| Batch migration from a shortlist | `cognos-assessment` produces the shortlist; `cognos-to-sigma` consumes it |

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Install the Skill
Duration: 10

{PLACEHOLDER — mirror the Install section from the Sisense QS once TJ's Cognos plugin path is confirmed in the monorepo.}

The skill ships from `sigmacomputing/quickstarts-public`. Clone it once and the Claude Code symlink makes both skills available as slash commands.

### Clone the repo

```copy-code
git clone https://github.com/sigmacomputing/quickstarts-public.git ~/Desktop/quickstarts-public
```

### Register the skills

```copy-code
{COGNOS_SKILL_SYMLINK_COMMANDS}
```

Confirm both skills are registered:

```copy-code
{COGNOS_SKILL_VERIFY_COMMAND}
```

<!-- <img src="assets/mfcg_02.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Configure Credentials
Duration: 10

{PLACEHOLDER — mirror the credential setup from the Sisense QS, adapted for Cognos auth.}

The skill reads credentials from `~/.sigma-migration/cognos.env`. Create the file:

```copy-code
COGNOS_BASE_URL={your-cognos-base-url}
COGNOS_USERNAME={your-cognos-username}
COGNOS_PASSWORD={your-cognos-password}
COGNOS_NAMESPACE={your-cognos-namespace}
```

And Sigma's credentials in the shared env file:

```copy-code
SIGMA_API_TOKEN={your-sigma-api-token}
SIGMA_BASE_URL=https://aws-api.sigmacomputing.com
```

### Smoke-test the Cognos connection

```copy-code
{COGNOS_AUTH_SMOKE_TEST_COMMAND}
```

<!-- <img src="assets/mfcg_03.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare Demo Data
Duration: 10

{PLACEHOLDER — depends on Phil's trial instance and TJ's confirmed demo schema for Cognos.}

The demo uses a sample Cognos data module backed by Snowflake. Before running the skill, load the source tables into Snowflake so both Cognos and Sigma read from the same warehouse.

### Create the schema

```copy-code
CREATE DATABASE IF NOT EXISTS QUICKSTARTS;
CREATE SCHEMA IF NOT EXISTS QUICKSTARTS.COGNOS_DEMO;
```

### Load the tables

{PLACEHOLDER — DDL and COPY INTO statements once TJ confirms the demo dataset.}

<!-- <img src="assets/mfcg_04.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Build the Demo Report
Duration: 15

{PLACEHOLDER — walk through building the source Cognos report Phil will migrate. Steps depend on Phil's trial instance.}

With the warehouse data in place, build the demo report in Cognos Analytics so there's a live source to convert.

### Connect Cognos to Snowflake

{PLACEHOLDER — data source connection steps for Phil's trial.}

### Create the data module

{PLACEHOLDER — tables, joins, calculated items.}

### Build the report visualizations

{PLACEHOLDER — visualization-by-visualization walkthrough.}

<!-- <img src="assets/mfcg_05.png" width="800"/> -->

<!-- <img src="assets/mfcg_06.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare the Sigma Target Folder
Duration: 5

The skill lands workbooks in a Sigma folder. Create a dedicated folder now so the output is organized from the start.

In Sigma, navigate to `Home` and create a new folder named `Cognos Migration`. Copy the folder's ID from the URL — you'll pass it to the skill in the next section.

The folder ID appears in the URL after `/folder/`:

```copy-code
https://app.sigmacomputing.com/{your-org}/folder/{your-folder-id}
```

<!-- <img src="assets/mfcg_07.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Run the Conversion
Duration: 20

With credentials configured and the demo report built, run the converter. Open Claude Code and invoke the skill with the kickoff prompt below — substituting your report ID, connection ID, and folder ID.

### Find your Cognos report ID

{PLACEHOLDER — how to locate the report ID from the Cognos Analytics URL or API.}

### Kickoff prompt

```copy-code
Run /cognos-to-sigma on the following. Walk every phase in SKILL.md end-to-end and stop only if a hard gate fails.

Cognos
- Credentials sourced from ~/.sigma-migration/cognos.env (COGNOS_BASE_URL, COGNOS_USERNAME, COGNOS_PASSWORD, COGNOS_NAMESPACE)
- Report ID: {your-report-id}

Warehouse — same on both sides
- Cognos reads from Snowflake via data module — database QUICKSTARTS, schema COGNOS_DEMO
- Sigma reads from Snowflake — same schema QUICKSTARTS.COGNOS_DEMO

Sigma
- SIGMA_API_TOKEN = mint from ~/.sigma-migration/env
- SIGMA_CONNECTION_ID: {your-snowflake-connection-id}
- SIGMA_FOLDER_ID: {your-folder-id}

Options
- Name prefix: Cognos Demo
- Auto-approve mid-pipeline questions: yes
- Parity: data should match exactly since both sides read from the same warehouse. Report any deltas.

Don't declare GREEN until the parity gate passes and the visual-QA loop passes.
```

<!-- <img src="assets/mfcg_08.png" width="800"/> -->

The skill runs through five phases: **Discover** → **Translate** → **Build** → **Verify** → **Report**. Each phase emits a progress summary — watch for any `WARN` or `MANUAL` flags, which land on the gap list rather than stopping the run.

<!-- <img src="assets/mfcg_09.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Review the Output
Duration: 10

When the skill completes, it prints a migration summary — the count of visualizations converted, any items flagged for manual review, and the parity result.

{PLACEHOLDER — actual summary output from Phil's run.}

<!-- <img src="assets/mfcg_10.png" width="800"/> -->

### The Sigma workbook

Open the workbook in your Sigma folder and compare it against the source Cognos report. The layout mirrors the source, and each visualization is backed by the translated formula.

<!-- <img src="assets/mfcg_11.png" width="800"/> -->

### The Sigma data model

The skill also creates a data model in the same folder — the tables, joins, and calculated columns derived from the Cognos data module.

<!-- <img src="assets/mfcg_12.png" width="800"/> -->

### The gap list

Any visualization or expression the skill couldn't auto-translate lands in the gap list — with the source expression, the reason it was flagged, and a suggested Sigma equivalent where one exists. Work through the list to finish the migration.

{PLACEHOLDER — gap list example from Phil's run.}

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

{PLACEHOLDER — write after all body sections are complete and Phil has run through the full flow.}

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
