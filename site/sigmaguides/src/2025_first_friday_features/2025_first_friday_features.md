author: pballai
id: 2025_first_friday_features
summary: 2025_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: archive
lastUpdated: 2026-02-01

# 2025 Compilation

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed for the year 2025.

It is summary in nature, and you should always refer to the specific [Sigma documentation](https://help.sigmacomputing.com/) links provided for more information.

**Although features may carry a "Beta" tag, they may be released by now.**

All other features are considered released (**GA** or generally available).

<img src="assets/sigma_footer.png" width="800"/>
<!-- END OF SECTION-->

## Actions
Duration: 20

### Bulk clear controls in a tabbed container
You can now set the `Clear control` action to bulk clear all controls in a tabbed container element or a specific tab. 

When configuring the action, select the tabbed container element, then choose the `All tabs` option or select a specific tab that contains the controls you want the action to clear.

For more information, see [Clear one or more control values](https://help.sigmacomputing.com/docs/create-actions-that-manage-control-values#clear-one-or-more-control-values)

### Copy and paste actions and sequences <img src="assets/heart_icon.png" width="25"/>
Individual actions or entire sequences can now be copy/pasted to allow rapid reuse configurations across your organization. 

You can paste a copied action or sequence to the same element, a different element in the same workbook, or an element in a different workbook.

In the action or sequence menu, click `Copy action` or `Copy sequence`, then use the `Paste` action within a sequence, `Paste` action below another action, or `Paste` sequence option to paste the configuration to a specific location:

<img src="assets/fff_04_2025_8.png" width="800"/>

### Prevent whitespace from triggering actions
By default, actions configured on charts can be triggered when a user clicks on whitespace within the element. 

You can disable this to prevent unwanted initiation of actions.

In the `Actions panel`, click `More` and select `Allow whitespace to trigger actions`. If there is no checkmark displayed on the setting, whitespace is disabled as a trigger:

<img src="assets/fff_04_2025_9.png" width="800"/>

### Call stored procedures with actions (Beta) <img src="assets/heart_icon.png" width="25"/>
Call stored procedures defined in a Snowflake, BigQuery, or Amazon Redshift connection using an action. 

If the stored procedure returns non-tabular results like a string, number, or Boolean value, you can work with the output as an action variable. 

With this release, you can also grant users and teams access to use existing stored procedures from a specific schema without granting those users access to the entire connection.

For example, if you have an existing stored procedure in your data platform that you use to perform a complex calculation, rather than recreating the logic in a Sigma custom function or formula, you can call the stored procedure and use the output in Sigma.

This feature opens up a whole new world of possibilities. For example, in the QuickStart [](), call call a Snowflake procedure and pass it a few values from Sigma contol elements for processing:

<img src="assets/fff_02_2025_6.png" width="600"/>

For more details, including detailed end-to-end examples, see [Create actions that call stored procedures (Beta).](https://help.sigmacomputing.com/docs/create-actions-that-call-stored-procedures)

### Select tab action (Beta)
With the addition of tabbed containers--**such a cool feature,** you can now create an action to display a specific tab in a tabbed container element. 

Configure these actions based on user actions and optional conditions to customize what your tabbed container displays.

The tabs in a tabbed container can be visible or hidden from the end user. If they are hidden, the `Select tab` action is the only way to display tabs other than the default tab.

For more information, see [Create actions that modify or refresh elements.](https://help.sigmacomputing.com/docs/create-actions-that-modify-or-refresh-elements#select-tab-beta)

### Update row and Delete row actions (Beta)
Use the `Update row` and `Delete row` actions to modify input tables. 

`Update row` allows user interaction to update values in an existing row, while `Delete row` removes an entire row. 

These actions are designed to support form functionality, but can be used in other ways to accommodate different data app use cases.

For more information, see [Create actions that modify input table data.](https://help.sigmacomputing.com/docs/create-actions-that-modify-input-table-data)

### Modal element (GA) <img src="assets/heart_icon.png" width="25"/>
Modals help simplify workbook design and allow you to build a streamlined, app-like experience. 

An open modal overlays and obscures a workbook page to provide a focused view of the modal content. This reduces visual clutter and allows you to present form fields, provide customized drill-downs, display controls and filters in a dedicated container, etc.

To incorporate a modal into a workbook, you must configure an `Open modal` action. 

For more information, see [Add a modal to a workbook](https://help.sigmacomputing.com/docs/add-a-modal-to-a-workbook) and [Open or close a modal.](https://help.sigmacomputing.com/docs/create-actions-that-navigate-to-destinations#open-or-close-a-modal)

### Updated application of the "On close" action trigger for modals
The `On close` trigger type for modals has been updated to only initiate actions when a user clicks the `Close icon` or anywhere outside the modal. 

The trigger no longer applies when the `Close modal` action is configured for the primary or secondary button.

If you configured actions for the `On close` trigger that are intended to initiate when a user clicks a button to trigger a `Close modal` action, you can move the actions to the applicable button trigger.


### Action trigger configurations for tables, pivot tables, and input tables
Tables, pivot tables, and input tables now support more ways to determine when and how user interaction triggers action sequences:

**1:** In the When selecting cells in column field, select `Any column` to trigger an action sequence when a user selects a cell in any column.

<img src="assets/fff_01_2025_4.png" width="600"/>

**2:** In the element’s `Action panel`, click the "three dots" to open the menu, then select or deselect `Allow keyboard to trigger actions` to control whether keyboard navigation within the element can trigger action sequences.

When the option displays a checkmark, keyboard navigation and pointer events (e.g., mouse clicks) can trigger the action sequences. When the option doesn’t display a checkmark, only pointer events can trigger them.

<img src="assets/fff_01_2025_3.png" width="600"/>

<aside class="negative">
<strong>NOTE:</strong><br> Keyboard navigation as a trigger interaction can disrupt the user experience. For example, if the element's action sequences include actions that open links or other workbooks, a user can be unintentionally navigated away from their current task. This can be particularly disruptive if the action sequence can be triggered by selecting a cell in any column.

Consider allowing keyboard navigation to trigger actions only when it facilitates the configured action sequences and is unlikely to interfere with usability.
</aside>

### Option to open workbook templates with actions
When configuring an `Open Sigma doc` action, you can now select a workbook template as the destination.

### Updated trigger type UI
In the `Actions panel`, action sequences are no longer added and grouped based on trigger type (On select, On change, On click, etc.). 

Each sequence indicates the trigger type, and you can select a different option from a dropdown when multiple types are available.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Administration
Duration: 20

### Azure Canada region
Sigma is now deployed in Azure Canada. Located in `Toronto`, this deployment gives customers in Canada more control over data storage while enabling compliance with internal policies and external data residency requirements.

<img src="assets/fff_06_2025_4.png" width="800"/>

For more information, see [Supported cloud platforms and regions](https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support#supported-cloud-platforms-and-regions)

### Improved usage dashboards
Usage dashboards have been improved to provide better performance and easier navigation. 

To view insights into how your organization uses Sigma and data on your queries, embeds, materializations, and more, go to `Administration` > `Usage`. 

Just a few of the long list of changes are:

**Custom Views:**<br>
Users can customize their view of a usage dashboard, save it, and go back to it on their next visit. You can have as many views as you'd like. A view can be simple like saving a customer filter, sorting, or adding a new column. A view can also include adding an entirely new page of visualizations directly against the official Usage data model. You can effectively build and save your own usage dashboards now!

**Fresh design:**<br>
No more scrolling and searching for filters. Everything has been moved into a tabbed layout and filters are tucked away to reduce clutter.

**The latest Sigma features included:**<br>
    - Tabbed Containers**
    - Modals
    - Popovers
    - Actions

**Overall performance improvements**<br>

You can also now create and save custom views of your usage dashboards, which allows you to customize the appearance, layout, sorting, and filters of your existing dashboards, or even create new ones of your own.

For more information, see [Usage overview](https://help.sigmacomputing.com/docs/usage-overview) 

### Scheduled Exports for usage dashboards
Related to the effort or overhaul the usage dashboards. usage users can now create their own views/bookmarks, and can also schedule those views.

<img src="assets/usage_sched.gif">

### Manage upgrade requests in the Administration portal (GA)
The ability to view and respond to account upgrade requests in the Administration portal is now generally available. When a user requests an upgrade to their account type to explore or create workbooks, an admin can review the request in Administration.

<aside class="negative">
<strong>NOTE:</strong><br> When an admin responds to an email requesting an upgrade, the link from the email opens the "Reassign account type" modal.
</aside>

For more information, see [Respond to account upgrade requests](https://help.sigmacomputing.com/docs/respond-to-account-upgrade-requests)

### User-friendly names for cloud platforms in the Administration portal
Friendly names are now used for cloud platforms in the Administration portal. To view your cloud platform, go to `Administration` > `Account` > `General Settings`, then locate the `Site` section. The Cloud field identifies the platform hosting your organization:

<img src="assets/fff_06_2025_1.png" width="600"/>

For more information, see [Supported regions, data platforms, and features](https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support)

### Alerts before OAuth sessions expire
Users now see an alert message 20 minutes before their connection-level OAuth session expires, prompting them to re-sign into the connection. 

For more information, see [Configure OAuth](https://help.sigmacomputing.com/docs/configure-oauth)

### Allow users with View license to ask natural language queries with Ask Sigma
The `Use Ask Sigma` permission can now be enabled for users with the `View` license (or Lite license). 

No existing account types were changed. 

To enable `Ask Sigma` for users who did not previously have access, update their account types to add the permission:

<img src="assets/fff_05_1.png" width="800"/>

For more information, see [Account type and license overview](https://help.sigmacomputing.com/docs/account-type-and-license-overview)

<aside class="positive">
<strong>IMPORTANT:</strong><br> To continue analysis in a workbook, a user's account type must also have the Create, edit, and publish workbooks permission enabled.
</aside>

### Allow users with View license to browse connections
The `View connections` permission can now be enabled for users with the `View` license (or Lite license). 

Users with this permission enabled on their account type can view database or catalog, schema, or table names that they have access to. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> This permission does not grant access to data in connections. 
</aside>

<img src="assets/fff_05_5.png" width="800"/>

For more information, see [Manage access to data and connections](https://help.sigmacomputing.com/docs/manage-data-permissions)

### New permission for calling stored procedure actions
Administrators can now manage which users can call stored procedure actions from a workbook with the `Call stored procedure actions` permission. 

For more information, see [Account type and license overview](https://help.sigmacomputing.com/docs/account-type-and-license-overview)

The permission requires an `Act` or Essentials license. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Users must also have access to the stored procedure in the connection. 
</aside>

For all requirements, see [Create actions that call stored procedures (Beta)](https://help.sigmacomputing.com/docs/create-actions-that-call-stored-procedures)

### Passing multiple SAML userRole values is now supported
When configuring SAML, it is now possible to pass in multiple `userRole` values. 

The first valid account type in the list of userRole values will be assigned. 

For more information, see [Configure your IdP in Set up single sign-on with SAML](https://help.sigmacomputing.com/docs/single-sign-on-with-saml#configure-your-idp)


### Audit log events for stored procedures
The Sigma Audit Logs connection now features a `STORED_PROCEDURES` event category that records events related to the execution of stored procedures.

For more information, see [Audit log events and metadata](https://help.sigmacomputing.com/docs/audit-log-events-and-metadata)

### Azure SQL Database, SQL Server 2022 and Azure Managed Instance connections (Beta)<img src="assets/heart_icon.png" width="25"/>

Sigma now supports secure connections to Azure SQL Database, SQL Server 2022 and Azure SQL Managed Instances.

For more information on how to set up these connections, see [Connect to Azure SQL Database (Beta)](https://help.sigmacomputing.com/docs/connect-to-azure-sql-database) and [Connect to SQL Server and Azure SQL Managed Instance (Beta)](https://help.sigmacomputing.com/docs/connect-to-sql-server-2022)

### Granular permissions for AI features <img src="assets/heart_icon.png" width="25"/>
Three separate feature permissions now allow admins to configure which account types can use AI features.

Settings for this are found in `Administration` > `Account Types` and scrolling down to `AI`:

 <img src="assets/fff_04_2025_5.png" width="800"/>

- The **Explain charts with AI** feature permission allows users to see and use the Explain this chart option on any visualization. 

- The **Use AI with formulas** feature permission allows users to use the AI-powered formula assistant to write new formulas, correct formula errors, and explain existing formulas. 

- The **Use Ask Sigma** feature permission allows users to ask natural language queries with Ask Sigma. 

<aside class="negative">
<strong>NOTE:</strong><br> The use of AI-powered features also requires an admin to configure an AI provider for the organization.
</aside>

For more information, see [Account type and license overview](https://help.sigmacomputing.com/docs/account-type-and-license-overview) and [Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)

### Materialization with Snowflake dynamic tables (GA)
Materialization with Snowflake dynamic tables is now generally available (GA). 

If your Sigma organization has a Snowflake connection, you can configure materialization to use dynamic tables for materialization. 

<aside class="negative">
<strong>NOTE:</strong><br> New connections to Snowflake use dynamic tables for materialization by default.
</aside>

To set this up for an existing connection, see [Connect to Snowflake](https://help.sigmacomputing.com/docs/connect-to-snowflake#configure-write-access)

For more information, see [About materialization](https://help.sigmacomputing.com/docs/materialization#incremental-materialization-with-dynamic-tables)

### Require all email exports to run as recipient
Sigma admins can now choose to require all email exports to run queries as recipients. 

After enabling this setting, all new and modified email export schedules run queries as the recipients:

<img src="assets/fff_04_2025_7.png" width="800"/>

For more information, see [Manage export frequency and authentication settings](https://help.sigmacomputing.com/docs/restrict-export-recipients)

### SAML configuration values now available in Administration portal
When setting up single sign-on with SAML, you can now copy and paste your SAML configuration values (e.g. prefix, RelayState) from the Administration portal. 

Go to `Administration` > `Authentication` > `Edit`, and your configuration values will be available under `Authentication Method & Options`:

<img src="assets/fff_04_2025_11.png" width="800"/>

For more information, see: [Set up single sign-on with SAML](https://help.sigmacomputing.com/docs/single-sign-on-with-saml#configure-your-idp-manually)

### Scheduled materialization bypass on Snowflake connections
When using materialization with a Snowflake connection, Sigma detects data updates in materialized elements in workbooks and data models. 

If the underlying data hasn’t been updated since the last successful materialization, **Sigma bypasses the scheduled materialization to reduce unnecessary compute time and costs.**

For more information, see [Scheduled materialization bypass](https://help.sigmacomputing.com/docs/materialization#scheduled-materialization-bypass)

### Updated team creation behavior
Admins who create teams are no longer automatically added as members of that team. Teams now start empty, allowing the admin to choose whether or not to include themselves as a member.

### Updated user requirements for creating shared views
The ability to share saved views is now limited to users who are assigned account types with the `Create`, `edit`, and `publish workbooks` permission enabled:

<img src="assets/fff_04_2025_10.png" width="800"/>

Users who are assigned account types with the `Full explore` permission enabled (without Create, edit, and publish workbooks) can create and save custom views, but cannot share them.

Existing shared views will remain shared regardless of the account type assigned to the user who created them. For more information about saved views, see Create and share saved views.

### Improved management of developer credentials
On the `Developer access` page in the `Administration` portal, the owner of each set of developer credentials is now identified by `email` instead of by `user name. 

As a result, admins can now identify which API token is assigned to each user, even when multiple users share the same username.

<img src="assets/fff_02_2025_7.png" width="800"/>

### License tier updates
Sigma's license model now includes four tiers: View, Act, Analyze, and Build. **This structure applies to all organizations created on or after March 4, 2025.**

<li><strong>My Content:</strong> Some text...
    <ol type="n"> 
      <li><strong>View:</strong> Suitable for report consumers who need access to prepared data and insights with baseline interactions</li>
      <li><strong>Act:</strong> Ideal for collaborative data contributors who actively input and update data.</li>
      <li><strong>Analyze:</strong> Optimized for decision-making data consumers who require more deep-dive capabilities without building workbooks themselves.</li>
      <li><strong>Build:</strong> Designed for data architects, BI analysts, and report builders who model, transform, and analyze data.</li>
    </ol>
  </li>

 <aside class="negative">
<strong>NOTE:</strong><br> The Build license also supports system administrators who can manage organization settings and users.
</aside>

Organizations created prior to this date will continue using Lite, Essential, and Pro license tiers and will be scheduled for a license migration at a later date.

For more information about the new licenses, see [Account type and license overview.](https://help.sigmacomputing.com/docs/account-type-and-license-overview)

### Audit logs now available in us-east-1 region
Organizations hosted in AWS us-east-1 are now able to access the Sigma Audit Logs connection, which records data related to user-initiated events that occur within your Sigma organization. The connection is disabled by default, but an Admin user can enable it in the Administration portal.

For more information, see [Enable audit logging](https://help.sigmacomputing.com/docs/enable-audit-logging)

There is also a [QuickStart on Audit Logging.](https://quickstarts.sigmacomputing.com/guide/administration_audit_logging/index.html?index=..%2F..index#0)

### License tier updates
Sigma's license model now includes four tiers: View, Act, Analyze, and Build. **This structure applies to all organizations created on or after March 4, 2025.**

<li><strong>The Four Tiers:</strong>
    <ol type="n"> 
      <li><strong>View:</strong> Suitable for report consumers who need access to prepared data and insights with baseline interactions</li>
      <li><strong>Act:</strong> Ideal for collaborative data contributors who actively input and update data.</li>
      <li><strong>Analyze:</strong> Optimized for decision-making data consumers who require more deep-dive capabilities without building workbooks themselves.</li>
      <li><strong>Build:</strong> Designed for data architects, BI analysts, and report builders who model, transform, and analyze data.</li>
    </ol>
  </li>

 <aside class="negative">
<strong>NOTE:</strong><br> The Build license also supports system administrators who can manage organization settings and users.
</aside>

Organizations created prior to this date will continue using Lite, Essential, and Pro license tiers and will be scheduled for a license migration at a later date.

For more information about the new licenses, see [Account type and license overview.](https://help.sigmacomputing.com/docs/account-type-and-license-overview)

### Use different OAuth configurations for authenticating users to your connections than you use for your Sigma organization (Beta)
Sigma now supports authenticating a connection with OAuth without re-using OAuth credentials used for authenticating users to your Sigma organization. 

As a result:

- You no longer need to use OAuth as your authentication method for your Sigma organization in order to authenticate a connection with OAuth.
- If you use multiple IdPs and data platforms, you can create connections with different OAuth configurations as needed.
- When authenticating Snowflake connections with OAuth, you can configure Proof Key for Code Exchange (PKCE) and/or JSON Web Tokens (JWTs) to secure your connection.

For instructions on how to configure a unique OAuth connection for a Databricks or Snowflake connection, see:

[Connect to Databricks](https://help.sigmacomputing.com/docs/connect-to-databricks#configure-oauth-features)<br>

[Connect to Snowflake](https://help.sigmacomputing.com/docs/connect-to-snowflake#connect-to-snowflake-with-oauth)

For more general information about OAuth, see [Configure OAuth.](https://help.sigmacomputing.com/docs/configure-oauth#use-different-oauth-configurations-for-authenticating-users-to-your-connections-than-you-use-for-your-sigma-organization-beta)

### COMMENTS audit log dimension table
The `SIGMA_SHARED` schema in the Sigma Audit Logs connection now features a `COMMENTS` dimension table containing information about comment activity on workbooks and elements, including a full transcript, attachments, and mentioned users.

For more information, see [Sigma Shared metadata reference in Audit log events and metadata.](https://help.sigmacomputing.com/docs/audit-log-events-and-metadata#sigma-shared-metadata-reference)

### AWS US East region is now available <img src="assets/heart_icon.png" width="25"/>
Sigma is now deployed in `AWS US East (us-east-1).` 

This region, located in Northern Virginia, is the largest AWS region and gives customers on the East Coast lower latency and enhanced performance when connecting to Sigma.

### EN-AU now supported as an account locale
You can now set `Australian English` as your organization’s locale. 

Setting `EN-AU` as your organization’s locale will allow `EN-AU` number formatting, currency, and custom translations to be used as a default across the organization.

For more information, see [Manage organization locale.](https://help.sigmacomputing.com/docs/manage-organization-locale)

### Inputting invalid SAML RelayState now displays error messages
When a SAML RelayState with invalid origin is entered, an error message is now displayed.

### Reduced 2FA code expiry times
Two-factor authentication email codes now expire after 5 minutes, instead of 15 minutes.

### Uniquely identify SAML attributes with the Sigma namespace prefix
You can now uniquely identify your SAML attributes by using the Sigma namespace prefix (https://schema.sigmacomputing.com/2025/01/claims). 

This can be applied to the `userRole` and `userGroups` attributes to avoid overlap with other app configurations. 

For example, the `userRole` attribute name would look like `https://schema.sigmacomputing.com/2025/01/claims/userRole`.

For more information, see [Configure SSO for your Sigma Organization in Single sign-on with SAML.](https://help.sigmacomputing.com/docs/single-sign-on-with-saml)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Apps
Duration: 20

### Configure a usage dashboard for Ask Sigma (Beta)
Admins can now configure a usage dashboard to view data about how Ask Sigma is used in their Sigma organization.

For more information, see [Configure a usage dashboard for Ask Sigma (Beta)](https://help.sigmacomputing.com/docs/configure-a-usage-dashboard-for-ask-sigma)

There is also a QuickStart: [Ask Sigma usage](https://quickstarts.sigmacomputing.com/guide/administration_ask_sigma_usage_dashboard/index.html?index=..%2F..index#0) to make it easy to deploy.

### Column order enforced when dynamically moving columns
When you use a multi-select list control to dynamically move columns into and out of groupings or properties (via the Move columns action), the column order in the table now matches the order of the values defined in the control.

The `Move column` action moves columns into or out of a table grouping, pivot table property (row, column, or value), or chart property (axis, color, tooltip, etc.) in the target element. Columns can be moved based on a static selection or when column names match selected control values in the trigger element.

<aside class="positive">
<strong>IMPORTANT:</strong><br> If the target element is a table, the Move columns option is only available when the table contains existing groupings.

If the target element is a pivot table or chart, the action doesn't remove an existing column from the target property unless the property only supports one column.
</aside>

For more information, see [Move columns](https://help.sigmacomputing.com/docs/create-actions-that-modify-or-refresh-elements#move-columns)

### Custom context menu actions (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now add custom context menu items in tables, pivot tables, input tables, and charts to provide clear, discoverable triggers for actions relevant to selected cells and data points. 

You can add standalone menu items or create nested submenus that execute any action effect, including calling stored procedures, generating iframe events, and opening modals.

This unlocks really interesting workflows to get users the detail they need quickly.

<img src="assets/fff_05_3.png" width="800"/>

For more information, see [Create custom context menu actions (Beta)](https://help.sigmacomputing.com/docs/create-custom-context-menu-actions)

### Formula support in image URL
When configuring an image element, you can enter dynamic text in the `Image URL` field to source the URL from a formula. 

For example, `Lookup([Team/Profile Image URL], CurrentUserEmail(), [Team/Email])` references the Profile Image URL column in an existing `Teams` table to dynamically display profile images based on the current user.

For more information, see [Add hyperlinks and images to columns](https://help.sigmacomputing.com/docs/add-hyperlinks-to-columns)

### PostgreSQL support for calling stored procedure actions
You can now call a stored procedure on a PostgreSQL connection from a workbook action.

For more information, see [Create actions that call stored procedures (Beta)](https://help.sigmacomputing.com/docs/create-actions-that-call-stored-procedures)

### Update row and Delete row actions for Input Tables (GA) <img src="assets/heart_icon.png" width="25"/>
You can now update and delete input table rows using actions. 

`Update row` allows user interaction to update values in an existing row, while `Delete row` removes an entire row. 

These actions are designed to support form functionality, but can be used in other ways to accommodate different AI App use cases.

For more information, see [Create actions that modify input table data](https://help.sigmacomputing.com/changelog/create-actions-that-modify-input-table-data)

### Warehouse AI model integration (Beta) <img src="assets/heart_icon.png" width="25"/>
If your organization is connected to Snowflake or Databricks, you can now use warehouse-hosted AI models to power Sigma AI features. 

<aside class="positive">
<strong>WHY THIS MATTERS:</strong><br> Customers who have sensitive data may prefer to use their own warehouse provider in order to prevent exposing data to third party providers.
</aside>

For information about selecting your data platform as your organization's AI provider, see [Configure warehouse AI model integration](https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration)

Sigma's approach to integrating AI is really innovative and accelerates the time it takes to create meaningful content.

[Checkout our unique approach here](https://www.sigmacomputing.com/product/ai-ml)

### Explore with related charts in Ask Sigma (Beta) <img src="assets/heart_icon.png" width="25"/>
After you receive an initial answer from `Ask Sigma`, you can continue your exploration. 

`Ask Sigma` provides related charts underneath its primary answer to offer avenues to analyze related data.

<img src="assets/fff_04_2025_2.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> This section is longer than normal due to the release of Sigma's AI features (BETA) and their impact on how users can use Sigma. We hope you find it useful.
</aside>

### Ask Sigma (BETA) <img src="assets/heart_icon.png" width="25"/>
We’re at a point in time where AI is expected in any modern software product.

Providing AI functionality isn’t especially difficult these days—but making it easy to use and genuinely helpful requires thoughtful design and a deep understanding of how users can benefit from the results.

Incorrect or misleading AI output isn’t just frustrating—it wastes time, and in a business context, it can lead to poor decisions.

Ask Sigma breaks down every step AI took to generate its answer. This lets you double-check results, edit any step of the analysis, and work more confidently with AI.

Here’s a short video for those who don’t yet have an AI API key but want to see the functionality in action.

If the embedded video is tool small on your screen, you can [view the larger version here.](https://www.sigmacomputing.com/product/ask-sigma)

<img src="assets/ai.gif"/>

### Hands on demonstration
If you already have an AI API Key, you can this for yourself now. Otherwise, just follow along.

<aside class="positive"> <strong>From the author:</strong><br> I don’t usually write in the first person, but I’ll make an exception here. I genuinely believe Ask Sigma will start to change the way users work in Sigma—saving tons of time that’s better spent on refining results, not starting from scratch.

Let’s be clear—Ask Sigma is a tool at your disposal. You’re free to use it or not. But it’s worth understanding what I believe is the start of a fundamental shift: the way you think about starting a new project is changing.

Many software vendors like to say “Start with the end in mind.” That sounds good, but having a whiteboard diagram still means you must build everything from scratch—and also figure out how to use some product to build it.

Sure, Sigma is easy to learn and use—but Ask Sigma is even better than that.

Instead of starting with the end-state design, Ask Sigma wants you to start with a problem—framed as a question.

As shown in the video, Ask Sigma will work hard to answer even vague, generic questions like:
"Where are we doing the best?"

That question lacks context, and you can certainly ask clearer questions to receive results that are more aligned with what you're looking for.

But regardless of the query you submit, Ask Sigma provides additional analysis and breakdowns—so you can explore more data and follow your curiosity. You can always edit the AI-generated analysis to better pinpoint what you're after.

The best way to improve Ask Sigma’s performance—and human analysis, too—is to ensure the underlying data is robust and well-organized.

Ask Sigma leverages AI agents that reference metadata (like column and table descriptions), data models, and defined metrics to answer your query.

The more context you provide about your data, the better AI can work with it. So if you’re not getting the results you expect, don’t just tweak the wording of your question. Instead, collaborate with your data team to continuously refine and optimize your assets to drive better outcomes for everyone.

Let’s try it out in the demo below.
</aside> 

<aside class="negative"> <strong>IMPORTANT:</strong><br> Sigma is heavily invested in Ask Sigma—new features and improvements are rolling out all the time! </aside>

### Enable AI
To use AI features in Sigma, you’ll need to provide an API key from your selected AI provider.

Navigate to `Administration` > `AI settings`, select the AI provider and provide a valid `API Key`:

<img src="assets/f1_43.png" width="800"/>

For more information, see [Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)

### Select data sources to make available to Ask Sigma
Now we need to tell Sigma which data sources Ask Sigma can use. Since we are using third-party AI services like OpenAI, we want to be careful about which datasets we allow access to. This process controls that and limits access to data that may be proprietary.

For example, if we want Ask Sigma to have access to the `Sigma Sample Database > RETAIL > PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` we simply search for it, select the source we want and click `Sync`:

<img src="assets/f1_44.png" width="800"/>

Once the sync is complete, you can filter on `Available` to confirm it’s ready for Ask Sigma:

<img src="assets/f1_44.png" width="800"/>

Here’s where things follow the `Ask` workflow, rather than the `Create New Workbook` workflow.

Click the <img src="assets/crane.png" width="45"/> icon, and then select `Ask Sigma`:

<img src="assets/f1_46.png" width="600"/>

### Ask away
The Ask Sigma interface is simple—but it’s also built to help you target specific data sources.

This time, let’s try a more focused question:

```plaintext
The CEO wants to know the bottom ten stores in the chain.
```

<img src="assets/f1_47.png" width="400"/>

Ask Sigma explains what it's doing at each step and why. You can jump off into a workbook at any point to explore further on your own:

<img src="assets/f1_48.png" width="800"/>

Once the response is ready, you’ll see:
- A full explanation of the result
- Options to adjust calculations
- Multiple charts to choose from for your workbook

Some generated charts may not be helpful—for example, `Store Latitude, Store Longitude, and Store Key` aren’t useful in this case. so we won't select them.

<img src="assets/f1_49.png" width="800"/>

If you're happy with the results, you can open the selected items in a workbook—or keep refining in Ask Sigma.


Once inside a workbook, you can save it, make any changes you like, or use Sigma’s [Explore Anywhere](https://help.sigmacomputing.com/docs/view-underlying-data) feature for deeper analysis:

<img src="assets/f1_50.png" width="500"/><br><br>

<img src="assets/f1_51.png" width="800"/>

It’s clear that Ask Sigma changes the way people will use Sigma—and it’s only getting better. Stay tuned!

### Bonus: AI Formula Assistant (BETA)  <img src="assets/heart_icon.png" width="25"/>
Sigma also includes a Formula Assistant powered by AI. It can:
- Write new formulas
- Correct formula errors
- Explain existing formulas used in workbooks and data models

Let’s say someone in Finance provides a formula they want applied at the group level:
```code
Revenue Efficiency Score= 
Quantity×Price+Cost
(Price−Cost)×Quantity
```

Instead of writing it manually, let the AI Formula Assistant convert it for you:

<img src="assets/f1_52.png" width="800"/>

Once done, you can review the formula, rename the column, and format it to match your needs:

<img src="assets/f1_54.png" width="800"/>

And if you’re not sure what the formula does, just ask the Formula Assistant to explain it:

<img src="assets/f1_55.png" width="800"/>

Now we know: a low Revenue Efficiency Score is bad—and we should dig deeper into what’s bringing it down.

For more information, here are some documentation links:

[Ask natural language queries with Ask Sigma](https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-ask-sigma)

[Embed Ask Sigma (Beta)](https://help.sigmacomputing.com/docs/embed-ask-sigma)

[Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### API request URLs now visible in the Administration portal
You can now view the base URL required for authenticating to the Sigma REST API in the Administration portal. 

Go to `Administration` > `Developer Access`: 

<img src="assets/fff_06_2025_2.png" width="600"/>

For more information, see [Get started with the Sigma REST API](https://help.sigmacomputing.com/reference/get-started-sigma-api)

### New option for the Create a member API endpoint
When creating a member using the API, choose whether to send an invitation email to a non-embed user. 

The [Create a member](https://help.sigmacomputing.com/reference/createmember) endpoint now includes the `sendInvite` query parameter:

<img src="assets/fff_06_2025_3.png" width="600"/>

For more information, see [Create a member](https://help.sigmacomputing.com/reference/createmember)

### Allowlist IP addresses for API access (GA)
Administrators can now restrict access to the Sigma API by adding `IP addresses` and `IP address ranges` using CIDR notation to an allowlist. 

With an allowlist configured, only users making API requests from allowed IP addresses can make successful requests.

<img src="assets/fff_02_2025_8.png" width="800"/>

For more information, see [Restrict API access by IP address.](https://help.sigmacomputing.com/docs/restrict-api-access-by-ip-address)

### New 2.1 version for some API endpoints
The following endpoints are now available in a v2.1 version. 

The new versions use pagination for the API response by default, allowing you to retrieve large responses in manageable segments.

The following endpoints are updated:
- [List members](https://help.sigmacomputing.com/reference/listmemberspaginated)
- [List teams](https://help.sigmacomputing.com/reference/listteamspaginated)
- [List workspaces](https://help.sigmacomputing.com/reference/listworkspacespaginated)
- [List materialization schedules for a workbook](https://help.sigmacomputing.com/reference/listmaterializationschedulespaginated)
- [List scheduled exports for a workbook](https://help.sigmacomputing.com/reference/listworkbookschedulespaginated)

The equivalent endpoints in v2 continue to work, but might not use pagination by default for all customers.

### New API endpoint to update the schedule for an export
The following endpoint has been added to `update a workbook schedule` for an export.

This endpoint lets you create a file containing data exported from a workbook, allowing you to retrieve large datasets or detailed reports in a structured format. Export the entire workbook, a single workbook page, or an individual element. You can specify parameters to filter the data and format options for the file.

For more information, see [Export data from a workbook](https://help.sigmacomputing.com/reference/exportworkbook) 

### New option for Export data from a workbook endpoint
When exporting an entire workbook or workbook page using the `Export data from a workbook` method, the format parameter now supports the `xlsx` option to support the Excel file format.

For more information, see [Update a workbook schedule](https://help.sigmacomputing.com/reference/updateworkbookschedule) 

### New option for List workbook pages for a workbook and List elements in a workbook endpoints
You can now retrieve pages and elements for a saved view, formerly known as a `bookmark`, using the API.

The [List workbook pages](https://help.sigmacomputing.com/reference/listworkbookpages) for a workbook endpoint and the [List elements in a workbook](https://help.sigmacomputing.com/reference/listworkbookpageelements) endpoint now include the `bookmarkId` query parameter.

### New writebackSchemas options for Create a connection and Update a connection endpoints
When adding a Snowflake or Databricks connection that uses OAuth with the [Create a connection](https://help.sigmacomputing.com/reference/createconnection) endpoint or updating one with the [Update a connection](https://help.sigmacomputing.com/reference/updateconnection) endpoint, you can use the new writebackSchemas option to provide multiple write-back schemas for the connection to use.

Multiple write-back schemas helps keep content created by different teams or users with different permissions in different schemas.

### Request an API token on any endpoint page
When accessing the Sigma public API documentation, you can request an `API token` from any endpoint documentation page, instead of first accessing the `Get access token` documentation page.

The endpoint for retrieving a token and refreshing an existing token is unchanged. This is not a code change to the API itself.

### Expanded options for the Add workbook schedule endpoint
The `Add workbook schedule` endpoint [POST /v2/workbooks/{workbookId}/schedules](https://help.sigmacomputing.com/reference/postworkbookschedule) now supports options that were previously available only from the UI, such as creating a conditional export, repeating pivot header labels, compressing attachments to a zip file, and specifying control values for the export.

### Swap link sources for datasets
The `Swap workbook data sources` endpoint, [POST /v2/workbooks/{workbookId}/swapSources](https://help.sigmacomputing.com/reference/sourceswapworkbook) now includes the option to swap dataset links. 

When using the `sourceMapping` option, the `columnMapping` option supports specifying a link name and linked column name to swap from one dataset link to another dataset link.

For example, to change the source for a workbook from one dataset link to another, set the `fromId` and `toId` to the same dataset ID, but update the `fromColumn` to the name of the previous dataset link and linked column name and the toColumn to the desired dataset link and linked column:
```json
{
    "sourceMapping": [
        {
            "fromId": "bfa59799-69c7-423d-b965-7319cbfc2ebb",
            "toId": "bfa59799-69c7-423d-b965-7319cbfc2ebb",
            "columnMapping": [
                {
                    "fromColumn": ["Link name", "Missing column name"],
                    "toColumn": ["Link name", "New column name"]
                }
            ]
        }
    ]
}
```

### Allowlist IP addresses for API access (Beta)
Restrict access to the Sigma API for your organization by adding IP addresses and IP address ranges using CIDR notation to an allowlist. 

**With an allowlist configured, only users making API requests from allowed IP addresses can make successful requests.**

For more details, see [Restrict API access by IP address (Beta).](https://help.sigmacomputing.com/docs/restrict-api-access-by-ip-address)

### New options for Add workbook schedule endpoint
The `Add workbook schedule` endpoint, [POST /v2/workbooks/{workbookId}/schedules](https://help.sigmacomputing.com/reference/postworkbookschedule) now includes two new options:

The `parameters` option, allowing you to customize control values when programmatically adding an export schedule to a workbook.

The `ownerId` option, allowing you to specify a user to own the export schedule.

### New parameters added for List workbooks endpoint
The [List workbooks](https://help.sigmacomputing.com/reference/listworkbooks) (GET /v2/workbooks) endpoint now supports two new optional query parameters:

**SkipPermissionCheck:** 
When set to `true`, allows the API client to return all workbooks in a Sigma organization, including those not shared with the requesting user. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> The API client must have admin privileges to use this parameter.
</aside>

**isArchived parameter:** When set to `true`, filters the results to include only archived workbooks.

### New API Recipe - Bulk Deactivate
For customers wanting to bulk deactivate (soft-delete) users from Sigma, this API recipe demonstrations how to accomplish that through the use of a regex pattern match against the user's name.

<aside class="negative">
<strong>NOTE:</strong><br> User records are never fully deleted from Sigma but rather deactivated, preventing future system access. Any workbooks created by the deactivated user are reassigned to the specified user.
</aside>

For more information, see [Sigma REST API Recipes](https://quickstarts.sigmacomputing.com/guide/developers_api_code_samples/index.html?index=..%2F..index#6)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** An error where workbook level custom translation files did not show up in workbook settings is now fixed.

**2:** Plugins now load initial control values as expected on refresh for version 1.0.9 or higher.

**3:** The workbook header no longer displays an `Edit` button when viewing a tagged version, which cannot be edited directly.

**4:** A `Return home` option no longer appears for users after a secure embed is deleted.

**5:** After copying and pasting a workbook or data model element with one or more columns that use metrics, those columns display correctly.

**6:** You can now successfully tag and swap the sources of a workbook version that uses a data model with data from multiple connections.

**7:** When the signature of a stored procedure used in a stored procedure action is changed, the action now validates that the signature is the same and uses the new signature if possible.

**8:** When viewing a workbook lineage in an embed, the `Shared with me` link now launches the embed modal instead of the native Sigma modal.

**9:** When you disable automatic user creation for embeds, you can now manage embed users in the `Administration` portal.

**10:** When Sigma encounters errors during a data source swap involving custom SQL and input tables, Sigma now show the error messages at the bottom of the page.

**11:** Formulas in action configurations were previously limited to functions supported by all compatible data platforms. You can now use any function supported by your connection's data platform.

**1:** When adding date data in an input table, the format of the data now respects the locale of the Sigma organization. For example, if your Sigma organization uses a locale of English (Great Britain) and you paste a date value of 10.05.2025 into an input table, the date correctly appears as May 10, 2025.

**2:** When adding a version tag to a data model and swapping sources from one connection to another in cases where the table is available at a different path in each connection, the data sources no longer fail to swap with the error "Failed to find the table in connection".

**3:** Users in an embed can no longer open the source of a data model.

**4:** After deactivating a SCIM user, the folder created to contain the deactivated user's documents no longer includes a UUID and matches the behavior described in Deactivated user documents.

**5:** When revoking access to a connection, database or catalog, schema, table, or stored procedure in Sigma, you can now only revoke access from the level to which the access was granted.

**6:** When a user has inherited access to a document from a version-tagged folder, the version tag is now shown in the Share Workbook or Share Data Model modal.

**7:** When sharing a workbook, version tags now appear for all access levels as expected.

**8:** When a user has access to specific version tagged documents in a folder, you can now grant access to all versions of 
documents in the Share Folder modal.

**9:** Archived connections no longer cause unexpected errors in shared templates.

**10:** Changing organization level authentication from OAuth to another authentication method no longer causes independent OAuth configuration options to disappear in Administration.

**11:** The  More menu for tables has been updated to remove a nonfunctional Make owner option.

**12:** When using connection-level OAuth, your email is no longer checked to see if it matches the email used for signing in to Sigma.

**13:** Previously, in Snowflake OAuth connections with service accounts enabled, if the serviceAccountWarehouse was not set in Sigma, it would be evaluated as undetermined (resulting in an error). Now, if the warehouse is set by a user attribute, the service account will use the default value of the user attribute.

**14:** When pressing Tab to navigate between elements in a container, the navigation order matches the position of the elements within the container.

**15:** When a container is selected, pressing Tab correctly changes selection from the container to the top-left-most element in the container.

**16:** When the top-left-most element in a container is selected, pressing Shift + Tab selects the parent container.

**17:** When selecting an element in a workbook to navigate to with the Navigate in this workbook action, the list of elements for a page matches the order of the elements on the page.

**18:** Sigma now uses improved logic for presenting the initial workbook page from a URL with the :nodeId parameter when the page includes conditional visibility rules. If the user cannot view the page, the first visible page is shown.

**19:** Sigma did not support workbook deletion for JWT-signed secure embeds. Now a user can delete a workbook from the menu and get redirected to an error page with the document browser to navigate to another workbook.

**20:** For JWT-signed embeds, errors are now sent when the JWT token cannot be parsed and when the current user is not invited to the workbook they are attempting to access.

**1:** Tagging a data model with a CSV uploaded no longer results in an error.

**2:** Secure embed users no longer see an “Invalid Databricks access token” error when accessing a workbook with OAuth credentials on a Databricks connection.

**3:** X-axis labels in trellis charts now display correctly when the y-axis title is displayed ( `Format` > `Y-Axi`s >` Axis title`) and shared x-axis is enabled (`Format` > `Trellis` > `Shared` > `X-Axis`).

**4:** In a custom view of a workbook embed when `:responsive_height` is set to `true`, the lineage view now displays correctly without being truncated.

**5:** When exporting grouped tables with totals, the totals now appear in a separate column with a correct header, for example, `"Column Name" (Grand Total)`.

**6:** Dynamic text in text elements now correctly displays line breaks (newline characters) and whitespace characters (tabs or spaces).

**7:** In OAuth-enabled embedded workbooks, OAuth connections are no longer disabled when external OAuth tokens are passed in an embed URL.

**8:** When an action sequence on a chart has a condition referencing the `Selection` variable, triggering the sequence by clicking whitespace on the chart no longer generates an error.

**9:** When an action sequence is configured with the `On select` trigger type for a column, the sequence is no longer initiated when a user clicks the column header.

**10:** If users attempt to run a query with OAuth credentials that do not exist, they are now shown an improved error message.

**11:** When sharing a template containing input tables across organizations, the input table data entry permissions in the shared template now matches what was defined in the source document.

**1:** Actions with conditions based on hidden columns now trigger as expected.

**2:** The Workspaces page no longer displays a `Too many results resolved` error when attempting to load a very large number of workspaces. 

**3:** In secure embeds that use `OAuth` to access data, new embed users no longer need to reload the embed to clear a `no valid refresh token` error. Instead, the embed loads for a newly-created embed user on the first try.

**4:** API endpoints that return information about tagged workbook versions now return an accurate `sourceWorkbookVersion.` Previously, the API returned the highest `sourceWorkbookVersion` even in cases where a lower s`ourceWorkbookVersion` had been tagged more recently.

**5:** Users are no longer signed out of Sigma if they attempt to run a query with `OAuth credentials` that do not exist.

**6:** For connections that use `OAuth`, users can now see and use stored procedures that they have access to.

**5:** Materialization schedules owned by users deactivated after `March 25, 2025` transfer to the administrator performing the deactivation, or if specified, the user chosen to receive the deactivated user's documents. Materialization schedules owned by users deactivated prior to that date fail to run and materialized elements might display an error.

**1:** The `Create connection` endpoint [POST /v2/connections](https://help.sigmacomputing.com/reference/createconnection) and `Update connection` endpoint [PUT /v2/connections/{connectionId}](https://help.sigmacomputing.com/reference/updateconnection) no longer fail when creating or updating connections with OAuth. 

<aside class="negative">
<strong>NOTE:</strong><br> Note that for non-OAuth connections, the API validates that you can connect to the newly created or updated connection with your credentials. In the case of an OAuth connection, this validation step does not apply. Instead, manually validate that you can connect with your OAuth credentials after you create or update the connection.
</aside>

**2:** When the value of a grouping key is null, applying the `Selection variable` to an `Open link` action no longer returns a null value that opens a blank page.

**1:** When a value in a `list control` is selected, the `display value` is now shown instead of the `raw value.`

**2:** Formulas with an argument referencing a hidden control (control element on a hidden page) now evaluate successfully, regardless of the reference’s argument position.

**3:** When entering a table in a SQL query, the autocomplete dropdown now excludes tables that the user does not have permission to view.

**4:** You can now select specific tables in a data model when adding or changing data sources for an element.

**5:** Sigma no longer allows users to create input tables on an OAuth connection when an input table edit log destination is not configured.

**6:** The `Refresh element` action now successfully refreshes data for elements on hidden pages.

**7:** The `List columns` for a workbook element endpoint `(GET /v2/workbooks/{workbookId}/elements/{elementId}/columns)` now correctly returns pagination data in the nextPage portion of the response.

**8:** Scheduled exports that email team members now send to the members of the team when the export is sent, instead of the members of the team when the schedule is added.

**9:** When the embed team name contains an apostrophe, the embed sandbox no longer shows an `invalid embed signature` error and loads the embed successfully.

**10:** When you switch between `Secur`e and `JWT` mode in the embed sandbox, Sigma now clears the URL field so that you can load the new embed without any error messages.

**11:** When hidden column values are passed to controls through workbook actions, those columns are now correctly excluded from Excel files.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20

### Configure data labels per series on Cartesian charts (GA)
If your Cartesian (bar, line, area, or scatter) or combo chart visualizes multiple series of data, you can configure different data label settings for each series.

For more information, see [Format and show data labels](https://help.sigmacomputing.com/docs/display-chart-data-labels#format-and-show-data-labels)

### Change to underlying data grouping for cartesian charts
Previously, underlying data was grouped for cartesian charts (bar, line, area, scatter, combo, box, and waterfall charts) regardless of whether the chart values were aggregated. 

With this update, when viewing underlying data, the grouping will match the chart aggregation. 

For example, if `Aggregate values` is unchecked, the underlying data is not grouped.

For more information, see: [View underlying data](https://help.sigmacomputing.com/docs/view-underlying-data)

### Legend controls (GA)
Add the legend control element to your workbook to target multiple charts with one legend and align colors across charts.

The legend control functions as an interactive legend, letting you filter and highlight corresponding data points in targeted charts. 

Any categories not represented in the list are collected as an extra category, `Others`, which can be turned off.

For example, the image below shows one legend targeting two charts with the `Others` category hidden:

 <img src="assets/fff_04_2025_6.png" width="800"/>

For more information, see [Create and configure a legend control](https://help.sigmacomputing.com/docs/create-and-configure-a-legend-control)

### Customize chart and formatting color scales (GA)
Create custom color scales to use when formatting chart colors or conditional formatting for tables. Create a custom color scale for an organization theme, workbook theme, or for a specific data element.

For more information, see [Add a custom color scale.](https://help.sigmacomputing.com/docs/add-a-custom-color-scale)

### Interactive chart legends support map and funnel charts
Map and funnel charts that have a color by category set support the following interactive filtering capabilities in the legend:

- Hover over a legend entry to highlight corresponding data points.
- Click a legend entry label to isolate corresponding data points.
- Select or clear the checkbox of one or more legend entries to show or hide corresponding data points.
- Click anywhere (within the element) outside of the plot area or legend to reset the chart displ

### Legend control element (Beta) <img src="assets/heart_icon.png" width="25"/>
Add the `legend control element` to your workbook to target multiple charts with one legend and align colors across charts. 

The legend control functions as an interactive legend, letting you filter and highlight corresponding data points in targeted charts. Any categories not represented in the list are collected as an extra category, "Others", which can be turned off.

For example, the image below shows one legend control targeting two charts:

<img src="assets/fff_02_2025_2.png" width="800"/>

For more details, see [Create and configure a legend control (Beta)](https://help.sigmacomputing.com/docs/create-and-configure-a-legend-control)

### Customize chart and formatting color scales (GA)
Create custom color scales to use when formatting chart colors or conditional formatting for tables. Create a custom color scale for an organization theme, workbook theme, or for a specific data element.

For more information, see [Add a custom color scale.](https://help.sigmacomputing.com/docs/add-a-custom-color-scale)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

### Improved data model overview
The status of elements in the model overview panel is more visible when you open a data model for editing but have not yet selected any elements. Elements enabled as a source show with a <img src="assets/eye.png" width="40"/> icon and elements disabled as a source show with a <img src="assets/noeye.png" width="40"/> icon.

### Improved management of data model source visibility
Instead of managing the visibility of an element in a data model with a <img src="assets/eye.png" width="40"/> on the element, now you manage the visibility of a table as a source from the Modeling tab.

For more information, see [Enable or disable an element as a data source](https://help.sigmacomputing.com/docs/create-and-manage-data-models#enable-or-disable-an-element-as-a-data-source)

### Materialization for data models (GA)
Scheduling materialization for elements in data models is now generally available. 

If you have data sources that use expensive or long-running queries, such as a complex join between data elements, or a dataset with high cardinality and multiple grouping levels and calculated columns, setting up materialization enhances query performance and can help reduce compute costs.

For more information, see [About materialization](https://help.sigmacomputing.com/docs/materialization) and [Create a data element materialization schedule](https://help.sigmacomputing.com/docs/schedule-materialization-for-a-data-model-or-workbook#create-a-data-element-materialization-schedule) for a data model or workbook.

### Materialization support for version-tagged data models (GA)
Schedule materialization for each tagged version of a data model. If the published version already has a materialization schedule for one or more elements, you can choose to reuse the same schedule for the tagged version.

When you promote a tag to a new version of the data model, such as moving a tag from an older version of the data model to the latest published version, a new materialization run is started. While the materialization runs for the newly tagged version, the materialized data for the previously tagged version of the data model is used.

For more information, see [Schedule materialization for a version-tagged data model](https://help.sigmacomputing.com/docs/schedule-materialization-for-a-version-tagged-data-model)

### Data models (GA)
Data models are now generally available. 

Data models provide a semantic layer for your data, letting you organize and store data in a structured governed way without modifying raw data. 

You can create and manage reusable data elements with visual semantic modeling in an entity relationship diagram, empowering business users to independently model and explore data.

For more information, see:

[Get started with data modeling](https://help.sigmacomputing.com/docs/get-started-with-data-modeling)<br>
[Create and manage data models](https://help.sigmacomputing.com/docs/create-and-manage-data-models)<br>
[Navigate data models](https://help.sigmacomputing.com/docs/navigate-data-models)

There is a also a QuickStart: [Fundamentals 10: Data Modeling](https://quickstarts.sigmacomputing.com/guide/fundamentals_10_data_modeling/index.html?index=..%2F..index#0)

### Add metrics to data models (GA)
Adding metrics to data models is now generally available. 

Metrics are dynamic and reusable calculations that are specific to a data source. 

As such, metrics usually reference specific columns. Create a metric to provide reliable and efficient aggregate calculations, abstracting complex formulas away from business users.

When defining a metric on a data model, you can reference other metrics in your formula. Metrics propagate downstream, so a metric defined on one data model is also available to any data elements that use that data model as a source.

For more information, see:

[About metrics](https://help.sigmacomputing.com/docs/about-metrics)<br>
[Create and manage metrics](https://help.sigmacomputing.com/docs/create-and-manage-metrics)<br>
[Navigate data models](https://help.sigmacomputing.com/docs/navigate-data-models)<br>
[Use metrics in a workbook](https://help.sigmacomputing.com/docs/use-metrics-in-a-workbook)

### Column-level security for data models (GA) <img src="assets/heart_icon.png" width="25"/>
Applying column-level security (CLS) to elements in data models is now generally available. 

Column-level security restricts access to column-level data for or one or more users or teams using the data model table downstream. This ensures that sensitive and confidential information is secure and accessible only to authorized users.

<aside class="negative">
<strong>BEST PRACTICE:</strong><br> Sigma recommends creating a team for each group of users to whom you want to restrict column access.
</aside>

For more information, see [Configure column-level security](https://help.sigmacomputing.com/docs/column-level-security)

### Define relationships in data models (GA)
You can now add relationships between tables in a data model to enable business users to work with related data without performing ad hoc joins. 

A relationship defines the join logic for Sigma to use to join the tables, making the columns from both tables available to the source table for analysis and exploration on demand. When a user analyzes the source table in a workbook and adds a related column, Sigma performs the join.

Relationships between data model tables only support many-to-one or one-to-one joins, and are not automatically created between tables from a connected data source, even if the table has primary and foreign keys defined.

Newly available functionality:

- Use related columns in data models
- Add relationships to elements disabled as a source

For more information, see [​​Define relationships in data models](https://help.sigmacomputing.com/docs/define-relationships-in-data-models) 

For guidance using related columns in a workbook or data model, see [Use related columns in a workbook or data model](https://help.sigmacomputing.com/docs/use-related-columns-in-a-workbook)

### Map changed columns in a data model
When you publish a data model with changes that could break downstream elements, you are now prompted to map changed columns to prevent errors such as Unknown column [columnID] or Column [ColumnID] does not exist.

For more information, see [Map changed columns in a data model](https://help.sigmacomputing.com/docs/create-and-manage-data-models#map-changed-columns-in-a-data-model)

### Updated behavior when targeting a data model source parameter from a workbook control
When passing values from a workbook control to a data model, you no longer need to target the source parameter with a specific data model table element. 

Instead, you can associate a control element in the workbook with a control element in the data model itself.

Existing workbook control elements that target data model elements with source parameters continue to work.

For more information, see [Create and manage a control element](https://help.sigmacomputing.com/docs/create-and-manage-a-control-element#pass-a-value-from-a-workbook-control-to-a-data-model-control)

Sigma has made significant changes to the way users can model data. Data Models represent the next iteration of Datasets. We’re investing heavily in Data Models over the coming months and years, with plans to add a whole suite of functionality outlined in this post. 

In April, we are releasing several new features in this area to beta. 

### Add metrics to data models (Beta)
You can now add metrics to data models. Metrics are dynamic and reusable calculations that are specific to a data source. As such, metrics usually reference specific columns. Create a metric to provide reliable and efficient aggregate calculations, abstracting complex formulas away from business users.

When defining a metric on a data model, you can reference other metrics in your formula. Metrics propagate downstream, so a metric defined on one data model is also available to any data elements that use that data model as a source.

Data elements in data models and workbooks that were materialized before April 1, 2025 might not work with metrics. If columns that use metrics produce an Invalid Query error, and the table or an upstream table is materialized, manually re-run the materialization. If the error persists, contact Sigma Support.

For more information, see:

[About metrics](https://help.sigmacomputing.com/docs/about-metrics)
[Create and manage metrics](https://help.sigmacomputing.com/docs/create-and-manage-metrics)
[Navigate data models](https://help.sigmacomputing.com/docs/navigate-data-models)
[Use metrics in a workbook](https://help.sigmacomputing.com/docs/use-metrics-in-a-workbook)

### Column-level security for data models (Beta)
You can now apply column-level security (CLS) to elements in data models. 

Column-level security restricts access to column-level data, ensuring that sensitive and confidential information is secure and accessible only to authorized users. 

CLS in a data model element allows configuration for specific users or teams.

For example, we may not want to allow users to see the `Cost Amount` column in a sales table:

 <img src="assets/fff_04_2025_4.png" width="800"/>

For more information, see [Configure column-level security](https://help.sigmacomputing.com/docs/column-level-security)

### Define relationships in data models (Beta)
You can pre-configure relationships between tables in a data model to enable business users to work with related data without performing ad hoc joins. 

A relationship defines the join logic for Sigma to use to join the tables, making the columns from both tables available to the source table for analysis and exploration **on demand.** 

When a user analyzes the source table in a workbook and adds a related column, Sigma performs the join.

<aside class="positive">
<strong>IMPORTANT:</strong><br> When a data model is used in a workbook, only the tables that have selected columns from the relationship are queried from the warehouse. The relationship may have tables that are available but if no columns are selected by the user, the table is not queried. This is called "join pruning" and improved performance and help reduce warehouse compute cost by not requesting tables that are not required by Sigma.
</aside>

Relationships between data model tables only support many-to-one or one-to-one joins, and are not automatically created between tables from a connected data source, even if the table has primary and foreign keys defined.

The video below shows selecting an existing data model relationship and opening the `Edit relationship` modal to view more details, such as relationship name, description, and keys:

<img src="assets/data_model.gif">

For more information, see [​​Define relationships in data models (Beta)](https://help.sigmacomputing.com/docs/define-relationships-in-data-models) 

For guidance using related columns in a workbook, see [Use related columns in a workbook (Beta)](https://help.sigmacomputing.com/docs/use-related-columns-in-a-workbook)

### Materialization support for version-tagged data models
You can now schedule materialization for each tagged version of a data model. 

For more information, see [Schedule materialization for a version-tagged data model](https://help.sigmacomputing.com/docs/schedule-materialization-for-a-version-tagged-data-model)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20

### Change to email notifications for embed user account type changes
Email notifications are no longer sent to embed users when an admin makes changes to those users’ account type.

### QuickStart series has been refactored
The entire [QuickStart embedding series](https://quickstarts.sigmacomputing.com/?cat=embedding) has been redone to incorporate new embed functionality, sample source code in GitHub, design changes related to horizon and license changes.

Did I mention there are 17 in total!

- Embedding 01: Getting Started - This one anchors them all and needs to be completed first.
- Embedding 02–03: Federated Access, JWTs & Parameters
- Embedding 04: Isolation Solutions
- Embedding 06: Creating a Premium Service
- Embedding 08: Ask Sigma Integration
- Embedding 10: Version Tagging
- Embedding 13–16: Link Sharing, Public Access, React SDK, and more
- Use Cases: Salesforce (using Lightning Web Components), Streamlit

Embedding 05 is missing by design- a placeholder for a new feature coming soon.

<aside class="negative">
<strong>NOTE:</strong><br> The older embed series QuickStarts are moved but still available by link. There is also mentioned on the QuickStart homepage. 
</aside>

### New outbound event emitted for saved workbooks
When a workbook is successfully saved using the `Save as` option from the embed menu, an outbound `workbook:saveas` event is emitted. The event returns the `worbookId` of the new workbook.

Developers can use this event to implement custom messages or workflows.

For more information, see [workbook:saveas](https://help.sigmacomputing.com/docs/outbound-event-reference#workbooksaveas)

### Removed links to Sigma pages in embedded application workbooks
In embedded applications, Sigma no longer includes links that reference Sigma processes or link to Sigma documentation. Sigma links in these sections of a workbook do not appear in embeds:

- Column details
- Functions bar, specifically the Function icon
- Lineage / query history
- Metric tab

### New connection_oauth_tokens JWT claim
The `connection_oauth_tokens` JWT claim is now available. 

This is an optional claim that allows you to pass OAuth tokens through JWT-signed URLs for connection-level OAuth. 

For more information, see [JWT claims](https://help.sigmacomputing.com/docs/create-an-embed-api-with-json-web-tokens#jwt-claims)

### New outbound event emitted for deleted workbooks
When a workbook is successfully deleted from the embed menu, an outbound workbook:ondelete event is emitted.

For more information, see [workbook:ondelete](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds#workbookondelete)

There is also a QuickStart: [Embedding 16: Secure Embedding with JWT](https://quickstarts.sigmacomputing.com/guide/embedding_16_jwt/index.html?index=..%2F..index#0)

### Ask Sigma now supported in secure embeds signed with JWT (Beta) <img src="assets/heart_icon.png" width="25"/>
Secure embedding with JWTs now extends to the `Ask Sigma` page. 

Embed `Ask Sigma` in your own application to offer your end users the ability to ask natural language queries of the data they have permission to access. 

Apply custom theming and remove Sigma branding for seamless integration.

For example:

<img src="assets/ask_sigma_embed.gif">

For more information, see [Embed Ask Sigma (Beta)](https://help.sigmacomputing.com/docs/embed-ask-sigma) and [Ask natural language queries with Ask Sigma](https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-ask-sigma)

### Authenticate secure embeds using JSON Web Tokens (JWTs) (GA) <img src="assets/heart_icon.png" width="25"/>
Sigma supports authenticating secure embeds using **JSON Web Tokens (JWTs).** 

JWTs are compact, URL-safe tokens that can be digitally signed, ensuring that the data they contain is tamper-proof. Using JWT-signed URLs for your embeds offers several advantages, including offering a secure way to embed content that can be accessed by both external users and internal users.

For more information, see [Create an embed API with JSON web tokens](https://help.sigmacomputing.com/docs/create-an-embed-api-with-json-web-tokens)

There is also a QuickStart on this topic: [Embedding 16: Secure Embedding with JWT](https://quickstarts.sigmacomputing.com/guide/embedding_16_jwt/index.html?index=..%2F..index#0)

### New outbound events in embeds
Use two new outbound events, `workbook:bookmark:ondelete` and `workbook:bookmark:onupdate`, to communicate and interact between embedded content and the host application.

The event, `workbook:bookmark:ondelete` occurs when an embed user deletes a bookmark using the embed UI.

The event, `workbook:bookmark:onupdate` occurs when an embed user updates a bookmark using the embed UI by either changing the bookmark name, setting or removing it as the default view, sharing the bookmark, or unsharing the bookmark by setting it as a personal view.

For more information, see [Implement inbound and outbound events in embeds.](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds)


### Embed SDK for React (GA)
The `Embed SDK for React` offers a developer-friendly interface that simplifies integration into applications. 

Developers can access detailed installation and usage guides on Github.

For more information, see [Embed SDK for React](https://help.sigmacomputing.com/docs/embed-sdk-for-react) or review the [Embedding 15: Embed-SDK for React QuickStart.](https://quickstarts.sigmacomputing.com/guide/embedding_15_embed_sdk/index.html?index=..%2F..index&_gl=1*sstmup*_gcl_au*NjI3NDQxOTM0LjE3MzY5Nzc3NTc.*_ga*MjAyNzIyMDcwLjE3MTcxODQ4Nzk.*_ga_PMMQG4DCHC*MTczODY5ODEzNC40ODkuMS4xNzM4Njk5NzA1LjYwLjAuMA..#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions / Calculations
Duration: 20

### New DayOfYear function and day_of_year DatePart argument
Return the day of the year as a number (1-365, or 1-366 in leap years) from a date using the [DayOfYear](https://help.sigmacomputing.com/docs/dayofyear) function. 

You can also return the day of the year as a number using day_of_year in the precision argument of the [DatePart](https://help.sigmacomputing.com/docs/datepart) function.

### Three new functions
Sigma has enabled three functions that are useful in any situation where you want to quantify the relationship between two numeric variables, particularly in exploratory data analysis, trend evaluation, or predictive modeling.

#### RegressionSlope function
The RegressionSlope function calculates the slope of the linear regression line. The function is now supported for Databricks, Snowflake, and PostgreSQL.

For more information, see [RegressionSlope](https://help.sigmacomputing.com/docs/regressionslope)

#### RegressionIntercept function
The RegressionIntercept function calculates the `y-intercept` of the linear regression line. The function is now supported for Databricks, Snowflake, and PostgreSQL.

For more information, see [RegressionIntercept](https://help.sigmacomputing.com/docs/regressionintercept)

#### RegressionR2 function
The RegressionR2 function calculates the `R2 value`, or coefficient of determination, of the linear regression line. The function is now supported for Databricks, Snowflake, and PostgreSQL.

For more information, see [RegressionR2](https://help.sigmacomputing.com/docs/regressionr2)

![Footer](assets/sigma_footer.png)

### ArrayExcept function
The ArrayExcept function returns an array of all unique elements from one specified array not included in another specified array. 

For example, consider a table that lists all available colors of different clothing items. To see all colors available for each item, ***excluding the colors black and white**, use the ArrayExcept formula:
```code
ArrayExcept([Colors], Array("black", "white"))
```

 <img src="assets/fff_04_2025_3.png" width="800"/>

This can be a big time saver!

For more information, see [ArrayExcept](https://help.sigmacomputing.com/docs/arrayexcept)

### Get additional formula guidance <img src="assets/heart_icon.png" width="25"/>
When you write formulas in workbooks and data models, additional guidance is now available to help! 

If guidance is available, a wavy underline appears. 

Hover over the highlight to see a tip or a warning that your results might not be what you expect, and select `Apply formula` to update your formula with one click.

<img src="assets/fff_01_2025_1.png" width="600"/>

This works for simple and complex formulas and help catch those little syntax issues that can be a time-waster too.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Filters and controls
Duration: 20

### Specify date values in controls with Unix timestamps
Date range controls and date controls now accept date values as `Unix timestamps` (milliseconds since epoch) when setting values with URL query string parameters or from an action.

For exampleL
```code
 ?date-control-ID=1738260555.
```

For more information, see [Set control values in a URL using query string parameters.](https://help.sigmacomputing.com/docs/workbook-control-values-in-the-url)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20

### Input table error handling
The following changes to input tables have been implemented to improve data integrity and prevent unexpected data loss:

- Input table edits that are unsuccessful due to configuration or availability issues in the connection or data platform (which must be resolved by the customer) are now treated as fatal errors and will no longer be retried.

- When Sigma detects a configuration or availability issue in the connection or data platform, it blocks edits to relevant input tables and displays an “Unable to edit” message directly on the input table elements until the configuration issue is resolved.

- Sigma sends admins an email alert that identifies the misconfigured or unavailable connection, displays the error message, and provides troubleshooting guidance.

### Created at/by columns in input tables (Beta)
You can now add `Created at` and `Created by` columns to input tables to record metadata associated with each row’s creation.

This is in addition to and different than the current `Last updated at/by` columns.

**Created at:**	Date and time the row was added to the input table.

**Created by:**	Email address of the user who initially added the row to the input table.

<img src="assets/fff_05_2.png" width="400"/>

For more information, see [Add row edit history](https://help.sigmacomputing.com/docs/add-system-generated-columns-to-input-tables#add-row-edit-history)

### Input table support on BigQuery connections (Beta)
Input tables are now compatible with `BigQuery` connections. 

The dynamic workbook elements support structured data entry, allowing you to integrate new data points into your analysis and augment existing data from your data platform.

For more information about input tables and how to use them, see the following documentation:

[Intro to input tables](https://help.sigmacomputing.com/docs/intro-to-input-tables)
[Create new input tables](https://help.sigmacomputing.com/docs/create-new-input-tables)
[Edit existing input table columns](https://help.sigmacomputing.com/docs/edit-existing-input-table-columns)

There is a also a QuickStart (Snowflake based, but any supported connection will work too): [Sigma Input Tables: Use Cases](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0)

### Multi-select columns in input tables (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now use multi-select columns in input tables to enable users to add one or more discrete values to a single cell. 

You can create and manage a predefined list of custom values or choose an existing data source or element in the workbook to populate the list. 

Values are displayed as individual pills and can be assigned different colors for visual differentiation and clarity:

<img src="assets/fff_05_6.png" width="800"/>

For more information, see [Configure multi-select columns on input tables](https://help.sigmacomputing.com/docs/configure-multi-select-columns-on-input-tables)

### Input tables are now supported on Amazon Redshift connections (GA) <img src="assets/heart_icon.png" width="25"/>

Input tables are now compatible with Amazon Redshift connections. These dynamic workbook elements support structured data entry that allows you to integrate new data points into your analysis and augment existing data.

For more information about input tables and how to use them, see the following documentation:

[Intro to input tables](https://help.sigmacomputing.com/docs/intro-to-input-tables)
[Create new input tables](https://help.sigmacomputing.com/docs/create-new-input-tables)
[Edit existing input table columns](https://help.sigmacomputing.com/docs/edit-existing-input-table-columns)

There is also a [QuickStart](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0) that demonstrates common use case. While this QuickStart uses Snowflake, they will behave the same on Redshift as well. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in 2025
Duration: 20

### Create an Ask Sigma Usage Dashboard
In this QuickStart, we explore how to securely enable and monitor [Ask Sigma usage](https://quickstarts.sigmacomputing.com/guide/administration_ask_sigma_usage_dashboard/index.html?index=..%2F..index#0) in your organization.

### Embedding Series Refactoring
The entire [QuickStart embedding series](https://quickstarts.sigmacomputing.com/?cat=embedding) has been redone to incorporate new embed functionality, sample source code in GitHub, design changes related to horizon and license changes.

Did I mention there are 17 in total!

- Embedding 01: Getting Started - This one anchors them all and needs to be completed first.
- Embedding 02–03: Federated Access, JWTs & Parameters
- Embedding 04: Isolation Solutions
- Embedding 06: Creating a Premium Service
- Embedding 08: Ask Sigma Integration
- Embedding 10: Version Tagging
- Embedding 13–16: Link Sharing, Public Access, React SDK, and more
- Use Cases: Salesforce (using Lightning Web Components), Streamlit

Embedding 05 is missing by design- a placeholder for a new feature coming soon.

<aside class="negative">
<strong>NOTE:</strong><br> The older embed series QuickStarts are moved but still available by [this link](https://quickstarts.sigmacomputing.com/deprecated/) There is also mentioned on the QuickStart homepage. 
</aside>

### Snowflake Summit 2025 - Hands on Lab
In this [QuickStart](https://quickstarts.sigmacomputing.com/guide/partners_snowflake_summit_2025/index.html?index=..%2F..index#0) (which was launched at this year's Snowflake Summit) you will create an analysis using AI, and leverage a data application and forecast out product performance. You will act as a category manager at a retail company building out an ad-hoc analysis from an AI-generated jump-off point to determine your category plan for the year.

[Fundamentals 10: Data Modeling](https://quickstarts.sigmacomputing.com/guide/fundamentals_10_data_modeling/index.html?index=..%2F..index#0)

In this QuickStart, we explore how to build a Sigma data model, join and organize tables, create calculated fields and metrics, apply column-level security, and improve usability through folders and materialization. With these tools, you're ready to deliver clean, consistent, and secure data to your users—all without writing SQL.

### Resolving The Fan Trap with Sigma and Snowflake UDF
In this QuickStart, we explore a fan trap use case and one way to solve it in Sigma.

A fan trap occurs when a one-to-many relationship is followed by another one-to-many relationship, leading to potential overcounting of values in queries. 

[Resolving The Fan Trap with Sigma and Snowflake UDF](https://quickstarts.sigmacomputing.com/guide/tables_fan_traps/index.html?index=..%2F..index#0)

### AI App QuickStarts are Here! <img src="assets/heart_icon.png" width="25"/>

In fact, there are **ten** to choose from right now!

[AI App Fundamentals](https://quickstarts.sigmacomputing.com/guide/dataaps_fundamentals/index.html?index=..%2F..index#0)

[Adjustment Change Log](https://quickstarts.sigmacomputing.com/guide/dataapps_adjustments_change_log/index.html?index=..%2F..index#0)

[Approvals](https://quickstarts.sigmacomputing.com/guide/dataapps_approvals_flow/index.html?index=..%2F..index#0)

[Discounted Cash Flow](https://quickstarts.sigmacomputing.com/guide/dataapps_finance_discounted_cash_flow/index.html?index=..%2F..index#0)

[Forms Quick Capture and Analysis with Sigma](https://quickstarts.sigmacomputing.com/guide/dataapps_create_a_form_simple/index.html?index=..%2F..index#0)

[Integrate 3rd Party REST API via Stored Procedure](https://quickstarts.sigmacomputing.com/guide/dataapps_calling_external_api_procedure/index.html?index=..%2F..index#0)

[Native Sigma Snapshot Workflow](https://quickstarts.sigmacomputing.com/guide/dataapps_native_sigma_snapshot_workflow/index.html?index=..%2F..index#0)

[Pivot Spreading](https://quickstarts.sigmacomputing.com/guide/dataapps_pivot_spreading/index.html?index=..%2F..index#0)

[Reconciliation](https://quickstarts.sigmacomputing.com/guide/dataapps_reconciliation/index.html?index=..%2F..index#0)

[Snapshotting with Stored Procedures](https://quickstarts.sigmacomputing.com/guide/dataapps_snapshotting_with_sp/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Pivot Tables
Duration: 20

### Display images in pivot table cells <img src="assets/heart_icon.png" width="25"/>
If your pivot table has a column that contains links to images, such as thumbnail images of retail products, you can transform the column to display the image links as images. 

You can set images to display in pivot table row, column, or values columns.

For more information, see [Display linked images in a table or pivot table.](https://help.sigmacomputing.com/docs/add-hyperlinks-to-columns#display-linked-images-in-a-table-or-pivot-table)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Export to Microsoft Teams and SharePoint (Beta)
You can now export a workbook, workbook page, or element from Sigma to a `Microsoft Teams channel` or a `Microsoft SharePoint folder`.

To start exporting to `Teams` or `SharePoint`, a user with the Admin account type must set up a [Microsoft integration](https://help.sigmacomputing.com/docs/manage-microsoft-integration) and the relevant account type permission must be enabled for users.

For more information, see [Export to Microsoft Teams](https://help.sigmacomputing.com/docs/export-to-microsoft-teams) and [Export to Microsoft SharePoint](https://help.sigmacomputing.com/docs/export-to-microsoft-sharepoint)

### Export PDFs to larger page sizes (Beta)
When you export a workbook, page, or element to a `PDF`, you can now choose the page size. 

In addition to the previously supported Letter size, you can now export to Legal, Tabloid, A0, A1, A2, A3, and A4 page sizes.

### Limit display values in a data element (GA)
Limit the number of values displayed in a grouped table, pivot table, or chart, and group the remaining values in an "Others" category. You can transform an existing column or use the `VisibilityLimit` function with a sorted table.

For more information, see [Limit displayed values in a data element](https://help.sigmacomputing.com/docs/limit-displayed-values-in-a-data-element)

### New supported workbook locales
English (Canada), English (Ireland), Spanish (Mexico) and Chinese (Traditional) are now supported workbook locales. This includes language, date format, number format, and currency. You can preview a workbook in
en-ca, en-ie, es-mx, or zh-tw.

For more information, see [Manage workbook localization](https://help.sigmacomputing.com/docs/manage-workbook-localization)

### Add shortcuts to documents (GA)
If you want to save links to documents in more than one location, you can add a shortcut:

<img src="assets/fff_05_7.png" width="450"/>

Use shortcuts to make specific data sources easier to find in the source picker, or to organize documents to make key workbooks and data models easier to access.

The shortcut icon looks a little different than a standard workbook: <img src="assets/fff_05_8.png" width="60"/>

For more information, see [Add shortcuts to documents](https://help.sigmacomputing.com/docs/add-shortcuts-to-documents)

### Custom totals and subtotals for pivot tables and grouped tables (GA)
In a pivot table or grouped table, you can change the way that totals and subtotals are calculated by choosing to change the aggregate used for a subtotal, or modifying the formula for a grand total or subtotal directly.

With this update, the default names of subtotals and totals update to `Column Name` total for `subtotals` or `Grand total` for totals. You can also change the label of any `subtotal` or `grand total`.

For more information, see [Customize totals and subtotals](https://help.sigmacomputing.com/docs/pivot-table-subtotals#customize-totals-and-subtotals)

### Drag to move the live chat window <img src="assets/heart_icon.png" width="25"/>
When chatting with a Sigma support engineer, you can now click and drag the handle on the top left corner of the live chat window to move it to a more convenient location on your screen. 

This helps you more easily interact with Sigma Support and access key parts of your screen at the same time.

### Export to webhook supports PDF files
Send PDF-formatted files to a webhook endpoint from Sigma.

For more information, see [Export to webhook](https://help.sigmacomputing.com/docs/export-to-webhook)

### Limit display values in a data element (Beta)
You can now limit the number of values displayed in a grouped table, pivot table, or chart, and group the remaining values in an "Others" category.

You can transform an existing column or using the [VisibilityLimit](https://help.sigmacomputing.com/docs/visibilitylimit) function with a sorted table.

Different from a Top N filter , limiting the display values lets you change which values are displayed without affecting the calculated totals and other values.

For example, to only show the top 3 performing stores in each store region in a pivot table, you can limit the displayed stores to the top 3 sorted by total products sold:

```code
VisibilityLimit([Store Name], 3)
```

<img src="assets/fff_05_4.png" width="800"/>

For more information, see [Limit displayed values in a data element](https://help.sigmacomputing.com/docs/limit-displayed-values-in-a-data-element)

### More precise formatting of grand totals and subtotals
You can now format the grand totals and subtotals of a pivot table or grouped table separately from other values in the column. 

For example, format the grand total row of a pivot table to display numbers in SI units, while the values columns display whole numbers.

For more information, see [Format and customize a table](https://help.sigmacomputing.com/docs/format-and-customize-a-table#format-column-and-totals-data)

### Organize columns into folders (Beta) <img src="assets/heart_icon.png" width="25"/>
When working with data elements in data models and workbooks you can organize columns into folders, letting you nest columns into relevant groups. 

Folders that you create in a data model or parent element are available to downstream elements, like a data element that uses a data model as a data source, or a child element.

For more information, see [Organize columns into folders](https://help.sigmacomputing.com/docs/organize-columns-into-folders)

### Popovers (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now use popovers to display information in containers anchored to specific elements. 

Popovers allow you to present relevant content (tables, charts, controls, etc.) only when needed, creating a more efficient and simplified workbook interface.

<img src="assets/popovers.gif"/>

### Reference data elements in custom SQL statements (Beta)
You can now reference data elements and other custom SQL elements in SQL statements in Sigma using the sigma_element('Element Title') syntax.

For example:
```code
SELECT * FROM sigma_element('Fiscal Year Forecast')
WHERE "Revenue" > 100000
```

For more information, see [Write custom SQL](https://help.sigmacomputing.com/docs/write-custom-sql#reference-existing-sigma-workbook-elements)

### Transpose a table (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma now supports transposing a table from rows to columns, or columns to rows. 

Transposing data can be useful for data analysis, as it allows you to pivot or un-pivot your data according to your individual use case.

This can be especially useful for visualizations, as you may want to reshape your data to suit specific chart types –such as needing date values oriented in a single column for line charts.

For more information, see [Transpose a table](https://help.sigmacomputing.com/docs/transpose-a-table)

### Custom totals and subtotals for pivot tables and grouped tables (Beta)
In a pivot table or grouped table, you can change the way that totals and subtotals are calculated by choosing to change the aggregate used for a subtotal, or modifying the formula for a grand total or subtotal directly.

With this update, the default names of subtotals and totals update to `Column Name total` for subtotals or `Grand total` for totals. You can change the label of any subtotal or grand total.

<img src="assets/fff_04_2025_1.png" width="600"/>

For more information, see [Customize totals and subtotals (Beta)](https://help.sigmacomputing.com/docs/pivot-table-subtotals#customize-totals-and-subtotals-beta)

### Customize element styles in a workbook layout
You can now customize the styling of data elements such as tables, input tables, visualizations, and UI elements. 

- Add or remove padding, change the corner style, add a border, and change the text alignment for text elements.

- Set default styles in an organization theme, customize styles for an entire workbook in the workbook settings, or style individual elements.

For more information, see [Customize element background and styles](https://help.sigmacomputing.com/docs/customize-element-background-and-styles) and [Workbook settings overview](https://help.sigmacomputing.com/docs/workbook-settings-overview)

### Dependent materialization schedules (Beta)
You can now set up dependent materialization schedules in workbooks and data models. 

If you materialize both parent and child elements in a workbook or data model, you can set up materialization schedules that include child elements to run after the parent materialization schedule completes.

For more information, see: [Schedule materialization for a data model or workbook](https://help.sigmacomputing.com/docs/schedule-materialization-for-a-data-model-or-workbook#set-up-a-dependent-materialization-schedule)

<aside class="negative">
<strong>NOTE:</strong><br> This functionality is not available for dataset materializations.
</aside>

### Format Slack messages in exports
You can now add formatting to Slack messages, such as hyperlinks and text formatting which help the notification gain visibility in Slack.

For more information, see [Export to Slack](https://help.sigmacomputing.com/docs/export-to-slack)

### Export from Amazon Redshift connections to S3 buckets (Beta)
You can now export data from a Redshift connection to an Amazon S3 bucket.

For more information, see: [Export to cloud storage (Beta)](https://help.sigmacomputing.com/docs/export-to-cloud-storage)

### Change the grid density within containers (Beta)
You can now change the `density of the grid` within a container or tabbed container element. 

By default, a container's grid has `twelve` horizontal grid spaces, which expand and contract to fit the container size. 

Using the new `Column density` setting, you can opt to configure a lower or higher density, depending on your layout. 

Higher density gives you a finer grain of control over element positions in large containers.

For more information, see [Change the grid column density of a container (Beta).](https://help.sigmacomputing.com/docs/organize-workbook-layouts-with-containers#change-the-grid-column-density-of-a-container-beta) 

### Conditional formatting retained for XLSX files
When a table, input table, or pivot table with conditional formatting is exported as an XLSX-formatted (Excel) file, the conditional formatting is retained. Conditional formatting includes single color, color scale, and data bar formatting. This makes for reports that are more familiar to users and better-looking too.

### Detach a control from an element
You can now "detach" an element as a target of a control, you can now detach the control from the element from the element's filter menu.

This is handy when adding or remapping controls in the build stage of projects or when changes are required later. 

<img src="assets/fff_02_2025_9.png" width="800"/>

### Keyboard shortcut for cell selection
When you select a single cell in a table, you can add adjacent cells to the selection using the keyboard shortcut `⌘+⇧+arrow` (Mac) or `ctrl+⇧+arrow` (Windows).

### Redesigned user interface for workbooks and data models
The workbook and data model UI has been redesigned to simplify the creation experience in Sigma. The redesign includes the following changes:

- **Streamlined workbook header:** We’ve combined essential actions—such as saving, commenting, and sharing—into one spot. No more clicking around to find what you need.

<img src="assets/fff_02_2025_3.png" width="600"/>

- **New ways to create and edit elements:**
        - An Add new element bar where you can add elements at any time.
        - A simplified editor panel with tabs to access element properties, format, and actions.
        - For an overview of the new workbook UI, see Navigating a workbook (link).

- **Simpler custom views:** Previously known as `Explore`, these views are now easier to create and customize. You can save them, share them, or discard changes and return to the original Workbook anytime.

<img src="assets/fff_02_2025_1.gif" width="800"/>

- **Refined editor panel:** Properties, formatting options, and actions are now neatly organized into tabs, so you can make quick adjustments without feeling lost.

<img src="assets/fff_02_2025_4.png" width="600"/>

- **A new floating element bar:** Insert charts, tables, and other elements on the fly. It’s all about making sure inspiration doesn’t have to wait.

<img src="assets/fff_02_2025_5.png" width="500"/>

Sigma’s redesign sharpens the experience without sacrificing power. A cleaner UI, smarter workflows, and a more intuitive flow mean you can move faster, focus on what matters, and get to insights without distractions. Whether you’re deep into analysis or just getting started, Sigma stays flexible and responsive to your needs. This is just the start—we’ll keep pushing forward to make data exploration even more seamless, powerful, and accessible. 

The new UI has been rolled out for all **new** Sigma organizations, and will continue to be enabled in a multi-stage rollout for all existing organizations.

To learn more about the design ethos behind this change, see [Making Sigma Click: Introducing Our Refreshed Interface.](https://www.sigmacomputing.com/blog/making-sigma-click-introducing-our-refreshed-interface?_gl=1*616xf3*_gcl_au*MTAxNTE2MDYxOC4xNzMzNzY1NDI3*_ga*MjYwNTkzMzY0LjE2NzA0NDY3NTc.*_ga_PMMQG4DCHC*MTc0MTM2MTExMi4xMDYuMS4xNzQxMzYxMTY0LjguMC4w)

### Shared view limitations
Each workbook is now limited to `10 shared views.` If a workbook has version tags, the limit applies per tagged version. 

There is no limit on the number of personal saved views (previously known as personal bookmarks) per workbook.

Organizations with more than existing 10 saved views will be able to keep their existing views, but not be able to make more.

### Tabbed containers (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma already supported workbook pages that traditional spreadsheet users were familiar with.

Tabbed containers bring that functionality ***inside*** the workbook itself and are a fundamental design element used in data apps.

Add a tabbed container to your workbook pages when you want to offer multiple sets of content in the same section of your workbook canvas. 

A tabbed container has multiple tabs at the top of the container, which can either be visible or hidden for end users. 

By placing content on different tabs and configuring logic about which tab should display, you can allow users to experience different views in the same space without scrolling or navigating elsewhere.

For example:

<img src="assets/tabbed-containers.gif"/>

### Refined header on the Sigma home page
The home page header has been redesigned to match the recently updated workbook and data model UI. 

The change is ***aesthetic and does not impact any functionality.*** 

The new updated homepage header has rolled out for some organizations, and will continue to be incrementally rolled out over the coming weeks.

### Freeze columns in pivot tables
Pivot tables now support the ability to `freeze` or `unfreeze` the position of column:

<img src="assets/fff_02_2025_1.gif">

For more information, see [Format column location in a table.](https://help.sigmacomputing.com/docs/format-and-customize-a-table#format-column-location-in-a-table)

### Redesigned user interface <img src="assets/heart_icon.png" width="25"/>
The workbook and data model UI has been redesigned to simplify the creation experience in Sigma. The redesign includes the following changes:

- **Streamlined workbook header:** We’ve combined essential actions—such as saving, commenting, and sharing—into one spot. No more clicking around to find what you need.

<img src="assets/fff_02_2025_3.png" width="600"/>

- **New ways to create and edit elements:**
        - An Add new element bar where you can add elements at any time.
        - A simplified editor panel with tabs to access element properties, format, and actions.
        - For an overview of the new workbook UI, see Navigating a workbook (link).

- **Simpler custom views:** Previously known as `Explore`, these views are now easier to create and customize. You can save them, share them, or discard changes and return to the original Workbook anytime.

<img src="assets/fff_02_2025_1.gif" width="600"/>

- **Refined editor panel:** Properties, formatting options, and actions are now neatly organized into tabs, so you can make quick adjustments without feeling lost.

<img src="assets/fff_02_2025_4.png" width="600"/>

- **A new floating element bar:** Insert charts, tables, and other elements on the fly. It’s all about making sure inspiration doesn’t have to wait.

<img src="assets/fff_02_2025_5.png" width="500"/>

Sigma’s redesign sharpens the experience without sacrificing power. A cleaner UI, smarter workflows, and a more intuitive flow mean you can move faster, focus on what matters, and get to insights without distractions. Whether you’re deep into analysis or just getting started, Sigma stays flexible and responsive to your needs. This is just the start—we’ll keep pushing forward to make data exploration even more seamless, powerful, and accessible. 

The new UI has been rolled out for all **new** Sigma organizations, and will continue to be enabled in a multi-stage rollout for all existing organizations.

To learn more about the design ethos behind this change, see [Making Sigma Click: Introducing Our Refreshed Interface.](https://www.sigmacomputing.com/blog/making-sigma-click-introducing-our-refreshed-interface?_gl=1*616xf3*_gcl_au*MTAxNTE2MDYxOC4xNzMzNzY1NDI3*_ga*MjYwNTkzMzY0LjE2NzA0NDY3NTc.*_ga_PMMQG4DCHC*MTc0MTM2MTExMi4xMDYuMS4xNzQxMzYxMTY0LjguMC4w)

### Schedule exports as an email burst (GA) <img src="assets/heart_icon.png" width="25"/>
You can send a custom-filtered report to a dynamic list of recipients as a scheduled email burst. 

Send a workbook, workbook pages, and individual workbook elements as supported attachment types, such as PDF, Excel, or PNG files.

For more information, see [Export as email burst.](https://help.sigmacomputing.com/docs/export-as-email-burst)

There is also [QuickStart on email bursting.](https://quickstarts.sigmacomputing.com/guide/administration_export_bursting/index.html?index=..%2F..index#0)

### Set conditional exports to alert a specific number of times (Beta)
Limit the number of conditional exports by setting the frequency of an export to send only a given number of times per day, per week, or all time.

For example, a conditional export that sends an email when there is data in a table can be set to alert once per day.

### Add custom data labels to area, bar, line, scatter, and combo charts
It can sometimes be useful to display a more verbose data label on a chart to help the user better understand meaning.

By default, a chart can display data labels for the aggregate series of the chart, such as the Y-axis or X-axis values, depending on the chart and orientation. With this addition, some charts, and for region and point maps, you can specify a column to use to provide custom data labels for a chart.

Simply select one or more columns to add custom data labels to area, bar, line, scatter, and combo charts.

For more information see [Display chart data labels.](https://help.sigmacomputing.com/docs/display-chart-data-labels)

### Customize chart and formatting color scales (Beta)
You can now create custom color scales to use when formatting chart colors or conditional formatting for tables. Create a custom color scale for an organization theme, workbook theme, or for a specific data element.

<img src="assets/fff_01_2025_2.png" width="600"/>

For more details, see [Add a custom color scale (Beta).](https://help.sigmacomputing.com/docs/add-a-custom-color-scale)

### Export raw data formats from bookmarks
You can now export data from a Bookmark to a CSV, Excel, or JSON-formatted file.

### Layout grid is hidden by default <img src="assets/heart_icon.png" width="25"/>
When editing workbooks and data models, grid lines are visible when moving elements and are otherwise hidden.

<img src="assets/fff_01_2025_5.png" width="600"/>

To show grid lines by default, you can modify the layout settings for a specific workbook. 

For more information, see [Layout settings in Workbook settings overview.](https://help.sigmacomputing.com/docs/workbook-settings-overview#layout-settings)

### Show or hide all totals in a grouped table
You can now show or hide totals for all levels of a grouped table. 

Simply right-click a table cell to open the `context menu` and select S`how all totals` or `Hide all totals` to show or hide totals for all grouping levels of the table.

For more information, see [Show totals in a grouped table for more details.](https://help.sigmacomputing.com/docs/create-and-manage-tables#show-totals-in-a-grouped-table)

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

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
