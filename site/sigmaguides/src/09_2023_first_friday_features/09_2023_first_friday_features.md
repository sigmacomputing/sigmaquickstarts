author: pballai
id: 09_2023_first_friday_features
summary: 09_2023_first_friday_features
categories: Administration
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2023_09-31


<--!
Sept 1: Done
Sept 8: Done
Sept 15: Done
Sept 22: Done
Sept 29: 

Input tables <> Databricks is now ready for beta. We would ideally want  SE's to try it out before we start rolling it out to customers. Since we had planned beta on the 14th of Sep and we are a week early.

Katherine Maples:
New default number format for Axes Labels, Data Labels, and more in STAGING

Stipo Josipovic:
Team, conditional formatting is now available for input tables in production


-->

# (09-2023) September

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in August 2023.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Administration
Duration: 20

### User Attribute Assignment for Org Members
Prior to this feature, administrators had to create a Sigma Team in order to assign specific attributes to users, who needed to be a member of this team.

Sigma now supports assigning specific user attribute values directly to users. 

For example, the user `Finance TestUser` has the Attribute `Region` set to the value `East`. This attribute will be used to filter data automatically, to the "East" region.

<img src="assets/fff_09_2023_01.png" width="800"/>

[For information on how to implement user attributes, click here.](https://help.sigmacomputing.com/hc/en-us/articles/6709896696979#rsua)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 10


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


`## Embedding
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->`

## Input Tables
Duration: 20

### Checkbox column type in input tables
Input tables now support a checkbox column type in place of the Logical type. To update these to the Checkbox type, open the column menu and select Change column type > Checkbox. True values convert to selected checkboxes, while False values convert to cleared checkboxes. 

Checkboxes enable additional workflow capabilities by simply capturing a "yes/no" response from a Sigma user. For example, record approvals, validations and enabling data triggers based on the user's response.

<img src="assets/fff_09_2023_05.png" width="800"/>

For more information about changing column types and checkbox data entry, see [Create and manage input table](https://help.sigmacomputing.com/hc/en-us/articles/15802569936275)

### Databricks Support
Input tables are now compatible with Databricks connections. These dynamic workbook elements support structured data entry that allows you to integrate new data points into your analysis and augment existing data from Snowflake or Databricks. 

For more information about input tables and how to use them, see the following documentation:<br>
[Intro to input tables](https://help.sigmacomputing.com/hc/en-us/articles/15802499663507)<br>
[Create and manage input tables](https://help.sigmacomputing.com/hc/en-us/articles/15802569936275)<br>
[Edit existing input table columns](https://help.sigmacomputing.com/hc/en-us/articles/15802547665171)<br>

To review how Input Tables solves several common use cases, [check out this QuickStart](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in August
Duration: 20

[Fundamentals 6: Administration](https://quickstarts.sigmacomputing.com/guide/fundamentals_6_administration/index.html?index=..%2F..index#0)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tables / Pivots
Duration: 20

### Pivot Table Wrap Text
Users now have the ability to wrap the text in their pivot tables. By default, we truncate text that is too long to fit in a cell. Users now have the option to expand the line height and see the entire content of the header or cell.

<img src="assets/fff_09_2023_02.png" width="500"/>

[Documentation Link:](https://help.sigmacomputing.com/hc/en-us/articles/20626146425619-Wrap-text)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Version Tagging
Duration: 20


### Version Tag Connection Swapping with Input Tables
Organizations can now swap the connection source when applying version tags to workbooks containing input tables.

Connection swapping allows you to move the workbook through the development process.

[Documentation Link:](https://help.sigmacomputing.com/hc/en-us/articles/13310865519507-Version-Tagging#h_01HAB848CR0M1Q2N901DH3EYJ0)

### Tag Permissions (Beta)

<aside class="positive">
<strong>IMPORTANT:</strong><br> This feature is currently in Beta and subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

When you create a version tag, you can now select a permission level for users or teams: `Public` or `Protected`. 

This allows org's greater control over who can publish updates to important workbooks that are exposed to stakeholders and embed customers.

Protected tags allow you to restrict access and select the users or teams that can apply a tag on a workbook. 

The users must have Can edit permissions for the workbook. Public tags are unprotected, but the user must have Can edit permissions for the workbook as well.

[Documentation Link:](https://help.sigmacomputing.com/hc/en-us/articles/13310865519507-Version-Tagging)

#### Version Tag Requests
Users (the "requestor") without permission to use a protected tag can now submit a request to set that tag on a specific workbook version.

After the request is made, an email is sent to all the members (the "approver(s)") with explicit access to the protected tag. After reviewing the workbook, the approver then can apply the requested tag to the workbook in question.

[Documentation Link:](https://help.sigmacomputing.com/hc/en-us/articles/13310865519507-Version-Tagging#h_01HAD6953P0BDK4NSFP6PTH4RH)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Visualizations
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

###  Allow users to request permission to explore workbooks
Users with `Viewer` licenses can now request permission to explore workbooks by clicking `Request explore access` in any workbook header. 

Sigma administrators will receive the request. They can upgrade a user’s license by reassigning them to an account type with the 'Explore workbooks' permission enabled.

For example, this is what a user with `Viewer` rights would see when a workbook is shared to them:

<img src="assets/fff_09_2023_04.png" width="800"/>

### Segmented controls

A segmented control provides a "linear strip" of two or more named segments. 

Each segment acts exactly like a radio button, selecting the matches and excluding other data records. 

When you have to make selections from a long list of values, segmented controls can be a better option because they provide a smaller subset of relevant values, a more economical dashboard layout, and a nicer overall experience for viewers.

**There are two types of segmented controls:**
Based on a manually-entered list. You must have values that select data on the target of the control.

<img src="assets/fff_09_2023_06.png" width="800"/>

Based on a column in the data source or workbook element. These controls can have a maximum of 5 distinct values, sorted on record count or alphabetically.

### Text element background options
We have added the ability to change the background color in text elements. 

In the  Element properties panel, choose to show or hide the text element background area. 

Enabling the background creates a card display and adds padding around the text content for consistency with data elements and input tables. 

You can then select a custom background color from the color palette or picker, or you can keep the default selection based on the workbook theme. 

For example:

<img src="assets/fff_09_2023_03.png" width="800"/>


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

Bug releases are broken down by week for specificity.

### Week ending 9.01.2023
<ul>
      <li></li>
</ul>

### Week ending 9.08.2023
<ul>
      <li></li>
</ul>

### Week ending 9.15.2023
<ul>
      <li></li>
</ul>

### Week ending 9.22.2023
<ul>
      <li></li>
</ul>

### Week ending 9.29.2023
<ul>
      <li></li>
</ul>

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

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
