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

In order to perform these calculations as fast as possible, data operations (calculations) are attempted at a few different tiers, making decisions based on where the requested data can be provided to the user, as fast as possible, and with least cost.

The image below shows where the query logic happens, as "lanes". Each item is then numbered so that we can use the subsequent numbered list to describe each item. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> The numbers DO NOT imply an order of operations. We will discuss that in the next section when we explore a typical query workflow.
</aside>

<img src="assets/aq1.png" width="800"/>

### End User Lane

<strong>1: End User:</strong><br>
An user with a current browser. It does not matter which browser you want to use.

<strong>2: Sigma Browser Cache:</strong><br>
Sigma maintains a cache of recent results in the web browser. This cannot help on the initial load since the cache is empty, however, as changes are made in the workbook, it is automatically leveraged. Any new query is checked against the recent results and if a matching result is found, no network request or query is issued.

<strong>3: Sigma Alpha Query:</strong><br>
The data presented in a Sigma workbook ends up cached in the browser. Sigma will leverage the compute of the browser to compute additional calculations that don’t require data to be refetched instead of sending new queries for the database to compute. An example would be a user creating a new calculation such as a percentage change ([column 2] - [column 1])/[column 1].

### Sigma Cloud Lane

<strong>4: Sigma results cache:</strong><br>
Sigma maintains a mapping of Snowflake result ID’s, if a Sigma generated SQL query has been previously run, Sigma can actually request the result from Snowflake using the request id.<br>

<strong>5: Sigma Materialization:</strong><br>
Complex datasets (which could be ones that involve many joins) can be materialized as single tables back to Snowflake and updated on a schedule set in Sigma, this means that the same query will be less costly and more performant.<br>

### Data Warehouse (Snowflake) Lane
<strong>6: Cloud Services tier:</strong><br>
 Query results in Snowflake, are saved for 24 hours, and are only used only if underlying data has not changed, non-deterministic functions are not used, etc.<br>

<strong>7: Compute tier:</strong><br>
Also called "virtual warehouses", a set of resources allocated to perform data processing tasks such as loading, querying, and running computations on  data. Scale on demand.<br>

<strong>8: Warehouse tier:</strong><br>
Full managed caching feature. Retains the result set of every query executed for 24 hours. Subsequent queries are retrieved from the cache rather than reprocessing the query, significantly improving query response times.<br>

<strong>9: Storage tier:</strong><br>
The cloud-agnostic, independent, elastic, and scalable component that holds all the data loaded into Snowflake.<br>


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Query Decision Tree
Duration: 20

Now that we have the definitions, let's look at what happens when an end-user makes a request for data in Sigma.

The following decision tree is very high-level and does not include lower-level details like security, system architecture, and so on. In this QuickStart, we are only focused on the query processing logic, although it is understood that this is not the only thing related to platform performance.

First, let's review the overall decision tree, showing all the possible routes based on what is discovered about the data requested by any query in Sigma.

Let's assume there is a Sigma workbook that has one table on it. The user may (or may not) have added a few calculated columns and they have published the workbook.

<img src="assets/calc_engine.svg" width="800"/>

### Conditions for using Snowflake Results Cache
Sigma leverages Snowflake's feature called `Results Cache`, which is designed to improve the performance of data retrieval by caching the results of previously executed queries. This is beneficial because repeated execution of identical queries will be faster, saving compute resources.

At the time of this QuickStart, the following are Snowflake's result cache rules. [More information can be found here.](https://community.snowflake.com/s/article/Understanding-Result-Caching#:~:text=Typically%2C%20query%20results%20are%20reused,query%20result%20has%20not%20changed.)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Snowflake's result cache is just one way Sigma optimizes data rendering performance.
</aside>

<ul>
      <li><strong>Same Query:</strong> The exact same query must be run. Even a minor change in whitespace or case in the SQL statement will result in a cache miss.</li>
      <li><strong>Same Virtual Warehouse:</strong> The same virtual warehouse must be used. If you run a query on one warehouse, then the results will be cached for that warehouse. Running the same query on a different warehouse will not hit the cache.</li>
      <li><strong>Same Role (see note below):</strong> The user must be using the same role. If you change roles and run the query, it will result in a cache miss. In most cases, Sigma is using the same connection to query the warehouse. </li>
      <li><strong>Unchanged Data:</strong> The underlying data cannot have changed. If any data in the tables that the query references has been changed, added, or deleted, then the cache will be invalidated for that query.</li>
      <li><strong>Cache Expiration:</strong> The Results Cache in Snowflake expires after 24 hours. Therefore, even if you meet all the above conditions but more than 24 hours have passed since the query was run, the cache will not be used.</li>
      <li><strong>Session Variables:</strong> If a query involves session variables, those variables must have the same values for the Results Cache to be used. For example, The query does not include functions that must be evaluated at execution (e.g. CURRENT_TIMESTAMP()).</li>
      <li><strong>Table Configuration:</strong> he table’s micro-partitions have not changed (e.g. been re-clustered or consolidated) due to changes to other data in the table.
</li>    
</ul>

***NOTE:***
There are some cases (ie: [Sigma dynamic role switching](https://quickstarts.sigmacomputing.com/guide/embedding_7_dynamic_role_switching_snowflake/index.html?index=..%2F..index#0)) where this may not be the case.    

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## A Bit Deeper Now
Duration: 20

Stopped here.



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