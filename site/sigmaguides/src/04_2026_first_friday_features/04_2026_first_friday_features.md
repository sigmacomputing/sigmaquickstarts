author: pballai
id: 04_2026_first_friday_features
summary: 04_2026_first_friday_features
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-04-14

# (04-2026) April
<!-- The above name is what appears on the website and is searchable. 

April 3, 2026 changes:
April 10th, 2026 changes:
April 17, 2026 changes:
April 24, 2026 changes:
April 30, 2026 changes:


Publish on May 1

 <img src="assets/heart_icon.png" width="25"/>
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in April 2026.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available)

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

### Subscribe to What's New in Sigma
For those wanting to see what Sigma is doing on each week, release notes are now also available on the [Sigma Community site](https://community.sigmacomputing.com/) There, you can **opt in to receive notifications about future release notes** in order to stay on top of everything new happening at Sigma. You can also subscribe to automated updates in any Slack channel using the Sigma Community release notes RSS feed. 

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

### Azure Blob Storage Integration (GA) <img src="assets/heart_icon.png" width="25"/>
Organizations can now integrate customer-owned Azure Blob containers with Sigma, supporting CSV uploads, file uploads in input tables, and cloud storage exports. This joins existing AWS and GCP options, giving organizations direct control over file location, access, retention, and encryption.

For more information, see [Configure an external storage integration with Azure Blob Storage](https://help.sigmacomputing.com/docs/configure-an-external-storage-integration-with-azure-blob)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### Snowflake AI Provider Model Update
AWS-hosted Snowflake connections now use `claude-sonnet-4-5` as the language model for Sigma Assistant.

For more information, see [Configure a warehouse-hosted model as AI provider](https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### List Warehouse Table Columns
A new endpoint, `GET v2/connections/tables/{tableId}/columns`, enables retrieval of column names, types, and details for data warehouse tables.

For more information, see [listConnectionTableColumns](https://help.sigmacomputing.com/reference/listconnectiontablecolumns)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** Image elements with Circle shape now align properly with Horizontal/Vertical alignment settings.

**2:** Tabbed container exports now render the selected tab instead of the first tab only (excluding scheduled exports)

**3:** Databricks OAuth connection creation no longer requires a service account.

**4:** The `pageSize` parameter is now respected in the List documents deployment policy endpoint.

**5:** Data model version tagging and source swapping with `#raw` directives now functions correctly.

**6:** `SCHEMA.TABLE` path length errors during deployment policy source swaps are resolved.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20

### Chart Background Images (Beta)
Cartesian charts — including bar, line, scatter, area, waterfall, box/whisker, and combo charts — now support background image configuration. Images can be set via file upload or a dynamic URL formula reference.

For more information, see [Configure a custom background image for a chart](https://help.sigmacomputing.com/docs/customize-chart-background-and-style#configure-a-custom-background-image-for-a-chart-beta)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20

### Forms (GA) <img src="assets/heart_icon.png" width="25"/>
Forms are now generally available. They provide a structured data entry interface that can be created manually or built on an existing input table or stored procedure. Forms support simultaneous submission to multiple sources and can trigger action workflows.

For more information, see [Use forms to streamline user data entry](https://help.sigmacomputing.com/docs/use-forms-to-streamline-user-data-entry)

For a hands-on walkthrough, see the [Forms QuickStart](https://quickstarts.sigmacomputing.com/guide/aiapps_forms/index.html)

### Input Table Audit History (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma now records versioned snapshots of input table changes, automatically creating warehouse-native views that track row-level history — what changed, who made the change, and when. Schema modifications are also captured.

For more information, see [View input table audit history](https://help.sigmacomputing.com/docs/view-input-table-audit-history)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20

### New Embed URL Parameter: hide_save_as
A new URL parameter, `:hide_save_as`, hides the `Save As` option in embedded content.

For more information, see [Embed URL parameters](https://help.sigmacomputing.com/docs/embed-url-parameters)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions / Calculations
Duration: 20

### Databricks Variant Data Type (GA)
Sigma now natively supports the Databricks Variant data type, enabling handling of arrays and JSON structures using Variant, JSON, and Array functions.

### System Functions in Custom SQL
System functions are now accessible via the `#formula` directive in custom SQL, returning workbook context information such as username, email, and timestamp.

For more information, see [Write custom SQL](https://help.sigmacomputing.com/docs/write-custom-sql)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in April
Duration: 20

### [PLACEHOLDER: Sigma Assistant QuickStart title TBD]
[Description TBD]

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Security
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Add Control from Column <img src="assets/heart_icon.png" width="25"/>
Right-clicking a column name now surfaces an `Add control` option, streamlining control creation directly from the column context menu.

For more information, see [Create and manage a control element](https://help.sigmacomputing.com/docs/create-and-manage-a-control-element)

### Dynamic Column Aliases (Beta)
Control values can now be used to create dynamic column aliases via the `#identifier` directive in SQL, enabling formula-based column naming.

For more information, see [Reference workbook control values in SQL statements](https://help.sigmacomputing.com/docs/reference-workbook-control-values-in-sql-statements)

### Increased CSV Upload Limit
A configuration option is now available to increase the default 200MB CSV upload limit to 1GB, supported by an improved performance architecture.

For more information, see [Configure CSV upload and storage options](https://help.sigmacomputing.com/docs/configure-csv-upload-and-storage-options)

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
