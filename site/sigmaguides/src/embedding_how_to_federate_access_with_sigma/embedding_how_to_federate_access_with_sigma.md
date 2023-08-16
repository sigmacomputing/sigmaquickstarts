author: pballai
id: embedding_how_to_federate_access_with_sigma
summary: embedding_how_to_federate_access_with_sigma
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: {lasted updated using the date format yyyy-mm-dd}

# How to: Federate Access with Sigma Embedding

## Overview 
Duration: 5 

Sigma's embedded solution is very flexible and can support a wide variety of use cases. For example, 

1: Provide all of your customers with a common dashboard
2: Only some customers a more specialized dashboard
3: Support users at differing levels of functionality (ie: view only versus edit)
4: Combinations of all three or other scenarios

Sigma uses federated user access to support all these use cases and more. 

Federated user access refers to a mechanism that allows users to use a single set of credentials (such as username and password or other authentication methods) to access multiple software systems without requiring separate accounts for each system. 

This is typically achieved through single sign-on (SSO) technologies and trust relationships established between the participating systems.

With Sigma embedding, the user logs onto your application (parent application), is authenticated (and optionally assigned a role), and that information is passed to Sigma when an embed in part of your application. 

It is important to understand that Sigma provides it's own role-based-access-control (RBAC) system and some customers use that exclusively. However, many customers have an existing identity management provider (IDP) and they can leverage that with Sigma instead. Sigma even supports user and group automation using a system for cross-domain identity management (SCIM). 

If you are interested in learning more about [IDP-based Sigma implementations, click here.](https://help.sigmacomputing.com/hc/en-us/articles/1500002044821-Managing-Users-and-Teams-with-SCIM)

In this QuickStart, we will use the local node.js application framework we created in [QuickStart: Embedding 3: Application Embedding](https://quickstarts.sigmacomputing.com/guide/embedding_3_application_embedding/index.html?index=..%2F..index#0), and Sigma for team and workspace assignments, at runtime. 

 ### Target Audience
Anyone who is trying to create QS content for Sigma. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>Completion of the QuickStart: Embedding 3: Application Embedding</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
How to apply Sigma approved Markdown for your QS.

## Use Case 1: Common Dashboard
Duration: 20

In this use case, we want to embed a Sigma dashboard inside our parent application, and make it accessible to all customers after they are authenticated.

Log in to Sigma and navigate to `Administration` > `Teams` and click `Create Team`:

<img src="assets/fa1.png" width="800"/>

Name the team `all_clients_team`, set it to `Private`, Check the box to `Create a Workspace` and click `Create`:

<img src="assets/fa2.png" width="800"/>

A new `Workspace` is created for you automatically with the name `all_clients_team`.  

Workspaces are shown by returning to the `Home` page (click the white crane icon in the upper left corner) and clicking `Workspaces`:

<img src="assets/fa3.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Use naming conventions for your teams and workspaces that make their purpose clear. This will help ensure others in your organization can easily understand the content contained in the workspaces and who’ll have access. Avoid using spaces in team names.
</aside>

Let's change the name of the new Workspace to something more descriptive. We will use `Curated Master Dashboards`:

<img src="assets/fa4.png" width="800"/>

Next, `Move` the Workbook to the `Curated Master Dashboards` Workspace:

<img src="assets/fa14.png" width="800"/>
<br>
<img src="assets/fa15.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> You could have also just saved the new Workbook directly to the "Curated Master Dashboard" Workspace when you first saved it but we wanted to demonstrate the other workflow.
</aside>

Now, our `Common Dashboard` will adopt the permissions if the `Curated Master Dashboard` Workspace.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Creating a team with all of your embedded customers means that you don’t have to give explicit access to the “Curated Dashboard” Workspace every time, which is less of a headache for onboarding. It’s like a catch all.
</aside>

Once you’ve done this, server.js (our server-side API from QuickStart Embedding 3: Application Embedding) needs to be updated to pass the new team value:

<img src="assets/fa7.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> We reference server.js only as an example of how the code looks, based on our example code in previous QuickStarts. It is assumed that your code may be different, but the value passed as a parameter will still need to be the same.
</aside>

### Content to Embed
In order to test this, we need some content to embed. We will use Sigma's default content, provided via a template. 

<aside class="negative">
<strong>NOTE:</strong><br> We are not showing every step in the embed process now, as it is assumed you have completed the QuickStart Embedding 3: Application Embedding.
</aside>

Navigate to the `Templates` page.

Click to select the `Plugs Electronics Sales Performance` template:

<img src="assets/di1.png" width="800"/>

`Dismiss` the dialogue asking if you want to use your own data.

Click the `Save As` button and name the Workbook `Common Dashboard`.

`Share` the Workbook with the `all-clients-team` we created earlier.

Share with the `all_clients_team` > `view` and check off the box for sending email:

<img src="assets/fa8.png" width="800"/>
<br>
<img src="assets/fa9.png" width="800"/>

Open the `Embedding` controls:

<img src="assets/fa10.png" width="800"/>

Select `Dashboard` for just the entire workbook and select `Copy`:

<img src="assets/di5.png" width="800"/>

In the node project folder, open `server.js` and replace the value for `EMBED PATH` with this new value.

<aside class="negative">
<strong>NOTE:</strong><br> If you recently completed the QuickStarts for embedding, you probably already have valid APIs and Embed Secrets. If you don't, you will need to generate them from "Administration > "APIs & Embed Secrets".
</aside>

<img src="assets/di7.png" width="800"/>

Let's pass a new embed user into Sigma to demonstrate this works.

Edit server.js to change the embed user and userID to use `common_client@sigmacomputing.com`. 

Set the two values as shown and save the changes:

<img src="assets/fa13.png" width="800"/>

Once server.js is setup, make sure that node's express server is running:

<img src="assets/di6.png" width="800"/>

Browse to localhost:3000 to verify that we have a working application with our Sigma table on it.

<img src="assets/fa11.png" width="800"/>

Notice that if you click on any of the visualization controls (the 3-dot menus, upper right corner of each viz), you notice that there is limited functionality. This is because we set the `all_clients_team` to `view` access only.

In Sigma, navigate back to `Administration` > `Teams` and click into the `all_clients_team`. 

The embed user we just used (via the server.js api) was added to the team automatically. 

<img src="assets/fa12.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> With Sigma embedded, users do not need to be maintained in two different places. Sigma adopts the security from your application at runtime via the server-side API.
</aside>

Now, any new embed user who is assigned to the  `all_clients_team`, has access to the `Common Dashboard` that is made available by embedding it in the parent application.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Help Center Home](https://help.sigmacomputing.com/hc/en-us)<br>
[Sigma Community](https://community.sigmacomputing.com/)<br>
[Sigma Blog](https://www.sigmacomputing.com/blog/)<br>
<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->