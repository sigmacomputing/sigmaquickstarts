author: pballai
summary: fundamentals_2_data_v3
id: fundamentals_2_data_v3
categories: fundamentals
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
authors: phil@sigmacomputing.com
lastUpdated: 2025-03-13

# Fundamentals 2: Data
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

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here is how to [contact Sigma support.](https://help.sigmacomputing.com/docs/sigma-support)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some features may carry the "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

 ### Target Audience
The typical audience for this QuickStart includes users of Excel, common Business Intelligence or Reporting tools, and semi-technical users who want to try out or learn Sigma.

### Prerequisites
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Completion of the QuickStart Fundamentals 1: Getting Around</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

## Table Basics
Duration: 6

Our starting point is the `Plugs Sales` workbook created in the `Fundamentals 1: Getting Around` QuickStart.

In Sigma, open the workbook `Fundamentals` and place it in `edit` mode. 

<img src="assets/fdata_1.png" width="800"/>

We should still have two pages, `Dashboard` and `Data`. 

Delete the `F_SALES` table from the `Dashboard` page:

<img src="assets/fdata_71.png" width="800"/>

Click on the `Data` page tab to use that.

There are a few ways tables can be added to a page in Sigma. In `Fundamentals 1: Getting Around`, we browsed the available tables from the connection, selected `F_SALES` and clicked the `Explore` button to open it and create a workbook.

### Add a table with the element bar
Now that we already have a workbook, we can add "Elements" to the page using the `Element Bar`. Clicking the `Data` group on the bar lets us choose a table or a pivot table:

<img src="assets/fdata_2.png" width="500"/>

<aside class="negative">
<strong>NOTE:</strong><br> While pivot tables are included in the Data group on the Element bar, we will cover them in another fundamentals since that is a lengthy topic on its own.
</aside>

Click and drag a `Table` onto the `Data` page.

<img src="assets/fdata_3.png" width="800"/>

Sigma asks us to `Select source`. Click that button.

We can then are presented some options:

- Search: by name from connections
- Suggested: Sigma will present options from most used tables
- Element: These are tables that already exist in this workbook
- Tables and Datasets: Tables that exist in other workbooks or connections

At the bottom there are some icons:

- CSV: Allows you to "bring your own data" in the form of a text file
- SQL: Write your own SQL query
- Join: Create a join from existing tables
- Union: Create a union from existing tables

Use the search option to search for `Hands on lab`, and select the one in the retail schema:

<img src="assets/fdata_4.png" width="400"/>

With the table added to the page, double-click on its name and shorten in to `Plugs_Store_Sales`.

### Adding columns
Our source data in Snowflake is missing a few columns that users need.

Instead of users making calculations themselves, we will do that for them so that we **control how the column values are calculated.**

<aside class="negative">
<strong>NOTE:</strong><br> Sigma also supports centralizing common calculations. We call these "metrics".
</aside>

For more information, see [About metrics.](https://help.sigmacomputing.com/docs/about-metrics)

The missing columns are `Sales`, `COGs` (cost of goods sold) and `Profit`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is able to enrich the existing data, but not change the underlying data in the warehouse. These new columns are calculated in the users browser and do not exist in the warehouse. This is fast and saves compute costs. 
</aside>

Click the column dropdown from the `Price` column and select `Add new column`:

<img src="assets/fdata_5.png" width="600"/>

Double-click to rename the new column `Sales`.

<aside class="negative">
<strong>NOTE:</strong><br> Just double-click a column header to rename it.
</aside>

In the function bar, start typing `Sum`. Sigma tries to provide all the possible functions as you type to save you time:

<img src="assets/fdata_6.png" width="600"/>

With the `Sales` column selected, enter the formula:
```code
[Price] * [Quant] 
```
		
This is an **intentional mistake** in our formula; `Unknown column "Quant"`; it does not exist anywhere else in the Workbook. What happened?

Sigma makes you immediately aware the function has a problem:

<img src="assets/fdata_9.png" width="800"/>

Easy to fix, just adjust the column name to `Quantity` and `click the checkmark at the end of the Function bar`. **Simple!**

<aside class="negative">
<strong>NOTE:</strong><br> Did you notice the columns being highlighted as you add them to the formula? Lots of little things to make you more efficient:
</aside>

Now that we have our `Sales`, we should be able to calculate our `COGs`. 

You can do this one yourself now:
```code
[Quantity] * [Cost]
```

Do the same to add the `Profit` column:
```code
[Sales] - [COGs]
```

We know the profit made for each transaction, but we also are interested to know the `Profit Margin` percentage on each item. 

Add a new column (next to `Profit`), and use the formula:
```code
[Profit] / [Sales]
```

Rename the column `Profit Margin`  In this case, change the formatting to a `%`.

Some of these functions have been pretty easy, but Sigma is capable of performing the most commonly used functions available in Excel/Google Sheets or SQL. 

We will get into some more advanced functions later, but you can always check out the complete list by clicking the `Help` button in the lower right-hand corner and selecting [Function Index.](https://help.sigmacomputing.com/docs/popular-functions)

<img src="assets/fdata_14.png" width="400"/>

Click the `Cost` column, hold down the shift key and click the `Profit` column.

With the five columns all selected, click the `$` icon in the toolbar to change them all to currency format:

<img src="assets/fdata_8.png" width="600"/>

This is a good time to mention that there are many keyboard shortcuts that are available. Users find these incredibly useful for repetitive tasks like adding new columns. Check them out and pick your favorites.

If there is a shortcut, it will also show in the UI like all of these:

<img src="assets/fdata_16.png" width="400"/>

[Keyboard shortcuts: Mac OS](https://help.sigmacomputing.com/docs/keyboard-shortcuts-mac-os)

[Keyboard shortcuts: Microsoft Windows](https://help.sigmacomputing.com/docs/keyboard-shortcuts-microsoft-windows)

Click `Publish`.

### Simple Date Handling
Open the `Date` column's menu and select `Duplicate column`:

<img src="assets/fdata_10.png" width="400"/>

Sigma names the new column `Date (1)`. Open the menu for `Date (1)'s` and select `Truncate date` > `Month`:

<img src="assets/fdata_11.png" width="400"/>

 <aside class="negative">
<strong>NOTE:</strong><br> Sigma does not ever change the underlying data, we simply added a DateTrunc() function in the function bar. We could have done this manually, but Sigma made it too easy for us!
</aside>

<img src="assets/fdata_12.png" width="800"/>

We are not really concerned with the original `Date` column, so lets just hide that:

<img src="assets/fdata_13.png" width="400"/>

Up to now we have not done anything in the `Element panel` but all the same operations (adding columns, configuring them etc..) can be done there as well. 

We will use the element panel to reorder a few columns. This can also be done using the table itself; your choice:

<img src="assets/fdata_1.gif"/>

<aside class="negative">
<strong>NOTE:</strong><br>Just drag and drop the columns to reorder them anyway you want. Hold the shift key and select multiple columns from the element panel. Hide and show columns you are not interested in anytime. Use the undo-redo icons in the menu bar. 
</aside>

The final column order doesn’t matter since this table serves as the source for other pages. As long as it contains the necessary data, we can use it however we like on any page in the workbook.

### Column details
Let's say we want to see the average sale value and the largest sale.

Open the `Sales` column menu and select `Column details` to see:

<img src="assets/fdata_70.png" width="700"/>

This is a really useful feature that quickly uncovers some of the key values of interest, with minimum effort.

Click `Publish`.

Now that we know some of the basics, lets look at the common ways tables are used in Sigma.

![Footer](assets/sigma_footer.png)
<!-- END OF TABLE BASICS -->

## Filtering Data
Duration: 6

Sigma also has the ability to easily filter any type of data. 

Let's filter for only stores in the East region. 

Click on the `Store Region` column and select `Filter`:

<img src="assets/fdata_15.png" width="350"/>

Notice that a `FILTERS & CONTROLS` panel opens and it auto-populates with the available distinct list of Store Regions:

<img src="assets/fdata_17.png" width="350"/>

Also notice that there is a small filter icon (#1) with a `1` next to it. This lets you know that the table has a filter set against it. This will come in handy as we work.

<img src="assets/fdata_18.png" width="400"/>

Click the checkbox for `East` and see the table update for just the East region:

<img src="assets/fdata_19.png" width="800"/>

Wouldn't it be great if I could just have this filter as a dropdown on the page? **No problem.** 

Just click the vertical `3-dots` and click `Convert to Page Control`. 

<img src="assets/fdata_20.png" width="400"/>

Now the table can be filtered from `East` to `West` by using the dropdown filter list as shown below:

<img src="assets/fdata_21.png" width="350"/>

It is really easy to resize elements and move them around on the canvas. Feel free to explore doing that until you get comfortable. 

<img src="assets/fdata_2.gif" width="800"/>

### More Filters
The filter control provides more functionality we want to touch on.

Setting different filter types is really easy by accessing the filter menu:

<img src="assets/fdata_22.png" width="800"/>

You can add more filters by clicking on the `+` button here:

<img src="assets/fdata_23.png" width="400"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma automatically selects a filter based on the data type of the chosen column, but you can override this in the filter configuration if needed.
</aside>

For example, if we select the hidden column `Date` in the element panel, open it's menu and select `Filter`, Sigma knows that is a date column, and provides filtering options based on that.

Lets set the table to just show year-to-date rows:

<img src="assets/fdata_24.png" width="400"/>

Filters can be deleted (#3) or disabled temporarily (#2) easily:

<img src="assets/fdata_25.png" width="400"/>

Go ahead and click the `x` in the `Store Regions` control to show all regions:

<img src="assets/fdata_26.png" width="800"/>

For more information, see [Filter data in data elements](https://help.sigmacomputing.com/docs/data-element-filters)

There is also a great community post that details some ways to [best use filters in Sigma.](https://community.sigmacomputing.com/t/filtering-data-in-sigma-overview/3429)

Click `Publish`.

At this point, our data page looks like this (still in edit mode), **with about 4.58M rows:**

<img src="assets/fdata_26.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF FILTERING -->

## Sorting Data
Duration: 6

Before we make any other changes, let's rename the `Dashboard` page to `Fundamentals 2`. This will allow us to have a page for each of the fundamental QuickStarts, and be able to refer to them if you need to later.

We don't want to make any more changes to the table on the `Data` page. Instead, we want to use it as the source for other elements we create in the workbook.

On the `Data` page, open the `Plugs_Store_Sales` table menu and create a new `Child table` from it.

<img src="assets/fdata_72.png" width="600"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Child elements are aware of any changes to the "parent" element.
</aside>

Move the child table and the `Store Region` control to the `Fundamentals 2`.

Now we can make changes to the elements on the `Dashboard` and these will simply reference the table on the `Data` page, which in turn is connected to the warehouse.

There are several ways to sort data in Sigma.

Since we have a page control for `Store Regions` on the page, we can access the sort options it provides:

<img src="assets/fdata_28.png" width="400"/>

Sorting on any column is available by accessing the column's menu:

<img src="assets/fdata_29.png" width="350"/>

When a column sort order is set, it will display an icon:

<img src="assets/fdata_30.png" width="800"/>

Along with ascending/descending options there is a custom sort that provides a way to create sorts based on multiple columns and orders:

<img src="assets/fdata_33a.png" width="400"/>

Custom sort example:

<img src="assets/fdata_31.png" width="800"/>

While we have not gotten to charts yet, it is good to know that sort can be applied there as well. Just right-click on any chart bar (for example) and select sort:

<img src="assets/fdata_35.png" width="600"/>

At this point (with filters removed), our `Fundamentals 2` page looks like this:

<img src="assets/fdata_34.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Grouping Data
Duration: 6

So far we have done some pretty simple operations. 

Let's go a bit deeper and group the data. 

There are a few ways to group data. 

- 1: The specific column's menu in the table.

- 2: Drag and drop a column using the element panel.

- 3: Click the `+` icon in the `Element pane`l > `GROUPINGS` to add a column.

### Group by Store Region
Group the `Store Region` column using one of these methods, or use one method, undo that and try another. 

Whichever method works best for you is fine.

After grouping, you can collapse the groupings by clicking the `-` to the left of the `Store Region` column name (#3).

<img src="assets/fdata_36.png" width="800"/>

### Summarizing Profit
We want to show the sum of profit for each region, and we already have added a calculated column that shows profit per row.

To add this rollup, we simply drag and drop the `Profit` column in the `Element panel` and place it in the `GROUP BY` > `CALCULATIONS` section of the `GROUPINGS` panel for `Store Region`.

Rename the calculation column to `Region Profit`:

<img src="assets/fdata_37.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma automatically aggregated the profit at the region level, creating the formula for us. Click on the "Region Profit" column and look at the formula bar to see the function Sigma created for us.

This is very powerful and quite different than if we had just added another table column with calculations in it. In that case, the new column would not be automatically calculated or aggregated.
</aside>

We can add as many groupings and calculations as required.

For more information, see [Create and manage tables](https://help.sigmacomputing.com/docs/create-and-manage-tables#groups-and-groupings)

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF GROUPING DATA -->

## Table Totals
Duration: 6

Sigma workbook tables provide a simple way to get totals and subtotals. 

From the `Store Region` column header dropdown, select `Show Totals`:

<img src="assets/fdata_39.png" width="400"/>

We now have the total for all `Store Regions`:

<img src="assets/fdata_40.png" width="600"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF TABLE TOTALS -->

## Summarizing Data
Duration: 6

Sigma also has the ability to create `Summary Values` across the entire table.  

At the bottom of the table you will see a line that says `SUMMARY`, which shows the number of rows as well as the number of columns.

At the bottom left corner of the table click on the caret:

<img src="assets/fdata_41.png" width="400"/>

Then click the `+ button`:

<img src="assets/fdata_42.png" width="300"/>

Select the `Region Profit` column. Sigma will automatically sum the column. 

<img src="assets/fdata_43.png" width="300"/>

Remove the extra decimals and rename to change it to `YTD Profit`:

<img src="assets/fdata_44.png" width="550"/>

If your value is not same as shown, you probably have some filters set from the earlier steps. That is no problem just disable them.

In the recent summary exercise, we have a filter set for year to date, so the values may be lower that yours. Ignore that and keep going.

The new summary should match the `Total` in the table from the previous section. 

Go ahead and add two more summaries based on the `COGs` and `Sales` columns. 

<img src="assets/fdata_45.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is very flexible and there is often more than one way to visualize the information. Be creative!
</aside>

`Publish` the workbook.

### Accessing summaries in formulas

We can also create a `New summary` (instead of selected a column) that will be based on some formula we write.

Click the `+` > `New summary`:

<img src="assets/fdata_47.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong> Sigma references summaries by name and can be used in other formulas inside the workbook. 
</aside>

Let's create one more summary value by clicking on the caret `^`, and selecting the `+ button`.  This time select `New Summary`. 

This will give us a blank summary which we can write a function for.

In the function bar, enter the formula bar enter:
```code
[YTD Profit] / [YTD Sales]
```

It will initially show `$0`, so we need to change this to be a percentage. 

Also rename this summary to `YTD Profit Margin`.

<img src="assets/fdata_46.png" width="700"/>

### Grand Total

It may also be helpful to have the total number of orders represented in the data. Sigma has a function for that. 

Add another `New summary` and set the formula to:
```code
GrandTotal(CountDistinct([Order Number]))
```

Rename it to `Total Order Count`:

<img src="assets/fdata_48.png" width="800"/>

It is easy to reorder the summaries by just dragging them into the order you prefer. 

The table should now look similar to this:

<img src="assets/fdata_50.png" width="800"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF SUMMARIES -->

## Joining Data
Duration: 6

Up until now, we have been using one table, but in practice, it is often necessary to do some “lite” data modeling.

Data modeling is a broad topic, and in order to make this section 'fundamental,' we will join a sample table from our `Sigma Sample Database` connection as before.

**We will also move a little faster now that we have been oriented in Sigma.**

We want to add a column to show inventory on-hand, from the `F_INVENTORY_ADJUSTED` table by joining it to the existing `Plugs_Store_Sales` table, **on the Data page.**

Add an `Element source` > `Join` from the `Plugs_Store_Sales` table, **on the Data page:**

<img src="assets/fdata_51.png" width="800"/>

In the `Source selector`, search for `F_Invent` and select the one in the `Retail` schema:

<img src="assets/fdata_52.png" width="400"/>

When you click it, a preview of the data is shown. 

Here we only need to select the column(s) that will allow us to create a proper join. 

Select only the `Sku Number` column and click `Select`:

<img src="assets/fdata_53.png" width="800"/>

Next we need to configure the join keys and type. In this case, we are joining on `Sku Number` in each table. 

In this example, having no `Keys with no matches` means that every record in our base table has a matching row in the `F_INVENTORY_ADJUSTED` table:

<img src="assets/fdata_54.png" width="800"/>

Click `Preview Output`.

Sigma does not know which columns from the join we want; we need to tell it. 

We will take all the columns from the `PLUGS.... ` table (they should already be selected) and only the `SKU Number` and `Quantity on Hand` columns from `F_INVENTORY_ADJUSTED`:

<img src="assets/fdata_55.png" width="800"/>

Click `Done` and `Publish`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> We changed the source table on our "Data" page. Check to make sure everything still works on the "Dashboard" as that references the changed table. 
</aside>

We can see that the `Quantity on Hand` column is now shown in our table (we moved it up for the screenshot and centered the value in the column):

<img src="assets/fdata_56.png" width="800"/>

We can edit the join at any time by returning to the `Data` page and:

<img src="assets/fdata_57.png" width="800"/>

Last, we can search in the column list, using the magnifying glass icon, for `sku`:

<img src="assets/fdata_73.png" width="350"/>

There are two columns, and one is clearly identified as coming from the `F_INVENTORY_ADJUSTED` table. We need this column as it drives our join, but we don't have to display it if we don't want. Simply hide it if preferred. 

There are many ways to join data in Sigma workbooks. To learn more, see [Join data in workbooks.](https://help.sigmacomputing.com/docs/join-data-in-workbooks)

For those interested in more sophisticated data modelling, see [Create and manage data models.](https://help.sigmacomputing.com/docs/create-and-manage-data-models)

![Footer](assets/sigma_footer.png)
<!-- END OF FILTERING -->

## Behind the Scenes
Duration: 6

In the last section, we joined two tables from our warehouse, selected join keys, join type and saw the results. We never wrote SQL or any other proprietary code to make that happen, although we can if we wanted to.

For more information, see [Write custom SQL](https://help.sigmacomputing.com/docs/write-custom-sql)

Sigma makes things easy for you, with a ton of power applied in the background to ensure efficiency.

Click on the dropdown next to the refresh icon and select `Query History` to see exactly what is being run each time a change is made. This can be very useful for those with knowledge of SQL.

<img src="assets/fdata_59.png" width="600"/>

In my Sigma instance, there are many rows that have an `Execution Path` of `Browser`. This means that Sigma was able to generate the requested element without making a request to the warehouse. This is both efficient and saves warehouse costs too.

<img src="assets/fdata_60.png" width="800"/>

Clicking into a row that has and `Execution Path` of  `Warehouse` gives every lots of details including the SQL that Sigma generated on your behalf.

If you ever have a deeper issue with Sigma, we provide the specific `Sigma request ID`. This value allows Sigma support to isolate an issue more quickly, so this is important to be aware of:

<img src="assets/fdata_61.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br>You may have noticed a blue line moving across the screen after inputting the calculating and hitting Enter.  In Sigma, every action (that requires a trip to the warehouse) is transformed into machine-optimized SQL, and sent to the data warehouse to be executed and to retrieve the results.  This ensures your data in Sigma is always live and up to date with the latest results. 
</aside>

<img src="assets/fdata_62.png" width="800"/>

<aside class="positive">
<strong>Sigma Alpha Query:</strong><br>
While Sigma does push queries to the CDW to take advantage of its scale and speed, Sigma is unique in that it first evaluates whether the query or operation can be performed in the end user’s browser using the data in the browser cache.

This functionality is called Browser Query and leads to near-instant results and a faster, better user experience.

In addition, Sigma Alpha Query can perform operations like queries, filters, and sorts. It is important to note that it is NOT a desktop data extract or summary as is the case with many other BI tools.

Alpha Query uses fresh data from the CDW, and as soon as the browser is closed, the cache is flushed and the data does not persist, eliminating security or governance risks.

</aside>

If you are **really** interested in the low-level workings of Sigma's unique approach to data retrieval, read [this QuickStart.](https://quickstarts.sigmacomputing.com/guide/developers_sigma_calculations/index.html?index=..%2F..index#0)

### Column details
There is another cool feature that lets you “peek” behind a column, to see some useful information. 

Click on the `Brand` columns menu, and click `Column Details`. This will display a pop-up to help you see things like `Distinct Values` and if nulls exist, and more:

<img src="assets/fdata_63.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF BEHIND THE SCENES -->

## Styling
Duration: 6

When working with tables, Sigma provides style presets for out-of-the-box aesthetics and readability. You can customize all style components independently for more personalized table designs. 

There are two table presets that can be quickly set and then further customized to suit your needs, `Spreadsheet` and `Presentation`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Many Sigma customers have stopped using slides for presentations in favor of just using Sigma to drive their meetings!
</aside>

On the `Dashboard` page, click the table to select it, and then click `Format` in the `Element panel.` 

This exposes the many options for styling the various aspects of the table. 

Experiment with them to find a style that pleases.

<img src="assets/fdata_64.png" width="800"/>

There are many possible customizations to enhance tables. It is really easy to experiment and see what the results.

`Revert to default` anytime:

<img src="assets/fdata_65.png" width="800"/>

Sigma will warn you if the styling set is problematic for some people. For example, if we set the table header to a black background with black text, Sigma lets you know that `Text has low contrast`:

<img src="assets/fdata_66.png" width="600"/>

Once satisfied, click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF CONDITIONAL FORMATTING -->

## Conditional Formatting
Duration: 6

Sigma workbook tables can use colors to give the user a more comfortable experience, drawing their eyes to important information through the use of `Conditional Formatting`. 

Using the `Store Region` control, filter the table to show only the `Midwest`.

We want to apply a `Conditional Formatting` to the `Profit Margin` column:

<img src="assets/fdata_68.png" width="400"/>

In the left-hand pane, configure the conditional formatting rule for the values as shown below. 

<img src="assets/fdata_69.png" width="600"/>

We can now see which transactions have a negative profit margin in red (changing the sort on the `Profit Margin` to ascending, if needed).

Add as many rules (and customize each rule) by clicking `+ Add rule`.

There are many things you can do to enhance your table; feel free to experiment and see what you can come up with.

For more information, see [Apply conditional formatting to table columns and cells](https://help.sigmacomputing.com/docs/format-and-customize-a-table#apply-conditional-formatting-to-table-columns-and-cells)

Clear the `Store Region` control.

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF CONDITIONAL FORMATTING -->

## What we've covered
Duration: 6

In this QuickStart, we covered how to access sample data to build a table, join other tables, add calculated columns, group and filter data, add table totals and summaries, and apply conditional formatting.

The next QuickStart in this series covers using [pivot tables in Sigma](https://quickstarts.sigmacomputing.com/guide/fundamentals_3_data_pivot_tables_v3/index.html?index=..%2F..index#0)

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
