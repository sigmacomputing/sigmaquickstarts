author: pballai
id: 10_2023_first_friday_features
summary: 10_2023_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2023-11-08

<!-- 
10/6/23: done
10/13/23: done

<aside class="positive">
<strong>IMPORTANT:</strong><br> This feature is currently in Beta and subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

<img src="assets/fff_09_2023_01.png" width="800"/>

Stipo Josipovic: GA announcement: Drag-to-select and Autofill for Input Tables are now available for :celebrate:everyone!!:celebrate:
We’ve integrated this classic and beloved spreadsheet feature into Input Tables to make augmenting data for ad hoc analysis that much easier and fun!
With drag-to-select, you can now click and drag to select cells in input tables and level tables!
With autofill in Input Tables, cell selections will now have a fill handle: click and drag the fill handle to extend the selection and fill the new cell values based on the initial selection!
:sparkles: NEW: :sparkles: Horizontal autofill! You can now extend a selection horizontally to fill values in columns to the right of the original selection

Hao Xu: Pasting table values into filter/control is now available
Users can now copy paste cell values from excel/gsheet/sigma table into filters/controls. This solves for a big pain point users currently have where they need to first convert values into CSV and then pasting into filter which can take minutes.

 -->

# (10-2023) October
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in September 2023.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

![Footer](assets/sigma_footer.png)

## Administration
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## API
Duration: 10


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Embedding
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Functions
Duration: 20

#### Regular expression (RegExp) text match filtering:
We have added a new RegExp text match filter to enable you to filter text columns, based on specified patterns. 

These included text strings, character classes, ranges, etc. 

These filters support the RegExp syntax and behavior of the connected CDW or DBMS.

You can either match or not match:

**Matches RegExp:** Includes values that match one or more specified patterns.

**Does not match RegExp:** Excludes values that match one or more specified patterns.

For example, if you want to only see items in the `Product Line` that contain the text `TV` or `4K`:

<img src="assets/regex.gif">

<aside class="negative">
<strong>NOTE:</strong><br> You can use the "disjunction operator (|)" to filter multiple values. For example, abc|xyz filters values that contain “abc” or “xyz.”
</aside>




![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## Input Tables
Duration: 20

#### Conditional formatting in input tables:
We have added the ability to apply rules based on specified conditions to format single colors, color scales, or data bars in input table columns. 

Conditional formatting is accessed in the  `Element` format panel, or open a `column menu` and select `Conditional formatting`:

<img src="assets/fff_10_2023_2.png" width="800"/><br>

<img src="assets/fff_10_2023_1.png" width="800"/>

#### Hyperlinks in input tables:
You can now add hyperlinks to Input Table columns. 

In the column menu, select `Transform` > `Set link`, then choose a column as the link source or create URLs with a custom formula:

Let's say that we have a table called that has the name of an image in one column, a picture and the URL to that image in another. 

We prefer not to show the ugly URLs but do want the user to be able to click on the `Image Name` to open the picture in a new browser tab, full size. 

We just have to transform the `Image Name` column to `link` and then link the `Image URL` column to it:

<img src="assets/fff_10_2023_3a.png" width="500"/><br>

<img src="assets/fff_10_2023_3.png" width="800"/><br>

Now the `Image Name` column is a hyperlink and we can just hide the `Image URL column`:

<img src="assets/fff_10_2023_4.png" width="800"/><br>

<aside class="positive">
<strong>IMPORTANT:</strong><br> You can also get URLs from another column using Sigma's Lookup feature.
</aside>

[For more information on using Lookups, click here:](https://help.sigmacomputing.com/hc/en-us/articles/4409911623571-Add-columns-through-Lookup)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in October
Duration: 20

[Implementing Row Level Security](https://quickstarts.sigmacomputing.com/guide/security_row_level_security/index.html?index=..%2F..index#0):

This QuickStart provides insight into the different methods available for content creators to limit data access to a user, based on an implementation of row level security (RLS) in Sigma.



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tables / Pivots
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Version Tagging
Duration: 20


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Visualizations
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20



![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Additional Information
Duration: 20

**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
