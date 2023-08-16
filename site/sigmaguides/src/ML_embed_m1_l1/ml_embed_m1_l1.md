author: 123marianna123
id: ml_embedmodule1_quickstart
summary: Embedding ONDEMAND Module 2, Lesson 1 Lab
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

# Setting Up Teams and Workspaces for Embedding
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 
<!--Duration is deprecated and no longer required, however the code still expects to see it so include it for each section. The actual time value does not matter. -->

This lab will guide you through the process of content segregation to prepare data for embedding.

### Target Audience
- Fullstack developers
- Admins
- Workbook developers

### Prerequisites

<ul>
  <li>Intermediate full-stack software development and Sigma admin experience.</li>
  <li>Knowledge of how to create a Sigma workbook.</li>
  <li>Basic knowledge of Sigma teams, workspaces, creating datasets and workbooks.</li>
</ul>
  
### What You’ll Learn
How to set up workspaces, folders, and teams to prepare data for embedding.


![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## Data for All Clients
Duration: 20

### Create a team and workspace for all clients.
1. Go to Sigma and open the administration screen.
![Administration screen in Sigma](assets/m1_l1_step1.png)
2. Click `Teams`.
3. Click `Create Team`.
4. Update the team name to `All_Clients_Team`
5. Check off `Create a Workspace associated with this Team`.
6. Click `Create`.
![Team creation workflow](assets/m1_l1_step5.png)

### Grant appropriate access.
1. From the Sigma homepage, click `Workspaces`.
2. Open the Workspace you just created by clicking on it.
![Workspaces](assets/Workspaces.png)
3. Click the share icon next to the workspace name.
4. Change the access for the `All_Clients_Team` to `Can Explore`.
![Workspaces access](assets/Workspace_access.png)

### Create folders in your workspace.
1. Open the `All_Clients_Workspace`.
2. Click `Create Folder`.
3. Update the title to `Workbooks`.
4. Click the green checkmark.
![Workbooks_folder](assets/Workbooks_folder.png)
5. Repeat steps 1-4, but make the title of this folder `Datasets`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Data for Select Teams
Duration: 20

### Create client-specific teams and workspaces.
1. From the administration screen, click `Teams`.
2. Click `Create Team`
3. Update the team name to `Acme_team`
4. Check off `Create a Workspace associated with this Team`.
5. Click `Create`.
6. Repeat steps 1-5 for `Mrsupply_team`.

### Add members.
1. Go to the administration screen and click `People`.
2. Click  `Invite People`.
3. Enter a dummy email address by adding `+keyword` to your email. For example, `marianna+acme@sigmacomputing.com`.
4. Keep the default account type: `Viewer`.
5. Scroll down and select `Acme_team` and  `All_Clients_Team` under `Assign Team(s)`.
6. Click `Invite`.
![Add members to team](assets/add_members.png)
7. Log in to your email and accept the invitation by clicking `Set up your account`.
8. Enter your name and create a password.
9. Then sign out and sign back into your main account.
10. Repeat this process to add a different user to the Mr.Supply team.


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to set up our workspaces, folders, and teams to make embedding seamless.

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