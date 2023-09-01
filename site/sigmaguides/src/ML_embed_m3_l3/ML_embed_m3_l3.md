author: 123marianna123
id: embed_partner_training_custom_dashboards
summary: This is a sample Sigma Guide
categories: Embedding
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags:
lastUpdated: {lasted updated using the date format yyyy-mm-dd}


# APIs for Custom Navigation
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 
<!--Duration is deprecated and no longer required, however the code still expects to see it so include it for each section. The actual time value does not matter. -->
If you have customer who wants the navigation to be part of their UI, they’ll need use an API to get information on who the user is and what dashboards they have access to. In this lab, you'll learn how to get the information you need to enable your customers to develop custom navigations of their embedded dashboards.

 ### Target Audience
Sigma partners who will be helping customers with embedding.

### Prerequisites
<ul>
  <li>A sigma account with admin access.</li>
  <li>A broad understanding of API endpoints.</li>
  <li>A broad understanding of what embedding is and the different types of embedding available with Sigma.</li>
</ul>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
- How to locate the information your customers need to develop a custom navigation.
- How the API for creating custom navigations works.

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## **API Information for Custom Navigation**
Duration: 20
1. Open Swagger by going to https://docs.sigmacomputing.com/api/v2/.
2. Navigate to the `GET/v2/members`.
3. Where it says `search`, enter a member email and hit `Try`. The JSON will give you the `memberID`.
4. Copy the `memberID`.
5. Navigate to the `GET /v2/members/{memberId}/files` API in the menu.
6. Paste the `memberId` you just copied as the `memberID` paramater.
7. Where it says `permissionFilter`, specify that you’ll show dashboards where the member has `View` access. 

<aside class="negative">
<strong>NOTE:</strong><br> Alternatively, you can show dashboards where the member has `Edit` access.
</aside>

8. Enter the object that you want the user to have access to where it says `typefilters`. In this case, enter `workbook`.

<aside class="negative">
<strong>NOTE:</strong><br> You can also set the pagination where it says `page` and the result limit where it says `limit`. This is useful if you have a large number of dashboards, so you can limit the number of dashboards a user can see.
</aside>


9. Hit try. Here you can see a JSON object that has a list of every workbook that the user has access to.

<aside class="positive">
<strong>IMPORTANT:</strong><br> 
You can share this API with your customers and they can use it to build the navigation however they wish.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to locate the information your customers need to develop a custom navigation.

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)

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
