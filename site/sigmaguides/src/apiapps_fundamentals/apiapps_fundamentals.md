author: pballai
id: dataaps_fundamentals
summary: Learn how to build a fully functional project tracking AI app in Sigma using input tables, modals, controls, actions, and approval workflows — without writing code.
categories: aiapps
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Default
lastUpdated: 2026-11-10

# AI Apps Fundamentals

## Overview 
Duration: 5 

Sigma has always been known as a leader in analytics, with its cloud-built platform designed to support today’s massive data scale challenges.

Sigma has been extended to enable customers to build rich, interactive applications, automate workflows, and take action customized to their team’s needs—all without writing any code.

This QuickStart demonstrates how to use Sigma to build an AI Application (app) entirely within the Sigma UI. The data used will come from, and be stored in, Snowflake. During this demonstration, we will build a fully functional project tracking AI App that, in the past, may have taken significant time to get up and running.

Prefer to watch first? [Watch the short summary video](https://sigmacomputing.wistia.com/s/4ib6rek3ofy1azd) to see how the app is built with input tables, modals, controls, and actions.

This QuickStart is a bit longer than usual, and we understand that people can be pressed for time. While it is well worth the investment, if you can’t spare the time, you can instead [watch this 5-minute video](https://sigmacomputing.wistia.com/medias/6lneuw4062?__hstc=191098485.ee45354cafd3cb03900ca8358c6cba7c.1713989091503.1733934938183.1734711950588.87&__hssc=191098485.2.1734711950588&__hsfp=336580338) to see how impactful Sigma AI apps can be for your organization.

<aside class="positive">
<strong>PLEASE READ:</strong><br> Sigma AI apps are rapidly evolving, with new features being added regularly. If your Sigma instance does not have the specific feature shown (or if the UI has changed), please contact Sigma support for assistance in accessing the feature.
</aside>

[How to contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### What we will build
After completing this QuickStart, we will have built a fully functional AI App based on a project management use case. 

The finished product can look something like this (depending on your styling choices!):

<img src="assets/dataaps_fun_done.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. Sigma continuously adds and enhances functionality, but these differences won’t prevent you from completing the steps.
</aside>

If something isn’t working as expected, here’s how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry the "Beta" tag. Beta features are subject to quick, iterative changes, so the latest product version may differ from what’s shown here.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

### Target Audience
Sigma builders interested in leveraging the advanced capabilities to create fully functioning AI Apps.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Project Tracker use case
Duration: 5

Teams managing work across initiatives, customer rollouts, and internal programs need a way to see what's in flight, what's blocked, who owns each task, and whether the work has been approved. Spreadsheets get messy; standalone project tools mean another login, another data silo, and integration work to get the numbers back into your analytics.

The Project Tracker built in this QuickStart keeps the entire app inside a Sigma workbook, backed by your warehouse. Project records, task hierarchy, status history, approval state, and the UI to manage all of it land in one place — no separate database, no hand-built forms, no custom approval routing.

The app supports the following capabilities:

| Category | Description |
| --- | --- |
| Projects | Top level reporting. |
| Tasks | Tasks are children of projects. Each project may have one or more tasks. |
| Status | Project status changes over time. The app tracks status history while displaying only the latest status for each project. |
| Approvals | All projects must be reviewed and approved before being marked complete. |
| UI | All project details visible in one place. |

Throughout the build, we'll exercise these core Sigma areas:

- **Input Tables:**
  - Data validation
  - Input tables + Actions
- **Overlays / Modals:**
  - Forms
  - Filters
- **Controls:**
  - Building a control panel
  - Interaction of controls and actions
- **Building the application interface**
- **Approval workflow**
- **Themes**

<aside class="negative">
<strong>NOTE:</strong><br> Pay attention to naming conventions used in this QuickStart, especially around control IDs. This will make your build far easier as the sections progress.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Terminology
Duration: 5

The following is a guideline for the different parts of the Sigma interface so that we are oriented to the terms that will be used throughout this QuickStart. Not every item is called out, but the most used ones are.

### Workbook page - published version
<img src="assets/dataaps_fun_0.png" width="900"/>

The numbered areas are:

- (1) `Workbook header`
- (2) `Sigma home`: returns to Sigma Home.
- (3) `Edit`: opens the workbook in edit mode.
- (4) `Assistant`: opens Sigma Assistant.
- (5) `Customize workbook`
- (6) `Customize selected element`: the element toolbar, shown above the selected element.

### Workbook menu - published version
<img src="assets/dataaps_fun_0a.png" width="350"/>

The numbered areas are:

- (1) `My Workbook`: opens the workbook menu.
- (2) The workbook menu: `File`, `Edit`, `Custom views`, `Versions`, `Share and export`, `Comments`, and `About this workbook…`.
- (3) `Edit`: opens the workbook in edit mode.

### Workbook page - edit mode
<img src="assets/dataaps_fun_0b.png" width="900"/>

The numbered areas are:

- (1) `Workbook header`: the workbook name and draft status, `Publish`, and workbook-level controls.
- (2) `Assistant`: opens Sigma Assistant.
- (3) `Toolbar`: undo, redo, and formatting for the selected column or element.
- (4) `Formula bar`: view and edit the formula for the selected column.
- (5) `Element toolbar`: appears above the selected element.
- (6) `Element panel`: the right-hand sidebar for configuring the selected element, with `Properties`, `Format`, and `Actions`.
- (7) `Element bar`: adds new elements to the page: `Data`, `Input`, `Charts`, `Controls`, `UI`, and `Layout`.
- (8) `Page overview`: lists the pages and elements in the workbook.
- (9) `Add page`: adds a new page.
- (10) `Workbook lineage`: shows where the workbook's data comes from.
- (11) `Help`: help options.

### Publish menu - edit mode
Open the arrow next to `Publish` (1) to go to the published version, discard the draft, switch to mobile view, or preview the workbook with `View access` or `Explore access` (2).

<img src="assets/dataaps_fun_0d.png" width="500"/>

For more information, see [Getting around in Sigma](https://help.sigmacomputing.com/docs/get-around-in-sigma)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Introduction to Input Tables
Duration: 5

Input tables are dynamic workbook elements that support structured data entry. They allow you to integrate new data points into your analysis and augment existing data from your data platform to facilitate rapid prototyping, advanced modeling, forecasting, what-if analysis, and more—without overwriting source data.

Use input tables as sources for tables, pivot tables, and visualizations, or incorporate the data using lookups and joins. And when you create warehouse views for input tables, you can reuse the manually entered data across your broader data ecosystem.

There are many options to control how users are permitted to use input tables. 

For more information on this topic, see: [Input tables overview](https://help.sigmacomputing.com/docs/intro-to-input-tables)

### Step 1: Open a blank workbook in Sigma:
Log into Sigma and select `+ New` (1) > `Workbook` (2) from the homepage:

<img src="assets/dataaps_fun_1.png" width="600"/>

### Step 2: Add empty input table:
Create an empty input table on Sigma Sample Database by clicking `Input` (1) in the element bar and dragging `Empty input table` (2) onto the page.

<img src="assets/dataaps_fun_1a.png" width="500"/>

In the `Create new input table` dialog, leave `Empty table` selected (1), confirm the connection is `Sigma Sample Database` (2), and click `Create table` (3).

<img src="assets/dataaps_fun_1a1.png" width="450"/>

Change the title of the new input table (by double-clicking its current title) to `Project Tracker Input Table` (1):

<img src="assets/dataaps_fun_1b.png" width="450"/>

### Step 3: Add new columns:
In this step, we will create three new columns: two as `text` and one as `date` format.

First, rename the existing `Text` column to `Project Name`.

Next, open the menu for the `Project Name` column and select `Add new column` (1). Add two `Text` columns (2) and one `Date` column (3):

<img src="assets/dataaps_fun_1c.png" width="500"/>

Rename the new columns to `Project Owner`, `Project Type`, and `Project Due Date` respectively (1):

<img src="assets/dataaps_fun_1d.png" width="800"/>

### Step 4: Rename the page 
Rename the workbook page to `Project Tracker` (1) and add a new page, by clicking the `+` icon (2) in the footer. Rename it to `Data Validation` (3):

<img src="assets/dataaps_fun_1e.png" width="500"/>

### Step 5: Validation input tables
In this step we will create three additional input tables, reloading them with data from csv files. 

<aside class="negative">
<strong>NOTE:</strong><br> Add these to the "Data Validation" workbook page.
</aside>

Click the button below to download the files (in zip format). Extract them to a known location to make them easy to find.

<button>[Download the CSV files](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/input_tables/dataapps_qs_fundamentals.zip)</button>

The download will contain three csv files once extracted (1):

<img src="assets/dataaps_fun_1f.png" width="450"/>

Now that we have the files, go to the `Data Validation` page. We will add three `CSV` input tables there using the element bar as we previously did.

The only different thing in this workflow is we will select `Upload CSV` from the `Input table` element bar group:

<img src="assets/dataaps_fun_1g.png" width="600"/>

`Browse` to where the csv files downloaded are stored and select the first one. 

After selecting the first csv file, Sigma allows you to adjust the `Parsing options` (1) and review the parsed data (2). This ensures the data makes it to the input table as expected. If everything looks correct, click `Save` (3).

<img src="assets/dataaps_fun_1h.png" width="800"/>

Sigma names each new input table after its csv file. Once all three input tables are added, the `Data Validation` page has `Data.Status Type` (1), `Data.Employee` (2), and `Data.Project Type` (3):

<img src="assets/dataaps_fun_1i.png" width="800"/>

### Step 6: 
On the `Project Tracker` page, open the menu for the `Project Owner` column (1) on the `Project Tracker Input Table` and select `Data validation` (2):

<img src="assets/dataaps_fun_1j.png" width="450"/>

For `Option source` (1), select `Data Validation - Data.Employee`. The `Name` column (2) from that table is automatically selected.

Also click `Convert` (3) to convert this column to a `Single-select` to take advantage of more styling options. It makes sense that a project would have one `Project Owner` in our use case:

<img src="assets/dataaps_fun_1j1.png" width="450"/>

Click `Save` (4). 

Now the `Project Owner` column is restricted to the list of employees from the `Data.Employee` input table (1):

<img src="assets/dataaps_fun_1l.png" width="450"/>

Repeat this step for the `Project Type` column (1), but this time, open `Change column type` (2) and select `Single-select (Text)` (3) to save a step, since we know we want styling and only allow one `Project Type` to be selected for each project:

<img src="assets/dataaps_fun_1l1.png" width="450"/>

Use the `Data.Project Type` input table as the source of validation value.

Delete any blank rows that may be present in the `Project Tracker Input Table` while we were building. Select the rows (1), right-click, and choose `Delete 4 rows` (2). The number matches how many rows you selected:

<img src="assets/dataaps_fun_1l2.png" width="400"/>

### Step 7: 
Add the following row of data (1) to the `Project Tracker Input Table`.

<img src="assets/dataaps_fun_1m.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> Make sure to always set the "Project Due Date" value to a date that is in the future when using the AI App.
</aside>

### Step 8: 
Click the `Save as` button (1) and name the workbook `AI Apps Fundamentals`.

<img src="assets/dataaps_fun_1m1.png" width="400"/>

### Step 9: 
Using the element bar, in the `Controls` group (1), add a `Text input` control (2) and drag it above the input table: 

<img src="assets/dataaps_fun_1n.png" width="350"/>

Rename it `Project Name` (1).

With the `Project Name` control selected, change the `Control ID` (2) to `cp-ProjectName` in the element panel:

<img src="assets/dataaps_fun_1o.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Setting and following a control naming convention at the beginning of your application build will help you maintain order as your application grows. In this case, we use “cp-ControlName” to indicate that the process this control is used for is “Create Project” i.e. cp. 
</aside>

### Step 10: 
Add a `List values` control element and name it `Project Owner` (1). 

In the element panel under `Value source` (2), select `Data Validation` > `Data.Employee` and set the `Source column` (3) to `Name`. 

Ensure that only `Show clear button` and `Show search box` (4) are selected. 

Rename the `Control ID` (5) to `cp_ProjectOwner`:

<img src="assets/dataaps_fun_1p.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> When using a control to insert a row into a table, you cannot have “Allow Multiple Selection” on. This creates an array of values, rather than a single value. 
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> Make sure to hit enter when renaming controls to be sure that the name change is confirmed.
</aside>

### Step 11: 
Repeat step 10 for `Project Type` (1). 

In the element panel under `Value source` (2), select `Data Validation` > `Data.Project Type` and set the `Source column` (3) to `Project Type`. Keep only `Show clear button` and `Show search box` (4) selected. 

Rename the `Control ID` (5) to `cp_ProjectType`:

<img src="assets/dataaps_fun_1p1.png" width="700"/>

### Step 12: 
Add a `Date` control titled `Project Due Date` (1) with a `Control ID` (2) of `cp_ProjectDueDate`:

<img src="assets/dataaps_fun_1q1.png" width="700"/>

The page should look like this now:

<img src="assets/dataaps_fun_1q.png" width="900"/>

### Step 13: 
Add a `Button` (1) from the element bar, `UI` group to the page and set its `Text` (2) to `Create Project`:

<img src="assets/dataaps_fun_1r.png" width="900"/>

### Step 14: 
On the `Actions` panel of the `Create Project` button, add a new action (1) and select `Insert row`. 

Ensure the values align for each control to the `Project Tracker Input Table` (2):

<img src="assets/dataaps_fun_1s.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> To insert rows in the published version of the workbook, the input table's data entry permission must be set to <code>Editable in published version</code>. Select <code>Access data entry panel</code> in the action to change it.
</aside>

For more information on this topic, see: [Create actions that modify input table data](https://help.sigmacomputing.com/docs/create-actions-that-modify-input-table-data)

What this action does is add a new row to the input table, containing whatever values are set in the four controls on our page. 

If you click the button with no values provided, an empty row is added to the input table. Right click that empty row and select `Delete 1 row` if needed. 

Click `Publish`.

### Step 15: 
Now let’s create some projects. It does not really matter what you decide to use for the control, it is test data anyway.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Input tables support controlling when and who can enter data. While in development, we can leave this setting to "Editable in draft". Prior to production use we want to restrict this setting more. 
</aside>

For more information on this topic, see: [Input tables overview](https://help.sigmacomputing.com/docs/intro-to-input-tables)

Adjust the controls for a new project:

<img src="assets/dataaps_fun_1ta.png" width="900"/>

Click `Create Project` (1) to test if everything was set up correctly. A new row appears in the input table (2):

<img src="assets/dataaps_fun_1tb.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> The control values (3) were not cleared after we created the new project. We will handle that in a bit.
</aside>

### Step 16: 
Select each control (shift+click) and the `Create Project` button. 

At the top right, choose the `Create container` option (1) from the selected elements menu:

<aside class="positive">
<strong>IMPORTANT:</strong><br> Make sure to include the "Create Project" button. We will add a replacement back later.
</aside>
<img src="assets/dataaps_fun_1u.png" width="900"/>

<aside class="positive">
<strong>PRO TIP:</strong><br> You can also use hot keys! "Command+G" will put all selected items into a container.
</aside>

### Step 17: 
Rename the container `Create Project Container` (1):

<img src="assets/dataaps_fun_1v.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Naming containers as you create them will make life much easier as the app grows. 
</aside>

### Step 18: 
Select the `Create Project` button (1), and go to `Actions`. 

Add a second action (2) set to `Clear control` applied to `Container` with our newly created `Create Project Container` (3). This will set the action to automatically target all four control elements:

<img src="assets/dataaps_fun_1w.png" width="600"/>

### Step 19: 
Add an additional row of data to test the clear action on each control element within the container. 

The updated `Project Tracker` should look as follows, with a new row of data (1) and the controls cleared (2) once the `Create Project` button is clicked:

<img src="assets/dataaps_fun_1x.png" width="900"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Project Creation Modal
Duration: 5

### Step 1: Add a modal
Click on the `Create Project` container, and then click the <img src="assets/3-dots.png" width="20"/> icon (1) at the top right of the container. 

Select the `Move to` (2) > `New modal` (3) option. 

<img src="assets/dataaps_fun_2.png" width="900"/>

### Step 2: 
Name the modal tab `Modal - Create Project` (1) by changing the workbook page name.

By now, we assume you are familiar with where elements are accessed and configured in Sigma, so we may not show all steps.

Rename the title from `New modal` to `Create a New Project` (2). 

Turn off both `Show primary button` and `Show secondary button` (3) under `Footer` in the element panel.

Move the various elements around and resize everything to suit. Trim any unnecessary space:

<img src="assets/dataaps_fun_2a.png" width="900"/>

### Step 3:
Create a new button and rename it to `Clear Form` (1). 

In the actions panel, add an action (2) set to `Clear control` on the `Create Project Container`. This is a good best practice for improving user experience.

<img src="assets/dataaps_fun_2b.png" width="900"/>

### Step 4: 
Return to the `Project Tracker` page and add a button titled `Create Project` (1). 

This button replaces the `Create Project` button we moved to the modal earlier.

Add an action (2) with `Open modal/drawer` selected for the `Modal - Create Project`:

<img src="assets/dataaps_fun_2d.png" width="900"/>

### Step 5: 
Click the `Create Project` button to test the action. `Modal - Create Project` should open. Check that adding a record, clear and create project works to add a new row in the `Project Tracker`.

<aside class="negative">
<strong>NOTE:</strong><br> Delete any empty rows that may have been accidentally created during configuration steps.
</aside>

**Congratulations!**<br>
You have now successfully built a form to do controlled data entry.

Considering how easy that was AND data is being written automatically to the cloud data warehouse, that is pretty slick. Let's go further still.

### Step 6: Create page controls
On the `Project Tracker Input Table` page, open the filters panel (1) and add (2) filters (3) for the `Project Name`, `Project Owner`, and `Project Type` one at a time. 

<img src="assets/dataaps_fun_2e.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> You can use "Shift-F" to quickly add a filter. It's like moving at warp speed!
</aside>

For more information on keyboard shortcuts in Sigma, check out these docs:

[Windows](https://help.sigmacomputing.com/docs/keyboard-shortcuts-microsoft-windows)

[Mac](https://help.sigmacomputing.com/docs/keyboard-shortcuts-mac-os)

Convert each filter to a page control by selecting the ellipsis (1) and then `Convert to page control` (2):

<img src="assets/dataaps_fun_2f.png" width="400"/>

Select each control (1) and rename each of the `Control ID` values (2) to have `filter-` prepended, as shown for `filter-Project-Name`:

<img src="assets/dataaps_fun_2g.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> Leave the “allow multiple selections” option clicked. These controls will not be used to “Insert Rows”, they will just be used for filtering.
</aside>

Click `Publish`.

### Step 7: Container it
Select the filters and place them into a container titled `Filters Container`, 

Move this container to a new modal titled `Modal - Filters`. 

Change the title to `Filters` and this time keep the footer buttons (1), naming the primary `Close Modal` and the secondary `Clear Filters` (2). Turn off `Show close icon`, since we will have a button to do that. 

<img src="assets/dataaps_fun_2h.png" width="800"/>

### Step 8: 
On the actions tab of `Modal - Filters` configure the `Close Modal` button to `Close modal/drawer` (1).

For the secondary button, configure `Clear Filters` to `Clear control` on the `Filters Container` (2):

<img src="assets/dataaps_fun_2i.png" width="700"/>

### Step 9: 
Back on the `Project Tracker` page, add another button for `Project Filters` with an action to `Open Modal` on `Modal - Filters`. 

Add an additional button named `Clear Filters`.

Select all three buttons and place those into a container titled `Buttons Container`. 

<img src="assets/dataaps_fun_2ia.png" width="800"/>

Set the action on the `Clear Filters` button (1) to `Clear control` on the `Filters Container (Modal - Filters)` (2).

<img src="assets/dataaps_fun_2ib.png" width="900"/>

Test that the new buttons work as expected. 

<aside class="negative">
<strong>NOTE:</strong><br> Putting the filters into an overlay saves real estate on the application. Adding dynamic text to the button helps give users insight into if any filters are applied.
</aside>

Our AI App is beginning to take form by mixing and matching Sigma building blocks.

### Step 10: 
Customize the title for the `Project Filters` button by adding a `(` after the Project Filter text, followed by the `=` sign, which will open a pop up for you to use a custom formula:

Use the following formula:
```copy-code
Sum(If(ArrayLength([filter-Project-Name]) > 0, 1, 0) + 
If(ArrayLength([filter-Project-Type]) > 0, 1, 0) + 
If(ArrayLength([filter-Project-Owner]) > 0, 1, 0))
```

The formula appears in the editor (1):

<img src="assets/dataaps_fun_2iba.png" width="700"/>

Once the formula is good, click the green checkmark:

<img src="assets/dataaps_fun_2j.png" width="800"/>

Add one more `)` to make the value surrounded by `()`.

Click the `Project Filters` button and set a few filters. 

This results in a count (1) when filters are selected (2). The number shows how many of the three filters have a selection, not how many values are selected:

<img src="assets/dataaps_fun_2j1.png" width="900"/>

<aside class="positive">
<strong>NOTE:</strong><br> There are other ways to tabulate the count. For example, the formula can total the number of values selected across the filters instead. Choose the approach that best fits how your users will filter.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Create the Control Panel
Duration: 5

### Step 1: Add page
Add a new page named `Control Panel`. 

This will be the central hub and spine for the AI App, which ensures governance over the circular flow of data.

### Step 2: 
On the `Project Tracker` page, add three new columns from the `System columns` section of the `Add new column` menu: `Row edit history` (1) > `Last updated at` and `Last updated by` (2), and `Row ID` (3). 

<img src="assets/dataaps_fun_3.png" width="500"/>

Rename `Row ID` to `Project ID`, click its column header and drag it over so that it is in the first position on the table:

<img src="assets/dataaps_fun_3a.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> “Project ID” will become a key column on which the rest of this app is built.
</aside>

### Step 3: 
Create a `child table` from the `Project Tracker Input Table`: select `Create child element` (1), then `Table` (2). Rename the child `Project Tracker Stable Table`:

<img src="assets/dataaps_fun_3b.png" width="600"/>

### Step 4: 
Move the `Project Tracker Stable Table` to the `Control Panel` page: open the element menu (1), select `Move to` (2), then `Control Panel` (3).

<img src="assets/dataaps_fun_3c.png" width="900"/>

### Step 5: 
On the `Control Panel` page, from the `Project Tracker Stable Table` filter `Project ID` and convert it to a page control (1). 

Rename the `Control ID` (3) to `master-ProjectID`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Be sure to deselect <code>Allow multiple selection</code> (2).
</aside>

<img src="assets/dataaps_fun_3d.png" width="900"/>

### Step 6: 
Add another page control filter, this time for `Project Name`.

Rename the Control ID to `master-Project-Name`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Be sure to deselect "Allow Multiple Selection".
</aside>

### Step 7: 
The `Control Panel` page (1) should look as follows at this stage, with the two page controls (2) above the table: 

<img src="assets/dataaps_fun_3e.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> We will start to use this page extensively in the next sections. The two controls we’ve just created will be used in most of our action sequences, and the table we’ve created will be used as a source for most of our page elements.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Create the Task Table
Duration: 5

### Step 1: 
On the `Project Tracker` page, add a new `Empty` input table, connect it to the `Sigma Sample Database` and rename it to `Task Tracking Input Table`. 

Configure columns for `Task Name`, `Task Owner` and a `Due Date` column as `Date` data type (1):

<img src="assets/dataaps_fun_4.png" width="700"/>

### Step 2: 
Delete any empty rows (1):

<img src="assets/dataaps_fun_4a1.png" width="700"/>

Add an additional **text** column for `Project ID` (1):

<img src="assets/dataaps_fun_4a.png" width="700"/>

This column will be tied to the `Project Tracker Input Table` to link tasks to projects. 

### Step 3: 
Add a `text input` control, `List values` control, and `Date` control above the `Task Tracking Input Table`. 

Rename these to `Task Name`, `Task Owner`, and `Task Due Date`. 

Set each `Control Id` as:

<table>
    <thead>
    </thead>
    <tbody>
        <tr>
            <td>Task Name</td>
            <td>ct-Task-Name</td>
        </tr>
        <tr>
            <td>Task Owner</td>
            <td>ct-Task-Owner</td>
        </tr>
         <tr>
            <td>Task Due Date</td>
            <td>ct-Task-Due-Date</td>
        </tr>
    </tbody>
</table>

<aside class="negative">
<strong>NOTE:</strong><br> We are using “ct-” for “Create Task”
</aside>

### Step 4: 
Select the `Task Owner` control (1) and ensure its `Value source` is the `Data.Employee` table and the `Source column` is `Name` (2), with the correct items deselected as shown (3):

<img src="assets/dataaps_fun_4b.png" width="900"/>

### Step 5: 
Create a container named `Create Task Container` with the three controls.

<img src="assets/dataaps_fun_4c.png" width="800"/>

### Step 6: 
Move this container to a `New modal` and rename the modal tab to `Modal - Create Task` (1). 

Change the modal title to `Create Task` (2):

<img src="assets/dataaps_fun_4c1.png" width="600"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> This modal will be used to write data back to the "Task Tracking Input Table" on the "Control Panel". We want to ensure the data lands in the right place!
</aside>

Using the existing primary and secondary buttons (3), change the names to `Clear Form` and `Create Task`.

Configure the actions for these buttons as follows:

**Create Task (primary button):**<br>
Add an `Insert row` action (1) and make sure you’re inserting into the `Task Tracking Input Table` (2). Set `Project ID` (3) to the `Project ID` control on the `Control Panel` page:

<img src="assets/dataaps_fun_4e0.png" width="900"/>

Add two more actions after the `Insert row` action to clear the controls in the `Create Task Container` (1) and then close the modal (2):

<img src="assets/dataaps_fun_4e.png" width="700"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Pay attention to number 3 on the first screenshot above. We want to set the Project ID to use the value for Project ID from the Control Panel page!
</aside>

**Clear Form (secondary button):**<br>
Add a `Clear control` for the `Container` with the action set as:

<img src="assets/dataaps_fun_4d.png" width="600"/>

<aside class="negative">
<strong>NOTE:</strong><br> The control for project ID will be set in a future step.
</aside> 

We will use the modal's `X` to close the modal, if the user does not want to take any action.

<img src="assets/dataaps_fun_4d1.png" width="700"/>

### Step 7: 
On the `Project Tracker Input Table`, open a column's dropdown and select `Add new column` (1) > `Calculation` (2). 

<img src="assets/dataaps_fun_4g.png" width="600"/>

The formula for this calculation will be "Add a Task" (with quotation marks included) in the formula bar (1). 

Rename this column to `Add Task` (2):

<img src="assets/dataaps_fun_4h.png" width="600"/>

### Step 8: 
Let's add an action to `Add Task`.

Configure the action to `On select` for the column `Add Task` (1).

Configure the rest of the action to set the `Project ID` on the `Control Panel` (2):

<img src="assets/dataaps_fun_4i.png" width="700"/>

### Step 9: 
Add conditional formatting to the `Add Task` column (1) to make it appear as a formatted hyperlink, using a `Text contains` rule for `Add a Task` (2) with underline and a font color (3):

<img src="assets/dataaps_fun_4j.png" width="600"/>

### Step 10: 
Test this action by selecting an `Add a Task` cell from `Create New Task` and check the `Control Panel` page 
for the `Project ID` control element. The value that was clicked will appear in the filter (1), and the `Project Tracker Stable Table` will show only that project (2):

<img src="assets/dataaps_fun_4k.png" width="900"/>

Before continuing, clear the `Project ID` control (select the `×`) so the later tests start from an empty filter.

### Step 11: 
We also want to set the `Project Name` when the user clicks `Add a Task`. 

Add another action (1) under the `Set 'Project ID'` action and configure it as `Set 'Project Name'` (2), updating the `Project Name` control on the `Control Panel` with the `Project Name` column (3):

<img src="assets/dataaps_fun_4l.png" width="600"/>

### Step 12: 
Add a third action (1) with `Open modal/drawer` selected, and choose `Modal - Create Task` (2):

<img src="assets/dataaps_fun_4m.png" width="700"/>

### Step 13: 
When the modal appears, we want the `Project Name` to appear in the title so the user is oriented.

On the `Modal - Create Task` page, select the text `Create Task` and append it with `for ` followed by `=`, which opens the formula bar. Use this formula:
```copy-code
[master-Project-Name]
```
and click the green checkmark. The title now shows the project name (1), from the formula in the editor (2):

<img src="assets/dataaps_fun_4n.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> It may appear as "Create Task for N/A" at first. This will change once the user actually goes to "Add a Task".
</aside>

### Step 14: 
Let's test this by clicking `Add a Task` from any row and entering some test data (1). When done, click `Create Task` (2):

<img src="assets/dataaps_fun_4o1.png" width="900"/>

The new task should appear in the `Task Tracking Input Table` (1), with the `Project ID` of the project you started from:

<img src="assets/dataaps_fun_4o.png" width="900"/>

Try this multiple times to add new tasks to the task tracking table.

<aside class="positive">
<strong>NOTE:</strong><br> Each action you add to a button is a choice about how much work the user has to do. <code>Clear Form</code> lets users reset the form themselves, but opening the modal does not clear it, so values from an earlier task may still be showing when you click <code>Add a Task</code> again. 
<br><br>
To start every task with a blank form, add a <code>Clear control</code> action for the <code>Create Task Container</code> before the <code>Open modal/drawer</code> action on the <code>Add Task</code> column.
</aside>

### Step 15: 
Add a new column via lookup to the `Task Tracking Input Table`.

This time we used the element panel, `COLUMNS` section: select the `+` (1) next to `ADD COLUMN`, then `Via lookup…` (2). This is another way to add a column:

<img src="assets/dataaps_fun_4q.png" width="900"/>

We need to let Sigma know which column(s) we want to bring in and how to "match" the two input tables (e.g., join them). Select the `Project Tracker Input Table` as the element (1) and add the `Project Name` column (2). We could also pre-aggregate the columns as we bring them in, but in this case, that is not wanted, so `Aggregate` stays `None`.

Map `Project ID` in the `Task Tracking Input Table` to `Project ID` in the `Project Tracker Input Table` (3). The match summary (4) should show 100% of keys with matches and 0% with multiple matches. Click `Done` (5):

<img src="assets/dataaps_fun_4r.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> Sigma lookups are similar (but easier) than VLOOKUP in Excel or INDEX-MATCH in Google Sheets.
</aside>

### Step 16: 
Rename the new lookup column to `Project Name` and move it to the first column (1):

<img src="assets/dataaps_fun_4s.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> Columns created through a lookup appear as "pills" to make them obvious.
</aside>

For more information on lookups in Sigma, see [Add columns through Lookup](https://help.sigmacomputing.com/docs/add-columns-through-lookup)

### Step 17: 
Move the `Task Tracking Input Table` to the `Control Panel` page. 

Now that we have the `Project Name` we can hide the `Project ID` column (2).

Add an additional task record for the same project (1) and sort by `Project Name`:

<img src="assets/dataaps_fun_4s1.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> This demonstrates the "multiple tasks to one project" relationship. This is a very important concept in building AI apps in Sigma. 
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add Status Tracking
Duration: 5

### Step 1: 
On the `Control Panel` page create a new blank input table and connect to the `Sigma Sample Database`.

Rename it to `Status Update Input Table`. 

Create the following columns:

```code
Project ID
Project Status
Status Owner
Status Date
```

Set the type for `Project ID`, `Project Status`, and `Status Owner` to `text`; set `Status Date` to `date` (1).

Add the `Last updated at` and `Last updated by` columns (2), and the `Row ID` column, from the `System columns` menu options.

Rename the `Row ID` column to `Status ID` (3) and move it to the first position. 

Delete any blank rows:

<img src="assets/dataaps_fun_5.png" width="900"/>


### Step 2: 
Add a new modal and change the title to `Update Project Status` (1). 

Add a `List values` control and rename it to `Project Status` (2). 

Set its `Value source` to `Data.Status Type` and `Source column` to `Status` (3).

Leave `Display column` turned off (4) as shown below.

Set the `Control ID` to `ups_project-status` (5):

<img src="assets/dataaps_fun_5a.png" width="900"/>

Rename the modal page to `Modal - Update Status`.

### Step 3: 
With the `Project Status` control selected (1), go to `Format` > `Label` and set `Label position` to `Left` (2) to put the `Project Status` title on the left:

<img src="assets/dataaps_fun_5b.png" width="900"/>

### Step 4: 
On the modal's `Format` options, turn off `Show primary button` and `Show secondary button` under `Footer`.

Add a `Button` and rename it to `Update Project Status` (1):

<img src="assets/dataaps_fun_5c.png" width="600"/>

### Step 5: 
On the `Project Tracker` page and the `Project Tracker Input Table`, add a new column via `Calculation` after the `Add Task` field and rename it to `Update Project Status` with a formula:
```copy-code
"Update Status"
```

Use conditional formatting to give the new column the same red font color as the `Add Task` column. 

Add a new conditional formatting rule for the column (1): set `Apply to` to `Update Project Status` (2), change the `Formatting rule` to `Is not null` (3), and set the font color, as shown in the screenshot below:

<img src="assets/dataaps_fun_5d.png" width="900"/>

### Step 6: 
On the actions panel for `Project Tracker Input Table`, add a new `On select` sequence for the `Update Project Status` column (1). 

Add an action (2) to set the control value of `Project ID` from the `Control Panel`. 

Set the value as `Column` > `Project ID` (3):

<img src="assets/dataaps_fun_5e.png" width="700"/>

### Step 7: 
Add a `Set control value` action for `Project Name` (1), then an `Open modal/drawer` action for `Modal - Update Status` (2):

<img src="assets/dataaps_fun_5e1.png" width="700"/>

### Step 8: 
In the header of the `Modal - Update Status` tab, change the title text to `Project Name:` followed by an `=` sign and set the formula to:
```copy-code
[master-Project-Name]
```
The title (1) takes its value from the formula (2). It reads `N/A` until a project has been selected:

<img src="assets/dataaps_fun_5g.png" width="700"/>

### Step 9: 
Set the action `Insert row` (1) on the `Update Project Status` button. 

Ensure this is inserting a row into the `Status Update Input Table` (2) with `Project ID` which if you recall is located on the `Control Panel` page.  

Notice that two columns are mapped to two formulas, `CurrentUserFullName()` (3) and `Now()` (4), and that the mapping for `Project ID` and `Project Status` are different in the screenshot below:

<img src="assets/dataaps_fun_5h.png" width="900"/>

### Step 10: 
As we have done before, add an action for clearing the `Project Status` control (1) and set the third action to `Navigate in this workbook` (2), with the `Destination` set to `Top of page (Project Tracker)`. 

<img src="assets/dataaps_fun_5i.png" width="700"/>

Saving clicks is always appreciated!

### Step 11: 

Back on the `Project Tracker` page, select `Update Status` for any project and test out the functionality of `Modal - Update Status`. 

After setting a status and clicking the `Update Project Status` button we are returned to the `Control Panel` (1) where we can see the row added with the new status (2):

<img src="assets/dataaps_fun_5j.png" width="900"/>

### Step 12: 
On the `Project Tracker` page > `Project Tracker Input Table`, add a new column via lookup on the `Status Update Input Table` (1), adding `Project Status` (2) based on `Project ID` (3).

<aside class="negative">
<strong>NOTE:</strong><br> Projects having no current status set will make the lookup show less than 100% mapping and that is fine.
</aside>

The match summary (4) shows that not every project has a status yet:

<img src="assets/dataaps_fun_5k.png" width="600"/>

Rename the new column `Project Status` and move the column to just after `Update Project Status` column (1):

<img src="assets/dataaps_fun_5l.png" width="800"/>

### Step 13: 
Now update the project with a second status and see the “multiple values” result under `Project Status` (1): 

<img src="assets/dataaps_fun_5m.png" width="900"/>

This happens when a lookup is `one to many` instead of `one to one` and requires a different approach to enable proper app functionality. 

### Step 14: 
Create a `Child` table off the `Control Panel` > `Status Update Input Table`.

Rename this table to `Status Update - Latest Status Table` (1).

Open the `Status Date` column (2) menu and set `Truncate date` (3) > `Second` (4):

<img src="assets/dataaps_fun_5n.png" width="900"/>

### Step 15: 
Add a new column to the table, set the calculation to be:
```copy-code
lookup(max([Second of Status Date]), [Project ID], [Project ID])
```

The formula appears in the formula bar (1), and the new column (2) shows the latest status date for each project:

<img src="assets/dataaps_fun_5o.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> This formula is doing a recursive lookup to this table — it is getting the latest "Status Update Date" for each project. This operates similar to a window function in SQL.
</aside>

For more information about functions in Sigma, see [Function index](https://help.sigmacomputing.com/docs/function-index)

### Step 16: 
Add a new column named `Latest Update` with calculation:
```copy-code 
[Max of Second of Status Date] = [Second of Status Date] 
```

This will result in a `true` or `false` (1) from the formula in the formula bar (2):

<img src="assets/dataaps_fun_5p.png" width="900"/>

### Step 17: 
`Filter` this `Latest Update` column to only show the `True` status updates: open the filters panel (1), add a filter for `Latest Update` (2), and select `True` (3).

The `Status Update Input Table` operates as the **transaction log**, while the `Latest Status Table` provides just the latest value:

<img src="assets/dataaps_fun_5q.png" width="500"/><br>

We now have only the most recent status for each project (1):

<img src="assets/dataaps_fun_5r.png" width="900"/>

Having both tables for this and other potential analytics can be powerful. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> This is one way to solve the problem and there are others too. Sigma is very flexible and can support a variety of solutions and workflows. 
</aside>

### Step 18: 
Update the lookup on the `Project Tracker Input Table` to now look at the `Latest Status Table` adding `Project Status` based off `Project ID`. Open the menu for the `Project Status` column (1) and select `Edit lookup…` (2):

<img src="assets/dataaps_fun_5s.png" width="900"/><br>

In the `Edit lookup` dialog, select the `Status Update - Latest Status Table` element (1), keep `Project Status` as the column to add (2), and map `Project ID` to `Project ID` (3). The match summary (4) shows how many projects have a status:

<img src="assets/dataaps_fun_5t.png" width="500"/>

Now our table shows the most recent `Project Status` (1):

<img src="assets/dataaps_fun_5u.png" width="900"/>

### Step 19: 
Select the `Status Update - Latest Status Table` and `Status Update Input Table` and place them in a container (1) named `Status Tracking` (2):

<img src="assets/dataaps_fun_5v.png" width="900"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Project Details Modal
Duration: 5

### Step 1: 
On the `Project Tracker Input Table`, create a new `Calculation` column and rename it to `Project Details`.

Set the column's formula to:
```copy-code
"ⓘ"
 ```

This will be used to pop up a modal with project details. The formula (1) gives each row the same icon in the new column (2):

<img src="assets/dataaps_fun_6.png" width="800"/>

### Step 2: 
Create a new `Modal` page and rename it to `Modal - Project Details`. 

Change the modal's title to `Project Details for Project:` and the add the `=` sign.

Using the formula bar, set it to reference:
```copy-code
[master-Project-Name]
```

The title (1) now shows the project name from the formula (2):

<img src="assets/dataaps_fun_6c.png" width="800"/>

### Step 3: 
From the elements bar, in the `UI` group, add a `Text` control with `Project Owner` and type `=[Pr` into the formula bar. 

This will return all the matching items. Select `Project Tracker Stable Table`:

The list will then show all the columns from the selected table. Now we can choose the column we want, `Project Owner`:
```copy-code
[Project Tracker Stable Table/Project Owner]
```

As you type the table name followed by `/` (1), the list shows the columns to choose from (2):

<img src="assets/dataaps_fun_6e.png" width="900"/>

Repeat the process by adding two more lines beneath the first one for:
```copy-code
[Project Tracker Stable Table/Project Status]
```

and

```copy-code
[Project Tracker Stable Table/Project Due Date]
```

We now have:

<img src="assets/dataaps_fun_6a.png" width="700"/>

### Step 4: 
Create another `Child` table of the `Status Update Input Table` on the `Control Panel` page. Then move it to the modal titled `Modal - Project Details`. 

Rename the title of the table to `Details`.

<aside class="negative">
<strong>NOTE:</strong><br> We used the "Status Update Input Table" as the source because it has a row for every status change, including the older ones. 

We want the "Details" modal table to show every status change made for the project. This way, we can derive how long the project stayed in each status. 
</aside>

The `Data source` (1) is the `Status Update Input Table`. Hide `Status ID` and `Project ID` (2) so the table shows the remaining columns (3):

<img src="assets/dataaps_fun_6d.png" width="900"/>

### Step 5:
On the `Control Panel` page, select the `Project ID` control and select `TARGETS` in the element panel. 

`Add filter target` to update the `Project ID` on the `Details` table on the `Modal - Project Details` modal. The `Project ID` control (1) now lists two targets (2), including `Details` (3):

<img src="assets/dataaps_fun_6j.png" width="900"/>

### Step 6: 
With the `Details` table selected on the `Modal - Project Details` tab, go to `Format` > `Table components` (1) and turn off the `Show summary bar` option (2). Modify any other options to style the table (3) to suit: 

<img src="assets/dataaps_fun_6h.png" width="900"/>

### Step 7: 
We also want to include all the related tasks for the selected project.

Repeat the steps used for the `Details` table to add a `Tasks` table:

On the `Control Panel` page, create a `Child table` on the `Task Tracking Input Table` and move it to the `Modal - Project Details`. 

Open the modal by clicking the `ⓘ` or by directly opening the modal page.

Remove the `summary bar`, disable the `Secondary` and `Primary` buttons, and change the table's name to `Tasks`.

Set the `Project Name` control on the `Control Panel` to target the `Tasks` table and the column `Project Name`. The modal should look like this now:

<img src="assets/dataaps_fun_6k.png" width="700"/>

### Step 8: 
The `Project Details` column on the `Project Tracker Input Table` needs an action to open the modal.

On the `Project Tracker` page, select the `Project Tracker Input Table` and go to `Actions`. Add a new `On select` sequence for the `Project Details` column (1).

Add a `Set control value` action (2) for the `Project ID` control on the `Control Panel`, with the value set to `Column` > `Project ID`, then an `Open modal/drawer` action (3) for `Modal - Project Details`:

<img src="assets/dataaps_fun_6k1.png" width="900"/>

Test it by selecting the `ⓘ` in any row. The modal opens with the project's name, owner, status, due date, `Details` and `Tasks`.

### Step 9: 
It may be useful to be able to add tasks for this modal as well.

On the `Modal - Project Details` modal, add a button titled `Add New Task` (1). On the `Actions` tab (2), configure the action to `Open modal/drawer` and select `Modal - Create Task` (3):

<img src="assets/dataaps_fun_6l.png" width="900"/>

To test the workflow, first go to the `Project Tracker` page and select the `ⓘ` in the `Project Details` column of a project. This sets the `Project ID` that the modal depends on, and adding a task will not work without it.

In the modal, click `Add New Task` and add another task to the list. After moving a few elements around, the new task (1) appears in the `Tasks` table:

<img src="assets/dataaps_fun_6m.png" width="900"/>

For completeness, it may be useful to include an `Update Status` button here as well. Since the steps are basically the same, you can do that yourself now.

Configure its action to open the modal `Modal - Update Status`.

That was quick and easy to extend the workflow now that our base app pages and modals are set up.

### Step 10: Adding a Visualization
Going one step further, let's add a `Charts` > `Bar chart` (1) to the `Project Details for Project` modal. In the element panel (2), set the `Data source` to `Tasks`, the `Y-axis` to `Task Owner` and the `X-axis` to `Count of Due Date`:

<img src="assets/dataaps_fun_6o.png" width="900"/>

Sigma's design significantly reduces the time it takes to create a design that suits your needs.

We can apply some styling but we will touch on that in the last section. Styling in Sigma is really easy so it is best to make sure the functionality all works first, and then make it look pleasing to the eye. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> While we have not really been focused on it so far, designing forms for mobile users may be an important design consideration in many use cases. 
</aside>

For more information on how Sigma supports responsive design, see [Responsive design for desktop and mobile layouts](https://help.sigmacomputing.com/docs/create-and-manage-workbook-layouts#responsive-design-for-desktop-and-mobile-layouts)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Approval Workflow
Duration: 5

### Step 1: 
On the `Project Tracker` page, add a `Controls` > `Segmented Control`

Configure the `Values` as
```copy-code
Project Owner View
```
and
```copy-code
Project Reviewer View
```

Remove the label (title) as we have done in the previous steps, under the `Format` > `LABEL` section. 

The segmented control (1) and its settings in the element panel (2) will look like this:

<img src="assets/dataaps_fun_7.png" width="750"/>

### Step 2: 
Add a new `Calculation` column to the `Project Tracker Input Table` called `Reviewer Approval`.

Set the formula to
```copy-code
"Click to Review"
```

The new column (1) needs the same red font as the other action columns. In `Format` > `CONDITIONAL FORMATTING`, add a new rule (2) with `Apply to` set to `Reviewer Approval` (3) and `Formatting rule` set to `Is not null` (4), then set the font color to red:

<img src="assets/dataaps_fun_7a.png" width="600"/>

### Step 3: 
Select the segmented control (1) and open `Actions` (2).

In the `Action sequence` menu (3), add a `Condition` (4):

<img src="assets/dataaps_fun_7b.png" width="800"/>

Set the condition to `Control value is equal to` (1) and select `Project Owner View` (2). The condition (3) now appears on the action sequence:

<img src="assets/dataaps_fun_7c.png" width="800"/>

Add a `Modify element` action (1) targeting the `Project Tracker Input Table`, and configure it (2) to `Hide columns` `From a static selection` with `Reviewer Approval` selected:

<img src="assets/dataaps_fun_7d.png" width="700"/>

Click the `+` next to `ACTION SEQUENCES` to create another sequence. Set its condition to `Project Reviewer View` (1), then add a `Modify element` action (2) with `What to modify` set to `Show columns` `From a static selection`, and `Reviewer Approval` selected (3):

<img src="assets/dataaps_fun_7e.png" width="700"/>

### Step 4: 
On the `Data Validation` page, create a child table off `Data.Status Type` and rename it `Status Type Stable Table`.

Move this table to the `Control Panel`. 

### Step 5: 
On the `Control Panel` page, add a filter for `Status Category` and convert it to a page control (1). 

Configure the `Value source` (2) as the `Status Type Stable Table` and the `Source column` (3) as `Status Category`. Configure the control to only `Show clear button` (4).

Update the `Control ID` (5) to use the pattern we established earlier:

<img src="assets/dataaps_fun_7g.png" width="700"/>

On `TARGETS` (1), make sure the filter target (2) is the `Status Type Stable Table` with `Status Category` as the column:

<img src="assets/dataaps_fun_7j.png" width="750"/>

### Step 6: 
Return to the `Project Tracker` page and select the `Project Tracker Input Table`. 

We already have an action that allows the user to update project status, but let's add another to account for the reviewer.

In `Actions`, find the `On select` sequence for `Update Project Status` (1). Open its three-dot menu (2) and select `Duplicate` (3):

<img src="assets/dataaps_fun_7h1.png" width="500"/>

Reconfigure the duplicate by adding a `Set control value` action (1) before `Open modal/drawer`. It updates the `Status Category` control on the `Control Panel` using `Static values` set to `Standard` (2):

<img src="assets/dataaps_fun_7h.png" width="700"/>

### Step 7: 
On the `Modal - Update Status` modal, select the list control titled `Project Status` (1). 

Switch the `Value source` to the `Status Type Stable Table` from `Control Panel` and the `Source column` to `Status` (2):

<img src="assets/dataaps_fun_7i.png" width="900"/>

### Step 8: 
Go back to the `Project Tracker` page and select the `Project Tracker Input Table`.

Click a cell with `Update Status` to test that only 4 options (1) appear on the modal's list control:

<img src="assets/dataaps_fun_7k.png" width="600"/>

### Step 9: 
On the `Project Tracker` page, click the `Project Reviewer View` button in the segmented control. 

Now select the `Project Tracker Input Table` > `Actions` and duplicate the most recent `Update Project Status` action.

Scroll to the bottom of the actions list to see the duplicate action.

The duplicate runs `On select` for the `Reviewer Approval` column (1). Select its `Set 'Status Category'` action (2) and change the static value to `Reviewer` (3):

<img src="assets/dataaps_fun_7l.png" width="700"/>

<aside class="negative">
<strong>NOTE:</strong><br> If the "Reviewer approval" column target is grayed out (or not present in the list), check the segmented control to ensure the "Project Reviewer View" button is selected.
</aside>

### Step 10:
Select `Click to Review` in any cell and confirm again that the `Modal - Update Status` only shows the values (1) that correspond to the category `Reviewer`.

<img src="assets/dataaps_fun_7m.png" width="600"/>

Test the view comparing `Project Owner` and `Project Reviewer Views` to test conditional actions and how these scenarios direct access, inputs, and functionality. 

### Step 11: 
The input tables are set to `Editable in draft`, so the app cannot accept data entry in the `Published version` yet. 

Open the data entry permission menu (1) on each of the three input tables: `Project Tracker Input Table` on the `Project Tracker` page, and `Task Tracking Input Table` and `Status Update Input Table` on the `Control Panel` page. Change the setting to `Editable in published version (restricted)` (2):

<img src="assets/dataaps_fun_7n1.png" width="600"/>

<aside class="positive">
<strong>TIP:</strong><br> <code>Editable in published version (all access levels)</code> is also available, and makes data entry available to every user with access to the workbook. 
</aside>

### Step 12: 
Hide all pages except the `Project Tracker` page and click `Publish`. 

<aside class="negative">
<strong>NOTE:</strong><br>Modal tabs are hidden automatically when viewing a workbook in `Published version`.
</aside>

Open the `Publish` menu (1) and select `Go to published version` (2) to test the entire app:

<img src="assets/dataaps_fun_7n.png" width="500"/>

The app should look like this now:

<img src="assets/dataaps_fun_7o.png" width="900"/>

### Step 13: Data Lineage
Review the data lineage view to review and confirm all connections and lookups. 

Click the `edit` link next to the workbook's name.

Open the workbook's lineage (1):

<img src="assets/dataaps_fun_7p.png" width="900"/>

When workbooks become large, working with the lineage is a great way to find what you are after, jump right to the desired element and even see the SQL used to create the data for an element too. 

Here is a quick demo:

<img src="assets/lineage.gif"/>

To learn more about workbook data lineage in Sigma see [View workbook data lineage](https://help.sigmacomputing.com/docs/workbook-data-lineage)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Built-in AI
Duration: 5

AI is built into Sigma throughout — not as a separate product or add-on, but as a native capability available where you already work. Whether you're writing formulas, exploring data, or building apps, AI is there to help.

Before we go further, read this section of [Fundamentals 01: Overview](https://quickstarts.sigmacomputing.com/guide/fundamentals_1_getting_around_v3/index.html?index=..%2F..index#4) which provides instructions for configuring AI based on your organizations requirements.

### Sigma Assistant
Once configured, we can simply ask Sigma Assistant natural language questions. Select the Sigma Assistant icon (1) in the workbook header and enter a question (2). For example:

<img src="assets/dataaps_fun_8a.png" width="700"/>

Sigma Assistant will respond, showing the steps it took (1) and providing details along the way (2):

<img src="assets/dataaps_fun_8b.png" width="600"/>

We can do much more with Sigma's AI functionality, but that is enough for now. 

For more information, see [Get started with AI in Sigma](https://help.sigmacomputing.com/docs/getting-started-with-ai)

Also see the other [AI related Quickstarts](https://quickstarts.sigmacomputing.com/?cat=aiapps)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Styling
Duration: 5

### Step 1: 
With the bulk of the app functionality complete, visual design and accessibility is the next step. 

Sigma provides many "out-of-the-box" themes; experiment with them and adjust from there as desired too.

This enables a range of functionality including the ability to toggle between light and dark modes, preset swapping, custom colors that affect elements throughout the workbook (big time saver), fonts, layouts, and additional design settings. With nothing selected, open `Settings` in the element panel and choose a `Theme` (1) from the list of options (2):

<img src="assets/dataaps_fun_8.png" width="900"/>

### Step 2: Containers - Containers - Containers
It is a good practice to package elements in containers in a manner that will be easy for users to access and understand. 

We have also demonstrated the other cool benefit of using containers; they can be targeted by an action!

### Step 3: 
With Sigma, your AI apps can support whatever branding may be required. 

You can customize to match your own branding and style considerations while maintaining accessibility and visual design best practices. 

Images and icons can be added for additional personalization:

<img src="assets/dataaps_fun_done.png" width="800"/>

Here are some examples of styled AI apps in Sigma:

<img src="assets/containers.gif" />

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

We built a complete project tracking app in Sigma, with data entry, status tracking, task management, an approval workflow and Sigma Assistant, all without writing code.

The core pattern is simple: input tables hold what people enter, controls and actions carry the logic, and modals present each task. The `Control Panel` page, with its master controls and stable tables, keeps the pages and modals coordinated as the app grows.

The approval workflow showed how a single segmented control with conditional actions gives different users a different view of the same workbook. The same approach fits any process where roles need to see different columns or choices.

A theme styles the whole app at once, and Sigma Assistant lets anyone ask questions of the same data. Once input tables, lookups and actions are connected, new workflows are mostly a matter of reusing these pieces.

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
