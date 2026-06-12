author: pballai
id: 06_2026_first_friday_features
summary: 06_2026_first_friday_features
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-07-05

# (06-2026) June
<!-- The above name is what appears on the website and is searchable.

June 5, 2026 changes: done
June 12, 2026 changes: done
June 19, 2026 changes: pending
June 26, 2026 changes: pending

Publish on July 3

 <img src="assets/heart_icon.png" width="25"/>
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in June 2026.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

### Subscribe to What's New in Sigma
For those wanting to see what Sigma is doing on each week, release notes are now also available on the [Sigma Community site](https://community.sigmacomputing.com/). There, you can **opt in to receive notifications about future release notes** in order to stay on top of everything new happening at Sigma. You can also subscribe to automated updates in any Slack channel using the Sigma Community release notes RSS feed. 

For more information on how to subscribe to release note notifications, see [About the release notes](https://community.sigmacomputing.com/t/about-the-release-notes-category/5517) 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Administration
Duration: 20

### AI usage dashboard (GA) <img src="assets/heart_icon.png" width="25"/>
Monitor token consumption, data sources, tool calls, and user feedback for AI features from a single admin dashboard.

**WHY IT MATTERS:**<br>
Cost visibility and governance are blockers for rolling AI features out broadly. The AI usage dashboard gives admins one place to track token spend, which data sources AI is querying, which tools agents are calling, and where users are flagging quality issues — the inputs you need to manage AI as a budget line, not a black box.

For example, looking at the `Overview` page of the `AI Usage` dashboard for the current week we can see  all the key metrics of interest and drill into anything that interests us:

<img src="assets/fff_06_2026_01.png" width="800"/>

For more information, see [AI usage](https://help.sigmacomputing.com/docs/ai-usage)

### Assistant Usage Dashboard (Deprecated)
The Sigma Assistant usage dashboard is deprecated and will be unavailable after September 15, 2026. Configure the AI usage dashboard instead.

For more information, see [Configure the AI usage dashboard](https://help.sigmacomputing.com/docs/configure-a-usage-dashboard-for-assistant)

### Cc/Bcc Allowlist When Run Queries as Recipient is Enabled (GA)
For security reasons, if `Run queries as recipient` is enabled, either as an organization requirement or for specific exports, admins must add recipients to an allowlist in export settings before they can be listed as `Cc` or `Bcc` recipients.

For more information, see [Manage export frequency and authentication settings](https://help.sigmacomputing.com/docs/restrict-export-recipients)

### License type column in the Administration > Users table (GA)
The `Administration` > `Usage` > `Users` > `User Detail` table now includes a dedicated `License type` column that indicates the license tier associated with each user's account type.

<img src="assets/fff_06_2026_02.png" width="800"/>

### Support for OpenAI GPT 5.4 (GA)
Sigma now uses `GPT 5.4` instead of `GPT 5.1` if your OpenAI or Azure OpenAI account supports it.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### Build and interact with Sigma agents (Beta) <img src="assets/heart_icon.png" width="25"/>
Build agentic solutions natively in Sigma with Sigma agents. Agents provide AI capabilities to a dashboard or application based on a predefined context of the data elements in a workbook.

**WHY IT MATTERS:**<br>
Sigma agents bring agent-style AI into the place where the data, governance, and audit trail already live — no separate orchestration layer, no shuttling context between systems. Builders define what an agent can see and do inside the workbook itself, so the agent inherits Sigma's permissions, lineage, and version history by default.

For more information, see [Sigma agents](https://help.sigmacomputing.com/docs/sigma-agents), [Build Sigma agents](https://help.sigmacomputing.com/docs/build-sigma-agents), and [Example agent implementations](https://help.sigmacomputing.com/docs/example-agent-implementations)

There are also two QuickStarts on this topic:<br>
[Unlocking Insights from Unstructured Text with a Sigma Agent](https://quickstarts.sigmacomputing.com/guide/aiapps_gong_call_analysis/index.html?index=..%2F..index#0)
<br>
[Build Conversational AI Apps with Chat Elements and Snowflake Cortex](https://quickstarts.sigmacomputing.com/guide/aiapps_chat_element/index.html?index=..%2F..index#0)

### Configure MCP tools to use with Sigma agents (Beta) <img src="assets/heart_icon.png" width="25"/>
Use MCP servers for third-party services with Sigma agents by adding them to Sigma as MCP tools.

**WHY IT MATTERS:**<br>
MCP tools let Sigma agents reach into the systems your team already uses — ticketing, CRM, custom internal APIs — without writing connector code. Open MCP support keeps Sigma compatible with the broader agent ecosystem rather than locking customers into a single AI stack.

For more information, see [Configure MCP tools](https://help.sigmacomputing.com/docs/configure-mcp-tools)

### Create AI Columns (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now create AI columns to enrich your data using natural language prompts. AI columns let you construct dynamic prompts that reference specific table columns, and are useful for tasks like enriching, summarizing, and classifying data.

**WHY IT MATTERS:**<br>
AI columns turn enrichment, classification, and summarization into a one-step workflow inside Sigma — no separate pipeline, no Python, no waiting on data engineering. Analysts can attach language model intelligence directly to existing tables, which is the fastest path from raw operational data to ready-to-analyze attributes.

For more information, see [Create AI columns (Beta)](https://help.sigmacomputing.com/docs/create-ai-columns)

### Use warehouse agents with Assistant and agents (Beta) <img src="assets/heart_icon.png" width="25"/>
Integrate Snowflake Cortex Agents or Databricks Genie Spaces for use with Sigma Assistant and Sigma agent workflows.

**WHY IT MATTERS:**<br>
This is the collaborative AI pattern — Sigma calls into Snowflake Cortex and Databricks Genie rather than competing with them. Customers keep their AI investments in the warehouse, while Sigma supplies the governed runtime, audit trail, and collaboration layer on top.

For more information, see [Use warehouse agents with Sigma](https://help.sigmacomputing.com/docs/use-warehouse-agents-sigma)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### New API endpoint for updating deployment policies (GA)
The `Update a deployment policy` endpoint (`PATCH /v2/deploymentPolicies/{deploymentPolicyId}`) is now available to update an existing deployment policy in Sigma.

For more information, see [Update a deployment policy](https://help.sigmacomputing.com/reference-link/updatedeployment)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** Collapsed and expanded row and column groupings now export as they appear in the workbook. Previously, all rows and columns exported fully expanded.

**2:** Tagging a workbook version that contained custom SQL failed with the error `Cannot read properties of null (reading 'connectionId')`.

**3:** License tier usage counts in `Administration` > `Users` now align with the metrics shown on the Usage dashboard.

**4:** The value column position in pivot table exports now always matches how it appears in the workbook.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20

### Disable/Enable Action Sequences (GA)
Disable a sequence to prevent it from running, then enable it to run again. The disabled state persists across workbook refreshes and user sessions until you manually re-enable the sequence.

For more information, see [Disable and enable sequences](https://help.sigmacomputing.com/docs/create-and-manage-action-sequences#disable-or-enable-sequences)

### Pause/Resume Action Sequences (Deprecated)
The pause/resume option for action sequences has been deprecated and replaced by disable/enable controls. Because the pause state was session-based and not saved, no migration is needed. New and existing sequences automatically reflect the updated controls.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions / Calculations
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in June
Duration: 20

[Unlocking Insights from Unstructured Text with a Sigma Agent](https://quickstarts.sigmacomputing.com/guide/aiapps_gong_call_analysis/index.html?index=..%2F..index#0)<br>
Eight-step build walkthrough using a Sigma agent against Gong call transcripts in Snowflake. No code, no NLP pipeline.

[Build Conversational AI Apps with Chat Elements and Snowflake Cortex](https://quickstarts.sigmacomputing.com/guide/aiapps_chat_element/index.html?index=..%2F..index#0)<br>
End-to-end pattern: a Sigma agent in a workbook calls a Snowflake Cortex Agent as a warehouse tool, with an optional input-table write-back flow.

[Fundamentals 01: Overview (revised content)](https://quickstarts.sigmacomputing.com/guide/fundamentals_1_getting_around_v3/index.html?index=..%2F..index#4)<br>
The AI section is now split into dedicated sections (AI in Sigma, Sigma Assistant, Sigma agents,  chat element, Formula Assistant and MCP Server).
<br>

**WHY IT MATTERS:**<br>
Customers — especially execs and security reviewers — need to see that AI in Sigma isn't just a feature surface; it's wrapped in the operational and governance maturity of the broader platform.



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Security
Duration: 20

### Configure Mutual Transport Layer Security (mTLS) for API Connectors (GA)
You can add client and server certificates to Sigma, allowing you to configure mutual transport layer security (mTLS) for API connectors.

**WHY IT MATTERS:**<br>
mTLS strengthens the trust chain between Sigma and customer-managed APIs, satisfying enterprise security review and compliance requirements where one-way TLS is not enough. This is a foundational capability for regulated industries and customers running Sigma against private, sensitive API endpoints.

For more information, see [Configure mutual transport layer security for API connectors](https://help.sigmacomputing.com/docs/configure-mutual-transport-layer-security-for-api-connectors-in-sigma)

### Manually Specify an OAuth Provider for Organization-Level OAuth (GA)
You can now manually specify an OAuth provider when configuring OAuth as the single sign-on (SSO) method for authenticating to Sigma. This enables the use of custom domain names.

### Select Snowflake role for a connection (GA)
You can now select which Snowflake role to use when performing tasks in Sigma via OAuth connections.

For more information, see [Choose a Snowflake role](https://help.sigmacomputing.com/docs/choose-snowflake-role)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Custom Page Sidebar (GA) <img src="assets/heart_icon.png" width="25"/>
You can enable custom page sidebars to appear on one or more workbook pages. Page sidebars allow you to repeat contents like filters or navigation options across multiple pages.

**WHY IT MATTERS:**<br>
Custom page sidebars give builders a clean way to keep filters, navigation, or contextual content visible across multiple pages without rebuilding it each time. The result is faster workbook authoring and a more consistent reading experience for end users.

Here is a short demo (there is no audio on this one):
<video src="assets/sidebar.mp4"></video>

For more information, see [Add custom page panels to a workbook](https://help.sigmacomputing.com/docs/add-custom-page-panels-to-a-workbook)

### Hierarchy Columns (GA) <img src="assets/heart_icon.png" width="25"/>
Hierarchy columns are now generally available.

<img src="assets/hierarchy_columns.gif">

**WHY IT MATTERS:**<br>
Drill paths and parent/child rollups are core to operational reporting — finance hierarchies, org charts, product taxonomies. Bringing hierarchy columns to GA gives every builder a stable, supported way to model these structures directly in Sigma instead of pre-flattening them upstream.

For more information, see [Work with hierarchies](https://help.sigmacomputing.com/docs/hierarchies) and [RaggedHierarchy](https://help.sigmacomputing.com/docs/raggedhierarchy)

### Navigation element text color configuration
You can now configure text color options on navigation elements for finer styling control.

For more information, see [Use the navigation element to guide user exploration](https://help.sigmacomputing.com/docs/use-the-navigation-element-to-guide-user-exploration)

### Progress bars and progress rings (Beta) <img src="assets/heart_icon.png" width="25"/>
Build a progress bar or progress ring to display a value as a percentage or proportion of a target value.

<video src="assets/progress_bars.mp4"></video>

**WHY IT MATTERS:**<br>
Goal and target tracking shows up everywhere — pipeline coverage, OKRs, fundraising, capacity. Progress bars and rings replace the usual "calc a percentage and explain it" pattern with a clear visual that immediately communicates how close you are to a target.

For more information, see [Build a progress bar](https://help.sigmacomputing.com/docs/build-a-progress-bar) and [Build a progress ring](https://help.sigmacomputing.com/docs/build-a-progress-ring)

### Swap MCP tools, warehouse agents, and API connectors (GA)
When tagging a workbook version, you can swap the API connectors used by `Call API` actions and the MCP tools and warehouse agents used by Sigma agents.

For more information, see [Tag a document version](https://help.sigmacomputing.com/docs/tag-a-document-version)

### Use dynamic text in email exports (GA)
You can now use dynamic text when formatting the `Subject` and `Message` fields in ad hoc and scheduled email exports.

For more information, see [Export to email](https://help.sigmacomputing.com/docs/export-to-email)

### Using #raw in SQL Statements (Deprecated)
The `#raw` directive in custom SQL is deprecated. On December 1, 2026, Sigma will no longer support the `#raw` directive. Update any custom SQL that uses `#raw` to use the `#identifier` directive before that date to avoid query errors.

For more information, see [Replace the #raw directive in custom SQL](https://help.sigmacomputing.com/docs/replace-the-raw-directive-in-custom-sql)

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
