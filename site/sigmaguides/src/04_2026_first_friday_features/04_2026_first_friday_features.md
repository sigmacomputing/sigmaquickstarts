author: pballai
id: 04_2026_first_friday_features
summary: 04_2026_first_friday_features
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-06-14

# (04-2026) April
<!-- The above name is what appears on the website and is searchable. 

April 3, 2026 changes: k
April 10th, 2026 changes:k
April 17, 2026 changes:k
April 24, 2026 changes:k
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

### Azure Blob Storage Integration (GA)
Organizations can now integrate customer-owned Azure Blob containers with Sigma, supporting CSV uploads, file uploads in input tables, and cloud storage exports. This joins existing AWS and GCP options, giving organizations direct control over file location, access, retention, and encryption.

For more information, see [Configure an external storage integration with Azure Blob Storage](https://help.sigmacomputing.com/docs/configure-an-external-storage-integration-with-azure-blob)

### Set variables on a Snowflake connection (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now specify session variables on a Sigma connection to Snowflake. After being set up, the session variables are set for each query that Sigma runs in Snowflake.

For more information, see [Specify session variables for a Snowflake connection](https://help.sigmacomputing.com/docs/specify-session-variables-for-a-snowflake-connection)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### Ask Sigma is now Sigma Assistant <img src="assets/heart_icon.png" width="25"/>
Ask Sigma is now Sigma Assistant, and includes the following:

- Improved accuracy and performance when answering questions and performing analysis.
- Higher quality data source selection, relying on a new semantic search service that indexes configured sources using the AI provider set up for your organization.
- Improved experience, including the ability to provide feedback on the quality of responses.
- Highlighted sources are now configured sources, and the steps to add configured data sources for Assistant are updated. Configure sources for Sigma Assistant to answer questions without selecting a data source.
- Configure data models as data sources to improve accuracy and capabilities. When Sigma Assistant uses data models to answer questions, it can choose which relationships to use.

If you embed Ask Sigma, Sigma Assistant is accessible from the same URL and existing embeds continue to work.

For more information, see [Ask natural language queries with Sigma Assistant](https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant)

### Add AI context to data models (Beta)
You can now add AI context to a data model to help Sigma Assistant better understand how to use your data model as a data source. Adding AI context to a data model can help improve the accuracy and consistency of Sigma Assistant responses when answering questions that use the data model as a source.

For more information, see [Manage AI context for data models](https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models)

### Sigma MCP Server is now available <img src="assets/heart_icon.png" width="25"/>
Use natural language to interact programmatically with your Sigma organization using the Sigma MCP server. You can now search, describe, and query data within your AI assistant's interface. You can connect to the Sigma MCP server from any AI assistant that supports connection to custom remote MCP servers via HTTP and OAuth.

For more information, see [Use the Sigma MCP Server](https://help.sigmacomputing.com/docs/use-sigma-mcp-server)

There is also a QuickStart, [Natural Language Analytics with Claude and Sigma](https://quickstarts.sigmacomputing.com/guide/aiapps_natural_language_with_claude/index.html?index=..%2F..index#0)

### Snowflake AI Provider Model Update
AWS-hosted Snowflake connections now use `claude-sonnet-4-5` as the language model for Sigma Assistant.

For more information, see [Configure a warehouse-hosted model as AI provider](https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20

### Custom sort action (GA)
The `Custom sort action` is now generally available.

This action enables you to create an action that sorts one or more columns in a target element.

For more information, see [Create actions that modify or refresh element](https://help.sigmacomputing.com/docs/create-actions-that-modify-or-refresh-elements)

### Forms (GA) <img src="assets/heart_icon.png" width="25"/>
Forms are now generally available. They provide a structured data entry interface that can be created manually or built on an existing input table or stored procedure. Forms support simultaneous submission to multiple sources and can trigger action workflows.

For more information, see [Use forms to streamline user data entry](https://help.sigmacomputing.com/docs/use-forms-to-streamline-user-data-entry)

For a hands-on walkthrough, see the [Forms QuickStart](https://quickstarts.sigmacomputing.com/guide/aiapps_forms/index.html)

### Input Table Audit History (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma now records versioned snapshots of input table changes, automatically creating warehouse-native views that track row-level history — what changed, who made the change, and when. Schema modifications are also captured.

For more information, see [View input table audit history](https://help.sigmacomputing.com/docs/view-input-table-audit-history)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### Advanced governance settings for API connectors
You can configure advanced settings for API connectors to manage rate limits, redirect rules, and retries.

<img src="assets/fff_04_2026.png" width="800"/>

For more information, see [Configure API credentials and connectors in Sigma](https://help.sigmacomputing.com/docs/configure-api-credentials-and-connectors-in-sigma#configure-governance-settings-for-an-api-connector)

### Create and manage data models as code (GA)
You can create and manage data models programmatically using the Sigma API. The endpoints use a code representation of the data model to retrieve contents, make updates, and create new data models. For more information, see Manage data models as code.

The following endpoints are generally available to read, create, and update data models programmatically:

[Get the code representation of a data mode](https://help.sigmacomputing.com/reference/getdatamodelspec)

[Create a data model from a code representation](https://help.sigmacomputing.com/reference/createdatamodelspec)

[Update a data model from a code representation](https://help.sigmacomputing.com/reference/updatedatamodelspec)

For example representations of sources and elements, see the [Data model representation example library](https://help.sigmacomputing.com/docs/data-model-representation-example-library)

To provide context to AI agents building data models from code, see [Access Sigma documentation from AI tools](https://help.sigmacomputing.com/docs/use-documentation-mcp-server)

### List scheduled exports for a user
The following endpoint to list all scheduled workbook and report exports owned by a specific user is now available:

List scheduled exports for a user (GET /v2/members/{memberId}/schedules)

### List Warehouse Table Columns
A new endpoint, `GET v2/connections/tables/{tableId}/columns`, enables retrieval of column names, types, and details for data warehouse tables.

For more information, see [listConnectionTableColumns](https://help.sigmacomputing.com/reference/listconnectiontablecolumns)

### New query parameter for List data models endpoint
The List data models (GET v2/dataModels) endpoint now includes the skipPermissionCheck query parameter. When set to true, this parameter allows the API client to return all data models in a Sigma organization, including those not shared with or owned by the requesting user. The API client must have admin privileges to use this parameter.

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

**7:** Dataset migration now updates workbook references to point to the new data model in cases where the dataset was used as part of a join or union.

**8:** If you edit a document using the API, such as by swapping a data source or editing a data model using the `Update a data model` from a code representation endpoint, there is now a prompt to discard stale changes and include the updates in the document the next time it is opened in the UI.

**9:** Editing SQL for datasets now completes as expected and no longer runs infinitely.

**10:** When validating content in a data model or migrating a dataset to a data model with `Update references` selected, downstream documents no longer fail to update due to a permission error.

**11:** Workbooks no longer fail to load when a column exists across multiple properties in an element.



**12:** 
**13:** 






![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20

### Chart Background Images (Beta)
Cartesian charts — including bar, line, scatter, area, waterfall, box/whisker, and combo charts — now support background image configuration. Images can be set via file upload or a dynamic URL formula reference.

For more information, see [Configure a custom background image for a chart](https://help.sigmacomputing.com/docs/customize-chart-background-and-style#configure-a-custom-background-image-for-a-chart-beta)

### Change legend position in map elements
You can now choose the location of the legend on a map. 

Navigate to `Format` > `Legend` and, next to `Position`, choose an option from the dropdown.

### Control pan and zoom for maps
You can now choose whether to allow pan and zoom for maps. Select the `Allow pan and zoom` checkbox under `Format` > `Map` style to allow users to freely pan and zoom, or clear the checkbox to lock a map chart to a fixed position and zoom level.

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

### Copy input table data to tenant organizations (Beta)
When deploying documents to tenant organizations, you can now choose to include the data from input tables in the deployed document.

For details, see [Deploy content to tenant organizations](https://help.sigmacomputing.com/docs/deploy-content-to-tenant-organizations)

### Input table audit history (GA) <img src="assets/heart_icon.png" width="25"/>
Input table audit history is now generally available.

Input table audit history records versioned snapshots of input table row and schema changes over time. For each input table, Sigma automatically creates a warehouse-native view in your data platform that can help you understand the following:

- Row-level history: What changed in a specific row, who made the change, and when the change occurred.
- Schema history: When a column was created or changed to a different data type, along with who made the change and when the change occurred.

For more information, see [View input table audit history](https://help.sigmacomputing.com/docs/view-input-table-audit-history)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in April
Duration: 20

### Natural Language Analytics with Claude and Sigma
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/aiapps_natural_language_with_claude/index.html?index=..%2F..index#0) shows how to connect Claude AI to your Sigma organization using the Sigma MCP server and use that connection to do real analytical work — finding content, understanding data structure, and getting answers from live data through natural language.

It walks through how to:
* Connect Claude to Sigma via the Sigma MCP Server using OAuth
* Configure a Claude Project with org-specific context to improve response quality
* Search your Sigma organization for relevant workbooks and data sources
* Query live Sigma data and receive answers in plain language — no SQL required

**WHY IT MATTERS:**
This is the governed external AI pattern — Claude inherits your Sigma permissions via OAuth, so administrators retain full control over what data is reachable. A well-configured Claude Project with org context turns Claude into an analyst that already knows your data landscape before the first question is asked, reducing friction between a business question and a grounded answer.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Security
Duration: 20

### AWS signature V4 authentication for API connectors
API connectors now support the AWS signature V4 authentication method.

AWS Signature Version 4 (SigV4) is the protocol used to authenticate API requests to Amazon Web Services. It verifies the identity of the requester and ensures that the request has not been tampered with during transit.

For AWS supplied information, see [Authenticating Requests (AWS Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html)

For more information, see [Configure API credentials and connectors in Sigma](https://help.sigmacomputing.com/docs/configure-api-credentials-and-connectors-in-sigma#add-a-new-api-credential-to-sigma)

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
