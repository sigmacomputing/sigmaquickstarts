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
- Fullstack developers
- Admins
- Workbook developers

### Prerequisites
<ul>
  <li>Intermediate full-stack software development and Sigma admin experience.</li>
  <li>Knowledge of how to create a Sigma workbook.</li>
  <li>Basic knowledge of Sigma teams, workspaces, datasets and workbooks.</li>
</ul>

### What You’ll Learn

How to set up workspaces, folders, and teams to prepare data for embedding using Swagger.

## Authenticate in Swagger.
Duration: 20

1. Click https://docs.sigmacomputing.com/api/v2/ to open Swagger.
2. Open the `authentication` page from the left panel.
![Authentication page in Swagger](assets/m1_l2_step2.png)
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
8. Select `Authorization Header` in the dropdown menu.
9. Click `GET TOKEN `.

<aside class="positive">
<strong>IMPORTANT:</strong><br>  Save the client ID and client secret in a safe location, since you won’t be able to find them again. In a production environment, it's safest to store this in an encrypted key vault approved by your security and governance team.
</aside>

10. In Swagger, click `API Servers` in the left-hand menu.
11. Select your cloud provider. (To find out what cloud provider you’re using, go to the Administration page in Sigma and look at what it says after “Cloud” in the Site section.)

## Create a Team and Workspace.
1. Click on `GET/v2/members`.
2. Click `Try`.
3. Record the member IDs in a text document.
4. Click `POS /v2/teams`.
5. Update the JSON to create the `All_Clients_Team`:
	- Change `string` after `name` to say `All_Clients_Team`.
	- Delete `description": "string`
	- In members, copy and paste the IDs from your text doc in the `members` array.
	- To create a workspace for this team, update `Create Team Folder` from `False` to `True`.

<aside class="negative">
<strong>NOTE:</strong><br> This may be confusing because the key is called “Create Team Folder,” but what it really does is create a workspace. 
</aside>

6. Click `Try`.
7. Save your workspace IDs from the response in your text doc.

## Add Folders to your Workspace.
1. Go  to `POS /v2/files`. 
2. Update the JSON by changing the `type` to `folder` and the name to `Datasets`. 
3. Add a key called `parentId` and for the value enter the ID of the `All_Clients_Workspace` created in the previous section. Your final JSON will look something 
like this:

```
{
  "type": "folder",
  "name": "datasets",
  "parentId": "f74b8893-4286-4bcf-a842-bd2b254352f4"
}
```

<aside class="positive">
<strong>IMPORTANT:</strong><br> Make sure you’re following proper JSON formatting, such that every key and value have quotes around them and each key-value pair is separated by a comma.
</aside>

4. Click Try. 
5. Save the folder IDs from the response in your text doc.
6. Repeat this for the workbooks folder. 
7. Go back to your All_Clients_Workspace in Sigma to confirm that these folders have been added.

## Change team permisions.
1. Go to `POS/v2/grants`.
2. Update `memberId` to say `teamId`, since we’ll be granting access at the team level. 
3. Update the value of `teamId` to the team ID of the `All_Clients_Team` that you saved in your text doc. 
4. Change `permission` to `explore`. 
5. Update the `inodeId` to the ID of the `All_Clients_Team` Workspace. 
6. Delete the `tagId` line and the comma before it. 
7. Click Try.

## Add another member to the Team.

1. Go to POS/v2/Members. 
2. Update the user email, first name, and last name.
3. Change the member type to creator. (Your options are creator or viewer).
4. Change the user kind to `embed`. (Your options are guest, internal, or embed).

<aside class="negative">
<strong>NOTE:</strong><br> Embed users of Sigma will interact with Sigma only through a user-backed embed in another application. These users will not log in directly to Sigma.
</aside>


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
