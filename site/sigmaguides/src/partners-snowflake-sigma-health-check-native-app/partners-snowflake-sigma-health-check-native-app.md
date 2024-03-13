author: pballai
id: partners-snowflake-sigma-health-check-native-app
summary: partners-snowflake-sigma-health-check-native-app
categories: partners
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-03-14

# Getting Started with the Sigma Health Check Native App for Snowflake
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

The Sigma Health Check Native App is designed to provide insights into the overall health and performance of your Snowflake environment. This native app includes insights into architecture, user and role grants, as well as warehouse performance and sizing recommendation. 

This Quickstart is designed to provide guidance in the set up of the Sigma Health Check Native App for Snowflake. 

 ### Target Audience
Sigma administrators or other users who are interested in monitoring the state of their Snowflake connection with Sigma and how the resources it leverages in Snowflake.

### Prerequisites

The Health Check Native App is currently only available to existing Sigma customers. 

If your Sigma instance is hosted at GCP, this functionality is not available. This is due to the Snowflake Native App framework not being currently available on the Google Cloud Platform. 

**Basic Requirements:**
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>


To access this native app, **please contact your Sigma account team.** 

Your account team will process your request, and reach out when the application has been granted to your Snowflake instance. 

Once you have requested the Native Application, you will need to ensure your Snowflake account has the appropriate permissions set up to work with native application listings. 

You can find instructions for preparing your Snowflake account here: [Become a Consumer of Snowflake Listings.](https://other-docs.snowflake.com/en/collaboration/consumer-becoming).

Once your Snowflake account is ready to consume listings and the Native App has been granted to your Snowflake instance, you are ready to begin installing the application with this Quickstart. 

### What You’ll Learn
How to leverage the Sigma Health Check Native App, inside your Sigma environment.

## Accepting the App in Snowflake
Duration: 20

To get started we have provided a video that demonstrates this process: 

https://www.loom.com/share/1a42a055358b44f08dbbd0236267c4aa?sid=b9ead061-f623-4409-89f7-150b7483671a

Sign in to your Snowflake instance by entering your Username, Password, and clicking “Sign In” 
<acceptingtheappinsnowflake1.png>


Ensure you are in the ACCOUNTADMIN role by clicking your username in the bottom left, scrolling up to roles, and selecting ACCOUNTADMIN. 

<acceptingtheappinsnowflake2.png>


In the left-hand navigation menu, find Data Products, then Apps. You should see Sigma Health Check under “Recently Shared with You” 

<acceptingtheappinSnowflake3.png>


Click “Get” next to Sigma Health Check. 

<acceptingtheappinSnowflake4.png>


Select “Options” on the pop up window.

<acceptingtheappinSnowflake5.png>


Ensure the application name is “Sigma_Health_Check”. Then assign a warehouse to use for installation, and click “Get”.

<acceptingtheappinSnowflake6.png>


When the installation is complete, you will see the Sigma Health Check under “Installed Apps”.

<acceptingtheappinSnowflake7.png> 


Click on the application name. This will open a window that says “Welcome to the Sigma Health Check Application”. 

<acceptingtheappinSnowflake8.png>


On this page you will notice several blocks of code. In the first block titled “Grants for the application”, hover over the top right corner until you see the icon for “Open in Worksheets”. Click this icon.

<acceptingtheappinSnowflake9.png>
  
Snowflake will open a new tab in your browser with the first block of commands already loaded. Run each command on this worksheet in the order they appear. 

<acceptingtheappinSnowflake10.png> 


Return to the Sigma Health Check tab, and hover over the upper righthand side of the second block labeled “Create Application Warehouse”. Once again, click “Open in Worksheets”.

<acceptingtheappinSnowflake11.png>


Once again, Snowflake will open a worksheet with the commands pre-loaded. Run each command in the order they appear, starting with CALL ASSETS.WAREHOUSE_SETUP();

<acceptingtheappinSnowflake12.png>


 Return to the Sigma Health Check tab and repeat this process for the third block of code, hovering over the top right corner to select “Open in worksheet”. 

<acceptingtheappinSnowflake13.png>


 The warehouse created by the application for use in analysis and set up is called SIGMA_HEALTHCHECK_MATERIALIZATION_WH. Upon creation, its size is a small. Sigma recommends a larger warehouse for the initial set up of the native application, particularly if you have a substantial amount of data within your Snowflake account usage database. Run the two commands in the worksheet, choosing the size for the alter warehouse statement that you prefer. For my set up, I leveraged the pre-written command and re-sized to a large warehouse. 

<acceptingtheappinSnowflake14.png>


Return to the main Sigma Health Check tab, and locate the 4th block of code titled “Table Creation, table population, and creation of refresh task”. Once again, hover over the top right corner and select “Open in Worksheet”. 

<acceptingtheappinSnowflake15.png>


In the new worksheet, you will see two commands that require your input, marked 1 and 2 in the screenshot below. For the first, input the date that you would like the workbooks analysis to begin with. This can be any date within the past year, as the application leverages data from your query history. For the second, input a chron statement to indicate the refresh rate you would like for the data in the application. In my example, I selected March 11, 2024 as the start date, and set my task to refresh at 1 am PST. Then, run all three statements.

<acceptingtheappinSnowflake16.png>
<acceptingtheappinSnowflake17.png>


 You will know the set up was successful when you see “The Refresh Task is configured”.

<acceptingtheappinSnowflake18.png>


 Once more, return to the main Sigma Health Check tab and scroll to the final block of code. Hover over the top right corner and select “Open in Worksheets”.

<acceptingtheappinSnowflake19.png>


 Update the command shown to reflect which user role you use to connect to Sigma, and run the command.

In the example below, I grant the application role to the SIGMA_PERFORMANCE_OPTIMIZATION_ROLE role in my Snowflake account. Application roles can not be leveraged directly by a user, so it is imperative that you grant the application role to the User / Role you use to connect Sigma to Snowflake. 

<acceptingtheappinSnowflake20.png>


 You are now done installing and configuring the native application in Snowflake and are ready to connect it to Sigma. 


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Setting up the Template in Sigma 
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## OPTIONAL - WORKING WITH THE NATIVE APP INPUT TABLES
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

We hope this set up process was quick and simple for you, and that you find value in the Sigma Health Check Native Application. 

For assistance with setting up the native application, please reach out to your Sigma account team. 

We are always looking for ways to improve our optimization assets, so please share any feedback you have on the application with your Sigma account team as well.

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
=======
Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->