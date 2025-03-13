summary: Fundamentals for new users and Sigma Tables
id: fundamentals-2-working-with-tables-v2
categories: fundamentals
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: deprecated
authors: phil@sigmacomputing.com
lastUpdated: 2024-06-21

# Fundamentals 2: Working with Tables v2
<!-- ------------------------ -->

## Overview 
Duration: 6

This QuickStart is part of a series designed to instruct new users on how to use Sigma to explore and analyze data using tables.

We will be working with some common sales data from our fictitious company `Plugs Electronics`, reusing content we created in the QuickStart “Fundamentals 1: Getting Around”.

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart assumes you have already taken the QuickStart “Fundamentals 1: Getting Around” and are now generally familiar with Sigma. Given this, some steps are assumed to be known and may not be shown in detail.
</aside>

If you’re familiar with traditional spreadsheet tools, such as Excel, you are likely to associate data and formulas with individual cells. While Sigma tables are very spreadsheet-like, data is managed at the column level rather than at the individual cell level. This means actions such as calculations and formatting changes are applied to every cell in a column.

Managing data at the column level ensures consistency and accuracy, preventing common errors across large and ever-growing sets of data.

### Prerequisites
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Completion of the QuickStart Fundamentals 1: Getting Around</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases.](https://help.sigmacomputing.com/docs/sigma-product-releases)

## Table Basics
Duration: 6

Our starting point is the `Plugs Sales` workbook created in the `Fundamentals 1: Getting Around` QuickStart. 

In Sigma, open the workbook `Fundamentals` and place it in `edit` mode. 

We should still have two pages, `Dashboard` and `Data`. Both have the `PLUGS_DATA` table on it; click to use the `Data` page.

Our source data in Snowflake does not have a few columns that we want users to have access to. 

Instead of users making calculations themselves, we will do that for them, so that we **control how the column values are calculated.**

The missing columns are `Sales`, `COGs` (cost of goods sold) and `Profit`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is able to enrich the existing data, but not change the underlying data in the warehouse.
</aside>

Click the column dropdown from the `Price` column and select `Add new column`. 

<img src="assets/fun2_1.png" width="800"/>

Rename the new column `Sales`.

<aside class="negative">
<strong>NOTE:</strong><br> Did you notice that you can just double-click a column header to rename it?
</aside>

In the function bar, start typing `Sum`. Sigma tries to provide all the possible functions as you type to save you time:

<img src="assets/fun2_2.png" width="800"/>

This is a simple example, but when you start typing `ListAggD`, Sigma displays the list of available functions.

Sigma also provides detailed help on the required syntax for complex functions too:

<img src="assets/fun2_3.png" width="600"/>

With the `Sales` column selected, enter the formula:
```code
[Price] * [Quant] 
```
		
This is an **intentional mistake** in our formula; `Unknown column "Quant"`; it does not exist anywhere else in the Workbook. What happened?

Sigma makes you immediately aware the function has a problem:

<img src="assets/fun2_4.png" width="800"/>

Easy to fix, just adjust the column name to `Quantity` and `click the checkmark at the end of the Function bar`. **Simple!**

<aside class="negative">
<strong>NOTE:</strong><br> Did you notice the columns being highlighted as you add them to the formula? Lots of little things to make you more efficient:
</aside>

<img src="assets/calculatedcols2.png" width="600"/>

Now that we have our `Sales`, we should be able to calculate our `COGs`. 

You can do this one yourself now:
```code
[Quantity] * [Cost]
```

Do the same to add the `Profit` column:
```code
[Sales] - [COGs]
```

Click the `Cost` column, hold down the shift key and click the `Profit` column.

With the five columns all selected, click the `$` icon in the toolbar to change them all to currency format:

<img src="assets/calculatedcols3a.png" width="800"/>

Click `Publish`.

Now that we have updated our "source" data in Sigma, click on the `Dashboard` page and observe what happened to our table.

At first glance, it looks the same. Click to select the table. Now we have three new columns at the end of the table (and column listing) available to the user:

<img src="assets/fun2_6.png" width="800"/>

This is because the table on the `Dashboard` page is using data that comes from the `Data` page.

<aside class="positive">
<strong>IMPORTANT:</strong><br> There are several methods for data "reuse" in Sigma. 

The data in the "Data" table is coming from Snowflake, one time, and then enriched in the user's browser using Sigma Alpha Query. 

From there, it can be reused as many times as needed while only querying Snowflake one time, improving user experience and saving compute costs. How Sigma performs calculations is a complex topic and we will discuss this more as we go along. 
</aside>

### Simple Date Handling

Open the `Date` column's menu and select `Duplicate column`:

<img src="assets/fun2_8a.png" width="400"/>

Sigma names the new column `Date (1)`. Open `Date (1)'s` menu and select `Truncate date` > `Month`:

<img src="assets/fun2_8c.png" width="400"/>
 
<aside class="negative">
<strong>NOTE:</strong><br> Sigma does not ever change the underlying data, we simply added a DateTrunc() function in the function bar. We could have done this manually, but Sigma made it too easy for us!
</aside>

<img src="assets/fun2_9.png" width="800"/>

We are not really concerned with the `Date` column, so lets just hide that:

<img src="assets/fun2_9a.png" width="400"/>

Reorder the columns.

<img src="assets/fun2_1.gif" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br>Just drag and drop the columns to reorder them anyway you want. Hold the shift key and select multiple columns from the element panel. Hide and show columns you are not interested in anytime. Use the undo-redo icons in the menu bar. 
</aside>

The final column order will look like this:

<img src="assets/fun2_9b.png" width="800"/>

Click `Publish`.

Now that we know the basics, lets look at the common ways tables are used in Sigma.

![Footer](assets/sigma_footer.png)
<!-- END OF TABLE BASICS -->

## Calculated Columns
Duration: 6

We are still on the `Dashboard` page.

There are times when a column has not been made available in the source data. It is still possible for users to add them (assuming they have been granted permission). 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Calculated columns are not written back to your data warehouse unless using Sigma Materialization. 
</aside>

We know the profit made for each transaction, but we also are interested to know the `Profit Margin` percentage on each item. 

Add a new column (next to `Profit`), and use the formula:
```code
[Profit] / [Sales]
```

Rename the column `Profit Margin`  In this case, change the formatting to a `%`.

Your table should now look similar to this:

<img src="assets/calculatedcols3a.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Negative values for Profit and Profit Margin indicates items sold at a loss.
</aside>

Some of these functions have been pretty easy, but Sigma is capable of performing the most commonly used functions available in Excel/Google Sheets or SQL. 

We will get into some more advanced functions later, but you can always check out the complete list by clicking the `Help` button <img src="assets/calculatedcols4.png" width="25"/> in the lower right hand corner and selecting [Function Index](https://help.sigmacomputing.com/docs/popular-functions)

<img src="assets/fix3.png" width="400"/>

![Footer](assets/sigma_footer.png)
<!-- END OF CALCULATED COLUMNS -->

## Filtering Data
Duration: 6

Sigma also has the ability to easily filter any type of data. 

Lets filter for only stores in the East region. 

Click on the `Store Region` column and select `Filter`:

<img src="assets/fun2_10.png" width="400"/>

Notice that a `FILTERS & CONTROLS` panel opens and it auto-populates with the available distinct list of Store Regions:

<img src="assets/fun2_11.png" width="400"/>

Also notice that there is a small filter icon (#1) with a `1` next to it. This lets you know that the table has a filter set against it. This will come in handy as we work.

<img src="assets/filters1.png" width="500"/>

Click the checkbox for `East` and see the table update for just the East region:

<img src="assets/filters2.png" width="800"/>

Wouldn't it be great if I could just have this filter as as dropdown on the Page? **No problem.** 

Just click the vertical `3-dots` and click `Convert to Page Control`. 

<img src="assets/filters2a.png" width="400"/>

Now the table can be filtered from `East` to `West` by using the dropdown filter list as shown below:

<img src="assets/filters3.png" width="500"/>

It is really easy to resize elements and move them around on the canvas. Feel free to explore doing that until you get comfortable. 

<img src="assets/filters3a.gif" width="800"/>

### More Filters
The filter control provides more functionality we want to touch on.

Setting different filter types is really easy by accessing the filter menu:

<img src="assets/filters3a.png" width="800"/>

You can add more filters by clicking on the `+` button here:

<img src="assets/filters3b.png" width="400"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma selects a filter automatically (that you can change) based on the data type of the selected column. 
</aside>

For example, if we select the hidden column `Date` in the element panel, open it's menu and select `filter`, Sigma knows that is a date column, and provides filtering options based on that:

<img src="assets/filters3c.png" width="400"/>

Lets set the table to just show year-to-date rows:

<img src="assets/filters3e.png" width="400"/>

Filters can be deleted (#3) or disabled temporarily (#2) easily:

<img src="assets/filters3d.png" width="400"/>

Go ahead and click the `x` in the `Store Regions` control to show all regions:

<img src="assets/filters3g.png" width="400"/>

A complete list of available filtering options is [available here. ](https://help.sigmacomputing.com/docs/data-element-filters)

There is also a great community post that details some ways to [best use filters in Sigma.](https://community.sigmacomputing.com/t/filtering-data-in-sigma-overview/3429)

Click `Publish`.

At this point, our dashboard looks like this (in edit mode still), with about 4.58M rows:

<img src="assets/filters3f.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF FILTERING -->

## Sorting Data
Duration: 6

There are several ways to sort data in Sigma.

Since we have a page control for `Store Regions` on the page, we can access the sort options it provides:

<img src="assets/sort1.png" width="400"/>

Sorting on any column is available by accessing the column's menu:

<img src="assets/sort2.png" width="400"/>

When a column as a sort order set, it will display an icon:

<img src="assets/sort4.png" width="300"/>

Along with ascending/descending options there is a custom sort that provides a way to create sorts based on multiple columns and orders:

<img src="assets/sort3.png" width="600"/>

While we have not gotten to visualizations just yet, it is good to know that sort can be applied there as well. Just right-click on any chart bar (for example) and select sort:

<img src="assets/sort5.png" width="600"/>

At this point (with filters removed), our dashboard still looks like this (in edit mode still), with about 4.58M rows:

<img src="assets/filters3f.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Grouping Data
Duration: 6

So far we have done some pretty simple operations. 

Let's go a bit deeper and group the data, building on the work we just did. 

There are a few ways to group data. 

1: The specific column's menu in the table.

2: Drag and drop a column using the element panel

3: Click the `+` icon in the element panel > `GROUPINGS` section (#4)

### Group by Store Region
Group the `Store Region` column using one of these methods, or use one method, undo that and try another. 

Whichever works best for you is fine.

After grouping, you can collapse the groupings by clicking the `-` to the left of the `Store Region` column name (#3).

<img src="assets/grouping1.png" width="800"/>

### Summarizing Profit
We want to show the sum of profit for each region and we already have added a calculated column that shows profit per row.

To add this rollup, we simply drag and drop the `Profit` column in the element panel (the PLUGS_DATA table has to be selected), and place it in the `GROUP BY` > ` CALCULATIONS` section of the `GROUPINGS` panel.

Rename the calculation column to `Region Profit:

<img src="assets/region_profit.gif" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> This is one workflow. You could also add a calculation from the "CALCULATION" panel (+ icon) or adding another column and settings its formula manually.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma automatically aggregated the profit at the region level, creating the formula for us. This is very powerful and quite different than if we had just added another table column with calculations in it. In that case, the new column would not be automatically calculated or aggregated.
</aside>

We can add as many groupings and calculations as required.

To learn more about [grouping in Sigma, see here.](https://help.sigmacomputing.com/docs/create-and-manage-tables#groups-and-groupings)

Sort the `Region Profit` column.

Click `Publish`.

The table should now look like this:

<img src="assets/region_profita.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF GROUPING DATA -->

## Table Totals
Duration: 6

Sigma workbook tables provide a simple way to get totals and subtotals. 

From the `Store Region` column header dropdown, select `Show Totals`:

<img src="assets/totals1.png" width="500"/>

We now have the total for all `Store Regions`:

<img src="assets/totals1a.png" width="400"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF TABLE TOTALS -->

## Summarizing Data
Duration: 6

Sigma also has the ability to create `Summary Values` across the entire table.  

At the bottom of the table you will see a line that says `SUMMARY`, which shows the number of rows as well as the number of columns.

At the bottom left corner of the table click on the caret:

<img src="assets/summary1.png" width="300"/>

And click the `+ button`:

<img src="assets/summary1a.png" width="300"/>

Select the `Region Profit` column. Sigma will automatically sum the column. 

<img src="assets/summary1b.png" width="400"/>

Remove the extra decimals and rename to change it to `YTD Profit`:

<img src="assets/summary1c.png" width="400"/>

The new summary should match the `Total` in the table from the previous section. 

Go ahead and add two more summaries based on the `COGs` and `Sales` columns. 

<img src="assets/summary1g.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is very flexible and there is often more than one way to visualize the information. Be creative!
</aside>

`Publish` the workbook.

### Accessing summaries in formulas

Click the `+` to add another summary, but this time don't select a column. We can also create a `New summary` (instead of selected a column) that will be based on some formula we write:

<img src="assets/summary1d.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong> Sigma references summaries by name and can be used in other formulas inside the workbook. 
</aside>

Let's create one more summary value by clicking on the caret `^`, and selecting the `+ button`.  This time Select `New Summary`. This will give us a blank summary which we can write a function for:

<img src="assets/summary4.png" width="700"/>

In the function bar, enter the formula bar enter:
```code
[YTD Profit] / [YTD Sales]
```

It will initially show `$0`, but we need to change this to be percentage. 

Also rename this Summary to `YTD Profit Margin`.

<img src="assets/summary5.png" width="700"/>

### Grand Total

It may also be helpful to have the total number of orders represented in the data. Sigma has a function for that. 

Add another `New summary` and set the formula to:
```code
GrandTotal(CountDistinct([Order Number]))
```

Rename it to `Total Order Count`:

<img src="assets/summary6.png" width="800"/>

It is easy to reorder the summaries with drag and drop:

<img src="assets/summary.gif" width="800"/>

The table should now look like this:

<img src="assets/summary6a.png" width="800"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF SUMMARIES -->

## Joining Data
Duration: 6

Up until now, we have been using one table, but in practice, it is often necessary to do some “lite” data modeling.

Data modelling is a broad topic, and in order make this section "fundamental", we will join a sample table from our `Sigma Sample Database` connection as before.

**We will also move a little faster now that we have been oriented in Sigma.**

We want to add a column to show inventory on-hand, from the `F_INVENTORY_ADJUSTED` table by joining it to the existing `PLUGS_DATA` table, on the `Data` page.

Add an `Element source` > `Join` from the `PLUGS_DATA` table (on the `Data` page):

<img src="assets/join1.png" width="800"/>

In the `Source selector`, search for `F_Invent` and select the one that has `PLUGS_ELE` (#2). 

When you click it, a preview of the data is shown. Click `Select`:

<img src="assets/join2.png" width="800"/>

We need to configure the join keys and type. In this case, we are joining on `Sku Number` in each table. 

In this example, having no `Keys with no matches` means that every record in our base table has a matching row in the `F_INVENTORY_ADJUSTED` table:

<img src="assets/join2a.png" width="800"/>

Click `Preview Output`.

Sigma does not know which columns from the `F_INVENTORY_ADJUSTED` table we want to add; we need to tell it. 

Deselect all the columns except the `Quantity on Hand` column:

<img src="assets/join3.png" width="600"/>

Click `Done` and `Publish`.

Return to the `Dashboard`. 

We can see that the `Quantity on Hand` column is now shown in our table.

<img src="assets/join4.png" width="500"/>

We can edit the join at any time by returning to the `Data` page and:

<img src="assets/join5.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF FILTERING -->

## Behind the Scenes
Duration: 6

In the last section, we joined two tables from our warehouse, selected join keys, join type and saw the results. We never wrote SQL or any other proprietary code to make that happen. 

Sigma makes things easy for you and there is a ton of power being applied in the background to make it that way. 

Click on the dropdown next to the refresh icon and select ‘Query History’ to see exactly what is being run each time a change is made. This can be very useful for those with knowledge of SQL.

<img src="assets/behindthescenes1a.png" width="600"/><br>

<img src="assets/behindthescenes1.png" width="800"/>

Clicking into the first `Query` gives every last detail:

<img src="assets/behindthescenes2.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br>You may have noticed a blue line moving across the screen after inputting the calculating and hitting Enter.  In Sigma, every action is transformed into machine-optimized SQL, and sent to the data warehouse to be executed and to retrieve the results.  This ensures your data in Sigma is always live and up to date with the latest results. 
</aside>

<img src="assets/behindthescenes3.png" width="500"/>

<aside class="positive">
<strong>Sigma Alpha Query:</strong><br>
While Sigma does push queries to the CDW to take advantage of its scale and speed, Sigma is unique in that it first evaluates whether the query or operation can be performed in the end user’s browser using the data in the browser cache.

This functionality is called Browser Query and leads to near-instant results and a faster, better user experience.

In addition, Sigma Alpha Query can perform operations like queries, filters, and sorts. It is important to note that it is NOT a desktop data extract or summary as is the case with many other BI tools.

Alpha Query uses fresh data from the CDW, and as soon as the browser is closed, the cache is flushed and the data does not persist, eliminating security or governance risks.

</aside>

If you are **really** interested in the low-level workings of Sigma's unique approach to data retrieval, read [this QuickStart.](https://quickstarts.sigmacomputing.com/guide/developers_sigma_calculations/index.html?index=..%2F..index#0)

Related to the last item, there is another cool feature that lets you “peek” behind a column, to see some useful information. 

Click on the `Brand` columns menu, and click `Column Details`. This will display a pop-up to help you see things like `Top Values` and if Nulls exist, and more:

<img src="assets/behindthescenes4.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF BEHIND THE SCENES -->

## Styling
Duration: 6

When working with tables, Sigma provides style presets for out-of-the-box aesthetics and readability. You can customize all style components independently for more personalized table designs. 

There are two table presets that can be quickly set and then further customized to suit your needs, `Spreadsheet` and `Presentation`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Many Sigma customers have stopped using slides for presentations in favor of just using Sigma to drive their meetings!
</aside>

Click the table to select it, and then click the paint brush icon (#1 in the image below) in the element panel. 

This exposes the many options for styling the various aspects of the table. 

Experiment with them to find a style that pleases.

<img src="assets/tablebasics8.png" width="800"/>

There are many possible customizations to enhance tables. It is really easy to experiment and see what the results.

`Revert to default` anytime:

<img src="assets/tablebasics11.png" width="800"/>

Sigma will warn you if the styling set is problematic for some people. For example:

<img src="assets/tablebasics10.png" width="600"/>

Once satisfied, click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF CONDITIONAL FORMATTING -->

## Conditional Formatting
Duration: 6

Sigma workbook tables can use colors to give the user a more comfortable experience, drawing their eyes to important information through the use of `Conditional Formatting`. 

Using the `Store Region` control, filter the table to show only the `Midwest`.

Expand the `Midwest` Store Region column.

<img src="assets/conditionalformatting1a.png" width="800"/>

We want to apply a `Conditional Format` to the `Profit Margin` column:

<img src="assets/conditionalformatting1b.png" width="400"/>

In the left-hand pane, configure the conditional formatting rule for the values as shown below. 

<img src="assets/conditionalformatting1c.png" width="800"/>

We can now see which transactions have a negative profit margin in red (you may have to change the sort on the `Profit Margin` column to show the lowest values).

Add as many rules (and customize each rule) by clicking `+ Add rule`.

There are many things you can do to enhance your table; feel free to experiment and see what you can come up with.

Clear the `Store Region` control.

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF CONDITIONAL FORMATTING -->

## What we've covered
Duration: 6

In this QuickStart, we covered how to access sample data to build a table, join other tables, add calculated columns, group and filter data, apply conditional formatting, and filter the result set.

Our `Fundamentals` workbook looks something like this:

<img src="assets/finalFun1.png" width="800"/>

[Click here to move to the next QuickStart in this series.](https://quickstarts.sigmacomputing.com/guide/fundamentals-3-working-with-Charts-v2/index.html?index=..%2F..deprecated#4)

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
