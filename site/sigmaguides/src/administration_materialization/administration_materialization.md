author: pballai
id: administration_materialization
summary: administration_materialization
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Getting Started

# Materializations
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

Materialization is a general term, used in Business Intelligence, where a complex and slow query is broken up into two parts, and one of these parts is pre-executed and stored at regular intervals, on schedule.

The purpose of materialization is to:
-Improve response time of the query
-Reduce the compute in the CDW

Materialization is a common strategy for improving performance of interactive queries, when the following conditions are satisfied:

Multiple joins. The query has multiple joins, which make the query response time slow. Materialization will execute those joins and write out the result into a single flat table, which will perform much faster. This is called "flattening of the joins".

Source data has significantly higher grain than the workbook charts. If the source data contains millions of transactions, but the workbook charts are only showing daily, weekly or monthly aggregates. Materialization will create a daily (weekly, monthly) summary table, that will be significantly smaller than the source table, improving performance. This is called "reducing the grain" or "reducing cardinality"

There is no requirement for up-to-the minute, live data. When the charts are daily (weekly, monthly), usually data as of the end of the previous day is needed.

When materialization is done in Sigma, then regular (non-oauth) authentication should be used, where every Sigma user is logging into CDW using a single, shared CDQ logon. If a client uses oauth, they can not materialize using Sigma.

The benefit of materializing from Sigma - it is a very simple and quick process, which, unlike its alternatives, does not require data engineering expertise, which translates into saving development time and budget

When the CDW is updated daily, materialization should typically take place during off hours, like in the middle of the night or early morning, after any batch updates into the CDW completed.

Today (May 2023), we allow users to materialize individual workbook elements (tables, charts or pivots), which maked materialization more accessible to non-technical users. 

 

Materialization in Sigma is often governed in some way - you typically don’t want a large number of creators to materialize hundreds or thousands of potentially duplicate objects, so it is common to grant the ability to materialize to a certain, smaller number of creators.

************snowflake........

Snowflake materialization refers to a feature in the Snowflake cloud data platform that allows you to create and store the results of complex queries or views as physical tables. It is a mechanism for precomputing and persisting the intermediate or final results of queries to improve performance and reduce query execution times.

In Snowflake, queries are typically executed on demand, and the data is fetched from the underlying storage layer and processed dynamically. However, materialization enables you to transform certain queries or views into physical tables that are stored within Snowflake's scalable storage system. These materialized tables contain the precomputed results of the associated queries or views.

Materialization can be particularly useful when dealing with complex and resource-intensive queries that are executed frequently or when you need to optimize performance for specific workloads. By creating materialized tables, you can reduce query execution time by avoiding repetitive computations and leveraging the power of direct data access.


Snowflake materialization offers the following benefits:

 <ul>
      <li><strong>Improved query performance:</strong> Materialized tables eliminate the need for repetitive computations, resulting in faster query response times.</li>
      <li><strong>Reduced resource consumption:</strong> By precomputing and storing the results, materialization reduces the computational resources required for query execution, leading to more efficient resource utilization.</li>
      <li><strong>Query optimization:</strong> Materialized tables can be indexed and optimized for specific query patterns, further enhancing performance.</li>
      <li><strong>Enhanced concurrency:</strong> Since the materialized tables store precomputed results, multiple queries can run concurrently without interfering with each other, improving overall system concurrency.</li>
      <li><strong>Simplified data pipelines:</strong> Materialization can simplify complex data pipelines by providing a straightforward way to store and reuse intermediate or final query results.</li>
</ul>

<aside class="negative">
<strong>NOTE:</strong><br> It's important to note that materialized tables in Snowflake are typically managed and maintained by Sigma, automatically updating them as necessary to reflect changes in the underlying data.
</aside>

 ### Target Audience
Sigma administrators who are interested in improving performance when working with large datasets or just generally interest in learning more about materialization with Sigma. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>A Snowflake account with the proper administrative and security admin access.</li>
  <li>Write access must be enabled on your Sigma dataset’s connection.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Snowflake Free Trial](https://signup.snowflake.com/)</button>

### What You’ll Learn
This QuickStart discussed the features and benefits of using Materialization in Sigma and also how to configure and schedule materializations to improve the speed and performance of your reports. 

### What You’ll Build

INSERT IMAGE OF FINAL BUILD IF APPROPRIATE.........

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## Getting Started
Materializations allows you to write datasets and workbook elements back to your warehouse as tables which can reduce compute costs. Materialization enhances query performance by allowing your data warehouse to avoid recomputing the dataset when it's used by an element or a in descendant Sigma analysis. 

Materializations are stored in your warehouse and saved in scratch workspace schema automatically managed by Sigma. Sigma's query compiler automatically and transparently uses the latest materialization.

No one but IT does it vs. letting some people do it (governance)
The gold dataset vs. letting users materialize for dev/testing
When to use Sigma vs. other tools....
Best practices


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

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


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