author: pballai
id: embedding_09_dynamic_role_switching_snowflake 
summary: Using Sigma Dynamic Role Switching with Embeds
categories: embedding
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-03-15

# Embedding 09: Dynamic Role Switching with Snowflake

## Overview 
Duration: 5 

This QuickStart introduces you to Sigma embedding using Dynamic Connection & Role Switching with Snowflake; **(DRS)** to limit the data exposed to a user based on values passed to Sigma at runtime. This QuickStart assumes you have already taken the QuickStart [Embedding 1: Prerequisites](https://quickstarts.sigmacomputing.com/guide/embedding_01_prerequisites/index.html?index=..%2F..index#0) so that you have a sample environment to complete the tasks in this QuickStart.

We also recommend you take the the QuickStart [Embedding 3: Secure Embedding](https://quickstarts.sigmacomputing.com/guide/embedding_03_secure_access/index.html?index=..%2F..index#0) as we will build on that content. 

**Some steps may not be shown in detail as we assume you have taken these other two QuickStarts or are familiar with Sigma workflows.**

DRS allows run-time swapping of the Snowflake Warehouse and Role for a Sigma connection. There are ways to leverage this using one or both Warehouse and/or Role along with different methods to restrict data access in Snowflake itself.

This QuickStart will cover how to implement RDS using User Attributes defined in Sigma, with a Secure Embed.

Many customers will use Snowflake's column masking functionality and also also manage their Snowflake Row Access Policy in a Table. Sigma fully supports these methods although we want to keep this simple and focused on the main task; DRS. 
 
In light of that, we will just use trial accounts and the provided Snowflake `AccountAdmin` Role for the scripts we will run in Snowflake.

 ### Target Audience
Semi-technical users who will be aiding in the planning or implementation of Sigma. Limited SQL and technical data skills are needed to do this QuickStart. It does assume some common computer skills like installing software, using Terminal, navigating folders and edit/copy/paste operations.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>A working web server based on Node.js as demonstrated in the QuickStart Embedding 1: Prerequisites</li>
  <li>Some content to embed. You can embed a workbook, Table or Visualization.</li>
  <li>Downloadable project files discussed later in this document.</li>
  <li>A Snowflake account with the proper administrative and security admin access.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you do not use production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Snowflake Free Trial](https://signup.snowflake.com/)</button>

<ul>
  <li></li>
    <li>Node.js and required Packages (all free, discussed in prior QuickStarts in detail):
        <ul>
        <li>Express</li>
        <li>Node-supervisor</li>
        <li>crypto (included with Node.js installation)</li>
        </ul>
    </li>
</ul>

### What You’ll Learn
The exercises in this QuickStart will discuss and walk you through the steps to implement DRS with User Attributes (**UA**).

### What You’ll Build
We will embed Sigma content inside a Node.js web application, passing runtime parameters to configure the embed and demonstrate limiting data based on passed Snowflake Warehouse and/or Role.

![Footer](assets/sigma_footer.png)
<!-- END -->

## **Snowflake Data Configuration**
Duration: 10

Let's start by logging into our Snowflake trial account, verify we are using an AccountAdmin role and that there is a Warehouse for us to use:

<aside class="negative">
<strong>NOTE:</strong><br> The default Warehouse already exists when using a Snowflake Trial account.
</aside>

<img src="assets/drs1.png" width="800"/>

Our Warehouse name is `COMPUTE_WH` and is started for us.

Navigate to `Worksheets` and click the button `+ Worksheet`:

<img src="assets/drs2.png" width="800"/>

Click on the 3 vertical dots (as shown below) and rename the Worksheet to `Sigma DRS Configuration Scripts`.<br><br>

<img src="assets/drs3.png" width="400"/>

We will proceed slowly now, cutting and pasting operations one by one so that we can clearly see what is happening as we go. Comments are included for those less familiar with Snowflake commands.

Confirm or change your working Role and Warehouse to `ACCOUNTADMIN` and `COMPUTE_WH` as:

<img src="assets/drs6.png" width="700"/>

Copy and paste this code into the new Worksheet:
```code
// SECTION 1: DATA CONFIGURATION
// ---------------------------------------------------------------------------------------------------------------

// 1: CREATE OR REPLACE DATABASE DRS
CREATE OR REPLACE DATABASE SIGMA_DRS;
USE DATABASE SIGMA_DRS;
```

Highlight the command `CREATE OR REPLACE DATABASE SIGMA_DRS;` and click the run button <img src="assets/drs5.png" width="30"/>
 in the upper right corner.

We should get a message (#2 in the screenshot) that the command was successful. 

Click the `Databases` tab and refresh the list. 

We now have a new Database called `SIGMA_DRS`in our Warehouse.

<img src="assets/drs4.png" width="800"/>

Now lets create a new Schema in our database. Copy/Paste and run this command:
```plaintext
// 2: CREATE A NEW SCHEMA TO HOLD OUR FUTURE SAMPLE DATA TABLE:
CREATE SCHEMA IF NOT EXISTS DRS_DATA;
```

Results should be as follows. Note the selection of current Database / Schema is switched to our new one for us.

**We may have to refresh the Database objects list if the new Schema is not present after running the command.**

<img src="assets/drs7.png" width="800"/>

Next step we will create an empty table to hold a very small (30 rows) of sample data. 

Same operation please:

```code
// 3: CREATE THE SAMPLE DATA TABLE SCHEMA after switching context to drs.public.
CREATE OR REPLACE TABLE SIGMA_DRS.DRS_DATA.DRS_SAMPLE_DATA (
store_region varchar,
cust_key varchar,
order_number varchar,
date varchar,
quantity varchar,
cost varchar,
price varchar,
product_type varchar,
product_family varchar,
product_name varchar,
store_name varchar,
store_state varchar,
store_city varchar
);
```

Result will be a new Table with our columns defined. All columns are varchar as that is not important in this exercise:

<img src="assets/drs8.png" width="800"/>

Do this QuickStart we will load our sample data from a public S3 bucket. We will copy the data into a Snowflake Stage and them load it from the Stage into our Table.

Copy/Paste and run the following commands **one at a time** so we can observe the success messages:

```code
// 4: CREATE OR REPLACE SCHEMA FOR EXTERNAL STORAGE OF CSV FILE
CREATE STAGE IF NOT EXISTS S3_DATA URL='s3://sigma-quickstarts-main/embedding/DRS_Sample_Data.csv';

// 5: COPY INTO SE_INTERNAL_DB.SCHEMA_PHIL_BALLAI.DRS_Sample_Data  FROM  's3://sigma-quickstarts-main/embedding/DRS_Sample_Data.csv';
COPY INTO SIGMA_DRS.DRS_DATA.DRS_SAMPLE_DATA FROM @S3_DATA;

// 6:CONFIRM DATA IS LANDED IN SNOWFLAKE TABLE:
SELECT * FROM DRS_SAMPLE_DATA;
```

The last command should list the 35 rows. Notice that there are 20 values in `STORE_REGION` for East, 10 for West and the rest are South but there will be no Role for South so only the Executive Role will see those extra 5 rows. We will use the STORE_REGION column to limit our data in Sigma later:

<img src="assets/drs9.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Snowflake Role Configuration
Duration: 10

Now that we are familiar with using cut/paste into the Snowflake Worksheet we can move a little faster. We need to create a few Roles in Snowflake so that Sigma can leverage them later. 

Copy/Paste and run section 2 as a group of commands (highlight all the code in Snowflake and click the run arrow) and make sure you see a success message:

```code
// ----------------------------------------------------------------------------------------------------------
// SECTION 2: ROLE CONFIGURATION
// ----------------------------------------------------------------------------------------------------------

// 1: CREATE ROLES FOR OUR USE CASES:
CREATE OR REPLACE ROLE DRS_Executive;
CREATE OR REPLACE ROLE DRS_West;
CREATE OR REPLACE ROLE DRS_East;

// 2: GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLES
GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLE DRS_Executive ;
GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLE DRS_West;
GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLE DRS_East;

// 3: GRANT USAGE PERMISSION ON THE DATABASE TO NEW ROLES:
GRANT USAGE ON DATABASE SIGMA_DRS TO DRS_Executive;
GRANT USAGE ON DATABASE SIGMA_DRS TO DRS_West;
GRANT USAGE ON DATABASE SIGMA_DRS TO DRS_East;

// 4: GRANT SELECT ON SCHEMA TO NEW ROLES:
GRANT USAGE ON SCHEMA SIGMA_DRS.DRS_DATA TO DRS_Executive;
GRANT USAGE ON SCHEMA SIGMA_DRS.DRS_DATA TO DRS_West;
GRANT USAGE ON SCHEMA SIGMA_DRS.DRS_DATA TO DRS_East;

// 5: ALLOW NEW ROLES TO QUERY TABLE WE CREATED:
GRANT SELECT ON ALL TABLES IN SCHEMA SIGMA_DRS.DRS_DATA TO ROLE DRS_Executive;
GRANT SELECT ON ALL TABLES IN SCHEMA SIGMA_DRS.DRS_DATA TO ROLE DRS_West;
GRANT SELECT ON ALL TABLES IN SCHEMA SIGMA_DRS.DRS_DATA TO ROLE DRS_East;
```

You should receive a message in Snowflake `Statement executed successfully.`

![Footer](assets/sigma_footer.png)
<!-- END -->

## Snowflake RLS Policy Configuration
Duration: 10

We are now ready to define our Snowflake Row Access Policy. Same process as before with these new commands:

```code
// ----------------------------------------------------------------------------------------------------------
// SECTION 3: CREATE ROW ACCESS POLICY BASED ON REGION COLUMN
// ----------------------------------------------------------------------------------------------------------

// 1: SETUP AND CREATE ROLE ACCESS POLICY
USE ROLE ACCOUNTADMIN;
USE SIGMA_DRS.DRS_DATA;
CREATE OR REPLACE ROW ACCESS POLICY DRS_REGION
    AS (STORE_REGION STRING) RETURNS BOOLEAN ->
    CASE WHEN 'DRS_EXECUTIVE' = CURRENT_ROLE() THEN TRUE
         WHEN 'DRS_WEST' = CURRENT_ROLE() AND STORE_REGION = 'West' THEN TRUE
         WHEN 'DRS_EAST' = CURRENT_ROLE() AND STORE_REGION = 'East' THEN TRUE
         WHEN 'ACCOUNTADMIN' = CURRENT_ROLE() THEN TRUE
    ELSE FALSE
END;

SHOW ROW ACCESS POLICIES;

// 2: APPLY THE ROW ACCESS POLICY TO THE TABLE
ALTER TABLE SIGMA_DRS.DRS_DATA.DRS_SAMPLE_DATA
ADD ROW ACCESS POLICY DRS_REGION
    ON (STORE_REGION);
```    

In this next section we can run the commands for each role by themselves and observe how many rows are returned.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Replace the "YOUR SNOWFLAKE USERNAME HERE" (remove the brackets too) with your Snowflake username.
</aside>

```code
// ----------------------------------------------------------------------------------------------------------
// SECTION 5:  TEST OUT ROLES AND SEE DIFFERENT RESULTS. *** RUN ONE ROLE AT A TIME ***
// ----------------------------------------------------------------------------------------------------------

// 1: FOR TESTING IN SNOWFLAKE, GRANT THESE ROLES TO YOUR SNOWFLAKE USERNAME:
GRANT ROLE DRS_Executive TO USER {YOUR SNOWFLAKE USERNAME HERE};
GRANT ROLE DRS_West TO USER {YOUR SNOWFLAKE USERNAME HERE};
GRANT ROLE DRS_East TO USER {YOUR SNOWFLAKE USERNAME HERE};

// 2: EXECUTIVE = 35 ROWS
USE ROLE DRS_EXECUTIVE;
SELECT * FROM DRS_SAMPLE_DATA;

// 3: EAST = 20 ROWS
USE ROLE DRS_EAST;
SELECT * FROM DRS_SAMPLE_DATA;

// 4: WEST = 10 ROWS
USE ROLE DRS_WEST;
SELECT * FROM DRS_SAMPLE_DATA;
```

Notice that when you ran the command to 1select from the table1 using the role `DRS_WEST` that only 10 rows are returned. 

This is expected and we change the Role to DRS_EAST or DRS_Executive to see different row counts.

<img src="assets/drs13.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Applying DRS in Sigma
Duration: 10

Sigma supports dynamically changing the Warehouse and Role at embedded runtime. 

First, we need to add a `User Attribute` in Sigma for our Connection / Role to evaluate.

In Sigma, navigate to `Administration` / `User Attributes`.

Configure the new User Attibute as shown:

<img src="assets/drs20.png" width="800"/>

Snowflake will evaluate the passed value as a Role assignment. 

Create another `User Attribute` for `Warehouse` as shown:

<img src="assets/drs33.png" width="800"/>

Navigate to `Administration` / `Connection` and edit the connection called `Snowflake Trial Account`.

Click the <img src="assets/drs22.png" width="30"/> bars in `Role` and the new User Attribute called `DRS_REGION` should be available. 

Do the same for `Warehouse`.

Save the connection (you will need to supply your Snowflake account password again).

### Create a Connection to Snowflake
From Sigma / `Administration` / `Connections`, create a new connection in Sigma to our Snowflake trial account.  

[Creating Snowflake Connection online help is here](https://help.sigmacomputing.com/docs/connect-to-snowflake)

You will need your Snowflake details to connect. To get the account url click as shown below:

<aside class="negative">
<strong>NOTE:</strong><br> The account details shown here are expired so do not attempt to reuse them.
</aside>

<img src="assets/drs14.png" width="800"/>

Use this Account URL to configure a new Connection in Sigma, replacing the information for your Snowflake instance:

<img src="assets/drs15.png" width="700"/>

<aside class="postive">
<strong>IMPORTANT:</strong><br> The two numbered items in the above screenshot are the controls that allow you to change from static values for Warehouse and Role to dynamic values based on value passed by the Parent Application at runtime when the embed is loaded.
</aside>

### Create New Sigma Team
Create a new Sigma / `Administration` / `Team called` `DRS_Team`. 

We will use this later to control which users have rights to access the Sigma workbook. 

Accessing the workbook does not automatically mean that users also get to see all the data, since we will be limiting that based on their Snowflake Role. 

![Footer](assets/sigma_footer.png)
<!-- END -->

## Create Sigma Embed Content
Duration: 10

Create a new workbook in Sigma and select the new Snowflake connection we just created. 

Use the `DRS_SAMPLE_DATA` table and all columns. 

There should be 35 rows shown:

<img src="assets/drs29.png" width="800"/>

Lets add two `Text boxes` to the workbook Page to show the current user's Role and Warehouse. Configure each text box as follows:

<aside class="negative">
<strong>NOTE:</strong><br> Pay attention when defining User Attributes and Functions as there is case sensitivity that can cause errors when case does not match.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> After adding a text element, hit the "=" key to bring up the function bar and then paste the full text shown below. Then hit "Enter" to accept that entry.
</aside>

**ROLE TEXTBOX FUNCTION:**
```plaintext
=CurrentUserAttributeText("DRS_WAREHOUSE")
```
**WAREHOUSE TEXTBOX FUNCTION:**
```plaintext
=CurrentUserAttributeText("DRS_REGION")
```

The workbook now looks like this. Some additional text description was added to each text box but that is optional. Add text after the function is set and showing a value. Then just type the text you want, either before or after the returned value:

<img src="assets/drs30.png" width="800"/>

The values initially shown are the `User Attribute` default values we set earlier.

Share the workbook with the `DRS_Team` with `Can View` access.

`Create an Embed` for the workbook and copy off the `Embed Path` for use in our embed-api.js. 

`Save` and `Publish` the workbook. 

We are now ready to use this workbook embedded in our parent application.

![Footer](assets/sigma_footer.png)
<!-- END -->

## Embed the workbook
Duration: 10

We will move through this quickly, as it is assumed you have done this operation before in earlier QuickStarts in the Embedding Series. If not, go back and review them as mentioned in the Overview section of this QuickStart.

[Click here to download sigma_embed_drs.zip](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/embedding_2/sigma_embed_drs.zip)

The zip file contains these two files:

**index.html:** the web page that contains the iframe we are embedding into. No changes are required for this file.

**embed-api.js:** a JavaScript routine that sets up the services required and configuration of the Sigma options. This is a example of an `Embed API`.

### Install Node Packages for Folder

If you haven't installed Node already, please do so by referring to section 3 of the [QuickStart: Embedding 01: Prerequisites.](https://quickstarts.sigmacomputing.com/guide/embedding_01_prerequisites/index.html?index=..%2F..index#2)

If you have already installed Node, recall that we still need to install the required Node packages for our new `sigma_embed_drs` folder that was created when we unzipped the download into the `sigma_embedding` folder.

Open a new Terminal session from the folder `sigma_embed_drs` and run this command:

**Run the command tro install the Express web-server:**
```code
npm init
```

As in the prerequisites QuickStart, accept all the defaults by pressing enter until completed.

**Run the command (unless previously installed globally):**
```code
npm install express
```

**Run the command:**
```code
npm install supervisor
```

### Edit embed-api.js
Open embed-api.js in a text editor and review all the comments (lines starting with “//”). 

**Required Changes:**

We made some changes for you, to pass the tag to Sigma (and add it to the URL) at runtime. 

Section 6 of `embed-api.js` should look like this:

<img src="assets/drs18.png" width="800"/>

Start node in Terminal:
```code
cd\site
supervisor embed-api.js
```

Browse to:
```code
http//localhost:3000
```

Our application should render with the workbook embedded and showing 35 rows as we have not applied any DRS in Sigma yet. We are just using the hard coded values in the Sigma Snowflake Connection we added earlier for Role.

<aside class="negative">
<strong>NOTE:</strong><br> Even though we set the values shown for Role and Warehouse, these also happen to be the defaults we set for each Sigma User Attribute. These will change as we pass other values.
</aside>

<img src="assets/drs31.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Test Different Roles
Duration: 5

To save time we will not worry about changing embed users in embed-api.js. 

We will just change the `Role` the embed user configured in embed-api.js uses. 

You can create different values in embed-api.js for `email address`, `userid` and `account type` if you prefer; that is not really the point of the exercise but will also work as expected.

In `embed-api.js`, add this one line of code as shown to section 6:

<img src="assets/drs23a.png" width="800"/>

Snowflake will use this to evaluate against it's Row Access Policy we created in Step 4 of this QuickStart.

`Save` embed-api.js.

Refresh the browser. We should only return 20 rows and not the full 36. Only `STORE_REGION = EAST` should exist in the Table:

<img src="assets/drs23.png" width="800"/>

Go ahead and change embed-api.js to use the `DRS_WEST` role. We expect that will return only 10 rows:

<img src="assets/drs24.png" width="800"/>

For completeness, change embed-api.js to use the `DRS_Executive` role. We expect that will return all 35 rows including the South region rows:

<img src="assets/drs25.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Warehouse Switching
Duration: 5

Given we have already guided on how to configure all of this, we will step through this example pretty quickly.

<aside class="postive">
<strong>IMPORTANT:</strong><br> The Warehouse attribute allows you to dynamically change the value of the warehouse based on the user role. This is beneficial because it allows you to create separate warehouses for every client and easily monitor the compute costs incurred per client.

You can also monetize this by providing separate warehouses for large customers, rather than combining small and large customers in one warehouse.
</aside>

We already created a User Attribute for Warehouse in Sigma and also created a second Warehouse in Snowflake earlier. 

### Create Warehouse
In Snowflake, we need to create an additional warehouse for this use-case.

```code
// SECTION 6: CREATE A SECOND WAREHOUSE AND GRANT USAGE PERMISSION ON THE WAREHOUSES TO NEW ROLES:
USE ROLE ACCOUNTADMIN;
CREATE WAREHOUSE COMPUTE_WH2 WAREHOUSE_SIZE=SMALL AUTO_SUSPEND = 5;
GRANT USAGE ON WAREHOUSE COMPUTE_WH2 TO DRS_Executive;
GRANT USAGE ON WAREHOUSE COMPUTE_WH2 TO DRS_West;
GRANT USAGE ON WAREHOUSE COMPUTE_WH2 TO DRS_East;
USE WAREHOUSE COMPUTE_WH2;
```
Once the query is completed, Snowflake will return `Statement executed successfully.`

Now simply adjust the `embed-api.js` file to send the name of the new Snowflake Warehouse to Sigma:

<img src="assets/drs33a.png" width="800"/>

The change uses this code:

```code
searchParams += '&:ua_DRS_WAREHOUSE=COMPUTE_WH2';
```

Save the change to `embed-api.js` and refresh the Browser using localhost:3000:

<img src="assets/drs34.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## What we've covered
Duration: 5

In this QuickStart we created Snowflake assets and a Row Access Policy and used a Sigma Dynamic Connection & Role Switching to limit the data exposed to a user based on values passed to Sigma at runtime.

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)

[Help Center Home](https://help.sigmacomputing.com)<br>
[Sigma Community](https://community.sigmacomputing.com/)<br>
[Sigma Blog](https://www.sigmacomputing.com/blog/)<br>
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END -->
<!-- END OF QUICKSTART -->
