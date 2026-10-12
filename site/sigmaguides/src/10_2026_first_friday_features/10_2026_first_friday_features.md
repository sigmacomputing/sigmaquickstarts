author: pballai
id: 10_2026_first_friday_features
summary: Summarizes new features, updates, and bug fixes released across Sigma in October 2026, with links to the relevant documentation for each.
categories: firstfridayfeatures
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2026-10-12

# (10-2026) October
<!-- The above name is what appears on the website and is searchable. 

October 9, 2026 changes: done
October 16, 2026 changes:
October 23, 2026 changes:
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


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

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


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in October
Duration: 20

<!-- Add new QuickStarts published in October 2026 -->


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Split workbook download by control values (Beta)
Workbook downloads can now be split by the values of a list control. Sigma returns a zipped file containing a separate download, with data customized for each selected value.

<!-- <img src="assets/fff_10_2026_04.png" width="700"/> -->

For more information, see [Download workbook data](https://help.sigmacomputing.com/docs/download-workbook-data)

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
