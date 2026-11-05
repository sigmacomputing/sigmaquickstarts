author: pballai
id: 10_2026_first_friday_features
summary: Summarizes new features, updates, and bug fixes released across Sigma in October 2026, with links to the relevant documentation for each.
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-11-06

# (10-2026) October
<!-- The above name is what appears on the website and is searchable. 

October 9, 2026 changes: done
October 16, 2026 changes: done
October 23, 2026 changes: done
October 30, 2026 changes: done

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

### AI usage dashboard enhancements (GA)
The AI usage dashboard and table now show email addresses as user names instead of `External User`, which helps attribute AI usage to embed users. Search indexing is now available as a filter, so you can identify the tokens used to create document embeddings in Sigma.

<!-- <img src="assets/fff_10_2026_16.png" width="700"/> -->

### Audit log events for new users (GA)
The Sigma Audit Logs connection now includes a `USER_CREATED` event type that records when new users are added to the organization.

<!-- <img src="assets/fff_10_2026_01.png" width="700"/> -->

For more information, see [Audit log events and metadata](https://help.sigmacomputing.com/docs/audit-log-events-and-metadata)

### Connect to Redshift Serverless (Beta)
A Sigma organization can now connect to an Amazon Redshift Serverless workgroup for use with dashboards, Sigma Assistant, and agents. Write access, such as input tables and materialization, is not available.

<!-- <img src="assets/fff_10_2026_10.png" width="700"/> -->

For more information, see [Connect to Redshift](https://help.sigmacomputing.com/docs/connect-to-redshift)

### Manage frequency presets for materialization schedules (Beta)
Admins can create frequency presets that recommend materialization schedules. Presets appear in the `Frequency` dropdown, and users can still choose `Custom`.

<!-- <img src="assets/fff_10_2026_17.png" width="700"/> -->

For more information, see [Manage materialization schedules with frequency presets](https://help.sigmacomputing.com/docs/manage-materializations#manage-materialization-schedules-with-frequency-presets-beta)

### Manage JWT bearer OAuth key sets (GA)
Admins can create key sets for OAuth connections to rotate JSON Web Token signing keys before the active key expires, without changing the JWKS URL.

For more information, see [Manage JWT bearer OAuth key sets](https://help.sigmacomputing.com/docs/manage-jwt-bearer-oauth-key-sets)

### Provide a reason when denying a protected tag request (GA)
When you deny a request to tag a document version with a protected tag, you can now include a reason. The reason is added to the email sent to the requesting user.

For more information, see [Create and manage version tags](https://help.sigmacomputing.com/docs/create-and-manage-version-tags)

### Restrict data in exports (Beta)
A new admin setting removes users' ability to send document attachments or dynamic text in exports, and limits export destinations to email, Slack, and Microsoft Teams.

<!-- <img src="assets/fff_10_2026_11.png" width="700"/> -->

For more information, see [Restrict data in exports](https://help.sigmacomputing.com/docs/restrict-export-recipients#restrict-data-in-exports-beta)

### SCIM service accounts for bearer tokens (GA)
All new SCIM bearer tokens generated through SCIM provisioning are now tied to an automatically created service account.

For more information, see [Manage SCIM bearer tokens with a service account](https://help.sigmacomputing.com/docs/manage-users-and-teams-with-scim#manage-scim-bearer-tokens-with-a-service-account)

### Select Microsoft integration permission levels (GA)
Administrators can now choose between write-only and read/write permission levels for the Microsoft integration.

<!-- <img src="assets/fff_10_2026_09.png" width="700"/> -->

For more information, see [Manage the Microsoft integration](https://help.sigmacomputing.com/docs/manage-microsoft-integration#permission-levels)

### Set data residency region for OpenAI AI provider (GA)
If you use OpenAI as your AI provider, you can now set a data residency region to use a region-specific endpoint.

For more information, see [Manage external AI integrations](https://help.sigmacomputing.com/docs/manage-external-ai-integrations)

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

### Assistant in workbooks: new build mode capabilities (GA)
Sigma Assistant in build mode now supports additional capabilities:

* Treemap charts: create a treemap, or convert an existing chart to one.
* Dynamic chips: add them to agent instructions, similar to dynamic text.
* Actions on pivot tables: configure `Move column` and `Swap column` actions that target rows, columns, or values.

<!-- <img src="assets/fff_10_2026_18.png" width="700"/> -->

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

### API impersonation support for running Sigma agents (GA)
With API impersonation, you can run Sigma agents as the impersonated user, including agents you run on behalf of your embedded application's users. If an agent uses a `Call API` action as an action tool and the API connector requires per-user OAuth, the action fails when impersonating a user.

For more information, see [Impersonate users](https://help.sigmacomputing.com/docs/impersonate-users#impersonate-users-for-api-calls)

### Build workbooks with Sigma MCP server (GA)
AI assistants connected to the Sigma MCP server can now create workbooks from natural language requests.

For more information, see [Use the Sigma MCP server](https://help.sigmacomputing.com/docs/use-sigma-mcp-server)

### Custom SMTP server endpoints (GA)
Three new endpoints, `GET`, `PATCH`, and `DELETE`, let you manage the organization's custom SMTP server settings programmatically.

For more information, see [Get the SMTP settings for an organization](https://help.sigmacomputing.com/reference/get-smtp-settings), [Update the SMTP settings for an organization](https://help.sigmacomputing.com/reference/update-smtp-settings), and [Delete the SMTP settings for an organization](https://help.sigmacomputing.com/reference/delete-smtp-settings)

### New API endpoints for managing JWK sets (GA)
New endpoints let you create, rotate, and delete the JSON Web Key sets that sign JWT bearer tokens for a connection, so you can monitor and rotate them programmatically.

For more information, see [Create a JWK set](https://help.sigmacomputing.com/reference/create-jwk-set), [List JSON Web Keys](https://help.sigmacomputing.com/reference/list-json-web-keys), [Create a JSON Web Key](https://help.sigmacomputing.com/reference/create-json-web-key), [Activate a JSON Web Key](https://help.sigmacomputing.com/reference/activate-json-web-key), [Delete a JSON Web Key](https://help.sigmacomputing.com/reference/delete-json-web-key), [Delete a JWK set](https://help.sigmacomputing.com/reference/delete-jwk-set), and [List all JSON Web Keys](https://help.sigmacomputing.com/reference/list-all-json-web-keys)

### New API endpoints for swapping sources (Beta)
Two new endpoints swap the source elements of a workbook (`POST /v2/workbooks/:workbookId/swapSourceElements`) or a data model (`POST /v2/dataModels/:workbookId/swapSourceElements`).

For more information, see [Swap workbook source elements](https://help.sigmacomputing.com/reference/swap-workbook-source-elements) and [Swap data model source elements](https://help.sigmacomputing.com/reference/swap-data-model-source-elements)

### New bursting options for export endpoints (GA)
Three endpoints now support the `exportDestination`, `dynamicExportSettings`, and `dynamicRecipientSettings` parameters: the Export workbook endpoint (`POST /v2/workbooks/:workbookId/send`), and the create and update schedule endpoints.

For more information, see [Export workbook](https://help.sigmacomputing.com/reference/send-workbook)

### New field included in response for List sources endpoints (GA)
The List data model sources, List workbook sources, and List report sources endpoints now include a `customSqlSourceId` field for sources with a type of `custom-sql`.

For more information, see [List data model sources](https://help.sigmacomputing.com/reference/list-data-model-sources), [List workbook sources](https://help.sigmacomputing.com/reference/get-workbook-sources), and [List report sources](https://help.sigmacomputing.com/reference/list-report-sources)

### New `language` and `languageVariant` options for workbook export endpoints (GA)
Four endpoints now accept the `language` and `languageVariant` options, which apply a workbook translation to exported content.

For more information, see [Export workbook](https://help.sigmacomputing.com/reference/export-workbook), [Send workbook](https://help.sigmacomputing.com/reference/send-workbook), [Create workbook schedule](https://help.sigmacomputing.com/reference/post-workbook-schedule), and [Update workbook schedule](https://help.sigmacomputing.com/reference/update-workbook-schedule)

### New option available for Swap report data sources endpoint (GA)
The Swap report data sources endpoint (`POST /v2/reports/{reportId}/swapSources`) now includes a `customSqlSourceId` option to swap from a custom SQL source. The response includes `unswappedSources` for any sources that were not swapped.

For more information, see [Swap report data sources](https://help.sigmacomputing.com/reference/source-swap-report)

### New options available for member endpoints (GA)
Four member endpoints now include `language` and `formatRegion` fields for setting or retrieving a member's display language and formatting region.

For more information, see [Get member](https://help.sigmacomputing.com/reference/get-member), [List members](https://help.sigmacomputing.com/reference/list-members), [Create member](https://help.sigmacomputing.com/reference/create-member), and [Update member](https://help.sigmacomputing.com/reference/update-member)

### New request body shape for the Export workbook endpoint (GA)
The Export workbook endpoint (`POST /v2/workbooks/:workbookId/send`) now accepts a new request body shape, `configV2`.

For more information, see [Export a workbook](https://help.sigmacomputing.com/reference/send-workbook)

### Represent buttons with icons in the code representation of a workbook (Beta)
The code representation of a workbook can now include buttons with icons.

For more information, see [Button elements](https://help.sigmacomputing.com/docs/button-elements) and [Manage workbooks as code (Beta)](https://help.sigmacomputing.com/docs/manage-workbooks-as-code)

### Stack containers code representation (Beta)
The Sigma API can now read and write the code representation of stack containers in workbooks.

For more information, see [Manage workbooks as code (Beta)](https://help.sigmacomputing.com/docs/manage-workbooks-as-code)

### Storage integrations endpoints (GA)
Eight new endpoints cover general storage integration management, as well as storage integrations used for audit logs.

For more information, see [List storage integrations for an organization](https://help.sigmacomputing.com/reference/list-storage-integrations), [Create a storage integration](https://help.sigmacomputing.com/reference/create-storage-integration), [Update a storage integration](https://help.sigmacomputing.com/reference/update-storage-integration), [Delete a storage integration](https://help.sigmacomputing.com/reference/delete-storage-integration), [Get the audit logging storage integration](https://help.sigmacomputing.com/reference/get-audit-logging-storage-integration), [Create the audit logging storage integration](https://help.sigmacomputing.com/reference/create-audit-logging-storage-integration), [Update the audit logging storage integration](https://help.sigmacomputing.com/reference/update-audit-logging-storage-integration), and [Delete the audit logging storage integration](https://help.sigmacomputing.com/reference/delete-audit-logging-storage-integration)


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

**17:** Archiving a tenant failed with a `Failed to archive tenant(s)` error for some tenants because of inconsistently archived deployment records.

**18:** Badges now use sentence case instead of all caps. For example, `Beta` instead of `BETA`.

**19:** Sigma now enforces the `Manage agents` permission when users create agents through the Sigma MCP server.

**20:** Sparklines now display correctly for data with null y values instead of showing an error.

**21:** Tagging a data model version no longer fails with a writeback schema error when the draft has an input table on a non-OAuth connection.

**22:** Tagging a version and swapping the source of a workbook that contains a Databricks Genie Agent tool for a Sigma agent no longer fails with a `Path not found` error.

**23:** When selecting a source, users now see only the tagged data model versions they have access to.

**24:** Selecting `Stop` in Sigma Assistant now cancels any running query, and Assistant queries time out after 120 seconds.


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

### Find and Interact with Sigma Workbooks in Claude Desktop
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/aiapps_find_and_interact_with_sigma_workbooks/index.html) shows how to run a small local MCP server so Claude Desktop can find a Sigma workbook by name and open it, live and interactive, in Claude's browser pane.

### Layout Composer: Governed Self-Service Layouts with Workbook as Code
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/developers_layout_composer/index.html) shows how to build an application where users choose Sigma elements, place them in zones on a canvas, and generate a real Sigma workbook from their selections, using workbook as code and the REST API while Sigma continues to supply the governed data.

<video src="assets/layout_composer_save1.mp4"></video>

### Migrating From Excel Made Easy
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/developers_migrating_from_excel_made_easy/index.html) shows how to use the excel-to-sigma Claude Code skill to migrate an Excel rolling forecast to a Sigma data model and workbook, keep the forecast inputs editable with input tables, and verify that Sigma's totals tie to Excel's.


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

For more information, see [Apply translations in workbook or report export attachments](https://help.sigmacomputing.com/docs/manage-workbook-localization#apply-translations-in-workbook-or-report-export-attachments)

### Create custom email export templates (GA)
Organizations can now create reusable success, failure, and suspension messages for email exports.

<!-- <img src="assets/fff_10_2026_15.png" width="700"/> -->

For more information, see [Create custom email export templates](https://help.sigmacomputing.com/docs/create-custom-email-export-templates)

### Progress bars and progress rings (GA)
Build a progress bar or ring to show a value as a percentage or proportion of a target value.

<!-- <img src="assets/fff_10_2026_19.png" width="700"/> -->

For more information, see [Build a progress bar](https://help.sigmacomputing.com/docs/build-a-progress-bar) and [Build a progress ring](https://help.sigmacomputing.com/docs/build-a-progress-ring)

### Split workbook download by control values (GA)
Workbook downloads can now be split by the values of a list control. Sigma returns a zipped file containing a separate download, with data customized for each selected value.

<!-- <img src="assets/fff_10_2026_04.png" width="700"/> -->

For more information, see [Download workbook data](https://help.sigmacomputing.com/docs/download-workbook-data#about-splitting-a-download-by-control-values)

### Stack layout for containers (GA) <img src="assets/heart_icon.png" width="25"/>
Containers can now use a stack layout, which arranges elements automatically using a flexbox-inspired model to produce responsive layouts.

**WHY IT MATTERS:**<br>
Dashboards are viewed on many screen sizes, and manual positioning rarely holds up across them. Stack layouts adapt automatically, so builders maintain one layout instead of several and viewers get a consistent experience.

<video src="assets/stack_layout_intro.mp4"></video>

For more information, see [Use stacks to make responsive layouts](https://help.sigmacomputing.com/docs/use-stacks-to-make-responsive-layouts)

### Updated appearance for segmented controls (GA)
Segmented controls now use a `Surface` color, rather than a `Highlight` color, to show the selected segment.

### Updated UI icons (GA)
Icons across Sigma now have a thinner stroke, some match the surrounding text color, and several have new designs. The change is visual only.


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
