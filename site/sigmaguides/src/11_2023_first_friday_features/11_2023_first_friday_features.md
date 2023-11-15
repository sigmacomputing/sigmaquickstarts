author: pballai
id: 11_2023_first_friday_features
summary: 11_2023_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2023-11-03

<!-- 
11/10/23: 
-->

# (11-2023) November
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in November 2023.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

![Footer](assets/sigma_footer.png)

## Embedding
Duration: 20

### New Optional Interface Parameters:
We have added three new parameters to the embedding API. 

 <ul>
      <li><strong>use_user_name:</strong> Displays the workbook creator’s name (instead of email) in embed menus and system-generated emails.</li>
      <li><strong>first_name:</strong> Sets the first name of the current embed user.</li>
      <li><strong>last_name:</strong> Sets the last name of the current embed user.</li>
</ul>

**use_user_name** displays the workbook creator's name (instead of email) in embed menus and system-generated emails.

The **first_name and last_name** (have to use both) parameters replace the default name (“Embed User”) that is shown in Administrative and other interfaces.

If both `first_name` and `last_name` parameters are absent, the current user keeps their current name (or, if a new user is created, their first name will be set to Embed, last name to User)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Filters and Controls
Duration: 10


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in November
Duration: 20

[Secure Your Organization with Security Analytics Using Snowflake and Sigma](https://quickstarts.sigmacomputing.com/guide/secure_your_organization_with_security_analytics_using_snowflake_and_sigma/index.html?index=..%2F..index#0):

This QuickStart walks you through the process of connecting to a Sigma template, exploring security data, customizing the template for more interactivity, and connecting the template to your Snowflake environment's data (optional).

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Visualizations
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Conditional alerts for data elements and input tables:
The element menu now features an `Alert` more action that opens the `Schedule exports` modal and auto-populates select fields based on the corresponding data element or input table. 

This allows users to quickly create a recurring export as a conditional alert to monitor a specific element.

For more information, [see Schedule a conditional export or alert.](https://help.sigmacomputing.com/hc/en-us/articles/22641293217555)


### Control element label formatting:
Label configurations for control elements are now consolidated in the `Element format` > `Label` section with the following new options:

 <ul>
      <li><strong>Label position:</strong>  Display the element above (Top) or beside (Left) the interactive control UI.</li>
      <li><strong>Label width:</strong> When Left position is selected, customize the width of the label relative to the full element area.</li>
</ul>

<img src="assets/control_label.gif">

### Warehouse views with row-level security:
Users can now create warehouse views from workbooks that use row level security. 

When they do so, the warehouse view popup will contain a `Data permissions` row displaying the user who configured the warehouse view, whose permissions are used to create the view. 

Additionally, if any of the user’s system functions values change, the view will automatically get updated.

**Creating a new warehouse view:**
<img src="assets/fff_11_2023_2.png" width="800"/><br>

<img src="assets/fff_11_2023_3.png" width="800"/><br>

<img src="assets/fff_11_2023_4.png" width="800"/><br>

<img src="assets/fff_11_2023_1.png" width="600"/><br>

<img src="assets/fff_11_2023_5.png" width="800"/><br>

<img src="assets/fff_11_2023_6.png" width="600"/>

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

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
