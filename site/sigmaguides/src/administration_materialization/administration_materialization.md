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