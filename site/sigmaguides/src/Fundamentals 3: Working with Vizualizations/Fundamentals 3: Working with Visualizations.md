summary: Fundamentals for new users and Sigma Visualizations
id: fundamentals-3-working-with-visualizations
categories: fundamentals
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
authors: Phil Ballai - Sigma Computing
lastUpdated: 2023-03-29

# Fundamentals 3: Working with Visualizations
<!-- ------------------------ -->

## Overview 
Duration: 5

This QuickStart is part of a series of QuickStarts designed to instruct new users how to use Sigma to explore and analyze data using Visualizations (Viz). Sigma supports a wide variety of types, and are adding others so be sure to check our documentation for the latest list:

<table>
    <thead>
        <tr>
            <th colspan="2"><strong>Supported Visualizations Types:</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 
              <ul>
                <li><strong>Bar charts</strong></li>
                <li><strong>Line charts</strong></li>
                <li><strong>Area charts</strong></li>
                <li><strong>Scatter charts</strong></li>
                <li><strong>Pie charts</strong></li>
                <li><strong>Single value visualizations</strong></li>                
              </ul>
            </td>
            <td>
            <ul>
                <li><strong>Funnel charts</strong></li>
                <li><strong>Gauge charts</strong></li>
                <li><strong>Maps – by region, point (lat/long), or GeoJSON</strong></li>
                <li><strong>Box and Whisker charts</strong></li>
                <li><strong>Sankey</strong></li>                
              </ul>
              </td>
        </tr>
    </tbody>
</table>

This QuickStart assumes you have already taken the Fundamentals 1 & 2 QuickStarts and are now familiar with Sigma’s user interface (UI). Given this, some steps are assumed to be known and may not be shown in detail. 

We will be working with some common sales data from our fictitious company ‘Plugs Electronics’. This data is provided to you automatically. We will look at sales data, but throughout the course of other QuickStarts will incorporate more sources from associated store, product, and customer data.

The other “Fundamental Series” QuickStarts explore topics such as working with Tables, Pivot Tables, Dashboards and more. We have broken these QuickStarts up so that they can be taken in any order you want, except the “Fundamentals 1: Getting Around” QuickStart should be taken first.

 ### Target Audience
Sigma combines with the unlimited power of the cloud data warehouse and the familiar feel of a spreadsheet; no limit on the amount of data you wish to analyze. Sigma is awesome for users of Excel and even better for customers who have millions of rows of data.

Typical audience for this QuickStart are users of Excel, common Business Intelligence or Reporting tools and semi-technical users who want to try out or learn Sigma. Everything is done in a browser so you already know how to use that. No SQL or technical skills are needed to do this QuickStart.

### Prerequisites
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Completion of the QuickStart “Fundamentals 1: Getting Around”</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

### What You’ll Learn
Through this QuickStart we will walk through how to use Sigma to create beautiful charts and maps, changing configuration parameters to suit your needs.

### What You’ll Build
We will be working with some common sales data from our fictitious company ‘Plugs Electronics’. This data is provided to you automatically. 

We will build a Workbook that looks like this:

![Alt text](assets/Overview1.png)

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## **Viz Basics**
Duration: 30

Our starting point is the “Plugs Sales” Workbook created in the “Fundamentals 2: Working with Tables” QuickStart. It is often easier to spot trends, outliers, or insights which lead to further questions when viewing data in a visualization.  Sigma makes it easy to create visualizations of your data while also enabling you to dig into the data that makes up that visualization.

In Sigma, open the Workbook `Plugs Sales` and place it in `edit mode`.

You should have the Page from the “Getting Around” QuickStart called “Data” already. If not, review that QuickStart to create it.

Create a `new Page` called `Viz`.

You are probably thinking we will use the Element Panel to add a Viz (as we learned in the Tables QuickStart) and we could do that but let's try a different workflow.

Open the Workbook’s `Data Page`. Click on the icon as shown below and click `Create Child Element`. Select `Visualization` from the drop list.

![Alt text](assets/vizbasics1.png)

Sigma has created a new Page Element below the Table as an un-configured placeholder for the new Viz. This placeholder is a child of the Table as it references everything in the Parent Table so it is now easy to build whatever Viz we want from that data. 

<aside class="positive">
<strong>NOTE:</strong><br> This is awesome because it means someone who knows the underlying data could make this Table available with careful curation and others could just use it. There are other ways to create curated datasets that you will learn later.
</aside>

We prefer that this new Viz is on its own Page so click the `vertical dot menu` and select `Move to` and then click `Viz`. The Viz is now on the `Viz` Page and it is open for us.

![Alt text](assets/vizbasics2.png)

In the `Element Panel` click on the + of the `X-Axis` and select `Store Region` as below. Use the search feature when you have a large number of columns to save scrolling time:

<img src="assets/vizbasics3.png" width="400"/>

We can also **drag values onto the axis** instead of using the add button.  If we look at our columns on the bottom, find the `Profit` column and drag it under the `Y-Axis`. 

We have our first Chart:
![Alt text](assets/vizbasics4.png)

<aside class="negative">
<strong>NOTE:</strong><br> Sigma automatically summed the profit to create an aggregate.  You can change the type of aggregate at any time using the dropdown, or if you do not wish to aggregate the values you can uncheck the ‘Aggregate Values’ checkbox.
</aside>

<img src="assets/vizbasics5.png" width="300"/>

Now let's look at our sales over time to get an understanding of how we are trending.  Another way to create a new chart is by selecting the `+ icon` on the top left panel next to the `Page Elements` title:

<img src="assets/vizbasics6.png" width="300"/>

After selecting the ‘Viz’ icon, you will be prompted to select a source to use for that ‘Viz’.  

You can see tabs for selecting:

 <ul>
      <li><strong>In Use: </strong>Sources that are currently being used by other elements in the workbook.</li>
      <li><strong>New: </strong>A new source that could be a table, dataset, sql, or uploaded csv.</li>
      <li><strong>Page Elements: </strong>Any data elements already in the workbook such as the bar chart we created.<li>
</ul>

From the `Select Sources...` tab select `PAGE ELEMENTS` and `Data` Page and `Plug Sales` as the desired source. You could have also used the IN USE tab if the source was already in use elsewhere in the Workbook:

<img src="assets/vizbasics7.png" width="300"/>

We now have a new chart below our bar chart. If like you can select the new Viz and use the hand control to drag the new Viz to be side by side with the bar chart:

<img src="assets/vizbasics8.png" width="700"/>

This time, using the Visualization dropdown, select a line chart. 

<aside class="negative">
<strong>NOTE:</strong> Make sure you have the new, empty chart selected. You don't want to change the first chart you made by accident.
</aside>

<img src="assets/vizbasics9.png" width="700"/>

To create the Line Chart the operations are the same as the Bar Chart, dragging and dropping (or selecting from the axis drop down menu) to select the data columns. 

Let's drag the `Date` column into the `X-Axis` and truncate it to be `month`:

<img src="assets/vizbasics10.png" width="300"/>

Next we can place our `Revenue` column on the `Y-Axis` to see our revenue of time. Again, Sigma has automatically summed the revenue to the monthly level.

The Line chart should look like this now:

<img src="assets/vizbasics11.png" width="700"/>

Taking this one step further, we can compare our different regions by placing `Store Region` on color.  You can do this by finding the `Store Region` column in the ‘columns’ tray and dragging it into the `Color tab` in the `Elements Panel`.

We now have a multi-line chart showing our Revenue over time by Store Region:

<img src="assets/vizbasics12.png" width="700"/>

![Footer](assets/sigma_footer.png)
<!-- END OF VIZ BASICS -->

## **Maps**
Duration: 15

Geographic data can tell a powerful story. Whether analyzing regional trends or plotting sites, maps are packed with insights generated from your location data. Sigma Maps help contextualize geospatial information and provide greater understanding when analyzing data. With Sigma, you can create interactive maps using regions, latitude and longitude, or map paths and areas utilizing geoJSON.

 <ul>
      <li><strong>Region maps: </strong>Require a single text column on the map's REGION field. For example, you can use a column “US State” to distinguish between “regions” or states in this example</li>
      <li><strong>Point maps: </strong>Require a number column on both the map's LATITUDE and LONGITUDE fields. For example, you may want to show store locations on a map.</li>
      <li><strong>GeoJSON blobs: </strong>Allow for storage of more complex geographical data than simple numeric lat/long columns.<li>
</ul>

Add a `new Viz`to the Page and set its source of data to the `Workbook Element / Plugs Sales / Data table`.
Change the `Visualization type` to `Map-Region`.

Set the Region to `Store State` and in the region type dropdown below, choose `US States`.

We now have a map that shows the data grouped by US-State:

![Alt text](assets/maps1.png)

We can make this more useful by adding an additional grouping to make the high and low performing regions stand out visually. Let’s assume we want to see how each region is performing by revenue per customer. 	

Click the button in the upper right corner of the map to show the underlying data:

<img src="assets/maps2.png" width="400"/>

Notice that the underlying data is already grouped by US State. Add a `new column` called `Revenue per Customer`. 

<img src="assets/maps3.png" width="400"/>

We want this column to calculate the total revenue for each unique customer so set the formula for this new column to: 
`Sum([Price]) / CountDistinct([Cust Key])`

<img src="assets/maps4.png" width="500"/>

Add the new column `Revenue per Customer` to the `Map color scale` as shown:

<img src="assets/maps5.png" width="500"/>

You may want to set the `format` of the `Revenue per Customer` to `currency` and `truncate` the trailing decimals to make it cleaner as:

<img src="assets/maps6.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> When you hover over each US-State, the States data value is shown for us. Right clicking on any State allows you to include/exclude it from the dataset or drill down to the underlying data. 
</aside>

<aside class="positive">
<strong>Drill Anywhere: </strong><br>The ability to drill anywhere did not have to be programmed ahead of time by a developer.
Unconstrained, ad-hoc analysis gives you the power to explore the data beyond what was originally intended and as you see fit.
</aside>

Click on `California` and `Keep only` California. Now we can work with only the California data. We can browse the data or duplicate it to create different views for our own analysis. 

<img src="assets/maps7.png" width="600"/>

To revert the Map you can either click the `Back icon` on the control bar or delete the `Map Filter`:

<img src="assets/maps8.png" width="600"/>

![Footer](assets/sigma_footer.png)
<!-- END OF MAPS -->

## **Single Value KPI**
Duration: 5

As you have seen, there are many different types of Viz available and they all follow the same basic workflow so once you know how to do one, the others will seem obvious. 

For example, let's say we want a `Single Value KPI` that shows `Total Sales` at the top of the Page. Just use the same workflow to add a new Viz, set it's data source and change the Viz type to Single Value. 

From there you can `rename the Value column` from Revenue to `Total Sales` and `format` the value to currency and `truncate` the trailing decimals. 

We have done all this before on the Bar Chart so you already know how. Sigma is designed from the ground up to be as easy as 1-2-3!

<img src="assets/otherviz1.png" width="600"/>

Add as many KPI as you like; for example, total profit, total order count and Total COGs would be good to add.

![Footer](assets/sigma_footer.png)
<!-- END OF KPI -->

## What we've covered
Duration: 5

In this QuickStart we learned how to use Sigma to create beautiful charts and maps and how to make configuration changes to the Elements to obtain the desired results.

[Click here to move to the next QuickStart in this series.](https://quickstarts.sigmacomputing.com/guide/fundamentals-4-working-with-pivot-tables/index.html)

![Alt text](assets/Final.png)

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
