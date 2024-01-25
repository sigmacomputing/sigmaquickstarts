author: pballai
id: functions_period_over_period_analysis
summary: functions_period_over_period_analysis
categories: Functions
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-01-23

# Getting Started with Period Over Period Analysis in Sigma

## Overview 
Duration: 5 

Period over period (PoP) analysis, while conceptually straightforward, can be challenging to understand and execute effectively. 

PoP analysis involves selecting two or more specific time periods and comparing key metrics or data points between these periods. These periods can be days, weeks, months, quarters, or years, depending on the context and objectives of the analysis.

It offers a structured approach to understanding data trends over time, which is crucial for any data-driven decision-making process. 

However, it's not just about comparing numbers. **It's about identifying trends, patterns, and changes over time and gaining insight into what drives changes in those numbers,** This can be invaluable in a variety of technical and business contexts.

This QuickStart will discuss typical use cases and demonstrate some methods in Sigma to create useful PoP analysis with ease.

### Target Audience
This QuickStart is designed for data analysts, business strategists, and marketing professionals who want to effectively utilize period over period analysis using Sigma.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
A basic understanding of PoP analysis and how to use Sigma effectively when creating content.

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## A Little More About PoP Analysis
Duration: 20

#### What is involved?
Period over period (PoP) analysis is a method of comparing metrics or data points across different, but comparable, time periods. 

In general, these factors require consideration when creating a PoP analysis:

 <ul>
      <li><strong>Comparative Analysis Over Time:</strong> PoP analysis involves selecting two or more specific time periods and comparing key metrics or data points between these periods. These periods can be days, weeks, months, quarters, or years, depending on the context and objectives of the analysis.</li>
      <li><strong>Consistent Time Frames:</strong> The periods compared should be of equal length and similarly positioned. For example, comparing Q1 of one year to Q1 of another year, or comparing the month of December across different years.</li>
      <li><strong>Metric Selection:</strong> The metrics compared can vary widely, from sales figures and website traffic to production costs and customer engagement metrics, depending on the industry and the specific questions being addressed.</li>
 </ul>

### Why PoP is important

 <ul>
      <li><strong>Trend Identification:</strong> PoP analysis helps identify trends over time, allowing technical professionals to see whether certain metrics are improving, declining, or remaining stable.</li>
      <li><strong>Seasonal Adjustments:</strong> It's crucial for understanding seasonal impacts on business or user behavior. For example, retail businesses often compare month-over-month (MoM) or year-over-year (YoY) sales to plan inventory and marketing strategies.</li>
      <li><strong>Performance Measurement:</strong> In a business context, PoP analysis is essential for assessing the effectiveness of strategies or initiatives. If a new marketing campaign was launched, comparing sales figures before and after the campaign can gauge its impact.</li>
      <li><strong>Forecasting and Planning:</strong> Understanding past trends is critical for accurate forecasting and strategic planning. PoP analysis provides a historical context that can inform future business decisions.</li>
      <li><strong>Anomaly Detection:</strong> It aids in identifying anomalies or outliers. A sudden spike or drop in a normally consistent trend can indicate an issue or an opportunity that might require further investigation.</li>
</ul>

As you can see, gaining insights into what drives changes in data over time is invaluable in a variety of technical and business contexts. This is why it's so widely used across almost any industry.

#### Technical considerations
While it is tempting to just "jump right in" and start comparing values based on different time periods, there are some things to keep in ming at all times.

 <ul>
      <li><strong>Data Quality and Consistency:</strong> Ensure that the data is accurate and consistent across the periods being compared.</li>
      <li><strong>Normalization:</strong> Sometimes, data might need to be normalized to make fair comparisons, especially if there are changes in data collection methods or business processes.</li>
      <li><strong>Statistical Significance:</strong> When analyzing trends or changes, it's important to consider the statistical significance of the findings, especially in cases with large datasets. In other words, what change has meaningful impact to the business?</li>
      <li><strong>Visualization Tools:</strong> Utilizing appropriate data visualization tools can make it easier to spot trends and communicate findings to non-technical stakeholders.
</ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma addresses these areas by proving direct access to the data warehouse at massive scale, creating and materializing datasets, and allowing users to drill anywhere in the data using a familiar spreadsheet interface. 
</aside>

### Common use cases
PoP is widely used across industries and these are the most common reasons why:

 <ul>
      <li><strong>Trend Identification:</strong> For example, healthcare wants to know which patients receiving the same treatment are improving, declining, or remaining stable.</li>
      <li><strong>Seasonal Adjustments:</strong> For example, retail businesses often compare month-over-month (MoM) or year-over-year (YoY) sales to plan inventory and marketing strategies.</li>
      <li><strong>Performance Measurement:</strong>  If a new marketing campaign was launched, comparing sales figures before and after the campaign can gauge its impact.</li>
      <li><strong>Forecasting and Planning:</strong> Sales management always wants to know where products are selling well (or not), and make adjustments accordingly to inventory or staffing levels.</li>
      <li><strong> Anomaly Detection:</strong> Product managers might react to a sudden spike or drop in a normally consistent item. This can indicate an issue or an opportunity that might require further investigation.</li>
</ul>

There really is no end to the ways companies need to leverage PoP analysis. 

The common thread is always to identify a meaningful change, and react to it as fast as possible, in order to operate efficiently and drive better outcomes. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## PoP in Sigma
Duration: 20

Sigma provides users of different skill levels the benefit of two ways to create PoP analysis. For less technical users, we provide a "wizard-based" interface that makes creating PoP analysis a breeze. For the more technical users, we provide all the functions and tools to create any PoP analysis they may want. 

Which route you choose is up to you, and we will show examples of both to help you see the difference.

### Sample Data
For both methods, we will use the `PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` table which is made available to all customers via the `Sigma Sample Data` connection. 

If you are unsure how to build a workbook based on this data, please review the [QuickStart: Fundamentals 1: Getting Around.](https://quickstarts.sigmacomputing.com/guide/fundamentals-1-getting-around/index.html?index=..%2F..index#4)

We also need to calculate the line item `Revenue`, as this table does not supply it. This is really simple to do in Sigma:

Columns can be added by clicking the `+` in the `Element Panel` / `Columns` sidebar, and we prefer to click the column we want to create the new column next to. For example, to create the new column to the right of the `Date` column:

<img src="assets/pop2.png" width="800"/>

Rename this columne to `Revenue` and set it's formula to:
```code
[Price] * [Quantity]
```

<img src="assets/pop3.png" width="800"/>

Save your workbook.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sigma's PoP Wizard
Duration: 20

Sigma’s guided workflow for building period-over-period analyses provides a quick and convenient way to evaluate performance over time. 

It allows users to generate dynamic period comparisons, **without entering complex custom formulas,** then easily visualize the results to identify trends, patterns, and anomalies.

<aside class="negative">
<strong>NOTE:</strong><br> PoP features can be used in tables, pivot tables, and visualizations.
</aside>

For this example we are interested in holiday sales in December, over time. To do this, we will use Sigma's PoP wizard to create a grouped table that shows the revenue, amount of difference, and percentage change year over year.

Open the `Revenue` column's menu and select `Add column via` > `Period over period comparison...`:

<img src="assets/pop4.png" width="800"/>

We are presented the PoP Wizard where we can configure for the output we are interested in. In this case, we want to `sum revenue`, using the date column and compare the `Same month last year`:

<img src="assets/pop5.png" width="500"/>

To read more about all the options that are available, and there are many, refer to [Sigma's documentation on PoP analysis.](https://help.sigmacomputing.com/docs/create-and-edit-period-over-period-analysis)

Three calculations are created for us by the wizard (number 1 in the screenshot) and the table is grouped by `Date` for us too:

<img src="assets/pop6.png" width="800"/>

This gets us close to what we wanted but we are showing all the months for each year and we only really wanted `December` sales.

A simple way to achieve this is to add a column for `MonthName` (anywhere in the table really), and set the formula to:
```code
MonthName([Date])
```

This will provide the name of the month for each row, based on the `Date` column:

<img src="assets/pop7.png" width="800"/>

Now we simply set a new filter on the `MonthName` column to only show December:

<img src="assets/pop8.png" width="800"/>

Since `2019` is the last year, there are `nulls` in the data for `2018` (in this example). We filter on one of the columns having a null value and uncheck the check from `Include nulls`:

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma's sample data shifts dates automatically as each year passes in order to keep the data "current". Please make note of that if you see some discrepancies between what your sample data shows and what the screenshots in this QuickStart show. 
</aside>

We now have our analysis and can easily further manipulate it or build child visualizations from this base table.

We added simple [conditional formatting](https://help.sigmacomputing.com/docs/create-and-manage-tables#apply-conditional-formatting) to negative value cells:

<img src="assets/pop10.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## PoP without the Wizard
Duration: 20

Sigma's PoP wizard is a great time-saving feature for users looking for quick answers, Others may prefer to configure everything themselves, and that is fine too. We just need to do a little more work, but when done, we will know exactly how everything works. Wizards tend to hide some of the complexity in exchange for ease of use and speed. 

Let's do the same PoP analysis we did in the last section and expand it just a little more, and present the data in a different way.

### New page with sample data

Our starting point will be a new `Page` in the workbook we last used. 

On this new `Page` we will add the `PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` table which is made available to all customers via the `Sigma Sample Data` connection.

<aside class="negative">
<strong>NOTE:</strong><br> Be sure that the "Revenue" column exists, as we did in the previous section. 
</aside>
<img src="assets/pop11.png" width="800"/>

### Add summary columns

Click on the word `Summary` (as shown below) and click the `+` to add a new summary item and select `New summary` from the top of the list:

<img src="assets/pop12.png" width="800"/>

Click on the up arrow on the new `Summary`, which has the default name of `calc`. Select `Rename column` and set it's name as `Period Start`:

<img src="assets/pop13.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> You could also just double-click on the new Summaries name, and it will allow you type (or paste) a different name.
</aside>

Repeat this process, adding new summaries for:

 <ul>
      <li>Period End</li>
      <li>Previous Period Start</li>
      <li>Previous Period End</li>
      <li>Current Sales</li>
      <li>Previous Sales</li>
      <li>Sales Growth</li>
</ul>

You table should now look like this:

<img src="assets/pop14.png" width="800"/>

### Add calculations

Now that we have our "framework", let’s figure out the start and end dates for each time frame using two simple date functions; [DateAdd()](https://help.sigmacomputing.com/docs/dateadd) and [Today()](https://help.sigmacomputing.com/docs/today). 

For the `Period Start` date of the current period, which is 30 days before the end date.

Select the `Period Start` summary and set it's formula to:
```code
DateAdd("day", -30, [Period End])
``` 

This will evaluate to `null` at first because we have not set a formula for `Period End`. That is fine, proceed.

<img src="assets/pop15.png" width="800"/>

Next, select the `End Period` summary and set it's formula to:
```code
DateAdd("day", -1, Today())
``` 

Now we have values for `Period Start` and `Period End`:

<img src="assets/pop16.png" width="800"/>

We just need to repeat this process to add calculations for the `Previous Period Start` and `Previous Period End` summaries. For those two, use these calculations:

For `Previous Period Start`, the previous period is one year before the current period's start date. You can find it by subtracting one year:
```code
DateAdd("year", -1, [Period Start])
```

For `Previous Period End`, the previous period is the same as the current period's end date, but one year earlier. You can find it by subtracting one year:
```code
DateAdd("year", -1, [Period End])
```

To find `Current Sales` for the current time frame, we need to add up the sales that happened between the start and end dates, for the current period:
```code
SumIf([Revenue], Between([Date], [Period Start], [Period End]))
```

To get more [information on `SumIF`, click here.](https://help.sigmacomputing.com/docs/sumif)

To find the sales for the previous time frame, add up the sales that happened between the start and end dates for the previous period, using this formula:
```code
SumIf([Revenue], Between([Date], [Previous Period Start], [Previous Period End]))
```

For the last summary, we need to calculate the percent of sales growth. To do this, we subtract `Previous Sales` from `Current Sales`, then divide that by sales from `Previous Sales`.

Here is that formula:
```code
(([Current Sales] - [Previous Sales] ) / [Previous Sales])
```

<aside class="negative">
<strong>NOTE:</strong><br> Make sure to format the "Sales Growth" summary as a percentage.
</aside>

Our table now looks like this:

<img src="assets/pop17.png" width="800"/>

Now that we have summary values, we can use them to drive some visualizations. 

### Add KPI Charts

[Key performance indicator (KPI) charts](https://help.sigmacomputing.com/docs/build-a-kpi-chart) highlight single metric values and are a great way to simply present performance or progress toward goals.


<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma makes data reuse very simple by using child elements. This is not only important for ease of use but also means that content created be reusing existing elements can leverage Sigma's Alpha Query, which works to reduce how many times the data needs to be requested from the source. This results in improved performance and reduced storage-compute costs.
</aside>

To learn more about how Sigma performs calculations, [check out this QuickStart.](https://quickstarts.sigmacomputing.com/guide/administration_sigma_calculations/index.html?index=..%2F..index#0)

To add a new child element to our table, click the icon to `Create Child Element` and select `Visualization`:

<img src="assets/pop18.png" width="800"/>

Hover and open the dropdown menu for column sources, and check the box next to `Sales Growth` to make it visible in your KPI Chart:

<img src="assets/pop19.png" width="800"/>

From the column list in the element panel, drag the column `Sales Growth` into the `Value` shelf and make sure to uncheck `aggregate values`. 

When aggregate values is unchecked, it tells Sigma to take the source field and display it as it is, rather than summarizing data.

<img src="assets/pop20.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> You may have noticed in the screenshots that we moved the KPI to the top of the page and adjusted it's size. Sigma's layout tools are easy to use and allow you to create designs that are optimized for your users.
</aside>

Adding more KPIs is simply a matter of repeating this process for any other summary values we would like to use.

For example, if we add `Current Sales` and `Previous Sales` and do a little adjustment to the layout.

A few ways to do this but one quick way is to select the existing KPI, opening it's menu and selecting `Duplicate`:

<img src="assets/pop21.png" width="800"/>

After doing that twice, we can drag the new column over the existing one for each new KPI. This action will replace the columns accordingly:

<img src="assets/pop1.gif">

A nice finishing touch is to add a `Comparison` column to the `Current Sales` KPI:

<img src="assets/pop23.png" width="800"/>

Our PoP analysis now looks like this and we are done:

<img src="assets/pop24.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## What we've covered
Duration: 5

This QuickStart on period-over-period calculations in Sigma provides valuable insights for effective data comparison across different time-frames. 

While Sigma makes PoP analysis easy, there are a few key things to to keep in mind:

 <ul>
      <li><strong>Appropriate Comparisons:</strong> Ensure the time-frames compared are logically equivalent. Avoid comparing partial periods to complete ones, as it can lead to skewed insights.</li>
      <li><strong>Business Context:</strong>  Choose time-frames that are relevant to your business context. Be wary of seasonal fluctuations or industry-specific trends that might impact the analysis.</li>
      <li><strong>Flexibility in Time-frames:</strong> You can compare any two time-frames using Sigma functions, which are very powerful.</li>
      <li><strong>Visual Indicators:</strong> Utilize color coding, like green for positive and red for negative metrics, to visually differentiate performance. This aids in quickly identifying trends and variances.</li>
      <li><strong>Show Comparative Metrics:</strong>  Alongside the actual figures, include the comparative metrics to provide a clearer understanding of the analysis.</li>
</ul>
  
These guidelines help in making more accurate and business-relevant interpretations of data, enhancing the utility of Sigma’s period-over-period calculations for your business.

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