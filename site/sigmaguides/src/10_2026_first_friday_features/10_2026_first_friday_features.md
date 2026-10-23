author: pballai
id: 10_2026_first_friday_features
summary: Summarizes new features, updates, and bug fixes released across Sigma in October 2026, with links to the relevant documentation for each.
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-10-23

# (10-2026) October
<!-- The above name is what appears on the website and is searchable. 

October 9, 2026 changes: done
October 16, 2026 changes: done
October 23, 2026 changes: done
October 30, 2026 changes:

Publish on November 6

 <img src="assets/heart_icon.png" width="25"/>
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in October 2026.

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

### Audit log events for new users (GA)
The Sigma Audit Logs connection now includes a `USER_CREATED` event type that records when new users are added to the organization.

<!-- <img src="assets/fff_10_2026_01.png" width="700"/> -->

For more information, see [Audit log events and metadata](https://help.sigmacomputing.com/docs/audit-log-events-and-metadata)

### Connect to Redshift Serverless (Beta)
A Sigma organization can now connect to an Amazon Redshift Serverless workgroup for use with dashboards, Sigma Assistant, and agents. Write access, such as input tables and materialization, is not available.

<!-- <img src="assets/fff_10_2026_10.png" width="700"/> -->

For more information, see [Connect to Redshift](https://help.sigmacomputing.com/docs/connect-to-redshift)

### Restrict data in exports (Beta)
A new admin setting removes users' ability to send document attachments or dynamic text in exports, and limits export destinations to email, Slack, and Microsoft Teams.

<!-- <img src="assets/fff_10_2026_11.png" width="700"/> -->

For more information, see [Restrict data in exports](https://help.sigmacomputing.com/docs/restrict-export-recipients#restrict-data-in-exports-beta)

### SCIM service accounts for bearer tokens (GA)
All new SCIM bearer tokens generated through SCIM provisioning are now tied to an automatically created service account.

For more information, see [Manage SCIM bearer tokens with a service account](https://help.sigmacomputing.com/docs/manage-users-and-teams-with-scim#manage-scim-bearer-tokens-with-a-service-account)

### Set your language and formatting region (Beta)
Users can now set a display language and formatting region on their profile page. The language changes the text shown in the Sigma interface, and the region controls how numbers, dates, and currency appear.

<!-- <img src="assets/fff_10_2026_12.png" width="700"/> -->

For more information, see [Set your language and formatting region](https://help.sigmacomputing.com/docs/set-your-language-and-formatting-region)

### Sigma now supports the AWS Asia Pacific (Mumbai) region (GA)
Sigma is now deployed in the AWS `ap-south-1` region in Mumbai, providing lower latency for organizations in the area.

For more information, see [Region, warehouse, and feature support](https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support)

### Sigma now supports the AWS Europe (Zurich) region (GA)
Sigma is now deployed in the AWS `eu-central-2` region in Zurich, providing lower latency for organizations in the area.

For more information, see [Region, warehouse, and feature support](https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### AI usage dashboard uses the service account (GA)
The AI usage dashboard now writes to its dashboard tables using the service account credentials instead of individual user credentials, which simplifies tracking of embed users.

For more information, see [Configure the AI usage dashboard](https://help.sigmacomputing.com/docs/configure-ai-usage-dashboard)

### Anthropic as an AI provider (GA) <img src="assets/heart_icon.png" width="25"/>
Anthropic API keys can now be used as an AI provider for Sigma AI features. A secondary embeddings provider is required.

**WHY IT MATTERS:**<br>
Organizations often standardize on a specific model provider for cost, compliance, or performance reasons. Supporting Anthropic alongside other providers lets teams run Sigma's AI features on the model they have already approved, with Sigma's governance applied to how it is used.

<!-- <img src="assets/fff_10_2026_06.png" width="700"/> -->

For more information, see [Add Anthropic as an AI provider](https://help.sigmacomputing.com/docs/manage-external-ai-integrations#add-anthropic-as-an-ai-provider)

### Assistant in build mode: color chart marks by rule (GA)
Sigma Assistant in build mode can now color bar, scatter, combo, and waterfall chart marks by conditional rule, adding visual emphasis without needing extra series.

<!-- <img src="assets/fff_10_2026_07.png" width="700"/> -->

For more information, see [Use AI to build dashboards and apps](https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps)

### Assistant in build mode: new capabilities (GA) <img src="assets/heart_icon.png" width="25"/>
Sigma Assistant in build mode can now create and configure more of a workbook from a conversation:

* Dynamic dashboard layouts: design dashboards that default to a dynamic layout, with a prominent hero chart or KPI alongside the other elements.
* Page duplication: duplicate pages, including width, background color, header, sidebar, and synced controls.
* Page and container background images: configure the image source, fit, and alignment.
* Waterfall charts: compare positive and negative changes across categories over time.
* Progress bars and rings: show progress toward a goal using a percentage or bounded value.
* Workbook layout settings: set a custom mobile layout and grid visibility options.

**WHY IT MATTERS:**<br>
Layout, charting, and page-setup details are often what slow a first draft down. Building them through conversation lets analysts and builders reach a polished, shareable workbook faster, with Sigma's governance applied from the start.

<!-- <img src="assets/fff_10_2026_02.png" width="700"/> -->

For more information, see [Use AI to build dashboards and apps](https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps)

### Assistant in workbooks: governed metric timelines in KPIs (GA)
When Sigma Assistant builds a KPI from a governed metric, it now automatically applies the metric's configured timeline, precision, and comparison period.

### New model for Snowflake AI providers on Azure (GA)
Snowflake accounts hosted on Azure now use GPT 5.1 as the LLM.

For more information, see [Supported AI models](https://help.sigmacomputing.com/docs/supported-ai-models)

### Send Claude dashboards to Sigma (GA) <img src="assets/heart_icon.png" width="25"/>
AI-generated dashboard prototypes created in Claude can be exported to Sigma as governed, shareable workbooks and apps using the Sigma MCP server.

**WHY IT MATTERS:**<br>
AI-generated prototypes often stall before anyone can safely share them. Exporting to Sigma turns a prototype into a governed workbook, with permissions and audit logging applied, so teams can move from idea to shared app without rebuilding it.

<!-- <img src="assets/fff_10_2026_03.png" width="700"/> -->

For more information, see [Use the Sigma MCP server](https://help.sigmacomputing.com/docs/use-sigma-mcp-server)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### Build workbooks with Sigma MCP server (GA)
AI assistants connected to the Sigma MCP server can now create workbooks from natural language requests.

For more information, see [Use the Sigma MCP server](https://help.sigmacomputing.com/docs/use-sigma-mcp-server)

### Custom SMTP server endpoints (GA)
Three new endpoints, `GET`, `PATCH`, and `DELETE`, let you manage the organization's custom SMTP server settings programmatically.

### New bursting options for export endpoints (GA)
Three endpoints now support the `exportDestination`, `dynamicExportSettings`, and `dynamicRecipientSettings` parameters: the Export workbook endpoint (`POST /v2/workbooks/:workbookId/send`), and the create and update schedule endpoints.

For more information, see [Export workbook](https://help.sigmacomputing.com/reference/send-workbook)

### New `language` and `languageVariant` options for workbook export endpoints (GA)
Four endpoints now accept the `language` and `languageVariant` options, which apply a workbook translation to exported content.

For more information, see [Export workbook](https://help.sigmacomputing.com/reference/export-workbook), [Send workbook](https://help.sigmacomputing.com/reference/send-workbook), [Create workbook schedule](https://help.sigmacomputing.com/reference/post-workbook-schedule), and [Update workbook schedule](https://help.sigmacomputing.com/reference/update-workbook-schedule)

### New options available for member endpoints (GA)
Four member endpoints now include `language` and `formatRegion` fields for setting or retrieving a member's display language and formatting region.

For more information, see [Get member](https://help.sigmacomputing.com/reference/get-member), [List members](https://help.sigmacomputing.com/reference/list-members), [Create member](https://help.sigmacomputing.com/reference/create-member), and [Update member](https://help.sigmacomputing.com/reference/update-member)

### New request body shape for the Export workbook endpoint (GA)
The Export workbook endpoint (`POST /v2/workbooks/:workbookId/send`) now accepts a new request body shape, `configV2`.

### Represent buttons with icons in the code representation of a workbook (Beta)
The code representation of a workbook can now include buttons with icons.

For more information, see [Button elements](https://help.sigmacomputing.com/docs/button-elements) and [Manage workbooks as code (Beta)](https://help.sigmacomputing.com/docs/manage-workbooks-as-code)

### Stack containers code representation (Beta)
The Sigma API can now read and write the code representation of stack containers in workbooks.

For more information, see [Manage workbooks as code (Beta)](https://help.sigmacomputing.com/docs/manage-workbooks-as-code)

### Storage integrations endpoints (GA)
Eight new endpoints cover general storage integration management, as well as storage integrations used for audit logs.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** The IANA time zone database used for CSV uploads is updated, so date and time values are processed correctly for recently modified time zones such as Vancouver and Edmonton.

**2:** After copying and pasting an element sourced from an input table or custom SQL, an error displayed and the page failed to load.

**3:** Sigma Assistant in the workbook now keeps a column folder and its columns together when grouping a table by that folder, instead of splitting them into separate keys.

**4:** Table header and cell formatting, including color, font, and banding selections, is now preserved when exporting to Excel and Google Sheets.

**5:** Tagging a workbook that contains an input table failed with an error.

**6:** Tagging a workbook with a version tag named `Published` failed with a duplicate item key error.

**7:** User interactions with `Explain this chart` now appear in the AI usage table with user attribution and token usage details.

**8:** When Sigma Assistant builds a chart from a table's governed metric, the chart now resolves and displays the metric even when the columns used in its formula are hidden on the parent table.

**9:** When exporting, tables with groupings and totals now render subtotals as rows, matching pivot table exports. Previously, exported subtotals appeared as additional table columns.

**10:** When you configure an `Insert row(s)` action that uses the `Source data` insert type, the source table list now shows only tables on the same data platform provider as the target. Existing actions with a source on a different provider show a warning in the configuration modal.

**11:** On the admin portal `Dataset migration` page, queries could time out and freeze the page for organizations with many datasets.

**12:** In the code representation of a workbook, `inputMode` for input tables that are editable in draft returned an incorrect value. The endpoint now returns the correct value.

**13:** When you run a dataset migration with `Update references`, users who are actively editing a document that uses the old dataset must now select `Update to latest version` before they can publish. This prevents the published version from reverting to the dataset.

**14:** For Google Cloud Storage external storage, the `Warehouse storage integration name` field is now required, and the `Path prefix` field rejects a leading or trailing `/`, the wildcards `*` and `?`, and `..` path segments. Settings that previously caused CSV upload failures are now validated.

**15:** When you migrate a dataset to a data model, some references failed to update to the newly created data model.

**16:** When you add sources to a document, you can now add multiple data sources without closing the source picker by hovering over a source and selecting `Add source`.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20

### Embed Sigma documentation (GA)
Embedding Sigma documentation now requires the `embedded=true` query parameter, for example `https://help.sigmacomputing.com/welcome?embedded=true`.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in October
Duration: 20

<!-- Add new QuickStarts published in October 2026 -->


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Templates
Duration: 20

### New AI cost monitoring templates (GA)
Three new templates monitor AI spending for Claude Platform, Cursor, and Databricks. Each template shows all AI costs for that tool, not only the costs incurred through Sigma.

<!-- <img src="assets/fff_10_2026_13.png" width="700"/> -->

For more information, see [Claude Platform spend template](https://help.sigmacomputing.com/docs/claude-platform-spend-template), [Cursor spend template](https://help.sigmacomputing.com/docs/cursor-spend-template), and [Databricks spend template](https://help.sigmacomputing.com/docs/databricks-spend-template)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Apply control changes in custom views to scheduled exports (GA)
Control changes made in a custom view can now be applied to scheduled exports using a new option.

<!-- <img src="assets/fff_10_2026_08.png" width="700"/> -->

For more information, see [Configure additional options for exports](https://help.sigmacomputing.com/docs/configure-additional-options-for-exports#filter-by-control-values)

### Apply translations in workbook or report export attachments (GA)
Translations added to a workbook or report can now be applied to exports of that document.

<!-- <img src="assets/fff_10_2026_14.png" width="700"/> -->

For more information, see [Apply translations in workbook or report export attachments](https://help.sigmacomputing.com/docs/manage-workbook-localization#apply-translations-in-workbook-or-report-export-attachments-beta)

### Create custom email export templates (GA)
Organizations can now create reusable success, failure, and suspension messages for email exports.

<!-- <img src="assets/fff_10_2026_15.png" width="700"/> -->

For more information, see [Create custom email export templates](https://help.sigmacomputing.com/docs/create-custom-email-export-templates)

### Select Microsoft integration permission levels (GA)
Administrators can now choose between write-only and read/write permission levels for the Microsoft integration.

<!-- <img src="assets/fff_10_2026_09.png" width="700"/> -->

For more information, see [Manage the Microsoft integration](https://help.sigmacomputing.com/docs/manage-microsoft-integration#permission-levels)

### Split workbook download by control values (GA)
Workbook downloads can now be split by the values of a list control. Sigma returns a zipped file containing a separate download, with data customized for each selected value.

<!-- <img src="assets/fff_10_2026_04.png" width="700"/> -->

For more information, see [Download workbook data](https://help.sigmacomputing.com/docs/download-workbook-data#about-splitting-a-download-by-control-values)

### Stack layout for containers (GA) <img src="assets/heart_icon.png" width="25"/>
Containers can now use a stack layout, which arranges elements automatically using a flexbox-inspired model to produce responsive layouts.

**WHY IT MATTERS:**<br>
Dashboards are viewed on many screen sizes, and manual positioning rarely holds up across them. Stack layouts adapt automatically, so builders maintain one layout instead of several and viewers get a consistent experience.

<!-- <img src="assets/fff_10_2026_05.png" width="700"/> -->

For more information, see [Use stacks to make responsive layouts](https://help.sigmacomputing.com/docs/use-stacks-to-make-responsive-layouts)


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
