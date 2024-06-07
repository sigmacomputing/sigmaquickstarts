summary: Fundamentals for new users and Sigma Visualizations
id: fundamentals-3-working-with-visualizations-v2
categories: fundamentals
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
authors: pballai
lastUpdated: 2024-06-31

# Fundamentals 3: Working with Visualizations v2

## Overview 
Duration: 5

This QuickStart is part of a series of QuickStarts designed to instruct new users how to use Sigma to explore and analyze data using Visualizations (**Viz**). 

We will be working with some common sales data from our fictitious company `Plugs Electronics`, reusing content we created in the QuickStart “Fundamentals 1: Getting Around”.

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart assumes you have already taken the QuickStart Fundamentals 1 and 2, and are now generally familiar with Sigma. Given this, some steps are assumed to be known and may not be shown in detail.
</aside>

Sigma supports a wide variety of types, and are adding others so be sure to check our documentation for the latest list:

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
                <li><strong>Area chart</strong></li>
                <li><strong>Bar chart</strong></li>
                <li><strong>Box and Whisker chart</strong></li>
                <li><strong>Combo chart</strong></li>                
                <li><strong>Pie / Donut chart</strong></li>
                <li><strong>Funnel chart</strong></li>
                <li><strong>Gauge chart</strong></li>
                <li><strong>Geography Map</strong></li>                
              </ul>
            </td>
            <td>
            <ul>
                <li><strong>KPI chart</strong></li>                
                <li><strong>Line chart</strong></li>
                <li><strong>Maps – by region, point (lat/long), or GeoJSON</strong></li>
                <li><strong>Point map</strong></li>                
                <li><strong>Sankey diagram</strong></li>                
                <li><strong>Scatter plot</strong></li>
                <li><strong>Single value visualizations</strong></li>
                <li><strong>Dynamic text value</strong></li>
              </ul>
              </td>
        </tr>
    </tbody>
</table>

For the latest list of supported Viz types, [click here.](https://help.sigmacomputing.com/docs/intro-to-visualizations)

 ### Target Audience
Sigma combines with the unlimited power of the cloud data warehouse and the familiar feel of a spreadsheet; no limit on the amount of data you wish to analyze. Sigma is awesome for users of Excel and even better for customers who have millions of rows of data.

Typical audience for this QuickStart are users of Excel, common Business Intelligence or Reporting tools and semi-technical users who want to try out or learn Sigma. Everything is done in a browser so you already know how to use that. No SQL or technical skills are needed to do this QuickStart.

### Prerequisites
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Completion of the QuickStarts Fundamentals 1 and 2</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

### What You’ll Learn
Through this QuickStart we will walk through how to use Sigma to create beautiful charts and maps, changing configuration parameters to suit your needs.

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## **Viz Basics**
Duration: 30

Our starting point is the “Fundamentals” workbook created in the “Fundamentals 2: Working with Tables” QuickStart. 

It is often easier to spot trends, outliers, or insights that lead to further questions when viewing data in a visualization.

Sigma makes it easy to create visualizations of your data while also enabling you to dig into the data that makes up those visualizations.

In Sigma, open the Workbook `Fundamentals` and place it in `edit mode`.

### Visualization as Child

Our workbook has a page called `Data`.

Click on the table's icon, as shown below, and click `Create Child Element`. 

Select `Visualization` from the drop list.

<img src="assets/viz2_2a.png" width="800"/>

Sigma creates a new page element below the table as an un-configured placeholder for the new visualization.

Move the Viz to the `Dashboard` page:

<img src="assets/viz2_2.png" width="800"/>

Drag the Viz above the table:

<img src="assets/vizbasics1.png" width="800"/>

This placeholder is a child of the table, as it references everything in the parent table, making it easy to build whatever visualization we want from that data.

<aside class="positive">
<strong>NOTE:</strong><br> This is awesome because it means someone who knows the underlying data could make this table available with careful curation, and others could just use it.
</aside>

Rename this bar chart reflect `Profit and Sales by Store Region`.

Now that you have completed the first two QuickStarts in this series, you know how easy it is to use the element panel to configure elements on the canvas. 

Use the element panel to configure the bar chart as shown below:

<img src="assets/vizbasics3.png" width="800"/>

We have our first Viz:

<img src="assets/vizbasics4.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Sigma automatically summed the sales and profit columns to create an aggregate. You can change the type of aggregate at any time using the dropdown, or if you do not wish to aggregate the values you can uncheck the ‘Aggregate Values’ checkbox.
</aside>

<img src="assets/vizbasics5.png" width="500"/>

### Customizations

We can further customize many of the bar chart's attributes using the `element panel` > `chart` icon:

<img src="assets/viz2_3.png" width="800"/>

Explore both the `Chart` and `Paint Brush` icons to see what can be customized for the selected chart.

<aside class="negative">
<strong>NOTE:</strong><br> The available customizations are driven by the type of Viz that is currently selected. 
</aside>

### Adding new Viz

Another way to create a new Viz is by selecting the `+ icon` on the top left panel next to the `Page Elements` title, and selecting `VIZ`:

<img src="assets/vizbasics6.png" width="500"/>

After selecting the ‘VIZ’ icon, Sigma prompts us to select a source to use for that ‘Viz’.

We will use the same `source selector` that we used when we added a table in Fundamentals #2.

<img src="assets/vizbasics7.png" width="500"/>

We now have a new chart below our bar chart. 

Drag the new Viz to be side by side with the bar chart, and use the `element panel` to configure it as a pic chart:

<img src="assets/vizbasics8.png" width="800"/>

Sort the `Brand` column by `Sum of Profit`.

<aside class="negative">
<strong>NOTE:</strong> Always make sure you have the correct canvas element selected when making changes. You don't want to change the first chart you made by accident.
</aside>

Now we have two charts:

<img src="assets/vizbasics9.png" width="800"/>

We want the two charts to change, when the `Region` control is changed by the user. 

This is done by adding the two new charts as `Targets` of the control:

<img src="assets/vizbasics9b.png" width="600"/>

Go ahead and add both the charts as targets:

<img src="assets/vizbasics9c.png" width="600"/>

Change the `Region` control to `West`. 

The `Profit by Brand` chart now shows `No Data`. **What happened?**

<img src="assets/vizbasics9d.png" width="800"/>

That chart does not have the `Region` column, so the  query returns no data. 

Remove that chart from the target list to fix that issue. 

Now, setting the `Region` control to `West` updates the table and bar chart only:

<img src="assets/vizbasics9e.png" width="800"/>

Click `Publish`.

There are many different chart-type visualizations available to experiment with; we will not cover them all since they are all added and configured as we have already done. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> This consistency of design is really important to Sigma; it makes working with data easy!
</aside>

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

Add a `new Viz`to the ` Viz` page and set its source of data to the `Workbook Element / Plugs Sales / Data table`.

Change the `Visualization type` to `Map-Region`.

Set the Region to `Store State` and in the region type dropdown below, choose `US States`.

We now have a map that shows the data grouped by US-State:

![Alt text](assets/maps1.png)

We can make this more useful by adding an additional grouping to make the high and low performing regions stand out visually. Let’s assume we want to see how each region is performing by revenue per customer. 	

Click the button in the upper right corner of the map to show the underlying data:

<img src="assets/maps2.png" width="600"/>

Notice that the underlying data is already grouped by US State. Add a `new column` called `Revenue per Customer`. 

<img src="assets/maps3.png" width="400"/>

We want this column to calculate the total revenue for each unique customer so set the formula for this new column to:
```plaintext
Sum([Price]) / CountDistinct([Cust Key])
```

<img src="assets/maps4.png" width="500"/>

Add the new column `Revenue per Customer` to the `Map color scale` as shown, selecting "By scale" from the drop-list:

<img src="assets/maps5.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> When you hover over each US-State, the States data value is shown for us. Right clicking on any State allows you to include/exclude it from the dataset or drill down to the underlying data. 
</aside>

<aside class="positive">
<strong>Drill Anywhere: </strong><br>The ability to drill anywhere did not have to be programmed ahead of time by a developer.
Unconstrained, ad-hoc analysis gives you the power to explore the data beyond what was originally intended and as you see fit.
</aside>

Right-click on `California` and `Keep only` California. Now we can work with only the California data. We can browse the data or duplicate it to create different views for our own analysis. 

<img src="assets/maps7.png" width="600"/>

To revert the Map you can either click the `Back icon` on the control bar or delete the `Map Filter`:

<img src="assets/maps8.png" width="600"/>

![Footer](assets/sigma_footer.png)
<!-- END OF MAPS -->

## **Single Value KPI**
Duration: 5

As you have seen, there are many different types of Viz available and they all follow the same basic workflow, so once you know how to do one, the others will seem obvious. 

For example, let's say we want a `Single Value KPI` that shows `Total Sales` at the top of the Page. Just use the same workflow to add a new Viz, set its data source and change the Viz type to Single Value. 

From there you want to add `Revenue` to the value. It will automatically be named `Sum of Revenue`, but we can rename it `Total Sales` instead. 

If the data is not formatted as currency, you can easily change it and truncate the trailing decimals for a cleaner look.

We have done all this before on the bar and line charts, so you already know how. Sigma is designed from the ground up to be as easy as 1-2-3!

<img src="assets/otherviz1.png" width="600"/>

There are many configuration options for charts that can be accessed by clicking on the `paintbrush` icon:

<img src="assets/otherviz1a.png" width="600"/>

Add as many KPI as you like; for example, total profit, total order count and Total COGs would be good to add.

If you are interested in having a KPI that also shows trend data, [checkout the KPI Chart viz](https://help.sigmacomputing.com/docs/build-a-kpi-chart)

![Footer](assets/sigma_footer.png)
<!-- END OF KPI -->

## What we've covered
Duration: 5

In this QuickStart we learned how to use Sigma to create beautiful charts and maps and how to make configuration changes to the Elements to obtain the desired results.

[Click here to move to the next QuickStart in this series.](https://quickstarts.sigmacomputing.com/guide/fundamentals-4-working-with-pivot-tables/index.html)

![Alt text](assets/Final.png)

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
