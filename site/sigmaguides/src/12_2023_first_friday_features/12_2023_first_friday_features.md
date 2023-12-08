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

## Audit Logging (Beta)
Duration: 20

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



![Footer](assets/sigma_footer.png)

## Input Tables
Duration: 20

![Footer](assets/sigma_footer.png)

## Metrics
Duration: 20

![Footer](assets/sigma_footer.png)

## New QuickStarts in December
Duration: 20

### Implementing Column Level Security
[In this QuickStart](https://quickstarts.sigmacomputing.com/guide/security_column_level_security/index.html?index=..%2F..index#0), we discuss column level security and demonstrate how to apply it in Sigma, using the administrative user interface.

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
