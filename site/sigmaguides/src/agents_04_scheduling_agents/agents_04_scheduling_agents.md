author: pballai
id: agents_04_scheduling_agents
summary: agents_04_scheduling_agents
categories: agents
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-12-31

# Scheduling Unattended Agent Runs

## Overview
Duration: 5

This QuickStart demonstrates how to run a Sigma agent on a schedule, with nobody watching, and store what it produces as a new row in a table.

Every agent so far in this series has answered inside a conversation, with a person there to approve anything it writes. A scheduled run has no conversation and no one to click approve — so this QuickStart uses a different shape: a separate agent that only produces text, and an action sequence that calls it on a timer and writes the result down automatically.

Along the way you'll learn how to:
- Build a text-only agent with no UI-dependent tools, suited to running unattended
- Configure a page-level action sequence that calls an agent and captures its response
- Insert that response into a table as part of the same sequence, with no approval step
- Confirm a scheduled trigger actually fired, not just that a manual run worked

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> An agent that only runs when someone opens a chat is still waiting on a person. One that runs on a schedule and writes its own result down is doing the checking so a person doesn't have to remember to ask.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Sigma workbook authors and admins building agents that need to run without anyone present, not just when someone opens a chat. For the writeback mechanic this QuickStart adapts, see [Agent-Driven Actions & Writeback](https://quickstarts.sigmacomputing.com/guide/agents_02_actions_writeback/index.html) — but this QuickStart includes everything you need to follow along on its own.

### Prerequisites

<ul>
  <li>Any modern browser is acceptable.</li>
  <li>Access to your Sigma environment with permission to create and manage agents, create input tables, and configure scheduled action sequences.</li>
  <li>Write access enabled on the connection backing your workbook — the scheduled sequence in this QuickStart inserts a row into a table.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown, as the basics are assumed to be understood.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry a "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

![Footer](assets/sigma_footer.png)

## Create the Workbook and Runner Agent
Duration: 15

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Build the Scheduled Action Sequence
Duration: 15

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Test the Schedule
Duration: 15

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we ...

- ...
- ...

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
