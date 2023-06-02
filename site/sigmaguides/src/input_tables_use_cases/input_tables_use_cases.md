author: pballai
id: input_tables_use_cases
summary: Examples of using Sigma Use Cases
categories: Tables
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Getting Started, Analytics, Data Engineering, BI, Business Intelligence, Sigma, Sigma Computing, Snowflake, Dashboarding, Visualization, Analysis, Excel, Spreadsheet, Embedding, Input Tables
lastUpdated: 2023-06-02

# Sigma Input Tables: Use Cases

## Overview 
Duration: 5 

This QuickStart **QS** provides an overview and the steps required to recreate three unique use cases that leverage Sigma Input Tables. 

Input Tables are Sigma-managed warehouse tables, through which users can add their own data and integrate into their own analysis.

<aside class="postive">
<strong>WHY USE INPUT TABLES?</strong><br> With Input Tables, what you build in Sigma changes from one-way transformations of raw data (traditional BI) into a bi-directional data analysis platform. Input Tables give users the power to augment, adjust, interact and create "what-if" scenarios in real-time, without changing the source data.
</aside>

When data isn’t in the warehouse, it usually requires a cumbersome technical and people process to ETL data into the warehouse. Now users who need to add data to the warehouse are able to do so directly.

Sigma customers already use Input Tables for:
<ul>
  <li>Manual data entry of key values</li>
  <li>Analytic Modeling
        <ul>
        <li>scenarios</li>
        <li>forecasts</li>
        <li>territory planning</li>
        <li>sales planning</li>
        <li>supply chain modeling</li>
        <li>categorizations</li>
        </ul>
    </li>
</ul>

### Target Audience
Anyone who is trying to create QS content using Sigma and wants to augment, adjust, interact and create "what-if" scenarios.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>Downloadable project files discussed later in this document.</li>
  <li>A Snowflake account with the proper administrative and security admin access.</li>
  <li>Microsoft Excel or Google Sheets (for accessing the provided sample data)</li>
</ul>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Snowflake Free Trial](https://signup.snowflake.com/)</button>
  
### What You’ll Learn
We will review a few different ways customers are using Input Tables already and show you how to make them work in your own Sigma environment.

### What You’ll Build

 <li><strong>We will review these three use cases:</strong>
    <ol type="n"> 
      <li><strong>Forecasting</strong></li>
      <li><strong>Rapid Data Prototyping</strong></li>
      <li><strong>Territory Planning</strong></li>
    </ol>
  </li>

![Footer](assets/sigma_footer.png)

## Forecast Adjustment
Duration: 20

In our first use case, Paula, the VP of EMEA sales, is running her End-of-Year forecast call where her country managers each call out the final numbers for the year. 

She enters these into an Input Table which already has the targets for the year. 

A map visualizes which countries are way off their targets.  

She's also planning out the next year and adds growth numbers for each country. 

This gets combined with a parameter that adjusts for inflation to show FY 23 vs 24 on a bar chart.

The final version looks like this:

![Alt text](assets/fa1.png)

### How to build it:

Open Sigma and create a new Workbook.

Change the name of the Workbook to `Input Table Use Cases`.

Add a new Page to our Workbook and rename it to `Forecast Adjustment`.

<button>[Download the sample Country Manager data](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/input_tables/Forecasts+from+Country+Managers.xls)</button>

Open the downloaded file in Excel (or Google Sheets). There should be 3 columns and 13 rows.

Add a new Input Table to the Page and rename it `Forecasts from Country Managers`.

<aside class="negative">
<strong>NOTE:</strong><br> Input Tables store data back to the selected Warehouse. Write Access is required to support this functionality. Sigma is storing Input Table data separately and only using the Warehouse Connection you specify. Other warehouse data is unaffected. 
</aside>

[Click here for information on setting up Write Access.](https://help.sigmacomputing.com/hc/en-us/articles/360037430473-Set-Up-Write-Access)

Copy all rows and columns from the downloaded Excel file and paste them into the new Input Table. 

<aside class="negative">
<strong>NOTE:</strong><br> Once you have the Excel data copied, just click the Input Table and press `ctl+v` or `command+v` (for Macs) to paste the data.
</aside>

Notice that Sigma automatically identified the data types for you, saving time.

<img src="assets/fa2.png" width="600"/>

Add a new Visualization to the Page, use the Input Table as it data source, set it to `Map - Region` and drag the `Country` column up the Regions.

We want this Map to show different colors for FY23 Targets vs FY23 Forecasts so we need to add a new Column to the data that represents this calculated value.

In the Element Panel / Columns click the `+` icon and select `new column`.

<img src="assets/fa3a.png" width="400"/>

Set the formula for this column to:
```plaintext
([FY23 Forecasts] - [FY23 Targets]) / [FY23 Targets]
```
Your map configuration should look like this now:

<img src="assets/fa3.png" width="800"/>

The manager in Austria tells you she's cutting her forecast down to $10k because there was a strike at one of the factories.

Update the input table and see the map change. Wait, we are not able to enter new values into the Input Table?

<aside class="postive">
<strong>IMPORTANT:</strong><br> Changes to Input Table data requires the Workbook be in Edit mode
</aside>
Edit the Workbook.

Now change the FY23 Forecast value for Austria down to $10K and hit `Enter`.

The Map changes automatically to reflect this revision.

<img src="assets/fa3b.png" width="800"/>

We can also change a value in the `Forecasts from Country Managers` Input Table / Column `Country Growth Adjustment` and see similar changes automatically reflected in the Chart.

The Map will not change as it is not looking at FY24 projections.

### Drive Input Table Values from Control

We can also drive the Input Table from in-page Controls. For example we can add a Control that allows the user to set a value for a `Global Inflation Adjustment` and have that update a chart.

Add a new `Number` Column to the Input Table and rename it to: `Country Growth Adjustment`. 

Set the Column Type to be `Percent`.

Add a new Control / `Text Box` to the Page. Rename it to `Global Inflation Adjustment`.

Adjust it's properties as shown. The `Control ID` is case sensitive and it's current value will drive in calculations later:

<img src="assets/fa6.png" width="400"/>

Set a value in the new Control `Global Inflation Adjustment` = .10 and hit return.

Lets add a bar chart and compare the FY23 and FY24 forecasts (by country).

Add a Visualization and configure it as follows (we will manually add a calculated column for the X-Axis Column shown for `F24 Forecast`):

<img src="assets/fa4.png" width="800"/>

Lets add that new column to the X-Axis (click the `+` icon to the right of the X-Axis in the Element Panel) and select `Add new column`.

Set the formula bar for this new Column to:
```plaintext
(1 + [P_Global_Inflation] + Coalesce([Country Growth Adjustment], 0)) * [FY23 Forecasts]
```

Rename the new Column to `FY24 Forecasts`.

Click on the County column (in the Element Panel / Y-Axis) and set a filter on this map to not show any null values. 

The Chart and it's configuration now looks like this:

<img src="assets/fa7.png" width="600"/>

Publish your Page.

After making any final tweaks you want to make to the layout of the page, it is ready, the VP can make some forecast changes.

Inflation is **really** bad right now, so increase the `Global Inflation Adjustment` parameter from 0.10 to 0.15 and hit enter.

The Bar Chart will respond, adjusting for the increase in inflation across the entirety of EMEA.

The manager for the Czech Republic has resolved some supply chain issues and is reporting an anticipated 10% forecast lift.

Enter the new value into the `Country Growth Adjustment` column for Czech Republic to reflect 10% uplift. Hit Enter and the Map and Chart update automatically to reflect the increase:

<img src="assets/fa8.png" width="600"/>

<aside class="postive">
<strong>The VP Loves it!</strong><br> Input Tables allows the VP to not only review the current and next year forecast for her territory, it also allows her to update it for real changes as well as do some "what-if-analysis" to help her make critical decisions in real time. Corporate Governance is maintained since the source data does not change and everything stays in the corporate cloud data warehouse, even the Input Table and it's values.
</aside>

![Footer](assets/sigma_footer.png)


## Rapid Data Prototyping
Duration: 20

In our second use case, Lucy is a merchandiser at a brick and mortar (B&M) electronics retailer. 

She's launching their online store which is powered by Shopify. 

Although their B&M data is in the warehouse, the Shopify data is too new and hasn't gone through the modeling process, which takes time.

**She can't wait 6 months and has to know now how the new online store is doing.** 

She has the Shopify data in google sheets where she's been playing around with it. But, it only shows part of the picture. 

She needs to see the data from B&M against Shopify in real time.

Sigma allows Lucy to copy and paste the Shopify data into an Input Table and then is able to compare online vs B&M sales by category and SKU. This informs her about the strengths and weakness of the online business vs the established B&M, right away.

### How to build it:

<button>[Download the sample Shopify Data](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/input_tables/Shopify_Transactions+.xls)</button>

Open the downloaded file in Excel (or Google Sheets). There should be 5 columns and 82 rows.

We will copy this data into a Sigma Input Table later.

Add a new Page to our Sigma Workbook and rename it to `Rapid Data Prototyping`.

We will add two tables from the warehouse to the page. One for `Product Information` and another for `Brick and Mortar Sales`. 

For Product Information we will use the `Sigma Sample Database` and the `D_Product` table as shown. 

Rename the table to "Product Information".

<img src="assets/it2.png" width="800"/>

Create a second Workbook Page and rename it `Data`. We will use this Page to hold master reference data that will be reused for this use case and the later ones too. 

On the new Data page, add a new table as shown:

<img src="assets/it3.png" width="800"/>

Rename the table to `Brick and Mortar Sales`.

At this point your Workbook should look like this:

<img src="assets/it4.png" width="800"/>

Return to the `Rapid Data Prototyping` page.

Add a new `Empty Input Table` to the Page.

<img src="assets/it1.png" width="600"/>

Use the `Sigma Sample Database`.

Rename the new Input Table `Shopify Data`.

Copy all rows and columns from the downloaded Excel file and paste them into the new Input Table as we did in the first use case.

<img src="assets/it1.gif">

The column headers are automatically set by Sigma.

<img src="assets/it5.png" width="800"/>

Now that we have the B&M and the online product details, we want to be able to compare them.

In the `Product Information` table, click the `Sku Number` column drop and add a Column Lookup. 

<img src="assets/it6.png" width="500"/>

Configure the Lookup as shown:

<img src="assets/it7a.png" width="400"/>

Many products have not been sold online yet so right click on the first cell with a null and select `Exclude null`:

<img src="assets/it8.png" width="400"/>

Rename this new column `Shopify Reveune` and format it as `Currency`.

Add another new column and use the same workflow. 

This time we want to pull in the revenue from the B&M table. However, the column Revenue does not exist in the warehouse table `Brick and Mortar Sales` so we need to add that first.

Click on the `Data` page tab and add the new column to the `Brick and Mortar Sales` table.

select `Add a new column` and set the formula of that column to (it does not matter the order of the columns in this case):
```plaintext
Sum([Quantity] * [Price])
```

Rename the new column `Revenue` and set the format to `Currency`. 

<img src="assets/it9.png" width="800"/>

Now we can add a new column to the `Product Information` table called `B&M Revenue` using the same workflow for `Add a new column via lookup...`:

<img src="assets/it10.png" width="800"/>

Rename the new column `B&M Revenue`.

Now that we have the data ready we want to add a new Visualization (Bar Chart in this case) to compare the revenue streams by category for B&M vs. Online.

Add a Child Element / Visualization (from the Product Information Table) and set the X and Y axis as shown:

<img src="assets/it11.png" width="800"/>

Doing a tiny bit of additional clean-up, changing the names of the X-Axis columns and removing a grid-line and we have our chart:

<img src="assets/it12.png" width="800"/>

What the chart shows is the relative strength of in-store sales vs. online for each category. Now Lucy (our Merchandiser) can begin to see which catagories are not selling well online or where to invest more marketing dollars.

<aside class="postive">
<strong>IMPORTANT:</strong><br> Lucy loves how she can leverage Input Tables and the power of Sigma to let move at the speed of the online world making business decisions based on live data at scale.
</aside>


## Territory Planning
Duration: 20

This next use case is a bit more sophisticated, using **Linked Input Tables and Data Validation** to allow the user to make on-the-fly adjustments to a sales territory.

Mike, is VP of Sales for the US. The company has grown quickly and the regions need to be rebalanced. 

Using Salesforce data in Snowflake, he's able to leverage the power of Sigma and see that the West region has brought in the most revenue. 

Specifically, California sales are leading the charts. 

Using a Linked Input Table, Mike can dynamically get a list of States and Regions based on the latest assignments. 

This allows Mike to experiment with the re-balancing, instantly seeing how revenue would change by region based on the new mapping. 

The final build will look like this:

<img src="assets/tp1.png" width="800">

In Sigma, create a new Page in our `Input Tables Demo` Workbook and rename it `Territory Planning`.

We will add tables to the Page from the Sigma Sample Database / Applications / Salesforce data source. 

<aside class="negative">
<strong>NOTE:</strong><br> You can cull the use only the columns shown to make the UI easier to work with or bring them all; it is up to preference. Be sure to minimally include the ones shown below.
</aside>

Add `USERS` as shown:

<img src="assets/tp2.png" width="800">

Add `OPPORTUNITY` as shown:

<img src="assets/tp3.png" width="800">

Since the Opportunity table does not contain Region or Territory we we add them using Sigma's Lookup function.

From the Opportunity table and click `Add a new column via lookup` as shown:

a<img src="assets/tp4.png" width="600">

...and configure it as follows:

<img src="assets/tp5.png" width="400">

Do the same steps but this time add the `USERS` column `SubRegion`. 

Your Page should now look like this:

<img src="assets/tp6.png" width="800">

Let's add a chart that shows the current distribution of Sales by Region so that we can evaluate what adjustments to territories may be needed.

Create a Child Element / Visualization from the `Opportunity` table. Configure it as follows to show the total sales by region:

<img src="assets/tp7.png" width="800"/>

Our chart is sorted by `Sum of Amount` to have the largest on top. Rename the chart to `Sum of Amount by New Sub Region - BEFORE`

We are ready to add a method for users to reassign territories and see the effect in real-time in terms of total regional sales.

Create a new `Linked Input Table` off the `USER` table:

<img src="assets/tp8.png" width="600"/>
<br>
<br>
<img src="assets/tp10.png" width="600"/>

In the new Linked Table, click the `Sub Region` column drop and add a new Text Column:

<img src="assets/tp11.png" width="600"/>

Now copy the values from the `Sub Region` column (click the column and use ctl+v or command+c) and then paste into the new column (use ctl+v or command+v).

Rename the new column to `New Sub Region`.

<img src="assets/tp11a.png" width="600"/>

Now that we have a column where a user can change the value of region, we should add `Data Validation` 

<aside class="positive">
<strong>NOTE:</strong><br> Data Validation prevents users from making mistakes and also ensures that if regions are added later, they are automatically available to the user on a select list. It is also possible to create a manual lists or load lists from any other Sigma data source.
</aside>

In the new Input Table, click the new column `New Sub Region` and select `Data Validation` from the list:

<img src="assets/tp14.png" width="600"/>

...and configure it as follows:

<img src="assets/tp15.png" width="400"/>

Now users are limited to selecting valid values from data that exists in Snowflake / USERS table. 

Even though we configured the new column's Data Validation to point to the Input Table, the Sub Region column is "linked" to the data coming from the Users table so it will always be up to date.

Next we want to add a `New column via lookup` to the `Opportunities` table.

Configure it as follows We should see 100% match (item #4):

<img src="assets/tp16.png" width="600"/>

Rename the new column from `New Sub Region (New Linked Input Table)` to `New Sub Region`.

The Page now looks like this (after some re-sizing and arranging to suit your preference). Use any layout you want.

<img src="assets/tp18.png" width="800"/>

Lastly, we will add another Visualization (as a child of the `Opportunities`  table) to represent the **"after"** state of user changes on the Linked Input Table. 

Add a new Child Visualization and configure it as follows:

<img src="assets/tp19.png" width="800"/>

Rename the chart to `Sum of Amount by New Sub Region - AFTER`.

We are ready to evaluate the Territory and make some adjustments. 

First we need to see why the Midwest so much larger than the TOLA in terms of sales. We want to close this gap if we can. 

In the `Before` chart, click the Midwest bar and `Drill down` into `Territory`.

<img src="assets/tp20.png" width="800"/>

We can now see that Missouri is top of the chart. We wonder what if we reassigned it to TOLA? 

Locate the Missouri in the `New Linked Input Table` / `Territory` column and change it's assignment in `New Sub Region`.

You can see that the **AFTER** chart recalcuates and TOLA is now larger with MidWest smaller but still not close enough. 

<img src="assets/tp21.png" width="800"/>

Also change the `New Sub Region` for `Iowa` to be in `TOLA`.

<img src="assets/tp22.png" width="800"/>

The gap is much better now, Mike is happy.

<aside class="postive">
<strong>IMPORTANT:</strong><br> Input Tables allow end users to quickly iterate over "what-if-scenarios` with violating corporate governance rules; making better decisions based on actual data.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Embedding Input Tables
Duration: 20

Many customers are embedding content in their internal and external business applications. Now you can also embed Input Tables and really take it to the next level for your users. With Input Tables your applications can become more than just a way to communicate **TO** your users. Capturing small amounts of critical data from your customers opens up that "conversation" to be two-way.

This QuickStart assumes familiarity with how to embed in Sigma. 

<aside class="negative"><strong>NOTE:</strong><br> We will not review the steps to setup Embedding here, but rather show the relevant screens. To learn more about Sigma Embedding, visit the Embedding Series QuickStarts which cover the topic extensively.</aside>

<aside class="postive"><strong>IMPORTANT:</strong><br> Embed users with the "Creator" role can make edits to allow cells on an Input Table. Users with "View/Explore" role can't edit data but can view the Input Table and latest edits.</aside></aside>

Create a new Workbook and add a new empty Input Table table to the page. You will be prompted to provide a location to save the Input Table date. We will use the `Sigma Sample Database`. 

<aside class="negative"><strong>NOTE:</strong><br> Input Table data is stored automatically and is not editable outside of the Sigma Workbook. It can be joined to other Sigma Elements to drive more sophisticated workflows as shown in the Territory Planning use case of this QuickStart. </aside>

Now add another column and set it's type to `number`.

Enter a line of data and your page should now look like this:

<img src="assets/st1.png" width="700"/>

Click the Input Tables menu and enable `Allow data editing in explore mode`. 

Publish the Workbook. 

Make sure that the Workbook is Shared to the Creator team with `Explore` or `Creator` rights:

<img src="assets/st3.png" width="700"/>

Using the methods outlined in the Quickstart `Embedding 3: Application Embedding`, configure this Workbook page into an embed.

<aside class="postive"><strong>IMPORTANT:</strong><br> When using the Sigma UI to create the Embed path, be sure to select the Page and not the Input Table itself.</aside></aside>

<img src="assets/it13.png" width="700"/>

We will need to adjust `server.js` for the `Embed Path`, `User Team` and `Account Type`:

<img src="assets/it14.png" width="800"/>

Assuming you started Terminal and ran `supervisor server.js` without error, browser to `http://localhost:3000`. You should see your embedded Input Table. 

Enter some text and click `Save`.

<img src="assets/it15.png" width="600"/>

Adjust `server.js` for the `User Team` and `Account Type` to lower the access to `Viewer`:

<img src="assets/it16.png" width="800"/>

Refresh the browser and see that the information is as we entered it but there is no `Edit` functionality for this `Viewer` user.

<img src="assets/it17.png" width="600"/>

If you recall, we enabled `Allow data editing in explore mode`. Lets test that.

In the Workbook / Sharing change the Viewer to use the `Explore` role:

<img src="assets/it18.png" width="600"/>

Update `server.js` for `account_type` and `external_user_team` and save the file:

<img src="assets/it19.png" width="800"/>

Refresh the browser and see that we have the `Edit` button.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->





## Data Collection
Duration: 20

There are times when capturing a small amount of data from a Sigma user can be very valuable to the business. This presents some challenges:

<ul>
      <li><strong>Will you have to build some new application to capture the data?</strong></li>
      <li><strong>When is the right time to capture the data?</strong></li>
      <li><strong>Will the users accept another tool?</strong></li>
      <li><strong>Once we have the data, how will it relate to existing warehouse data?</strong></li>
      <li><strong>Lots of other questions to be sure!</strong></li>
</ul>

Since users are already using Sigma (**or spreadsheets and should be using Sigma instead!**), Input Tables can help solve this problem. 
Why not just create a Sigma Workbook and augment it with the ability for the user to enter small amounts of data in real time?
Sigma will do the heavy lifting of UI and data operations to store the data in your warehouse. 

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma does not store data and with Input Tables, data is stored in your warehouse but adjacent to your existing data. Existing data is NEVER changed in any way.
</aside>

Allowing users to add/supplement warehouse data opens a world of possibilities. We can demonstrate how this can be done we will use a very simple example.

There is a need for accounting to update the status of Invoices, adding comments/notes but don't want to give the data entry clerk access to the accounting system.

We solution this in Sigma using Input Tables without involving developers or database administrators valuable time.

In our Workbook, create a new Page and rename it to `Data Collection`. 

We need to use different data for this use case, joining two tables. 

<aside class="negative">
<strong>NOTE:</strong><br> Did you know you can see the data linage of a Workbook Element? Sometimes it is really useful to visually see the path the data is taking as it sourced to your Element.
</aside>

In our use case, the final lineage for the source data table looks like this:

<img src="assets/dc1.png" width="800"/>

In Edit mode, navigate to the `Data` Page. 

Add a new Table for `INVOICE_LINE_ITEMS` as shown:

<img src="assets/dc2.png" width="800"/>

Join the `CUSTOMERS` table to this `INVOICE_LINE_ITEMS` as shown:

<img src="assets/dc3.png" width="800"/>

Configure the `Join` as follows:

<img src="assets/dc4.png" width="800"/>

After clicking `Preview` to look at the result set, click `Done`:

<img src="assets/dc5.png" width="800"/>

We don't need every column so let's delete the ones we wont require:

<img src="assets/dc6.png" width="400"/>

Rename the new Table to `Customer Invoice Line Items`.

Add a new column using the formula:
```plaintext
[Quantity] * [Unit Price]
```

Rename this column to `Line Item Total`.

<img src="assets/dc7.png" width="800"/>

Now create a `Linked Input Table`, selecting the columns as shown:

<img src="assets/dc8.png" width="800"/>

Move the new Input Table to the Page `Data Collection`:

<img src="assets/dc9.png" width="800"/>

We want the user to be able to filter the Input Table Table to specific Companies.

Add a new Element / Control Element / List Value element and configure it as follows:

<img src="assets/dc10.png" width="400"/>

Set the `Target` as:

<img src="assets/dc10a.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> Notice that we are not targeting the Input Table but rather the Table on the hidden Data Page that is linked to the Input Table. This can also be used to drive Row Level Security.
</aside>

We now are ready to add our columns that are enabled for data capture.

Add a new Column to the Input Table called `Status`.

Add another new Column to the Input Table called `Notes`.

We did Data Validation in an earlier use case but this time will just limit the `Status` column to values we will manually provide:

<img src="assets/dc11.png" width="400"/>

We want the user to "work" the data down so we need another Input List to filter the table, not showing rows that have a Status = Fulfilled,

Set a Filter on the Table to only show rows that have not been Fulfilled:

<img src="assets/dc13.png" width="800"/>

Now we can filter by Company, adjust the Status and add notes.

Last step before we test is to enable editing in Explorer Mode:

<img src="assets/dc14.png" width="800"/>

Publish the Workbook and go to the Publish version so that we are looking at this Page as the end-user would see and work with it.

Now we have an `Edit Data` button. Click that:

<img src="assets/dc15.png" width="800"/>

Lets test by updating the first four records as shown for each Status:

<img src="assets/dc16.png" width="800"/>

Click the `Save` button.

Each time we save, any records set `Fulfilled` are longer visible. Looking at `Column Details` for `Status` we see that there are no rows where Status = Fulfilled. 

<img src="assets/dc16.png" width="800"/>

In this way, the user can just do the updates they need and not be concerned about records that are completed.

<aside class="postive">
<strong>Image the Possibilities:</strong><br> The ability to capture and save data to the warehouse breaks the traditional BI model of providing static pages. Sigma unlocks the power of data trapped in cloud warehouses. With Input Tables you can now capture information that is trapped in the end user's minds without investing in another application. Think of the possibilities.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
## What we've covered
Duration: 5

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

In this QuickStart we covered three popular used cases for Sigma Input Tables in great detail. 

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
