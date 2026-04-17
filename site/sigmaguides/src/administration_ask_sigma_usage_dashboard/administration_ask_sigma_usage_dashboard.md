author: pballai
id: administration_ask_sigma_usage_dashboard
summary: administration_ask_sigma_usage_dashboard
categories: administration
environments: web
status: published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-06-16

# Create an Sigma Assistant Usage Dashboard

## Overview 
Duration: 5 

If you've used it before, you know that Sigma's approach to AI is unique, allowing users to launch selected AI results into a workbook for further analysis or sharing immediately after asking a question.

Sigma Assistant breaks down every step AI took to generate its answer. This lets you double-check results, edit any step of the analysis, and work more confidently with AI.

### Usage dashboards
Like any other data, user questions can be mined for patterns that may allow improvements in the way content is designed. For example, what are the users asking about most often? That insight could justify a pre-built asset, saving users the need to search.

### Security
Sigma Assistant usage data is not visible in any of the standard Sigma usage dashboards or audit logs, and requires separate configuration to ensure data security.

This is because the data includes user names as well as the full text of their questions. Sigma recommends configuring a dedicated schema in your warehouse to store this data and granting view privileges to that schema to only the admins who should be able to see this data.

### How Sigma Assistant Logs Are Stored and Accessed
When you enable Sigma Assistant history logging in the admin panel, Sigma automatically creates two components in Snowflake:

**1. Write-Back Table**<br>
Sigma logs every Sigma Assistant query to a Snowflake table.

This table is created in a schema you specify as the write-back destination. In Section 2, we will create dedicated Snowflake resources (database, user, role, etc.), and in Section 3 we will create a Sigma connection to store the historical data—ensuring proper data isolation.

Sigma will not expose this schema in the UI.

The schema must have `CREATE TABLE` privileges.

**2. Auto-Generated View**<br>
Sigma automatically creates a view over the log table so it can be used in dashboards and workbooks.

This view is created in a separate schema of your choosing — typically a schema where Sigma Input Tables and views already live (e.g., QUICKSTARTS.WRITE).

The schema must allow `CREATE VIEW`, and must not be the write-back schema, or Sigma will ignore it.

<aside class="positive">
<strong>IMPORTANT:</strong><br> You do not need to create the view manually. Sigma handles it as long as the permissions and schema locations are valid.
</aside>

Once enabled, Sigma provides a pre-built dashboard that is available to administrative users.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn’t work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Administrators, data analysts, or others looking to monitor Sigma Assistant activities and details related to Sigma.

### Prerequisites

<ul>
  <li>Any modern browser is acceptable.</li>
  <li>Access to your Sigma environment.</li>
  <li>Access to a Snowflake environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown, as basic familiarity is assumed.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Snowflake Free Trial](https://signup.snowflake.com/)</button>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry a "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>
 
![Footer](assets/sigma_footer.png)

## Snowflake Setup
Duration: 5

Before configuring Sigma Assistant, we need a location to store the prompts (questions) that users are asking. We want to ensure this information is isolated in the cloud data warehouse as it contains sensitive information like usernames.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma does not store this data outside the customer warehouse.
</aside>

We will use Snowflake in this QuickStart, but instructions for other warehouses are available [here](https://help.sigmacomputing.com/docs/configure-a-usage-dashboard-for-ask-sigma#configure-a-destination-in-your-warehouse-to-store-ask-sigma-usage-data)

Let's also assume that we want to completely isolate this information from other users in Snowflake and in Sigma. To accomplish that, we will create a dedicated Snowflake role and Sigma connection.

Log into Snowflake as `ACCOUNTADMIN`.

Copy and paste the following SQL script into a new Snowflake SQL worksheet:
```copy-code
-- Use full privileges to create and configure objects
USE ROLE ACCOUNTADMIN;
USE WAREHOUSE COMPUTE_WH;

-- Step 1: Create a dedicated role for Sigma access
CREATE ROLE IF NOT EXISTS ASSISTANT_ADMIN_ROLE;

-- Step 1a: Create user and assign to role
CREATE USER IF NOT EXISTS SIGMA_ASSISTANT_USER
    PASSWORD = 'changeme!'
    DEFAULT_ROLE = ASSISTANT_ADMIN_ROLE
    DEFAULT_WAREHOUSE = COMPUTE_WH
    MUST_CHANGE_PASSWORD = FALSE;

GRANT ROLE ASSISTANT_ADMIN_ROLE TO USER SIGMA_ASSISTANT_USER;
GRANT ROLE ASSISTANT_ADMIN_ROLE TO ROLE SYSADMIN;
GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLE ASSISTANT_ADMIN_ROLE;

-- STEP 2: SETUP FOR ASSISTANT SIGMA DASHBOARD LOGGING
-- Create database and schemas for Assistant logging
-- NOTE: Sigma requires separate schemas for write-back and Ask Sigma logging
CREATE DATABASE IF NOT EXISTS ASSISTANT;
CREATE SCHEMA IF NOT EXISTS ASSISTANT.HISTORY;  -- Write-back schema
CREATE SCHEMA IF NOT EXISTS ASSISTANT.LOGS;     -- Ask Sigma / AI usage logging schema

-- Grant privileges to both schemas
GRANT USAGE ON DATABASE ASSISTANT TO ROLE ASSISTANT_ADMIN_ROLE;
GRANT USAGE ON SCHEMA ASSISTANT.HISTORY TO ROLE ASSISTANT_ADMIN_ROLE;
GRANT CREATE TABLE, CREATE VIEW ON SCHEMA ASSISTANT.HISTORY TO ROLE ASSISTANT_ADMIN_ROLE;
GRANT USAGE ON SCHEMA ASSISTANT.LOGS TO ROLE ASSISTANT_ADMIN_ROLE;
GRANT CREATE TABLE, CREATE VIEW ON SCHEMA ASSISTANT.LOGS TO ROLE ASSISTANT_ADMIN_ROLE;
```

Click the `Run All` option:

<img src="assets/ask_1.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sigma Connection
Duration: 5

Log into Sigma as an administrator and navigate to `Administration` > `Connections`, and click `Create Connection`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> At the time of this QuickStart, Snowflake announced that they will require key pair authentication for service users starting in November 2025. This will be a mandatory requirement, and single-factor password authentication will no longer be supported. This change is part of Snowflake's broader initiative to enhance security and enforce multi-factor authentication (MFA) for all users.
</aside>

In light of the security changes above, we’ll use key pair authentication for this demonstration. There is a QuickStart: [Snowflake Key-pair Authorization](https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index.html?index=..%2F..index#0) if you need assistance setting it up.

Configure the connection as shown, replacing the example values with your own. Be sure to enable write access:

<img src="assets/ask_2.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> In the screenshot above, we used a service account user created during the key pair authentication setup. 

If you encounter the error, "Could not connect to database - JWT token is invalid", the key-pair also needs to be associated with the new user:

ALTER USER SIGMA_ASSISTANT_USER SET RSA_PUBLIC_KEY='<your_public_key>';
</aside>

Click `Create connection`. Sigma will validate the connection. Once complete, we can move on to the next step.

For more information, see [Connect to data sources](https://help.sigmacomputing.com/docs/connect-to-data-sources)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Enable AI
Duration: 5

To use AI features in Sigma, you’ll need to select and configure an AI provider. We’ll use OpenAI for this example, but other providers are supported.

For more information, see [Configure an AI provider](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization#configure-an-ai-provider)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Customers who have sensitive data may want to use their own warehouse provider in order to prevent exposing data to third party providers.

To keep data under your control, Sigma also supports warehouse-hosted AI models.
</aside>

For more information, see [Configure warehouse AI model integration](https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration)

Navigate to `Administration` > `AI settings`, select an AI provider and enter a valid `API key`:

<img src="assets/ask_4.png" width="800"/>

Also configure `AI usage configuration` logging by giving it a place to store the log data:

<img src="assets/ask_4c.png" width="800"/>

For more information, see [Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)

### Select data sources to make available to Sigma Assistant
Now we need to tell Sigma which data sources Sigma Assistant can use. Since we are using third-party AI services like OpenAI, we want to carefully control which data is accessible. This step ensures access is limited to approved or non-sensitive data.

For example, if we want Sigma Assistant to have access to the `Sigma Sample Database > RETAIL > PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` click `Add source` and add it from under the `Connections` option:

<img src="assets/ask_5.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sigma Assistant
Duration: 5

At this point, we follow the `Assistant` workflow rather than the typical Sigma `Create New Workbook` process.

Click the <img src="assets/crane.png" width="45"/> icon, and then select `Assistant`:

We’ll ask a simple question — "How many unique customers do we have?" and direct the AI to use the `CUSTOMER` table:
```copy-code
How many unique customers do we have?
```

<img src="assets/ask_7.png" width="700"/>

<aside class="positive">
<strong>PRO TIP:</strong><br> Directing the AI to specific data sources will result in faster and more accurate responses.
</aside>

Sigma Assistant processes the question and displays an analysis breakdown — including the steps it took, the SQL it generated, and the result. It also offers a follow-up suggestion to continue exploring the data:

<img src="assets/ask_8.png" width="800"/>

Once it's in an exploration, we can rearrange, style, or use any of Sigma’s many powerful features and then save it as a new workbook.

For this simple KPI, a table with just a summary was created to provide the data and the KPI:

<img src="assets/ask_9.png" width="700"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sigma Assistant Dashboard
Duration: 5

Now that we have a question, we can see the results on the Sigma Assistant usage page.

Navigate to `Administration` > `Usage` > `Assistant`.

While we currently have only one record, we can see that Sigma provides a wealth of useful information about questions users are asking, who is asking them (Users), which sources are most used, and overall performance:

<img src="assets/ask_10.png" width="800"/>

With all of this information, customers can deliver a more tailored Sigma experience based on the trends while also working to keep query costs down. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we explored how to securely enable and monitor Sigma Assistant usage in your organization. You now have the foundation to deploy Sigma Assistant securely, monitor its usage, and tailor your content strategy based on real user questions.

**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
