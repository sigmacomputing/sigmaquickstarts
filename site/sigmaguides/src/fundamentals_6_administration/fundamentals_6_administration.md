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
Sigma supports custom fonts for workbooks, worksheet visualizations, and dashboards. 

Custom fonts can be uploaded at the organization level and used on any workbooks, worksheet visualizations, and dashboards in that organization.

Organizations are not limited to one custom font.

Accepted formats: .ttf, .otf, .woff, .woff2

For example, we can easily add a new font, "Coffee House" in this case:

<img src="assets/fa3.png" width="600"/>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360063119573)

<img src="assets/horizonalline.png">

#### Workbook Themes
Sigma supports creation of workbook themes in the Administration portal. Admin can Customize sets of colors, fonts, spacing, and more, then assign your organization.

For example, we can easily add a new theme, use the "Coffee House" font we added and also set it as the `Organizations Default` so that it is the first choice for all content:

<img src="assets/fa4.png" width="400"/>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/4407352217747)

<img src="assets/horizonalline.png">

#### Customize Email
Custom email branding allows you to apply your company's brand to all data export emails sent from your Sigma organization.

By default, all emails include Sigma branding. However, applying any subset of custom branding options will automatically remove all Sigma branding.

For example, a custom email configuration might look like this:

<img src="assets/fa5.png" width="800"/>

There is also an option to send a test email to yourself (#1).

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/4409605098387)

<img src="assets/horizonalline.png">

#### Custom SMTP Server
Custom SMTP Server allows you to send Sigma emails from your own SMTP server. Sigma generated emails will be sent from an email address from within your domain.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma can't monitor email deliverability if you set your own SMTP server.
</aside>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360059130893-Customize-Welcome-and-Invite-Emails#h_01GSY6K6KTZZFZ4PSVY3KSS278)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Authentication
Duration: 20

Sigma supports multiple authentication methods including:

 <ul>
      <li><strong>Password:</strong> Sigma prompts new organization members to create a unique password for their Sigma account and login.</li>
      <li><strong>SAML:</strong> Sigma authenticates organization member accounts through the Single Sign-On (SSO) protocol you provide.</li>
      <li><strong>SAML or Password:</strong> Organization members authenticate with either SSO or a unique password.</li>
      <li><strong>SAML and Password:</strong> Organization members authenticate with SSO and a unique password. The primary use case for this is to ensure the admin isn't logged out while configuring SAML. Once the configuration is complete, the org should use SAML.</li>
      <li><strong>OAuth:</strong> Sigma authenticates organization member accounts through OAuth Single Sign On (SSO). This option supports OAuth with Snowflake.</li>
      <li><strong>OAuth or Password:</strong> Sigma authenticates organization member accounts through OAuth Single Sign-On (SSO) or a unique password. This option supports OAuth with Snowflake.</li>
</ul>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360036944534-Manage-authentication#h_5f17acb1-0687-43c5-96ac-2e423c9a3e94)

### Authentication Methods & Options:
All configuration is accessed by clicking the `Edit` button. 

The current values for Guest Account and 2-Factor Authentication are shown on the main page for your convenience. 

In the example below, we are allowing SAML or a Sigma password to be used to log in. 

<img src="assets/fa6.png" width="800"/>

Guest Access is enabled, but is off by default. Guest user accounts are recommended when working with external vendors.

Guest users cannot view or request access to content outside of their Admin-assigned team(s). 

This feature is opt-in and must be enabled by an organization Admin before guest users can be invited to your organization. 

[Learn more about Guest Accounts.](https://help.sigmacomputing.com/hc/en-us/articles/4412853245971-Guest-User-Accounts)

We are not using 2-Factor authentication, but is supported.

[Learn more about 2-Factor authentication with Sigma.](https://help.sigmacomputing.com/hc/en-us/articles/4409688043411)

We have provided an `Identity provider login URL`. In this case, the url was provided by Okta, but any IdP provider can be used.

[Learn more about how to configure your IdP.](https://help.sigmacomputing.com/hc/en-us/articles/360037429833-Single-Sign-On-with-SAML#h_01EEXSNMRS5SP5AEGZ236R9Y2A)

Okta also provided the `X509 certificate` as well.

<img src="assets/horizonalline.png">

### Export Authentication:
#### Authorized Domains
Sigma Admins may choose to control which domains can receive emails, Google Sheets or Google Drive exports from Sigma. 

**If no domains are declared authorized, users can export reports to any email address.**

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360062127973-Restrict-Export-Recipients)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connections
Duration: 20

The `Connections` page provides configuration information so that Sigma is able to connect to your cloud data warehouse. 

At the time of this QuickStart, seven vendors are supported. Clicking on the desired icon will bring up the configuration dialogue specific to that vendor:

<img src="assets/fa7.png" width="600"/>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360037429953-Create-a-New-Database-Connection)

Depending on the security parameters of your oganization, it may be necessary to add Sigma's IP addresses to your allowed list of IPs (whitelist).

Sigma's egress IP addresses are listed on all individual connection pages in your Sigma Admin Portal:

For example, selecting Snowflake displays the egress IP addresses:

<img src="assets/fa8.png" width="600"/>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360062127973-Restrict-Export-Recipients)

Another important configuration is warehouse write access. This is only required for specific Sigma features. If you are not using these features, it is not required.

Granting write access to a database enables the use of several Sigma features:

[CSV upload](https://help.sigmacomputing.com/hc/en-us/articles/4405058977811-Upload-CSVs)
[Materialization](https://help.sigmacomputing.com/hc/en-us/articles/4408785054611)
[Dataset warehouse views](https://help.sigmacomputing.com/hc/en-us/articles/4408785035027)
[Input tables](https://help.sigmacomputing.com/hc/en-us/articles/15802569936275)

<aside class="negative">
<strong>NOTE:</strong><br> Not all features are available for each connection type. Refer to Sigma's documentation for the current list of supported vendors.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> By design, the database destination that you configure for write access is not visible in the Sigma connection explorer pane. We recommend that you configure a separate database or a database and schema combination for write-access purposes.
</aside>

Sigma provides a set of sample data, at no cost, to all customers. The sample database is a great way to let new users become familiar with Sigma without having to connect to corporate data. The connection is not editable, it can be hidden if desired.

<img src="assets/fa9.png" width="600"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Usage
Duration: 20

Sigma provides all customers with extensive reporting on various aspects of user activity. All the reports are built using Sigma and are provided at no-cost to customers. Admins can use this area to get a quick visibility to important KPIs but also leverage Sigmas "drill anywhere" capability to get to the lowest level of detail required.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The usage section does not required customers to do anything, it just starts working as soon as users start using Sigma. Sigma also provides access to logs for customers that are interested in creating their own analysis of user activity.
</aside>

At the time of this QuickStart, the following usage catagories are provided. Each category has many KPI, charts, tables and filters, formatted based on the available data.

**Users:**<br>
Explore user status, activity and licensing. Filter by date range and/or query text.

<img src="assets/fa10.png" width="800"/>

**Document Activity:**<br>
Discover your organization’s most commonly used documents and your top documents users. Filter by date range, Top N, and the number of days since the dashboards were last opened. These insights can assist organizations to audit unused documents and identify documents that drive the most user engagement.

<img src="assets/fa11.png" width="800"/>

**Document Permissions:**<br>
Discover who has permissions for a document, the origin of the permissions, access ype, and who granted permission. These insights can help organizations to improvevsecurity.

<img src="assets/fa12.png" width="800"/>

**Schedule Exports:**<br>
View data on your organization's export tasks and Sendgrid email events.

<img src="assets/fa13.png" width="800"/>

**Materializations:**<br>
Metrics and status of materialization runs with run-times.

<img src="assets/fa16.png" width="800"/>

**Query Summary:**<br>
View a summary of your queries. Available data includes total queries run, queries over 10s, median query time, average query duration, queries by user type, query status, and timeouts. Filter by date range and/or query text.

<img src="assets/fa14.png" width="800"/>

**Embedding:**<br>
View application embedding usage for your organization. Private and Public embeds are not tracked. Each embed URL must include an external_user_id for tracking purposes.

<img src="assets/fa15.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## People
Duration: 20

In Sigma, users are called `People`. 

People can be added manually to Sigma (and in bulk) or they can be added automatically the first time they login to Sigma with SSO or an embedded application. 

When added manually, people receive and email invitation. Once invited, their Sigma account is listed on the `Pending Invitations` section of the `People` page. 

Email invitations and welcome emails can be customized if desired.

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/18661610734739-Manage-People)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma uses email address for each person and the email must be unique. 
</aside>

<img src="assets/fa17.png" width="600"/>

People in Sigma can be deactivated. After you click Deactivate, the user's documents are automatically migrated to the selected persons's `My Documents` folder. The deactivated user's documents will be located in `My Documents` > `Archived Users` > `Folder` (folder title is the deactivated user's name). There is no need to manually transfer all the worksheets/dashboards created by the user, **Sigma does this for you.**

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360045728873-Deactivate-users)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Teams
Duration: 20

Sigma uses teams to organize and manage users in groups.

You can use Sigma to manage user group membership or through your organizations Identity Provider (IdP).

Teams can be `Public` or `Private`.

Public teams are seen and searchable by all members of your Sigma org. Anyone will be able to share documents with public teams.

Private teams will only be visible to members of the team.

For example, in this "Finance Team" there are three users, two accessed Sigma via an embedded application and another logged into Sigma directly. The last user is an admin.

<img src="assets/fa18.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> You can name a team anything you want but when embedding, it is advisable to avoid special characters in names. 
</aside>

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/360037430333-Manage-Teams)

When creating a new team, you are prompted to also create a new workspace (optional). You can use workspaces help organize content, to categorize and share folders and documents. Share them with other users and teams using permission grants.

[Learn more...](https://help.sigmacomputing.com/hc/en-us/articles/4402446409619-Manage-Workspaces)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account Types
Duration: 20

A user's account type determines their highest level of interaction with data and content in Sigma. Each user is assigned a single account type; they can only be assigned one account type at a time.






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