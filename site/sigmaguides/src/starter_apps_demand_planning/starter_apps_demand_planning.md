author: pballai
id: starter_apps_demand_planning
summary: Explore Sigma's Demand Planning Starter App — a ready-to-use operations app for forecasting product demand, building planning scenarios, and comparing projections against historical actuals.
categories: starterapps
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2026-07-20

# Demand Planning Starter App

## Overview
Duration: 5

Sigma's **Starter Apps** are ready-to-use applications built on Sigma's native features and connected to sample data. Each one ships fully functional — you can explore it immediately, learn how it's built by switching to edit mode, and adapt it to your own data and workflows without starting from scratch.

The **Demand Planning** app gives supply chain and operations teams a structured way to build demand forecasts by product and time period, compare multiple planning scenarios side by side, and review projections against historical actuals — all against live data.

This QuickStart walks through how the app works as a user, how it's designed under the hood, and how to connect it to your own data.

### Target Audience
Supply chain, operations, and planning teams evaluating or adopting Sigma for demand and inventory planning workflows. Solutions Engineers and technical stakeholders exploring the app as a reference design.

### Prerequisites

<ul>
  <li>Access to a Sigma environment.</li>
  <li>The Demand Planning Starter App available in your org — find it under <code>Templates</code> > <code>Starter Apps</code>.</li>
  <li><strong>Write access enabled on a connection</strong> — required for input tables to store planning data. See <a href="https://help.sigmacomputing.com/docs/set-up-write-access">Set up write access</a></li>
  <li>Some familiarity with Sigma workbooks is helpful but not required.</li>
</ul>

<aside class="positive">
<strong>NOTE:</strong><br> If you don't see Starter Apps in your Templates section, contact your Sigma administrator to confirm availability in your org.
</aside>

### What You'll Learn
- How the Demand Planning app works from scenario creation through analysis
- The key design patterns behind the app and why they're built that way
- How to connect the app to your own data

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Exploring the App
Duration: 10

### Open and Save the Template

Navigate to `Templates` in the left sidebar. The Demand Planning app appears in the `Made by Sigma` collection:

<img src="assets/dp_02.png" width="800"/>

Click the template card to open a preview. Before clicking `Use template`, confirm that write access is enabled on your connection — required for input tables to store planning data. 

For more information, see [Set up write access](https://help.sigmacomputing.com/docs/set-up-write-access)

Once that is in place, click `Use template`. Sigma creates a personal copy in your workspace that you can explore, edit, and connect to your own data without affecting the original template:

<img src="assets/dp_01.png" width="800"/>

Click the `Save as` buttonm use the default name or a new one:
```copy-code
Demand Planning
```

<aside class="positive">
<strong>NOTE:</strong><br> The original template remains unchanged in the gallery — your saved copy is the working version.
</aside>

### README Page

<!-- [TODO: confirm whether this app has a README page and describe it] -->

<!-- <img src="assets/dp_03.png" width="800"/> -->

### [TODO: App Pages]

<!-- [TODO: walk through each page of the app once source code is reviewed] -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## The Planning Workflow
Duration: 10

<!-- [TODO: document the core workflow — scenario creation, data entry, review/approval] -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Under the Hood
Duration: 10

<!-- [TODO: document the data model, key patterns (scaffold, cross-join, union, etc.) based on source code review] -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connect Your Own Data
Duration: 5

<!-- [TODO: document the source table requirements and swap procedure once source code is reviewed] -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What We've Covered
Duration: 5

<!-- [TODO: write after all sections are complete] -->

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
