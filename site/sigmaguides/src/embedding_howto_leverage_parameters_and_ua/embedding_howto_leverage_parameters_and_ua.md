author: pballai
id: embedding_howto_leverage_parameters_and_ua
summary: embedding_howto_leverage_parameters_and_ua
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-08-23

# How To: Leverage Parameters and User-Attributes with Sigma Embedding
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart guide explains how Sigma utilizes its server-side API to facilitate embedding into external applications.

The server-side API is essential for embedding Sigma into an external application. Its primary function is to generate a secure, one-time-use URL. This allows Sigma content to seamlessly integrate with the parent application's security during runtime.

A secondary use of the API is to further control the functionality of the embed, using optional parameters.

Detailed documentation of this functionality can be [found here.](https://help.sigmacomputing.com/hc/en-us/articles/6797945342483-User-Backed-Embedding-#h_01G50PPN275X08R4HJJKAQ6XFV) 

This QuickStart guide will offer illustrative examples and screenshots of the available optional parameters, to help developers grasp the significance of each one.

This QuickStart assumes you have completed the [Embedding 3: Application Embedding QuickStart.](https://quickstarts.sigmacomputing.com/guide/embedding_3_application_embedding/index.html?index=..%2F..index#0)

 ### Target Audience

Developers who are interested in how to leverage required and optional parameters and user attributes when embedding Sigma into their applications.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>A working web server based on Node.js as demonstrated in the QuickStart Embedding 1: Prerequisites</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn

How to leverage required and optional parameters and user attributes when embedding Sigma into their applications.

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## Required Parameters
Duration: 20

This section is provided for completeness and it is assumed you are already familiar with these parameters, since you completed [Embedding 3: Application Embedding QuickStart.](https://quickstarts.sigmacomputing.com/guide/embedding_3_application_embedding/index.html?index=..%2F..index#0)

Failure to include one of these parameters will throw an error when the embed is loading. 

### Potential Error Messages:
EEXIST is for duplicates. Duplicate team, duplicate user, etc. Unlikely to happen for embeds
EPERM operation not permitted, e.g.  if a user forgets to share an embed with a team, account type does not give you edit access to a workbook.
ESTALE you should not see this in embeds.
ENOENT Object Does Not Exist'. If you try to bring up a workbook which does not exist.
EACCES Permission Denied e.g. when you do not have access to edit a workbook and try to.
EINVAL Invalid Argument. e.g. when the URL contains team that does not exist.
ETIMEDOUT Request Timed Out
NETWORK Unable to Connect to Sigma
UNKNOWN DEFAULT_API_ERROR_MESSAGE,

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
