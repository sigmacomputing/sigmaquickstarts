author: pballai
id: administration_audit_logging
summary: administration_audit_logging
categories: administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Getting Started


# Audit Logging

## Overview 
Duration: 5 

This QuickStart **QS** provides an overview of Audit Logging in Sigma. When Audit Logs are enabled for your organization, an additional Snowflake connection will appear to administrative users. This connection provides read access to data related to user-initiated events that occur within your Sigma organization. 

The Audit Log is useful when needing to troubleshoot issues or monitor user activity for security and compliance purposes. 

For example, a user may report they never received the invitation email that the administrator sent to allow access to Sigma. The Audit Log will show that the message was sent to the user and is likely "trapped" elsewhere (is: spam folder).

Since the data is available as a Sigma connection, we can explore it in a Sigma workbook to analyze how users across your organization utilize Sigma.

### Target Audience
Anyone who is trying to monitor lower level activities and details related to Sigma.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="negative">
<strong>NOTE:</strong><br> If the "Audit Log" connection is not available in Sigma (when logged in as Administrator), please contact Sigma support and request it be enabled.
</aside>

### What You’ll Learn
How to access and explore audit logs in Sigma.

### What You’ll Build


![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## **Browse Audit Logs**
Duration: 20

Log into Sigma as `Administrator` and click `Connections` in the left sidebar.

There should be an entry called `Sigma Audit Logs`. Click into that connection:

<img src="assets/al1.png" width="800"/>

From here, we are able to:

 <li>
    <ol type="n"> 
      <li>1: Browse into the "Audit Logs" table directly.</li>
      <li>2: Grant permission for another user to access the log table.</li>
      <li>3: Manage the connection (not recommended to do.)</li>
    </ol>
  </li>

<aside class="postive">
<strong>IMPORTANT:</strong><br> The audit log connection is provided and managed by Sigma. Changing connection parameters may cause the feature to stop working.
</aside>

<img src="assets/al2.png" width="800"/>

Click into the `AUDIT_LOGS` table and we are now in a page layout that is very familiar to Sigma users. 

<img src="assets/al3.png" width="800"/>

Your table will have different row information as Sigma is logging events for your organization. 

Sliding right on the table to see more columns we see some columns have data and some do not (nulls). This is normal and expected as each event will have different characteristics and therefore record different details. 

<img src="assets/al2.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **Structure of Data**
Duration: 20

Audit log records each event into one of several categories. This allows easy analysis and visualization after the event in Sigma.

These categories are stored in the column, `Event Type`:

 <ul>
      <li><strong>ACCESS_SIGMA:</strong> User access and interactions with passwords.</li>
      <li><strong>USER_ACCOUNTS:</strong> Admin interactions with member accounts and user invitations.<li>
      <li><strong>ACCOUNT_TYPES:</strong> Admin interactions with account type configurations and member assignments.</li>
      <li><strong>TEAMS:</strong> 	Admin interactions with team settings and member assignments.</li>
      <li><strong>CONNECTIONS:</strong> 	Admin interactions with database connection configurations.</li>
</ul>

For all events, there is a set of `Base Data` that is included for each row of data.

Each category has distinct `Events` and `Event Entry Data` that is related to the category.

As there is a large number of options and they are subject to change over time, we will not list them here. 

[The current list is available here.](https://help.sigmacomputing.com/hc/en-us/articles/14113810205715)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **Exploring the Audit Log**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->



CLick the `Explore` button.






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