author: pballai
id: starter_apps_budget_variance
summary: Explore Sigma's Budget Variance Analysis Starter App — a ready-to-use finance app for tracking actuals against budget, documenting variance commentary, building AI-assisted reforecast scenarios, and routing them through executive approval.
categories: starterapps
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2026-07-08

# Budget Variance Analysis Starter App

## Overview
Duration: 5

Sigma's **Starter Apps** are ready-to-use applications built on Sigma's native features and connected to sample data. Each one ships fully functional — you can explore it immediately, learn how it's built by switching to edit mode, and adapt it to your own data and workflows without starting from scratch.

The **Budget Variance Analysis** app gives finance and FP&A teams a structured end-to-end workflow: identify where actuals diverged from budget, document the explanation, build a reforecast scenario with AI-assisted recommendations, and route it through executive sign-off — all within a single connected workbook. Once approved, the new baseline is locked and the cycle resets for the next period.

This QuickStart walks through how the app works as a user, how it's designed under the hood, and how to connect it to your own financial data.

### Target Audience
Finance and FP&A teams evaluating or adopting Sigma for variance and reforecast workflows. Solutions Engineers and technical stakeholders exploring the app as a reference design.

### Prerequisites

<ul>
  <li>Access to a Sigma environment.</li>
  <li>The Budget Variance Analysis Starter App available in your org — find it under <code>Templates</code> > <code>Starter Apps</code>.</li>
  <li><strong>Write access enabled on a connection</strong> — required for input tables that store scenario data, analyst commentary, and budget overrides. See <a href="https://help.sigmacomputing.com/docs/set-up-write-access">Set up write access</a></li>
  <li><strong>AI provider configured for your organization</strong> — required for the inline AI reforecast and approval recommendations. See <a href="https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization">Configure AI features for your organization</a></li>
  <li>Some familiarity with Sigma workbooks is helpful but not required.</li>
</ul>

<aside class="positive">
<strong>NOTE:</strong><br> If you don't see Starter Apps in your Templates section, contact your Sigma administrator to confirm availability in your org.
</aside>

### What You'll Learn
- How the five-page variance-to-reforecast cycle works end to end
- How to document variance commentary and flag items for reforecast
- How AI recommendations surface on the Reforecast Budget and Executive Signoff pages
- The data architecture that powers named scenarios, budget overrides, and approval tracking
- How to connect the app to your own financial warehouse data

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Exploring the App
Duration: 10

### Open and Save the Template

Navigate to `Templates` in the left sidebar. The Budget Variance Analysis app appears in the `Made by Sigma` collection:

<!-- <img src="assets/bva_01.png" width="800"/> -->

Click the template card to open a preview. Before clicking `Use template`, confirm the two requirements shown on the detail page are met:

- **Write access enabled on a connection** — required for all input tables in the app
- **AI provider set up in your organization** — required for inline AI recommendations

<!-- <img src="assets/bva_02.png" width="800"/> -->

Click `Use template`, give the workbook a name, and choose a folder to save it. The app opens to its `READ ME` page.

### App Pages

The app is organized across five visible pages, each serving a distinct role in the planning cycle:

<!-- <img src="assets/bva_03.png" width="800"/> -->

| Page | Purpose |
|------|---------|
| **READ ME** | Setup instructions and a summary of the five-step workflow |
| **Kickoff** | Planning command center — headline metrics, active scenario status, and your next action |
| **Variance Commentary** | Workspace for documenting budget-to-actual explanations by category |
| **Reforecast Budget** | Editable pivot for adjusting the forecast with AI recommendations |
| **Executive Signoff** | Final approval workspace — review, sign off, and lock the new baseline |

A sixth page, `Data`, is hidden and contains all source tables. It is covered in the [Under the Hood](#under-the-hood) section.

### The Kickoff Page

The Kickoff page is where each planning cycle begins. It surfaces the most important context at a glance:

<!-- <img src="assets/bva_04.png" width="800"/> -->

**Headline metric** — the current period's revenue variance percentage against budget, calculated live from the warehouse. The figure updates automatically as new actuals close.

**Period metrics panel** — Total Revenue, Gross Profit, Total Operating Expenses, and Total Operating Profit for the current month, with month-over-month dollar and percentage change shown alongside each figure.

**Next Action prompt** — a dark card that states the outstanding task for the current cycle: completing variance commentary and submitting the reforecast for sign-off.

**Three-step workflow navigator** — links to Variance Commentary (➊), Reforecast Budget (➋), and Executive Approval (➌), keeping the cycle visible at all times.

**Draft Forecast Overrides** — a live feed of budget adjustments that have been staged but not yet approved, so analysts and managers can see what's in flight.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Documenting Variance Commentary
Duration: 10

The Variance Commentary page is the first active step in the cycle. Its purpose is to explain *why* actuals diverged from budget before building any reforecast — grounding the numbers in analyst context that flows forward into the executive review.

<!-- <img src="assets/bva_05.png" width="800"/> -->

### Selecting a Scenario

Use the `SCENARIO` filter to associate your commentary with the current reforecast scenario. This is required — commentary is linked to a specific scenario name, so selecting the wrong one will detach your explanations from the downstream reforecast.

<aside class="negative">
<strong>IMPORTANT:</strong><br> You must select a Scenario before adding commentary. Commentary written without a scenario selected will not link correctly to the Reforecast Budget or Executive Signoff pages.
</aside>

### Filtering the View

Three filters help narrow focus to the variance lines that need explanation:

- `SCENARIO` — links commentary to the current planning cycle
- `CATEGORY` — filter to specific P&L categories (e.g., Direct Revenue, Compensation and Benefits, Total COGS)
- `SITE` — filter to a specific location or business unit

Use `SORT BY` to surface the largest variances first: `Largest $ variance` ranks by absolute dollar impact; `Largest % variance` highlights proportional misses.

<!-- <img src="assets/bva_06.png" width="800"/> -->

### Adding Commentary

The main table displays each account category with its Actual, Budget, Delta $, and Delta % values. The rightmost column, **Commentary**, is editable — click any cell and type your explanation directly into the row.

<!-- <img src="assets/bva_07.png" width="800"/> -->

Commentary entries are stored in an input table and linked to the scenario name and account category. They surface automatically on the Executive Signoff page alongside the variance data, so executives see the analyst's reasoning inline — no separate document required.

**WHY IT MATTERS:**
Embedding commentary directly in the financial data eliminates the round-trip between spreadsheets, emails, and presentations. Finance teams can document variance rationale, flag anomalies, and prepare context for leadership all in the same workspace — and that context travels with the data through every downstream step.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Building the Reforecast
Duration: 10

The Reforecast Budget page is where analysts apply budget adjustments for the remaining forecast months, guided by AI recommendations based on the variance data and commentary entered in the prior step.

<!-- <img src="assets/bva_08.png" width="800"/> -->

### AI Recommendations

At the top of the page, Sigma calls an AI model inline and returns a 1–2 sentence recommendation tailored to the active scenario:

<!-- <img src="assets/bva_09.png" width="800"/> -->

The recommendation is generated from the current scenario's category-level actuals and budgeted amounts. It suggests which accounts are most likely to carry variance forward and should be adjusted — and which should remain on baseline. The recommendation refreshes whenever the scenario changes.

<aside class="positive">
<strong>NOTE:</strong><br> The AI recommendation is a starting point, not a directive. Use it alongside your commentary and judgment to decide which adjustments to make.
</aside>

### Scenario Status Bar

Below the AI recommendation, a status bar shows the current state of the active scenario:

- **Active Scenario** — the scenario name currently being edited
- **Baseline** — the original approved budget (locked as the comparison point)
- **Closed Months** — how many actual months are locked (Jan through the current month)
- **Overrides Executed** — count of budget lines that have been adjusted in this scenario

### The Forecast Pivot Table

The main pivot table displays categories as rows and months as columns. Two visual cues distinguish different types of cells:

- **Grey cells** — closed months where actuals are locked. These cannot be edited; the value shown is the actual figure, not the budget.
- **Blue cells** — months where a budget override has been applied. The override value and a bold blue style indicate an active adjustment.
- **White cells** — open forecast months using the original budget. These are editable.

<!-- <img src="assets/bva_10.png" width="800"/> -->

### Making Adjustments

To adjust a forecast month, click an editable cell and enter the new value. Each override requires:

- **Adjustment** — the dollar amount of the change (positive or negative)
- **Adjustment Reason** — a free-text explanation of why the change was made
- **Override?** — a checkbox that marks the row as intentionally adjusted (this drives the blue cell formatting and the Override count in the status bar)

Overrides are stored in an input table linked to the scenario. They persist across sessions and are visible to anyone with access to the workbook.

**WHY IT MATTERS:**
Every budget adjustment carries a documented rationale — Adjustment Reason is required alongside the number. This creates a complete audit trail of every change made during the reforecast cycle, which is exactly what executives and auditors need when reviewing a submitted scenario.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Executive Signoff
Duration: 5

Once commentary is complete and overrides are submitted, the reforecast moves to Executive Signoff — the final step before the new baseline is locked.

<!-- <img src="assets/bva_11.png" width="800"/> -->

### Reviewing the Scenario

The page header identifies the active scenario, the analyst who submitted it, and the submission date. Below that, a full-year pivot compares the reforecast scenario against the original budget across all categories, with analyst commentary visible inline for each line.

The pivot can display multiple scenarios in side-by-side columns if more than one has been submitted, allowing the executive to compare approaches before approving.

### AI Approval Recommendation

Alongside the pivot, Sigma generates an AI recommendation on whether the plan should be approved. The model reviews the scenario's delta $ and delta % figures alongside all analyst commentary, then returns a 1–2 sentence recommendation:

<!-- <img src="assets/bva_12.png" width="800"/> -->

The recommendation is framed from the executive's perspective — it weighs whether the submitted adjustments are adequately supported by the variance explanations and whether the overall plan is defensible.

### Signing Off

The sign-off panel on the right side of the page shows the current approval status and provides an optional **Executive Note** text area for comments. Clicking `Approve` designates the scenario as the official forecast for the cycle and locks the baseline.

Once approved, the new budget baseline flows back into the variance calculations for the next period — the cycle resets and begins again.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Under the Hood
Duration: 10

Understanding the data architecture helps you adapt the app to your own data or apply its patterns to other workbooks.

### Data Sources

The app connects to two warehouse tables in Snowflake's sample `PLUGS_ELECTRONICS_FINANCIALS` schema:

- **`COMPLETE_FINANCIALS`** — transaction-level financial data with a `Scenario` column that distinguishes `Actual` from `Budget` rows. This is the primary source for all variance calculations.
- **`ACCOUNT_HIERARCHY`** — account codes, Level 1 categories (e.g., Direct Revenue, Compensation and Benefits), and P&L section groupings (Revenue, Cost of Goods Sold, Operating Expenses).

Three additional input tables extend the warehouse data:

- **`Site Mapping Table`** — maps product area or location values from the warehouse to departments, sites, and countries for geographic filtering
- **`Custom Account Hierarchy Rows Table`** — lets you define additional account category codes not present in the warehouse hierarchy
- **`Submitted Scenarios Table`** — tracks every named scenario with its status, owner, and executive notes

### The Data Pipeline

The app uses Sigma's transpose feature to calculate financial statement subtotals (Gross Profit, Operating Profit) that don't exist as individual rows in the warehouse:

<!-- <img src="assets/bva_13.png" width="600"/> -->

1. **Group by Section** — transactions are grouped by P&L section (Revenue, Cost of Goods Sold, Operating Expenses) and time period, summing Actual and Budget separately.
2. **Row-to-column transpose** — the three sections become column values, enabling calculated fields: `Gross Profit = Revenue - COGS`, `Operating Profit = Gross Profit - Operating Expenses`.
3. **Column-to-row transpose** — the calculated subtotals are converted back to rows and unioned with the detail-level account data to form a single financial statement source.

This pipeline runs for both actuals and budget amounts in parallel, then the two are unioned into `Complete Dataset Table` — the final source for all pivot tables in the app.

### The Scenario and Override Architecture

Each named scenario is created by adding a row to `Submitted Scenarios Table`. The app then cross-joins that scenario against every row of `Complete Dataset Table`, creating a full copy of the budget data for each scenario in `Base Data for Pivot Overrides Table`.

`Base Data for Pivot Overrides Table` is a linked input table — it inherits all warehouse rows and adds three editable columns:

| Column | Type | Purpose |
|--------|------|---------|
| Adjustment | Number | Dollar change to the budget for this cell |
| Adjustment Reason | Text | Required rationale for the override |
| Override? | Checkbox | Marks the row as intentionally adjusted |

The effective budget for each cell is `Base Budget + Adjustment` (falling back to `Base Budget` when no override exists). The pivot tables on the Reforecast Budget and Executive Signoff pages read from this table, so every override is reflected immediately.

### Inline AI

The AI recommendations on the Reforecast Budget and Executive Signoff pages use Sigma's `CallText` function to call an AI model inline — no external service or separate integration required:

```copy-code
CallText("ai_complete", "claude-4-sonnet", "[system prompt] + scenario data")
```

The function assembles the prompt from live workbook values — category names, actuals, budgeted amounts, and analyst commentary — and returns a recommendation directly into a text element on the page. The AI runs within Sigma's governed environment, subject to your organization's AI configuration and audit logging.

**WHY IT MATTERS:**
`CallText` brings AI analysis to the point of decision without requiring a separate tool or export step. The recommendation is generated from the same data the analyst and executive are already looking at — and it's governed by the same permissions, audit logs, and access controls that apply to the rest of the workbook.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connect Your Own Data
Duration: 10

The app ships connected to Plugs Electronics sample data. Connecting it to your own financial data requires pointing the warehouse sources to your tables and configuring the supporting input tables to match your account structure.

### Warehouse Table Requirements

The app expects two warehouse tables. Your data should conform to the following schema or be transformed to match it:

**Financial transactions table** (replaces `COMPLETE_FINANCIALS`):

| Column | Type | Description |
|--------|------|-------------|
| Account | Text | Account code |
| Description Account Hierarchy | Text | Account description |
| Transaction Date | Date | Transaction date |
| Scenario | Text | `"Actual"` or `"Budget"` — used to split actuals from budget |
| Amount | Number | Transaction amount |
| Product Area | Text | Location or business unit identifier |
| Region | Text | Geographic region |
| Department | Text | Department name |

**Account hierarchy table** (replaces `ACCOUNT_HIERARCHY`):

| Column | Type | Description |
|--------|------|-------------|
| Account | Text | Account code (joins to financial transactions) |
| Level 1 Code | Number | Numeric P&L category code |
| Level 1 Category | Text | Category name (e.g., `"Direct Revenue"`, `"Compensation and Benefits"`) |
| Section | Text | P&L section: `"Revenue"`, `"Cost of Goods Sold"`, or `"Operating Expenses"` |

### Reconnecting the Sources

In the workbook's `Data` page (switch to edit mode and unhide it), locate `Complete Financials Table` and `Account Hierarchy Table`. Use the element panel to reconnect each to your warehouse tables.

<aside class="positive">
<strong>NOTE:</strong><br> The app applies a one-year date shift (<code>DateAdd("year", 1, ...)</code>) to the sample data to keep it current. Remove this shift when connecting to live data that is already in the correct year.
</aside>

### Configuring the Input Tables

After reconnecting the warehouse sources, configure the three supporting input tables on the `Data` page:

**Site Mapping Table** — populate with your organization's location-to-department mappings. Each row maps a `Product Area` value from the financial table to a `Department`, `Site`, and `Country`.

**Custom Account Hierarchy Rows Table** — if your chart of accounts includes subtotal rows that aren't in the warehouse (e.g., a custom `"Total Gross Profit"` row), add them here with their Level 1 Code and Section. The app uses these to insert spacing and subtotal rows into the financial statement view.

**Submitted Scenarios Table** — this table starts empty. Scenario names are created by analysts directly in the app as the planning cycle begins. No pre-configuration is needed.

### Validating the Connection

After reconnecting, open the `Kickoff` page in view mode. If the headline metric and period cards show numbers, the data pipeline is working. If they show errors or blanks, check that the `Scenario` column in your financial table uses the exact values `"Actual"` and `"Budget"` — the `SumIf` formulas throughout the app depend on this exact match.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What We've Covered
Duration: 3

<!-- Write last, after all technical sections are reviewed and finalized -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
