author: pballai
id: use_cases_date_spines
summary: use_cases_date_spines
categories: use-cases
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2023-05-26


# Working with Date Spines

## Overview 
Duration: 5 

This QuickStart **QS** provides all the common Markup to be used in new QS. 

Sample code and examples are shown for each item.

We encourage you to review the QS called 

This QuickStart assumes you........

 ### Target Audience
Anyone who is trying to create QS content for Sigma. 

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
How to apply Sigma approved Markdown for your QS.

### What You’ll Build
[I good example of the Sigma style that we want to try to adhere to is here](https://quickstarts.sigmacomputing.com/guide/administration_audit_logging/index.html?index=..%2F..index#0)

INSERT IMAGE OF FINAL BUILD IF APPROPRIATE.........

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## Date Spines
Duration: 10

There are cases when a date exists in one table but not another. This can result in "gaps" in the data that are not desirable. For example, we may have sold products last year but not this year. We want the data to show a date but if there is no sales on that date, then show a null value for sales.

How do we display this if we cannot match on dates because there we no transactions for the same date this year? In comes a date spine.

**Date Spine**; what is that? 

A date spine is another term for date table and is useful for any use case that requires rows of dates to make up for where no dates exist in the original data. 

This is different from the `Date Calendar` QuickStart section in that we only cared about the dates in the Retail Calendar then. Recall that there were keys with no matches when we did the join? There were "gaps" in our sample data but that was not the point of that use case. 

These 'gaps' in the data and can be problematic depending on the use case. 

<img src="assets/twitter.jpeg" width="800"/>






 <li><strong></strong> In general, there are three ways to deal with these "gaps":
    <ol type="n"> 
      <li><strong>Exclude unmatched transactions:</strong>  If the requirement of your report is that only transactions with matching dates from both tables should be included, you could exclude the transactions from the table that does not have matching dates. This could be done by using a join clause that specifies that only matching records from both tables should be returned.</li>
      <li><strong>Include unmatched transactions with null values:</strong> If you need to include all transactions from both tables, but some transactions do not have matching dates, you could include those transactions in the report with null values for the missing date. This can be done by using a left or right join, which will return all records from one table and only matching records from the other table. In the case of a left join, the unmatched records from the right table will have null values for their corresponding fields in the result se.</li>
      <li><strong>Group transactions by date range:</strong>  If the requirement of your report is to group transactions by date range rather than by exact date, you could define date ranges that include transactions from both tables. This can be done by using a range-based join condition, such as "table1.date between table2.date - interval 1 day and table2.date + interval 1 day".</li>
      <li><strong>Use a Date Spine/Table:</strong> If the requirement is to include all relevant dates regardless if they exist or not in the primary table AND we want to add the date if they do not, and once they are added, show the corresponding value as null.</li>
    </ol>
  </li>

The first step in this process is to 





Canal Store #455
HC6517560146






This is where the date spine can help.






















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