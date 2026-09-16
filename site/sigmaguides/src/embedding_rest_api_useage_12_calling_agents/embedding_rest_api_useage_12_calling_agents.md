author: pballai
id: embedding_rest_api_useage_12_calling_agents
summary: embedding_rest_api_useage_12_calling_agents
categories: embedding
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-12-31

# REST API Usage 12: Calling Sigma Agents

## Overview
Duration: 5

Until now, a Sigma agent could only be reached from inside a Sigma workbook. This QuickStart shows how to call an agent over the REST API instead, so you can embed it in your own chat interface, trigger it from a scheduled job, or fold its output into another application entirely.

We will call a Sigma agent directly from a REST endpoint — get back a single JSON response, or a live stream of its reasoning and tool calls — without routing through a chat element or a workbook action.

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart builds on the setup from "REST API Usage 01: Getting Started". If you haven't yet cloned the repo, installed dependencies, and configured your Sigma workspace, please follow that QuickStart first.
</aside>

[REST API Usage 01: Getting Started](https://quickstarts.sigmacomputing.com/guide/embedding_rest_api_usage_01_getting%20started_started/index.html?index=..%2F..index#0)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown here. This is because Sigma continuously adds and enhances functionality. Rest assured—Sigma’s intuitive interface ensures that any differences won’t prevent you from completing the QuickStart successfully.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn’t work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Developers who want to call a Sigma agent programmatically, outside of a workbook's chat element or action sequence.

### Prerequisites

<ul>
  <li>Any modern browser will work.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps are shown, as the basics are assumed understood.</li>
  <li>Microsoft VSCode or other suitable development tool.</li>
  <li>REST API Usage 01: Getting Started completed, including a configured Sigma workspace and client credentials.</li>
  <li>A Sigma agent already configured on a workbook you have access to.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button><br>

<button>[Download Visual Studio Code](https://code.visualstudio.com/download)</button>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry a "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Configure an Agent for API Access
Duration: 5

A Sigma agent doesn't need any special setup to be called over the API — the same agent you'd normally reach through a chat element works as-is. This section confirms you have one to call and explains what governs its behavior when the call comes from outside the workbook.

### Confirm or create an agent

Rather than reusing the shared `Embed_API_QuickStart` workbook from earlier in this series, create a dedicated workbook for this QuickStart so the agent's setup doesn't get tangled up with other REST API Usage examples.

In Sigma, click `Create New` > `Workbook`.

Click `Save as` and name it:
```copy-code
Agent API QuickStart
```

Add a table to the workbook as a data source — any table from a connection you have access to works.

In the right panel, click the `Agents` tab.

<!-- <img src="assets/api_agents_01.png" width="800"/> -->

Click `+` to create a new agent, give it a name, point it at the table you just added as a data source, and add a short instruction such as:

```copy-code
You are a helpful data assistant. Answer questions using the data sources configured for this agent.
```

Click `Save`.

<aside class="positive">
<strong>NOTE:</strong><br> A chat element isn't required for this QuickStart. The agent lives at the workbook level independent of any chat element — we're calling it directly, so no chat element needs to be on the page.
</aside>

### How permissions carry over

An API call to an agent runs as the calling user, not as a service account. That means:

- **Row-level security** applies exactly as it would in the Sigma UI — a call made on behalf of a restricted user only sees what that user is allowed to see.
- **Instructions, data sources, and tools** are whatever you configured on the agent in the workbook. There's no separate API-only configuration to maintain.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Your governance model doesn't fork in two directions. Whether someone reaches this agent through a chat element or your own application's API call, the same permissions and configuration apply — one place to manage both.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Start the Server / List Available Agents
Duration: 5

Start the Express server in terminal from the `embedding_qs_series_2_api_use_cases` folder:
```copy-code
npm start
```

The server is ready when it displays: `Server listening at http://localhost:3000`.

Browse to the landing page:
```copy-code
http://localhost:3000
```

Select the `Calling Sigma Agents` page and click `Go`.

<!-- <img src="assets/api_agents_02.png" width="800"/> -->

<aside class="positive">
<strong>IMPORTANT:</strong><br> Implementation details are covered in the README and are not repeated in this QuickStart. A button is provided on the webpage for quick access.
</aside>

### Find an agent to call

Before calling an agent, you need its `workbookId` and `agentId`. Rather than hunting for these in the Sigma UI, the sample page calls two endpoints to look them up:

- `GET /v2/workbookAgents` returns every agent you can access across the org
- `GET /v2/workbooks/{workbookId}/agents` returns just the agents on a specific workbook

The page lists the results in a dropdown. Select the agent you configured in the previous section.

<!-- <img src="assets/api_agents_03.png" width="800"/> -->

<aside class="positive">
<strong>NOTE:</strong><br> Listing agents this way is also how you'd discover agents programmatically in a real integration — for example, to populate a picker in your own application rather than hardcoding an `agentId`.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
