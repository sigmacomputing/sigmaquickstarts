author: pballai
id: developers_migrating_power_bi_made_easy
summary: developers_migrating_power_bi_made_easy
categories: developers
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags:
lastUpdated: 2026-06-08

# Migrating From Power BI Made Easy

## Overview
Duration: 5

A common ask from teams evaluating Sigma is migrating their Power BI footprint — usually to take advantage of all the amazing things Sigma offers. The conversion itself can be a blocker — and the part this QuickStart automates.

The usual Power BI-to-Sigma migration loop is rebuild-the-semantic-model-by-hand, rewrite every DAX measure, relay each page, eyeball the numbers against the source, hope nothing drifted in the translation. Done on a single report it's tedious. Across an entire workspace can be the reason migration projects slip.

This QuickStart walks through a `Claude Code` skill called `powerbi-to-sigma` that automates the loop.

Point it at a Power BI report; it extracts the semantic model (TMSL) and report layout (PBIR) from Fabric, translates the DAX measures into Sigma formulas, builds (or reuses) a Sigma data model from the warehouse tables behind the model, mirrors the layout, and verifies every measure's numbers against the Power BI source before exiting. If any check fails, the conversion is flagged for review instead of quietly passing.

For the demonstration, we'll run the skill end-to-end against a sample Power BI report on a Fabric workspace. You'll see the artifacts each phase produces, the DAX-translation breakdown the converter hands back, the parity comparison against Power BI's `executeQueries` results, and the final Sigma workbook side-by-side with its Power BI original.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The skill runs the whole conversion — extract, translate, build, verify — and finishes with a documented parity check. The result is a working Sigma workbook on the warehouse plus the report that proves it matches the Power BI source, instead of a rebuilt-by-hand report you have to spot-check yourself.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> The migration is one-directional — Power BI is the source, Sigma is the target. Sigma reads the warehouse live; Power BI may be reading an in-memory <code>Import</code> model rather than the warehouse directly, so live-vs-import drift is expected. The skill handles it by running the parity check through Power BI's own <code>executeQueries</code> API, so the comparison is always against what Power BI itself returns.
</aside>

### Target Audience
Sigma SEs, technical CSMs, and migration partners running Power BI-to-Sigma conversions — or scoping a batch migration with the companion `powerbi-assessment` skill.

### Prerequisites
- `Claude Code` installed (CLI or desktop).
- Sigma API credentials.
- Power BI / Fabric access with permission to read the target workspace. You do **not** need to register an Entra app — the skill authenticates via device-code flow using the well-known Power BI Desktop public client.
- `Python 3` with the `msal` and `truststore` packages (the skill installs them via `requirements.txt`).
- A Power BI report you're authorized to convert. Power BI Desktop alone won't work — the skill reads through Fabric's REST APIs, which require a published report in a Fabric workspace (including `My workspace`).
- The warehouse tables behind the Power BI model must be reachable from a Sigma connection (Snowflake, BigQuery, Databricks, Redshift, Postgres and others).

<aside class="negative">
<strong>NOTE:</strong><br> Use a non-production Sigma org for your first run. The skill creates real workbooks, and error-recovery paths may iterate via PUT to update them.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## The Power BI Migration Skill Family
Duration: 5

<!--
SECTION INTENT
- Two skills (not three): powerbi-to-sigma + powerbi-assessment. No data-landing equivalent.
- Table: skill / role / when to reach for it
- Family diagram placeholder: assessment hands shortlist + cluster plan to powerbi-to-sigma
- "Which skill for your situation" table — single report / 10+ reports / audit only
- Note that internal phase numbers in script names (phase6-parity-pbi.rb) don't match QS section names
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Install and Configure the Skill
Duration: 10

<!--
SECTION INTENT
- Decide: plugin-marketplace path (Claude Code) vs git-clone path (other agents). See CLAUDE.md Open Questions.
- Plugin install: /plugin marketplace add twells89/sigma-migration-skills then /plugin install powerbi-to-sigma@sigma-migration-skills
- ruby scripts/setup.rb captures Sigma API credentials (writes ~/.claude/settings.json and ~/.sigma-migration/env)
- python3 scripts/fabric-auth-check.py runs device-code flow; caches token at /tmp/pbiauth/cache.bin
- Verify with python3 scripts/fabric-inventory.py from powerbi-assessment dir
- Callouts: device-code flow is one-time per machine; tokens are 1-hour; corporate TLS handled via truststore
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare the Demo Data
Duration: 10

<!--
SECTION INTENT
- BLOCKED: demo dataset TBD. See CLAUDE.md Open Questions.
- Candidates: AdventureWorks DW, Contoso Sales, or custom small model on QUICKSTARTS Snowflake DB.
- Pattern mirrors Tableau QS: Snowflake DDL + external stage + COPY + sanity-check row counts.
- Same data needs to exist both in the Power BI model AND in a warehouse Sigma can read, so parity has a target.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Run the Conversion
Duration: 5

<!--
SECTION INTENT
- One-shot vs phase-by-phase: scripts/migrate-powerbi.rb is the recommended entrypoint.
- Show the command line with --tmsl, --pbir, --connection, --database, --schema, --ref-dm flags.
- Exit codes: 0 = parity pass, 10 = OPEN QUESTIONS surfaced, 3 = parity fail.
- Frame the OPEN QUESTIONS block as a feature: genuine decision points surface to the human, not silently auto-resolved.
- Mention scripts/run.sh / direct script invocation as the inspect/tune path.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Inspecting the Generated Spec
Duration: 5

<!--
SECTION INTENT
- What the converter emits: a Sigma workbook spec JSON + a Sigma data model spec JSON.
- The three required POST fixups before submit: schemaVersion: 1, real folderId, element name.
- validate-spec.rb gates the spec before POST.
- Where the artifacts live on disk during a run.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Discovering the Source
Duration: 10

<!--
SECTION INTENT
- Phase 1: fabric-extract.py runs device-code -> Fabric getDefinition -> TMSL (tables, measures, calc columns, RLS, M sources) + PBIR (pages, visuals, field bindings).
- Classic single-report.json reports handled by extract-report-classic.py.
- What the reader sees: extracted artifacts + a measure inventory + a visual inventory.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbook Summary
Duration: 5

<!--
SECTION INTENT
- DAX bucket breakdown the converter produces:
  - (a) Mechanical — direct rewrites, ~70% of measures.
  - (b) Restructure — needs Sigma element shape change (grouped element, parallel join, pre-aggregation). RANKX, ALLEXCEPT, SUMMARIZE, USERELATIONSHIP.
  - (c) No equivalent — rare. PATH hierarchies, dynamic context.
- Call out: time-intelligence DAX (TOTALYTD, SAMEPERIODLASTYEAR, running totals) is TRANSLATABLE via DateLookback / CumulativeSum on a date-grouped element. Not part of (c). Common misconception.
- The gap-scout sub-agent: takes (b) and (c) measures, proposes Sigma translations, validates against the live Sigma API (scout-validate.py), persists rules to ~/.powerbi-to-sigma/learned-rules.yaml.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Suggested Next Steps
Duration: 3

<!--
SECTION INTENT
- After the conversion completes: what to review, what to ship, what to escalate.
- Tie back to the bucket summary — (a) ships as-is, (b) review the proposed translation, (c) escalate.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Building the Data Model
Duration: 10

<!--
SECTION INTENT
- Phase 2: reuse an existing Sigma DM or POST a new one.
- pbi-dm-signature.py derives a signature of the report's warehouse tables/columns/measures.
- find-or-pick-dm.rb checks for an existing Sigma DM that already covers the signature.
- POST to /v2/dataModels/spec; verify every column has a concrete type (no `error` columns).
- WHY IT MATTERS: data model reuse avoids sprawl; a batch can land on one DM per semantic-model family.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Building the Sigma Workbook
Duration: 10

<!--
SECTION INTENT
- Phase 3: build-workbook-from-pbir.rb / build-workbook-spec.rb / build-charts-from-signals.rb.
- Layout fidelity: PBIR positions translated to Sigma grid coordinates via lib/layout.rb.
- Visual mapping: which Power BI visual kinds become which Sigma element types. Reference refs/powerbi-visual-layout.md.
- Bookmarks -> per-state workbooks (optional Phase 7): extract-bookmarks.py + build-bookmark-workbooks.py.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Verifying Data Parity
Duration: 10

<!--
SECTION INTENT
- Phase 4: phase6-parity-pbi.rb runs the original measures via Power BI executeQueries (DAX) and compares to Sigma query results.
- GREEN only when DAX results match Sigma.
- Walk through a passing parity report + an intentionally-failing one (e.g., wrong filter context) so readers see both outcomes.
- assert-phase6-ran.rb is the hard gate that proves parity was actually executed.
- Note: parity is against what Power BI returns, not against the underlying warehouse — so Import vs DirectQuery doesn't break the check.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Scaling Up — Batch Conversion
Duration: 5

<!--
SECTION INTENT
- The companion powerbi-assessment skill: scoping for batch migrations.
- Per-report DAX bucket distribution, visual histogram, RLS/DirectQuery flags, warehouse sources, ranked shortlist.
- Migration plan clusters reports by shared semantic model so one Sigma DM serves the whole family.
- HTML readout (render-readout-html.rb) — Sigma-branded, share-friendly, includes token / cost estimate (Opus + Sonnet).
- Hand-off pattern: assessment shortlist + cluster plan -> powerbi-to-sigma batch mode.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Common Issues and Fixes
Duration: 5

<!--
SECTION INTENT
- Device-code login expired -> rerun fabric-auth-check.py.
- Corporate TLS interception -> truststore.inject_into_ssl() handles it; if still failing, point at the proxy CA bundle.
- PBIR vs classic report.json -> skill auto-detects; manual override flag if needed.
- Spec fixups missed -> three required edits (schemaVersion: 1, real folderId, element name).
- DAX measure in bucket (b) with no learned rule -> gap-scout proposes a translation; can opt-in file a GitHub issue.
- Sigma connection doesn't reach the same warehouse -> parity will fail; check connection scope.
- "Data model has error columns" -> usually a type mismatch between the TMSL column type and the warehouse column type; resolve in the spec.
-->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What We've Covered
Duration: 5

<!--
SECTION INTENT (write last)
- Not a checklist of steps. A narrative on what was built, why it matters, and what techniques are reusable.
- Highlight the reusable building blocks: extract-translate-build-verify pattern; warehouse-as-source-of-truth; DAX bucketing; data-model reuse; gap-scout for handling (b)/(c) tail.
- Soft-sell Sigma's value: one source of truth, no rebuild loop, parity-checked migration.
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
