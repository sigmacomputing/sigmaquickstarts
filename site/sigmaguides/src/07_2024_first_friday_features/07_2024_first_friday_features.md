author: pballai
id: 07_2024_first_friday_features
summary: 07_2024_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2024-07-31

# (07-2024) July
<!-- The above name is what appears on the website and is searchable. 
6 - Done
12 - Done
19 - Done
26 - 
Publish on Aug 2.
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in June 2024.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

![Footer](assets/sigma_footer.png)

## Administration
Duration: 20

### New version tag metadata in audit log (Beta)
The `AUDIT_LOG` > `SIGMA_SHARED` > `DOCUMENTS` dimension table now contains the following columns:

<img src="assets/FFF_07_2024_1.png" width="800"/>

This metadata enables you to obtain information related to both the source workbook and the tagged version when referencing audit log entries for events like exports and downloads.

![Footer](assets/sigma_footer.png)

## AI
Duration: 20

![Footer](assets/sigma_footer.png)

## API
Duration: 20

### Additional workbooks and shared templates endpoints
We have added some additional API endpoints to the [REST API](https://help.sigmacomputing.com/reference/get-started-sigma-api).

#### Share a workbook or template with another organization: 

***POST /v2/workbooks/{workbookId}/shareCrossOrg***

[Documentation](https://help.sigmacomputing.com/reference/get-started-sigma-api)

<img src="assets/horizonalline.png" width="800"/>

#### List templates shared with your organization: 

***GET /v2/shared_templates/shared_with_you***

[Documentation](https://help.sigmacomputing.com/reference/listtemplatessharedwithyou)

<img src="assets/horizonalline.png" width="800"/>

#### Accept a pending template share: 

***POST /v2/shared_templates/accept***

[Documentation](https://help.sigmacomputing.com/reference/accepttemplateshare)

<img src="assets/horizonalline.png" width="800"/>

#### New option for Create a connection endpoint
The `Create a connection` endpoint now includes the option to connect to MySQL:

***POST /v2/connections***

<img src="assets/horizonalline.png" width="800"/>

#### New query parameter for List connections endpoint
The `List connections` endpoint now includes the includeArchived query parameter to return archived and inactive connections. If your request doesn't use this parameter, the response output is unchanged:

***GET /v2/connections***

![Footer](assets/sigma_footer.png)

## Bug Fixes
Duration: 20

*1:* The `Administration` > `Account Types` > `New Account Type` page now correctly shows the `Create`, `edit`, and `publish` workbooks permission as auto-enabled (checkbox selected) when the `Apply tags` permission is enabled.

*2:* The `Administration` > `Authentication` > `Authentication Settings and Options` section now correctly allows an admin to edit the `Company Domain Sign-up` field regardless of the configured authentication method.

*3:* `Conditional formatting` for pivot tables now applies to cells containing `Total` labels. For more information, see [Apply conditional formatting.](https://help.sigmacomputing.com/docs/working-with-pivot-tables#apply-conditional-formatting)

![Footer](assets/sigma_footer.png)

## Embedding
Duration: 20

### Enhanced underlying data exploration
Embedded workbooks now support the enhanced underlying data modal, which is accessible from individual data points in visualization elements.

`Right-` or `left-click` a data point and select `Show underlying dat`a, then explore the underlying data by modifying filters, adding and removing columns, and interacting directly with the chart and data table:

<img src="assets/FFF_07_2024_3.png" width="800"/>

![Footer](assets/sigma_footer.png)

## Functions / Calculations
Duration: 20

### Sequence function
The Sequence function returns an arithmetic sequence as an array of integers based on a specified range and increment.

For more information, see [Sequence.](https://help.sigmacomputing.com/docs/sequence)

![Footer](assets/sigma_footer.png)

## Visualizations
Duration: 20

### Trellis formatting for combo charts
Combo charts now support trellis formatting. Add a column as a trellis row or column to split a combo chart into a trellis.

<img src="assets/FFF_07_2024_4.png" width="800"/>

![Footer](assets/sigma_footer.png)

## Workbooks
Duration: 20

### Support for emailing exports to organization users and teams
When configuring an email export, the `Recipients` field now features an autocomplete dropdown that helps you search for and select an organization team or user. 

You can also continue to input specific email addresses for non-organization members with authorized domains.

For example, searching to find a specific team:

<img src="assets/fff_07_2024_2.png" width="500"/>

For more information about emailing workbook content , see [Export to email.](https://help.sigmacomputing.com/docs/export-to-email)

![Footer](assets/sigma_footer.png)

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
