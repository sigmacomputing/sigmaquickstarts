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
June 12, 2026 changes: pending
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

### Assistant Usage Dashboard (Deprecated)
The Sigma Assistant usage dashboard is deprecated and will be unavailable after September 15, 2026. Configure the AI usage dashboard instead.

For more information, see [Configure the AI usage dashboard](https://help.sigmacomputing.com/docs/configure-a-usage-dashboard-for-assistant)

### Cc/Bcc Allowlist When Run Queries as Recipient is Enabled (GA)
For security reasons, if `Run queries as recipient` is enabled, either as an organization requirement or for specific exports, admins must add recipients to an allowlist in export settings before they can be listed as `Cc` or `Bcc` recipients.

For more information, see [Manage export frequency and authentication settings](https://help.sigmacomputing.com/docs/restrict-export-recipients)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

### Create AI Columns (Beta) <img src="assets/heart_icon.png" width="25"/>
You can now create AI columns to enrich your data using natural language prompts. AI columns let you construct dynamic prompts that reference specific table columns, and are useful for tasks like enriching, summarizing, and classifying data.

**WHY IT MATTERS:**<br>
AI columns turn enrichment, classification, and summarization into a one-step workflow inside Sigma — no separate pipeline, no Python, no waiting on data engineering. Analysts can attach language model intelligence directly to existing tables, which is the fastest path from raw operational data to ready-to-analyze attributes.

For more information, see [Create AI columns (Beta)](https://help.sigmacomputing.com/docs/create-ai-columns)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** Collapsed and expanded row and column groupings now export as they appear in the workbook. Previously, all rows and columns exported fully expanded.

**2:** Tagging a workbook version that contained custom SQL failed with the error `Cannot read properties of null (reading 'connectionId')`.

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



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Security
Duration: 20

### Configure Mutual Transport Layer Security (mTLS) for API Connectors (GA) <img src="assets/heart_icon.png" width="25"/>
You can add client and server certificates to Sigma, allowing you to configure mutual transport layer security (mTLS) for API connectors.

**WHY IT MATTERS:**<br>
mTLS strengthens the trust chain between Sigma and customer-managed APIs, satisfying enterprise security review and compliance requirements where one-way TLS is not enough. This is a foundational capability for regulated industries and customers running Sigma against private, sensitive API endpoints.

For more information, see [Configure mutual transport layer security for API connectors](https://help.sigmacomputing.com/docs/configure-mutual-transport-layer-security-for-api-connectors-in-sigma)

### Manually Specify an OAuth Provider for Organization-Level OAuth (GA)
You can now manually specify an OAuth provider when configuring OAuth as the single sign-on (SSO) method for authenticating to Sigma. This enables the use of custom domain names.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Custom Page Sidebar (GA) <img src="assets/heart_icon.png" width="25"/>
You can enable custom page sidebars to appear on one or more workbook pages. Page sidebars allow you to repeat contents like filters or navigation options across multiple pages.

**WHY IT MATTERS:**<br>
Custom page sidebars give builders a clean way to keep filters, navigation, or contextual content visible across multiple pages without rebuilding it each time. The result is faster workbook authoring and a more consistent reading experience for end users.

<video src="assets/sidebar.mp4"></video>

For more information, see [Add custom page panels to a workbook](https://help.sigmacomputing.com/docs/add-custom-page-panels-to-a-workbook)

### Hierarchy Columns (GA) <img src="assets/heart_icon.png" width="25"/>
Hierarchy columns are now generally available.

**WHY IT MATTERS:**<br>
Drill paths and parent/child rollups are core to operational reporting — finance hierarchies, org charts, product taxonomies. Bringing hierarchy columns to GA gives every builder a stable, supported way to model these structures directly in Sigma instead of pre-flattening them upstream.

For more information, see [Work with hierarchies](https://help.sigmacomputing.com/docs/hierarchies) and [RaggedHierarchy](https://help.sigmacomputing.com/docs/raggedhierarchy)

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
