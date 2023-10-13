author: pballai
id: security_row_level_security
summary: security_row_level_security
categories: Security
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-10-22

# Implementing Row Level Security
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart provides insight into the different methods available for content creators to limit data access to user based on an implementation of row level security (RLS) in Sigma. 

While there are several options that we will explore, RLS should **always** be applied as close to the data as possible. In the case of Sigma, that is at the dataset being used to drive workbooks. 

There are four methods to apply RLS at the dataset level:

**1:** CurrentUserEmail()<br>
Returns `True` for the email of the user viewing the data.

[Documentation](https://help.sigmacomputing.com/hc/en-us/articles/4426238159635-Dataset-Row-Level-Security?_gl=1*a0pta5*_ga*MTAyNTE4NzQ5NC4xNjg3NTUxNjQ5*_ga_PMMQG4DCHC*MTY5NzEzNzgyMy4yNjcuMS4xNjk3MTM5ODgxLjYwLjAuMA..#h_01FW1TRE3DW366VXF9P4XAMW5F)

**2:** CurrentUserTeam()<br>
Returns `True` if the current user is a member of any of the given teams.

[Documentation](https://help.sigmacomputing.com/hc/en-us/articles/4426238159635-Dataset-Row-Level-Security?_gl=1*a0pta5*_ga*MTAyNTE4NzQ5NC4xNjg3NTUxNjQ5*_ga_PMMQG4DCHC*MTY5NzEzNzgyMy4yNjcuMS4xNjk3MTM5ODgxLjYwLjAuMA..#h_01FW1TRE3DW366VXF9P4XAMW5F)

**3:** User Attributes<br>
Once you create and assign a user attribute to teams, you can use this functionality in a dataset to enforce row-level security using the function CurrentUserAttributeText in a formula. 

[Documentation](https://help.sigmacomputing.com/hc/en-us/articles/6709896696979-User-Attributes#rsua)

**4:** Custom SQL<br>
If your dataset is derived from a custom SQL query, you may uses any of the first three methods as criteria in a where clause.

[Documentation](https://help.sigmacomputing.com/hc/en-us/articles/360037430513-Write-custom-SQL#01H8Q1S92HJXYFWBGB5A5GE5WV)

It is also possible to apply data security at the warehouse level, but that is not in the scope of this QuickStart.

 ### Target Audience
Anyone who is trying to enforce row level security, such that the logged in Sigma user only has access to data they are allowed to see.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>To implement this feature, you must have "Can Edit" access on the individual dataset.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
We will review several methods to achieve row level security inside Sigma so that you know the options and can choose the best solution for your use case.

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## Sample Dataset Creation
Duration: 20

We will first create a new Dataset using Sigma's sample data, and add a few columns that we will use to evaluate the different methods of RLS.

Log into Sigma as `Administrator` and click the `Create New` button and select `Dataet`:

<img src="assets/nrls1.png" width="800"/>

Select `Dataset` from the list os source option:

<img src="assets/nrls2.png" width="800"/>

Using the sidebar navigation, locate the `Sigma Sample Database` > `Retail` > `Plugs Electronics` > `Plugs Electronics Hands On Lab` table and select that as shown:

<img src="assets/nrls3.png" width="800"/>

We now have our source table. Let's assume that we want to limit data based on the `Region` that each transaction was in. This table has a `Store Region` column, so we can use that for each of our tet case.

The table does not have `email address` or `team` columns that we need for our test case so we will add them using simple Sigma functions.

To make things easier, first click the `Worksheet` tab and then drag the `Store Region` column to so that it is the first column shown:

<img src="assets/nlrs1.gif"><br>
<img src="assets/horizonalline.png" width="800"/>

#### Add Email Column:

Now, from the `Worksheet` tab, click the `Store Region` drop-menu and select `Add a new column`:

<img src="assets/nrls4.png" width="800"/>

Double-click the new column's header and rename the column `Email`.

We want to have Sigma populate this column for us (because the data is not in our base table) and we want to make it obvious for our use-cases. 

Sigma has a function that allows for this called `Switch`. Switch will evaluate the `Store Region` column and based on the data in each row, will add an email that we specify, in the `Email` column. 

Let's assume that our email will be evaluated and we are only allowed to see the `East` region. All other regions will be assigned a fictitious email for testing purposes.

<aside class="positive">
<strong>IMPORTANT:</strong><br> RLS is going to evaluate the logged in user. so you MUST use your email, not the one shown in the example.
</aside>

In the formula bar for `Email` enter the following formula:
```code
Switch([Store Region], "East", "phil@sigmacomputing.com", "bob@company.com")
```

We can see the results if we sort the `Store Region` column ascending and then descending (for example):

<img src="assets/nrls5.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Something to not take for granted is that our base table is over 4.5 MILLION rows and we are using it trivially, while Sigma handles the scale of the data.
</aside>

<img src="assets/horizonalline.png" width="800"/>

#### Add Team Column:
We will now just repeat the same exercise only this time, our new column should be named `Team` and the function for the column modified to match a Sigma Team name (that we have yet to create, we will do that later).
```code
Switch([Store Region], "East", "TeamEast", "TeamEveryone")
```

Our `Switch` function allows any member of `TeamEast` to see the `East` Store Region rows. `TeamEveryone` will see everything else.

<img src="assets/horizonalline.png" width="800"/>

Click the `Publish` and `Explore` buttons in the upper right corner.

We can see the base data and our new columns now but RLS is not being enforced yet. We will do that in the next section.

<img src="assets/nrls7.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> A subtle but key point to understand is that we could have done the same work in a published exploration and the applied RLS to that Workbook. While this would work, if that Workbook is saved again later, it is possible another creator could remove the RLS that was built in the Workbook. Building at the source dataset prevents this from happening.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## CurrentUserEmail RLS
Duration: 20

Navigate back to our Dataset. You can do this by clicking the Paper Crane icon and then `Recent` and you will see your Dataset:

<img src="assets/nrls8.png" width="800"/>

Adding RLS based on email is now pretty simple. 

Click the `Edit` button in the upper right corner to place the Dataset in edit mode.

Click the `Worksheet` tab.

Add a new column and name it `test for email`.

Set the new column's formula to:
```code
CurrentUserEmail() = [email]
```

This will evaluate the email address using when I logged into Sigma against the value for email in each row.

When there is a match, the row's cell is set to `True`, otherwise `False`:

<img src="assets/nrls9.png" width="800"/>

Now it is just a matter of setting a filter on the `test for email` column so that the table only shows the rows that are `True`:

<img src="assets/nrls10.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> You can use the column's menu to select to add a filter OR use the sidebar menu to perform the same function (under #3 in the screenshot)
</aside>

<img src="assets/nrls11.png" width="800"/>

Now if we click `Publish` and `Explore` the data is automatically filtered based on my email address and we only see 812K rows and only `Store Region` in the `East`. 

A final cleanup step is to hide the `email`, and `test for email` columns as the user does not need to see them.

Return to the dataset but this time we will use a different method (instead of `Recents`):

<img src="assets/nrls12.png" width="800"/>

It's nice to have options! Pick the workflow you prefer. 

Back in the Dataset, click the `Worksheet` tab, and click the `Edit` button.

Click the `email` column, hold the shift key and click the `test for email` column to select them both at the same time. 

Click `Hide columns`:

<img src="assets/nrls13.png" width="800"/>

Click `Publish` and `Explore` and notice that the data is still restricted but the two columns we just hid are not in the table AND they are also not included in the list of available columns on the left sidebar.

We left the `Team` column in place so we can use that in the next section.

Now a user can use this table as a source of data to build more tables, pivots, viz ect and the RLS will just carry forward.

That's it! Simple right?

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## CurrentUserTeam RLS
Duration: 20

The workflow for team-based RLS is very much the same as CurrentUserEmail in terms of the table function and table filter. The difference is that the user's data rights are evaluated based on which team(s) they are a member of.

In that case, we need to create some teams and add our user's to them for RLS to work.

Before we add teams, let's configure the Dataset to use CurrentUserTeam.

Return to the Dataset. click the `Worksheet` tab and place it in `Edit` mode.

We don't have to delete the `email` and `test for email` columns but we do need to disable the `test for email` filter since we don't want to use that method in this example.

That is a simple matter of sliding the filter from blue to grey to disable it:

<img src="assets/nrls14.png" width="800"/>

Your table row count should then return to 4.5M:

<img src="assets/nrls15.png" width="800"/>

Now we can do the same steps but this time add a new column called `test for team`, setting it's formula to:
```code
CurrentUserInTeam([Team])
```

Once you have applied the formula, all the rows under `test for team` will be `False` because the current user (you) is not a member of our two teams (TeamEast and TeamEveryone).

We need to create those teams and assign members.

<img src="assets/nrls16.png" width="800"/>

`Publish` the Dataset and this time, click the `Save As` button. Give your Workbook a name and store it in a folder if you like:

<img src="assets/nrls17.png" width="800"/>

Click the `Paper Crane` icon to return to the homepage and then click the `Administration` link.

Now click `Teams` from the left sidebar and then click `Create Team`:

<img src="assets/nrls18.png" width="800"/>

Name our new Team `TeamEast` and set the access to `Public`:

<img src="assets/nrls19.png" width="800"/>

There are a few options on this screen but we will not cover them all here. If you are interested, [the documentation is here.](https://help.sigmacomputing.com/hc/en-us/articles/360037430333-Manage-Teams)

Click `Create`.

The team is created and my user (as Administrator) is added automatically. It is easy to add new members by clicking the `Add Members` button. 

<img src="assets/nrls20.png" width="800"/>

Repeat the process to add our second team ("TeamEveryone") but this time, remove yourself from the team so the team has no members:

<img src="assets/nrls21.png" width="800"/>


Navigate back to our `Workbook`. We see there are 4.5M rows displayed. What went wrong? We know that the current user is a member of `TeamEast`, the data should only show Store Regions in the `East`.

When we added the `test for team` we never added the required filter for the `True/False` data!. 

Return to the Dataset and add that filter:

<img src="assets/nrls22.png" width="800"/>

Publish this Dataset and return to our Workbook.

Now we get the results we want. `test for team` is all `True`, we only see `East` rows for `Store Region`:

<img src="assets/nrls23.png" width="800"/>

We can hide these two extra columns if we want, you know how to do that now. Just make sure to do it at the Dataset, and not the Workbook. 

Now what happens if we add ourself's back into `TeamEveryone`?

<aside class="positive">
<strong>IMPORTANT:</strong><br> Because my logged on user is a member of both teams, we are able to see all 4.5M rows. This flexibility allows team membership RLS to drive interesting use-cases when some users need to be able to see more data than others through multi-team membership.
</aside>

<img src="assets/nrls24.png" width="800"/>

In preparation for the next use case, return to the Dataset, hide the `Team` and `test for team` columns and disable the `test for team` filter. Publish those changes.

Now what if we don't have email address in the source data and don't want to use Sigma Teams? We will explore that in the next section.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## User Attribute RLS
Duration: 20

User Attributes (UA) can be used to provide a customized experience for your Sigma Teams or Members. They do not depend on email or currentTeam membership to work and allow you to apply RLS to any column in a Dataset.

They are assigned using a function in a Dataset column to provide row-level security.

Once you create a UA, you assign it to a Team(s). You then use this functionality in a Dataset to enforce row-level security in a similar manner as we have done with `CurrentUserEmail` and `CurrentUserTeam`, but this time we use the function `CurrentUserAttributeText` in the formula.  

In this use-case, we don't want to use Teams or Email columns as we assume they don't exist in our source data. 

Navigate to `Administration` > `User Attributes` and click `Create`.

Name the new UA `Region`. 

We need to assign this UA to either an existing `Team` or individual users (`Members`). 

We will use ourself (as Member) and assign the `Assigned Value` to only the `East` region.

Click `Assign Attribute`:

<img src="assets/nrls25.png" width="800"/>

<img src="assets/nrls26.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> When using Team assigmment, UAs also have a priority column. The priority determines which value is used for a user who may be a member of more than one team.
</aside>

Return to the Dataset, place it in `Edit` mode, and click on the `Worksheet` tab.

Add a new column next to `Store Region`, rename it `test for ua_Region` and set it's formula to:
```code
CurrentUserAttributeText("Region") = [Store Region]
```

Don't forget to set the filter as we have done before:

<img src="assets/nrls29.png" width="800"/>

If we open the `Store Region` drop menu and select `Column details` we can see that there is only one `Store Region` shown for `East` and we have the expected 812K rows of data:

<img src="assets/nrls30.png" width="800"/>

Hide the `Team` and `test for team` and `test for ua_Region` columns.

You can Publish this Dataset and check your Workbook if you like now. The results should show 812K rows and no indication to the user that data is being restricted:

<img src="assets/nrls31.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Custom SQL
Duration: 20
















![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
=======
Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->