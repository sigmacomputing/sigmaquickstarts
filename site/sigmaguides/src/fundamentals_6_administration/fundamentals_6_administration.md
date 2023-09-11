author: pballai
id: fundamentals_6_administration
summary: fundamentals_6_administration
categories: Fundamentals
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 

# Fundamentals 6: Administration

## Overview 
Duration: 5

This QuickStart introduces the essential Administrative features and navigation considerations within Sigma. Whether you're managing your instance, setting up connections, configuring data governance rules, or customizing user interactions, this will provide you with a foundational overview.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some features may carry the "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

 ### Target Audience
Administrators (Admin) who are new to Sigma and want a quick overview of the available features functions common in their roles. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
How to leverage the available administrative functions in Sigma to get things done efficiently and effectively.

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## Accessing administration
Duration: 20

We will first cover how to access the administrative ("admin") areas of Sigma and then list and describe each of the available options.

<aside class="negative">
<strong>NOTE:</strong><br> The admin area of Sigma requires a user to have an account type permission of "Admin". Users who do not have this permission will not be able to any administrative function and the option is not displayed on the interface to them.
</aside>

Admin users can access the admin page one of two ways as shown:

<img src="assets/fa1.png" width="800"/>

We have centralized all the admin options on this one page as shown:

<img src="assets/fa2.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma provides each client with access to our live technical support team via the ? widget. You can come hear to ask questions in regard to How To/Break Fix. For instance, how do I do a moving average for the last 3 days or why am I getting this error message. They are equipped to handle even the most complex questions from 6am PST - 6PM PST M-F.

Furthermore, you can even schedule a 30min meeting with this team to easily show what you are trying to solve and troubleshoot live on a call.
</aside>

In addition to Live-Chat, there are many other options exposed by clicking on the <img src="assets/helpicon.png" width="30"/> icon:

<ul>
    <li><strong>Help Center:</strong> Explore Sigma's self-service resource library for documentation.</li>
</ul>

<ul>
    <li><strong>Try a tutorial:</strong> Access commonly used features via in-product tutorials.</li>
</ul>

<ul>
    <li><strong>Sigma QuickStarts:</strong> Step-by-step tutorials for learning Sigma's features and fundamentals.</li>
</ul>

<ul>
    <li><strong>Sigma community:</strong> Interact with other Sigma users, share knowledge, and get answers.</li>
</ul>

<ul>
    <li><strong>Keyboard shortcuts:</strong> Learn shortcuts for efficient navigation and actions.</li>
</ul>

<ul>
    <li><strong>Function index:</strong> Browse all Sigma functions with explanations and examples.</li>
</ul>

<ul>
    <li><strong>What's new:</strong> Stay updated on new feature releases in weekly release notes.</li>
</ul>

In addition, [Sigma publishes new feature announcements in QuickStart format, once per month.](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)

Next, we will cover each area inside administration at a high-level.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account - General Settings
Duration: 20

#### Site
Identifies your user account name, cloud provider, data of creation, URL and when the product license will expire. 

Admin users are able to edit `Organization Name` and `Company Login URL` values by clicking the `Edit` button.

<aside class="positive">
<strong>Caution!</strong><br> Changing these settings will break existing document links.
</aside>
<img src="assets/horizonalline.png">

#### Custom Home Pages
Sigma Admins can designate a workbook to use as a custom homepage for an organization or team. The first page of the workbook becomes the custom homepage.

A custom homepage functions as a landing page for its viewers..

For example, embedding specific visualizations along with buttons linking to new user QuickStarts:

<img src="assets/customhomepage.gif">

[Documentation Link](https://help.sigmacomputing.com/hc/en-us/articles/18244042539923-Enable-a-custom-homepage-Beta-?_gl=1*mldzor*_ga*MTAyNTE4NzQ5NC4xNjg3NTUxNjQ5*_ga_PMMQG4DCHC*MTY5NDQ1NTIyOS4yMjIuMS4xNjk0NDYyOTE2LjUzLjAuMA..)

<img src="assets/horizonalline.png">

#### Time
Allows portal-wide timezone preference setting. The default is `UTC`.

<img src="assets/horizonalline.png">

#### Features
This is a grouping of small features that do not necessitate their own group.

***CSV upload:***<br>
Enable CSV upload for connections with write access configured. [Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/4405058977811-Upload-CSVs)

***Sample connection:***<br>
Include Sigma sample connection in list of connections to select from. [Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360048924514-Sigma-s-Sample-Connection)

***Public embeds:***<br>
Allow public embedding of Sigma documents. [Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/1500011565421-Public-Embedding)

***License upgrade request:***<br>
Allow users to request a license with more permission from admin (e.g. from Viewer to Creator license for explore workbook permission). [Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/19321425980819-License-upgrade-requests)

***Comments:***<br>
Allow commenting on Sigma documents. [Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/4404880490643-Workbook-comments)

***Annotations:***<br>
Capture elements as images to annotate as comments in Sigma documents. Captured images will be stored in a Sigma managed cloud for a period of your choosing. The default is for 3 months. [Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/18441838570259)

<img src="assets/horizonalline.png">

#### Integrations
Sigma supports integrations with Slack and dbt.

[Learn more about Sigma with Slack](https://help.sigmacomputing.com/hc/en-us/articles/360036944834-Slack-Integration)

[Learn more about Sigma with dbt](https://help.sigmacomputing.com/hc/en-us/articles/10312392488595-Configure-dbt-Integration)

<img src="assets/horizonalline.png">

#### Embedding
For customers who want to include (embed) Sigma content into their own applications, Sigma provides Application Embedding. 

[There is a QuickStart series for those wanting detailed information and instruction.](https://quickstarts.sigmacomputing.com/?cat=embedding)

<img src="assets/horizonalline.png">

#### Custom Plugins
Sigma supports plugin elements in workbooks. Plugins are third-party applications built to add additional functionality into Sigma.

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/4410336481299)

<img src="assets/horizonalline.png">

#### Custom Functions
Admins can define custom functions to represent frequently used complex calculations that combine logic, aggregates, and other type of operations. There are many advantages to adding custom functions to your Sigma practice:

 <ul>
      <li>Use custom functions to encode business logic instead of repeating it. </li>
      <li>Encapsulate complex calculations that are common business use cases, for easier use.</li>
      <li>Expose your proprietary warehouse functions, making them consumable</li>
</ul>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/18886053392531-Custom-functions#requirements)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account - Branding Settings
Duration: 20

#### Custom Fonts

<img src="assets/horizonalline.png">

#### Workbook Themes

<img src="assets/horizonalline.png">

#### Customize Email




![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Authentication
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connections
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Usage
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## People
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Teams
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account Types
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## User Attributes
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embeds
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tags
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Scheduled Exports
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Materializations
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Warehouse Views
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## APIs & Embed Secrets
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->













## What we've covered
Duration: 5

In this lab we learned how to.........

**Additional Resource Links**


[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->