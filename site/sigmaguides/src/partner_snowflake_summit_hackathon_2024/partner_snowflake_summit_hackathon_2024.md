author: pballai
id: partner_snowflake_summit_hackathon_2024
summary: partner_snowflake_summit_hackathon_2024
categories: partners
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 1024-05-24

# HACKATHON: DIGNITY FROM DATA
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart provides instructions on setting up a Sigma trial instance, using Snowflake Partner Connect and an introductory overview of how to use Sigma.

 ### Target Audience
Participants of Snowflake Summit's Hackathon 2024 who are attending the session "DIGNITY FROM DATA — USING SNOWFLAKE TO SOLVE CALIFORNIA'S HOMELESSNESS CRISIS, ACT101"

No SQL or technical data skills are required for using Sigma.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>A Snowflake free 30-day trial environment.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<button>[Snowflake Free Trial](https://trial.snowflake.com](https://trial.snowflake.com))</button>
  
![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## Provisioning Sigma
Duration: 20

### Provisioning Sigma via Snowflake Partner Connect

Log into Snowflake.

On the left hand side of the Snowflake UI, navigate to `Data Products`, then select `Partner Connect.` 

Click the icon for `Sigma.`

<img src="assets/hack1.png" width="800"/>

You will see a dialog box that will show the objects that will be created in your Snowflake account by Sigma. 

We will be using the `PC_SIGMA_WH` warehouse, `PC_SIGMA_DB` database, and the `PC_SIGMA_ROLE`, which are automatically created for you when you click `Connect:` 

<img src="assets/hack2.png" width="800"/>

Click `Connect` then `Activate`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> If you receive a warning that the email address you are using in Snowflake is not verified, you will need verify it first. This is in your Snowflake "My Profile" page.
</aside>

A message will appear that indicates "Your partner account has been created":

<img src="assets/hack4.png" width="800"/>

Click `Activate`.

Sigma will open in a new browser tab and prompt you to choose a name for the new Sigma Organization:

<img src="assets/hack5.png" width="800"/>

Once you have chosen a name, click `Continue.` 

Provide your `first name` and `last name` and `password` and click `Create`:

<img src="assets/hack6.png" width="800"/>

You can ignore the IP whitelisting screen; click `Get Started Using Sigma.` 

This will open Sigma in a new tab, and you are ready to start exploring.

<img src="assets/hack7.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Getting around in the UI
Duration: 5

The home page is organized logically to make it easy to get to things quickly. That said, it is also packed full of useful functionality too.

The main functions are numbered and described below:

<img src="assets/hack8.png" width="800"/>

**1 - Papercrane:** If you want to get back to the home page from anywhere in the portal, just click the Sigma `Papercrane` logo in the upper left corner.

Once you open a different page, you may notice the back arrow next to the Sigma logo. This allows you to go back one level:

<img src="assets/hack9.png" width="200"/>

**2 - Search:** You can click in the search bar at any point to search for content within Sigma.

**3 - Create New:** Use this anytime you want to create new content.
    <ul>
      <li><strong>Workbook:</strong> our spreadsheet UI for analyzing data</li>
      <li><strong>Data Model:</strong> enables the curation of data objects to then be shared with others.</li>
      <li><strong>Dataset:</strong> provides data modelling.</li>
      <li><strong>Write SQL:</strong> allows you to write SQL to run against the data warehouse.</li>
      <li><strong>Upload CSV:</strong> allows you to upload a csv to the warehouse in order to perform analysis.</li>
    </ul>
  
**4 - My Content:**
 <ul>
      <li><strong>Home:</strong> will bring back to home screen.</Li>
      <li><strong>My Documents</strong> is a personal folder for you to save content you have created.</Li>
      <li><strong>Workspaces</strong> are a way to organize and share content with specific members or teams within your organization. Items placed in workspaces can be accessed by anyone who has permission to that workspace.</Li>
      <li><strong>Templates</strong> allow users to standardize and share workbook structures for quick and consistent reuse.</Li>
      <li><strong>Shared with Me:</strong> will show a list of items others have shared directly with you.</Li>
      <li><strong>Recent:</strong> will bring up items you have accessed recently.</Li>
      <li><strong>Favorites:</strong> will show a list of items that you have favorite or quicker access.</Li>
      <li><strong>Trash:</strong> the typical recycle bin functionality.</Li>
      <li><strong>Connections</strong> (visible to Administrators and Creators by default): Connections list the data warehouses you have connections to. Clicking on one of them shows the tables in that warehouse you can access. There can be many connections for a single Sigma account, each configured with different levels of access to the warehouse, to be shared with members or teams.<br>
 </ul>

<aside class="negative">
<strong>NOTE:</strong><br> In this QuickStart you can only see and access the “Sigma Sample Database” and Snowflake PC_SIGMA_WH databases used for this QuickStart.
</aside>

**5 - Top viewed:** Empty at the start, as teams start to create and use content, the most popular will float to the top of this listing.

**6 - Administration:** Dedicated area for user management and other common configuration settings. Only shown to users in the Admin role.</li>

**7 - Help:** has lots of useful information for you to explore later.

**8 - User Profile:** 
On the top right corner is a box with your username initial. Clicking on it reveals your profile where you can make changes to your preferences and sign out.  Other UI options may or may not be visible to you depending on your permissions. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
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