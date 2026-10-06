author: pballai
id: aiapps_claude_desktop_view_workbooks
summary: aiapps_claude_desktop_view_workbooks
categories: aiapps
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-12-01

# View Live Sigma Workbooks Inside Claude Desktop

## Overview
Duration: 5

TODO: opening (3-beat: broad Sigma claim, extend to this capability, "This QuickStart demonstrates... we will build"). Write after the design is confirmed.

Along the way you'll learn how to:
- TODO: run a local MCP server that Claude Desktop can call
- TODO: find a Sigma workbook by name using the REST API
- TODO: open the selected workbook as a live view with a signed JWT
- TODO: keep the two Sigma credential sets separate

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
TODO: developers and admins comfortable with Node.js, an `.env` file, and Claude Desktop configuration.

### Prerequisites

<ul>
  <li>Access to your Sigma environment, with permission to create Embed and API client credentials.</li>
  <li>Claude Desktop.</li>
  <li>Node.js and Git installed locally.</li>
  <li>TODO: confirm the rest once the design is verified.</li>
</ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## How it works
Duration: 5

TODO: architecture. Claude Desktop, the local MCP server and its tools, the REST API search, and the signed JWT view. Include the two credential pairs and why they are kept separate.

<!-- <img src="assets/cde_01.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Get the code
Duration: 5

TODO: sparse checkout from `quickstarts-public`, `npm install`, same pattern as the other embedding QuickStarts.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Configure your credentials
Duration: 10

TODO: create Embed Client Credentials and API Client Credentials in Sigma, then set the `.env` values.

<!-- <img src="assets/cde_02.png" width="800"/> -->
<!-- <img src="assets/cde_03.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connect Claude Desktop
Duration: 10

TODO: register the local MCP server in Claude Desktop and confirm it is connected. Verify the current registration steps before writing.

<!-- <img src="assets/cde_04.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Find and open a workbook
Duration: 10

TODO: ask Claude for a workbook by name, review the matches, and open the selected workbook as a live view.

<!-- <img src="assets/cde_05.png" width="800"/> -->
<!-- <img src="assets/cde_06.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

TODO: write last. What was built, why it matters, and the reusable pattern.

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

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
