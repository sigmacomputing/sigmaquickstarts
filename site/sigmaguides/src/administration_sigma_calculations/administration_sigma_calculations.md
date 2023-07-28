author: pballai
id: administration_sigma_calculations
summary: administration_sigma_calculations
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: {lasted updated using the date format yyyy-mm-dd}

# Query Performance with Sigma


## Overview 
Duration: 5 

This QuickStart introduces and discusses how Sigma is designed to optimize query performance as data is requested by the user interface. Extensive engineering time has been spent determining a solution that provides the best user experience, performance and least cost impact when used against a data warehouse. 

To accomplish this, Sigma provides multiple tiers of caching and evaluation to reduce data warehouse load and enhance user experience. 

Using these mechanisms, Sigma helps ensure that customers typically gain far more value from fast, easy access to data than the increased cost. This is a bit of a balancing act and certainly not something that is easy to do.

We also typically see that for a given organization, economies of scale are realized, meaning as more Sigma users onboard, the associated cost per user decreases.

 ### Target Audience
Tech executives, architects, developers and Sigma administrators who are looking for a deeper understanding of Sigma's unique approach. This approach allows Sigma to perform well against very large datasets, without negatively impacting the end user experience. 

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
  
![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tier Definitions
Duration: 20

Each time a user performs an operation, Sigma evaluates where data is retrieved from in order to populate a Workbook’s tables, charts, pivots, and other elements. 

In order to perform these calculations as fast as possible, data operations (calculations) are attempted at a few different tiers. 

Below we list the different tiers (in no particular order) and describe them.

 <ul>
      <li><strong>Sigma results cache:</strong> Sigma maintains a mapping of Snowflake result ID’s, if a Sigma generated SQL query has been previously run, Sigma can actually request the result from Snowflake using the request id.</li>
      <li><strong>Snowflake results cache:</strong> Sigma will always generate the same exact SQL for a given configuration of a workbook, so that if a workbook has been configured a way previously within the last 24 hours, the results will be fetched from the Snowflake results cache instead of having a new query computed. </li>
      <li><strong>Sigma Browser Cache:</strong> Sigma maintains a cache of recent results in the web browser. This cannot help on the initial load since the cache is empty, however, as changes are made in the workbook, it is automatically leveraged. Any new query is checked against the recent results and if a matching result is found, no network request or query is issued.</li>
      <li><strong>Sigma Alpha Query:</strong> The data presented in a Sigma workbook ends up cached in the browser. Sigma will leverage the compute of the browser to compute additional calculations that don’t require data to be refetched instead of sending new queries for the database to compute. An example would be a user creating a new calculation such as a percentage change ([column 2] - [column 1])/[column 1]. </li>
      <li><strong>Sigma Materialization:</strong> Complex datasets (which could be ones that involve many joins) can be materialized as single tables back to Snowflake and updated on a schedule set in Sigma, this means that the same query will be less costly and more performant.</li>
</ul>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Typical Query Process
Duration: 20

The following flow describes the "typical" decision making that happens when a Sigma user performs a data operation in the UI (browser):


INSERT LUCID CHART HERE:




![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

HOLD THIS TEXT:
  <strong>Sigma Query Timeout:</strong> Sigma enforces query timeouts to ensure that resource intensive queries are canceled when a certain time threshold is met. This ensures that runaway queries do not unnecessarily consume resources and credits. The default timeout limit is 2 mins but is also configurable.

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

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