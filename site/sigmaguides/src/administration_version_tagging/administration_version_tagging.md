author: pballai
id: administration_version_tagging
summary: administration_version_tagging
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-01-20

# Version Tagging with Sigma

## Overview 
Duration: 5 

Version tagging allows you to employ a software development lifecycle (SDLC) to control Workbook versions, using tags. Tags provide control over which workbook versions are available to your users. 

In this QuickStart, we will confine the use and management of version tagging inside Sigma itself. For those interested in integrating with external tools, [please check out the QuickStart: Embedding 8: Version Tagging](https://quickstarts.sigmacomputing.com/guide/embedding_8_version_tagging/index.html?index=..%2F..index#0) 

In Sigma, administrators can create as many tags as required by the organizations SDLC workflows. 

When you create a tag and assign it to a workbook, you essentially **freeze the state of that workbook**. 

The process of tagging a Workbook creates a duplicate that can be shared with other stakeholders and users.  

Sigma’s version tagging facilitates collaboration and control, especially in team environments where multiple users are working on the same workbook.

For example, administrators can create `Production` and `QA` tags, and assign them to a workbook that's used by groups of Sigma end users.

The `QA` version is used for testing and approval purposes. Once reviewed, the workbook can be tagged `Production` for users to consume.

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma’s version tagging facilitates collaboration and control, especially in team environments where multiple users are working on the same workbook.
</aside> 

 ### Target Audience
Semi-technical users who are interested in a more controlled (ie: SDLC) methodology for developing, testing and deploying Sigma content.

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
How to Sigma version tagging can be used to provide a controlled release experience which should result in less reported issues and happier end-users.

![Footer](assets/sigma_footer.png)

## Typical Workflow
Duration: 20

A typical workflow may have to following steps but it is important to understand that the system is flexible enough to allow for different workflows too.

<img src="assets/vt35.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Getting Started
Duration: 20

### Example Use Case
Our use case will vary (just slightly) from the "Typical Workflow" diagram to demonstrate that customers can support different workflows. In our case, we will allow a Quality Assurance team to make edits instead of the original developers. 

Our sales team, who are avid users of Sigma as `Viewers`, recently reported some issues with the sales output details in the workbooks. This is causing frustration and wasted time for the Sales team.

Currently, Sigma users who have the `Creators` permission are responsible for creating content.

Upon learning about these challenges, our CTO sought an efficient, cost-effective solution to enhance the quality of the workbooks before they reach the sales team.

We informed the CTO that Sigma's built-in version tagging feature is the perfect solution to address these concerns. **Notably, this functionality comes at no additional cost.**

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is very flexible. The use case described here is one example, and was created to make version tagging easy to understand. More complex SDLC workflows are also possible.
</aside>

Here is how we will get this done.

### Teams and Users

For this use case, we will create some teams and a user to help facilitate our demonstration. 

First, we will create two teams; `Quality Assurance` and `Sales_Team_All`. 

<img src="assets/vt2.png" width="800"/>

<br><br>

<img src="assets/vt3.png" width="800"/>

For the `Quality Assurance` team, we will assign one user, who will be responsible for testing workbooks, prior to promotion to production use.

All other sales users will be assigned to the `Sales_Team_All` team.

### Assign users to teams

We need to create at least one user (for each team) in order to demonstration version tagging. 

In Sigma > Administration > People, we have added one user for each team:

<img src="assets/vt4.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Users in Sigma must have unique email addresses. We use the `+` sign to create an email alias, as google mail allows for this. 
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Don't forget that you will need to "accept" any new users you invite to Sigma or they will not be available to assign to teams (for example).
</aside>

We also need to assign these users to each team:

<img src="assets/vt6.png" width="800"/>

*and....*

<img src="assets/vt7.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> New users can also be assigned team(s) when they are created. This saves administrative time. 
</aside>

### Create tags

Now we need to create the tags we want to use for our organization. 

<aside class="negative">
<strong>NOTE:</strong><br> Tags should have names that make their purpose obvious as the name will appear in other places in the workflow. 
</aside>

Log into Sigma as an administrator and navigate to `Administration` > `Tags` and click the `Create Tag` button:

<img src="assets/vt1.png" width="800"/>

Our first tag, `Quality Assurance` is created with the `Public` permission. Recall that in our use case, content is made by users who have the `Creator` permission and therefore, will be able to edit workbooks. 0The `Protected` option is there for those who want to explicitly control who receive messages for review.

<img src="assets/vt8.png" width="800"/>

For our `Production` tag, we want to ensure that only a member of the QA team or Sigma administrator can promote content to production. That configuration is:

<img src="assets/vt9.png" width="800"/>

Our two tags are created and Sigma provides an indication of how many workbooks are using each (none so far):

<img src="assets/vt10.png" width="800"/>

We are now ready to start using version tagging in an example tagging workflow.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## Create Sample Content
Duration: 20

In Sigma, we will use create a new workbook that contains a single table, based off the Sigma Sample Database.

If you are unfamiliar how to create this content, please review step 5 of this QuickStart: [Fundamentals 1: Getting Around](https://quickstarts.sigmacomputing.com/guide/fundamentals-1-getting-around/index.html?index=..%2F..index#4)

when we create this workbook, we will intentionally leave out the `Order Number` column so we can simulate the workflow, adding it back in the review cycle.

<img src="assets/vt11.png" width="800"/>

A workbook with the `PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` table on it should look like this, while still in `edit` mode:

<img src="assets/vt12.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tagging
Duration: 20

Now that we have our workbook created, we can tag the workbook as ready for `Quality Assurance` to review it:

This is done by clicking the carrot (down arrow) next to the workbook's name and selecting `Tag latest published version` from the drop menu:

<img src="assets/vt13.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Take note of the wording "Tag latest published version". This is telling us that our workbook (in the last screenshot) is in a draft state and that if we do not publish it, the unpublished changes will not be what the tag will be applied to. It will rather tag the most recent published version. Always publish prior to tagging to avoid this potential issue. The workbook must be in a published state in order to add a version tag. 
</aside>

If we publish our draft instead, notice that the tagging menu item changes to `Tag this published version`:

<img src="assets/vt14.png" width="800"/>

We will select to tag this version and move on, next selecting to apply the `Quality_Assurance` tag to our workbook:

<img src="assets/vt14.png" width="800"/>

On this modal (Set Tag on Version) there are a few other interesting features that enable even more complex functionality.

***Allow user to use data sources when they `Save As`:***
Allows saving as a new workbook (grants `Can View`` permission to all sources used in the workbook`), if the user has permissions for the workbook. If this option is selected, the user can choose Save As option in the workbook.

***Swap sources of the tagged version:***
Allows user to swap sources of the tagged version to select a different source (connection, database, schema) for this tagged workbook. They are able to browse and select available sources in the dropdown under Sources of Tagged Workbook. If this is left unchecked, the user tagging the workbook will not be prompted to select a different source. This is useful when there different source tables that have the same schema. For example, development has tables dedicated to their work that have the identical schema as the tables used in production.

Click `Set Tag on Version`.

The workbook is now showing that it is tagged `Quality_Assurance`. In this example, we can see that the tag is also added to the end of the URL. 

We also have the ability to see `Version History`, which is a listing of all the changes made to this workbook. This is very useful in determining who made changes (and the details of the change) along with the ability to revert to previous versions.  Numbers 4-5 in the screenshot below (the 3-dots) have menus that provide functionality that is well worth exploring:

<img src="assets/vt17.png" width="800"/>

### Sharing the tagged workbook

Before the Quality Assurance team can see this workbook, we will need to share it with them:

<img src="assets/vt18.png" width="800"/>

There are options that allow you to further control the workflow your organization might want to use. For example, you may only want the Quality team to view a workbook and if they find changes, notify the creator so that they can make the changes. 

In our example, we are restricting the Quality Assurance Team members to only explore the workbook that is tagged `Quality_Assurance`, so they can either find issues set the tag to production. We are also sending them an email (which is optional).

<img src="assets/vt19.png" width="800"/>

Since we shared to a Team, Sigma warns us about that:

<img src="assets/vt20.png" width="800"/>

Now that the workbook is shared, we can login as our Quality Assurance user and check the `Shared with me` folder.

We see our workbook is shared now:

<img src="assets/vt21.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Requesting Edit Access1
Duration: 5

In our example workflow, we did not give the Quality Assurance team `edit` permission to the workbook. We wanted them to review and if they found and error, request edit access to make a correction:

<img src="assets/vt23.png" width="800"/>

This action generates an email to the workbook owner that allows them to grant the request by first clicking the button in the email:

<img src="assets/vt24.png" width="800"/>

and then `Deny` or `Approve` the request in Sigma:

<img src="assets/vt25.png" width="800"/>

We clicked `Approve` in this case, so now Quality Assurance has `Can edit` permission to all this workbook versions:

<img src="assets/vt26.png" width="800"/>

### Make corrections

Now that we have edit access, we can (as the Quality Assurance user) place the workbook in `explore` mode, access the `element panel` and add the missing column to the data (Order Number):

<img src="assets/vt27.png" width="800"/>

Sigma warns you that we are now working on a variation that we can save or revert back to the last published version:

<img src="assets/vt28.png" width="800"/>

### Migrating to Production

There are some options that allow organizations to decide who has production release authority and Sigma allows you to have as many tags as you would like, in support of this. 

In our example, we will simply assume that Quality Assurance can release to production (by tagging the workbook accordingly). 

To stay organized, the team can use a Sigma workspace or simply create a folder to store production workbook in. We will do that:

<img src="assets/vt29.png" width="800"/>

Now we just repeat the tagging process as before, setting the tag to `Production`:

<img src="assets/vt30.png" width="800"/>

...deciding if we want to allow different data source options to users:

<img src="assets/vt31.png" width="800"/>

and finally, sharing this new version with the Sales Team, locking them down to only see the version tagged `Production`:

<img src="assets/vt32.png" width="800"/>

Logging back into Sigma as a "Sales Person", we can see the new workbook that Quality Assurance has shared:

<img src="assets/vt33.png" width="800"/>

The sales user can see the `Order Number` column but only has access to the production tagged version:

<img src="assets/vt34.png" width="800"/>

The `Quality Assurance` user retains access to the Production version that they saved, along with the version tagged `Quality_Assurance` and shared with them by the original workbooks creator.

The workbook creator retains the original `Draft` along with the version they tagged `Quality_Assurance`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Wrapping up
Duration: 5

While Sigma has worked hard to make versioning simple, the tagging system is also flexible. It is recommended that customers thoughtfully plan how to best use all the options so that SDLC workflows are simple and effective as possible. Upfront planning is the key in this regard.

Some additional detail on [version tagging can be found in our documentation](https://help.sigmacomputing.com/docs/version-tagging) and we encourage you to review that as well. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we discussed Sigma's version tagging system and used it to drive a use case that took us through content promotion from creation, quality assurance and production. This was one example of version tagging and covered the basics, so that readers could become familiar with how version tagging works in general. 

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
=======
Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->