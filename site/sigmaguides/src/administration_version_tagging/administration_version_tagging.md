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

Version tagging allows you to employ a software development lifecycle (SDLC) to control Workbook versions, using tags.

Tags provide control over which workbook versions are available to your users, along with some workflow automation to foster collaboration. 

In this QuickStart, we will confine the use and management of version tagging inside Sigma itself. 

For those interested in integrating with external tools, [please check out the QuickStart: Embedding 8: Version Tagging](https://quickstarts.sigmacomputing.com/guide/embedding_08_version_tagging/index.html?index=..%2F..index#0) 

### Tagging concept

In Sigma, administrators can create as many tags as required by the organization's SDLC workflows. Tags are created in Sigma's administrative interface.

**When a tag is created and assigned to a workbook, the workbook version's state is essentially frozen, at the time of the tagging.**

The process of tagging a workbook creates a virtual duplicate that can be shared with other stakeholders and users.  

For example, administrators can create `Production` and `Quality Assurance` tags, and assign them to a workbook that's used by groups of Sigma end users.

The `Quality Assurance` version is used for testing and approval purposes. Once reviewed, the workbook can be tagged `Production` for users to consume.

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma’s version tagging facilitates collaboration and assures control, especially in team environments where multiple users are working on the same workbook.
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
How to Sigma version tagging can be used (inside Sigma itself) to provide a controlled release experience which should result in less reported issues and happier end-users.

![Footer](assets/sigma_footer.png)

## Typical Workflow
Duration: 20

It is important to understand that the system is flexible enough to allow for different workflows.

For example, in the diagrams below, we see two possible workflows. The first, which assumes QA will only pass/fail content and the second which allows them to make changes in order to get to production without another development cycle. It is up to your organization how you want to structure the workflow / approval process.

<img src="assets/vt38.png" width="800"/>

In our use case, we will allow a Quality Assurance team to make edits instead of the original developers. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Getting Started
Duration: 20

### Example Use Case
Our sales team, who are avid users of Sigma as `Viewers`, recently reported some issues with the sales output details in the workbooks. This is causing frustration and wasted time for the Sales team.

Currently, Sigma users who have the `Creators` permission are responsible for creating content.

Upon learning about these challenges, our CTO sought an efficient, cost-effective solution to enhance the quality of the workbooks before they reach the sales team.

We informed the CTO that Sigma's built-in version tagging feature is the perfect solution to address these concerns.

**Notably, this functionality comes at no additional cost.**

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma is very flexible. The use case described here is one example, and was created to make version tagging easy to understand. More complex SDLC workflows are also possible.
</aside>

Here is how we will get this done.

### Teams and Users

For this use case, we will create some teams and a user to help facilitate our demonstration. 

First, we will create two teams; `Quality Assurance Team` and `Sales_Team_All`. 

<img src="assets/vt2.png" width="800"/>

<br><br>

<img src="assets/vt3.png" width="800"/>

### Assign users to teams

We need to create at least one user (for each team) in order to demonstration version tagging. 

For the `Quality Assurance` team, we will assign one user, who will be responsible for testing workbooks, prior to promotion to production use.

All other sales users will be assigned to the `Sales_Team_All` team.

In Sigma > `Administration` > `People` we have added one user for each team:

<img src="assets/vt4.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Users in Sigma must have unique email addresses. We use the `+` sign to create an email alias, as Google mail allows for this. 
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Don't forget that you will need to "accept" any new users you invite to Sigma or they will not be available to assign to teams.
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
<strong>NOTE:</strong><br> Tags should have names that make their purpose obvious, as the name will appear in other places in the workflow. 
</aside>

Log into Sigma as an administrator and navigate to `Administration` > `Tags` and click the `Create Tag` button:

<img src="assets/vt1.png" width="800"/>

Our first tag, `Quality_Assurance` is created with the `Public` permission. Recall that in our use case, content is made by users who have the `Creator` permission and therefore, will be able to edit workbooks. The `Protected` option is there for those who want to explicitly control who receive messages for review.

<img src="assets/vt8.png" width="800"/>

For our `Production` tag, we want to ensure that only a member of the QA team or Sigma administrator can promote content to production. That configuration is:

<img src="assets/vt9.png" width="800"/>

Our two tags are created and Sigma provides an indication of how many workbooks are using each (none so far):

<img src="assets/vt10.png" width="800"/>

We are now ready to start using version tagging, in an example tagging workflow.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## Create Sample Content
Duration: 20

In Sigma, we will use create a new workbook that contains a single table, based off the `Sigma Sample Database`.

If you are unfamiliar how to create this content, please review step 5 of this QuickStart: [Fundamentals 1: Getting Around](https://quickstarts.sigmacomputing.com/guide/fundamentals-1-getting-around/index.html?index=..%2F..index#4)

When we create this workbook, we will intentionally leave out the `Order Number` column so we can simulate the workflow, adding it back in the review cycle.

<img src="assets/vt11.png" width="800"/>

A workbook with the `PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` table on it should look like this, while still in `edit` mode:

<img src="assets/vt12.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Tagging
Duration: 20

Now that we have our workbook created, we can tag the workbook as ready for `Quality Assurance` to review it:

This is done by clicking the carrot (down arrow) next to the workbook's name and selecting `Tag latest published version` from the drop menu:

<img src="assets/vt13.png" width="600"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Take note of the wording "Tag latest published version". This is telling us that our workbook (in the last screenshot) is in a draft state and that if we do not publish it, the unpublished changes will not be what the tag will be applied to. 

Instead, it will tag the most recent published version, if one exists. 

Always publish prior to tagging to avoid this potential issue. The workbook must be in a published state (at least one time) in order to add a version tag. 
</aside>

If we publish our draft instead, notice that the tagging menu item changes to `Tag this published version`:

<img src="assets/vt14.png" width="600"/>

We will select to tag this version and move on, next selecting to apply the `Quality_Assurance` tag to our workbook:

<img src="assets/vt14.png" width="600"/>

On this modal (Set Tag on Version) there are a few other interesting features that enable even more complex functionality:

<img src="assets/vt15.png" width="400"/>

**Allow user to use data sources when they "Save As":**<br>
This enables a user with access to a tagged version, to make a copy of the workbook.  When a user does this, the copy will no longer be connected to the original version of the workbook.

**Swap sources of the tagged version:**<br>
Allows user to swap sources of the tagged version to select a different source (connection, database, schema) for this tagged workbook. They are able to browse and select available sources in the dropdown under `Sources of Tagged Workbook`. If this is left unchecked, the user tagging the workbook will not be prompted to select a different source. This is useful when there different source tables that have the same schema. For example, development has tables dedicated to their work that have the identical schema as the tables used in production.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Tables created through CSV uploads, Input tables, and Custom SQL are not available for data source swapping. These items cannot be migrated across connections (at the time of this QuickStart), but please check with Sigma support to get the most recent information. We are always interested in what features are important to our customers.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> Input tables created in one version will be available in other tagged version, but any data entered into that Input Table will not be copied into the new tag.<br>

CSV files uploaded into the workbook will be available across different tags, but will only be updatable in the "Draft" version.<br>

Materialized tables and data warehouse views will be available across all tags, but only updatable in the "Draft" version.
</aside>

Click the `Set Tag on Version` button.

The workbook is now showing that it is tagged `Quality_Assurance`. In this example, we can see that the tag is also added to the end of the URL:

<img src="assets/vt16.png" width="800"/>

We also have the ability to see `Version History`, which is a listing of all the changes made to this workbook. 

**This is very useful** in determining who made changes (and the details of the change) along with the ability to revert to previous versions.  Numbers 4-5 in the screenshot below (the 3-dots) have menus that provide functionality that is well worth exploring:

<img src="assets/vt17.png" width="800"/>

### Deleting a tag:
For example, you may wish to "untag" or remove a tag from a workbook. Workbooks written to different tags can be removed by opening `Version History` in the workbook, and clicking on the three dots to the right of the version name, and selecting `Remove this tag` to delete the tag:

<img src="assets/vt36.png" width="800"/>

<li><strong></strong>Some reasons for deletion may be:</strong>
    <ol type="n"> 
      <li>Content was tagged (migrated) with a material misstatement or error.  Remove the tag and resolve issues in the "Draft" or previous version.</li>
      <li>Any security testing that exposes more data than expected.</li>
      <li>Accidental tagging.</li>
    </ol>
  </li>

### Add a tag description
Another useful collaboration feature is to add meaningful names and descriptions to changes listed in the workbook's version history. 

This can include the purpose for the change, link to any tickets or other information that might be useful to yourself or other collaborators.

For example:

<img src="assets/vt37.png" width="800"/>

### Sharing the tagged workbook

Before the Quality Assurance team can see this workbook, we will need to share it with them:

<img src="assets/vt18.png" width="600"/>

In our use case, we are restricting the Quality Assurance Team members to only explore the workbook that is tagged `Quality_Assurance`, so they can either find issues set the tag to production. We are also sending them an email (which is optional).

<img src="assets/vt19.png" width="600"/>

Since we shared to a Team, Sigma warns us about that:

<img src="assets/vt20.png" width="400"/>

Now that the workbook is shared, we can login as our Quality Assurance user and check the `Shared with me` folder.

We see our workbook is shared now:

<img src="assets/vt21.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Requesting Edit Access
Duration: 5

In our example, we did not give the Quality Assurance team `edit` permission to the workbook. 

We want them to review and if they found and error, request edit access to make a correction. 

This will provide an audit trail in the workbook's version history.

<img src="assets/vt23.png" width="800"/>

This action generates an email to the workbook owner that allows them to grant the request, by clicking the button in the email:

<img src="assets/vt24.png" width="500"/>

...and then `Deny` or `Approve` the request in Sigma:

<img src="assets/vt25.png" width="800"/>

We clicked `Approve` in this case, so now Quality Assurance has `Can edit` permission to all versions of this workbook:

<img src="assets/vt26.png" width="800"/>

### Make corrections

Now that we have edit access, we can (as the Quality Assurance user) place the workbook in `explore` mode, access the `element panel` and add the missing column to the data (Order Number):

<img src="assets/vt27.png" width="800"/>

Sigma warns you that we are now working on a variation that we can save or revert back to the last published version:

<img src="assets/vt28.png" width="800"/>

### Migrating to Production

There are some options that allow organizations to decide who has production release authority and Sigma allows you to have as many tags as you would like, in support of this. 

In our use case, we will simply assume that Quality Assurance can release to production (by tagging the workbook accordingly). 

To stay organized, the team can use a Sigma workspace or simply create a folder to store production workbook in. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> For large multi-user workbooks, best practice is to store in a workspace and tag that workspace, when sharing the workspace with teams or users.
</aside>

Since this is single workbook example, we will just save the workbook in a folder:

<img src="assets/vt29.png" width="600"/>

Now we just repeat the tagging process as before, setting the tag to `Production`:

<img src="assets/vt30.png" width="800"/>

...deciding if we want to allow different data source options to users:

<img src="assets/vt31.png" width="400"/>

...and finally, sharing this new version with the Sales Team, locking them down to only see the version tagged `Production`:

<img src="assets/vt32.png" width="600"/>

Logging back into Sigma as a "Sales Person", we can see the new workbook that Quality Assurance has shared:

<img src="assets/vt33.png" width="800"/>

The sales user can see the `Order Number` column, but only has access to the production tagged version:

<img src="assets/vt34.png" width="800"/>

The `Quality Assurance` user retains access to the `Production` version that they saved, along with the version tagged `Quality_Assurance`, that was shared with them by the workbooks creator.

The workbook creator retains access to the original `Draft`, along with the version they tagged `Quality_Assurance`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Wrapping up
Duration: 5

While Sigma has worked hard to make versioning simple, the tagging system is also very flexible. 

It is recommended that customers thoughtfully plan how to best use all the options, so that SDLC workflows are simple and effective as possible. **Upfront planning is the key in this regard.**

Some additional detail on [version tagging can be found in our documentation](https://help.sigmacomputing.com/docs/version-tagging), and we encourage you to review that as well. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we discussed Sigma's version tagging system, and used it to drive a use case that took us through content promotion from creation, quality assurance and production. 

This was one example of version tagging, covering the basics, so that readers could become familiar with how version tagging works in general. 

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