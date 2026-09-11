author: pballai
id: 09_2026_first_friday_features
summary: Summarizes new features, updates, and bug fixes released across Sigma in September 2026, with links to the relevant documentation for each.
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-10-02

# (09-2026) September
<!-- The above name is what appears on the website and is searchable. 

September 4, 2026 changes: done
September 11, 2026 changes: done
September 18, 2026 changes:
September 25, 2026 changes:

Publish on October 2

 <img src="assets/heart_icon.png" width="25"/>
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in September 2026.

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

### Additional account languages available (GA) <img src="assets/heart_icon.png" width="25"/>
Sixteen new languages are now available for the organization account language setting, including additional Chinese, Dutch, French, German, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, Swedish, Thai, and Turkish variants.

**WHY IT MATTERS:**<br>
Global rollouts often stall on a single unsupported language for one region's team. Broader language coverage removes that as a blocker for multinational deployments, letting more of an organization work in Sigma in the language they're most comfortable with.

For more information, see [Set organization language and formatting region](https://help.sigmacomputing.com/docs/manage-organization-language#supported-languages)

### Connect multiple Sigma organizations to one Slack workspace (GA)
Multiple Sigma organizations can now connect to the same Slack workspace.

For more information, see [Manage Slack integration](https://help.sigmacomputing.com/docs/manage-slack-integration)

### Restrict Can contribute access to specific version tags (GA)
Users granted `Can contribute` access to a folder can now be limited to specific version tags instead of all versions and documents.

For more information, see [Restrict access to a folder using a version tag](https://help.sigmacomputing.com/docs/share-a-folder#restrict-access-to-a-folder-using-a-version-tag)

### Select Microsoft integration permission levels (Beta)
Administrators can now choose between write-only and read/write access when setting up a Microsoft integration.

For more information, see [Manage Microsoft integration](https://help.sigmacomputing.com/docs/manage-microsoft-integration#permission-levels-beta)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### Build workbooks and analyze data in ChatGPT using the Sigma plugin (GA) <img src="assets/heart_icon.png" width="25"/>
The Sigma plugin for ChatGPT can now create and share Sigma workbooks directly from a natural-language analysis, in addition to searching, exploring, and analyzing data.

**WHY IT MATTERS:**<br>
July's launch of the ChatGPT plugin let users query Sigma data from a conversation. This extends that same conversation into a governed, shareable workbook — the analysis doesn't have to stay locked in a chat transcript to be useful to the rest of a team.

For more information, see [Use the Sigma plugin for AI assistants](https://help.sigmacomputing.com/docs/use-the-sigma-plugin-for-ai-assistants)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### Databricks connection endpoint additions (GA)
Databricks connection endpoints now include `enableHiveMetastore`, `usePython`, and `pythonComputeClusterId` fields for programmatic configuration.

For more information, see [Get connection details](https://help.sigmacomputing.com/reference/get-connection), [List connections](https://help.sigmacomputing.com/reference/list-connections), [Create a connection](https://help.sigmacomputing.com/reference/create-connection), and [Update a connection](https://help.sigmacomputing.com/reference/update-connection)

### New account type permissions update endpoint (GA)
Account type permissions can now be updated via a new endpoint to control feature access, with the response including license type.

For more information, see [Update account type permissions](https://help.sigmacomputing.com/reference/update-account-type-permissions)

### New AI provider configuration endpoint (GA)
A new endpoint configures an organization's AI provider programmatically.

For more information, see [Configure the organization's AI provider](https://help.sigmacomputing.com/reference/create-ai-config)

### New API credentials listing endpoint (GA)
A new endpoint lists API credentials, returning client ID, owner ID, and scopes, with the client secret excluded from the response.

For more information, see [List API credentials](https://help.sigmacomputing.com/reference/list-credentials)

### New API endpoints to manage audit logging for an organization (GA)
Two new endpoints support getting and updating an organization's audit logging setting.

For more information, see [Get the audit logging setting for an organization](https://help.sigmacomputing.com/reference/get-audit-logging-setting) and [Enable or disable audit logging for an organization](https://help.sigmacomputing.com/reference/update-audit-logging-setting)

### New API endpoints to manage CSV upload settings (GA)
Two new endpoints support getting and updating an organization's CSV upload settings.

For more information, see [Get the CSV upload settings](https://help.sigmacomputing.com/reference/get-csv-upload-settings) and [Update the CSV upload settings](https://help.sigmacomputing.com/reference/update-csv-upload-settings)

### New comment settings management endpoints (GA)
Two new endpoints get and update an organization's comment settings, controlling commenting and image annotation functionality.

For more information, see [Get comment settings](https://help.sigmacomputing.com/reference/get-comments-settings) and [Update comment settings](https://help.sigmacomputing.com/reference/update-comments-settings)

### New option for the List datasets endpoint (GA)
The List datasets endpoint can now filter results to datasets owned by a specific user using `ownerId`.

For more information, see [List datasets](https://help.sigmacomputing.com/reference/list-datasets)

### New sample connection management endpoints (GA)
Two new endpoints get and update an organization's sample connection settings.

For more information, see [Get sample connection settings](https://help.sigmacomputing.com/reference/get-sample-connection-settings) and [Update sample connection settings](https://help.sigmacomputing.com/reference/update-sample-connection-settings)

### New team admins management endpoint (GA)
A new endpoint updates the administrators assigned to a team.

For more information, see [Update team admins](https://help.sigmacomputing.com/reference/update-team-admins)

### New timezone management endpoints (GA)
Two new endpoints get and update an organization's timezone configuration.

For more information, see [Get timezone setting](https://help.sigmacomputing.com/reference/get-timezone-setting) and [Update timezone setting](https://help.sigmacomputing.com/reference/update-timezone-setting)

### New user attribute update endpoints (GA)
A user attribute's name, description, or default value can now be updated via a new endpoint.

For more information, see [Update a user attribute](https://help.sigmacomputing.com/reference/update-user-attribute)

### Represent CSV tables in the code representation of a data model (GA)
CSV source tables can now be represented when reading and updating a data model's code representation.

For more information, see [Manage data models as code](https://help.sigmacomputing.com/docs/manage-data-models-as-code#limitations) and [Example: representing a data model with a CSV table](https://help.sigmacomputing.com/docs/example-representation-data-model-with-a-csv-table)

### Request and grant access to API connectors (GA)
Users can now view all API connectors in their organization and request access to specific ones, with admins or users with appropriate permissions able to approve or deny requests.

For more information, see [Manage API credential and connection access](https://help.sigmacomputing.com/docs/manage-api-credential-and-connection-access)

### Tag endpoint enhancements (GA)
The Update a tag endpoint now supports updating version tag descriptions and colors.

For more information, see [Update a tag](https://help.sigmacomputing.com/reference/update-version-tag)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** The Update a data model from a code representation endpoint now validates that the `documentVersion` field matches the most recent version before updating.

**2:** Users with the `Manage users` permission can now invite guest users.

**3:** Document deployment now respects existing team and user attributes for column-level security enforcement across tenant organizations.

**4:** Failed materializations blocked by in-progress operations now display as skipped rather than failed.

**5:** Improved performance when editing large input tables.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

### Choose related datasets when migrating a dataset to a data model (Beta)
Migrating a dataset to a data model now lets you select which related datasets to combine, rather than automatically pulling in every linked, joined, or referenced dataset.

For more information, see [Migrate a dataset to a data model](https://help.sigmacomputing.com/docs/migrate-a-dataset-to-a-data-model)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions / Calculations
Duration: 20

### Match on null values when performing a lookup (GA)
Lookups now support a `Match null values` option so rows with a null join key on both sides can match, using the new `LookupMatchNulls` function.

For more information, see [LookupMatchNulls](https://help.sigmacomputing.com/docs/lookupmatchnulls) and [Add columns through lookup](https://help.sigmacomputing.com/docs/add-columns-through-lookup)

### TextJoin function (GA)
The `TextJoin` function joins multiple strings of text using a common delimiter.

For more information, see [Textjoin](https://help.sigmacomputing.com/docs/textjoin)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in September
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Security
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Databricks support for stored procedure actions (GA)
Creating actions that call stored procedures is now supported for Databricks connections.

### Drawers (GA) <img src="assets/heart_icon.png" width="25"/>
Drawers — side panels that slide in to overlay workbook content temporarily — are now generally available.

**WHY IT MATTERS:**<br>
Builders have long had to choose between cluttering a page with detail or sending readers elsewhere to see it. Drawers give you a place to put that detail — instructions, drill-downs, forms — that slides in on demand and out of the way otherwise, without breaking up the main layout. Now that it's GA, it's ready for production workbooks rather than just evaluation.

<video src="assets/drawers2.mp4"></video>

For more information, see [Use drawers to manage complex workflows](https://help.sigmacomputing.com/docs/use-drawers-to-manage-complex-workflows)

### Export reports in PowerPoint format (Beta)
Reports can now be exported and downloaded as PowerPoint (.pptx) files.

For more information, see [Share and export reports](https://help.sigmacomputing.com/docs/share-and-export-reports)

### Export specific report pages (GA)
Users can now select one or more specific report pages to export, instead of exporting the entire report.

For more information, see [Share and export reports](https://help.sigmacomputing.com/docs/share-and-export-reports)

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
