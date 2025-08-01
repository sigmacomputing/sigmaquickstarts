author: pballai
id: fundamentals_8_administration_v3
summary: fundamentals_8_administration_v3
categories: Fundamentals
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2025-03-13

# Fundamentals 08: Administration

## Overview 
Duration: 5

This QuickStart introduces essential administrative features and considerations within Sigma. Whether you're managing your instance, setting up connections, configuring data governance rules, or customizing user interactions, this guide provides a foundational overview.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some features may carry the "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here is how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Administrators (admin) who are new to Sigma and want a quick overview of the available features common to their role. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
How to leverage the available administrative functions in Sigma to get things done efficiently and effectively.

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## Accessing Administration
Duration: 20

We will first cover how to access the administrative ("admin") areas of Sigma, and then list and describe each of the available options.

<aside class="negative">
<strong>NOTE:</strong><br> The admin area of Sigma requires a user to have an account type permission of "Admin". Users who do not have this permission will not be able to access any administrative function and the option is not displayed on the interface either.
</aside>

Admin users can access the admin page one of two ways as shown:

<img src="assets/fa1.png" width="800"/>

We have centralized all the admin options on this one page as shown:

<img src="assets/fa2.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma provides each client with access to our live technical support team via the "?" icon. 

You chat with a live Sigma support team member during the hours listed.

Ask us anything; for example, how do I do a moving average for the last 3 days or why am I getting this error message? 

Live chat is equipped to handle even the most complex questions.

If you need to, you can even schedule a 30min meeting with this team to discuss whatever you are trying to solve, via web-meeting.
</aside>

In addition to `Live chat`, there are many other options exposed by clicking on the <img src="assets/helpicon.png" width="30"/> icon:

<ul>
    <li><strong>Documentation:</strong> Explore Sigma's self-service resource library for documentation.</li>
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

Click here to see [What's new in Sigma](https://help.sigmacomputing.com/changelog)

In addition, Sigma publishes new feature announcements in [QuickStart](https://quickstarts.sigmacomputing.com/firstfridayfeatures/) format, once per month.

Next, we will cover each area inside administration, at a high-level.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account - General Settings
Duration: 20

Navigate to `Administration` > `Account` > `General Settings`:

<img src="assets/fa28.png" width="800"/>

`General Setting` provides additional control of:

 <ul>
      <li><strong>Site</strong> </li>
      <li><strong>Custom Home Pages</strong> </li>
      <li><strong>Account Timezone</strong> </li>
      <li><strong>Localization</strong> </li>
      <li><strong>Various Other Features</strong> </li>
      <li><strong>Integrations</strong> </li>
      <li><strong>Audit Logging</strong> </li>
      <li><strong>Storage Integrations</strong> </li>
      <li><strong>Custom Plugins</strong> </li>
      <li><strong>Custom Functions</strong> </li>
</ul>

<img src="assets/horizonalline.png" width="800"/>

### Site
`Site` identifies your user account name, cloud provider, data of creation, URL and when the product license will expire. 

Admin users are able to edit `Organization Name` and `Company Login URL` values by clicking the `Edit` button.

<aside class="positive">
<strong>Caution!</strong><br> Changing these settings will break existing document links.
</aside>

<img src="assets/horizonalline.png" width="800"/>

### Custom Home Pages
Sigma Admins can `Enable` this feature, and designate a workbook to use as a custom homepage for an organization or team. The first page of the workbook becomes the custom homepage.

A custom homepage functions as a landing page for its viewers.

For example, embedding specific visualizations along with buttons linking to the fundamental QuickStarts:

<img src="assets/customhomepage.gif">

For more information, see [Set up custom homepages](https://help.sigmacomputing.com/docs/enable-a-custom-homepage)

<img src="assets/horizonalline.png">

### Time
Allows portal-wide timezone preference setting. The default is `UTC`.

For more information, see [Change the account time zone](https://help.sigmacomputing.com/docs/account-time-zone)

<img src="assets/horizonalline.png">

### Locale

***Account Locale***<br>
Allows portal-wide timezone preference for base local for all documents. This may be changed.

For more information, see [Set the organization locale](https://help.sigmacomputing.com/docs/manage-organization-locale#set-the-organization-locale)

***Organization Translations***<br>
Organization translations are centrally managed translation files that translate commonly-used terms across all workbooks. As a result, workbook owners do not need to translate those common terms in each individual workbook.

For more information, see [Manage organization translation files](https://help.sigmacomputing.com/docs/manage-organization-translation-files)

<img src="assets/horizonalline.png">

### Features
This is a grouping of features that do not necessitate their own group. Each feature can be enabled/disabled using the slide control.

***CSV upload:***<br>
Enable CSV upload for connections with write access configured. 

For more information, see [Enable or disable CSV upload](https://help.sigmacomputing.com/docs/enable-csv-upload)

***Sample connection:***<br>
Include Sigma's sample connection in list of connections to select from.

For more information, see [Sigma's sample connection](https://help.sigmacomputing.com/docs/sigmas-sample-connection)    

***Public embeds:***<br>
Allow public embedding of Sigma documents. 

For more information, see [Create and manage a public embed](https://help.sigmacomputing.com/docs/create-and-manage-a-public-embed)

***License upgrade request:***<br>
Allow users to request a license with more permission from admin (e.g. from `Lite` to `Essentials`). 

For more information, see [Enable or disable upgrade requests](https://help.sigmacomputing.com/docs/license-upgrade-requests#enable-or-disable-upgrade-requests)

***Comments:***<br>
Allow commenting on Sigma documents. 

For more information, see [Enable or disable comments](https://help.sigmacomputing.com/docs/disable-commenting)

***Annotations:***<br>
Capture elements as images to annotate as comments in Sigma documents. Captured images will be stored in a Sigma managed cloud for a period of your choosing. The default is for 3 months. 

For more information, see [Manage annotated image ability and storage period](https://help.sigmacomputing.com/docs/manage-annotated-images-in-comments)

<img src="assets/horizonalline.png">

### Integrations
Sigma supports integrations with Slack and dbt.

For more information, see [Manage Slack integrationn](https://help.sigmacomputing.com/docs/integration-for-slack) <img src="assets/slack.png" width="100"/>

For more information, see [Manage dbt Integration](https://help.sigmacomputing.com/docs/configure-dbt-integration)  <img src="assets/dbt.png" width="100"/> 

<img src="assets/horizonalline.png">

### Audit Logging
When Audit Logs are enabled for your organization, an additional Snowflake connection will appear to administrative users. This connection provides read access to data related to user-initiated events that occur within your Sigma organization.

Sigma also provides a pre-built dashboard (`Usage Dashboard`) that customers can access for free. It provides comprehensive information on how Sigma is being used. [Information on that is here.](https://help.sigmacomputing.com/docs/usage-overview)

There is a [QuickStart on audit logging basics](https://quickstarts.sigmacomputing.com/guide/administration_audit_logging/index.html?index=..%2F..index#0)

<aside class="negative">
<strong>NOTE:</strong><br> This feature may be available in Sigma trials. If interested, contact Sigma support via the help chat.
</aside>

#### Sigma Audit Logs
Sigma provides an extensive log of user activity in the audit database. In addition, we also log all emails sent and support chats with Sigma, for your convenience:

<img src="assets/fa1b.png" width="600"/>

For more information, see [Enable audit logging](https://help.sigmacomputing.com/docs/enable-audit-logging)

#### Create an Audit Logs Storage Integration
Some customers prefer to save export logs in their own cloud. Sigma supports these providers:

<img src="assets/fa1a.png" width="600"/>

For more information, see [Export audit log data to cloud storage](https://help.sigmacomputing.com/docs/export-audit-log-data-to-cloud-storage)

<img src="assets/horizonalline.png">

### Custom Plugins
Sigma supports plugin elements in workbooks. Plugins are third-party applications built to add additional functionality into Sigma.

For more information, see [Get started with custom plugins](https://help.sigmacomputing.com/docs/get-started-with-custom-plugins)

There is a [QuickStart that covers this topic here](https://quickstarts.sigmacomputing.com/guide/administration_plugins/index.html?index=..%2F..index#0)

<img src="assets/horizonalline.png">

### Custom Functions
Admins can define custom functions to represent frequently used complex calculations that combine logic, aggregates, and other types of operations. There are many advantages to adding custom functions to your Sigma practice:

 <ul>
      <li>Use custom functions to encode business logic instead of repeating it. </li>
      <li>Encapsulate complex calculations that are common business use cases, for easier use.</li>
      <li>Expose your proprietary warehouse functions, making them consumable.</li>
</ul>

For more information, see [Create reusable custom functions](https://help.sigmacomputing.com/docs/custom-functions)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account - Branding Settings
Duration: 20

Brand settings are the next tab over, in `Account Settings`, and provides a way to customize Sigma towards your organizations fonts, color themes and email content.

### Custom Fonts
Sigma supports custom fonts for workbooks, worksheet visualizations, and dashboards. 

Custom fonts can be uploaded at the organization level and used on any workbooks, worksheet visualizations, and dashboards in that organization.

Organizations are not limited to one custom font.

Accepted formats: .ttf, .otf, .woff, .woff2

For example, we can easily add a new font, "Coffee House" in this case:

<img src="assets/fa3.png" width="600"/>

[Upload custom fonts](https://help.sigmacomputing.com/docs/custom-fonts)

<img src="assets/horizonalline.png">

### Workbook Themes
Sigma supports creation of workbook themes. Admin can customize sets of colors, fonts, spacing, and more.

For example, we can easily add a new theme and set it as the `Organizations Default` so that it is the first choice for all content:

<img src="assets/fa4.png" width="400"/>

There are many options available when you scroll the list, to help you achieve the look required. 

For more information, see [Create and manage workbook themes](https://help.sigmacomputing.com/docs/create-and-manage-workbook-themes)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Authentication
Duration: 20

#### 2-Factor Authentication
All Sigma instances require 2-factor authentication.

For more information, see [Mandatory two-factor authentication for accounts](https://help.sigmacomputing.com/docs/two-factor-email-authentication#enable-two-factor-authentication)

[Learn more about 2-Factor authentication with Sigma](https://help.sigmacomputing.com/docs/two-factor-email-authentication#enable-two-factor-authentication)

<img src="assets/horizonalline.png" width="800"/>

Sigma supports multiple authentication methods including:

 <ul>
      <li><strong>Password:</strong> Sigma prompts new organization members to create a unique password for their Sigma account and login.</li>
      <li><strong>SAML or Password:</strong> Organization members authenticate with either SSO or a unique password.</li>
      <li><strong>SAML:</strong> Sigma authenticates organization member accounts through the Single Sign-On (SSO) protocol you provide.</li>
      <li><strong>OAuth or Password:</strong> Sigma authenticates organization member accounts through OAuth Single Sign-On (SSO) or a unique password. This option supports OAuth with Snowflake.</li>
      <li><strong>OAuth:</strong> Sigma authenticates organization member accounts through OAuth Single Sign On (SSO). This option supports OAuth with Snowflake.</li>
</ul>

Sigma supports **Snowflake Key-pair Authorization** and there is a [QuickStart on how to use that.](https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index.html?index=..%2F..index#0)

For more information, see [Manage Authentication](https://help.sigmacomputing.com/docs/manage-authentication)

### Authentication Methods & Options:
All configuration is accessed by clicking the `Edit` button. 

The current values for Guest Account and 2-Factor Authentication are shown on the main page for your convenience. 

In the example below, we are allowing SAML or a Sigma password to be used to log in. 

<img src="assets/fa6.png" width="800"/>

#### Guest Access
Guest Access is enabled (off by default). Guest user accounts are recommended when working with external vendors.

Guest users cannot view or request access to content outside of their Admin-assigned team(s). 

This feature is opt-in and must be enabled by an organization admin before guest users can be invited to your organization.

For more information, see [Guest User Accounts](https://help.sigmacomputing.com/docs/guest-user-accounts)

<img src="assets/horizonalline.png" width="800"/>

#### Session Length
The maximum number of hours that a user can be logged in before having to login again.

<img src="assets/horizonalline.png" width="800"/>

#### Inactivity Timeout
Sigma allows you to configure inactivity timeouts. These timeouts ensure users are automatically logged out after a certain length of inactivity in the product. 

<img src="assets/horizonalline.png" width="800"/>

#### Identity provider login URL

Sigma can be configured to use Single Sign-On (SSO) Authentication with any platform that supports SAML (ie Okta, OneLogin and Google SSO).

For more information, see [Use custom account types with your IdP](https://help.sigmacomputing.com/docs/use-custom-account-types-with-your-idp)

Okta also provides the `X509 certificate` as well.

There is a QuickStart covering [Single Sign-On with Sigma and Okta](https://quickstarts.sigmacomputing.com/guide/administration_sso_okta/index.html?index=..%2F..index#0)

<img src="assets/horizonalline.png">

#### Company Domain Sign-up
When you use the `Password` authentication method, you can also select if you would like to add any domains to the allowlist. By default, new users can only sign up through an invite.

Adding your company's email domain allows anyone with a company email to create a Sigma account without a personalized invite.

Sigma prompts new users to enter their email from a domain on the allowlist. After confirming the email, the user can register as a Sigma user.

### Export Authentication

#### Authorized Domains
Sigma Admins may choose to control which domains can receive emails, Google Sheets or Google Drive exports from Sigma. 

**If no domains are declared authorized, users can export reports to any email address.**

For more information, see [Restrict export recipients and frequency](https://help.sigmacomputing.com/docs/restrict-export-recipients#restrict-domains)

<img src="assets/horizonalline.png">

### Restrict API access by IP address
Restrict access to the Sigma API for your organization by adding IP addresses to an allowlist. When you enable the allowlist and add IP addresses or IP address ranges using CIDR notation, only users making requests from allowed IP addresses can make successful API requests.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connections
Duration: 20

The `Connections` page provides configuration information so that Sigma is able to connect to your cloud data warehouse. 

For new Sigma customers (and trial accounts), only the `Sigma Sample Database` will be available initially.

<aside class="negative">
<strong>NOTE:</strong><br> Sigma provides a set of sample data, at no cost, to all customers. The sample database is a great way to let new users become familiar with Sigma, without having to connect to corporate data. The connection is not editable and it can be hidden if desired.
</aside>

Administrators can click `Create Connection` to configure additional connections:

<img src="assets/fa7a.png" width="800"/>

At the time of this QuickStart, eight vendors are supported. 

Clicking on the desired icon will bring up the configuration dialogue specific to that vendor:

<img src="assets/fa7.png" width="800"/>

For more information, see [Connect to data sources](https://help.sigmacomputing.com/docs/connect-to-data-sources)

### Whitelisting Sigma
Depending on the security parameters of your organization, it may be necessary to add Sigma's IP addresses to your allowed list of IPs (whitelist).

Sigma's egress IP addresses are listed on all individual connection pages in your Sigma Admin Portal:

For example, selecting Snowflake displays the egress IP addresses:

<img src="assets/fa8.png" width="800"/>

### Write-Back
Another important configuration is warehouse write-back access. This is only required for specific Sigma features. If you are not using these features, it is not required.

Granting write-back to a database enables the use of several Sigma features:

[CSV upload](https://help.sigmacomputing.com/docs/upload-csvs)<br>
[Materialization](https://help.sigmacomputing.com/docs/materialization)<br>
[Dataset warehouse views](https://help.sigmacomputing.com/docs/create-and-manage-workbook-warehouse-views)<br>
[Input Tables](https://help.sigmacomputing.com/docs/intro-to-input-tables)

By the way; **Sigma input tables are a game-changer,** and if you have not seen why, [check out this QuickStart.](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0)

<aside class="negative">
<strong>NOTE:</strong><br> Not all features are available for each connection type. Refer to Sigma's documentation for the current list of supported vendors.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> By design, the database destination that you configure for write access is not visible in the Sigma connection explorer pane. We recommend that you configure a separate database or a database and schema combination for write-access purposes.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Usage
Duration: 20

Sigma provides all customers with extensive reporting on various aspects of user activity. All the reports are built using Sigma and are provided at no-cost to customers. Admins can use this area to quickly view important KPIs and leverage Sigma's 'drill anywhere' capability for detailed insights.

The standard reports can also be customized to suit unique requirements.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The usage section does not require customers to do anything, it just starts working as soon as users start using Sigma. Sigma also provides access to logs for customers that are interested in creating their own analysis of user activity.
</aside>

[To learn more about external logging, please review this QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_audit_logging/index.html?index=..%2F..index#0)

At the time of this QuickStart, the following usage catagories are provided. Each category has many KPI, charts, tables and filters, formatted based on the available data.

**Users:**<br>
Explore user status, activity and licensing. Filter by date range and/or query text.

<img src="assets/fa10.png" width="800"/>

**Document Activity:**<br>
Discover your organization’s most commonly used documents and your top documents users. Filter by date range, Top N, and the number of days since the dashboards were last opened. These insights can assist organizations to audit unused documents and identify documents that drive the most user engagement.

<img src="assets/fa11.png" width="800"/>

**Document Permissions:**<br>
Discover who has permissions for a document, the origin of the permissions, access type, and who granted permission. These insights can help organizations to improve security.

<img src="assets/fa12.png" width="800"/>

**Scheduled Exports:**<br>
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

## Users
Duration: 20

Users can be added manually to Sigma using the `Administration` > `Usser` interface. This interface also supports adding multiple users at a time (bulk loading).

When added manually, users receive an email invitation. Once invited, their Sigma account is listed on the `Pending Invitations` section of the `Users` page. 

Email invitations and welcome emails can be customized if desired.

Users can be added automatically the first time they login to Sigma using an IDP, or when using Sigma embedded into another application. 

Sigma's REST API also supports adding new users ("members in the API). The more information, see[API Reference](https://help.sigmacomputing.com/reference/get-started-sigma-api)

There are also [API code samples ("recipes")](https://help.sigmacomputing.com/recipes), demonstrating common API operations.

There is a [QuickStart that covers API Recipes](https://quickstarts.sigmacomputing.com/guide/administration_api_code_samples/index.html?index=..%2F..index#0)

For more information, see [Invite new organization members](https://help.sigmacomputing.com/docs/invite-new-organization-members)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma uses email address for each person and the email must be unique. 
</aside>

The `Users` page has a filter that is a convenient way to see only the categories of users you are interested in:

<img src="assets/fa17.png" width="800"/>

Users in Sigma can be deactivated, but never fully deleted. Deactivated users cannot access Sigma.

After you click `Deactivate`, the user's documents are automatically migrated to the selected persons's `My Documents` folder. The deactivated user's documents will be located in `My Documents` > `Archived Users` > `Folder` (folder title is the deactivated user's name). 

There is no need to manually transfer all the worksheets/dashboards created by the user; **Sigma does this for you.**

For more information, see [Deactivate users](https://help.sigmacomputing.com/docs/deactivate-users)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Teams
Duration: 20

Sigma uses teams to organize and manage users in groups.

You can use Sigma to manage user group membership or leverage your organizations Identity Provider (IdP).

[Manage Users and Teams with SCIM](https://help.sigmacomputing.com/docs/manage-users-and-teams-with-scim)

Teams can be `Public` or `Private`.

Public teams are visible and searchable by all members of your Sigma organization. Anyone can share documents with public teams.

Private teams will only be visible to members of the team.

<aside class="negative">
<strong>NOTE:</strong><br> Teams can be named anything, but it is advisable to avoid special characters in names. 
</aside>

[Teams Documentation](https://help.sigmacomputing.com/docs/manage-teams)

When creating a new team, you are prompted to also create a new workspace (optional). You can use workspaces help organize content, to categorize and share folders and documents. Workspaces can be shared with other users and teams using permission grants.

[Workspaces Documentation](https://help.sigmacomputing.com/docs/manage-workspaces)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Account Types
Duration: 20

`Account Types` allow different users different rights and are part of Sigma’s RBAC (role-based access control) system.

A user's account type determines their highest level of interaction with data and content in Sigma. 

Each user is assigned a single account type; they can only be assigned one account type at any time.

Sigma provides five default account types, which are directly mapped to the four Sigma license types.

<img src="assets/fa19a.png" width="800"/>

<ul>
  <li><strong>View:</strong> Suitable for report consumers who need access to prepared data and insights with baseline interactions.</li>
  <li><strong>Act:</strong> Ideal for collaborative data contributors who actively input and update data.</li>
  <li><strong>Analyze:</strong> Optimized for decision-making data consumers who require more deep-dive capabilities without building workbooks themselves..</li>
  <li><strong>Build:</strong> Designed for data architects, BI analysts, and report builders who model, transform, and analyze data.</li>
</ul>

<aside class="negative">
<strong>NOTE:</strong><br> The Build license also supports system administrators, who have the additional permission to manage organization settings and users etc.
</aside>

Sigma also supports custom account types. These provide a way to restrict users to specific Sigma functionality, and can be named anything, but must be assigned a license type.

For example, a `No-Export` role that does not allow exporting data would look like this, based on the `Analyze` license:

<img src="assets/fa19.png" width="800"/>

For more information, see [Create and manage account types](https://help.sigmacomputing.com/docs/user-account-types)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## User Attributes
Duration: 20

`User Attributes` can be used to provide a customized experience for your Sigma teams, users, or embedded users. 

For example, they can be assigned as a function in a dataset/data-model to provide row-level security.

There are QuickStarts that cover row level security:

[Implementing Row Level Security](https://quickstarts.sigmacomputing.com/guide/security_row_level_security/index.html?index=..%2F..index#0)

[Embedding 06: Row Level Security](https://quickstarts.sigmacomputing.com/guide/embedding_06_row_level_security/index.html?index=..%2F..index#0)

Once you create and assign a user attribute to teams, you can use this functionality in a dataset to enforce row-level security using the function [CurrentUserAttributeText](https://help.sigmacomputing.com/docs/currentuserattributetext) in a formula.  

For example, if we want to restrict a user `QuickStarts View` to only the rows that are in the `East` region, we create a user attribute like this:

<img src="assets/fa20.png" width="500"/>

Then we use a formula on a dataset (that has a column called "Store Region") like this:

```plaintext
Contains(CurrentUserAttributeText("Store_Region"), [Store Region])
```

The user would not be aware of the restriction and the data would be limited to the `East` region rows automatically.

[For more information, see User Attributes](https://help.sigmacomputing.com/docs/user-attributes)

[For more information on User Attributes in Embedded Scenarios](https://help.sigmacomputing.com/docs/embed-url-parameters)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embeds
Duration: 20

The `Embeds` page lists all of the workbooks or dashboards that are active. 

It is common when using Sigma to embed content into another application, that many "embeds" are created. 

This page provides a centralized way to manage them and alerts you to basic configuration issues with an embed.

We are able to either `Reassign embed` or simply delete it any embed (non-JWT only):

<img src="assets/fa21.png" width="800"/>

For those interested in embedding, there is an entire [series of QuickStarts](https://quickstarts.sigmacomputing.com/?cat=embedding) dedicated to getting you going.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tags
Duration: 20

`Version tagging` allows you to employ a software development lifecycle (SDLC) to control workbook versions, using tags. 

For example, Sigma can have `Development`, `Staging`, and `Production` versions of a workbook, and migrate changes as needed. 

This allows you to control which workbook versions are available to specific users, during the development lifecycle.

<aside class="positive">
<strong>IMPORTANT:</strong><br> You can create whatever tagging system works for your organization, based on the tag names.
</aside>

For example, when a workbook is assigned the `Quality_Assurance` tag (in the image below), only the `Quality_Assurance` has access to it for testing:

<img src="assets/fa23a.png" width="600"/>

Once testing is complete, a member of that team might tag the workbook as `Production`, so that end-users can access it.

A summary of all workbooks that are tagged will appear in the corresponding tag page. Drilling into any tag will also show the workbooks assigned that tag:

<img src="assets/fa22.png" width="800"/>

[For more information, see Create and manage version tags](https://help.sigmacomputing.com/docs/version-tagging)

There are QuickStarts that cover tagging:

[Version Tagging with Sigma](https://quickstarts.sigmacomputing.com/guide/administration_version_tagging/index.html?index=..%2F..index#0)

[Embedding 08: Version Tagging](https://quickstarts.sigmacomputing.com/guide/embedding_08_version_tagging/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Scheduled Exports
Duration: 20

The scheduled exports page provides a summary of all exports scheduled to run across all users. 

Admin are able to filter this list and delete scheduled jobs.

<img src="assets/fa24.png" width="800"/>

Sigma also provides extensive reporting on scheduled report usage:

<img src="assets/fa25.png" width="800"/>

For more information, see [Manage organization schedules](https://help.sigmacomputing.com/docs/manage-organization-schedules)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI Settings
Duration: 20

To use AI features in Sigma, you’ll need to select and configure an AI provider.

For more information, see [Configure an AI provider](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization#configure-an-ai-provider)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Customers who have sensitive data may want to use their own warehouse provider in order to prevent exposing data to third party providers.

To keep data under your control, Sigma also supports warehouse-hosted AI models.
</aside>

For more information, see [Configure warehouse AI model integration](https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Please check the documentation link below for the most recent information on Sigma AI.
</aside>

Sigma also provides an optional log of Ask Sigma usage. For more information, see [Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)

There is also a QuickStart: [Create an Ask Sigma Usage Dashboard](https://quickstarts.sigmacomputing.com/guide/administration_ask_sigma_usage_dashboard/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Materializations
Duration: 20

The `Materializations` page summarizes all schedule materialization jobs, last run date, next run date, status, running time and when the data was last used. 

This can be very useful to admin wanting to ensure that jobs are not only running properly, but also that the result sets are being used. **There is no value (but is some cost!) in materializing data that is not being used by the business.** 

Sigma also provides an option to pause jobs that are not being used as shown (number three):

<img src="assets/fa26.png" width="800"/>

Admin are able to jump directly to the object being materialized, simply by clicking the desired item in the `Element / Document` column.

For more information, see [About materialization](https://help.sigmacomputing.com/docs/materialization)

[Materialization QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_materialization/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Warehouse Views
Duration: 20

The `Warehouse Views` page summarizes all views, their status, when they were created, last updated and the owner.

Warehouse views are virtual tables in Snowflake that can be queried using Sigma or any other application in your data ecosystem. Instead of storing data in a Snowflake database table, a view saves a SQL statement that expresses specific query logic defined by the data element or input table in Sigma.

When a warehouse view is created, a live link is established between Snowflake and Sigma. The view references the data element (or input table) as the source of truth and automatically updates to reflect the most recent version of the element’s underlying data. Warehouse views can be especially useful to present the data in a way that's optimized for analysis, without altering the base tables.

<img src="assets/fa27.png" width="800"/>

For more information, see [Review warehouse view details](https://help.sigmacomputing.com/docs/review-warehouse-view-details)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Developer Access
Duration: 20

`Developer Access` provides a way to create client credentials for programmatic access to Sigma. 

It supports the generation of client credentials for Sigma's REST API and/or embedded applications. 

The choice is made after clicking `Create New`:

<img src="assets/da2.png" width="600"/>

The page lists all client credentials and provides a way to revoke them:

<img src="assets/da1.png" width="800"/>

To learn how to access Sigma via API, there is a [QuickStart](https://quickstarts.sigmacomputing.com/guide/sigma_api_with_postman/index.html?index=..%2F..index#0)

There is also an [API Reference](https://help.sigmacomputing.com/reference/get-started-sigma-api)

There are [API code samples](https://help.sigmacomputing.com/recipes) with a corresponding [QuickStart](https://quickstarts.sigmacomputing.com/guide/administration_api_code_samples/index.html?_gl=1*wgqu3c*_gcl_aw*R0NMLjE3MTgzOTg3MDAuQ2p3S0NBancxSy16QmhCSUVpd0FXZUNPRjVqNkh1N2dNcHhtTm1HYWluZlhOY2lRd0VLTkJtZnd5TURCOG1Pa1hDQjd0ODhSaEpUbjlCb0NGXzBRQXZEX0J3RQ..*_gcl_au*MTU3OTYwODI3NC4xNzEzNTc1NDQ4LjEzMjQ1MTQxMTUuMTcxNzE3MTI2Ni4xNzE3MTcxMjY1*_ga*MjAyNzIyMDcwLjE3MTcxODQ4Nzk.*_ga_PMMQG4DCHC*MTcxODczNDU2MS40Ny4xLjE3MTg3MzczOTguNjAuMC4w#0)

To learn how to access Sigma via embedding, there is a [QuickStart series](https://quickstarts.sigmacomputing.com/?cat=embedding)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart we provided a very high-level overview of all the administrative features of the Sigma platform. Please be sure to check out the additional resources list below.

The next QuickStart in this series covers things that are a little [beyond the basics](https://quickstarts.sigmacomputing.com/guide/fundamentals_9_beyond_the_basics_v3/index.html?index=..%2F..index#0), but are common across customers.

**Additional Resource Links**

[Help Center Home](https://help.sigmacomputing.com)<br>
[Sigma Community](https://community.sigmacomputing.com/)<br>
[Sigma Blog](https://www.sigmacomputing.com/blog/)<br>
<br>

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
