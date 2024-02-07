author: pballai
id: 04_embedding_row_level_security
summary: Application Embedding with Row Level Security using User Attributes
categories: Embedding
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-01-12

# 04: Embedded Application Row Level Security

## Overview 
Duration: 5 


This QuickStart introduces you to Sigma embedding using Row-Level Security **(RLS)** to personalize / limit the data exposed to a user based on values passed to Sigma at runtime. This QuickStart assumes you have already taken the QuickStart [Embedding 1: Prerequisites](https://quickstarts.sigmacomputing.com/guide/embedding_3_application_embedding/index.html) so that you have a sample environment to complete the tasks in this QuickStart.

We also recommend you take the the QuickStart [Embedding 3: Application Embedding](https://quickstarts.sigmacomputing.com/guide/embedding_3_application_embedding/index.html?index=..%2F..index#0) as we will build on that content. 

**Some steps may not be shown in detail as we assume you have taken these other two QuickStarts or are familiar with Sigma workflows.**

RLS is a method for restricting data access based on user identity or characteristics. Sigma supports RLS in a few different ways but the vast majority of Sigma customers use RLS with User Attributes at the Dataset level. This QuickStart will cover how to implement RLS Dataset with User Attributes.

### Target Audience
Semi-technical users who will be aiding in the planning or implementation of Sigma. Limited SQL and technical data skills are needed to do this QuickStart. It does assume some common computer skills like installing software, using Terminal, navigating folders and edit/copy/paste operations.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>A working web server based on Node.js as demonstrated in the QuickStart Embedding 1: Prerequisites</li>
  <li>Some content to embed. You can embed a Workbook, Table or Visualization.</li>
  <li>Downloadable project files discussed later in this document.</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<ul>
  <li></li>
    <li>Node.js and required Packages (all free):
        <ul>
        <li>Express</li>
        <li>Node-supervisor</li>
        <li>crypto (is now included with Node.js installation)</li>
        </ul>
    </li>
</ul>
  
### What You’ll Learn
The exercises in this QuickStart will discuss and walk you through the steps to implement Dataset RLS with User Attributes (UA for short).

### What You’ll Build
We will embed Sigma content inside a Node.js web application, passing runtime parameters to configure the embed and demonstrate Row-Level-Security.

![Footer](assets/sigma_footer.png)
<!-- END -->

## **User Attributes**
Duration: 10

Sigma uses this method to restrict data access based on **user identity combined with User Attributes (UA)** passed by the Parent application at runtime.

Datasets are used to implement all RLS in embedded Sigma objects.

The UA must be defined ahead of time (one time) in the Sigma portal. You can define any UA and as many as required to enforce the required data security. You can set a default value to a UA at this time. 

The Parent application must pass an embed `mode` argument of `userbacked`.

To implement this feature, you must have minimum Can Edit access on the individual dataset.

The workflow (as shown below) is very straightforward and yet flexible to allow only the data that is appropriate for the user to be shown, based on one or more UAs. How you decide to filter the data is up to your organization's roles/rules. 

<aside class="negative">
<strong>NOTE:</strong><br> This workflow does not map to RLS with Custom SQL which eliminates the need to create the calculated column and filter in the Dataset. We will cover that later.
</aside>

![Alt text](assets/rls1.png)

[A full listing of all the supported Sigma user attributes can be found here.](https://quickstarts.sigmacomputing.com/guide/embedding_howto_leverage_parameters_and_ua/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END -->

## Dataset RLS
Duration: 20

Let's build an example based on the previous QuickStart, Embedding 4: Application Row Level Security. It is ok to build your own if you are familiar with Sigma.

Download the Lab file called [sigma_application_embed_RLS.zip](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/embedding/sigma_application_embed_RLS.zip). 

Unzip the file and use Terminal to launch the Node web server.

### Steps:
Open Sigma.

Navigate to `Administration` / `User Attributes` and add a new attribute called `Region`. You can give it a description but no need for any default value. `Click Create`.

<aside class="negative">
<strong>NOTE:</strong><br> There is no need to assign the UA to a Team, so you can ignore the next screen. We are not filtering based on Team membership in this QuickStart.
</aside>

Open the `Dataset` called `Application Embedding`.

Click on the `three vertical dots` next to the Dataset name at the top of the page and select `Duplicate Dataset`.  

Rename the new Dataset to `Application Embedding RLS`.

Click on the Worksheet tab of the new dataset and ensure that they are in Edit mode.

Add an `new Column` and rename it to `ua_Region`.

Use this formula for column:
```plaintext
Contains(CurrentUserAttributeText("Region"), [Store Region])
```

On the `left sidebar`, add a `filter`. Filter against the column `ua_Region = True`.

It is ok that you don't see data here.

`Publish` the new Dataset.

**At Runtime (page refresh in this case):**
 <ul>
      <li>The new column `ua_region` will be evaluated against the Store Region column for each row</li>
      <li>The filter will only show rows where there is a match for ua_Region and Store Region</li>
      </ul>

`Open` the Workbook `Application Embedding` and add a `new Page` called `Application RLS`

Add a new table to the page, based on the Dataset you just created `"Application Embedding RLS"` and `Publish` the changes. 

`Open server.js` from the downloaded files. 

<aside class="negative">
<strong>NOTE:</strong><br> We have hardcoded the value to equal “East”. This value would normally be provided by the Parent application at runtime. 
</aside>
<img src="assets/rls2.png" width="800"/>

You are now ready to start the Node.js Express web server. Use Terminal and navigate to the Public folder where you just modified the two files. 

**In Terminal run the command:**
```plaintext
supervisor server.js
```

Browse to `http://localhost:3000`. You should only see rows from the East Region. 

<aside class="negative">
<strong>NOTE:</strong><br> We did not hide the ua_column so that you could see its value but normally you would hide this column since the user does need to see it. Its value can only be True or False so there is no risk of data exposure anyway; users just won’t get any value from seeing it. 
</aside>

<aside class="postive">
<strong>IMPORTANT:</strong><br> The syntax for the user attribute param, as this gives you trouble if your UA is not specifically called "Region", is:
searchParams += &:ua_${attribute_name}=${attribute_value}
</aside>

![Alt text](assets/rls3.png)

Back in your server.js file, `change the ua_Region to East,West`. `Save` the file. 

Sending comma separated values via embed UA param requires a step for updating the column formula in the underlying Sigma RLS Dataset for the ua_Region column. The equality formula needs to be replaced with a Contains(), for ex: Contains(CurrentUserAttributeText("Darien_Region"), [Store Region])

and `refresh the browser` page. You should see the Region has been updated to reflect the new values. 

You can use the Column Details feature to see that there East and West are present in the data now. 

![Alt text](assets/rls4.png)

<aside class="negative">
<strong>NOTE:</strong><br> Be sure to leave no space after the commas as the server.js code does not provide handling for that and your browser page will not load as expected. This could be handled by the Parent application API but we want to keep it simple for this exercise.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Custom SQL Query
Duration: 20

Once we successfully configured User Attributes, we can use them in a Custom SQL dataset to provide security. This method can be used anywhere in the SQL statement for any user attribute. For example, it can be used to switch the database name, table name, in the select clause or where clause.

For instance, assume that data for each customer is present in a separate schema. We can leverage Custom SQL to switch the schema based on the user.

<aside class="negative">
<strong>NOTE:</strong><br> To use Custom SQL in the manner described above, the tables must have the same schema.
</aside>

Using the example we just did in the last exercise, you can create a Dataset based on SQL query instead of Table and leverage a SQL Where clause to enforce the UA passed at runtime. 

We will reuse the embedding framework used in the last section except that we will create a new Dataset based on SQL Query and use the Where clause to accept the UA passed at runtime.

### Steps:
`Open Sigma` and navigate to `Administration` / `Attributes` and open the `Region` attribute.

Click `Edit`

This time set the default Value to `East`. 

`Click Save`
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> Prior to this, when developing in Sigma we would get “no data” until we looked at the actual embed page with UA passed for Region. That can be desirable in the case that the Parent Application fails to pass a value for Region and we show data we should not. 
</aside>
Navigate to the `Application RLS` Workbook and `edit` it.

Create a `new Page` and rename it to `RLS SQL Query`.

Click `+ Add New` and `Table`. 

For `Source`, select `Write SQL`.

In the Connections drop down, select `Sigma Sample Database`.

In the large open whitespace `paste the following code`:

```sql
SELECT * FROM RETAIL.PLUGS_ELECTRONICS.PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA
WHERE STORE_REGION = '{{#raw system::CurrentUserAttributeText::Region}}'
LIMIT 10
```

This SQL code will get all columns from the table we have used previously but limit the return based on the “Region” UA and return only 10 rows.

<aside class="negative">
<strong>NOTE:</strong><br>  This syntax ('{{#raw system::CurrentUserAttributeText::Region}}') can be used anywhere in the SQL statement for any user attribute e.g. it can be used to switch the database name, table name, in the select clause or where clause.
</aside>

Set to value for ua_region in server.js to `East`.

`Click Run.` You should only see rows from Store Region=East (since that is the UA Default). Click `Done` and `Publish`.

![Alt text](assets/rls7.png)

Refresh your browser to see the embed (make sure you are looking at the right Workbook Page `RLS SQL Query`):

![Alt text](assets/rls6.png)

<aside class="negative">
<strong>NOTE:</strong><br> Using this workflow, the Workbook Page is using custom SQL but there is no Dataset also created. You could also have created a new Dataset based on custom SQL following the workflows we have done previously. In this case, you do not need to add Permissions for the Finance Teams to view this Dataset because there is no Dataset.
</aside>

Change server.js to `West` and `save`. 

Check your embed in the browser. You should now see Region = West. 

![Alt text](assets/rls8.png)

<aside class="negative">
<strong>NOTE:</strong><br> The actual syntax used in server.js or the customer SQL may vary when attempting to pass more than one value for region in a comma delimited list. This will be dependent on the data source (ie: Snowflake, BigQuery etcetera) and how it interprets the request syntax.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Allowing For "Superuser" Access
Duration: 5

In many cases, customers have one (or more) users who will need to see all the data ("superuser") while others only see the data permitted (as we have shown in the previous section).

Since we have demonstrated using user attibutes in the Sigma UI as well as with custom SQL, we will show both methods, adjusted for a superuser.

We will do this work directly in the UI and evaluate the security using an administrative feature that allows us to "impersonate" any other user, directly in the portal, and see the results. 

[To learn more about user impersonation, click here.](https://help.sigmacomputing.com/docs/impersonate-users)

<aside class="negative">
<strong>NOTE:</strong><br> It is assumed that you are familiar with common navigation in Sigma now, so we may not show every step in the following instructions. 
</aside>

### In the Sigma UI:
Log into Sigma as an Administrator and navigate to `Administration` > `User Attributes`. We want to add (or modify) the user attribute called `Region` so that we have two `Members Assigned` with different `Attribute Values` as:

<img src="assets/rls21.png" width="800"/>

Now reopen the Dataset called `Application Embedding - RLS`.

<aside class="negative">
<strong>NOTE:</strong><br> If you don't have that anymore, create a new dataset and add the `PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA' table from Sigma's sample database to a new dataset.
</aside>

Make a duplicate of the dataset and rename it to `Embedding RLS - SuperUser Step`:

<img src="assets/rls9.png" width="400"/>

Place the dataset in `Edit` mode, click the `ua_Region` column and replace it's existing formula with this one:

```code
If(CurrentUserAttributeText("Region") = "All", True, If(CurrentUserAttributeText("Region") = [Store Region], True, False))
```

Here is a line-by-line breakdown for those interested:
<img src="assets/horizonalline.png" width="800"/>

**If(CurrentUserAttributeText("Region") = "All", True,**<br>
This is the outer If statement.

**CurrentUserAttributeText("Region"):**<br>
This function or method retrieves the "Region" attribute of the current user. 

**= "All":**<br> 
This checks if the retrieved region attribute is equal to the string "All".

If the condition is true (i.e., the user's region is "All"), the entire expression evaluates to True.

If the condition is false (i.e., the user's region is not "All"), the evaluation moves to the next part of the expression.
<img src="assets/horizonalline.png" width="800"/>

**If(CurrentUserAttributeText("Region") = [Store Region], True, False)**<br>
This is the inner If statement, which acts as the 'else' part of the outer If.

Again, CurrentUserAttributeText("Region") retrieves the current user's region.

**= [Store Region]:**<br> 
This checks if the user's region matches the value in the "Store Region" field.

If this condition is true, the expression evaluates to True.

If the condition is false, the expression evaluates to False.
<img src="assets/horizonalline.png" width="800"/>

Hit enter. All the cell values under `ua_Region` should be `True` as the "current user" is an Administrator:

<img src="assets/rls12.png" width="600"/>

There are about 4.5M rows shown.

Before we move on, we need to make sure to share the dataset (in a Workbook) with our test users.

`Publish` the dataset, then `explore` and `Save As` in the new Workbook. Give it a name `Embedding RLS - SuperUser Step`:

<img src="assets/rls13.png" width="800"/>

Share the Workbook with our test user:

<img src="assets/rls14.png" width="600"/>

Now we want to switch users, just using user impersonation.

Navigate to `Administration` > `People` and find our test user that only has access to the `East` region. Click the `3-dot` menu and select 
`Impersonate user`:

<img src="assets/rls15.png" width="800"/>

Navigate to `Shared with me` and click the new workbook:

<img src="assets/rls16.png" width="800"/>

We now see only regions in the `East` and the row count is much lower.

<img src="assets/rls17.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> We can also pass values in the embed API as we have done many times already but user impersonation is a quick method evaluate results as well.
</aside>

In the next section, we will demonstrate a method using custom SQL. 

![Footer](assets/sigma_footer.png)
<!-- END -->

## Superuser Via Custom SQL

There are few ways to go about setting this up, but we will just add a new table to the `Embedding RLS - SuperUser Step` workbook, and base the new table on custom SQL. 

If you are still running user impersonation, click to stop it.

In the workbook, click the `+` and select `Table`. Then select a data source for the table as `Write SQL`:

<img src="assets/rls18.png" width="800"/>

Paste the following code in the query window:
```code
SELECT 
    current_role() as current_role,
    '{{#raw system::CurrentUserAttributeText::Region}}' as ua_Region,
    *

FROM
    RETAIL.PLUGS_ELECTRONICS.PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA

WHERE
    IFF('{{#raw system::CurrentUserAttributeText::Region}}' = 'All', True,
    (STORE_REGION = '{{#raw system::CurrentUserAttributeText::Region}}')) = True
```

Click `Run`. The results should look like this (about 4.5M rows):

<img src="assets/rls19.png" width="800"/>

### Explanation of the SQL script:
Overall, this query selects all columns from the specified table, along with the current user's role and a user attribute (Region). It filters the rows based on the user's region, showing all rows if the user's region is 'All', or filtering to rows matching the user's region otherwise.

Here is a line-by-line breakdown for those interested:

<img src="assets/horizonalline.png" width="800"/>

**1: SELECT CLAUSE:**
```code
SELECT 
    current_role() as current_role,
    '{{#raw system::CurrentUserAttributeText::Region}}' as ua_Region,
    *
```

**Select:**<br> 
This is the command used to specify which columns to retrieve from the database.

**current_role() as current_role:**<br>
This retrieves the current role of the user executing the query in Snowflake and aliases it as current_role.

**'{{#raw system::CurrentUserAttributeText::Region}}' as ua_Region:**<br> 
This is the Sigma user attribute (Region) gets replaced with a value at runtime, based on the logged on user. It is aliased as ua_Region. 
    
**The star (*):**<br> 
This is used to select all remaining columns from the specified tables in the query.

<img src="assets/horizonalline.png" width="800"/>

**2: FROM CLAUSE:**
```code
FROM 
  RETAIL.PLUGS_ELECTRONICS.PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA
```

**From:**<br> 
Specifies the table from which to retrieve the data.

**RETAIL.PLUGS_ELECTRONICS.PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA:**<br> 
This is the full name of the table, including its schema and database name, from which the data is being retrieved.

<img src="assets/horizonalline.png" width="800"/>

**3: WHERE CLAUSE:**
```code

WHERE
    IFF('{{#raw system::CurrentUserAttributeText::Region}}' = 'All', True,
    (STORE_REGION = '{{#raw system::CurrentUserAttributeText::Region}}')) = True
```

**Where:**<br> 
This clause is used to filter records based on a specified condition.

**IFF(condition, true_value, false_value):**<br> 
In Snowflake, IFF is a function that works like an 'IF-ELSE' statement. It checks a condition and returns true_value if the condition is true, otherwise false_value.

**'{{#raw system::CurrentUserAttributeText::Region}}' = 'All':**<br> 
This is the condition being checked. 

It compares the runtime value of '{{#raw system::CurrentUserAttributeText::Region}}' with the string 'All'.

If the above condition is true, then True is returned.
    
If the condition is false, it checks whether STORE_REGION equals the runtime value of '{{#raw system::CurrentUserAttributeText::Region}}'.
    
The entire IFF function is compared against True, meaning the row is selected only if the IFF function evaluates to true.

<img src="assets/horizonalline.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> The "Current Role" column returns as a Sigma GUID and this is expected. We can hide this column but wanted to make you are how we retrieve the user's role.
</aside>

Once you `Run` the query, the `Save` button becomes active and we can save the new dataset. 

Once the dataset is saved, we can impersonate our test user (who has rights only to the East region):

<img src="assets/rls20.png" width="800"/>

[Click here for more information on custom SQL in Sigma](https://help.sigmacomputing.com/docs/write-custom-sql)


![Footer](assets/sigma_footer.png)
<!-- END -->

## What we've covered
Duration: 5

Using our existing Sigma Application Embed we passed a runtime parameter to configure the embed and demonstrate Row-Level-Security at the Workbook and Dataset level. 

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
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
