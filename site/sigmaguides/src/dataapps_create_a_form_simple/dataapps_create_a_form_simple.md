author: pballai
id: dataapps_create_a_form_simple
summary: dataapps_create_a_form_simple
categories: dataapps
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Default
lastUpdated: 2024-02-06

# Forms: Quick Capture and Analysis with Sigma

## Overview 
Duration: 5 

Sigma’s form-creation feature makes it simple to collect structured data without requiring users to navigate complex spreadsheets. 

With just a few clicks, you can create an empty input table, configure its columns, and generate a shareable form for data entry. 

This allows teams to gather information efficiently while ensuring consistency and accuracy.

<aside class="positive">
<strong>PLEASE READ:</strong><br> Sigma data apps are rapidly evolving, with new features being added regularly. If your Sigma instance does not have the specific feature shown (or if the UI has changed), please contact Sigma support for assistance in accessing the feature.
</aside>

[How to contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Use Case: Capturing Leads at a Tech Conference Booth
When working a booth at a tech conference, every conversation is a potential opportunity. Instead of relying on handwritten notes or scattered documents, we can use Sigma to capture leads in a structured format. 

In this QuickStart, we will:

**1:** Create an input table to store attendee details.<br>
**2:** Generate and share a lead capture form for easy data entry.<br>
**3:** Manually enter one lead to confirm the process.<br>
**4:** Bulk add 50 leads from a CSV file.<br>
**6:** Quickly group, count, and analyze the captured leads.

By the end, we will have demonstrated  a seamless way to collect, manage, and analyze event leads—ensuring no valuable contact is lost.

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

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases.](https://help.sigmacomputing.com/docs/sigma-product-releases)
 
![Footer](assets/sigma_footer.png)

## The Input Table
Duration: 5

Log into Sigma as Administrator and create a `New workbook`:

<img src="assets/da-forms-1.png" width="400"/>

From the `Element bar`, click `Input` and then drag an `Empty` input table onto the page:

<img src="assets/da-forms-2.png" width="600"/>

Click `Select connection` and select the `Sigma Sample Database` from the drop list. Then click `Create`:

<img src="assets/da-forms-3.png" width="400"/>

Rename the input table to `Trade Show Leads`.

Click the `Save as` button and save the workbook as `Trade Show Lead Capture`.

### Input table columns
We need to add some columns to store data from our eventual form responses. 

Rename the first column to `Indusrty`.

We need six more columns, and we could add them using the menus, but there is a faster way.

With the `Industry` column selected, press `Shift D` on the keyboard six times. This wonderful little keyboard shortcut adds six more columns for us. We just need to rename then now:

- Company<br>
- Full Name<br>
- Title<br>
- Email<br>
- Interest Level<br>
- Rep<br>

<img src="assets/da-forms-4.png" width="800"/>

Most of the keyboard shortcuts are shown in-line with each menu item. For example:

<img src="assets/da-forms-5.png" width="350"/>

To see more time-saving keyboard shortcuts, see:

[Keyboard shortcuts: Mac OS](https://help.sigmacomputing.com/docs/keyboard-shortcuts-mac-os)
[Keyboard shortcuts: Microsoft Windows](https://help.sigmacomputing.com/docs/keyboard-shortcuts-microsoft-windows)

### Column data validation
Three of our columns really should be chosen from a list of selections, rather than hand-typed, which is both slow and error-prone. 

Click on the `Interest Level` column and select `Data validation`:

 <img src="assets/da-forms-6.png" width="350"/>

Create a `Manual list` using these values, and click `Save`:

 <img src="assets/da-forms-7.png" width="400"/>

For the `Industry` data validation, we will get the values from an existing data source:

Drag a new `Table` element on the page, from the `Element bar` and click `Select source`.

Navigate to the `Sigma Sample Database` > `Applications` > `SALESFORCE` > `LEAD` table

 <img src="assets/da-forms-8.png" width="400"/>

Using the `Element panel`, delete all the columns except the `Industry` column.

We like to first drag the `Industry` column to the top of the list, then using `Shift and click` to select all the other columns, but that is just a preference:

 <img src="assets/da-forms-9.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> Deleting the columns only removes them from the Sigma table and not the cloud data warehouse. It is more efficient to only include the column needed; it makes things faster and also is less load on the warehouse.
</aside>

Rename the table to `Industry List` and sort it:

 <img src="assets/da-forms-10.png" width="400"/>

There are lots of duplicates, and we can just drag the `Industry` column to the `GROUPINGS`:

 <img src="assets/da-forms-11.png" width="800"/>

Set a filter and examine the contents of the list, after selecting `All` option. We noticed all the way at the bottom there is one called `na`, so we unchecked that. Now we have a clean list of options for our data validation:

 <img src="assets/da-forms-12.png" width="600"/>

Setup `Data validation` for the `Industry` column in the `Trade Show Leads` input table. 

Configure it to use the `Industry List`:

<img src="assets/da-forms-13.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> We could also add data validation for the `Rep` column, but the process is the same, so we will skip it.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Create the Form
Duration: 5

In the past, creating a form was kind of tedious and error prone. We thought there was a better way.

Click on the `CREATE CHILD ELEMENT` icon on the `Trade Show Leads` input table and select `Form`:

<img src="assets/da-forms-1a.png" width="600"/>

Sigma automatically creates a new form that is bound to the `Trade Show Leads` input table.

In fact, if we delete the `Rep` column from the `Trade Show Leads` table, it is automatically removed from the form!

<img src="assets/da-forms-1.gif"/>

### Use pages
Lets organize the page elements to be separate from each other.

First, move the form to a new page:

<img src="assets/da-forms-15.png" width="600"/>

Rename the new page to `Capture`.

Repeat the process for the `Industry List`, naming that new page to `Data`.

Rename `Page 1` to `Lead List`.

Hide the `Data` page:

<img src="assets/da-forms-16.png" width="400"/>

For more information on page visibility, see [Manage workbook page visibility](https://help.sigmacomputing.com/docs/manage-workbook-page-visibility)

On the form, change the title to `Trade Show Lead Capture` and adjust the form size so that all columns are shown:

<img src="assets/da-forms-17.png" width="600"/>

If needed, reorder the column list in the `Element panel` to adjust the form:

<img src="assets/da-forms-18.png" width="600"/>

### Test it out
Our `Trade Show Leads` input table is set to allow us to test in `Draft` mode, so we can test directly while editing:

<img src="assets/da-forms-19.png" width="450"/>

To read more about managing when input tables can be edited, see [Configure data governance options in input tables](https://help.sigmacomputing.com/docs/configure-data-governance-options-in-input-tables)

Enter some data into the form and click `Submit`:

<img src="assets/da-forms-20.png" width="400"/>

Clicking `Submit` cleared the form for us automatically. This is because Sigma automatically created the two actions required to both insert a row into the input table and also clear the form:

<img src="assets/da-forms-21.png" width="600"/>

Over on the `Lead List` page, we can see the new row of data in the `Trade Show List` input table.

<img src="assets/da-forms-22.png" width="800"/>

### Red Hot Leads
We wanted to see what would "fall out" of the data once we had more of it. 

To do this, we added another table to the page, created from a CSV file first.

<button>[Sample Lead CSV Download](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/csv/sample_tradeshow_leads.csv)</button>

We then just copied and pasted all the new rows into the input table manually (yeah-cheating...).

Then we created a `Child table` from the `Trade Show Leads` input table, grouped the data and filtered to show the `Red Hot` leads.

This took all of 5 min. Sigma - made the complex easy!

Now we know which leads to contact first:

<img src="assets/da-forms-24.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we learned how to use Sigma’s form-creation feature to collect structured data without requiring users to navigate complex spreadsheets. 

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
