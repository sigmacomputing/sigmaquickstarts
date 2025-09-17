author: pballai
id: dataapps_crowed_sourcing
summary: dataapps_crowed_sourcing
categories: dataapps
environments: web
status: published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2025-09-17

# Crowdsource Ideas with a Sigma Data App

## Overview 
Duration: 5 

In this QuickStart, you'll build a fully functional crowdsourcing app in Sigma that lets users submit, view, and upvote ideas—all without writing any code or using external tools.

You’ll learn how to capture user input with input tables, personalize the experience using user-aware controls, and create a clean, interactive workflow with modals and actions.

We’ll also show you how to track submissions, prevent duplicate upvotes, and apply basic styling to polish the final experience.

This is a great introduction to Sigma Data Apps—and a simple yet powerful example of how to go beyond dashboards and build collaborative, warehouse-native applications.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn’t work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
The typical audience for this QuickStart includes users of Excel, common Business Intelligence or Reporting tools, and semi-technical users who want to try out or learn Sigma.

### Prerequisites

<ul>
  <li>Any modern browser is acceptable.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown, as the basics are assumed to be understood.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry a "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>
 
![Footer](assets/sigma_footer.png)

## Input Table Setup
Duration: 5

Log into Sigma and create a new workbook:

<img src="assets/sugg_box_01.png" width="400"/>

We need a place where people can submit suggestions that are automatically stored in the warehouse. An input table is perfect for this.

Using the `Element bar`, click `Input` and `Empty` to place a blank input table on the page:

<img src="assets/sugg_box_02.png" width="400"/>

When prompted, select the `Sigma Sample Database` and click `Create`.

The table will be created with one column named `Text`. Rename it to `Department`.

<aside class="negative">
<strong>NOTE:</strong><br> Either double-click the column name to edit it or use the column menu and select `Rename column`.
</aside>

Click `+` to add three more text columns and name them `Idea`, `Description`, and `Value/Impact`:

Sigma offers a few optional native columns to help track input table activity.

Click `+` and select `Add new column` > `Row edit history` > `Last updated at`:

<img src="assets/sugg_box_03.png" width="300"/>

Repeat the process, this time adding `Last updated by`.

Extra clicks may create empty rows, which you can delete by selecting them all, right-clicking, and choosing `Delete x rows`:

<img src="assets/sugg_box_04.png" width="600"/>

Rename the `New Input Table` to `Suggestion Box Data`.

Click `Save As` and name the workbook `Suggestion Box QuickStart`:

<img src="assets/sugg_box_05.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add Some Controls
Duration: 5

Using the `Element bar`, click `Controls` and `Text input` to add the control to the page. 

Drag it above the input table:

<img src="assets/sugg_box_06.png" width="400"/>

Reduce it to an appropriate size:

<img src="assets/sugg_box_07.png" width="400"/>

Rename it `Department`, and set its `Control ID` in `Properties` to `ti-department`:

<img src="assets/sugg_box_08.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> The `Control ID` on an element is used when using the programmatic capabilities of Sigma and should use values that make identifying them easy should debugging be needed later. 

The `ti-` in the Department Control ID lets us know the type of control as well. Not required, but nice to have.
</aside>

Now, simply duplicate the `Department` control three times and adjust the name and `Control ID` for the three duplicates. 

Use the following values for the duplicates:

<aside class="negative">
<strong>NOTE:</strong><br> We used `ta-` for two of the controls because we will change the control type to `text area`.
</aside>

```code
Name            Control ID
Idea            it-idea
Description     ta-description
Value/Impact    ta-value-impact
```

After the controls are created, change the `Control type` for `Description` and `Value/Impact` to `Text area`:

<img src="assets/sugg_box_09.png" width="800"/>

Use your mouse to select all four controls and place them inside a container:

<img src="assets/sugg_box_10.png" width="800"/>

Containers are a great way to group elements and apply shared styling options.

For more information, see [Use containers to organize workbook layouts](https://help.sigmacomputing.com/docs/use-containers-to-organize-workbook-layouts)

### Add buttons
Using the `Element bar` > `UI` add a `Button` to the container and change its `Text` to `Submit`. Adjust other properties to customize the appearance as desired:

<img src="assets/sugg_box_11.png" width="800"/>

Duplicate the `Submit` button, and name the new one `Cancel`, change the appearance of this button to `Outline`:

<img src="assets/sugg_box_12.png" width="600"/>

### Add actions
Select the `Submit button`, then open the `Actions` tab in the `Element panel`.

Click the `+` next to `Action sequence` to add an action that will trigger `On click` of the `Submit` button:

<img src="assets/sugg_box_13.png" width="400"/>

We want the new action to add a new row of data to the input table with the values from our four input controls. This is really simple to do.

Select the `Insert row` action. Since we only have one input table, that is selected for us and Sigma also discovered and configured the four controls for us in the `With values` section:

<img src="assets/sugg_box_14.png" width="500"/>

A closer inspection reveals that three of the fields are not mapped correctly so we need to fix that:

<img src="assets/sugg_box_16.png" width="600"/>

Once you confirm the configuration is correct, click the `x` to close the action modal.

Now, let’s do a quick smoke test to watch the new row get added to the input table.

Add some information to the four controls and click `Submit`.

A row of data should be added with data in the correct columns:

<img src="assets/sugg_box_15.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add a Modal
Duration: 5

Let's improve the data app by adding a pop-up (modal) to capture suggestions, instead of having a flat page.

Select the container, the click `Move` > `New modal`:

<img src="assets/sugg_box_17.png" width="800"/>

Sigma will create a new modal page with everything from the container included automatically.

Rename the modal tab to `m.Add new idea`. 

Modals include default cancel and submit buttons, but since we’ve already created our own, we can disable the defaults.

You can also change the modal title to something more user-friendly:

<img src="assets/sugg_box_18.png" width="700"/>

Rename the page with your input table `Submitted ideas`.

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Main page
Duration: 5

Add a new page to the workbook. This will serve as the main page where users submit ideas.

Rename the new page `Suggestion box`.

Find an image from the internet to represent your suggestion box. This image will act as the button users click to submit a new idea. 

`Save` this image to your computer.

On your `Suggestion box` page, use the `Element bar` > `UI` > `Image` control to add the image you just saved to the page:

<img src="assets/sugg_box_19.png" width="550"/>

Add an action to the image that opens the "m.Add new idea" modal:

<img src="assets/sugg_box_20.png" width="700"/>

Click the image, and the modal should appear. Enter some information and click `Submit`.

You can check that the new row gets added to the `Suggestion Box Data` input table, but the form does not clear when you hit `Submit` and the modal stays open.

To solve this, we need to add an action to the `Submit` button.

Click on the `Submit` button on the `m.Add new idea` modal. 

Add an action to clear the all controls on the `m.Add new idea` modal:

<img src="assets/sugg_box_21.png" width="600"/>

Add one more action to close the modal:

<img src="assets/sugg_box_22.png" width="600"/>

Return to the `Suggestion box` page and click the image to test another idea submission. 

This time, the new row is added to the input table, the form clears, and the modal closes as expected.

### Cancel button actions
Now that you have an understanding of how to configure actions, setting up the cancel workflow is straightforward. 

Add actions to the `Cancel` button to clear the controls and close the modal:

<img src="assets/sugg_box_23.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add Some Personalization
Duration: 5

Next, we’ll display the submitted ideas on the `Suggestion Box` page.

To create visibility into the previously submitted ideas, go to your `Submitted ideas` tab and create a child table from the input table:

<img src="assets/sugg_box_24.png" width="800"/>

Let's format the child table in a presentation-friendly way by adjusting settings on the `Format` tab of the `Element panel`.

Notice there are a lot of formatting options in the `Table style` group:

<img src="assets/sugg_box_25.png" width="400"/>

Set the `Preset` to `Presentation` and `Cell spacing` to `Medium`. Adjust any other to your preference.

Rename the child table `Suggestions`.

In the table itself, rename `Last updated at` to `Submitted at`.  

Create a new column named `Submitted by` and set its formula to just show the person’s name and not the email address:
```code
Proper(SplitPart([Suggestion Box Data/Last updated by], "@", 1))
```

<img src="assets/sugg_box_26.png" width="800"/>

For more information, see [Proper Function](https://help.sigmacomputing.com/docs/proper)

Hide the original `Last updated by` column.  

We’ll use that column in a formula shortly, so it needs to remain in the table—but doesn’t need to be displayed to end users.

Move the formatted `Suggestions` table to the `Suggestion box` tab and place it below the image:

<img src="assets/sugg_box_27.png" width="800"/>

Next, let’s add a toggle to filter the table to only show your own suggestions.

Create a new column named `Current user idea?` and set the formula to:
```code
[Last updated by]=CurrentUserEmail()
```

This will return `true` or `false` based on the currently logged-in Sigma user.

Filter on this column:

<img src="assets/sugg_box_28.png" width="500"/>

Convert it to a page control:

<img src="assets/sugg_box_29.png" width="400"/>

Change this filter to a `Switch` control type and set the `Filter type` to `True/All`:

<img src="assets/sugg_box_30.png" width="800"/>

You can improve the UI of the switch control for a cleaner look:

<img src="assets/sugg_box_31.png" width="800"/>

Hide the `Current user idea?` column.

You can test the switch control, but it won’t do anything yet since you’ve submitted all the ideas. It will work once other users have submitted ideas.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Upvoting
Duration: 5

Now that we can collect ideas, it would be great if people could upvote ideas so we can see which ideas are the most popular.

Navigate to your `Suggestion Box` page and add a new column to the `Submitted Ideas` table using the formula `"⏫️"` and rename it `Upvote` (quotes required):

<img src="assets/sugg_box_32.png" width="800"/>

### Upvoting input table
When users upvote a suggestion, we need to store that information somewhere. We will do that with another empty input table that has two columns.

Add a new `Empty` input table under the `Suggestions` table on the `Suggestion box` page and use the `Sigma Sample Database` connection.

Configure two text columns: "Idea" and "Upvoted by". Use the `Created by` option to capture who made the upvote:

<img src="assets/sugg_box_33.png" width="450"/>

Rename the input table `Upvoted Ideas` and move it to the `Submitted ideas` page to avoid influencing users.

### Add upvote action
Select the `Upvote` column in the `Suggestion Box` table that has the `⏫️`. We need to add three actions for when a user clicks to upvote an idea that:

**1:** Updates the `Ideas` control to match the idea that was clicked:

<img src="assets/sugg_box_34.png" width="600"/>

**2:** Inserts a new row into the `Upvotes` input table with the selected idea:

<img src="assets/sugg_box_35.png" width="550"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> This demonstrates one way of using controls to pass variable values between elements in Sigma and can be incredibly useful. 
</aside>

**3:** Clears the `Ideas` control after submission:

<img src="assets/sugg_box_36.png" width="600"/>

Go ahead and test the upvote action by clicking on any cell with the `⏫️` icon. A new row should appear in the `Upvoted Ideas` table with the idea name and your email address:

<img src="assets/sugg_box_37.png" width="800"/>

### Prevent duplicate upvotes
Now let’s display the number of upvotes in the `Submitted ideas` table and handle repeat votes from the same user.

Add a new column via lookup to the `Upvoted Ideas` table:

<img src="assets/sugg_box_38.png" width="800"/>

Configure the lookup to return a distinct count of email addresses, matched on `idea`:

<img src="assets/sugg_box_39.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> We are doing a distinct count so that each person can only upvote each idea one time. This will stay at either `0` or `1` until we have other users submitting ideas. 
</aside>

Rename the new column `Rank`, and drag it to the first position in the table.

Let’s also sort the table by this column so that the most upvoted ideas appear first:

<img src="assets/sugg_box_40.png" width="800"/>

In this setup, users can see which idea ranks highest, but not how many votes were cast or who voted. Of course, that is possible along with many other things like adding charts or other visualizations that Sigma provides. 

Now that you know the basics, adding more functionality follows the same workflow we’ve already used.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Clean up and Final Test
Duration: 5

Go to the `Submitted ideas` page and set the data entry permission to `Editable in published version`:

<img src="assets/sugg_box_41.png" width="800"/>

Do the same for the `Upvoted Ideas` table. 

Hide the `Submitted ideas` tab.

Click `Publish` to publish the workbook.

<aside class="negative">
<strong>NOTE:</strong><br> You can always clear out your test ideas by changing the data entry permission on the input tables to "Editable in draft mode", deleting the test rows, changing the data entry back to "Editable in published version" and publishing again.
</aside>

### Apply a theme (optional)
Sigma provides pre-defined themes to allow you to quickly style a workbook. You can also create your own themes.

Click away from any element on the workbook page to open the theme selector and preview available themes (e.g.,Dark):

<img src="assets/sugg_box_42.png" width="800"/>

The `Workbook settings` button exposes many additional options you can customize.

For more information, see [Create and manage workbook themes](https://help.sigmacomputing.com/docs/create-and-manage-workbook-themes)

Changing the theme revealed a display issue with null values in the `Rank` column. We did not see this earlier but we can fix it easily now. The issue is that the lookup used to create the `Rank` column made a distinct count based on two text columns and the resulting new column (Rank) is numeric. Since two of the rows have no value, their rank is null. 

You can fix this easily by adjusting the formula in the rank column to avoid this. 

Select the `Rank` column and adjust the formula to handle nulls:
```code
Coalesce(Lookup(CountDistinct([Upvoted Ideas/Idea]), [Idea], [Upvoted Ideas/Idea]), 0)
```

For more information, see [Coalesce](https://help.sigmacomputing.com/docs/coalesce)

The `Rank` column displays correctly, as the formula uses coalesce to replace `nulls` with `0`.

<img src="assets/sugg_box_47.png" width="800"/>

### Final test (optional)
Let’s validate how the application behaves when accessed by another user. We can use Sigma's [User Impersonation]() feature to do this. This allows an administrator to use Sigma as if they were another user which is useful for debugging issues reported by specific users.

Before we can impersonate, we need to share the workbook with another user:

<img src="assets/sugg_box_44.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Grant the user `Explore` permission so they can add their ideas.
</aside>

Once shared, go to `Administration` > `Users`, select a user, and click `Impersonate user`:

<img src="assets/sugg_box_43.png" width="800"/>

In `Shared with me`, the user can open the `Suggestion Box QuickStart` workbook:

<img src="assets/sugg_box_45.png" width="800"/>

Since the impersonated user has not submitted a suggestion and the switch selector is set to `Just mine`, there is no data. 

Change it to `Everyone`, and you’ll see all ideas and can upvote them too:

<img src="assets/sugg_box_49.png" width="800"/>

If a new suggestion is submitted, it will appear in the table with the impersonated user listed under `Submitted by`:

<img src="assets/sugg_box_48.png" width="800"/>

Congratulations! You just built a feature-rich Suggestion Box application in record time.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we created a complete Suggestion Box app in Sigma—from capturing and storing ideas to enabling upvotes and personalized views. 

Along the way, we used input tables, controls, modals, and actions to build a polished user experience. 

We also explored ways to manage data visibility, prevent duplicate votes, and simulate user interactions using impersonation. With just a few Sigma features, we delivered a lightweight yet powerful solution—ready to extend and deploy.

**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->