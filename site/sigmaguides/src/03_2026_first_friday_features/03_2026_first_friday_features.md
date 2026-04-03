author: pballai
id: 03_2026_first_friday_features
summary: 03_2026_first_friday_features
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2025-04-03

# (03-2026) March

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in March 2026.

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

### Native support for Databricks variant type (Beta)
Sigma now natively supports the `Variant` data type on Databricks connections.

Previously, columns with the `Variant` data type in Databricks were treated as text data in Sigma. Now, they are treated as variant data.

### Support for Azure customer-owned cloud storage integration
Admins can now add an Azure Blob Storage integration to use customer-owned cloud storage with the following features:

- CSV upload
- File upload column in input tables
- Export to cloud storage

This adds Azure to the existing AWS and GCP storage options that give your organization control over where your files live, who can access them, how long they’re retained, and how they’re encrypted.

For more information, see [Configure storage integration using customer-owned bucket](https://help.sigmacomputing.com/docs/configure-storage-integration-using-customer-owned-bucket)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20

### CSV upload using customer-owned cloud storage (GA) <img src="assets/heart_icon.png" width="25"/>
CSV upload using a customer-owned cloud storage data flow is now generally available. This option offers an alternative to the default data flow through Sigma's infrastructure.

When customer-owned cloud storage is enabled, raw and processed CSV files are staged in a customer-owned bucket (instead of a Sigma-owned bucket) before loading to the data platform. Your company controls the bucket region, access, TTL, etc., helping your organization meet security and compliance requirements.

For more information, see [Configure CSV upload and storage options](https://help.sigmacomputing.com/docs/configure-csv-upload-and-storage-options) and [Configure storage integration using customer-owned bucket](https://help.sigmacomputing.com/docs/configure-storage-integration-using-customer-owned-bucket)

### Scheduled action sequences (Beta) <img src="assets/heart_icon.png" width="25"/>
Scheduled action sequences are workflows that run automatically on a schedule, without requiring a user to open or interact with the workbook. You can use scheduled action sequences to periodically send notifications, refresh data, write to input tables, and more.

The following actions can be scheduled:

- Notifications and exports
- Input table row changes
- Stored procedure calls
- Python element execution

Scheduled action sequences also support conditional if/else statements, and you can schedule multiple action sequences to run at different frequencies.

For more information, see [Configure an action sequence to run on a schedule](https://help.sigmacomputing.com/docs/schedule-action-sequences-to-run-automatically)

There is also a QuickStart, [Automate Inventory Alerts with Scheduled Actions](https://quickstarts.sigmacomputing.com/guide/aiapps_scheduled_actions/index.html?index=..%2F..index#3)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### Advanced token and authorization request parameters for API credentials
When configuring an API credential with an OAuth authentication method, you can optionally add parameters to the token or authorization requests.

These additional parameters can be used to satisfy authentication requirements for particular API endpoints. 

For more information, see [Add API credentials and connectors to Sigma](https://help.sigmacomputing.com/docs/configure-api-credentials-and-connectors-in-sigma#add-a-new-api-credential-to-sigma)

### New API endpoints to support Reporting  <img src="assets/heart_icon.png" width="25"/>
The following endpoints are now available:

- Create a report (POST /v2/reports)
- List reports (GET /v2/reports)
- Get a report (GET /v2/reports/{reportId})
- List report sources (GET /v2/reports/{reportId}/sources)
- Duplicate a report (POST /v2/reports/{reportId}/copy)

**Export endpoints:**
- Export data from a report (POST /v2/reports/{reportId}/export)
- Export a report (POST /v2/reports/{reportId}/send)

**Export schedules endpoints:**
- List scheduled report exports (GET /v2/reports/{reportId}/schedules)
- Add report schedule (POST /v2/reports/{reportId}/schedules)
- Update a report schedule (PATCH /v2/reports/{reportId}/schedules/{scheduleId})
- Delete a scheduled export for a report (DELETE /v2/reports/{reportId}/schedules/{scheduleId})

For more information, see [REST API - REPORTS](https://help.sigmacomputing.com/reference/listreports)

### New email option for the List members endpoint
The [List members (GET /v2/members)](https://help.sigmacomputing.com/reference/listmembers) endpoint includes a new option to filter the list of users by email address. Use this option instead of the search option.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** Charts in PNG exports now display as intended.

**2:** When deploying documents to tenant organizations, a document removed from a deployment policy was not redeployed after it was re-added to the deployment policy.

**3:** When you create a metric that uses a column with column-level security configured, the metric no longer displays as an error to unauthorized users and is instead only visible to users with access to the column.

**4:** For a workbook with a stored procedure action, tagging a version and swapping the source no longer fails with an error. You might need to sync the stored procedure after tagging the version.

**5:** After changing the Snowflake role in Sigma, write-back destinations available to a user did not update automatically.

**6:** You can now change the data source of an element that uses a Snowflake semantic view as a source.

**7:** Keyboard handling in the `Edit` column descriptions modal has been fixed to restore `space key` entry.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

### Creating hierarchies from the Manage hierarchies popover (Deprecated)
Starting **September 15, 2026**, you will no longer be able to create new hierarchies in the `Manage hierarchies popover`, or edit existing hierarchies created from the popover. 

Instead, migrate to [hierarchy columns](https://help.sigmacomputing.com/docs/hierarchies)

### Datasets (Deprecated)
Starting **June 2, 2026**, creating new datasets and editing existing datasets will no longer be available.

Starting **September 15, 2026**, you will no longer be able to use datasets as a data source or view datasets in Sigma.

Migrate existing datasets to data models, and update any documents that use datasets as a source to use data models instead. 

For more information, see [Migrate a dataset to a data model](https://help.sigmacomputing.com/docs/migrate-a-dataset-to-a-data-model)

### Deprecated option for List members endpoint (Deprecated)
The search option for the [List members (GET /v2/members)](https://help.sigmacomputing.com/reference/listmembers) endpoint is now deprecated and will be removed on September 15, 2026. Instead, use the new email parameter to filter API requests.

### Null-safe join comparison operators
Joins support null-safe comparison operators, including null-safe equal to (<=>) and null-safe not equal to (<!=>).

Null-safe comparison operators return True or False instead of Null when comparing against Null. For example, Null = 1 returns Null, while Null <=> 1 returns False. 

For more information, see [Create and edit joins in data models and workbooks](https://help.sigmacomputing.com/docs/create-and-edit-joins-in-data-models-and-workbooks#create-a-join)

### Validate content in a data model (GA) <img src="assets/heart_icon.png" width="25"/>
When you make changes to a data model, those changes affect users of workbooks that use the data model as a source.

You can now validate content to prevent breaking changes to those workbooks. Instead of manually replacing and updating deleted or changed columns, elements, metrics, and relationships in affected documents, you can validate content in the data model and prevent these errors.

For more information, see [Validate content in a data model](https://help.sigmacomputing.com/docs/validate-content-data-model) and [Sync a draft with the latest published version](https://help.sigmacomputing.com/docs/edit-draft-and-publish-a-workbook#sync-a-draft-with-the-latest-published-version)

There is also a QuickStart: [Fundamentals 10: Data Modeling](https://quickstarts.sigmacomputing.com/guide/fundamentals_10_data_modeling/index.html?index=..%2F..index#0)

For developers, see [Data Models as Code](https://quickstarts.sigmacomputing.com/guide/developers_data_models_as_code/index.html?index=..%2F..index#0)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20

### New document:element:nodata outbound JavaScript event
A new document:element:nodata outbound JavaScript event is now available. For example, use the event to change the embedded content if no data is returned for an element.

For more information, see [Outbound event reference](https://help.sigmacomputing.com/docs/outbound-event-reference)

### New option for document:navigateto inbound JavaScript event
The document:navigateto inbound JavaScript now takes the inodeId of a workbook, report, or data model page as a property. 

For more information, see [Inbound event reference for more details](https://help.sigmacomputing.com/docs/inbound-event-reference#documentnavigateto)

### New option for workbook:mode:update inbound JavaScript event
The workbook:mode:update inbound JavaScript event now supports edit as a mode.

For more information, see [Inbound event reference](https://help.sigmacomputing.com/docs/inbound-event-reference)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in March
Duration: 20

### Build an Interactive Storefront with Repeaters and Actions (AI Apps) <img src="assets/heart_icon.png" width="25"/>
This one shows how to build a polished, role-based operational interface — complete with live inventory data, product filtering, and a notification center — using Sigma's Repeated container element and a lightweight data model.

[Build an Interactive Storefront with Repeaters and Actions](https://quickstarts.sigmacomputing.com/guide/aiapps_storefront_repeaters/index.html?index=..%2F..index#0)

WHY IT MATTERS:
This QuickStart shows how to build what would otherwise require a dedicated front-end developer — in about 30 minutes, without writing application code. The pattern applies anywhere you need a focused operational interface: field technicians, sales reps, warehouse managers. Define the card once, wire the controls once, and Sigma handles the rest.

### Integrate ServiceNow using API Actions
A new QuickStart to complete the `API Actions` enterprise trifecta—Sales ([Salesforce](https://quickstarts.sigmacomputing.com/guide/developers_api_actions_salesforce/index.html?index=..%2F..index#0)), Development ([JIRA](https://quickstarts.sigmacomputing.com/guide/developers_api_actions_jira/index.html?index=..%2F..index#0)), and now IT Operations (ServiceNow)—covering the three most common operational integration scenarios.

This one walks through how to:
- Configure ServiceNow Basic Auth credentials and an API connector with dynamic state filtering
- Parse nested JSON responses into an interactive incidents table using a Python element on Snowflake
- Build a modal write-back workflow to update incident states in ServiceNow and auto-refresh the workbook

WHY IT MATTERS:
No ETL, no middleware, no backend code—just live ServiceNow data in Sigma with full bidirectional sync. The same pattern works for any REST API with Basic Auth (Zendesk, GitHub, Freshservice, PagerDuty).

[](https://quickstarts.sigmacomputing.com/guide/developers_api_actions_servicenow/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Reports
Duration: 20

### Create pixel-perfect reports (GA) <img src="assets/heart_icon.png" width="25"/>
Creating reports in Sigma to generate predictable and pixel-perfect exports is now generally available. In addition to existing formatting, pagination, export, and embedding abilities, the following functionality is now available:

- Creating report templates and sharing them with users both within and outside your organization.
- Adding version tags to reports, including input table version tagging support.

For more information, see [Reports overview](https://help.sigmacomputing.com/docs/reports-overview) and [Tutorial: Build and export a sales report](https://help.sigmacomputing.com/docs/tutorial-build-and-export-a-sales-report)

There is also a QuickStart, [Fundamentals 11: Pixel Perfect Reporting](https://quickstarts.sigmacomputing.com/guide/fundamentals_11_pixel_perfect_reporting/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Choose from theme categorical colors in workbook color picker
When you configure colors for workbook elements using the color picker, you can now choose from the workbook theme's configured categorical colors.

For more information, see [Create and manage workbook theme](https://help.sigmacomputing.com/docs/create-and-manage-workbook-themes)

### Conditional formatting for repeated container cards
Repeated container cards support conditional formatting, allowing you to configure conditional background colors based on the row in the data source connected to each card.

For more information, see [Use repeated containers to generate layouts from data (Beta)](https://help.sigmacomputing.com/docs/use-repeated-containers-to-generate-layouts-from-data#style-repeated-container-cards)

### Custom page header formatting options <img src="assets/heart_icon.png" width="25"/>
Custom page headers now support advanced formatting options, including border style and background images.

For more information, see [Add custom page headers to a workbook](https://help.sigmacomputing.com/docs/add-custom-page-headers-to-a-workbook)

### Hierarchy column support for Databricks connections (Beta)
Creating and editing hierarchy columns is now supported for Databricks connections.

For more information, see [Work with hierarchies (Beta)](https://help.sigmacomputing.com/docs/hierarchies) and the [RaggedHierarchy (Beta)](https://help.sigmacomputing.com/docs/raggedhierarchy) function reference for more information.

### Updated conditional formatting UI
The `Conditional formatting` section has been redesigned to match other formatting options in the editor panel. The change is aesthetic and does not impact any functionality.

For more information, see [Apply conditional formatting to table columns and cells](https://help.sigmacomputing.com/docs/format-and-customize-a-table#apply-conditional-formatting-to-table-columns-and-cells)



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
