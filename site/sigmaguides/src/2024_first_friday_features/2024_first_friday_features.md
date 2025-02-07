author: pballai
id: 2024_first_friday_features
summary: 2024_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: archive
lastUpdated: 2024-11-01

# 2024 Compilation

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed for the year 2024.

It is summary in nature, and you should always refer to the specific [Sigma documentation](https://help.sigmacomputing.com/) links provided for more information.

**Although features may carry a "Beta" tag, they may be released by now.**

All other features are considered released (**GA** or generally available).

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Actions
Duration: 20

If you haven't discovered [Actions in Sigma](https://help.sigmacomputing.com/docs/intro-to-actions) yet, **you need to check them out.** Actions are evolving really quickly now, and we are adding more functionality all the time.

Actions are user-defined interactivity that you can configure within and across workbook elements. By automating responses to specific user interactions, you can create efficient workbook workflows that produce quick and relevant data insights.

### Action variables
Action variables enable users to create formulas that reference rows selected in a table or visualization, as well as data returned from other actions. These variables exist only during the execution of a sequence.

Workbook builders may want to execute different logic based on the data a user selects. Action variables allow workbook builders to define conditions based on the value in a selected column or to calculate data within the user’s selection. Additionally, workbook builders can configure actions to return information that can be used by subsequent actions.

You can use action variables in any custom formula for an action, including conditions. When referencing these variables, you can apply all the standard functions supported by tables, such as aggregations, conditions, and lookups.

<img src="assets/action_variables.gif">

For more informationm see [Use variables in actions.](https://help.sigmacomputing.com/docs/use-variables-in-actions)

### Clear controls with a single action <img src="assets/heart_icon.png" width="25"/>
The `clear control` action now offers the option to clear controls at four levels of granularity: 

 -  Single control 
 -  All controls in a container 
 -  All controls in a page
 -  All controls in the workbook

For more information, see [Clear one or more control values.](https://help.sigmacomputing.com/docs/create-actions-that-manage-control-values#clear-one-or-more-control-values)

### Configure workbook actions in sequences (Beta)
Organize multiple actions into a sequence to run them in a specified order. You can have multiple sequences on a single element, each with an optional condition.

With action sequences, you can:

-   Ensure that multiple actions on an element execute in the intended order.
-   Drag and drop individual actions within or between sequences to quickly change the order.
-   Duplicate entire sequences of actions.

If you previously configured multiple actions on an element, the introduction of sequences places each of those actions in its own sequence by default. If you keep those actions in separate sequences, your configuration is unchanged and the action execution will behave as it did before.

For more information, see [Configure actions in sequences (Beta).](https://help.sigmacomputing.com/docs/configure-actions-in-sequences)

### Expanded options for actions that set control values
When configuring the `Set control value` action to update a list values control, the set control selection to setting allows you to determine whether the action replaces or adds values to the existing control selection. 

This enhancement brings flexibility to the action in support of list controls that allow multiple value selections.

For more information, see [Set control value.](https://help.sigmacomputing.com/docs/create-actions-that-manage-control-values#set-a-control-value)

### Make actions conditional <img src="assets/heart_icon.png" width="25"/>
When you define an action for a workbook element, you can now define an optional condition for that action. Customize the trigger behavior of your action based on the value of a control element or using a custom formula.

Enable conditional actions:
<img src="assets/fff_09_2024_7.png" width="600"/>

Below is a GIF showing a visualization of `Total sales by country over time` and a control with two values, `Individual trend` and `Comparison`.

In the animation, a user clicks each of the two values, demonstrating that the chart visualization switches between a trellis view of each country and a combined view in a stacked bar chart.

<img src="assets/action.gif">

For more information, see [Make an action conditional (Beta).](https://help.sigmacomputing.com/docs/make-an-action-conditional)

### Reset to last published value when clearing a control with an action
The `clear control` action now supports a `Reset to published` value checkbox. 

Checking this box resets the control value to the last published value. On a tagged version of a workbook, this setting resets to the tagged version's value.

For more information, see [Clear a control value.](https://help.sigmacomputing.com/docs/create-actions-that-manage-control-values#clear-a-control-value)

### Use actions to insert rows into input tables (Beta)
Use the [Insert row action](https://help.sigmacomputing.com/changelog#:~:text=Use%20the-,Insert%20row,-action%20to%20insert) to insert a row into an input table based on a user’s interaction with another workbook element. 

### Use workbook actions to set a date range control
The date range control is now a valid target for workbook actions that target controls.

There are many possibilities with this new action. 

For example, a segmented control can be used to allow users to easily click on common date ranges. This saves time for the user, and keeps them focused on the data:

<img src="assets/datarange.gif">

### Actions (BETA)
Workbook actions allow you to configure interactivity within and across elements in a workbook.

By automating responses to specific user interactions, you can create efficient workbook workflows that produce quick and relevant data insights.

Workbook actions also support dynamic cross-element filtering, which enables user interactions with one element to automatically filter the data of other elements in the same workbook. 

For example, when a user clicks a data point in one chart (the trigger element), Sigma automatically applies a filter to another chart (the target element) using the dimension value of the clicked data point (see the interactive demo).

For more information about workbook actions, see [Create and manage workbook actions](https://help.sigmacomputing.com/docs/create-and-manage-workbook-actions) and [Configure a cross-element filter.](https://help.sigmacomputing.com/docs/configure-a-cross-element-filter)

### Navigation Actions

 <ul>
      <li><strong>Navigational Actions:</strong>  Users can configure dashboard elements to act as links, enabling navigation to specific destinations based on the displayed data, which facilitates seamless integration with other tools or detailed reports.</li>
      <li><strong>Control Management:</strong> These actions allow users to dynamically manage control values such as filters and parameters directly from the dashboard, enhancing user interaction and data exploration flexibility.</li>
      <li><strong>Element Modification:</strong> Users can set actions to modify or refresh dashboard elements in real-time, ensuring data visualizations are always current and relevant.</li>
      <li><strong>Download and Export:</strong> This feature enables the automatic downloading and exporting of data or reports directly from the dashboard, streamlining data handling and reporting processes.</li>
</ul>

Each of these functionalities adds significant value by making dashboards more interactive, user-friendly, and efficient in handling complex data workflows.

An ***simple example*** of this can be found in the free Sigma Loan Analysis template. In this example, there are three action buttons on the page and the "Performance" button has a click-action that will take the user to a specific workbook page. 

<img src="assets/actions1.png" width="800"/>

For more information, see [Intro to Actions](https://help.sigmacomputing.com/docs/intro-to-actions)


<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Administration
Duration: 20

### Account type permissions for export destinations
The [Account types](https://help.sigmacomputing.com/docs/license-and-account-type-overview) feature separates permissions for individual export destinations, enabling granular control over members’ ability to export workbook content to Google Sheets, Google Drive, Slack, cloud storage, and webhooks.

For more information, see the account type permission availability matrix (Sharing and exports section) in [License and account type overview.](https://help.sigmacomputing.com/docs/license-and-account-type-overview)

### Authenticate Databricks connections with OAuth
You can now connect to Databricks using OAuth and inherit all security policies from Databricks. 

Databricks connections authenticated with OAuth allow your users to read data and use write-back features like input tables, warehouse views, materializations, and CSV uploads with their own individual credentials instead of a service account.

For more information, see [Configure OAuth with Databricks](https://help.sigmacomputing.com/docs/configure-oauth-with-databricks)

### Set inactivity timeouts (Beta)
You can now configure inactivity timeouts to ensure users are automatically logged out after a certain length of inactivity in the product.

For more information, see [Set up inactivity timeouts (Beta).](https://help.sigmacomputing.com/docs/set-up-inactivity-timeouts)

### Connection added: Starburst Galaxy
Sigma now supports connecting to your Snowflake, Databricks, BigQuery, or PostgreSQL cloud data warehouse through [Starburst Galaxy](https://docs.starburst.io/introduction/index.html), a SaaS distribution of [Trino.](https://trino.io/)

<img src="assets/FFF_07_2024_5.png" width="800"/>

For more information, see [Connect to Starburst.](https://help.sigmacomputing.com/docs/connect-to-starburst)

### Cross-org template sharing
Send and accept workbook templates across different Sigma organizations.

With secure cross-org sharing, a receiving organization must choose its own data source to populate the shared template, ensuring no data from the sharing organization is disclosed.

<img src="assets/fff_04_2024_4.png" width="800"/>

<img src="assets/fff_04_2024_5.png" width="800"/>

For more information, see [Share and accept cross-org workbook templates.](https://help.sigmacomputing.com/docs/share-and-accept-cross-org-workbook-templates)

### Customizable session length

If your organization uses password or SAML authentication, you can customize the session length to control how long internal and guest users stay logged in before Sigma requires re-authentication.

**By default, the session length is set to 720 hours, meaning users must log in every 30 days.** 

Adjust the session length to align with internal security policies and external regulatory requirements.

For more information, see [Manage authentication method and options.](https://help.sigmacomputing.com/docs/manage-authentication#manage-authentication-method-and-options)

### dbt Semantic Layer integration (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now configure and query a `dbt Semantic Layer` integration, allowing you to leverage your predefined dbt metrics in Sigma workbooks.

For more information, see [Configure a dbt Semantic Layer integration (Beta)](https://help.sigmacomputing.com/docs/configure-a-dbt-semantic-layer-integration) and [Query a dbt Semantic Layer integration (Beta)](https://help.sigmacomputing.com/docs/query-a-dbt-semantic-layer-integration)

### Infrastructure - AWS UK
Sigma is now deployed in AWS UK in compliance with UK GDPR ([Data Protection Act 2018](https://www.gov.uk/data-protection)). 

Located in London, United Kingdom, the deployment gives customers in the UK more control over data storage while enabling compliance with internal policies and external data residency requirements.

To accompany the region expansion, Sigma now supports the English (United Kingdom) (en-gb) locale for enhanced localization. When enabled, dates display as DD/MM/YYYY or Day Month Year, and time displays in the 24-hour format.

### Mandatory two-factor authentication for accounts <img src="assets/secure.png" width="25"/>
Starting **December 11, 2024**, two-factor authentication (2FA) via email will be **enabled by default for all new and existing users** that use password-based authentication. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Users with SAML or OAuth authentication methods (without password options enabled) are not affected.
</aside>

This change is being implemented to protect against security threats. 2FA enhances security by adding an extra layer of protection to customer accounts.

As this is a mandatory requirement, you cannot apply for an exception to 2FA. After 2FA is enabled, it cannot be disabled.

There is no additional cost associated with enabling 2FA.

For more information, see [Mandatory two-factor authentication for accounts.](https://help.sigmacomputing.com/docs/mandatory-two-factor-authentication-for-accounts)

### Manage upgrade requests in the Administration portal (Beta):
Admins can now view and respond to account upgrade requests in the Administration portal. 

When a user requests an upgrade to their account type to explore or create workbooks, an admin can review the request in the Administration portal. Admins still receive emails about these requests.

For example:

<img src="assets/fff_09_2024_1.png" width="800"/>

For more information, see [Respond to account upgrade requests (Beta)](https://help.sigmacomputing.com/docs/respond-to-account-upgrade-requests).

### New permission for AI features
Manage access to new AI features in Sigma with the Use AI features permission. Users must have a `Pro license` to be granted this permission.

See [License and account type overview.](https://help.sigmacomputing.com/docs/license-and-account-type-overview)

### New version tag metadata in audit log (Beta)
The `AUDIT_LOG` > `SIGMA_SHARED` > `DOCUMENTS` dimension table now contains the following columns:

<img src="assets/FFF_07_2024_1.png" width="800"/>

This metadata enables you to obtain information related to both the source workbook and the tagged version when referencing audit log entries for events like exports and downloads.

### OAuth write access (Beta)
Configure an OAuth connection with write access to leverage the benefits of OAuth permission management with Sigma’s write-access features, including input tables, warehouse views, workbook materializations, and CSV uploads.

For more information, see [Configure OAuth with write access.](https://help.sigmacomputing.com/docs/configure-oauth-with-write-access)

### Organization translation files
We have made it easier to serve Sigma users in your organization and consumers of embedded analytics with content in their preferred language.

Sigma admins can create organization-wide `translation files` to translate custom strings that are common across workbooks in an organization, saving time and ensuring a consistent experience. 

<img src="assets/fff_05_2024_6.png" width="400"/>

Workbook owners inherit the organization-level translations and can override and supplement them with translations unique to an individual workbook. For more information, see:

[Manage organization translation files](https://help.sigmacomputing.com/docs/manage-organization-translation-files)
[Manage workbook localization](https://help.sigmacomputing.com/docs/manage-workbook-localization)
[New translations API endpoints](https://help.sigmacomputing.com/reference/change-log#new-translations-api-endpoints)

### Permission to restrict workbook data refresh settings
You are now able to restrict access to set an automatic refresh schedule for a workbook with a new permission, `Set workbook data refresh`. 

**Automatic refresh schedules rerun queries in an open workbook**, such as when displaying a workbook on a screen viewed without interaction. 

For more information, see [Manage workbook refresh options.](https://help.sigmacomputing.com/docs/workbook-refresh-options)

Enable the permission for account types associated with a Pro license.

For more information, see  [License and account type overview.](https://help.sigmacomputing.com/docs/license-and-account-type-overview)

### Redshift SUPER data type support
Sigma now natively supports the `SUPER` data type to seamlessly handle semi-structured data from Redshift connections.

For more information, see [SUPER type](https://docs.aws.amazon.com/redshift/latest/dg/r_SUPER_type.html) in the AWS developer documentation.

### Restrict export frequency (Beta)
A new setting allows Sigma admins to restrict the frequency of scheduled exports for their organization. 

**If this setting is enabled, users also cannot set custom cron schedules.**

For more information, see [Restrict export recipients and frequency.](https://help.sigmacomputing.com/docs/restrict-export-recipients)

### Restrict export recipients to the same team (Beta)
A new setting allows Sigma admins to restrict export recipients to the same Sigma team as the user scheduling or performing the export.

For more information, see [Restrict export recipients and frequency.](https://help.sigmacomputing.com/docs/restrict-export-recipients)

### Separate export warehouse
If your Sigma organization is connected to Snowflake, you can run all scheduled, direct, and on-demand exports through a separate warehouse. 

This practice isolates export operations to optimize performance and reduce computing costs.

In the `Administration` > `Connection` > `Connection Features` section, locate the `Export Warehouse` field and enter the name of the virtual warehouse created for export queries:

<img src="assets/fff_03_2024_2.png" width="800"/>

For more information, see [Configure an export warehouse.](https://help.sigmacomputing.com/docs/configure-an-export-warehouse)

### Set inactivity timeouts (GA)
You can now configure inactivity timeouts to ensure users are automatically logged out after a certain length of inactivity in the product.

<img src="assets/fff_12_2024_1.png" width="800"/>

For more information, see [Set up inactivity timeouts.](https://help.sigmacomputing.com/docs/set-up-inactivity-timeouts)

### Set up materialization to use dynamic tables (Beta)
If your Sigma organization has a Snowflake connection, you can configure materialization to use dynamic tables for materialization. 

**New connections to Snowflake use dynamic tables for materialization by default.**

Using dynamic tables enables incremental materialization, because dynamic tables use change tracking to determine which rows have changed, enabling Sigma to update only the rows that have changed instead of rebuilding the entire materialization. If there are no changes in the materialized table, the materialization is not run.

To set this up for an existing connection, see [Connect to Snowflake.](https://help.sigmacomputing.com/docs/connect-to-snowflake#configure-write-access) 

For more information on materialization, see [About materialization.](https://help.sigmacomputing.com/docs/materialization#incremental-materialization-with-dynamic-tables)

### Sigma now supports Azure Western Europe region
Sigma is now deployed in Azure West Europe in compliance with [EU GDPR.](https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en) 

Located in the `Netherlands`, this deployment gives customers in the EU more control over data storage while enabling compliance with internal policies and external data residency requirements.

### Snowflake key pair authentication and rotation
Create a Snowflake connection using the key pair authentication method, and protect your data with key rotation.

Key pair authentication offers enhanced security through the use of a private key (secured by Sigma) and a public key (shared with Snowflake) for encryption and decryption. By implementing periodic key rotation, you can further protect your data from threats of exposure and compromised keys.

For more information, see Sigma’s [Snowflake Key-pair Authorization QuickStart.](https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation?_gl=1*tpxaou*_ga*MTM0MjUwMjM2Ny4xNzAwMjQxMDE5*_ga_PMMQG4DCHC*MTcxMzU0ODkyNS42NDAuMS4xNzEzNTU2MzUyLjM3LjAuMA..)

### Team provisioning for SAML SSO
Team provisioning for SAML SSO is now supported. Team assignments for a SAML user are synced when logging into Sigma. 

For more information, see [Single sign-on with SAML.](https://help.sigmacomputing.com/docs/single-sign-on-with-saml)

### Updated account type permissions for explore access
Account types now support two permissions that enable users to be granted `Can explore` workbook permission. These account type permissions determine how users interact with workbooks in specific modes.

**Basic explore:** Enables users to access View mode with additional capabilities when granted Can explore workbook permission.

**Full explore:** (formerly named Explore workbooks) Enables Basic explore capabilities in View mode as well as the full scope of user interactions in Explore mode.

For a detailed comparison of user interactions supported by each permission, [see Basic explore vs. Full explore.](https://help.sigmacomputing.com/docs/basic-explore-vs-full-explore)

### Updated and new permissions for exports
Export permissions are now more granular. The `Download `or `Send Now` permission is now two permissions, `Download` and `Export to email`:

<img src="assets/fff_10_2024_1.png" width="800"/>

The functionality managed by these permissions has not changed, and existing account types have been migrated to use the new permissions.

In addition, the ability to have an export run as the recipient is managed by a new permission, `Run exports as recipient.`

For more information, see [License and account type overview.](https://help.sigmacomputing.com/docs/license-and-account-type-overview) 

### Updated licensing model
Sigma’s license tiers are now labeled `Lite`, `Essential`, and `Pro` to bring clarity and simplicity to the licensing model.

<aside class="positive">
<strong>IMPORTANT:</strong><br> No action is required to accommodate the update, as all user functionality and experiences will continue seamlessly.
</aside>

**Here’s what you need to know:**

1: No action is required from your end. Your Sigma experience will continue seamlessly.<br>

2: Default account names will be automatically updated to reflect the new license names.<br>

3: If your organization was previously subscribed to the two-license model, it will continue using two license tiers: Lite (formerly Viewer) and Pro (formerly Creator).<br>

4: Custom account names will remain unchanged.<br>

5: All Embed URLs will continue to function as usual. The old default account names will automatically map to the new names.<br>

6: SCIM processes will continue to function as normal and old license names will continue to work.<br>

7: Your Admin Portal and Usage Dashboards will be updated to reflect the new license names.<br>

8: Existing licensing agreements and terms will remain unchanged.

For more information, [see the Sigma Community post.](https://community.sigmacomputing.com/t/sigma-license-name-changes-no-action-needed/3332?_gl=1*1gugfu2*_ga*MTM0MjUwMjM2Ny4xNzAwMjQxMDE5*_ga_PMMQG4DCHC*MTcwOTkyMTA5My41NTIuMS4xNzA5OTI1MDE1LjYwLjAuMA..)

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## AI
Duration: 20

### Explain visualizations with AI (Beta)
Instantly generate a description of any chart with the `AI Explain visualization` feature. 

Details can include key insights, observations, data distribution summaries, and other context that can enhance your understanding of the visualized data and help drive informed decisions.

For example, once configured users can click on any visualization and select `Explain visualization`:

<img src="assets/fff_06_2024_1.png" width="800"/>

The results will appear as:

<img src="assets/fff_06_2024_2.png" width="800"/>

This is the first of many AI enabled features that Sigma is innovating into the product.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The OpenAI integration must be configured for your organization.
</aside>

[Click here to learn how to configure the OpenAI integration in Sigma.](https://help.sigmacomputing.com/docs/manage-openai-integration)

For more information, [see Explain a visualization with AI.](https://help.sigmacomputing.com/docs/explain-visualizations-with-ai)

### Import data from an image (Beta)
If you have an OpenAI integration configured, you can now import data from an image of a table or a simple chart. The data is parsed and uploaded to a connection with Write-back support. Then you can start exploring the data in a workbook.

For more information and recommendations, see [Import data from an image.](https://help.sigmacomputing.com/docs/import-data-from-an-image)

### Write, correct, and explain formulas using the AI formula assistant (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma’s formula assistant uses AI to write new formulas, correct formula errors, and explain existing formulas applied to elements in workbooks and data models. These AI capabilities can help enhance productivity and accuracy, ensuring you get the most out of custom calculations and available functions.

For example, lets assume we have create a union on two tables of customer names and addresses. We need to derive which customers exist in both tables.

We can add a new column and use Sigma's `AI formula assistant` to write it for us, saving us time.

<img src="assets/fff_09_2024_5.png" width="800"/>

Looking at the `Column details` for the new column, we can see that the formula produced to expected results:

<img src="assets/fff_09_2024_6.png" width="800"/>

We can just filter the table to show rows that `Exists in Both`.

For more information, see [Use AI with formulas (Beta).](https://help.sigmacomputing.com/docs/use-ai-with-formulas)

![Footer](assets/sigma_footer.png)

## API
Duration: 20

### Additional workbooks and shared templates endpoints
We have added some additional API endpoints to the [REST API](https://help.sigmacomputing.com/reference/get-started-sigma-api).

#### Share a workbook or template with another organization: 

***POST /v2/workbooks/{workbookId}/shareCrossOrg***

[Documentation](https://help.sigmacomputing.com/reference/get-started-sigma-api)

<img src="assets/horizonalline.png" width="800"/>

#### List templates shared with your organization: 

***GET /v2/shared_templates/shared_with_you***

[Documentation](https://help.sigmacomputing.com/reference/listtemplatessharedwithyou)

<img src="assets/horizonalline.png" width="800"/>

#### Accept a pending template share: 

***POST /v2/shared_templates/accept***

[Documentation](https://help.sigmacomputing.com/reference/accepttemplateshare)

<img src="assets/horizonalline.png" width="800"/>

#### New option for create a connection endpoint
The `Create a connection` endpoint now includes the option to connect to MySQL:

***POST /v2/connections***

<img src="assets/horizonalline.png" width="800"/>

#### New query parameter for List connections endpoint
The `List connections` endpoint now includes the includeArchived query parameter to return archived and inactive connections. If your request doesn't use this parameter, the response output is unchanged:

***GET /v2/connections***

### Connection sync endpoint
This endpoint provide a method to "sync" the connection to a specific database, schema, or table, so that the data Sigma displays is the most recent.

For more information, see [POST /v2/connections/{connectionId}/sync.](https://help.sigmacomputing.com/reference/syncconnectionpath)

### New API rate limit
The `v2/auth/toke`n endpoint is now rate limited to **one request per second.**

For more information, see [Get started with the Sigma REST API.](https://help.sigmacomputing.com/reference/get-started-sigma-api#api-limits)

### New API Recipe: Workbook: Get Column Names by Page and Element
This script automates the process of retrieving column names for all elements in each page of a workbook in Sigma.

For more information, see [Get Column Names by Page and Element (Javascript)](https://help.sigmacomputing.com/recipes/get-column-names-by-page-and-element-javascript)

It is also referenced in the QuickStart, [Sigma REST API Recipes](https://quickstarts.sigmacomputing.com/guide/administration_api_code_samples/index.html?_gl=1*1sjorgy*_gcl_au*NzIyMTMyNjkwLjE3MjkxODg5MzQ.*_ga*MjAyNzIyMDcwLjE3MTcxODQ4Nzk.*_ga_PMMQG4DCHC*MTczMjI4ODE1My4zMjkuMS4xNzMyMjg4NDY0LjM1LjAuMA..#15)

### New API Recipe: Connections - List All
This script lists all connections in alphabetically order by name.

For more information, see [Connections - List All (Javascript)](https://help.sigmacomputing.com/recipes/connections-list-all)

It is also referenced in the QuickStart, [Sigma REST API Recipes](http://localhost:8000/guide/developers_api_code_samples/index.html?index=..%2F..index#3)

### New API Recipe: Connections - Sync All Tables in Schema <img src="assets/heart_icon.png" width="25"/>
This script automates the synchronization of tables within a schema that is specified in the .env file.

The script resolves the schema's inodeId based on the provided SYNC_PATH in the .env file, lists all tables within the schema, and constructs full paths for each table.

Finally, it syncs each table individually using the full path, ensuring that the process dynamically handles all tables within the specified schema.

For more information, see [Connections: Sync All Tables in Schema (Javascript)](https://help.sigmacomputing.com/recipes/connections-sync-all-tables-in-schema-javascript)

It is also referenced in the QuickStart, [Sigma REST API Recipes](https://quickstarts.sigmacomputing.com/guide/developers_api_code_samples/index.html?index=..%2F..index#4)

### New API reference and recipes
We have migrated to a new API Reference platform that is far more feature rich while being easier to use.

All API reference documentation has moved [here.](https://help.sigmacomputing.com/reference/get-started-sigma-api)

The new structure for the API reference offers better in-line documentation for endpoints and interactive code samples in a variety of languages:

<img src="assets/api.gif">

In addition, we have published API code samples ([Recipes](https://help.sigmacomputing.com/recipes)) and a [corresponding QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_api_code_samples/index.html?_gl=1*2dnp9q*_ga*ODgwOTI4NTIyLjE3MTM1NjI2OTE.*_ga_PMMQG4DCHC*MTcxNjU3MzM1OC4yOC4xLjE3MTY1NzM0MTMuNS4wLjA.#0) that walks you through real-world code examples using the API. 

All the current "Recipes" are written in JavaScript today. The recipes can be downloaded individually from the [Recipes page]() and are also available in a public [Git repository]().

The following Recipes are available today:

<img src="assets/recipeslist.png" width="800"/>

### New endpoint: Create a user attribute  (POST /v2/user-attributes)
The following endpoint to create a user attribute is now available:

`POST /v2/user-attributes`

For more information, see [Create a user attribute](https://help.sigmacomputing.com/reference/createuserattribute)

### New endpoint: Delete a shared template
The following endpoint to delete a shared template is now available:

DELETE /v2/shared_templates/{shareId}

[Delete a template share](https://help.sigmacomputing.com/reference/deleteexternalshare)

### New endpoint: Duplicate a version tagged workbook
The following endpoint to duplicate a version tagged workbook is now available:

`POST /v2/workbooks/{workbookId}/tag/{versionTag}/copy`

For more information, see [Duplicate a tagged workbook](https://help.sigmacomputing.com/reference/copytaggedworkbook) 

### New endpoint: Get the full path for a table
The following endpoint to retrieve the full path to a table in a connection is now available:

`GET /v2/connections/paths/{inodeId}`

For more information, see [Get connection path for a table](https://help.sigmacomputing.com/reference/getinodeconnectionpath)

### New endpoint: Get dataset sources
The following endpoint to get the sources associated with a dataset is now available:

[Get dataset sources](https://help.sigmacomputing.com/reference/getdatasetsources) (GET /v2/datasets/{datasetId}/sources)

### New endpoints: Get document sources
The following endpoints to get the source of a workbook or get the source of a dataset are now available:

`GET /v2/workbooks/{workbookId}/sources`
For more information, see [Get workbook source](https://help.sigmacomputing.com/reference/getworkbooksources)

### New endpoint: Get version tags for a workbook
The following endpoint to get the version tags assigned to a given workbook is now available:

GET /v2/workbooks/{workbookId}/tags

[Get version tags for a workbook](https://help.sigmacomputing.com/reference/getworkbooktags) (GET /v2/workbooks/{workbookId}/tags)

### New endpoints: Post/Delete API credentials
The following endpoints to create and delete API credentials are now available:

`POST /v2/credentials`
For more information, see [Create API credentials](https://help.sigmacomputing.com/reference/createcredentials)

`DELETE /v2/credentials/{clientId}`
For more information, see [Delete API credentials](https://help.sigmacomputing.com/reference/deletecredentials)

### New endpoint for workbook version history
The following endpoint for retrieving the version history of a workbook is now available:

- [Get version history for a workbook:](https://help.sigmacomputing.com/reference/getversionhistory) (GET /v2/workbooks/{workbookId}/version-history)

### New file type for List files and List member files endpoints
The `typeFilter` query parameter for the [List files](https://help.sigmacomputing.com/reference/fileslist) and [List member](https://help.sigmacomputing.com/reference/listaccessibleinodes) files endpoints now includes a symlink option that you can use to filter shortcuts in your request. 

Shortcuts are also included in the response of requests that do not include a typeFilter.

### New folder and document "favoriting" endpoints
We have added operations for managing favorite documents and folders for a user:

```code
GET /v2/favorites/member/{memberId} lists documents and folders favorited by a user.
POST /v2/favorites favorites a document or folder for a user.
DELETE /v2/favorites/member/{memberId}/file/{inodeId} unfavorites a document or folder for a user.
```

#### New workbook template endpoints
We have added operations for managing workbook templates:

```code
POST /v2/templates/{templateId}/swapSources swaps the data sources of a template.
POST /v2/workbooks/{workbookId}/saveTemplate saves an existing workbook as a template.
```

### New option for swap workbook data sources endpoint
The Swap workbook data sources endpoint `POST /v2/workbooks/{workbookId}/swapSources` now includes the `swapTables` and `paths` options.

Set the `swapTables` option to `true` in your request to change all tables in the workbook to use the new connection.

Use the `paths` option to specify connection paths to map from the original connection to the new connection. 

The options for this method are available to test in our public [API Reference:](https://help.sigmacomputing.com/reference/sourceswapworkbook)

<img src="assets/FFF_08_2024_3.png" width="800"/>

### New option for Update an inode endpoint
The [Update an inode](https://help.sigmacomputing.com/reference/filesupdate) endpoint now includes the restore option. Include the `restore` option in your request to restore previously deleted files.

### New query parameter for List workbooks endpoint
The `List workbooks` endpoint [GET /v2/workbooks](https://help.sigmacomputing.com/reference/listworkbooks) now includes the `excludeTags` query parameter. 

Set `excludeTags` to `true` to improve query performance in cases where you do not need version tag information in the response.

<img src="assets/FFF_08_2024_4.png" width="800"/>

### New parameter for Tag a workbook endpoint
The [Tag a workbook](https://help.sigmacomputing.com/reference/tagworkbook) (POST v2/workbooks/tag) endpoint now supports the `isDefault` parameter. 

If you want users that only have access to tagged versions of the document to open this tagged version by default, set `isDefault` to `true`.

### New response output for Get embeds for a workbook endpoint:
The entries array includes two additional properties in the response for the [Get embeds for a workbook](https://help.sigmacomputing.com/reference/listworkbookembeds) 

- sourceType: Whether the source of the embed is a workbook, page or element.
- sourceId: The ID of the workbook, page, or element that is the source of the embed.
- sourceName: The name of the workbook, page, or element that is the source of the embed.

An example response for this method will look like this:
```code
{
  "entries": [
    {
      "embedId": "5123ee04-6a27-451d-a7ea-165b434e8a2b",
      "embedUrl": "https://app.sigmacomputing.com/embed/1-2t6NvaaMfGT5cVxec3xklt",
      "public": true,
      "sourceType": "page",
      "sourceId": "H9cAxKfnXP",
      "sourceName": "Dashboard"
    },
    {
      "embedId": "fa3cecb4-a9b5-4d81-9bcf-1bea81678fec",
      "embedUrl": "https://app.sigmacomputing.com/embed/1-7CbVjjUMMTKQpYa2E7NwkI",
      "public": false,
      "sourceType": "workbook",
      "sourceId": null,
      "sourceName": null
    }
  ],
  "hasMore": false,
  "total": 2,
  "nextPage": null
}
```

### New response output for List templates shared with your organization endpoint
The `entries` array includes one additional property in the response for the [List templates shared with your organization:](https://help.sigmacomputing.com/reference/listtemplatessharedwithyou) (GET /v2/shared_templates/shared_with_you) endpoint:

- **createdAt:** When the template was shared with your organization

### New workbook bookmarks API endpoints
The following endpoints to work with bookmarks in workbooks, including version tagged workbooks, are now available:

- [List bookmarks in a workbook:](https://help.sigmacomputing.com/reference/getworkbookbookmarks) (GET /v2/workbooks/{workbookId}/bookmarks)
- [Add a bookmark to a workbook:](https://help.sigmacomputing.com/reference/postworkbookbookmarks) (POST /v2/workbooks/{workbookId}/bookmarks)
- [Get a bookmark:](https://help.sigmacomputing.com/reference/getworkbookbookmark) (GET /v2/workbooks/{workbookId}/bookmarks/{bookmarkId})
- [Update a workbook bookmark:](https://help.sigmacomputing.com/reference/updateworkbookbookmark) (PATCH /v2/workbooks/{workbookId}/bookmarks/{bookmarkId})
- [Delete a bookmark from a workbook:](https://help.sigmacomputing.com/reference/deleteworkbookbookmarks) (DELETE /v2/workbooks/{workbookId}/bookmarks/{bookmarkId})

The same endpoints are available for tagged workbooks:

- [List bookmarks in a tagged workbook](https://help.sigmacomputing.com/reference/gettaggedworkbookbookmarks) (GET /v2/workbooks/{workbookId}/tags/{tagName}/bookmarks)
- [Add a bookmark to a tagged workbook](https://help.sigmacomputing.com/reference/createtaggedworkbookbookmark) (POST /v2/workbooks/{workbookId}/tags/{tagName}/bookmarks/)
- [Get a bookmark in a tagged workbook](https://help.sigmacomputing.com/reference/gettaggedworkbookbookmark) (GET /v2/workbooks/{workbookId}/tags/{tagName}/bookmarks/{bookmarkId})
- [Update a bookmark in a tagged workbook](https://help.sigmacomputing.com/reference/updatetaggedworkbookbookmark) (PATCH /v2/workbooks/{workbookId}/tags/{tagName}/bookmarks/{bookmarkId})
- [Delete a bookmark from a tagged workbook](https://help.sigmacomputing.com/reference/deletetaggedworkbookbookmark) (DELETE /v2/workbooks/{workbookId}/tags/{tagName}/bookmarks/{bookmarkId})

### Pagination required for list endpoints:
List endpoints that did not already require pagination **now require pagination as of September 4, 2024.**

- [List members:](https://help.sigmacomputing.com/reference/listmembers)
(GET /v2/members)
- [List teams:](https://help.sigmacomputing.com/reference/listteams) (GET /v2/teams)
- [List workspaces:](https://help.sigmacomputing.com/reference/listworkspaces) (GET /v2/workspaces)
- [List materialization schedules for a workbook:](https://help.sigmacomputing.com/reference/listmaterializationschedules) (GET /v2/workbooks/{workbookId}/materialization-schedules)
- [List scheduled exports for a workbook:](https://help.sigmacomputing.com/reference/listworkbookschedules) (GET /v2/workbooks/{workbookId}/schedules)

If you use these endpoints, update your API requests to include the limit query parameter to return a paginated response. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Requests without the limit parameter now return a paginated response of the default page size (50).
</aside>

### Pagination required for List endpoints
List endpoints that did not already require pagination will start requiring pagination on **September 4, 2024.**

**Specific Endpoints:**<br>
[List members](https://help.sigmacomputing.com/reference/listmembers)<br>
[List teams](https://help.sigmacomputing.com/reference/listteams)<br>
[List workspaces](https://help.sigmacomputing.com/reference/listworkspaces)<br>
[List materialization schedules for a workbook](https://help.sigmacomputing.com/reference/listmaterializationschedules)<br>
[List scheduled exports for a workbook](https://help.sigmacomputing.com/reference/listworkbookschedules)<br>

<aside class="positive">
<strong>IMPORTANT:</strong><br> If you use these endpoints, update your API requests to include the limit query parameter to return a paginated response. After the change, requests without the limit parameter return a paginated response of the default page size (50).
</aside>

### Scoped API keys
This update provides more control over API privileges to ensure developers are granted relevant feature access.

You are now able to define the scope of an API key to permit access to APIs only, embeds only, or both:

<img src="assets/fff_04_2024_3.png" width="800"/>

For more information about client credentials, see [Generate API client credentials](https://help.sigmacomputing.com/docs/generate-api-client-credentials) and [Generate embed client credentials.](https://help.sigmacomputing.com/docs/generate-embed-client-credentials)

### SUPPORT_CHATS audit log dimension table
We have added a new log table that provides reference information about user interactions with Sigma's live chat support feature.

The `SIGMA_SHARED` schema in the Sigma `Audit Logs` connection now features a `SUPPORT_CHATS` dimension table containing information about individual live chat conversations, including timestamp, user name, user email, and the full chat transcript.

Customers can build a dashboard or report that includes this information to allow others to access or be updated on support status.

### Reorganized API endpoint documentation:
The API endpoint documentation is now organized in logical subsections to make endpoints easier to find and use.

Access the [API reference here.](https://help.sigmacomputing.com/reference/get-started-sigma-api)

### Use OAuth override tokens in API calls
The Sigma API now supports the use of `OAuth override tokens` in API calls. 

These tokens allow you to temporarily use the OAuth permissions of another user when making API calls.

For more information, see [Use OAuth override tokens.](https://help.sigmacomputing.com/reference/use-oauth-override-tokens)

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Audit Logging
Duration: 20

### Audit logging <img src="assets/heart_icon.png" width="25"/>
The Administration portal now includes an `Account` > `General Settings` > `Audit Logging` section that supports the following self-serve features:

<img src="assets/fff_09_2024_4.png" width="800"/>

- Sigma Audit Logs: Enable audit logging by activating the Sigma Audit Logs connection.
Create, update, or delete an Audit Logs Storage Integration: Add, update, or delete a cloud storage integration specifically for exporting audit log data to AWS, Azure, or GCP

- Audit logs functionality also has improved SLIs for data freshness and delivery. Fresh event data is available within an hour 99.9% of the time, and new audit log events are available at least once 99.9% of the time.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Once enabled, it may take a few minutes for the logging to start. While this is being setup, the feature will display "Feature Pending". Once ready, the new connection can be browsed.
</aside>

For more information, see [Enable audit logging and Create, update](https://help.sigmacomputing.com/docs/enable-audit-logging), and [delete an audit logs storage integration.](https://help.sigmacomputing.com/docs/create-update-and-delete-an-audit-logs-storage-integration)

Sigma Audit Logs stores entries for 30 days by default, but you can retain audit log data for extended periods by exporting it to cloud storage.

For more information, see [Create, update or delete an audit logs storage integration (Beta)](https://help.sigmacomputing.com/docs/create-update-and-delete-an-audit-logs-storage-integration).

### Create an Audit Logs Storage Integration 
Audit log cloud storage integration provides exporting log data to AWS, Azure, or GCP.

<aside class="negative">
<strong>NOTE:</strong><br> Exporting audit logs to third party services requires configuration work in those services, in order to provide the appropriate permissions and storage type.
</aside>

<img src="assets/fff_jan_24_2.png" width="800"/>

For more information, see [Create an audit logs storage integration](https://help.sigmacomputing.com/docs/create-an-audit-logs-storage-integration).

![Footer](assets/sigma_footer.png)

## Bug Fixes
Duration: 20

**1:** Sigma successfully exports a tagged workbook version when recipients have access to the tagged version. The export no longer relies on recipient's access to the source workbook.

**2:** Resolved an issue that periodically caused the `Move tag to` functionality to incorrectly apply the selected tag to a previous workbook version.

**3:** Sigma now exports a tagged workbook version to Google Drive without requiring recipients to have access to the source workbook.

**4:** The `Can write only` permission set at the connection level no longer blocks additive permissions set at the schema or database table levels.

**5:** Selecting the `Impersonate user` function for a user assigned the `Embed` member type no longer redirects admins to the `Home` page.

**6:** Admins can now successfully update a user’s member type from `Internal` to `Guest.`

**7:** Sigma now emits the `workbook:error` JavaScript event when an embed user is logged out, due to a session timeout.

**8:** To preserve data integrity, Sigma no longer converts `Yes/No` and `0/1` values to `True/False` boolean values in CSV uploads.<br><br>

**9:** In embeds, the `workbook:chart:onvalueselect` event no longer sends an empty value property.

**10:** Users no longer encounter false permission errors when accessing permitted tagged workbook versions.

**11:** Sigma now displays an error when an admin attempts to generate a signed embed URL for a public embed.

**12:** Bookmark selection for exports is now available only when all attachments are PDF or PNG files.

**13:** Administrators can no longer circumvent UI restrictions to raise privileges of guest and embed users.

**14:** Sigma no longer throws an error when multiple embeds attempt to add a new user at the same time.

**15:** In the `Administration` > `Embeds` page, you can now successfully preview an embed in the `Embed Sandbox` when you click `More` and select `Test embed`.

**16:** When viewing an individual embed user's profile in the `Administration` > `People` page, the `Edit member` and account type modal now displays "Embed user" in the Account type field instead of “Invalid selection.”

**17:** A user’s Sigma access token now expires when the OAuth access token expires, ensuring the user is logged out when the OAuth session has ended.

**18:** Updates to filters and sorting in tagged workbook versions are now reflected in exports and no longer trigger errors.

**19:** The `Administration` > `Account Types` > `Create new account type` page now correctly shows the `Create, edit, and publish workbooks` permission as auto-enabled (checkbox selected) when the `Apply tags` permission is enabled.

**20:** The `Administration` > `Authentication` > `Authentication Settings and Options` section now correctly allows an admin to edit the `Company Domain Sign-up` field regardless of the configured authentication method.

**21:** `Conditional formatting` for pivot tables now applies to cells containing `Total` labels. For more information, see [Apply conditional formatting.](https://help.sigmacomputing.com/docs/working-with-pivot-tables#apply-conditional-formatting)

**22:** When a specific version of a workspace has been shared with a user or team using both a direct grant and an inherited grant, Sigma no longer lists the same version tag multiple times in the `Share Folder` modal.

**23:** Sorting pivot columns in a pivot table with more than `25,000 cells` of data now works as expected.

**24:** Copying and pasting an input table element no longer results in the error “Unfortunately, something went wrong. Pasting failed.”

**25:** Insert row action (beta) now prohibits row insertion into tables with protected columns.

**26:** Modifying the permissions for a nested folder that inherited its permissions from the parent folder no longer affects the parent folder permissions.

**27:** Tagging a workbook after removing a version tag no longer results in an error indicating "Failed to tag workbook, $workbookname$ is archived."

**28:** When tagging a version of a workbook that contains only input tables, you can now swap data sources successfully.

**29:** When a workbook action is configured to set a control value on click in a visualization element, clicking on the white space outside the chart now clears the control value as expected.

**30:** Workbook actions triggered from interactions with tables which have columns that either do not have a type or an error type now run as expected.

**31:** When users send a request to their admins for a tag to be applied to their workbook, the resulting email notifications now use custom branding settings configured for the organization.

**32:** Copying a single element with a configured action or clicking Copy page on a workbook page containing actions now copies action configurations between elements on the page.

**33:** Theme fonts are now applied to all embed modal views.

**34:** The Get a team API endpoint now returns an error message when trying to retrieve an unexpected team.

**35:** Users can now export from embeds authenticated with client ID and secret when eval_connection_id is set.

**36:** When including a PNG file in an scheduled or ad hoc email export, the resulting image now uses the full width of the email body.

**37:** Swapping data sources when promoting a workbook from one tag to another tag now works as expected.

**38:** When creating a dynamic title, the type ahead suggestions in the formula bar in the overlay now include the available table columns as well as controls.

**39:** When responsive height is enabled in an embedded object, opening a modal in the embedded content now displays the modal at the current scroll position.

**40:** When using the embed sandbox UI in an organization with a high number of teams, the left navigation now loads teams progressively on scroll without throwing a RESOURCE_EXHAUSTED error.

**41:** When you specify a text alignment for a row header or column header, all header values are aligned instead of the lowest level header.

**42:** In the embed sandbox, the verification of the `URL signature `no longer fails when the user attribute name contains spaces.

**43:** The Embeds page in the `Administration` portal now allows searching for embeds by URL.

**44:** Tables now auto-scroll as expected when holding the `Shift key` and using the `arrow keys` to expand or contract the previous selection.

**45:** Users no longer see incorrect `Permissions denied` errors on workbooks with custom page visibility.

**46:** Clicking the `More` icon associated with a version tag in the `Version history` menu no longer reloads the page.

**47:** In embedded workbooks with themes applied, the theme now applies to the side panel of the workbook as expected.

**48:** In pivot tables with multiple pivot columns, centering column headers now centers all headers.

**49:** When configuring actions based on `When selecting cells” trigger`, holding `⌘ Command` (Mac OS) or `Ctrl` (Windows) on your keyboard to select multiple values or spans of values now correctly passes the discrete values to the action configuration instead of including all cells between the selections.

**50:** When multiple action sequences have been configured on an element, Sigma now evaluates the condition of each sequence before beginning any action execution, as expected.

**52:** Emails about failed exports now include the name of the export schedule.

**52:** The system generated `Row ID` column can no longer be added to linked input tables.

**53:** The workbook owner’s name and the rename, move, and delete options are now no longer displayed in the embed menu to users who do not have `Can edit` access to the workbook.

**54:** All users with `Full explore` permissions can now access the `Templates` page.

**55:** Users with access to the `Templates` page can now list and search all templates and sort templates by name, owner, or last updated date.

**56:** When exporting a page or single element embed to PDF with a tag passed as part of the embed URL, the export now uses the tagged version as expected.

**57:** Modify element actions now allow you to move or swap metrics on your table or chart.

**58:** The Create a member [(POST /v2/members)](https://help.sigmacomputing.com/reference/createmember) endpoint now returns an error if the email address is not in a valid format.

**59:** Improved data label positioning for bar charts. Bar charts that use a label style of Auto see fewer overlapping labels.

**60:** The appearance of KPI charts at smaller sizes is improved.

**61:** Showing or hiding totals on a grouped table now hides the totals row for the entire grouping level, instead of only removing the total value from the row.

**62:** When hiding totals in a pivot table, totals can now be hidden if the pivot values were placed above rows or columns.

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

Sigma Data Models represent the next iteration of Datasets and their introduction is a **foundational change that offers significant benefits** over the existing Dataset functionality. We’re investing heavily in Data Models over the coming months and years, with plans to add a whole suite of functionality, coupled with the ease-of-use that you have come to expect from Sigma.

<img src="assets/fff_04_2024_2.png" width="800"/>

This is large topic, and we will be providing a ton of resources for customers to take advantage of, including a new QuickStart. 

For now, we strongly recommend reading this post in [Sigma Community on DataModels.](https://community.sigmacomputing.com/t/data-model-faqs/3481)

There is also some documentation (with more to come) [here.](https://help.sigmacomputing.com/docs/intro-to-data-models)

### Version tagging support for data models (Beta)
Version tag data models to support version tagged workbooks and manage access to specific versions of a data model. You can also swap sources between different tagged data model versions.

A tagged version of a workbook that uses a data model as the source stays in sync with the latest published version of the data model. If you want the tagged version of a workbook to use a specific version of a data model, tag that data model version and use it as the source for the tagged workbook version.

For more details, see [Create and manage version tags](https://help.sigmacomputing.com/docs/create-and-manage-version-tags) and [Add version tags to workbooks and data models.](https://help.sigmacomputing.com/docs/add-version-tags-to-workbooks-and-data-models)

![Footer](assets/sigma_footer.png)

## Embedding
Duration: 20

### Additional language support for workbook localization
You can now localize workbook text into Simplified Chinese, Korean, and Swedish.

For more information, see [Manage workbook localization.](https://help.sigmacomputing.com/docs/manage-workbook-localization)

<img src="assets/fff_06_2024_9.png" width="600"/>

### Authenticate secure embeds using JSON Web Tokens (JWTs) (Beta)
Sigma supports authenticating secure embeds using JSON Web Tokens (JWTs). JWTs are compact, URL-safe tokens that can be digitally signed, ensuring that the data they contain is tamper-proof. Using JWT-signed URLs for your embeds offers several advantages, including offering a secure way to embed content that can be accessed by both external users and internal users.

For more information, see [Create an embed API with JSON web tokens.](https://help.sigmacomputing.com/docs/create-an-embed-api-with-json-web-tokens)

There is also a [QuickStart: Embedding 16: Secure Embedding with JWT.](https://quickstarts.sigmacomputing.com/guide/embedding_16_jwt/index.html?index=..%2F..index#0)


### Embed API Code Samples (signing packages)
Sigma has previously provided code samples based on node.js and Javascript. 

Now you can see sample code for additional languages, for signing embed URLs to reduce time to deploy embedded applications.

For sample code in Go, Python, Ruby, and JavaScript, see the [Embed Signing Packages Github repository.](https://github.com/sigmacomputing/embed-signing-packages)

### Embed Events (formally known as Action and Events):
To avoid confusion with Sigma's new [Actions feature](https://help.sigmacomputing.com/docs/intro-to-actions), we have renamed embedded Actions and Events to `Embed Events`. 

There are two types:
**Inbound Events:**
Are variables sent from the Parent application to Sigma. There is no "listener" to code into the iframe; Sigma handles that out-of-the-box. Sigma can use these messages to update control values. For example, passing a new value to a Sigma control that is used to filter table data.

Inbound events can be passed using either JavaScript or URL.

**Out-bound Events:**
Are variables sent from Sigma to the Parent application which must have a "listener" coded into the Parent application to receive and react to the message as desire

For more information, see [Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds)

Embed Events are discussed and demonstrated in this [QuickStart.](https://quickstarts.sigmacomputing.com/guide/embedding_07_events/index.html?index=..%2F..index#0)

### Embed SDK for React (Beta)
The Embed SDK for React offers a developer-friendly interface that simplifies integration into applications. Developers can access detailed installation and usage guides on [Github.](https://github.com/sigmacomputing/embed-sdk)

See [Embed SDK for React](https://help.sigmacomputing.com/docs/embed-sdk-for-react) or follow this [QuickStart](https://quickstarts.sigmacomputing.com/guide/embedding_15_embed_sdk/index.html?index=..%2F..index&_gl=1*kllv3*_gcl_au*NDE1NjcyODMyLjE3MjEzOTgwOTA.*_ga*MjAyNzIyMDcwLjE3MTcxODQ4Nzk.*_ga_PMMQG4DCHC*MTcyNjg0NTgzMy4yMjQuMS4xNzI2ODQ2MjM4LjYwLjAuMA..#0) for an in-depth guide to using the SDK.

### Improved data source selection UI in embeds
Select data sources for workbook elements using a new popover UI. 

With the new experience, you can search for data sources, review a list of suggested sources, and preview data sources. Preview a data source to review the source data and choose specific columns to apply to the element.

For example:

<img src="assets/fff_10_2024_4.png" width="800"/>

This allows an embed user (with the appropriate permission) to access the new experience.

<img src="assets/fff_10_2024_5.png" width="800"/>

For more information, see [Create a data element.](https://help.sigmacomputing.com/docs/create-a-data-element)

### Inbound event for changing between supported workbook modes in an embed
Use the` workbook:mode:update` inbound event to change between `Explore` mode and `View mode in an embed.

For more information, see [Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds#workbookmodeupdate)

### New Inbound event for opening or closing export modals in an embed
Use the` workbook:modal:toggle` inbound event to open or close a modal in an embed. 

Currently supported modals are the `Export` modal and the `Schedule` exports modal.

For more information, see [Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds#workbookmodaltoggle)

### New Embedded Events
Sigma has added many new events to support existing and new functionality.

#### New Inbound events:
```code
workbook:bookmark:create
workbook:fullscreen:update
workbook:selectednodeid:update
workbook:variables:list
workbook:variables:update
```

#### New Outbound events:
```code
url:onchange
workbook:bookmark:oncreate
workbook:bookmark:update
workbook:chart:error
workbook:dataloaded
workbook:error
workbook:fullscreen:onchange
workbook:id:onchange
workbook:pageheight:onchange
workbook:pivottable:oncellselect
workbook:published
```

For more information, see [Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds)

There is also a [QuickStart for using events with Sigma embedding.](https://quickstarts.sigmacomputing.com/guide/embedding_07_events/index.html?index=..%2F..index#0)

### New inbound events in embeds
Use two new inbound events, `workbook:bookmark:delete` and `workbook:bookmark:select` to display, clear, or delete bookmarks.

For more information, see [Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds)

There is also a [QuickStart that covers eventing in Sigma embeds.](https://quickstarts.sigmacomputing.com/guide/embedding_07_events/index.html?index=..%2F..index#0)

### Embedding workflows UI refresh
The following UI changes have been applied to the embedding workflows in Sigma:

1: Embed types now include `Secure` or `Public`. 
2: All references to `Application` and `User-backed` embedding have been removed.
3: The former `APIs & Embed Secrets` page in the Administration portal is now labeled `Developer Access`. 
    - This page displays existing credentials and allows you to create new ones.
4: The former Application Embedding Secret modal (accessible from the Developer Access page) is now labeled `Secure Embedding Credentials`. 
    - This modal displays the client ID and embed secret upon creation.

In support of this, the [help documentation](https://help.sigmacomputing.com/docs/workbook-embedding-overview) and [Embed QuickStart series](https://quickstarts.sigmacomputing.com/?cat=embedding) have been refresh.

### Enhanced underlying data exploration
Embedded workbooks now support the enhanced underlying data modal, which is accessible from individual data points in visualization elements.

`Right-` or `left-click` a data point and select `Show underlying data`, then explore the underlying data by modifying filters, adding and removing columns, and interacting directly with the chart and data table:

<img src="assets/FFF_07_2024_3.png" width="800"/>

### Explore mode and bookmarks in embeds
Explore mode is now available in embedded workbooks.

Embed users can perform ad hoc analysis, save the explored state as a personal bookmark, and manage existing bookmarks.

For more information, [see Explore a published workbook](https://help.sigmacomputing.com/docs/explore-a-published-workbook) and [Bookmarks in embedded workbooks.](https://help.sigmacomputing.com/docs/create-and-manage-bookmarks#bookmarks-in-embedded-workbooks)

### Hide run as recipient
Embeds now support a `hide_run_as_recipient` parameter that allows you to hide the Run queries as recipient option in the `Send Now` and `Schedule Exports` modals. 

This removes the ability for embed users to configure exports that run queries using the recipient’s permissions and data access. 

A `Hide run as recipient` option has also been added to the Embed configurations panel in the embed sandbox.

### JavaScript event for saved bookmark
Sigma now listens for the following JavaScript event sent by a user to save a bookmark on an embedded workbook:
```code
{
      type: 'workbook-bookmark-current';
      bookmarkName: string;
      isDefault: boolean;
      isShared: boolean;
}
```

Read more about Sigma Actions and Events in this [QuickStart](https://quickstarts.sigmacomputing.com/guide/embedding_07_actions_events/index.html?index=..%2F..index#0).

### Link sharing for secure embeds: <img src="assets/heart_icon.png" width="25"/>
Embedded Link Sharing, when enabled, allows users to share specific workbooks, explorations, or bookmarks through URLs generated within an embed as they work in Sigma.

These links can be copied and pasted into user-created emails (or other systems), allowing recipients to access the relevant content directly from their emails without needing to navigate back to Sigma.

These links will also be included in any scheduled exports created by the user, allowing recipients to click a link to access the shared content.

Alternatively, customer developers can use these links to enhance their application's functionality.

To review the documentation, see [Configure a shareable link for an embed.](https://help.sigmacomputing.com/changelog#:~:text=Configure%20shareable%20links,an%20embed.)

For a detailed demonstration of embedded link sharing, there is a [QuickStart.](https://quickstarts.sigmacomputing.com/guide/embedding_17_link_sharing/index.html?index=..%2F..index#0)

### New JavaScript Event Type
We we have added the ability to create bookmarks via a postMessage event.

Below is sample code:

```code
{
    type: 'workbook:bookmark:oncreate';
    bookmarkName: string;
    workbookId: string;
    versionTagName: string | null;
    bookmarkId: string;
 };
 ```

To learn how to use actions and events in Sigma, please refer to this [QuickStart: Embedding 07: Actions and Events.](https://quickstarts.sigmacomputing.com/guide/embedding_07_actions_events/index.html?index=..%2F..index#0)

### nodeType property for workbook:selectednodeid:update
We have added the ability to programmatically determine whether a selected node is a page or an element by referencing the nodeType property in the inbound event.

```code 
workbook:selectednodeid:update
```

### View embed URL in Embed Sandbox
When an embed is loaded in the sandbox environment, you can now click a View Url option to display the embed URL.

There are two options:

**Usable URL:** Clicking this, copies a URL to your clickboard that can then be pasted into any browser window and will generate the embed. Each time you click it, the clipboard is updated with a working URL as a new NONCE will be included.

**Copy:** Provides a copy of the URL to the clipboard for detailed inspection of it's constructions. This is useful in debugging URLs manually.

<img src="assets/feb_2024_1.png" width="800"/>

### Self-service embed usage analytics
Use a third-party tool, like [Pendo.io](https://www.pendo.io/), to track inbound and outbound events implemented in your embedded analytics.

By tracking iframe events, you can gain a better understanding of how customers are using your embedded data. 

For more information, [see Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds)

For a tutorial that walks you through sending and receiving events from a parent application and Sigma, [see QuickStart: Embedding 07: Events.](https://quickstarts.sigmacomputing.com/guide/embedding_07_events/index.html?index=..%0F..index&_gl=1*y059mb*_gcl_aw*R0NMLjE3MTgwMzM3NTkuQ2p3S0NBand5SnF6QmhCYUVpd0FXRFJKVkJXejR0S3dYS2x4LWhIWXNZc0RPM2xCYVdOMTZ5UWt1VDlUazBhRE1yYWxZb1VTT1BjS3pCb0NOT1lRQXZEX0J3RQ..*_gcl_au*MTU3OTYwODI3NC4xNzEzNTc1NDQ4LjEzMjQ1MTQxMTUuMTcxNzE3MTI2Ni4xNzE3MTcxMjY1*_ga*MjAyNzIyMDcwLjE3MTcxODQ4Nzk.*_ga_PMMQG4DCHC*MTcxODM5NDcwOS40MS4xLjE3MTgzOTU2MTEuMzUuMC4w#0)

### Test JWT-signed embed URLs in the embed sandbox <img src="assets/heart_icon.png" width="25"/>
You can now test embed URLs signed with JSON Web Tokens (JWTs) in the embed sandbox. 

In addition, the embed sandbox now allows users who have been granted embedding credentials to use the embed sandbox even if they are not assigned the Admin account type.

For more information, see [Test an embed URL in the embed sandbox.](https://help.sigmacomputing.com/docs/test-an-embed-url-in-the-embed-sandbox)

There is also a QuickStart, [Embedding 16: Secure Embedding with JWT](https://quickstarts.sigmacomputing.com/guide/embedding_16_jwt/index.html?index=..%2F..index#0)

### Use actions to trigger outbound embed iframe events
You can now configure an action to send an `iframe event` from your embedded content to your host application, which can then react to this event with some outcome. 

For example, you can use these events to add custom tracking, change the UI of your application, or trigger your own application APIs.

For more information, see [Create actions that trigger embed iframe events.](https://help.sigmacomputing.com/docs/create-actions-that-trigger-embed-iframe-events)

There is also a QuickStart, [Embedding 07: Events](https://quickstarts.sigmacomputing.com/guide/embedding_07_events/index.html?index=..%2F..index#5)

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->



## Functions / Calculations
Duration: 20

### Advanced calculation options for metrics
Quickly convert metrics to cumulative aggregates (grand total) or relative aggregates (percent of total) in tables, pivot tables, and visualizations. 

Open the relevant metric column menu, then hover over `Advanced calculations` and select an option to show the `grand total` or `percent of total`. 

Available percentage breakdowns (by grand total, x-axis, row, column, etc.) depend on the element type.

For example:

<img src="assets/fff_04_2024_1.png" width="800"/>

### ArrayAggDistinct function
The `ArrayAggDistinct` function identifies distinct non-null row values of a column or group and aggregates them into a single array.

<aside class="negative">
<strong>NOTE:</strong><br> This function is supported by AlloyDB, BigQuery, Databricks, PostgreSQL and Snowflake connections.
</aside>

For more information see [ArrayAggDistinct.](https://help.sigmacomputing.com/docs/arrayaggdistinct)

### Array function
The Array function returns an array containing specified values.

This function allows users to create and manipulate arrays, which are collections of elements that can store various types of data, such as numbers, strings, and even other arrays. With the "Array" function, users can perform a wide range of operations, including adding or removing elements, accessing specific items, and iterating over the elements for processing.

<aside class="negative">
<strong>NOTE:</strong><br> This function is currently supported by Snowflake, PostgreSQL, BigQuery, and MySQL connections only.
</aside>

For more information, [see the Array documentation.](https://help.sigmacomputing.com/docs/array)

### ArrayIntersection function
The `ArrayIntersection` function compares two arrays and returns an array of all overlapping elements, without duplicates. 

A business user can gain significant value this simple function, by leveraging it to identify common elements between two datasets, which is a common need in various business scenarios. Just a few examples are listed;

- Identify customers who have purchased both Product A and Product B by intersecting purchase lists.
- Find customers who are both high spenders and frequent shoppers to offer them exclusive rewards.
- Determine which products are available in multiple warehouses by intersecting inventory lists. This aids in efficient stock redistribution.
- Find common products supplied by multiple vendors to negotiate better pricing or consolidate suppliers.
- Identify duplicate records across datasets when merging databases, ensuring data accuracy and consistency.

The function is now supported for BigQuery, Snowflake, and PostgreSQL.

For more information, see [ArrayIntersection.](https://help.sigmacomputing.com/docs/arrayintersection)

### ArrayJoin function
The ArrayJoin function joins elements of an array into a single text string.

For more information, [see ArrayJoin.](https://help.sigmacomputing.com/docs/arrayjoin)

### ConvertTimezone function improvement
The ConvertTimezone function now supports an optional from_timezone argument that allows you to specify the time zone from which the datetime value is converted. 

This argument can be used when the data’s originating time zone differs from [your organization’s configured account time zone.](https://help.sigmacomputing.com/docs/account-time-zone)

For example, adding a column to display another columns date into the US Pacific Timezone:

<img src="assets/feb_2024_5.png" width="800"/>

For more information, [see ConvertTimezone.](https://help.sigmacomputing.com/docs/converttimezone)

### Create time series forecasts (Beta)
In a Sigma workbook, you can use `historical time series data` to predict and visualize future values and trends, leveraging [Snowflake’s forecasting ML function](https://docs.snowflake.com/en/user-guide/ml-functions/forecasting). 

Forecasting employs a machine learning algorithm to predict future numeric data based on historical time series data. A common use case is to forecast sales by item for the next two weeks.

No prior SQL knowledge us required to make this work.

For more information, see [Create time series forecasts (Beta).](https://help.sigmacomputing.com/docs/create-time-series-forecasts)  

### Custom digit grouping sizes supported
You can now set custom digit grouping sizes for numerical columns, to accommodate variances between number systems.

For more information, see [Custom number formats.](https://help.sigmacomputing.com/docs/data-types-and-formats#custom-number-format)

### DateFormat function enhancement
The `DateFormat` function now supports the `%q` specifier that allows you to extract the **quarter** component from a datetime value.

For more information about the function and supported format specifiers, [see DateFormat.](https://help.sigmacomputing.com/docs/dateformat)

### MakeDate function improvements
The MakeDate function now supports optional hour, minute, and second arguments that enable more precision when specifying the datetime components.

### New system functions
We have added to new system functions to allow more personalization for users.

For example, you may want to display the user's first name in a dashboard element.

When "Jim Smith" logs into Sigma and views the Sales Performance workbook, the text element displays “Hey there, Jim!”

<img src="assets/fff_jan_24_3.png" width="500"/>

[CurrentUserFirstName:](https://help.sigmacomputing.com/docs/currentuserfirstname)
Returns the current (signed-in) user’s first name as configured in the user’s profile.

[CurrentUserFullName:](https://help.sigmacomputing.com/docs/currentuserfullname)
Returns the current (signed-in) user’s first and last name as configured in the user’s profile.

### Record formula support
Record formulas enhances data processing and user interaction. Record formulas allow you to create structured objects, such as JSON, directly within your workbooks and data models.

**Key Benefits:**
     <ul>
      <li><strong>Data Type Preservation:</strong> When Sigma processes these structured objects, it maintains the specific data types of each field. This not only preserves data integrity and accuracy but also simplifies data manipulation by eliminating the need for type conversions.</li>
      <li><strong>Ease of Access:</strong> The structured format ensures that you can easily access and manipulate the values within these objects.</li>
</ul>
 
For more information, see [Generate and access structured objects.](https://help.sigmacomputing.com/docs/generate-and-access-structured-objects)

### Sequence function
The Sequence function returns an arithmetic sequence as an array of integers based on a specified range and increment.

For more information, see [Sequence.](https://help.sigmacomputing.com/docs/sequence)

### SHA256 function
The `SHA256` function transforms text input into a 256-bit hash value. 

The function is supported for all databases except for PostgreSQL.

In the example below, patient data contains social security number and we obfuscated it, using this new function as:

<img src="assets/fff_09_2024_3.png" width="800"/>

For more information, see [SHA256.](https://help.sigmacomputing.com/docs/sha256)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20

### CSV input tables
You can now pre-populate a new input table with uploaded CSV data that you can then edit at the cell level.

Like empty input tables, CSV input tables support data entry independent of existing data, enabling you to add editable rows and columns to construct the table as you see fit.

For more information, [see Intro to input tables](https://help.sigmacomputing.com/docs/intro-to-input-tables) and [Create new input tables.](https://help.sigmacomputing.com/docs/create-new-input-tables)

There is also a [QuickStart that covers several common use cases here.](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0)

### Input tables now supported on Amazon Redshift connections (Beta)
Input tables are now compatible with Amazon Redshift connections. 

These dynamic workbook elements support structured data entry that allows you to integrate new data points into your analysis and augment existing data.

For more information about input tables and how to use them, see the following documentation:

[Intro to input tables](https://help.sigmacomputing.com/docs/intro-to-input-tables)
[Create new input tables](https://help.sigmacomputing.com/docs/create-new-input-tables)
[Edit existing input table columns](https://help.sigmacomputing.com/docs/edit-existing-input-table-columns)
[Configure data governance options in input tables](https://help.sigmacomputing.com/docs/configure-data-governance-options-in-input-tables)

There is a QuickStart that demonstrates some [common input table use cases.](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0)

### Input table row deletion
You can now delete any row (saved or unsaved) when editing an input table in the permitted workbook version (based on element’s data entry permission).

The ability to delete saved rows was previously restricted when the [data entry permission](https://help.sigmacomputing.com/docs/create-and-manage-input-tables#set-data-entry-permission) was set to `Only on Published` version. Therefore, users could only delete unsaved rows while editing an input table in a workbook’s published version. This update removes the restriction and allows users to delete any row while editing the draft (via `Edit` mode) or published version (via `View` or `Explore` mode).

### Paste 2,000 rows in input tables on Databricks connections
When populating data in input tables on a Databricks connection, you can now paste up to `50,000 cells` at once (2,000 rows and 25 columns).

For more information, see [Intro to input tables.](https://help.sigmacomputing.com/docs/intro-to-input-tables)

### Paste 2,000 rows in input tables on Snowflake connections
Customers asked for larger row limits when populating data in input tables on a Snowflake connection, so now you can now paste up to `50,000 cells` at once (2,000 rows and 25 columns).

If you want this be even larger, so do we!

For more information, [see Intro to input tables.](https://help.sigmacomputing.com/docs/intro-to-input-tables#input-tables-overview)

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## New QuickStarts in 2024
Duration: 20

### All new Sigma fundamentals series
After over a year in service, it was time to retire the existing series and replace it with an updated one.

Each QuickStart in the series has been rewritten and screenshots have been updated.

The series has changed somewhat and now contains the following QuickStarts:<br>

Fundamental 1 - Getting Around<br>
Fundamental 2 - Working with Tables<br>
Fundamentals 3: Working with Visualizations<br>
Fundamentals 4: Working with Pivot Tables<br>
Fundamentals 5: Input Tables<br>
Fundamentals 6: Controls<br>
Fundamentals 7: Administration

You can access the [new series here.](https://quickstarts.sigmacomputing.com/?cat=fundamentals)

### Build and Secure Multi-Tenant Data Applications with Snowflake and Sigma
[Build and Secure Multi-Tenant Data Applications with Snowflake and Sigma](https://quickstarts.sigmacomputing.com/guide/snowflake_build_secure_multitenant_data_applications_snowflake_sigma/index.html?index=..%2F..index#0)<br>
This Sigma and Snowflake lab is designed to teach you how to build customer facing analytics applications that allow your end users to dive deeper and go further with data.

### Develop a Predictive Model using Snowflake and Sigma
This QuickStart discusses and demonstrates creating a machine learning-driven price prediction tool, integrating the perspectives of both a business analyst and a data scientist using Snowflake and Sigma.

[Develop a Predictive Model using Snowflake and Sigma](https://quickstarts.sigmacomputing.com/guide/partner_snowflake_predictive_model_using_sigma/index.html?index=..%2F..index#0).

### Discounted cash flow use case
[Discounted cash flow use case:](https://quickstarts.sigmacomputing.com/guide/use_cases_finance_discounted_cash_flow/index.html?index=..%2F..index#0)

This QuickStart describes and demonstrations how to handle a discounted cash flow (DCF) in Sigma. DCF is a common financial analysis that values some type of asset over a period of time. More simply put, it allows someone to understand how much future money is worth in today's terms.

An example of what is built is shown below:

<img src="assets/fff_10_2024_9.png" width="800"/>

### Export bursting
Export bursting ("bursting") is a powerful feature that enables automated distribution of personalized or filtered report content to a dynamic list of recipients as scheduled email bursts. With this feature, users no longer need to create or customize reports for different audiences manually. Instead, reports are generated automatically and securely sent to the appropriate stakeholders, streamlining data delivery across teams.

[QuickStart: Export Bursting](https://quickstarts.sigmacomputing.com/guide/administration_export_bursting/index.html?index=..%2F..index#0)

### Google Analytics 4 Template Setup
This template gives you a prebuilt analytics package for Google Analytics 4 events data, including detailed page-level metrics for every page and the ability to dive into event-level details, and is based on reports from Universal Analytics/GA3.

[Link to QuickStart](https://quickstarts.sigmacomputing.com/guide/google_analytics_4_template_setup/index.html?index=..%2F..index#0)

### Embedding 15: Embed-SDK for React
[Embedding 15: Embed-SDK for React:](https://quickstarts.sigmacomputing.com/guide/embedding_15_embed_sdk/index.html?index=..%2F..index#0  
)<br>
Sigma provides many methods to allow users and developers to interact with its systems including web-ui, REST API, Javascript Embed API and an SDK for the React framework.

The Embed-SDK for React offers a higher-level, developer-friendly interface that simplifies integration into applications, in contrast to Sigma's lower-level JavaScript Embed-API, which provides more granular control but may require additional coding.

### Embedding Series
In support of some announced changes to embed terminology, we also took the opportunity to completely update the entire series, adding any recent "goodness" related to embedding.

**Version Tagging with Sigma (non-embed user cases):** <br>
[In this QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_version_tagging/index.html?index=..%2F..index#0), we cover how Sigma version tagging can be used (inside Sigma itself) to provide a controlled release experience, which should result in less reported issues and happier end-users.

**Getting Started with Period Over Period Analysis in Sigma:** <br>
In this [QuickStart](https://quickstarts.sigmacomputing.com/guide/functions_period_over_period_analysis/index.html?index=..%2F..index#0), we will focus on the PoP analysis scenarios, where two specific time periods are selected and compared, against key metrics or data points between these periods.

### Fundamentals 8: Beyond the Basics
[Fundamentals 8: Beyond the Basics](https://quickstarts.sigmacomputing.com/guide/fundamentals_8_beyond_the_basics_1/#0) <img src="assets/heart_icon.png" width="25"/><br>
This QuickStart covers some of the more common questions we receive from Sigma customers. It is not comprehensive but is intended to present topics that often arise after users have completed the [QuickStart Fundamentals](https://quickstarts.sigmacomputing.com/?cat=fundamentals) and begin using Sigma with their own data.

### Other related changes:

**1:** Updated Git repository for embedding samples to be more uniform code patterns and folder structure.

[Link to QuickStarts Github repository](https://github.com/sigmacomputing/quickstarts-public/tree/main)

**2:** Revised React SDK for embedding to support server side API and remove async methods.

[Embedding 15: Embed-SDK for React](https://quickstarts.sigmacomputing.com/guide/embedding_15_embed_sdk/index.html?index=..%2F..index#6)

**3:** Created a new QuickStart category for `Developers` and migrated four QuickStarts into it. These four were formally in the `Administration` category.

**4:** Collapsed all past First Friday Feature QuickStarts from 2023 into a single QuickStart for that year. The same will be done for 2024, after the month of the year is released in 2025. [Link to FFF Archive](https://quickstarts.sigmacomputing.com/archive/) 

**5:** Updated [Embedding into Salesforce QuickStart](https://quickstarts.sigmacomputing.com/guide/embedding_11_embedding_into_salesforce/index.html?index=..%2F..index#4) to show how to pass a Salesforce value to Sigma.

**6:** Added three new API recipes to the [Sigma REST API Recipes](https://quickstarts.sigmacomputing.com/guide/developers_api_code_samples/index.html?index=..%2F..index#4) QuickStart. Details on the new recipes are found in the API section of this months FFF QuickStart. 


### Security: Open Authorization (OAuth)
In this QuickStart, we discuss and demonstrate OAuth, what it is, and why our customers want to use it. This can be a complex topic, so we break it down into easily digestible sections, including Write-back.

In simple language, OAuth provides a secure and efficient way to manage access and permissions between Sigma and Snowflake, leveraging a third-party identity management provider.

Security is on every customers mind these days. To that end, we provide some educational content upfront to help those who are less familiar get acquainted.

[Link to QuickStart](https://quickstarts.sigmacomputing.com/guide/security_oauth/index.html?index=..%2F..index#0)

### Embedding 14: Parameterized Queries
In this QuickStart, we discuss and demonstrate Sigma embedding using parameterized queries and user attributes.

Parameterized queries are quite useful when embedded customers have per-customer databases with the same schema.

[Link to QuickStart](https://quickstarts.sigmacomputing.com/guide/embedding_14_parameterized_queries/index.html?index=..%2F..index#0)

### Embedding 16: Secure Embedding with JWT
Many customers want a simple, but secure way to embed content that can be accessed by both external (users who do not have a registered account in Sigma) and internal user (users who access Sigma only through an embed, inside a parent application).

To enable this, Sigma supports authenticating secure embeds using JSON Web Tokens (JWTs). Signing your secure embed URLs with JWTs has several advantages, but a few limitations too.

Read all about it [here.](https://quickstarts.sigmacomputing.com/guide/embedding_16_jwt/index.html?index=..%2F..index#0) 

### Sigma Health Check Native App
The Sigma Health Check Native App is designed to provide insights into the overall health and performance of your Snowflake environment. This native app includes insights into architecture, user and role grants, as well as warehouse performance and sizing recommendation.

[Getting Started with the Sigma Health Check Native App for Snowflake](https://quickstarts.sigmacomputing.com/guide/partners_snowflake_health_check_app/index.html?index=..%2F..index#0)

### Sigma REST API Recipes
This [QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_api_code_samples/index.html?_gl=1*2dnp9q*_ga*ODgwOTI4NTIyLjE3MTM1NjI2OTE.*_ga_PMMQG4DCHC*MTcxNjU3MzM1OC4yOC4xLjE3MTY1NzM0MTMuNS4wLjA.#0) is designed to support Sigma's API Recipes and demonstrates many common operations that customers may use the REST API for.

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Templates
Duration: 20

Sigma provides a `Templates gallery` for every customer which includes a set of Sigma-created examples. There are 15 standard templates (as of this QuickStart), and we are adding more all the time:

<img src="assets/templates.png" width="800"/>

Templates allow users to create standard models (or Templates!) and share workbook structures for quick and consistent reuse.

### New templates
The following templates are now available in the `Template`s > `External` tab:

**Google Analytics 4:** Offers visibility into GA4 events data not provided by the Google Analytics platform. There is a QuickStart that [details the functionality here.](https://quickstarts.sigmacomputing.com/guide/google_analytics_4_template_setup/index.html?index=..%2F..index#0)

**Plugs Electronics Profit Planning Tool:** Leverages Sigma’s latest design features for an improved look and feel.

**Loan Analysis:** Analyzes loan portfolio performance using publicly available loan data from `Lending Club`.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Visualizations
Duration: 5

### Bars in combo charts support color by category (Beta) <img src="assets/heart_icon.png" width="25"/>
If your combo chart includes a bar chart, you can add a column to split the color of the bar series by category.

For example:

<img src="assets/fff_10_2024_8.png" width="800"/>

For more information, see [Configure a chart color by category. (Beta)](https://help.sigmacomputing.com/docs/combo-charts#configure-a-chart-color-by-category-beta)
 
### Cartesian charts support trellis by series (Beta)
If your bar, line, area, or scatter chart has multiple series, you can create a trellis chart for each series.

**This approach provides several advantages:**
 <ul>
      <li><strong>Enhanced Comparisons:</strong> By breaking down the data into series-based subsets, analysts can easily compare patterns across different categories, time periods, or groups within the same chart type.</li>
      <li><strong>Focused Insights:</strong> Each segment within the trellis isolates a single series, reducing clutter and helping analysts focus on specific relationships or trends relevant to each subset.</li>
      <li><strong>Detailed Multi-Dimensional Analysis:</strong> </li>
      <li><strong></strong> Trellising enables the analysis of multiple variables at once. For example, in a scatter trellis, each pane could represent a different product or location, showing how variables interact within each distinct category.</li>
      <li><strong>Efficient Data Exploration:</strong> Trellis charts streamline the comparison of segmented data without needing separate charts, improving efficiency in exploratory data analysis.</li>
</ul>

For example:

<img src="assets/fff_10_2024_7.png" width="800"/>

For more information, see [Create a trellis chart with multiple series. (Beta)](https://help.sigmacomputing.com/docs/create-and-format-trellis-charts#create-a-trellis-chart-with-multiple-series-beta)
 
<img src="assets/sigma_footer.png" width="800"/>

### Dynamic button text
You can now add dynamic values to button elements. 

When configuring the button text, enter `=` to include a dynamic value defined by a formula expression.

<img src="assets/fff_05_2024_5.png" width="800"/>

For more information about buttons, see [Create a button element.](https://help.sigmacomputing.com/docs/create-a-button-element)

### Interactive chart legends
Interact with chart legend entries to quickly focus on specific data subsets. 

Charts containing legends that represent qualitative segments (like categories or series) support the following interactive filtering capabilities:

<ul>
      <li><strong> Hover over a legend entry to highlight corresponding data points.</strong></li>
      <li><strong> Click a legend entry label to isolate corresponding data points.</strong></li>
      <li><strong> Select or clear the checkbox of one or more legend entries to show or hide corresponding data points.</strong></li>
      <li><strong> Click anywhere (within the element) outside of the plot area or legend to reset the chart display.</strong></li>
</ul>

<aside class="negative">
<strong>NOTE:</strong><br> Changes resulting from chart legend interactions persist when you switch between workbook modes; however, they don’t persist across user sessions and aren’t saved when the workbook is published.
</aside>

<img src="assets/interactive-chart.gif" width="800"/>

### Stacking support for waterfall charts (Beta)
Waterfall charts now support stacking. With stacked waterfall charts, you can plot multiple data series as cumulative waterfall segments and compare subcategory contributions to each category’s total sum value.

For example:

<img src="assets/FFF_08_2024_1.png" width="800"/>

For more information, see [Build a waterfall chart (Beta).](https://help.sigmacomputing.com/docs/build-a-waterfall-chart)

### Trellis formatting for combo charts
Combo charts now support trellis formatting. You can add a column as a trellis row or column to split a combo chart into a trellis.

<img src="assets/FFF_07_2024_4.png" width="800"/>

### Underlying data enhancements for visualizations (Beta)
Underlying data is now accessible from individual data points in visualization elements. 

`Right-click` and `left-click` menus for data points both feature `Show underlying data` options that open an enhanced Underlying Data modal. 

You can explore the underlying data for specific data points or the entire chart by modifying filters, adding and removing columns, and interacting directly with the chart and data table.

<img src="assets/feb_2024_4.png" width="800"/>

### Updated default data label settings for line and area charts
When formatting `data labels` for line and area charts, a new `Auto` option is the default.

This option displays all non-overlapping labels. The `All` option displays all labels, even overlapping labels. 

Existing charts using the default option update to use the new `Auto` setting.

### Waterfall chart (GA)
Waterfall charts are now generally available (GA). Build a waterfall chart to show changes in data over a period of time. Waterfall charts are perfect for financial analytics use cases where you track revenue and spend for a project, department, or an entire organization, and other use cases. You can format the shape, start, and end values of a waterfall chart as well.

For more information, see [Build a waterfall chart.](https://help.sigmacomputing.com/docs/build-a-waterfall-chart)

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Bulk column drag-and-drop
When interacting with a visualization, table, pivot table, or input table elements, you can now `bulk drag-and-drop columns` in the `Element properties` > `Columns` tab to reorder multiple columns or add them to groupings, calculations, or other properties.

<img src="assets/workbook_buttons.gif">

### Button element formatting
Sigma is continuing to deliver polish and customization to our workbooks and in this case has improved the styling options for buttons.

Users now have more options to adjust the look-and-feel of their button elements, including new `styles`, `shapes`, and `sizes` in the `Element properties` panel:

<img src="assets/workbook_buttons.png">

### Checkbox control element
Use the `Checkbox control` element to allow users to select or deselect an option.

The `Checkbox control` element is similar to the [Switch control](https://help.sigmacomputing.com/docs/intro-to-control-elements#switch) element but in a different format, which users may prefer.

For example, it can used to simply toggle a boolean column to show purchases or returns only:

<img src="assets/checkbox.gif" width="800"/>

### Clear segmented control selection
Segmented control elements now feature a `Show clear option` setting in the `Element properties` > `Settings` tab. 

Enable this and customize the display label (default “None”) to add an option that allows users to clear the selected control value.

<img src="assets/clear-control.gif">

### Color picker now available
A small but very useful usability addition is the color picker, which is available anywhere there is a choice of single colors.

For example:

<img src="assets/fff_06_2024_7.png" width="600"/>

### Column Level Security (CLS)
Column-level security is now generally available.

The feature provides admins with the flexibility to restrict or grant access to column-level data. This granular control over data access allows your organization to secure sensitive or confidential information, ensuring it’s accessible to authorized users only.

For more information, [see Column-level security.](https://help.sigmacomputing.com/docs/column-level-security)

There is also a [QuickStart on CLS here.](https://quickstarts.sigmacomputing.com/guide/security_column_level_security/index.html?index=..%2F..index#0)

### Combined file option for PDF attachments in scheduled exports
It is now possible to combine multiple PDF attachments when configuring ad hoc and scheduled exports.

The `Combine attachments` option expands the previous ability to merge Excel attachments into one file. 

<img src="assets/fff_06_2024_5.png" width="600"/>

<aside class="negative">
<strong>NOTE:</strong><br> The checkbox to combine attachments will not appear until there at least two PDF attachments configured to send.
</aside>

For more information, [see Merge PDF or Excel files.](https://help.sigmacomputing.com/docs/configure-additional-options-for-exports#merge-pdf-or-excel-files)


### Conditional formatting using hidden controls
Conditional formatting rules referencing hidden controls are now applied reliably to visible data elements in embeds and published workbook versions (`View` and `Explore` mode).

For more information about hidden controls and filter accessibility, see [Create a hidden control.](https://help.sigmacomputing.com/docs/create-a-hidden-control)

### Containers (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma's container feature allows you to organize workbook pages by grouping elements within a customizable container.

This provides an intuitive way to manage layouts, ensuring that related elements remain visually cohesive. Containers not only streamline the design process by enabling you to adjust and style grouped components collectively but also enhance flexibility when rearranging or resizing elements on the canvas. This powerful feature simplifies complex workbook structures, making it easier to maintain consistency in both functionality and appearance.

By using containers, workbook design takes on a whole new meaning.

In the animation below, we show how containers are dramatically improve the appearance of existing Sigma workbooks.

<img src="assets/containers.gif">

For more information, see [Organize workbook layouts with containers (Beta).](https://help.sigmacomputing.com/docs/organize-workbook-layouts-with-containers)

### Control element naming updates
For consistency and clarity, the control elements formerly labeled `Text control` and `Number` are now labeled `Text input` and `Number input`.

<img src="assets/fff_06_2024_3.png" width="400"/>

### Customizable page tab color
You can now customize the color of individual page tabs for added clarity and organization in workbooks.

On a workbooks's `Page` menu, click `Change color` and select an option from the color palette:

<img src="assets/fff_03_2024_4.png" width="800"/>

### Custom sort null values in pivot tables
Specify the sort order of null values in a pivot row or pivot column using custom sort. Choose from the default option, which mimics your data warehouse sort order for null values, listing all null values first, or listing all null values last.

For more information, see [Customize the sort order of data elements.](https://help.sigmacomputing.com/docs/configure-custom-sort)

### Customize element styles in a workbook layout (Beta)
You can now customize the styling of data elements such as tables, input tables, visualizations, and UI elements. 

This provides users a great deal of flexibility to make their work visually appealing, which helps with end-user adoption.

Add or remove padding, change the corner style, add a border, and change the text alignment for text elements.

Set default styles in an organization theme, customize styles for an entire workbook in the workbook settings, or style individual elements.

For more information, see [Customize element background and styles](https://help.sigmacomputing.com/docs/customize-element-background-and-styles) and [Workbook settings overview.](https://help.sigmacomputing.com/docs/workbook-settings-overview)

### Custom workbook page width
Set a custom page width for a workbook. Specify a pixel width to constrain the elements on workbook pages to a maximum width. See [Workbook settings overview.](https://help.sigmacomputing.com/docs/workbook-settings-overview#layout-style-settings)

<img src="assets/FFF_07_2024_6.png" width="800"/>

If you export workbook pages to PDF, use this setting to approximate the layout size of a PDF page. See [Format PDF page export layout.](https://help.sigmacomputing.com/docs/configure-additional-options-for-exports#format-pdf-export-page-layout)

### Custom formula aggregations in chart reference marks
You can now specify a `custom formula aggregation` when configuring reference marks in charts.

For more information about reference marks, see [Display chart reference marks.](https://help.sigmacomputing.com/docs/display-chart-reference-marks)

### Data labels in maps
Add one or more columns to generate data labels in point and region maps. This update makes it easier to quickly view at-a-glance details directly in the element.

For more information, see [Display chart data labels.](https://help.sigmacomputing.com/docs/display-chart-data-labels)

### Default version tags
Users with `Can edit` workbook permission can now designate a tag as the default tag for a workbook. As a result, any user who does not have access to the `Published` workbook will see the default tagged version. 

Applying default tags to workbooks with multiple tags results in a more consistent viewing experience.

For more information, see [Set a default tag for a workbook.](https://help.sigmacomputing.com/docs/version-tagging#set-a-default-tag-for-a-workboo)

### Default value for empty pivot table cells
When there’s no corresponding source data for a pivot table value cell to reference (no record exists for the particular combination of dimensions), the cell is empty by default. 

To customize the value for all empty cells, go to  `Element format` > `Format` and enter the preferred value in the `Empty cell` display value field.

### Default table styling
You can now configure a default table style for an **entire workbook** (in the Workbook settings panel), or an organization theme (in the Administration portal).

This allows users to make bulk styling changes across their entire workbook (or theme), rather than making adjustments one by one, saving lots of time.

For more information, see [Customize table styles](https://help.sigmacomputing.com/docs/customize-table-style) and [Create and manage workbook themes.](https://help.sigmacomputing.com/docs/create-and-manage-workbook-themes)

### Design improvements for scheduled exports
The [Schedule Exports](https://help.sigmacomputing.com/docs/send-and-schedule-exports-from-workbooks) modal has been redesigned to make it easier for users to find it, and the overall user experience when scheduling an export.

<img src="assets/feb_2024_3.png" width="800"/>

### Display or hide legends in maps

Map elements now support the ability to display or hide legends. In the  `Element properties` > `Legend` section, select the `Show legend` checkbox to display the legend or clear the checkbox to hide it:

<img src="assets/maplegend.png" width="800"/>

### Document shortcuts (Beta)
Customers have requested that we add the ability to save links to documents in more than one location. To support this, Sigma has added shortcuts to make specific data sources easier to find in the source picker, or to organize documents to make key workbooks and data models easier to access.

It is really simple to add a shortcut to any published workbook:

<img src="assets/FFF_07_2024_7.png" width="500"/>

The new workbook shortcut has a different icon that a standard workbook:

<img src="assets/FFF_07_2024_8.png" width="800"/>

See [Add shortcuts to documents](https://help.sigmacomputing.com/docs/add-shortcuts-to-documents) for more details.

### Donut hole value in donut charts
Display an aggregate value within the hole of a donut chart to add more context to your visualization.

<img src="assets/fff_05_2024_7.png" width="400"/>

For details about adding a donut hole value, see [Pie and donut charts.](https://help.sigmacomputing.com/docs/pie-and-donut-charts)


### Dynamic element titles
Workbook element titles now support dynamic values. This update allows you to create more relevant and detailed element titles that adapt to selected control values.

For more information, see [Create a dynamic title](https://help.sigmacomputing.com/docs/customize-element-title#create-a-dynamic-title) in [Customize element title.](https://help.sigmacomputing.com/docs/customize-element-title)

### Dynamic page visibility (BETA)
Dynamic page visibility allows you to restrict the visibility of individual workbook pages based on specific users and teams. By default, pages are visible to all users with permission to view, explore, or edit the workbook, but you can now choose from three options:

 <ul>
      <li><strong>Hide page from all users:</strong> Hides page from all users when the workbook is open in View or Explore mode.</li>
      <li><strong>Show page to all users (default):</strong> Shows page to all users when the workbook is open in any mode.</li>
      <li><strong>Only show to select users or teams:</strong> Shows page to select users and teams when the workbook is open in any mode. Hides page from unselected users when the workbook is open in View or Explore mode.</li>
</ul>

<aside class="negative">
<strong>NOTE:</strong><br> Page visibility settings apply to View and Explore mode only. The workbook owner and all users with Can edit access to the particular workbook can access all pages in Edit mode, regardless of page visibility settings.
</aside>

For more information, [see Customize workbook page visibility.](https://help.sigmacomputing.com/docs/customize-workbook-page-visibility)

### Dynamic text style update
In workbook Edit mode, the pill-style display of dynamic text has been updated to a more sleek and simple underlined format to enhance readability.

<img src="assets/fff_jan_24_4.png" width="800"/>

### Embedding Sigma's documentation now supported
Many customers provide useful information on how to best use Sigma workbooks directly in the workbook itself. 

There are time when it can be used to embed specific Sigma documentation content from the Sigma help pages. 

This is quite easy to do now using the [Embed element](https://help.sigmacomputing.com/docs/intro-to-ui-elements#embed-element)

For example, you may want to provide a basic introduction to your new users on how to get started with Sigma:

<img src="assets/fff_05_2024_1.png" width="800"/>

Another example is to provide the list of popular functions that are available:

<img src="assets/fff_05_2024_2.png" width="800"/>

Users will appreciate the time saved by avoiding opening another browser page to access documentation.

### Enhanced color formatting for workbook themes
Edit your workbook color settings directly from the `Color` section of the `Workbook settings` panel. 

The element panel provides a real-time preview of your workbook colors that automatically updates as you adjust the settings.

There are currently ten beautiful presets to choose from!

Here is how to access it:

<img src="assets/fff_06_2024_6.png" width="600"/>

### Enhanced SQL editor (Beta)
We have added a new, in-line SQL editor that allows SQL users to write their code directly in the workbook, and reference / build on top of other elements in the workbook.

Use the new SQL editor—featuring a more integrated and collaborative experience—to build workbooks, datasets, and elements (tables, pivot tables, and visualizations) with custom SQL.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The new SQL editor replaces a previous, more limited SQL editing feature. This is a public beta feature that’s subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

The `Beta` release includes the following enhanced capabilities:

 <ul>
      <li> Toggle to an inline SQL editor view within any SQL-based workbook element, and expand the element to enter full screen mode.</li>
      <li> Collaborate with other workbook developers in a live editing environment.</li>
      <li> Use search and replace functionality within the custom SQL.</li>
      <li> Apply autocomplete suggestions featuring improved performance.</li>
      <li> View and access custom SQL from the workbook Lineage view.</li>

</ul>

For more information about using custom SQL directly in Sigma, see [Write custom SQL.](https://help.sigmacomputing.com/docs/write-custom-sql)

For a video demonstration, [click here.](https://www.loom.com/share/4ae2e65a1d18447b867e209d7f6e1887?sid=bd5366a2-a372-4396-b437-e8b6f7e43bef)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is continually working to improve usability for our customers. We want Sigma to not only be simple to use, but also beautiful looking.
</aside>

### Export any supported format to Google Drive <img src="assets/heart_icon.png" width="25"/>
You can now export one or more workbook elements, workbook pages, or an entire workbook to a new folder in Google Drive. 

Additional file format types are now supported, such as `PDF` and `PNG.`

The current list of supported types are:

<img src="assets/fff_10_2024_2.png" width="800"/>

For more information, see [Send or schedule workbook exports for details on supported file types.](https://help.sigmacomputing.com/docs/send-or-schedule-workbook-exports)  

### Improved data source selection UI
Select data sources for workbook elements using a new popover UI. 

With the new experience, you can `search` for data sources, `review` a list of suggested sources, and `preview` data sources. 

<img src="assets/fff_05_2024_3.png" width="800"/>

Preview a data source to review the source data and choose specific columns to apply to the element:

<img src="assets/fff_05_2024_4.png" width="800"/>

For more information, see [Create a data element.](https://help.sigmacomputing.com/docs/create-a-data-element)

### Improved pivot table performance <img src="assets/heart_icon.png" width="25"/>
Pivot tables are no longer limited to 100,000 points of data. 

In addition, pivot table rows support infinite scroll!

### Map region improvements
Sigma now uses `Mapbox` to render regions in map elements.

This update contributes **overall performance improvements**, including **more precise boundaries** for mapped regions.

For example:

<img src="assets/fff_03_2024_3.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Due to updated place name specifications, Mapbox may not render some regions in existing maps. Update place names in map element data sources if needed.
</aside>

### New option for export to email - workbook action
By default, the `Export to email` workbook action now runs as the user who performs the action instead of as the recipient of the email. 

You can optionally select to `run as recipient` instead.

See [Create actions that download and export data](https://help.sigmacomputing.com/docs/create-actions-that-download-and-export-data#export-to-email) for more details.

### Permanent filter icon display
The inline toolbar for data elements now includes a filter icon at all times, regardless of whether a filter or control is already applied. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> This update enables quick access to filtering options for every data element added to the workbook.
</aside>

<img src="assets/feb_2024_6.png" width="800"/>

### Pivot table changes

#### Copy pivot table contents
You can now copy cells, rows, and columns in pivot tables to your clipboard.

#### Highlight the selected row and column for the pivot table
When you select a cell in a pivot table, the corresponding pivot rows and columns are highlighted.

### New version of plugins available
Enhancements include:

- Plugins can now trigger actions in other workbook elements.
- User-defined functions can now be called in plugins through workbook actions.
- Paginated data fetching, allowing you to fetch more than 25,000 data points.
- Warning messages if configuration items are passed into functions/hooks before they are registered

Developers can access detailed installation and usage guides on [GitHub.](https://github.com/sigmacomputing/plugin)

There is also a [QuickStart on Plugins.](https://quickstarts.sigmacomputing.com/guide/administration_plugins/index.html?index=..%2F..index#0)

### Organize workbook layouts with containers (GA) <img src="assets/heart_icon.png" width="25"/>
You can add containers to your workbook pages to organize elements on the canvas and visually group elements together. With containers, you can more easily manage layouts and style elements as a group.

Some before/after examples:

<img src="assets/containers.gif">

### Pivot tables support column-specific custom sort order
You can now quickly sort pivot table columns using the context menu, and specify custom sort orders for specific columns. For example, you can now choose to sort a specific pivot table column by the values in a different column. 

For more information, see the section on `Customize the sort order of pivot tables` in [Customize the sort order of data elements.](https://help.sigmacomputing.com/docs/configure-custom-sort)

### Placeholder text in control elements
You can now customize placeholder text for any input-based control element (List values, Text input, Number input, Date, and Date range) to provide context about the expected user input.

Go to `Element format` > `General` and update the `Placeholder` field. 

Placeholder text displays directly in the control’s input field and clears when the field contains user input:

<img src="assets/fff_06_2024_8.png" width="600"/>

### Repeat pivot values in exports
When sending or scheduling an export, you now have the option to repeat pivot values in Excel or CSV output.

In the Send Now or Schedule Exports modal, go to More options and select the Repeat pivot values checkbox. This ensures the pivot header values are populated in every applicable row or column:

<img src="assets/fff_03_2024_1.png" width="800"/>

### Repeat row labels in pivot tables
In pivot tables with multiple pivot rows, you can format your table to repeat row labels.

For example, `Arts & Entertainment` in `Product Types` is repeated for each additional row having a `Product Family` in that grouping:

<img src="assets/fff_06_2024_11.png" width="800"/>

For more information, see [Working with pivot tables.](https://help.sigmacomputing.com/docs/working-with-pivot-tables)

### Restore a workbook to a previous change
You can now restore a workbook to a previous change in the edit history for a draft or previously published version.

This can be really useful if something you are working on stopped working and you are not sure what change caused the issue. Now you can quickly revert versions to see what changed caused the issue.

For example:

<img src="assets/versions.gif">

For more details, see [Workbook versions and version history](https://help.sigmacomputing.com/docs/workbook-versions-and-version-history)

### Schedule exports as an email burst (Beta) <img src="assets/heart_icon.png" width="25"/>
You can send a custom-filtered report to a dynamic list of recipients as a scheduled email burst. 

Send a workbook, workbook pages, and individual workbook elements as supported attachment types, such as PDF, Excel, or PNG files.

For more information, see [Export as email burst (Beta).](https://help.sigmacomputing.com/docs/export-as-email-burst)

There is also a QuickStart, [Export Bursting](https://quickstarts.sigmacomputing.com/guide/administration_export_bursting/index.html?index=..%2F..index#0)

### Search and discovery
Any user can now recover their own deleted documents without the involvement of an admin.

For more information, see the following help pages:

[Recover deleted documents](https://help.sigmacomputing.com/docs/recover-deleted-documents)
[Recover a deleted workbook](https://help.sigmacomputing.com/docs/edit-draft-and-publish-a-workbook#recover-a-deleted-workbook)
[Recover a deleted data model](https://help.sigmacomputing.com/docs/create-and-manage-data-models#recover-a-deleted-data-model)
[Recover a deleted dataset](https://help.sigmacomputing.com/docs/create-models#recover-a-deleted-dataset)

### Send bug reports from error messages
For select errors, you can now send a bug report to Sigma from a link in the error message.

### Specify color palette with hex codes
To more precisely specify the visualization color palette for your workbook, you can specify a custom color palette with hex codes.

For more information, see [Workbook settings overview.](https://help.sigmacomputing.com/docs/workbook-settings-overview)

### Support for emailing exports to organization users and teams
When configuring an email export, the `Recipients` field now features an autocomplete dropdown that helps you search for and select an organization team or user. 

You can also continue to input specific email addresses for non-organization members with authorized domains.

For example, searching to find a specific team:

<img src="assets/FFF_07_2024_2.png" width="500"/>

For more information about emailing workbook content , see [Export to email.](https://help.sigmacomputing.com/docs/export-to-email)

![Footer](assets/sigma_footer.png)

### Text area control element
The `Text area` control element in Sigma allows for multi-line text input, making it ideal for forms and other scenarios requiring larger amounts of text.

With customizable input field height and vertical scrolling to view text overflow, it more effectively supports extensive text input compared to the `Text input` control element.

<img src="assets/fff_06_2024_12.png" width="600"/>

### Text input control type
The former Text box control element has been renamed to Text input to differentiate it from the Text UI element.

<img src="assets/feb_2024_2.png" width="800"/>

### View parameters referenced by a custom SQL element in a data model
Custom SQL elements in a data model that reference a control as a parameter in the SQL syntax are now visible from the Targets section of the Element properties for the control.

<img src="assets/FFF_08_2024_2.png" width="800"/>

### Updated file names for Google Sheet and Google Drive exports
The default file name used for `Google Sheet` and `Google Drive` exports has been updated from:
```code
date time - workbook name
```

to:

```code
workbookName_elementName_timestamp
```

This change makes these export naming conventions consistent with Sigma's other export file name patterns.

For example, for a workbook with the name workbookName, exported on `August 2nd`, the file name changes from `2024-08-02 10:07 - workbookName` to `workbookName_elementName_20240802T1007`.

### Updated file names for scheduled element exports
For scheduled exports of elements that use **dynamic text in the title,** the file name now reflects the value of the dynamic text when the export was performed.

### Updated Geography map visualization
The Geography map visualization now uses [Mapbox.](https://www.mapbox.com/) The existing Point and Region map visualizations had already been using Mapbox.

As part of this change, the default zoom of your map might be different. 

Use the `Pin viewport` option on a map to persist the desired zoom level.

### Updated workbook theme colors and settings <img src="assets/heart_icon.png" width="25"/>
The colors used for organization and workbook themes have been updated, and there are new settings to override the canvas color or element background color for a workbook theme.

Workbooks using existing themes have been migrated to the new colors. As a result, existing theme colors might have an override canvas color or override element background color already set. If your workbook does not look as expected, review the following known issues and workarounds:

- If your background is no longer white or black, set override colors for both the Canvas and Element.
- If your workbook is oddly pastel and bright, adjust the Surface color. Open the color picker and drag the color picker to the bottom of the color field.
- If your workbook has a tinted color instead of gray, adjust the Surface color. Open the color picker and drag the color picker all the way to the left of the color field.
- If your theme was originally based on a preset theme, reapply the preset and adjust the Primary color.
- If the colors in your workbook appear overly saturated, adjust the Theme colors to use less saturated colors.

For more information, see [Theme settings for more details.](https://help.sigmacomputing.com/docs/workbook-settings-overview#theme-settings)

### Workbook element changes

#### Format segmented control alignment
You can now format the alignment of a segmented control. Align the control to the left or right, or stretch the control to the full width of the control element.

For more details, see [Create and configure a segmented control.](https://help.sigmacomputing.com/docs/segmented-control)

#### Expanded text formatting options for conditional formatting
When you apply conditional formatting to a table or p

### Zip file option for attachments in scheduled exports
When scheduling exports it is now optional to compress export attachments into a single zip file. This will result in smaller attachments and more reliable delivery over email.

<img src="assets/fff_06_2024_4.png" width="600"/>

For more information, [see Compress attachments to a zip file.](https://help.sigmacomputing.com/docs/configure-additional-options-for-exports#compress-attachments-to-a-zip-file)

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Additional Information
Duration: 20

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

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->
<!-- END OF QUICKSTART -->
