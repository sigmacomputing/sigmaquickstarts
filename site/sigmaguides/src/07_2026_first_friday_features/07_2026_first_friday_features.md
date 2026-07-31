author: pballai
id: 07_2026_first_friday_features
summary: 07_2026_first_friday_features
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-08-07

# (07-2026) July
<!-- The above name is what appears on the website and is searchable.

June 29-30, 2026 changes: pending (rolled over from June FFF)
July 3, 2026 changes:
July 10, 2026 changes: done
July 17, 2026 changes: done
July 24, 2026 changes:
July 31, 2026 changes: done

Publish on August 7

<img src="assets/heart_icon.png" width="25"/>
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in July 2026.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

### Subscribe to What's New in Sigma
For those wanting to see what Sigma is doing on each week, release notes are now also available on the [Sigma Community site](https://community.sigmacomputing.com/). There, you can **opt in to receive notifications about future release notes** in order to stay on top of everything new happening at Sigma. You can also subscribe to automated updates in any Slack channel using the Sigma Community release notes RSS feed. 

For more information on how to subscribe to release note notifications, see [About the release notes](https://community.sigmacomputing.com/t/about-the-release-notes-category/5517)

### Sigma help documentation redesign
Sigma's help documentation site has been updated with a new homepage, a dedicated function reference section, and an enhanced API explorer with code representation views. The site also supports markdown export for any page.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Administration
Duration: 20

### AI spend templates (GA) <img src="assets/heart_icon.png" width="25"/>
Three new workbook templates — Claude, OpenAI, and Snowflake — visualize the costs associated with AI tool usage across your organization. Use them as a starting point for internal AI cost tracking and governance reporting:

<img src="assets/fff_07_01.png" width="800"/>

### Custom email branding and SMTP configuration relocation (GA)
Email branding settings and SMTP configuration have moved to the **Email customization** tab under `Administration` > `Scheduled exports & actions`. Functionality is unchanged.

### Deploy folders to tenants (Beta) <img src="assets/heart_icon.png" width="25"/>
Deploy a folder and all its contents — workbooks, reports, and data models — to tenant organizations in a single operation.

**WHY IT MATTERS:**
For teams managing content across multiple tenant organizations, folder-level deployment replaces a series of individual document deployments with one governed action — reducing the overhead of keeping tenant environments in sync as content evolves.

For more information, see [Deploy content to tenant organizations](https://help.sigmacomputing.com/docs/deploy-content-to-tenant-organizations)

### Deploy reports to tenant organizations (Beta)
Reports can now be included in deployment policies, allowing them to be pushed to tenant organizations alongside workbooks and data models.

For more information, see [Deploy content to tenant organizations](https://help.sigmacomputing.com/docs/deploy-content-to-tenant-organizations)

### Hide sender information in export emails (GA)
A new setting lets administrators obscure which user scheduled or sent an export in the email body, giving organizations more control over how automated emails are presented to recipients.

### Localization settings renamed (GA)
The **Locale** section in account settings has been renamed to **Localization**, and **Account locale** has been renamed to **Account language**. Functionality is unchanged.

### Redeploy documents to tenants (Beta)
Documents within an existing deployment policy can now be manually redeployed to tenant organizations without recreating the full policy.

### Sigma Tenants (GA) <img src="assets/heart_icon.png" width="25"/>
Sigma Tenants is now generally available, allowing organizations to set up a multitenant architecture with multiple Sigma organizations under a single account. Designed for enterprises and ISVs managing separate business units, regions, or customer deployments, Sigma Tenants is a premium feature.

**WHY IT MATTERS:**
Multitenancy has historically required separate Sigma instances or complex shared-infrastructure workarounds. Sigma Tenants gives enterprises and ISVs a governed, first-class path to isolate organizations, manage content deployment centrally, and audit activity per tenant — without the overhead of maintaining multiple accounts.

For more information, see [Multitenancy at Sigma](https://help.sigmacomputing.com/docs/multitenancy-at-sigma)

### Tenant Audit Log Storage Integrations (Beta)
Administrators can now export tenant audit logs to cloud storage, enabling centralized log management across tenant organizations.

For more information, see [Configure tenant audit log storage integrations](https://help.sigmacomputing.com/docs/create-and-manage-tenant-organizations#configure-tenant-audit-log-storage-integrations)

### Tenant Deployment Audit Events (GA)
A new `TENANTS` event category is now available in the Audit Logs connection, tracking deployment management, policy changes, and capability grants across tenant organizations.

For more information, see [Audit log events and metadata](https://help.sigmacomputing.com/docs/audit-log-events-and-metadata)

### Universal result cache (Beta)
Recent queries can now be cached in external storage, reducing warehouse compute consumption and improving response times for repeated or similar queries.

### Visualize dependencies in deployment policy (GA)
Deployment policies now display which dependent documents will be deployed alongside the primary content, giving administrators visibility into the full deployment scope before pushing changes.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### AI usage dashboard (GA) <img src="assets/heart_icon.png" width="25"/>
A new dashboard tracks token consumption, conversations, engagement, and model usage across your organization. Includes an AI analyst agent for querying usage data in natural language:

<img src="assets/fff_07_02.png" width="800"/>

**WHY IT MATTERS:**
As AI usage scales across teams, cost visibility becomes a governance requirement. The AI usage dashboard gives administrators a live view of consumption by model, user, and feature — the audit trail enterprises need before expanding AI access broadly.

For more information, see [AI usage dashboard](https://help.sigmacomputing.com/docs/ai-usage)

### Amazon Bedrock AI provider support (GA) <img src="assets/heart_icon.png" width="25"/>
Amazon Bedrock is now a supported AI provider, allowing Sigma's AI-powered features to run on Anthropic foundation models through your existing Bedrock configuration.

**WHY IT MATTERS:**
Enterprises with AWS infrastructure can now route Sigma's AI requests through their own Bedrock account — keeping AI workloads inside their AWS boundary and satisfying data residency or compliance requirements.

For more information, see [Add Amazon Bedrock as an AI provider](https://help.sigmacomputing.com/docs/manage-external-ai-integrations#add-amazon-bedrock-as-an-ai-provider)

### Natural language questions about usage data (GA)
The Users and Document Activity dashboards now support AI agent queries, letting administrators ask questions about usage patterns in plain language. Requires a configured AI provider:

<video src="assets/ai_user2.mp4"></video>

### Sigma Plugin for ChatGPT (GA) <img src="assets/heart_icon.png" width="25"/>
A one-click installation connects Sigma's MCP server to ChatGPT, letting users query Sigma workbooks, data models, and live data directly from their ChatGPT workflow.

**WHY IT MATTERS:**
Analysts who live in ChatGPT can now access live Sigma data without switching context — with access governed by Sigma's existing permissions and audit logging intact.

For more information, see [Use the Sigma MCP server](https://help.sigmacomputing.com/docs/use-sigma-mcp-server)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### CSV files in lineage endpoints (GA)
List lineage endpoints now include uploaded CSV files as data sources. CSV entries display with a `csv-upload` type and include a `csvId` field.

For more information, see [List lineage tree](https://help.sigmacomputing.com/reference/list-lineage-tree) and [List data model lineage tree](https://help.sigmacomputing.com/reference/list-data-model-lineage-tree)

### Dataset to Data Model migration endpoint (Beta)
A new `POST /v2/datasets/:datasetId/migrate` endpoint supports programmatic migration of datasets to data models, including a dry-run option to validate the migration before committing.

For more information, see [Migrate a dataset to a data model](https://help.sigmacomputing.com/reference/migrate-dataset-to-data-model)

### Export endpoint enhancements (GA)
The workbook and report send/schedule endpoints now support Cc and Bcc recipients, adding flexibility to automated report distribution.

For more information, see [Send workbook](https://help.sigmacomputing.com/reference/send-workbook) and [Send report](https://help.sigmacomputing.com/reference/send-report)

### List connection paths filtering (GA)
The connection paths endpoint now supports filtering by `connectionId`, making it easier to scope path queries to a specific connection.

For more information, see [List connection paths](https://help.sigmacomputing.com/reference/list-connection-paths)

### Revoke user OAuth tokens endpoint (GA)
A new `POST /v2/members/:memberId/revoke` endpoint allows administrators to revoke a member's OIDC and warehouse connection tokens without interrupting active sessions.

For more information, see [Revoke member tokens](https://help.sigmacomputing.com/reference/revoke-member-tokens)

### Workbook version restore endpoint (GA)
A new `POST /v2/workbooks/:workbookId/restoreVersion` endpoint enables restoring a workbook to a previous version programmatically.

For more information, see [Restore workbook version](https://help.sigmacomputing.com/reference/restore-workbook-version)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** Restored documentation MCP server functionality.

**2:** Fixed inactive version tag timestamps to show correct dates.

**3:** Preserved element layout positions when copying/pasting multiple elements.

**4:** Resolved Snowflake Cortex Agent warehouse selection issues.

**5:** Improved tooltip theme setting compliance.

**6:** Preserved code representation `id` values in data model creation endpoint.

**7:** Linked input table creation now validates write-back schema compatibility before proceeding.

**8:** Improved document deployment with custom page visibility for tenant organizations.
**9:** Resolved deployment of tagged documents in policy folders.
**10:** Assistant now preserves Top-N SQL results in charts.
**11:** API credentials dropdown is now searchable.
**12:** Source swap policy lists now display completely.
**13:** Conditional formatting can now remove bold from totals and subtotals.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20

### Add data model tables as data sources for agents (Beta)
Data model tables can now be used as sources for Sigma agents, giving builders access to governed, semantic-layer data when configuring agent capabilities:

<img src="assets/fff_07_03.png" width="800"/>

For more information, see [Build Sigma agents](https://help.sigmacomputing.com/docs/build-agents)

### Assistant in build mode: balance sheet creation (Beta)
Sigma Assistant in build mode now supports guided balance sheet creation, with adaptive data structure support and snapshot and comparative layouts for financial analysis.

### Assistant in build mode: formula join keys (Beta)
Sigma Assistant in build mode can now join tables on formulas and expressions, not just raw columns, enabling more flexible data assembly during workbook construction.

### Assistant Multiple Choice Prompts (Beta)
Workbook Assistant in build mode can now offer users predefined response options, guiding them through structured workflows and capturing consistent input.

### Assistant Proposed Feedback (Beta)
Build mode Assistant now detects when a user may be dissatisfied and proactively suggests sending feedback. Users can review, edit, or dismiss the proposal before it's sent.

### Customize first agent message (Beta)
Builders can now set a fixed greeting message for agents rather than relying on an AI-generated response. Configure agents to open every conversation with a specific, controlled message — such as "Welcome to Sigma!"

<img src="assets/fff_07_04.png" width="800"/>

For more information, see [Build agents](https://help.sigmacomputing.com/docs/build-agents#customize-the-first-agent-message)

### Insert row(s) action (Beta)
A new action type allows agents and actions to insert one or more rows into an input table. Rows can contain new defined values or data pulled from existing workbook sources.

For more information, see [Create actions that modify input table data](https://help.sigmacomputing.com/docs/create-actions-that-modify-input-table-data)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## App Templates
Duration: 20

### App templates (Beta)
A growing library of pre-built app templates is now available, covering common business scenarios including Project Management, Revenue Forecasting, Demand Planning, and seven additional use cases. Use templates as a starting point and customize them to your data and workflows:

<img src="assets/fff_07_05.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

### Databricks Unity Catalog metric views (Beta)
Databricks Unity Catalog metric views are now browsable in Sigma's data catalog. Use metric views as sources for tables, pivots, and charts, and write custom SQL queries against them.

For more information, see [Sigma integration with Databricks Unity Catalog](https://www.sigmacomputing.com/blog/sigma-integration-with-databricks-unity-catalog) and [Unity Catalog metric views](https://docs.databricks.com/aws/en/uc-semantics/metric-views/)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions / Calculations
Duration: 20

### BusinessDays function (GA) <img src="assets/heart_icon.png" width="25"/>
The new `BusinessDays` function calculates the number of weekdays between two dates, including both the start and end dates and excluding weekends.

**WHY IT MATTERS:**
Date calculations in business contexts — SLA tracking, payment terms, project timelines — routinely need to exclude weekends. A dedicated function makes these calculations accurate and readable without workarounds.

For more information, see [BusinessDays](https://help.sigmacomputing.com/docs/businessdays)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in July
Duration: 20

### Automate Sigma from the Command Line with the Sigma CLI
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/developers_sigma_cli/index.html?index=..%2F..index#0) shows how to install and use the Sigma CLI (`sigcli`), a typed command-line wrapper over Sigma's REST API, to turn repetitive administrative work into repeatable, auditable automation.

It walks through how to:
* Install and configure `sigcli` with a named authentication profile
* Map CLI commands to the underlying REST API and discover resources with built-in help
* Read JSON output and reshape it with `jq`
* Export a governance snapshot of members, connections, and workbooks to CSV
* Wrap the inventory in a script you can run on a schedule

**WHY IT MATTERS:**<br>
Anything you can do in the Sigma REST API, you can now do from a script — turning one-off administrative clicks into repeatable automation for inventory, provisioning, and deployment. Because every command runs through the same API, permissions, and audit logging as the rest of Sigma, that automation stays governed.

### Build Dashboards and Apps with Sigma Assistant
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/aiapps_build_with_assistant/index.html?index=..%2F..index#0) shows how to use Sigma Assistant's `Plan` and `Build` modes to design and construct dashboards and AI apps from scratch, then refine them conversationally — all live on your data.

It walks through how to:
* Use Assistant's `Plan` and `Build` modes, and switch between them
* Start from a governed data model and let semantic search find the right source
* Plan a build from a design image, and have Assistant question the plan before building
* Build a revenue forecast with actuals, a projection, KPIs, and COGS/margin views
* Refine the result conversationally, adding controls and adjusting the forecast

**WHY IT MATTERS:**<br>
This moves Assistant from analysis to construction — describe what you want in plain language and get a governed, publishable workbook rather than a throwaway mockup. Builders design and iterate faster while the result stays live on real data, with Sigma's permissions and version history intact.

### Sigma Starter Apps
Sigma Starter Apps are fully built, production-ready applications covering common business workflows across finance, sales, operations, and support. Each app is built entirely on Sigma's native capabilities — input tables, AI agents, actions, and live warehouse data — and comes with a QuickStart that walks through the design patterns so you can adapt it to your own data.

* [Revenue Forecasting Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_revenue_forecasting/index.html?index=..%2F..index#0)
* [Budget Variance Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_budget_variance/index.html?index=..%2F..index#0)
* [Demand Planning Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_demand_planning/index.html?index=..%2F..index#0)
* [Headcount Planning Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_headcount_planning/index.html?index=..%2F..index#0)
* [Marketing Analytics Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_marketing_analytics/index.html?index=..%2F..index#0)
* [Pipeline Forecasting Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_pipeline_forecasting/index.html?index=..%2F..index#0)
* [Project Management Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_project_management/index.html?index=..%2F..index#0)
* [Territory Management Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_territory_management/index.html?index=..%2F..index#0)
* [Ticket Management Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_ticket_management/index.html?index=..%2F..index#0)
* [Shift Management Starter App](https://quickstarts.sigmacomputing.com/guide/starter_apps_shift_management/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Security
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Array unnesting for tables (GA)
The new Unnest feature creates table rows from array data, expanding nested arrays into a flat, analyzable table structure.

For more information, see [Create a table from an array](https://help.sigmacomputing.com/docs/create-a-table-from-an-array)

### Button element icons (GA)
Button and navigation elements now support icons alongside labels, or as a standalone replacement for text, giving interactive controls and navigation a more visual and compact appearance:

<video src="assets/icons.mp4"></video>

For more information, see [Button elements](https://help.sigmacomputing.com/docs/button-elements#customize-button-properties)

### Convert workbooks to reports (Beta) <img src="assets/heart_icon.png" width="25"/>
Existing workbooks can now be converted to reports, enabling pixel-level formatting control and more reliable export behavior:

<img src="assets/fff_07_06.png" width="600"/>

For more information, see [Convert workbooks to reports](https://help.sigmacomputing.com/docs/convert-workbooks-to-reports)

### Enhanced export formatting (GA)
Excel and Google Sheets exports now preserve cell background color, text color, row banding, and font properties from the source workbook.

**WHY IT MATTERS:**
Export fidelity has long been a gap between what analysts see in Sigma and what stakeholders receive. Preserving formatting in Excel and Sheets exports means reports land polished and ready to share — without manual cleanup.

### Find in table (GA) <img src="assets/heart_icon.png" width="25"/>
Find in table is now generally available, letting users search for specific values within tables and input tables directly in the workbook.

**WHY IT MATTERS:**
For analysts working with large datasets, locating a specific row or value without sorting or filtering reduces friction — especially in input tables where pinpointing a record before editing is a common step.

### Mailto link support in text elements (GA)
Text elements now support `mailto:` links, allowing builders to add clickable email links directly in workbook text.

For more information, see [Text elements](https://help.sigmacomputing.com/docs/text-elements)

### Manage translations panel (GA)
The **Manage locales** panel has been renamed to **Manage translations**. Functionality is unchanged.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Additional Information
Duration: 20

**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
<br>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
