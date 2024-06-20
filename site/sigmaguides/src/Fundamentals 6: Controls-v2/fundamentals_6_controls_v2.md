author: pballai
id: fundamentals_6_controls_v2
summary: fundamentals_6_controls_v2
categories: Fundamentals
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2024-06-31

# Fundamentals 6: Controls

## Overview 
Duration: 5 

This QuickStart is part of a series of QuickStarts designed to instruct new users on how to use the variety of controls Sigma offers.

Control elements (controls) and data elements work hand-in-hand in Sigma. 

Data elements display the data (ie: tables or visualizations), and controls manipulate the displayed data by filtering and/or using parameters. 

Controls are basically filters, and sometimes the terminology is interchangeable. 

The line gets blurred more since controls can also be used as parameters.

To read more about [creating flexible reports with parameters, see here.](https://help.sigmacomputing.com/docs/create-flexible-reports-with-parameters)

If you already completed QuickStart fundamentals 1-5, you have already used controls. 

In [Fundamentals 2 - Working with Tables](https://quickstarts.sigmacomputing.com/guide/fundamentals-2-working-with-tables-v2/index.html#4), we created a filter directly from a table column (Store Region), and converted that filter into a page control. This control is an example of a `List control`.

In [Fundamentals 4: Working with Pivot Tables v2](https://quickstarts.sigmacomputing.com/guide/fundamentals-4-working-with-pivot-tables-v2/index.html#6), we used a `Segmented control` to present a different filtering experience. 

Selecting the correct control is often more art than science, as there many controls to choose from. 

In general, if using the control is obvious to the user, requires the minimum number of clicks, and produces the desired results, it is a good choice.

<aside class="positive">
<strong>IMPORTANT:</strong><br> In some cases, performance should be considered when using data-driven controls. We will discuss this later.
</aside>

Since we have already used a few controls, we will focus on areas of interest that have not been covered, but are important to understand as you build in Sigma.

We will be working with some common sales data from our fictitious company `Plugs Electronics`, reusing content we created in the QuickStart [Fundamentals 1: Getting Around.](https://quickstarts.sigmacomputing.com/guide/fundamentals-1-getting-around-v2/index.html?index=..%2F..index#0)

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart assumes you have already taken the QuickStart Fundamentals 1 and 2, and are now generally familiar with Sigma. Given this, some steps are assumed to be known and may not be shown in detail.
</aside>

 ### Target Audience
Sigma combines the unlimited power of the cloud data warehouse with the familiar feel of a spreadsheet, with no limit on the amount of data you wish to analyze. Sigma is awesome for users of Excel and even better for customers who have millions of rows of data.

The typical audience for this QuickStart includes users of Excel, common Business Intelligence or Reporting tools, and semi-technical users who want to try out or learn Sigma. Everything is done in a browser, so you already know how to use that. No SQL or technical skills are needed to do this QuickStart.

### Prerequisites
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Completion of the QuickStart “Fundamentals 1: Getting Around”</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

![Footer](assets/sigma_footer.png)

## Build Examples
Duration: 5 

Open the `Fundamentals` workbook created in earlier fundamentals QuickStarts.

Add a new page and rename it to `Controls`.

Add a `child` table to the page, based on the `PLUGS_DATA` table on the `DATA` page. We can do this in just a few mouse clicks; how slick is that!

<img src="assets/control1.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> The table is a `child` of the table on the `Data` page, so we are not querying the warehouse twice, saving costs.
</aside>

Clicking the `+` icon in the element panel, we can see that there are several different controls available:

<img src="assets/control2.png" width="300"/>

 <ul>
      <li><strong>Text Input:</strong> Provides a free-form, search-like field for users to type values into manually.</li>
      <li><strong>List Values:</strong> Provides a fixed or data-driven menu of values from which users can select.</li>
      <li><strong>Segmented Control:</strong> Allows users to choose from a small set of predefined, mutually exclusive options, displayed as buttons.</li>
      <li><strong>Slider:</strong> Enables users to select a single value from a continuous range by sliding a handle along a track.</li>
      <li><strong>Range Slider:</strong> Allows users to select a range of values by moving two handles along a track to set the minimum and maximum.</li>
      <li><strong>Date:</strong> Provides a calendar interface or date picker for users to select a specific date.</li>
      <li><strong>Switch:</strong> Allows the user to switch between True and False values.</li>
      <li><strong>Drill Down:</strong> Allows the user to view pre-defined layers of data.</li>
      <li><strong>Top N:</strong> Useful to see the top values in a sorted list, instead of the whole list.</li>
</ul>

For the controls we haven’t used yet, we will provide examples. Don’t feel pressured to build each one; simply following along is perfectly fine.

Use this QuickStart as a guide for the controls that interest you, and refer to the others as needed in the future.

The process for adding the control to the canvas is the same, regardless which control is selected, so we will skip that part and just show what each configured control looks like.

![Footer](assets/sigma_footer.png)

## Slider
Duration: 5 

The slider control enables users to select a single value from a continuous range by sliding a handle along a track.

Lets say we want to see who are big spenders are, by filtering `Sales` to display high values. 

First, it would be nice to know the min and max values in our 4.5M row table.

Open the `Sales` columns menu and select `Column details` to see:

<img src="assets/control5c.png" width="800"/>

Now we can see we need to set the maximum value for `Sales` higher than $21,712.50. 

Lets use `30,000` to be safe.

Add a new `Slider` control to the page:

<img src="assets/control5.png" width="500"/>

Configure the control as:

<img src="assets/control5a.png" width="600"/>

Set the `Target` of the control to `Controls` > `PLUGS_DATA`:

<img src="assets/control5b.png" width="600"/>

Slide the control to around 20k. These customers might make a good list for a marketing campaign:

<img src="assets/control5d.png" width="500"/>

However, big spend does not always mean big profit. We should evaluate for both to refine our marketing target list.

### Duplicate controls
Sigma makes it really simple to add copies of existing controls, saving you time

Lets say we want to also get all the rows sold at high margin, amongst the list of "big spenders".

Open the slider control's menu and click `Duplicate`:

We use the slider to allow the user to quickly return all the orders with a profit greater than (or equal to) the maximum value configured:

<img src="assets/control3.png" width="800"/>

Drag the control to be side-by-side with the `Sales` control.

Modify the target for the new control targets the `PLUGS_DATA` table > `Profit` column and rename the control to `Profit`:

<img src="assets/control4.png" width="400"/>

We checked and found there are some orders sold a big losses, so we set the minimum value to `-10,000` for the `Profit` slider.

Also set the `Control ID` for `Profit` to `profit-slider`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Be sure to pay attention to the "Control ID" used for each control. They need to be unique and Sigma will ensure this, of you don't. We can reference the current value that a control is set to by referring to it's Control ID. This can be useful in a variety of use cases, especially in formulas.
</aside>

Now adjust the `Profit` slider to be around $6500. These are are target high-value customers:

<img src="assets/control4a.png" width="800"/>

### Sanity Check
When creating controls, it is always a good idea to make sure the row counts are what is expected. For example, we just set our maximum sales value over the highest value in the table and no minimum. 

We would expect the table to have the same row count as our un-filtered source table, and it is easy to compare the two, as a quick validation. 

We want to ensure that we did not inadvertently create a filter that does not initially show all the rows, based on its configuration (unless that was intended).

Reset both controls to show all rows, and verify the total row count matches the total row count on the `Data` page > `PLUGS_DATA` source table.

Check that the values match:

<img src="assets/control4b.png" width="800"/>

It is recommended to rename the controls, so users understand them as best possible:

<img src="assets/control4c.png" width="800"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)

## Range Slider
Duration: 5 

This control is very similar to the slider, except that the user is able to adjust both the min and max values in the control itself.

For example, we might want to target customers who spent a fair modest amount of money on computers, to see if we can sell them upgrades or accessories.

We can easily filter for computers:

<img src="assets/control10.png" width="800"/>

Add a `Range Slider` control, configure it, set the target to the `Sales` column, rename it to `Sales Hi-Low Range` and then adjust it as:

<img src="assets/control11.png" width="800"/>

We now have a target list for our campaign.

Reset the range slider control to show all rows (don't forget to clear the `Product Type` filter on computers) and click `Publish`:

<img src="assets/control11a.png" width="800"/>

![Footer](assets/sigma_footer.png)

## Date
Duration: 5 

Configuring a basic date control is done in just a few clicks, giving it a target of `DATA` > `PLUGS_DATA` > `DATE` and a `Control ID`:

<img src="assets/control9.png" width="600"/>

The default for the date control is `Between` two dates:

<img src="assets/control12.png" width="500"/>

Opening the date options menu exposes all the other selection criteria available to the user, including a custom option:

<img src="assets/control13.png" width="250"/>

The date control's options make it really simple to get to the data that you need quickly:

<img src="assets/control14.png" width="600"/>

Reset both controls to show all rows, and click `Publish`:

<img src="assets/control15.png" width="800"/>

![Footer](assets/sigma_footer.png)

## Top N
Duration: 5 

If you have done any of the other sections, you know how to make the `Top N` control work. 

Here is what that might look like, targeting the `Profit` column:

<img src="assets/control4d.png" width="800"/>

The `Top N` control provides the user the ability to select from four different groupings of values, as shown in the image above, #2.

![Footer](assets/sigma_footer.png)

## Switch
Duration: 5 

The `Switch control`2 in Sigma allows users to toggle between `True` and `False` values, and then filter for matching records. 

It is a simple "on/off" toggle that can be used to dynamically adjust the rows within a dashboard, based on a binary choice.

Lets create a simple example, based on filtering our `PLUGS_DATA` by transaction type.

### Scenario:
Imagine Plugs users want to analyze sales transactions, differentiating between `Purchase` and `Returns`. 

By using the switch control, users can easily toggle between `Purchase` and `Returns`, within a dashboard. From there, users can drill further into the data to gain the insights that interest them.

A problem we notice right away is that our `PLUGS_DATA` table is missing the `transaction type` column; we need to add that. 

Sigma is flexible, and the decision of where to add this column has some implications. 

We could add it independently of `PLUGS_DATA`, so that other tables in the workbook do not have access to this column. However, this column ‘feels useful’, so we want all the other "child elements" of `PLUGS_DATA` to be able to use it if desired.

Since this column does not exist anywhere in our workbook, we can't use a Sigma `Lookup`, but we can create a join to it, as it does exist in a related table in the warehouse.

Navigate to the `Data` page, select the `PLUGS_DATA` table and open its menu.

Click `Element source` and `Edit join`:

<img src="assets/control16.png" width="800"/>

Using the source selector, search for `F_Sales` and click to select it:

<img src="assets/control17.png" width="800"/>

Notice that Sigma makes table suggestions to save time. In this case, we searched and selected the `F_SALES` table. 

Sigma suggests that we might want to join on matching `ORDER_NUMBER` columns. We don't have to accept that, but since it is correct, we click to select that join condition and then click `Select`:

<img src="assets/control18.png" width="800"/>

The next step shows us the current join configuration, allowing us to make adjustments, add more sources and the results.

In this case, there are less matched records than total records, which indicates that some transactions do not have a matching record. This is because our sample data does not have order numbers for cash sales transactions. That is fine; we can ignore those for now. 

Click `Preview Output`:

<img src="assets/control19.png" width="800"/>

In the next page, we want to only select the `Transaction Type` column. 

Collapse the `PLUGS_ELECTRON....` (#1 in image below), deselect all columns from `F_SALES` (#2 in image below), and check the box for `Transaction Type`.

Click `Done`:

<img src="assets/control20.png" width="800"/>

The column is added to the last position on the `PLUGS_DATA` table. We moved it to first column for the screenshot:

<img src="assets/control21.png" width="600"/>

If we want to see the distribution of purchase to online transactions, we can look at column details:

<img src="assets/control22.png" width="600"/>

We can see the row counts for purchase and return. Now we know what to expect when we enable our switch control. 

It is handy to know ahead of time what the row counts will be, so we know switch is working right when we implement that.

<img src="assets/control23.png" width="800"/>

`Close` the details modal.

The last step is to expose the new column on the `Controls` page.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The PLUGS_DATA table on the Controls page is a child of the PLUGS_DATA table on the Data page. When we added the Transaction Type column to the Data page, it became immediately available to all the child elements of the source table. However, we still need to decide whether to expose that column elsewhere, as we will now do.
</aside>

Open the `PLUGS_DATA` table column control on the `Controls` page and locate the `Transaction Type` column. 

Check the box on so, that the column is made visible:

<img src="assets/control24.png" width="600"/>

Drag the column to be the first column in our table.

Add a `Switch` control to the page, rename it `Transaction Type` and set it's `Control ID` to `switch-example`:

<img src="assets/control25.png" width="800"/>

We can now toggle the switch control on and off, but the table is "aware" of it yet.

We need to make the table respond to this controls value, as it is changed.

Add a new column next to `Transaction Type`, rename it to `Switch` and set its formula to:

```code
If([switch-example] = True, If([Transaction Type] = "Purchase", True, False), If([Transaction Type] = "Return", True, False))
```

<img src="assets/control26a.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> This function allows for dynamic filtering based on the state of a switch control and the type of transaction. When the switch is TRUE, it filters for “Purchase” transactions. When the switch is FALSE, it filters for “Return” transactions. 
</aside>

#### How It Works in Detail:
  <li><strong>When [switch-example] is TRUE:</strong> 
    <ul>
        <li>The function checks if Transaction Type is “Purchase”.</li>
        <li>If Transaction Type is “Purchase”, the function returns TRUE.</li>
        <li>If Transaction Type is not “Purchase”, the function returns FALSE.</li>
        </ul>
    </li>
    <li><strong>When [switch-example] is FALSE:</strong> 
        <ul>
        <li>The function checks if Transaction Type is “Return”.</li>
        <li>If Transaction Type is “Return”, the function returns TRUE.</li>
        <li>If Transaction Type is not “Return”, the function returns FALSE.</li>
        </ul>
    </li>
</ul>

<img src="assets/horizonalline.png" width="800"/>

The last step is to add a table filter on the `Switch` column, so that it responds to changes of the control.

Be sure to select only the True value, as that is what the control should be set to while we create this filter:

<img src="assets/control26.png" width="800"/>

Now we can toggle between `Purchase` and `Return` transactions:

<img src="assets/switch.gif" width="800"/>

Hide the `Switch` column, as users do not need to see that:

<img src="assets/control26b.png" width="800"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)

## Synced Copies
Duration: 5 

A `Synced control` is different than a `Duplicate` copy. 

<img src="assets/control31.png" width="300"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Synced copies can help maintain context when a control affects elements across several workbook pages. 
</aside>

For example, you may want to track your organization’s high-level sales data on one page and drill down into region-specific data on another.

If the same filter control targets elements on both pages, we recommend that you display the control on both pages; this enables you and your workbook's viewers to edit the control value from either page, instead of switching back and forth.

Add a new page and rename it to `Synced Controls`.

Add a `Table` to the page, using the `PLUGS_DATA` table on the `DATA` page as the source.

Add a new `List control` to the page and set it to use the `PLUGS_DATA` > `Region` column.

Set the `Control ID` to `Synced-Region`.

Now `Create a synced copy` from the `Synced-Region` control:

<img src="assets/control32.png" width="600"/>

Now the second control can be moved to another page in the workbook, and be set to target some other element.

There are a few use cases where this functionality can be useful:

1: Two controls, one target.<br>
2: Maintaining context across pages.<br>
3: Preselecting control values for users.

[To read more about synced controls, see here.](https://help.sigmacomputing.com/docs/synced-controls)

![Footer](assets/sigma_footer.png)

## Reference Controls in Formula
Duration: 5 

One of the ***"ah-ha"*** moments, is when users realize that controls can be created based on a formula too.

Lets explore that concept.

Add a new page and rename it to `Formulas`.

Add a `Table` to the page, using the `PLUGS_DATA` table on the `DATA` page as the source.

For this exercise, lets reduce the available data down so that refresh is as fast as possible.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is optimized for cloud operations. Sigma trial instances use a Snowflake x-small warehouse, so while performance is still good for our 4.5+ record PLUGS_DATA table, the cloud compute size will "bottle-neck" our performance to some extent. 

Reducing the size of the data will allow us to move as fast as possible in our demonstration. 

Consideration of what data the user requires vs. performance and cost optimization is important to keep in mind.

[Best practices when working with large data sets](https://www.sigmacomputing.com/resources/product-faq/best-practices-when-working-with-large-data-sets)

[How to improve workbook performance](https://community.sigmacomputing.com/t/how-to-improve-workbook-performance/2456)
</aside>

Filter the `Date` column to the `current 1 year only`, to reduce the data to around 600k records.

<img src="assets/control28.png" width="800"/>

Add a `List control` to the page and configure as:

<img src="assets/control29.png" width="600"/>

Make sure the `Control ID` is set to `Stack-By`; we will reference that in our formula, so syntax matters.

<aside class="positive">
<strong>IMPORTANT:</strong><br> When we configured controls earlier, we also set the target to be the PLUGS_DATA table. 

This is not required when using this method. 

We will add a column to the table that references the current value of the control. 

This is how the table "targets" the control, as opposed to the control managing the target.
</aside>

Add a new column to the table, in the first position. Rename it to `Stack By` and set it's formula to:
```code
Switch([Stack-By], "State", [Store State], "Region", [Store Region], "Brand", [Brand])
```

This formula will change the `Stack By` columns value, based on the selection made in the control. 

As a last step, we can `Group` the table by `Stack By`. How slick is this!

<img src="assets/stackby.gif" width="800"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)

## What we've covered
Duration: 5

In this QuickStart, we covered the the variety of the more popular controls provided by Sigma. We explored using them to manipulate sample data and demonstrated just how easy it can be to solve business problems.

For more information on [Sigma controls, see here.](https://help.sigmacomputing.com/docs/intro-to-control-elements)

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
