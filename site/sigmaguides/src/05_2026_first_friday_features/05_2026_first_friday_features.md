author: pballai
id: 05_2026_first_friday_features
summary: 05_2026_first_friday_features
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-06-05

# (05-2026) May
<!-- The above name is what appears on the website and is searchable. 

 08 changes: 7 (Administration: 1, AI: 1, API: 1, Workbooks: 4)
 15 changes: 7 (Administration: 3, API: 1, Charts: 1, Bug Fixes: 1, Workbooks: 1)
 22 changes: 5 (Overview: 1, API: 1, Data Modeling: 1, Workbooks: 2)
 29 changes: 8 (Administration: 2, AI: 1, Bug Fixes: 3, New QSes: 1, Additional Info: 1)

Publish on June 5

<img src="assets/heart_icon.png" width="25"/>
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in May 2026.

It is a summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

### Sigma Public (GA) <img src="assets/heart_icon.png" width="25"/>
Free-to-use platform for creating, sharing, and exploring apps. Users can leverage sample data or upload datasets to build workflows in an embedded Sigma experience, plus search community-created apps for inspiration.

For more information, see [Sigma Public](https://help.sigmacomputing.com/docs/sigma-public)

**WHY IT MATTERS:**<br>
A free, hosted Sigma experience lowers the barrier for anyone exploring app development with Sigma, and creates a community surface where teams can discover and share working app patterns. It serves as both a discovery channel for new users and a showcase for what experienced builders are creating.

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


## Actions
Duration: 20

### Action Button Column Formatting
Format table columns that trigger action sequences to display as buttons, making interactivity visually explicit for end users.

For more information, see [Action Button Column Formatting](https://help.sigmacomputing.com/docs/format-and-customize-a-table#format-action-button-columns)

### Call API Action (GA) <img src="assets/heart_icon.png" width="25"/>
Call API Action is now generally available. Create actions that call API endpoints directly within Sigma workbooks to trigger workflows, enrich data, and integrate external systems. Supports diverse authentication methods, dynamic parameters, and typed request bodies.

**WHY IT MATTERS:**<br>
GA status means this is production-ready for enterprise use. Teams can reliably trigger external workflows, push data to downstream systems, and orchestrate multi-step processes without leaving Sigma — a meaningful capability for operational analytics at scale.

For more information, see [Call API Action](https://help.sigmacomputing.com/docs/create-actions-that-call-api-endpoints)

There is also a QuickStart, [API Actions - Getting Started](https://quickstarts.sigmacomputing.com/guide/developers_api_actions_getting_started/index.html?index=..%2F..index#0)

### Download Reports as PDF <img src="assets/heart_icon.png" width="25"/>
Create workbook actions that download entire reports in PDF format for distribution and offline access.

**WHY IT MATTERS:**<br>
PDF export via workbook actions closes a common gap for stakeholders who need polished, shareable reports outside the browser — useful for scheduled distributions, executive reviews, and compliance documentation.

For more information, see [Download Reports as PDF](https://help.sigmacomputing.com/docs/create-actions-that-send-notifications-and-export-data#download-a-report)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Administration
Duration: 20

### Audit Logs for Tenant Organizations in Other Regions (Beta) <img src="assets/heart_icon.png" width="25"/>
Parent organization administrators can now view audit logs across tenant organizations deployed in different cloud regions by accessing separate connections for each region.

**WHY IT MATTERS:**<br>
Multi-region tenant deployments are common in enterprise contexts, and centralized audit visibility is a frequent compliance requirement. This closes a gap for parent org admins managing tenants across regions.

For more information, see [Review audit logs from tenant organizations](https://help.sigmacomputing.com/docs/create-and-manage-tenant-organizations#review-audit-logs-from-tenant-organizations)

### Connect to ClickHouse (Beta)
Sigma now supports connections to [ClickHouse](https://clickhouse.com/)

For more information, see [Connect to ClickHouse (Beta)](https://help.sigmacomputing.com/docs/connect-to-clickhouse)

### Databricks Sample Connection
The `Sigma Sample Catalog,` a sample Databricks connection, is now available to all Sigma organizations upon request for testing and development purposes. This gives teams a ready-made environment to explore Sigma's Databricks integration without needing to configure their own connection.

For more information, see [Databricks Sample Connection](https://help.sigmacomputing.com/docs/sigmas-sample-connection)

### Multiple Identity Providers Support (GA) <img src="assets/heart_icon.png" width="25"/>
Organizations can now enable multiple identity providers (IdPs) for enhanced authentication flexibility.

**WHY IT MATTERS:**<br>
Large enterprises often need to authenticate different user populations through separate IdPs — for example, employees through one provider and contractors or partners through another. GA support removes a common blocker in enterprise rollouts and security reviews.

For more information, see [Using multiple identity providers for your Sigma organization](https://help.sigmacomputing.com/docs/using-multiple-identity-providers-for-your-sigma-organization)

### Sigma Templates Refinement
To ensure that the available Sigma templates shared to every organization are relevant and high quality, some Sigma-provided templates are now hidden from the list. The following templates owned by Sigma Templates remain available:

- Dynamic Profit and Loss Statement
- Fivetran Usage Template
- Google Analytics 4
- Loan Analysis
- Snowflake Cost Monitoring
- Snowflake Cost Per Query
- Snowflake Performance Monitoring
- Snowflake Security Monitoring
- Tasty Bytes Fleet Performance

Any workbooks created from the templates are unaffected.

### View materialization schedule owners in workbooks and data models
You can now see who owns a materialization for an element in a materialization schedule by opening the `Materialization schedules` modal.

By default, the owner is the user who added the element to the schedule, and the materialization job runs using that user's credentials for the connection. 

If another user updates the Grouping configuration, pauses, or unpauses the materialization in the schedule, ownership of the materialization transfers to that user. 

For more information, see [Materialization ownership](https://help.sigmacomputing.com/docs/materialization#materialization-ownership)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### Agent Skills for Sigma <img src="assets/heart_icon.png" width="25"/>
Install agent skills to enable AI assistants to authenticate to the Sigma REST API and create Sigma documents as code. Skills are available through the public skills repository.

**WHY IT MATTERS:**<br>
This opens Sigma to AI-driven automation workflows — agents can authenticate and build Sigma content programmatically, extending what's possible for teams embedding AI assistants into their development and analytics pipelines.

For more information, see [Agent Skills for Sigma](https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants)

### Support for Amazon Bedrock AI provider (Beta)
[Amazon Bedrock](https://aws.amazon.com/bedrock/) is now a supported AI provider, letting you use Anthropic foundation models with Sigma AI-powered features.

For more information, see [Add Amazon Bedrock as an AI provider](https://help.sigmacomputing.com/docs/manage-external-ai-integrations#add-amazon-bedrock-as-an-ai-provider)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

### Custom SQL Elements in List Sources Endpoints
The `List data model sources`, `List workbook sources`, and `List report sources` endpoints now include custom SQL elements in their responses. 

These elements are identified with a `custom-sql` type and contain a `customSqlId` field.

For more information, see [List data model sources](https://help.sigmacomputing.com/reference/listdatamodelsources), [List workbook sources](https://help.sigmacomputing.com/reference/getworkbooksources), and [List report sources](https://help.sigmacomputing.com/reference/listreportsources)

### New API Endpoint for Setting Organization Time Zone (GA)
The `Update organization settings` endpoint (`PATCH /v2/organizations/settings`) configures the time zone of an organization, including Sigma Tenants — useful for admins managing multi-region deployments programmatically.

For more information, see [Update organization settings](https://help.sigmacomputing.com/reference-link/updateorganizationsettings)

### New API Endpoints for Managing Credentials and Connectors
Ten new endpoints provide programmatic management of API credentials and connectors:

- Five endpoints for API credentials (list, retrieve, create, update, delete) via [v2/api-credentials](https://help.sigmacomputing.com/reference/listapicredentials)
- Five endpoints for API connectors (list, retrieve, create, update, delete) via [v2/api-connectors](https://help.sigmacomputing.com/reference/listapiconnectors)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** The editor now displays an `Invalid image URL` alert when background image URLs are malformed.

**2:** For organizations with greater than 15,000 user attributes, admins could not specify a user attribute to dynamically set a role or warehouse for a Snowflake connection.

**3:** Users in tenant organizations were unable to duplicate or tag versions of deployed documents.

**4:** When a deployed workbook was version tagged, the `Get deployed workbook in a tenant organization` API endpoint did not successfully return the workbookId.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20

### Data Labels for Geography Maps
Users can now configure custom data labels on geography maps through the `Properties` tab's `Label` option.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data Modeling
Duration: 20

### dbt Core integration (Beta) <img src="assets/heart_icon.png" width="25"/>
Add metadata from dbt Core run output to Sigma for visualizing freshness data, monitoring data quality, and displaying table and column descriptions configured in dbt directly within Sigma. Upload dbt artifacts using the dedicated endpoint.

For more information, see [Configure dbt Core integration](https://help.sigmacomputing.com/docs/manage-dbt-integration#configure-dbt-core-integration-beta)

**WHY IT MATTERS:**<br>
dbt Core is the de facto transformation tool in modern data stacks. Bringing dbt freshness, data quality, and table/column descriptions directly into Sigma closes the gap between the transformation layer and the BI layer — analysts no longer need to context-switch to dbt docs to understand what they're looking at.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in May
Duration: 20

### Fundamentals 12: Build App-Style Layouts in Sigma
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/Fundamentals_12_repeater_single_row_containers/index.html?index=..%2F..index#0) shows how to turn a structured table into a card-based catalog with a click-through detail view, using Sigma's Repeater and Single Row containers.

**WHY IT MATTERS:**<br>
This is the master/detail pattern that powers product catalogs, employee directories, project boards, and CRM record pages — designed once and scaled automatically across the dataset. The same building blocks work for any browsable record set, with no front-end code, no separate detail dataset, and no state management.

### Sigma Skills for AI Assistants <img src="assets/heart_icon.png" width="25"/>
[This QuickStart](https://quickstarts.sigmacomputing.com/guide/developers_sigma_skill/index.html?index=..%2F..index#0) shows how to install and use Sigma's open-source agent skills in Claude Code so an AI assistant can authenticate to Sigma, call the REST API, and build data models through natural-language prompts.

It walks through how to:
* Install the open-source Sigma agent skills as a Claude Code plugin (with notes for Cursor, OpenAI Codex, and Snowflake Cortex Code)
* Authenticate to Sigma's REST API through the agent — credentials stay in your shell environment, not in prompts
* Build and iterate on Sigma data models programmatically, with each update saved as a versioned JSON spec
* Customize the skills locally for quick iteration, or fork the repo on GitHub to make changes durable

**WHY IT MATTERS:**<br>
This is the "API + agent" pattern in practice — open-source skills give any supported AI assistant the context to handle authentication, call the right endpoints, and follow Sigma's conventions. Developers and technical analysts manage workbooks, members, and data models through plain-language prompts while permissions and audit trails stay with Sigma. Each data model edit becomes a versioned JSON artifact your team can diff, review, and redeploy.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Hierarchy column actions and control improvements (Beta)
Hierarchies now support actions for interactivity, selection of up to 1,000 values from search results, and an `Expand all levels` option that reveals every hierarchy level at once.

For more information, see [Hierarchies](https://help.sigmacomputing.com/docs/hierarchies)

### Terminology Change - Your Documents
We have revised the UI to consistently reference `Your documents` instead of `Documents` and `My documents` to make ownership more clear.

### Translate Sigma UI text in workbooks (GA)
Localize the Sigma UI in a workbook by adding the `:lng=<locale>` query string parameter to its URL — supports global teams that need Sigma in their working language.

For more information, see [Manage workbook localization](https://help.sigmacomputing.com/docs/manage-workbook-localization)

### True Transparency for Element Backgrounds <img src="assets/heart_icon.png" width="25"/>
Setting an element's background color to `None` now renders as genuine transparency, allowing page and container background images to show through rather than defaulting to the background color.

For example, the image on the left is using a white background while the other is transparent:

<img src="assets/fff_01.png" width="600"/>

**WHY IT MATTERS:**<br>
Element backgrounds set to `None` finally render as true transparency, unlocking layered designs where page or container background imagery shows through. This matters for branded dashboards, embedded experiences, and any presentation-quality output where visual polish is part of the deliverable.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Additional Information
Duration: 20

### New training courses on input tables and app best practices
Two new virtual training courses are now available to all Sigma users.

**Intro to Input Tables:**<br>
A hands-on lab designed for business and technical users who want to confidently explore data and create content in Sigma. 

[Register for this event](https://community.sigmacomputing.com/t/intro-to-input-tables/6921) to gain core skills in using input tables, forms, modals, and actions to build an interactive app.

**AI Apps Best Practices:**<br>
A webinar designed for analysts and business users with a Build license who are ready to move beyond dashboards. 

[Register for this event](https://community.sigmacomputing.com/t/ai-apps-best-practices/6918) to learn a framework to design applications that scale and adapt.

Browse and register for all courses on the [Sigma events calendar](https://community.sigmacomputing.com/c/events/20)


**Additional Resource Links**<br>
[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
