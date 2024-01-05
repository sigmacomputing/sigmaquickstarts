author: pballai
id: 12_2023_first_friday_features
summary: 12_2023_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2024-01-01

<!-- 
12.08.2023: Done
12.15.2023: Done
--->

# (12-2023) December

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in December 2023.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

![Footer](assets/sigma_footer.png)

## Embedding
Duration: 20

### Bug Fixes:
Sigma now verifies user account type permissions and only sends version tag email requests to users granted the `Create`, `edit`, and `publish` workbooks and `Apply tag` permissions. 

Viewer-licensed users (who cannot edit workbooks or apply tags) no longer receive the requests.

<img src="assets/horizonalline.png" width="800"/>

Initial clicks on list control elements in embedded workbooks no longer cause the iframe display to jump to the top of the workbook.

<img src="assets/horizonalline.png" width="800"/>

### New postMessage event for element errors:
Elements that fail to load in embedded workbooks now trigger a postMessage event that includes the element ID, message, and API error code.

{
      type: 'workbook:chart:error';
      nodeId: string;
      message: string | undefined;
      code: string;
}

Where nodeId refers to the id of the element that failed to load in the embedded workbook, and the message and error code provide more info as to why. 

The errorCode will be one of the API error codes:<br>
"EEXIST" | "EPERM" | "ENOENT" | "EACCES" | "EINVAL" | "ESTALE" | "ETIMEDOUT" | "EAGAIN" | "EFBIG" | "NETWORK" | "UNKNOWN"

### Write-only data permission:
Sigma provides access and capabilities based on a cumulative set of permissions inherited or granted at different levels of the data architecture (connection, schema, database table) and organizational structure (organization, team, user).

We have added an additional permission level to the list of permissions that already exist.

The `Can write only` permission restricts access to data while enabling users to create input tables and CSV upload that write data to the connection’s write-back destination. This permission type is ideal for enabling input tables and CSV uploads in embedded workbooks with restricted data access.

For more information about the new permission type, see [Data permissions overview.](https://help.sigmacomputing.com/hc/en-us/articles/24087589760659)

![Footer](assets/sigma_footer.png)

## Functions

### VariancePop:
The VariancePop function calculates **population variance**, which determines the spread of distribution or degree to which the column or grouped values deviate from the mean. 

The addition of this function complements the existing Variance function, which estimates sample variance. For more information about these functions and when to use each, see [VariancePop](https://help.sigmacomputing.com/hc/en-us/articles/23724296595859) and [Variance.](https://help.sigmacomputing.com/hc/en-us/articles/23724255727123)

For example, assuming a table contains the average temperature recorded for each month in 2021 and 2022, the following formula will calculate the temperature variance for each year (years being grouped):
```code
VariancePop([Avg monthly temp])
```

<img src="assets/fff_12_2023_3.png" width="800"/>

![Footer](assets/sigma_footer.png)


## New QuickStarts in December
Duration: 20

### Implementing Column Level Security
[In this QuickStart](https://quickstarts.sigmacomputing.com/guide/security_column_level_security/index.html?index=..%2F..index#0), we discuss column level security and demonstrate how to apply it in Sigma, using the administrative user interface.

### Snowflake Key-pair Authorization
[In this QuickStart](https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index.html?index=..%2F..index#0), we will cover the recently added support for the key pair authentication method (public key + private key) for Snowflake connections.

### Extend Sigma with Plugins
[In this QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_plugins/index.html?index=..%2F..index#0) we discuss and demonstrate how to extend Sigma's functionality by crating their own plugins.

![Footer](assets/sigma_footer.png)

## Visualizations
Duration: 20

### Chart and table element descriptions:
Add descriptions to chart and table elements and display them as subtitles or tooltips. 

Navigate to to `Element format` > `Title` and select the `Show description` checkbox to enable and configure the element description:

<img src="assets/fff_12_2023_2.png" width="800"/>

For more information about element descriptions, see the [Sigma Community post](https://community.sigmacomputing.com/t/introducing-chart-descriptions-element-subtitles-and-tooltips/2851)

Not a member of the Sigma Community? [Sign up today!](https://community.sigmacomputing.com/)

### Vertical alignment in text elements:
Control the vertical alignment of content in text elements for improved text display. 

Go to `Element` properties and choose `top`, `center`, or `bottom` alignment.

![Footer](assets/sigma_footer.png)

## Workbooks
Duration: 20

### Additional entry point to license upgrade request:
When a Viewer-licensed user clicks `Create New` in the side panel, Sigma notifies them that the ability to create workbooks requires an account upgrade. 

<img src="assets/fff_12_2023_1.png" width="400"/>

The user can send a request to organization admins, who can then upgrade the user’s license by reassigning them to an account type with `Create`, `edit`, and `publish` workbooks permission.

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
