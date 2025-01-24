author: pballai
id: dataapps_native_sigma_snapshot_workflow
summary: dataapps_native_sigma_snapshot_workflow
categories: dataapps
environments: web
status: published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-10-24

# Native Sigma Snapshot Workflow

## Overview 
Duration: 5 

This QuickStart demonstrates how to use Sigma's native capabilities to build a Budget Variance Analysis (BVA) workflow. 

The focus is on enabling snapshotting functionality entirely within Sigma, contrasting with previous approaches that relied on cloud data warehouse procedures.

**The workflow includes three core components:**
- **Editable Budget Table:** Users can modify budget data interactively through a pivot table, with changes captured via an input table.

- **Snapshot Creation:** A dedicated button allows users to save the current state of the budget as a snapshot, enabling historical comparisons and version control.
    
- **Snapshot Retrieval:** Users can retrieve and update existing snapshots to explore budget adjustments over time.

### Use Case Highlights
- **Streamlined Workflows:** This approach leverages Sigma's input tables, modals, and overlays, eliminating the need for external database procedures.

- **Finance-Focused:** Tailored for finance use cases, such as budget tracking, variance analysis, and historical comparisons.

- **Scalable and Flexible:** By maintaining a ledger of changes and snapshots, this solution scales to support iterative budgeting processes.

- **Adaptable Framework:** While focused on a finance use case, the underpinnings can be easily adapted to any other use case too.

### Key Features and Implementation Steps
**Interactive Budget Editing:**
- The editable budget table is implemented as a pivot table connected to an input table.
- Changes are triggered using modals and ***onSelect*** actions, which insert new rows into the input table to track updates.
- This ledger-style data approach ensures an audit trail for all budget adjustments.

**Snapshot Management:**
- Snapshots are stored as batches, with each snapshot assigned a unique identifier.
- The batch ID increments with each new snapshot, maintaining a clear edit history.
- Users can revert to previous snapshots or explore edits using a dropdown to queue specific snapshots.

**Pre-Pivot and Pivot Table Setup:**
- A pre-pivot table aggregates budget adjustments by hierarchy (function, department, expense) and date.
- Boolean (true/false) columns help determine whether a value is part of the original data, the current batch, or other categories, simplifying the inclusion logic for the final pivot table.
- The pivot table uses Sigma's grouping and aggregation features to display the latest data.

**Snapshot Retrieval and Inclusion:**
- Using Sigma's array and lookup functions, snapshots are dynamically retrieved and applied based on user selection.
- The inCurrentSnapshot column determines if a value belongs to the selected snapshot, ensuring accurate visualization of budget states.

<aside class="positive">
<strong>IMPORTANT:</strong><br> All work will be done in Sigma, with snapshots and related data automatically stored in the cloud data warehouse.
</aside>

### Target Audience
Sigma builders interested in leveraging the advanced capabilities to create fully functioning Data Apps.

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
 
![Footer](assets/sigma_footer.png)

## Sample Data
Duration: 5

We will use two CSV files as a basis for this QuickStart. Click the button below to download the zip file and extract it to a convenient location.

<button>[Download Sample Data](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/csv/editable-snapshot-quickstart-2.zip)</button>
                               
Once extracted, there will be two files:

- Annual Budget Upload - One Time.csv
- Batched Edits Storage.csv

`Batched Edits Storage.csv` will only one row of data and that is expected.

Log into Sigma as Administrator and create a new workbook.

Add a new `CSV Input Table` to the page, select the `Sigma Sample Database` and  drag the `Annual Budget Upload - One Time.csv` file onto the page:

<img src="assets/es-1.png" width="500"/>

In the `Parsing Options`, change the column `Batch Placeholder` to a type of `Text` and click `Save`:

<img src="assets/es-1a.png" width="800"/>

Add a new `Calculation` column to the table and set the formula to:
```code
DateTrunc("year", [Date])
```

Rename the new column to `Year`.

Rename the new input table to `Annual Budget`.

Once that is uploaded, repeat the process for the second CSV file.

Since the CSV had no data, Sigma could not derive the column type for the `Date` column. 

Change the `Date` column to `Type` = `Date` using the Date columns menu.

Also update the `Value` column to `Type` = `Number` and the `Last updated at` to `Type` = `Date`.

Click `Save`.

Add a new `Calculation` column to the table, rename it to `Year` and set the formula to:
```code
DateTrunc("year", [Date])
```

Rename the second input table to `Batch Edits Storage`.

Rename the workbook page `Data` and save the workbook as `Editable Snapshot - QuickStart`

<img src="assets/es-2.png" width="800"/>

### Union sample tables
The result of a union, this next table combines data from the original datasets (e.g., the initial `Annual Budget` upload) and the `Batch Edits Storage` table, which tracks edits and snapshots.

It serves as the foundational dataset that includes both the starting point (original budget) and all subsequent changes.

Unlike the pre-pivot table (which we will create later), this union table captures the entire history of edits, snapshots, and original records.

From the `Element bar` > `Data` group, drag a new `Table` onto the page.

Set the source to user the `Annual Budget` input table.

From the new table, open the `3-dot` menu and select `Element source` > `Union`:

<img src="assets/es-4.png" width="800"/>

Select the `Batch Edits Storage` input table as the source. 
 
Accept all available columns and check the column mapping to be sure it is correct:

<img src="assets/es-5.png" width="600"/>

Rename the union table `Annual Budget + Batch Edits Storage`.

We now have three elements on the `Data` page:

<img src="assets/es-6.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> It does not matter at this point how the tables are ordered or sized. We will rearrange things later.
</aside>

There one column called `Batch Placeholder` and all values are zero. The value of zero means the "original batch" or value.

<img src="assets/es-7.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## Customizations
Duration: 5

We need a few controls, columns, and an input table to determine whether a row belongs to the original dataset, the current snapshot, another category, and so on.

These are crucial for deciding which rows to include in the final pivot table. However, we can't add them all now because they depend on objects that have not yet been created.

Let’s create them step by step.

### Batch ID Control
Before we can add the other columns mentioned earlier, we need to add a few controls that the columns will reference. We will start with the `Batch ID` control.

Add a new `Text input` control, rename it to `Batch ID` and set the `Control ID` to `batch_id`:

<img src="assets/es-20.png" width="800"/>

### InOriginalTable and InCurrentBatch columns
Now we can add a new column to the `Annual Budget + Batch Edits Storage` table.

Add a new column and rename it to `InOriginalTable?`. Set the formula to:
```code
[Batch Placeholder] = "0"
```
<img src="assets/es-21.png" width="600"/>

This formula checks if a row belongs to the original dataset by comparing the value in the Batch Placeholder column to `0`. Rows where this condition is `TRUE` represent the initial state of the data before any edits or snapshots were made. It ensures the original data can be identified and displayed when needed. Later, we will show another way to capture the original state of the data.

Add another new column and rename it to `InCurrentBatch?`. Set the formula to:
```code
[Batch Placeholder] = [batch_id]
```

<img src="assets/es-22.png" width="600"/>

This formula checks if a row belongs to the current snapshot by comparing the value in the `Batch Placeholder` column to the current `batch_id.` Rows where this condition is `TRUE` are part of the snapshot currently selected by the user, allowing the display to reflect the corresponding snapshot data.

<aside class="negative">
<strong>NOTE:</strong><br> Initially, the 'InCurrentBatch?' column will resolve to 'null,' which is expected because the 'Batch ID' control does not contain a value. 
</aside>

### Snapshot input table
Add a new `Empty Input Table`, use the `Sigma Sample Database` and rename it to `Snapshots`.

Rename the first column to `Snapshot Name`.

Add a new `Multi-select` column and save with the default settings:

<img src="assets/es-24.png" width="700"/>

Rename the column to `Batches`.

Add a new `Calculation` column, rename it to `Batches Contain` and set the formula to:
```code
ArrayContains([Batches], [batch_id])
```

This formula checks if the current `batch_id` exists in the `Batches` list for a row. If `TRUE`, it means the row is associated with the current snapshot or batch. This allows for dynamic inclusion of rows that belong to the selected snapshot, ensuring accurate data display based on the user's selection.

Add the standard column for `Last updated at`:

<img src="assets/es-25.png" width="800"/>

Delete any empty rows, if any exist.

### Snapshotting controls
We need two more columns to determine if the row is in the "current snapshot".

This requires two new controls and a new input table to be created so we can reference them in a column formula.

Add a new `Text input` control, rename it to `New Snapshot Name` and set the `Control ID` to `new_snapshot_name`.

Add a new `List values` control, rename it to `Snapshot List` and set the `Control ID` to `snapshot_list`.

Set the `Value source` to `Data - Snapshots` and `Source column` to `Snapshot Name`.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Make sure to uncheck "Allow multiple selection" for the "Snapshot List" control!
</aside>

<img src="assets/es-23.png" width="250"/>

#### Two more columns
Now we can add the last two columns to the `Annual Budget + Batch Edits Storage` table.

Add a new column, rename it to `InCurrentSnapshot?` and set the formula to:
```code
ArrayContains(Lookup([Snapshots/Batches], [snapshot_list], [Snapshots/Snapshot Name]), [Batch Placeholder])
```

This formula checks whether the current `Batch Placeholder` value exists in the list of batches associated with a selected snapshot. 

It works by first using `Lookup` to retrieve the `Batches` list from the `Snapshots` table based on the `snapshot_list` control and the `Snapshot Name` column. 

Then, `ArrayContains` determines if the `Batch Placeholder` is part of that batch list. This ensures the display reflects rows that belong to the snapshot selected by the user.

For the last new column, and and rename it to `IncludeMe?` and set the formula to:
```code
[InOriginalTable?] or [InCurrentBatch?] or [InCurrentSnapshot?]
```

This formula combines logical checks to determine if a row should be included in the final display. It evaluates whether the row belongs to one of three key categories:

  - **InOriginalTable?:** Checks if the row is part of the original dataset (e.g., Batch Placeholder = "0").
  - **InCurrentBatch?:** Checks if the row belongs to the currently active batch (e.g., Batch Placeholder = [batch_id]).
  - **InCurrentSnapshot?:** Checks if the row is included in the currently selected snapshot (using logic like ArrayContains with snapshots).

If any of these conditions are `TRUE`, the row is included in the final display, ensuring the pivot table reflects the appropriate dataset.

We are done adding columns to this table, but we need one more control. 

Add a `List values` control, rename it to `All Batches` and set the `Control ID` to `all_batches`.

We now have the four required columns and all the required controls and input table:

<img src="assets/es-26.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Pre-Pivot table
Duration: 5

We will want to create another table that aggregates data from the original data sources to ensure that all adjustments and snapshots are organized for easy access and visualization.

To accomplish this, we will simply make a duplicate of the `Annual Budget + Batch Edits Storage` table:

<img src="assets/es-40.png" width="800"/>

Rename this duplicate table to `Pre Pivot of Budget Table`.

Group the table as shown below, truncating `Date` to `Quarter`:

<img src="assets/es-10.png" width="800"/>

Duplicate the `Value` column and drag `Value(1)` up to the same group as the other columns.

Once grouped, the `Value(1)` name changes to `Value`. Rename that to `Current Value` and set the formula to:
```code
First([Value])
```

The [First function returns the first result in a column in every row of the first column.](https://help.sigmacomputing.com/docs/first)

<img src="assets/es-8.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Pivot Table
Duration: 5

Add a new `Pivot table` to the top of the page and set the source to the `Pre Pivot: Edit Budget - Main Table`.

Rename it to `Budget`.

Configure the pivot as shown below:

<img src="assets/es-11.png" width="800"/>

Using your mouse, select everything shown below and move them to a new page:

<img src="assets/es-27.png" width="800"/>

Also move over the `Batch Edits Storage` table from the `Data` page to the `New Page`. It will help us see what is happening later when we create snapshots.

Rename the new page `Budget`.

Delete any empty rows in the two input tables that may have been created while clicking around.

After some rearranging (optional), the `Budget` page looks like this:

<img src="assets/es-27a.png" width="800"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## Modal Configuration
Duration: 5

Now that we have the data organized the way we want, we can start to build the interactivity we are really after. 

With the `Budget` pivot selected, open the `Actions` menu on the `Element panel`.

Change the `On select` value to `Sum of Current Value` and click the `+` to add an action to the existing `Action sequence` that opens a new modal:

<img src="assets/es-12.png" width="800"/>

Rename the page tab to `Edit Budget Modal`.

### Modal content
On the `Edit Budget Modal` page, we want to add some controls to both inform the user and provide a control to allow them to edit a budget value.

Rename the modal's title to `Edit the Selected Budget Value`.

We are going to add just a few elements to the modal, and when done, it will look something like this:

<img src="assets/es-13.png" width="400"/>

With just a little experience, building and configuring a modal can be done extremely quickly. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Modals are hidden and only shown when called for by another action. Apart from that, they behave like any other Sigma page, apart from styling restrictions that make sense for pop-up style page sizing.
</aside>

First, we need to place some controls on the page and configure them. 

This modal has five controls, three are text input, one is date, and the other is a number input. 

Each of these controls can be found in the `Element bar` under the `Controls` group. 

For each one, drag the control type needed onto the modal and configure it as follows:

#### 1: Function (edit_function):
Add `text input` control and set the `Control ID` to `edit_function`.

For example, the `Function` control configuration looks like this (after renaming each control to remove the "_edit" from the label):

<img src="assets/es-14.png" width="700"/>

Configuring the other controls is the same or similar, based on the control type.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Pay close attention to the type of control required, the "Data format" and also the "Control ID" values. It is a good practice to use a common naming convention for control id's. In the demonstration, we will prepend the control id with a "edit_" to indicate the control is on the "Edit Budget Modal" page.
</aside>

#### 2: Dept (edit_dept):
Add `text input` control and set the `Control ID` to `edit_dept`.

#### 3: Expense (edit_expense):
Add `text input` control and set the `Control ID` to `edit_expense`.

#### 4: Date (edit_date):
Add `Date` control and set the `Control ID` to `edit_date`.

#### 5: Revised Budget Value (edit_revised_budget_value):
Add `number input` control and set the `Control ID` to `edit_revised_budget_value`.  Also set the format to `Currency`.

Add the `UI` > `Text` element to the page (as shown in the sample rendering earlier) with the following text:
```plaintext
Please provide a new value in the red box below and click save:
```

<aside class="negative">
<strong>NOTE:</strong><br> We won't spend any time on styling, as Sigma is highly flexible, allowing users to design an interface that works best for their organization.
</aside>

To save some actions later, place all these controls in a container. Simply left-click/hold and drag a mouse window around them and click the container icon:

<img src="assets/es-15.png" width="400"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Actions
Duration: 5

Still on the `Edit Budget Modal`, we need to configure what happens when the user clicks either of the modal buttons.

In the `Format` menu, we want to disable `Show close icon` and show the `Primary` and `Secondary` buttons as shown:

<img src="assets/es-16.png" width="240"/>

In the `Actions` menu, we can delete the `On close` action sequence, since we removed the `Show close icon` from the modal.

For both buttons, set a `Close modal` action. 

Before we add the action to `Insert a row` to the `Primary` button, we need to add a few elements to the `Data` page.

### Modal actions
We already configured the `Exit without Saving` button to `Close the modal`. However, it is a good idea to also clear all the values for all the controls on the modal too.

Since all the controls are also in a container, we can just target the container by name to clear:

<img src="assets/es-28.png" width="750"/>

<aside class="negative">
<strong>NOTE:</strong><br> Sigma names containers incrementally and it is best practice to rename them to something easy to identify. This will be important as a data app grows and there are many containers. In this case, we did not rename the container, so it is named "Container 1".
</aside>

For the `Save` button, we want to use an action that will insert a row in the specified input table, with the columns configured to suit our needs. 

Add that action so that it looks like this:

<img src="assets/es-29.png" width="750"/>

Before we can test, we need to also configure the actions on the `Budget` table to pass the values to the modal too.

Return to the `Budget` page and select the `Budget` table.

For example, to pass the value for `Function` for the selected row, we configure a `Set control value` action like this:

<img src="assets/es-30.png" width="500"/>

`Dept` and `Expense` are pretty obvious. 

For `Set Revised Budget Value` use the `Sum of current value` column.

For `Set Date` use the `Quarter of Date` column

We now have six actions, with `Open a modal` in the last position.

<img src="assets/es-31.png" width="300"/>

### Quick test
If we click the value of `500000` (as shown below) in the `Budget` table, our modal should have all the corresponding values populated:

<img src="assets/es-32.png" width="750"/><br>

<img src="assets/es-33.png" width="350"/>

If we alter the value of `Revised Budget Value` in the modal to `100` (for example), and click `Save`,  the new value will appear in the `Budget` table along with a new row in the `Batch Edits Storage` table. 

<img src="assets/es-34.png" width="550"/>

<aside class="negative">
<strong>NOTE:</strong><br> The can be a small amount of latency when the warehouse is undersized. In our case, we are using a x-small so if the new value (100) does not appear right way, simply click the "refresh" icon in the upper right corner of Sigma (the circular icon with arrow points)
</aside>

The value for `Batch` is blank; this is expected as that will be handled when we setup snapshots next.

We can delete the new row(s) from the `Batched Edits Storage` table and the `Budget` table will revert to the old value (500000).

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Snapshot Configuration
Duration: 5

Add a new button to the `Budget` page and set the label to `Take a Snapshot`.

Open it's action menu and add a `Set control value` action configured as shown.

Make sure to set the `Set control selection to` properly:

<img src="assets/es-36.png" width="550"/>

The next action inserts a row into the `Snapshot Input` table with the control values as shown:

<img src="assets/es-37.png" width="650"/>

After that, we add another action to update the `Batch ID` control on the `Data` page, using this formula to derive the correct value:
```code
Text(Max(Int(Number([Batch Edits Storage/Batch]))) + Int(1))
```

<img src="assets/es-38.png" width="750"/>

The last action is to update the `New Snapshot Name` control:

<img src="assets/es-39.png" width="500"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Testing
Duration: 5

Before we do some testing, lets rearrange the elements on the `Budget` page so we can observe the changes as the occur.

Here is what our `Budget` pages is arranged:

<img src="assets/es-40a.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> The column "Batch Placeholder" is filtered to show the highest value batch number for each grouping first. Make sure to set this as shown in the screenshot above.
</aside>

Since there is no data in the `Batch Edits Storage` or `Snapshots` input table, it might be a good idea to snapshot the original data so that we can revert to it if needed.

We can do this in two steps:

Enter the value `1` in the `Batch ID` control and press `Enter`.

Click the value `500000` in the `Budget` table. We will arbitrarily use this cell for this test:

<img src="assets/es-41.png" width="700"/>

Make no changes on the `Edit the Selected Budget Value` and click `Save`.

This will place one row in the `Batch Edits Storage` table, but the data has not changed apart from now having a batch value of `1`:

<img src="assets/es-42.png" width="8000"/>

Now enter the text "Original Data" in the `New Snapshot Name` control and click `Take A Snapshot`:

<img src="assets/es-43.png" width="500"/>

A new row is added to the `Snapshots` table with a `Batches` value of `1`. 

The `Pre Pivot of Budget Table` shows a new row in the grouping with the value of `500000` and a `Batch Placeholder` of `1`. 

The `Budget` table shows the value is still `500000` which is expected as we did not change that value but rather made a snapshot of it as the original value.

Now click on the `Buget` table and the same `500000` as before. This time, change the value using the modal to `500001` and click `Save`:

<img src="assets/es-44.png" width="500"/>

A few things have happened now.

- A new row was created in `Batch Edits Storage` with revised `Value` and incremented `Batch`.

- The `Batch ID` control was incremented to `2`.

- The `Pre Pivot of Budget Table` shows a new row for the grouping, with the new `Value` and `Batch Placeholder, sorted in the correct order.

- The `Budget` table shows the revised value of `500001`:

<img src="assets/es-45.png" width="800"/>

Now change the `New Snapshoot Name` control value to the text `Snap 1` and click `Take a Snapshot`.

The result is a new row in the `Snapshots` table with the new name and `Batches` value of batch numbers 1 and 2:

<img src="assets/es-46.png" width="500"/>

Repeat this process and add two more revisions to the same value, each time incrementing the value by one.

The final result will look like this.

<img src="assets/es-47.png" width="500"/>

***Make a mistake?*** Just delete all the rows from the `Batch Edits Storage` and `Snapshots` input tables and try again. 

### Looking at old snapshots
There are many elements that are not required for the end user to see, now that we have some snapshots.

Lets move these elements back to the `Data` page and hide that page too.

<img src="assets/es-48.png" width="800"/>

Now our `Budget` page looks like an easy-to-use data app!.

Since we already created some snapshots, just choose the one of interest from the `Snapshot List` control:

<img src="assets/es-demo-1.gif">

### Original data - Alternate method
Another way to get to the original data, that does not require snapshotting, is to simply clear the `Snapshot List` control using the `Show clear button`:

<img src="assets/es-50.png" width="800"/>

Clicking the `x` to clear the control will revert the `Budget` table to its original state. 

This is possible because we have a column in the source data called `Batch Placeholder`, with the value `0` assigned to all rows.

Given how flexible Sigma data apps are, there are likely many other ways to accomplish what your specific use case requires.

Snapshotting to the cloud data warehouse, **built entirely with Sigma—how awesome is that!**

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we demonstrate how to use Sigma to create, manage, and retrieve snapshots entirely within Sigma’s interface. Snapshots are automatically stored in the cloud data warehouse, enabling dynamic tracking and reverting of data states with no external dependencies.

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