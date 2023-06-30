author: 123marianna123
id: ml_embed_m1_l2
summary: This is a sample Sigma Guide
categories: Embedding
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 

<!-- 
SETTING THE AVAILABLE CATEGORIES WILL MAKE YOUR QUICKSTART PART OF A GROUP THAT USERS CAN FILTER ON IN THE QUICKSTART PORTAL.

AVAILABLE CATEGORIES ARE:
Administration
Embedding
Functions
Fundamentals
Partners
Snowflake
Tables (include pivot and input tables for now)
Use-cases

PLEASE REVIEW THE SIGMA QUICKSTART STYLE GUIDE. ALL QUICKSTART SHOULD SHARE A COMMON LOOK AND FEEL. 

YOU MAY WANT TO REVIEW A PUBLISHED GUIDE FIRST SO THAT YOU ARE FAMILIAR WITH HOW COMMON MARKDOWN IS APPLIED YOU CAN ACCESS THE SIGMA QUICKSTART STYLE GUIDE HERE:
http://localhost:8000/guide/sigma-style-guide/index.html?index=..%2F..internal#0
-->

# Content Segregation with Swagger
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 
<!--Duration is deprecated and no longer required, however the code still expects to see it so include it for each section. The actual time value does not matter. -->

Now that you’ve learned about best practices for setting up your workspaces, folders, and teams to prepare for embedding Sigma, let’s take a look at how we can automate this process.

In this lab, we’ll use a tool called Swagger to create workspaces, folders, and teams using Sigma’s API directly from the browser.

 ### Target Audience
Sigma partners who will be helping customers with embedding.

### Prerequisites
<ul>
  <li>A sigma account with admin access.</li>
  <li>Previous experience with Sigma, including creating workbooks and workspaces.</li>
  <li>A broad understanding of what embedding is and the different types of embedding available with Sigma.</li>
</ul>

### What You’ll Learn

How to set up workspaces, folders, and teams to prepare data for embedding using Swagger.

## **Authenticate in Swagger**
Duration: 20

1. Click https://docs.sigmacomputing.com/api/v2/ to open Swagger.
2. Open the `authentication` page from the left panel.
![Authetnication page in Swagger](assets/m1_l2_step2.png)
3. Go to Sigma.
4. Navigate to the `Administration` page.
![Administration page in Sigma](assets/m1_l2_step4.png)
5. Click `APIs and Embed secrets`.
![APIs and embed secrets link](assets/m1_l2_step5.png)
6. Click `Create New`.
7. Select `API Token`.
8. Give the secret a name and choose yourself as the owner. Click `create`.
![Alt text](assets/m1_l2_step8.png)
7. Copy and paste the client ID and client secret from Sigma into Swagger.
8. Click `GET TOKEN `.

<aside class="positive">
<strong>IMPORTANT:</strong><br>  Save the client ID and client secret in a safe location, since you won’t be able to find them again. In a production environment, it's safest to store this in an encrypted key vault approved by your security and governance team.
</aside>

## **Create A Workspace with Folders**
1. In the left-hand panel, click on `POS /v2/files`. 
2. Update the JSON to create the workspace you need. Update the type to say `workspace` and update the name to say `Curated_Embeds_Workspace`.
3. Click `Try`. 
![Alt text](assets/m1_l2_step3SWAGGER.png)
4. Scroll down to the response. If you see a workspace ID, name and created and updated by details, you’ve successfully created a workspace! 
![Alt text](assets/m1_l2_step4SWAGGER.png)

<aside class="negative">
<strong>NOTE:</strong><br> You might also see a message that says `Token missing or malformed` or a code that says `unauthorized`. That means you haven’t properly authenticated through Sigma. To correct this, go back to authentication and enter your client ID and client secret.
</aside>


5. Update the JSON again to say `folder` instead of `workspace` and `Datasets` instead of `Curated_Embeds_Workspace.`
6. Click `Try.`
7. Repeat steps 5 and 6 three more times to create the following folders: `Workbooks`, `Sales_Workbooks`, `HR_Workbooks`.


<aside class="negative">
<strong>NOTE:</strong><br> Alternatively, you can create the workspace by running the curl command here in your terminal. It’ll work the same way. You can also add a python script to loop through the command and create all the workspaces and folders you need at once.

We’ve included a script for you below, so you don’t have to write it yourself.
</aside>

```Python script goes here.```


## Create and Assign Teams
1. Click on POS /v2/teams and updating the JSON as to create the following teams:`All_Clients_Team`, `Sales_Team`, and `HR_Team`.

<img src="assets/M1_L2_finalsection.png" width="300"/>

2. Assign these teams by [insert steps here]. We’ll give the `All_Clients_Team` `can explore` access to the `workbooks` folder, the `Sales_Team` `can explore` access to the `Sales_workbooks` folder, and the `HR_team`, `can explore` access to the `HR_Workbooks` folder.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to set up Workspaces, Folders, and Teams for embedding using Swagger.


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
