author: pballai
id: developers_migrating_from_tableau_made_easy
summary: developers_migrating_from_tableau_made_easy
categories: developers
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Default
lastUpdated: 2026-06-20

# Migrating From Tableau Made Easy

## Overview
Duration: 5

This QuickStart walks through migrating a single Tableau dashboard to a Sigma workbook using `Claude Code` and the `tableau-to-sigma` skill. You'll point Claude at a Tableau dashboard URL and watch it discover the workbook structure, build (or reuse) a Sigma data model, generate the workbook spec, position the layout to mirror the source dashboard, and verify chart-level data parity against Tableau before declaring done.

The skill is a structured set of Ruby scripts and a `SKILL.md` runbook that Claude follows phase-by-phase. It's been hardened against the four most common conversion regressions — silent Phase 6 skip, orphan workbooks left in the customer's `My Documents`, runtime errors past the gate, and the auto-stack single-column layout fallback. A final hard-gate script (`assert-phase6-ran.rb`) refuses to declare success unless every check passes.

<!-- tts_arch.png -->

<aside class="positive">
<strong>IMPORTANT:</strong><br> The migration is one-directional — Tableau is the source, Sigma is the target. Sigma is always the live warehouse; Tableau may be reading a frozen <code>.hyper</code> extract. Live-vs-extract drift is expected and the skill handles it via <code>--extract-mode</code> parity (see Phase 6).
</aside>

For an introduction to the Sigma side of the workbook spec, see [Sigma Workbooks](https://help.sigmacomputing.com/docs/workbooks-overview) in the help center.

### Target Audience
Sigma SEs, technical CSMs, and migration partners running 1:1 Tableau-to-Sigma conversions for customers — or scoping a batch migration with the companion `tableau-assessment` skill.

### Prerequisites

- **Claude Code** installed (CLI or desktop). The skill ships as a directory under `~/.claude/skills/tableau-to-sigma/`.
- **Sigma API credentials** — client ID and secret. Run `ruby scripts/setup.rb` once to write them to `~/.claude/settings.json`.
- **Tableau access** — either the Tableau MCP tools loaded in your Claude session (preferred) or a Tableau Personal Access Token via `ruby scripts/setup-tableau.rb` (PAT mode fallback). PAT mode is required when you need the workbook's `.twb` XML (most conversions).
- A target Tableau workbook you're authorized to convert. Sample dashboards live at [Tableau Public's docs profile](https://public.tableau.com/app/profile/tableau.docs.team) if you don't have one handy.
- The source workbook's underlying tables must be reachable via a Sigma connection (Snowflake, BigQuery, Databricks, Redshift, Postgres, etc.). If the data only lives inside a Tableau extract, land it first with the `tableau-vds-to-snowflake` sibling skill — see the decision tree in the next section.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Use non-production resources when running the QuickStart for the first time. The skill creates a real Sigma workbook (and, in error-recovery scenarios, may iterate via PUT to update it).
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

### What You'll Learn

- How to invoke the `tableau-to-sigma` skill from Claude Code with a single dashboard URL.
- What each conversion phase does — discovery, gap scan, DM reuse check, spec build, parity verification.
- How to read the gap report and accept or override the proposed Sigma translations.
- How the four hard-gate checks (parity ran, no orphans, no runtime errors, layout applied) prevent silent regressions.
- When to fall back to a hand-written layout vs the auto-layout from `build-dashboard-layout.rb`.

### What You'll Build
A live Sigma workbook that visually mirrors a Tableau dashboard, sourced from your warehouse via a Sigma data model, with every chart's data verified against the Tableau view CSV.

<!-- tts_layout_grid.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## The Tableau Migration Skill Family
Duration: 5

`tableau-to-sigma` is the centerpiece, but three skills work hand-in-hand to cover the full migration lifecycle — from site inventory at the start through ongoing data refresh after cutover. Knowing which skill to reach for at each step saves hours of dead ends.

- `tableau-assessment` — *Phase 0: scoping*. Point it at a Tableau Cloud site and it inventories everything in ~90 seconds — environment counts, licenses, datasource mix, refresh history, per-workbook usage, per-workbook complexity (via a `.twb` gap-scan), and a value/cost-ranked migration shortlist. Run this BEFORE you commit to a conversion plan; the output tells you which workbooks convert clean today, which need redesign, and which to leave on Tableau. Complements (does not replace) Hakkoda's deeper Assessment App. Also emits the cluster plan that `tableau-to-sigma` consumes for batch runs.
- `tableau-to-sigma` — *Phases 1–6: the conversion*. The subject of this QuickStart. Takes a single workbook URL (or a cluster plan from `tableau-assessment`) and produces a live Sigma workbook with verified parity. Hardened against the four most-common silent regressions via a four-gate finalize check.
- `tableau-vds-to-snowflake` — *Phase 0.5: data landing, when needed*. Extracts a published Tableau datasource via the VizQL Data Service (VDS) API and lands it in a Snowflake table via a stored procedure + External Access Integration, optionally scheduled for ongoing refresh with a Snowflake Task. Reach for this when a customer's data lives *only* inside Tableau (extracts, Tableau Prep outputs, Web Data Connector feeds) and isn't already in the warehouse Sigma reads. Sigma needs warehouse-native data; this skill is the bridge.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The decision tree below tells you when each skill applies. Don't run <code>tableau-to-sigma</code> until you've confirmed the underlying warehouse tables are reachable by Sigma — and don't run <code>tableau-vds-to-snowflake</code> unless you actually need to (most customer data is already in the warehouse).
</aside>

![divider](assets/horizonalline.png)

**Decision tree — which skill, when:**

- **Migrating 1 workbook, data is in the warehouse** → `tableau-to-sigma` only. Skip assessment.
- **Migrating 1 workbook, data is in a Tableau extract or not in the warehouse** → `tableau-vds-to-snowflake` first to land the data, then `tableau-to-sigma`.
- **Migrating 10+ workbooks (any data source)** → start with `tableau-assessment` to inventory, classify, and cluster. Then run `tableau-to-sigma` in batch mode using the emitted cluster plan. Add `tableau-vds-to-snowflake` per-datasource where warehouse coverage is missing.
- **Auditing BI sprawl or scoping a migration without committing** → `tableau-assessment` only. Output is a shareable readout HTML + ranked workbook list. No Sigma artifacts created.
- **Just converting a Tableau datasource (TDS / TDSX) to a Sigma data model, no workbook** → use the more general `sigma-data-model` converter (lives in the `sigma-skills` repo). It accepts pasted YAML / JSON / TDS XML and emits a Sigma DM spec. Out of scope for `tableau-to-sigma`, which is workbook-centric.

![divider](assets/horizonalline.png)

**Typical end-to-end flow for a customer migration:**

1. `tableau-assessment` against the customer's Tableau Cloud site → readout HTML, ranked shortlist, cluster plan
2. Per cluster: confirm warehouse data coverage; run `tableau-vds-to-snowflake` for any datasource Sigma can't reach
3. `tableau-to-sigma` per workbook (or in batch via `orchestrate-batch.rb` firing parallel subagents)
4. Per-workbook GREEN/YELLOW/RED tier emitted into `batch-results.jsonl`; share with the customer

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Install and Configure the Skill
Duration: 10

The skill lives at `sigma-skills-staging/tableau-to-sigma/` and is typically symlinked into `~/.claude/skills/` so Claude Code picks it up automatically. To install:

```copy-code
git clone https://github.com/twells89/sigma-skills-staging.git ~/sigma-skills-staging
ln -s ~/sigma-skills-staging/tableau-to-sigma ~/.claude/skills/tableau-to-sigma
```

Run the two setup scripts once per machine:

```copy-code
ruby ~/.claude/skills/tableau-to-sigma/scripts/setup.rb
ruby ~/.claude/skills/tableau-to-sigma/scripts/setup-tableau.rb
```

`setup.rb` writes `SIGMA_BASE_URL`, `SIGMA_CLIENT_ID`, and `SIGMA_CLIENT_SECRET` into Claude's settings. `setup-tableau.rb` writes your Tableau site URL, PAT name, and token. Both prompt interactively and only need to run once.

<aside class="negative">
<strong>NOTE:</strong><br> Tokens are 1-hour bearer tokens fetched on demand via <code>scripts/get-token.sh</code>. Never hard-code tokens in scripts — every long-running script in the skill re-fetches on cold start.
</aside>

![divider](assets/horizonalline.png)

Verify the install by starting a fresh Claude Code session and typing:

```copy-code
/tableau-to-sigma
```

Claude should respond with the skill's preamble — a short summary of phases and a prompt for a Tableau dashboard URL.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Phase 1 — Discovery
Duration: 10

Hand Claude a Tableau dashboard URL — for example:

```copy-code
/tableau-to-sigma https://10ay.online.tableau.com/#/site/yoursite/views/OrdersDashboard/Overview
```

Claude resolves the URL to a workbook LUID and runs `scripts/tableau-discover.rb` in one shot. The script does, in parallel:

- **Workbook + views metadata** — `GET /api/3.x/sites/{site}/workbooks/{luid}`
- **VDS field list + Metadata GraphQL formulas** — every datasource field including calculated fields
- **Workbook `.twbx` download**, with the inner `.twb` XML extracted
- **View CSVs** — every dashboard view fetched in concurrent batches of 4 (VizQL throttling guard)
- **Dashboard PNG** — fetched solo after the CSVs to avoid VizQL session contention

The output lands in `/tmp/<workbook-slug>/`:

```copy-code
/tmp/orders-conv/
  get-workbook.json
  workbook-content.twb
  ds-metadata.json
  graphql-fields.json
  views/<view-luid>.csv     (one per dashboard tile)
  views/<dashboard>.png     (the dashboard image)
```

Claude then **reads the dashboard PNG via the multimodal tool** before writing any spec — this is mandatory per the skill's Phase 1d checklist. CSV headers don't tell you bar-vs-pie, dual-axis-vs-single, or what controls live on the dashboard's filter shelf.

<!-- tts_phase1d_png.png -->

![divider](assets/horizonalline.png)

In parallel with the PNG read, Claude runs `scripts/scan-workbook-gaps.rb` against the `.twb` to inventory every Tableau feature the workbook uses and classify each as:

- **Auto:** the skill translates end-to-end with no intervention
- **Hint:** the skill emits a `WARN` with a copy-paste Sigma formula; agent reviews
- **Manual:** post-publish setup required (typically cross-chart action filters)
- **Unhandled:** feature not yet covered — the gap-scout subagent attempts an autonomous translation against the customer's Sigma org, persists the rule on success, escalates on failure

The report (`<workbook>-gaps-report.md`) is the first thing to share with the customer. It sets honest expectations before a single Sigma element is created.

<!-- tts_gap_report.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Phase 1.5 — Data Model Reuse
Duration: 5

Before building a new data model, the skill scans your Sigma org for an existing DM that already covers the workbook's columns. `scripts/find-or-pick-dm.rb` parallel-fetches up to 25 DM specs and scores each against the workbook's signature:

- **Column overlap** (0.7 weight) — how many of the workbook's referenced columns exist on the candidate DM
- **Source-table FQN overlap** (0.2 weight) — does the DM source from the same warehouse tables
- **Metric overlap** (0.1 weight)

A score ≥ 0.85 auto-reuses the DM (saves Phases 2-3 — typically the heaviest 2-3 minutes of the conversion). A score between 0.6 and 0.85 prompts the operator. Below 0.6, the skill builds new.

<!-- tts_dm_picker.png -->

When reusing a DM, the mandatory next step is `scripts/inspect-dm-shape.rb`. This inspects the DM's element graph and emits a per-column resolution plan classifying each workbook-referenced column as either:

- `location: "fact"` — direct reference, formula `[Master/Column Name]`
- `location: "dim"` — Lookup required, with the exact formula shown verbatim

This eliminates the 2-3 minute spec-rework loop that previously hit when a reused DM had separate dim elements and the agent assumed a flat fact.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Phase 5 — Build the Sigma Workbook
Duration: 15

With the DM resolved (reused or freshly built), Claude composes the workbook spec. For a single-dashboard URL the default is **dashboard-fidelity mode** — every Tableau tile maps to a Sigma element, positioned in the same grid.

The spec follows three mandatory rules — surfaced loudly in the skill's `SKILL.md` and the spec validator:

- **Two pages, always.** A hidden `Data` page holds the master table (sourced from the DM); a content page holds the charts, controls, and text. Co-locating master + charts puts a giant table on the dashboard the customer has to delete.
- **Master is the single source.** Every chart element sets `source: {kind: "table", elementId: "master"}`, regardless of which page it lives on. Cross-page references are fully supported.
- **POST once, PUT for every update.** `POST /v2/workbooks/spec` is create-only. Re-POSTing during error recovery creates a duplicate workbook in the customer's `My Documents` — exactly the regression that motivated the orphan-cleanup tooling.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The skill auto-emits <code>chart_kind</code> for every Tableau worksheet from its <code>&lt;mark&gt;</code> class + Rows/Cols shelves. Coverage:
<ul>
  <li><code>bar</code> / <code>line</code> / <code>area</code> / <code>pie</code> / <code>scatter</code> — straightforward 1:1</li>
  <li><code>pivot-table</code> — Text/Square mark with dims on BOTH shelves, or the Measure-Names crosstab pattern. Emits Sigma <code>pivot-table</code> with <code>rowsBy</code> / <code>columnsBy</code> / <code>values</code>.</li>
  <li><code>kpi</code> — Text/Square mark with zero dims and a single measure (Tableau "scorecard"). Emits Sigma <code>kpi-chart</code> with <code>value</code>.</li>
  <li><code>table</code> — Text mark with dims on one shelf only (flat detail list).</li>
  <li><code>map-region</code> / <code>map-point</code> — choropleth and lat/long maps.</li>
</ul>
</aside>

After the workbook POST + readback, Claude builds and applies the layout:

```copy-code
ruby scripts/build-dashboard-layout.rb \
  --layout /tmp/<name>/dashboard-layout.json \
  --wb-ids /tmp/<name>/wb-ids.json \
  --out /tmp/<name>/layout.xml

ruby scripts/put-layout.rb \
  --workbook <workbook-id> \
  --layout /tmp/<name>/layout.xml
```

`build-dashboard-layout.rb` walks each Tableau zone, converts its `x_pct` / `y_pct` / `w_pct` / `h_pct` into Sigma 24-column grid spans, and stretches adjacent tiles to close gaps where Tableau had legend or filter zones Sigma doesn't render. **Skipping this step makes Sigma render every tile in a single-column auto-stack** — the regression the hard gate catches.

<!-- tts_layout_grid.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Phase 6 — Parity Verification
Duration: 10

The conversion is not complete until every chart's Sigma values match Tableau's view CSV. `scripts/phase6-parity.rb` runs in two passes:

- **Pass 1** — auto-builds a parity plan by matching Sigma chart-element names to Tableau view CSVs; emits per-chart SQL queries.
- **Pass 2** — finalize: Claude fires the listed Sigma queries in a single parallel MCP batch, the script verifies row-level equality (or structural-only with measure-drift tolerance when `--extract-mode` is set), and writes `parity-final.json`.

```copy-code
ruby scripts/phase6-parity.rb --tableau /tmp/<name> --workbook-id <id>
# ... agent collects actuals via mcp__sigma-mcp-v2__query ...
ruby scripts/phase6-parity.rb --tableau /tmp/<name> --finalize \
  --actuals /tmp/<name>/parity-actuals.json
```

<!-- tts_parity_pass.png -->

![divider](assets/horizonalline.png)

The conversion is gated by `scripts/assert-phase6-ran.rb`, which checks **four** independent things:

1. **Phase 6 ran** — `parity-final.json` exists with `status=PASS` at the required pass-rate
2. **No orphan workbooks** — `posted-workbooks.jsonl` has ≤ 1 entry, or `cleanup-marker.json` shows a successful non-dry-run cleanup
3. **No `type=error` columns** on the live workbook — catches circular references and runtime errors introduced after the initial POST
4. **Real layout applied** — the workbook spec's top-level `layout` field is non-empty and isn't Sigma's auto-stack signature

```copy-code
ruby scripts/assert-phase6-ran.rb --tableau /tmp/<name>
```

<!-- tts_hard_gate.png -->

Exit 0 means the conversion may declare GREEN. Any non-zero exit means downgrade to YELLOW or RED with a documented reason.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Common Issues and Fixes
Duration: 5

- **Three workbooks in My Documents.** POST is create-only; each retry creates a new workbook. Run `ruby scripts/cleanup-orphan-workbooks.rb --workdir /tmp/<name>` to delete all-but-the-most-recent ID via `DELETE /v2/files/{id}`.
- **Single-column auto-stack layout.** Sigma's server auto-generates a left-half stacked layout when a workbook is POSTed without one. `assert-phase6-ran.rb` gate 4 catches this; fix by running `build-dashboard-layout.rb` + `put-layout.rb`.
- **Chart renders blank in Sigma but spec compiled.** A column resolved to `type=error` — typo'd ref, `IsIn()`, a window function in a calc column. Run `verify-workbook.rb` for the diagnostic; `mcp__sigma-mcp-v2__describe` on the element shows which column is broken.
- **Pivot table appears as a flat table.** Verify `parse-twb-layout.rb` emitted `chart_kind: pivot-table`. If it emitted `table` instead, the source worksheet had dims on only one shelf — that's a flat detail list, not a crosstab.
- **KPI tile missing from Sigma.** If a Tableau scorecard parsed as something other than `chart_kind: kpi`, the worksheet probably had a hidden dim on a shelf (color encoding, detail). Inspect `rows_shelf` / `cols_shelf` on the zone JSON.
- **Sigma MCP query 401s mid-Phase 6.** The MCP session has staled. Re-call `mcp__sigma-mcp-v2__begin_session` and retry the query. Do not abandon Phase 6 over a recoverable auth error.
- **"Table not found" or "Connection has no access" during Phase 2.** The warehouse table the Tableau workbook reads isn't in any Sigma connection your user can reach. Either (a) ask the customer to grant Sigma access to the existing warehouse table, or (b) land the Tableau datasource into a fresh warehouse table using the sibling `tableau-vds-to-snowflake` skill, then re-run `tableau-to-sigma`. The skill explicitly bails before authoring a broken spec.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Scaling Up — Batch Conversion
Duration: 5

For multi-workbook migrations (10+ workbooks at once), `tableau-to-sigma` is one of three skills you'll use together — see *The Tableau Migration Skill Family* earlier in this QuickStart for the full picture. The batch flow specifically pairs the converter with the `tableau-assessment` skill:

1. `tableau-assessment` inventories the customer's Tableau Cloud site (workbooks, datasources, refresh history, license posture, per-workbook complexity from a `.twb` gap-scan) and emits two artifacts: a shareable readout HTML for the customer conversation, and a `batch-plan.json` with wave-by-wave subagent briefs. Workbooks are clustered by shared warehouse tables so workbooks that should share a DM build a leader DM first and followers reuse it.
2. For any cluster whose data *isn't* already in the warehouse, run `tableau-vds-to-snowflake` per datasource before kicking off the cluster's conversion wave. Sigma needs warehouse-native data; the converter can't operate on a Tableau-extract-only datasource.
3. The conversation-layer agent fires each conversion wave as a parallel batch of `Agent()` calls, each carrying a self-contained brief generated by `tableau-to-sigma`'s `scripts/orchestrate-batch.rb` companion in `tableau-assessment`. Cluster leaders build the DM; followers reuse it via `find-or-pick-dm.rb` + `inspect-dm-shape.rb`. Continue-on-failure semantics mean a single broken workbook doesn't block the rest of the batch.

Per-follower real time is typically 6-8 min — saves the 2-3 minutes of Phase 2+3 plus most of Phase 1 by reusing the leader's discovery artifacts.

<aside class="negative">
<strong>NOTE:</strong><br> Each subagent runs the full hard gate at the end of its conversion. Subagents that fail any gate self-report YELLOW or RED in <code>batch-results.jsonl</code> with a specific <code>error_summary</code> — the orchestrator never silently declares done. Per-subagent results feed back into a final batch summary the customer can review tier-by-tier.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What We've Covered
Duration: 5

In this QuickStart we:

- Mapped the three Tableau migration skills — `tableau-assessment` for scoping, `tableau-to-sigma` for conversion, `tableau-vds-to-snowflake` for data landing — and the decision tree for picking the right one
- Installed and configured the `tableau-to-sigma` skill for Claude Code
- Ran Phase 1 discovery against a real Tableau dashboard — workbook metadata, view CSVs, `.twb` XML, dashboard PNG
- Read the gap report to set expectations before authoring a spec
- Reused an existing Sigma data model (or built a new one) via the picker + denormalization plan
- Composed the Sigma workbook spec — master on a hidden Data page, charts + controls on the content page
- Built and applied the dashboard layout XML from Tableau zone percentages
- Ran Phase 6 parity verification with the mandatory four-gate hard check
- Cleaned up orphan workbooks and confirmed no runtime errors made it past the gate
- Saw how the same converter scales to batch via `tableau-assessment`'s cluster plan and the orchestrator's wave-based subagent flow

The end-result is a live Sigma workbook with verified data parity against the source Tableau dashboard, ready to share with the customer — and a clear path to scale the same conversion to dozens or hundreds of workbooks with the rest of the skill family.

<!-- tts_layout_grid.png -->

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
<!-- END OF SECTION-->
