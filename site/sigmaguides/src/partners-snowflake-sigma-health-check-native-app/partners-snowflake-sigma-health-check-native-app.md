author: pballai
id: partners-snowflake-sigma-health-check-native-app
summary: partners-snowflake-sigma-health-check-native-app
categories: partners
environments: web
status: hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2024-03-13

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
How to leverage the Sigma Health Check Native App, inside your Sigma environment to build this useful Sigma workbook:

<img src="assets/settingupthetemplateinsigma15.png" width="800"/>

## Accepting the App in Snowflake
Duration: 20

If you prefer, you may watch a video that shows all the steps required in Snowflake for this to work:

[Setting Up the Health Check Native App in Snowflake - Watch Video](https://www.loom.com/share/1a42a055358b44f08dbbd0236267c4aa)

### Step by Step Instructions

The following will guide you through configuring a Snowflake instance in preparation of the application.

Sign in to your Snowflake instance by entering your `Username`, `Password`, and clicking `Sign in`:

<img src="assets/acceptingtheappinSnowflake1.png" width="400"/>

Ensure you are in the `ACCOUNTADMIN` role by clicking your username in the bottom left, scrolling up to roles, and selecting `ACCOUNTADMIN`. 

<img src="assets/acceptingtheappinSnowflake2.png" width="600"/>

In the left-hand navigation menu, find `Data Products`, then `Apps`. You should see `Sigma Health Check` under `Recently Shared with You`: 

<img src="assets/acceptingtheappinSnowflake3.png" width="600"/>

Click `Get` next to `Sigma Health Check`: 

<img src="assets/acceptingtheappinSnowflake4.png" width="500"/>

Select `Options` on the pop up window:

<img src="assets/acceptingtheappinSnowflake5.png" width="500"/>

Ensure the application name is `Sigma_Health_Check`. Then assign a warehouse to use for installation, and click `Get`:

<img src="assets/acceptingtheappinSnowflake6.png" width="500"/>

When the installation is complete, you will see the Sigma Health Check under `Installed Apps`:

<img src="assets/acceptingtheappinSnowflake7.png" width="800"/>

Click on the application name. This will open a window that says `Welcome to the Sigma Health Check Application`: 

<img src="assets/acceptingtheappinSnowflake8.png" width="800"/>

On this page you will notice several blocks of code. 

In the first block titled `Grants for the application`, hover over the top right corner until you see the icon for `Open in Worksheets.` 

Click this icon:

<img src="assets/acceptingtheappinSnowflake9.png" width="600"/>
  
Snowflake will open a new tab in your browser, with the first block of commands already loaded. 

Run each command on this worksheet in the order they appear:

<img src="assets/acceptingtheappinSnowflake10.png" width="800"/>

Return to the Sigma Health Check tab, and hover over the upper right-hand side of the second block labeled `Create Application Warehouse`. 

Once again, click `Open in Worksheets:`

<img src="assets/acceptingtheappinSnowflake11.png" width="600"/>

Once again, Snowflake will open a worksheet with the commands pre-loaded. 

Run each command in the order they appear, starting with `CALL ASSETS.WAREHOUSE_SETUP();`:

<img src="assets/acceptingtheappinSnowflake12.png" width="800"/>

Return to the Sigma Health Check tab and repeat this process for the third block of code, hovering over the top right corner to select `Open in worksheet.` 

<img src="assets/acceptingtheappinSnowflake13.png" width="600"/>

The warehouse created by the application for use in analysis and set up is called `SIGMA_HEALTHCHECK_MATERIALIZATION_WH.` 

Upon creation, its size is a small. 

<aside class="negative">
<strong>NOTE:</strong><br> Sigma recommends a larger warehouse for the initial set up of the native application, particularly if you have a substantial amount of data within your Snowflake account usage database. 
</aside>

Run the two commands in the worksheet, choosing the size for the alter warehouse statement that you prefer. 

For our set up we leveraged the pre-written command and re-sized to a large warehouse. 

<img src="assets/acceptingtheappinSnowflake14.png" width="800"/>

Return to the main Sigma Health Check tab, and locate the fourth block of code titled `Table Creation`, `table population`, and `creation of refresh task`.

Once again, hover over the top right corner and select `Open in Worksheet:` 

<img src="assets/acceptingtheappinSnowflake15.png" width="800"/>

In the new worksheet, you will see two commands that require your input, marked `1` and `2` in the screenshot below. 

For the first, input the date that you would like the workbooks analysis to begin with. This can be any date within the past year, as the application leverages data from your query history. 

For the second, input a chron statement to indicate the refresh rate you would like for the data in the application. In our example, we selected `March 11, 2024` as the start date, and set the task to `refresh at 1 am PST`: 

<img src="assets/acceptingtheappinSnowflake16.png" width="800"/>

Then, run all three statements:

<img src="assets/acceptingtheappinSnowflake17.png" width="800"/>

You will know the set up was successful when you see `The Refresh Task is configured`:

<img src="assets/acceptingtheappinSnowflake18.png" width="800"/>

 Once more, return to the main Sigma Health Check tab, and scroll to the final block of code. 
 
 Hover over the top right corner and select `Open in Worksheets`:

<img src="assets/acceptingtheappinSnowflake19.png" width="800"/>

Update the command shown to reflect which user role you use to connect to Sigma, and run the command.

In the example below, we grant the application role to the `SIGMA_PERFORMANCE_OPTIMIZATION_ROLE` role in our Snowflake account. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Application roles can not be leveraged directly by a user, so it is imperative that you grant the application role to the User / Role you use to connect Sigma to Snowflake. 
</aside>

<img src="assets/acceptingtheappinSnowflake20.png" width="800"/>

You are now done installing and configuring the native application in Snowflake, and are ready to connect it to Sigma. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Setting up the Template in Sigma 
Duration: 20

The Health Check Native Application in Snowflake created the tables and objects needed for the health check analysis. 

In order to make it simple to visualize the outputs of the Native App, Sigma has created the `Sigma Health Check template.` 

You may have received an email telling you this template was shared with you. 

**Please DO NOT click the link in the email until you have completed the Snowflake side set up, as well as the set up of the connection to Sigma to ensure the smoothest connection process possible.** 

<aside class="negative">
<strong>NOTE:</strong><br> You will need Administrator permissions in Sigma in order to complete the set up. 
</aside>

If you prefer, you may watch a video that shows all the steps required in Snowflake for this to work:

[Configuring Sigma for the Health Check Native App with Snowflake - Watch Video](https://www.loom.com/share/8af58275127949a2bc1ae15111a6d465?sid=323e03b6-a47b-4129-aaaa-60a662aaaf21)

### Step by Step Instructions

Login into Sigma as an `Administrator.`

Navigate to administration by clicking the icon in the top right, then selecting `Administration` from the drop down.

<img src="assets/settingupthetemplateinSigma2.png" width="400"/>

From the left-hand menu, select `Connections`, then click `Create Connection`. 

<img src="assets/settingupthetemplateinSigma3.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma strongly recommends you create a unique connection for the Health Check Native App.
</aside>
 
Provide a `Name` for the connection, then select the `Snowflake` icon:

<img src="assets/settingupthetemplateinSigma4.png" width="800"/>

Enter your Snowflake account locator. 

The Health Check Native App created the warehouses needed for the workbook in the set up script. For warehouse enter `SIGMA_HEALTHCHECK_ANALYTICS_WH`:

<img src="assets/settingupthetemplateinSigma5.png" width="800"/>

For `User`, enter the credentials of the user you use to connect to Sigma, as well as the `Role` that you granted the application role to in the previous section:

<img src="assets/settingupthetemplateinSigma6.png" width="600"/>

Scroll down, and toggle the `Enable Write Access` switch to on:

<img src="assets/settingupthetemplateinSigma7.png" width="600"/>

For `Write database` enter `SIGMA_HEALTH_CHECK`. 

For `Write schema`, enter `SIGMA_WRITEBACK`. 

Finally, for `Warehouse` enter `SIGMA_HEALTHCHECK_MATERIALIZATION_WH`. 

All three of these objects were created on the backend during the native app set up in Snowflake:

<img src="assets/settingupthetemplateinSigma8.png" width="600"/>

Click `Create` in the top right corner to finish creating the connection:

<img src="assets/settingupthetemplateinSigma9.png" width="800"/>

Now that the connection is established, locate the email you received from Sigma. 

It will likely be titled `Health Check Native App - Invitation to Use`. 

Click `Open in Sigma`: 

<img src="assets/settingupthetemplateinSigma10.png" width="800"/>

You should now see the `Swap Data Sources` module. 

You will notice that Sigma intuitively located the new connection, and matched the data within the connection to the appropriate elements in the inbound workbook share. 

Click `Choose`:

<img src="assets/settingupthetemplateinSigma11.png" width="800"/>

You will now see the `Health Check` workbook pointing to your data. 

Click `Accept` in the top right corner:

<img src="assets/settingupthetemplateinSigma12.png" width="800"/>

Click the drop down to the right of the title, and click `Save As`:

<img src="assets/settingupthetemplateinSigma13.png" width="600"/>

In the popup, enter a name for the workbook, or leave it as `Health Check Native App`. 

You may also use this screen to share the workbook with members of your team and delegate permissions. 

If you choose not to do this at this time, you can always grant permissions later. 

Click `Save`:

<img src="assets/settingupthetemplateinSigma14.png" width="600"/>

You should now see your saved Template:

<img src="assets/settingupthetemplateinSigma15.png" width="800"/>

Templates created in Sigma can be located via the homepage. 

To see where your template is saved, click the `papercrane` icon in the top left of your workbook to navigate back to the homepage: 

<img src="assets/settingupthetemplateinSigma16.png" width="600"/>

From the home page, click `Templates` in the left-hand navigation menu:

<img src="assets/settingupthetemplateinSigma17.png" width="600"/>

Under `Internal`, you should now see your saved `Health Check Native App` workbook:

<img src="assets/settingupthetemplateinSigma18.png" width="600"/>

To learn more about Templates in Sigma, [click here.](https://help.sigmacomputing.com/docs/get-started-with-workbook-templates)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## OPTIONAL - Sigma Input Tables with the Native App
Duration: 20

The Health Check Native App contains input tables that allow you to categorize and group warehouses, then leverage those groupings in your analysis. 

This functionality enables you to look at Snowflake performance by business unit, associated 3rd party tool, or whatever category you choose to leverage. 
Using these input tables is not required for the native app to function properly, so the below section is optional.

Navigate to the “Warehouse Sizing” page of the workbook using the tabs at the bottom or the buttons along the top.

<img src="assets/workingwithinputtables1.png" width="800"/>

You will notice two `input tables` in the middle of the page. 

These input tables are designed to allow you to create categories, then assign them to your warehouses for use in your analysis. 

Warehouse groupings can be different business units, external tools that leverage a Snowflake warehouse like Sigma, or whatever grouping makes the most sense to your organization:

<img src="assets/workingwithinputtables2.png" width="800"/>

Click `Edit Data` next to the input table on the left that is labeled `Input Warehouse Categories`:

<img src="assets/workingwithinputtables3.png" width="800"/>

Enter the categories you would like to use.

For the purposes of this QuickStart, we chose `business units` for the category. 

Click the blue `Save` button. 

<aside class="negative">
<strong>NOTE:</strong><br> Please note, it may be hidden behind the expand element module as it is in this screenshot:
</aside>

<img src="assets/workingwithinputtables4.png" width="600"/>

Once you have saved the first input table, click `Edit Data` next to the right-hand input table labeled `Categorize Warehouses`:

<img src="assets/workingwithinputtables5.png" width="800"/>

Using the drop downs in the `Warehouse Category` column, assign each warehouse a category value. 

These category values are pulled from the first input table we worked with. 

Once you have entered categories, click `Save`: 

<img src="assets/workingwithinputtables6.png" width="600"/>

You will now be able to use the `Warehouse Category` filter, located directly below the input tables, in your analysis. 

This filter can be leveraged to see sizing and concurrency metrics only for a specific group of warehouses across both the Warehouse Sizing and Warehouse Concurrency pages of the Health Check workbook. 

<img src="assets/workingwithinputtables7.png" width="800"/>

To learn more about Sigma Input Tables, [click here](https://help.sigmacomputing.com/docs/intro-to-input-tables)

To see common use cases for Sigma Input Tables, review this [QuickStart](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

We hope this set up process was quick and simple for you, and that you find value in the Sigma Health Check Native Application. 

For assistance with setting up the native application, **please reach out to your Sigma account team.**

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