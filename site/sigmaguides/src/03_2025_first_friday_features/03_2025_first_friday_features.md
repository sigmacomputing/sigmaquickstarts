author: pballai
id: 03_2025_first_friday_features
summary: 03_2025_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2024-03-3

# (03-2025) March

<!--
7 Mar changes: done
14 changes: done
21 changes: done
28 changes: 
 <img src="assets/heart_icon.png" width="25"/>
Publish on 
-->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in March 2025.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases.](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here is [how to contact Sigma support.](https://help.sigmacomputing.com/docs/sigma-support)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## AI
Duration: 20

<aside class="positive">
<strong>IMPORTANT:</strong><br> This section is longer than normal due to the release of Sigma's AI features (BETA) and their impact on how users can use Sigma. We hope you find it useful.
</aside>

### Ask Sigma (BETA) <img src="assets/heart_icon.png" width="25"/>
We’re at a point in time where AI is expected in any modern software product.

Providing AI functionality isn’t especially difficult these days—but making it easy to use and genuinely helpful requires thoughtful design and a deep understanding of how users can benefit from the results.

Incorrect or misleading AI output isn’t just frustrating—it wastes time, and in a business context, it can lead to poor decisions.

Ask Sigma breaks down every step AI took to generate its answer. This lets you double-check results, edit any step of the analysis, and work more confidently with AI.

Here’s a short video for those who don’t yet have an AI API key but want to see the functionality in action.

If the embedded video is tool small on your screen, you can [view the larger version here.](https://www.sigmacomputing.com/product/ask-sigma)

<img src="assets/ai.gif"/>

### Hands on demonstration
If you already have an AI API Key, you can this for yourself now. Otherwise, just follow along.

<aside class="positive"> <strong>From the author:</strong><br> I don’t usually write in the first person, but I’ll make an exception here. I genuinely believe Ask Sigma will start to change the way users work in Sigma—saving tons of time that’s better spent on refining results, not starting from scratch.

Let’s be clear—Ask Sigma is a tool at your disposal. You’re free to use it or not. But it’s worth understanding what I believe is the start of a fundamental shift: the way you think about starting a new project is changing.

Many software vendors like to say “Start with the end in mind.” That sounds good, but having a whiteboard diagram still means you must build everything from scratch—and also figure out how to use some product to build it.

Sure, Sigma is easy to learn and use—but Ask Sigma is even better than that.

Instead of starting with the end-state design, Ask Sigma wants you to start with a problem—framed as a question.

As shown in the video, Ask Sigma will work hard to answer even vague, generic questions like:
"Where are we doing the best?"

That question lacks context, and you can certainly ask clearer questions to receive results that are more aligned with what you're looking for.

But regardless of the query you submit, Ask Sigma provides additional analysis and breakdowns—so you can explore more data and follow your curiosity. You can always edit the AI-generated analysis to better pinpoint what you're after.

The best way to improve Ask Sigma’s performance—and human analysis, too—is to ensure the underlying data is robust and well-organized.

Ask Sigma leverages AI agents that reference metadata (like column and table descriptions), data models, and defined metrics to answer your query.

The more context you provide about your data, the better AI can work with it. So if you’re not getting the results you expect, don’t just tweak the wording of your question. Instead, collaborate with your data team to continuously refine and optimize your assets to drive better outcomes for everyone.

Let’s try it out in the demo below.
</aside> 

<aside class="negative"> <strong>IMPORTANT:</strong><br> Sigma is heavily invested in Ask Sigma—new features and improvements are rolling out all the time! </aside>

### Enable AI
To use AI features in Sigma, you’ll need to provide an API key from your selected AI provider.

Navigate to `Administration` > `AI settings`, select the AI provider and provide a valid `API Key`:

<img src="assets/f1_43.png" width="800"/>

For more information, see [Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)

### Select data sources to make available to Ask Sigma
Now we need to tell Sigma which data sources Ask Sigma can use. Since we are using third-party AI services like OpenAI, we want to be careful about which datasets we allow access to. This process controls that and limits access to data that may be proprietary.

For example, if we want Ask Sigma to have access to the `Sigma Sample Database > RETAIL > PLUGS_ELECTRONICS_HANDS_ON_LAB_DATA` we simply search for it, select the source we want and click `Sync`:

<img src="assets/f1_44.png" width="800"/>

Once the sync is complete, you can filter on `Available` to confirm it’s ready for Ask Sigma:

<img src="assets/f1_44.png" width="800"/>

Here’s where things follow the `Ask` workflow, rather than the `Create New Workbook` workflow.

Click the <img src="assets/crane.png" width="45"/> icon, and then select `Ask Sigma`:

<img src="assets/f1_46.png" width="600"/>

### Ask away
The Ask Sigma interface is simple—but it’s also built to help you target specific data sources.

This time, let’s try a more focused question:

```plaintext
The CEO wants to know the bottom ten stores in the chain.
```

<img src="assets/f1_47.png" width="400"/>

Ask Sigma explains what it's doing at each step and why. You can jump off into a workbook at any point to explore further on your own:

<img src="assets/f1_48.png" width="800"/>

Once the response is ready, you’ll see:
- A full explanation of the result
- Options to adjust calculations
- Multiple charts to choose from for your workbook

Some generated charts may not be helpful—for example, `Store Latitude, Store Longitude, and Store Key` aren’t useful in this case. so we won't select them.

<img src="assets/f1_49.png" width="800"/>

If you're happy with the results, you can open the selected items in a workbook—or keep refining in Ask Sigma.


Once inside a workbook, you can save it, make any changes you like, or use Sigma’s [Explore Anywhere](https://help.sigmacomputing.com/docs/view-underlying-data) feature for deeper analysis:

<img src="assets/f1_50.png" width="500"/><br><br>

<img src="assets/f1_51.png" width="800"/>

It’s clear that Ask Sigma changes the way people will use Sigma—and it’s only getting better. Stay tuned!

### Bonus: AI Formula Assistant (BETA)  <img src="assets/heart_icon.png" width="25"/>
Sigma also includes a Formula Assistant powered by AI. It can:
- Write new formulas
- Correct formula errors
- Explain existing formulas used in workbooks and data models

Let’s say someone in Finance provides a formula they want applied at the group level:
```code
Revenue Efficiency Score= 
Quantity×Price+Cost
(Price−Cost)×Quantity
```

Instead of writing it manually, let the AI Formula Assistant convert it for you:

<img src="assets/f1_52.png" width="800"/>

Once done, you can review the formula, rename the column, and format it to match your needs:

<img src="assets/f1_54.png" width="800"/>

And if you’re not sure what the formula does, just ask the Formula Assistant to explain it:

<img src="assets/f1_55.png" width="800"/>

Now we know: a low Revenue Efficiency Score is bad—and we should dig deeper into what’s bringing it down.

For more information, here are some documentation links:

[Ask natural language queries with Ask Sigma](https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-ask-sigma)

[Embed Ask Sigma (Beta)](https://help.sigmacomputing.com/docs/embed-ask-sigma)

[Configure AI features for your organization](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization)


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Administration
Duration: 20

### Improved management of developer credentials
On the `Developer access` page in the `Administration` portal, the owner of each set of developer credentials is now identified by `email` instead of by `user name. 

As a result, admins can now identify which API token is assigned to each user, even when multiple users share the same username.

<img src="assets/fff_02_2025_7.png" width="800"/>

### License tier updates
Sigma's license model now includes four tiers: View, Act, Analyze, and Build. **This structure applies to all organizations created on or after March 4, 2025.**

<li><strong>My Content:</strong> Some text...
    <ol type="n"> 
      <li><strong>View:</strong> Suitable for report consumers who need access to prepared data and insights with baseline interactions</li>
      <li><strong>Act:</strong> Ideal for collaborative data contributors who actively input and update data.</li>
      <li><strong>Analyze:</strong> Optimized for decision-making data consumers who require more deep-dive capabilities without building workbooks themselves.</li>
      <li><strong>Build:</strong> Designed for data architects, BI analysts, and report builders who model, transform, and analyze data.</li>
    </ol>
  </li>

 <aside class="negative">
<strong>NOTE:</strong><br> The Build license also supports system administrators who can manage organization settings and users.
</aside>

Organizations created prior to this date will continue using Lite, Essential, and Pro license tiers and will be scheduled for a license migration at a later date.

For more information about the new licenses, see [Account type and license overview.](https://help.sigmacomputing.com/docs/account-type-and-license-overview)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Actions
Duration: 20

### Call stored procedures with actions (Beta) <img src="assets/heart_icon.png" width="25"/>
Call stored procedures defined in a Snowflake, BigQuery, or Amazon Redshift connection using an action. 

If the stored procedure returns non-tabular results like a string, number, or Boolean value, you can work with the output as an action variable. 

With this release, you can also grant users and teams access to use existing stored procedures from a specific schema without granting those users access to the entire connection.

For example, if you have an existing stored procedure in your data platform that you use to perform a complex calculation, rather than recreating the logic in a Sigma custom function or formula, you can call the stored procedure and use the output in Sigma.

This feature opens up a whole new world of possibilities. For example, in the QuickStart [](), call call a Snowflake procedure and pass it a few values from Sigma contol elements for processing:

<img src="assets/fff_02_2025_6.png" width="600"/>

For more details, including detailed end-to-end examples, see [Create actions that call stored procedures (Beta).](https://help.sigmacomputing.com/docs/create-actions-that-call-stored-procedures)

### Select tab action (Beta)
With the addition of tabbed containers--**such a cool feature,** you can now create an action to display a specific tab in a tabbed container element. 

Configure these actions based on user actions and optional conditions to customize what your tabbed container displays.

The tabs in a tabbed container can be visible or hidden from the end user. If they are hidden, the `Select tab` action is the only way to display tabs other than the default tab.

For more information, see [Create actions that modify or refresh elements.](https://help.sigmacomputing.com/docs/create-actions-that-modify-or-refresh-elements#select-tab-beta)

### Update row and Delete row actions (Beta)
Use the `Update row` and `Delete row` actions to modify input tables. 

`Update row` allows user interaction to update values in an existing row, while `Delete row` removes an entire row. 

These actions are designed to support form functionality, but can be used in other ways to accommodate different data app use cases.

For more information, see [Create actions that modify input table data.](https://help.sigmacomputing.com/docs/create-actions-that-modify-input-table-data)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->





## API
Duration: 20

### Allowlist IP addresses for API access (GA)
Administrators can now restrict access to the Sigma API by adding `IP addresses` and `IP address ranges` using CIDR notation to an allowlist. 

With an allowlist configured, only users making API requests from allowed IP addresses can make successful requests.

<img src="assets/fff_02_2025_8.png" width="800"/>

For more information, see [Restrict API access by IP address.](https://help.sigmacomputing.com/docs/restrict-api-access-by-ip-address)

### New 2.1 version for some API endpoints
The following endpoints are now available in a v2.1 version. 

The new versions use pagination for the API response by default, allowing you to retrieve large responses in manageable segments.

The following endpoints are updated:
- [List members](https://help.sigmacomputing.com/reference/listmemberspaginated)
- [List teams](https://help.sigmacomputing.com/reference/listteamspaginated)
- [List workspaces](https://help.sigmacomputing.com/reference/listworkspacespaginated)
- [List materialization schedules for a workbook](https://help.sigmacomputing.com/reference/listmaterializationschedulespaginated)
- [List scheduled exports for a workbook](https://help.sigmacomputing.com/reference/listworkbookschedulespaginated)

The equivalent endpoints in v2 continue to work, but might not use pagination by default for all customers.

### New API endpoint to update the schedule for an export
The following endpoint has been added to `update a workbook schedule` for an export.

This endpoint lets you create a file containing data exported from a workbook, allowing you to retrieve large datasets or detailed reports in a structured format. Export the entire workbook, a single workbook page, or an individual element. You can specify parameters to filter the data and format options for the file.

For more information, see [Export data from a workbook](https://help.sigmacomputing.com/reference/exportworkbook) 

### New option for Export data from a workbook endpoint
When exporting an entire workbook or workbook page using the `Export data from a workbook` method, the format parameter now supports the `xlsx` option to support the Excel file format.

For more information, see [Update a workbook schedule](https://help.sigmacomputing.com/reference/updateworkbookschedule) 

### New option for List workbook pages for a workbook and List elements in a workbook endpoints
You can now retrieve pages and elements for a saved view, formerly known as a `bookmark`, using the API.

The [List workbook pages](https://help.sigmacomputing.com/reference/listworkbookpages) for a workbook endpoint and the [List elements in a workbook](https://help.sigmacomputing.com/reference/listworkbookpageelements) endpoint now include the `bookmarkId` query parameter.

### New writebackSchemas options for Create a connection and Update a connection endpoints
When adding a Snowflake or Databricks connection that uses OAuth with the [Create a connection](https://help.sigmacomputing.com/reference/createconnection) endpoint or updating one with the [Update a connection](https://help.sigmacomputing.com/reference/updateconnection) endpoint, you can use the new writebackSchemas option to provide multiple write-back schemas for the connection to use.

Multiple write-back schemas helps keep content created by different teams or users with different permissions in different schemas.

### Request an API token on any endpoint page
When accessing the Sigma public API documentation, you can request an `API token` from any endpoint documentation page, instead of first accessing the `Get access token` documentation page.

The endpoint for retrieving a token and refreshing an existing token is unchanged. This is not a code change to the API itself.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Bug Fixes
Duration: 20

**1:** Actions with conditions based on hidden columns now trigger as expected.

**2:** The Workspaces page no longer displays a `Too many results resolved` error when attempting to load a very large number of workspaces. 

**3:** In secure embeds that use `OAuth` to access data, new embed users no longer need to reload the embed to clear a `no valid refresh token` error. Instead, the embed loads for a newly-created embed user on the first try.

**4:** API endpoints that return information about tagged workbook versions now return an accurate `sourceWorkbookVersion.` Previously, the API returned the highest `sourceWorkbookVersion` even in cases where a lower s`ourceWorkbookVersion` had been tagged more recently.

**5:** Users are no longer signed out of Sigma if they attempt to run a query with `OAuth credentials` that do not exist.

**6:** For connections that use `OAuth`, users can now see and use stored procedures that they have access to.

**5:** Materialization schedules owned by users deactivated after `March 25, 2025` transfer to the administrator performing the deactivation, or if specified, the user chosen to receive the deactivated user's documents. Materialization schedules owned by users deactivated prior to that date fail to run and materialized elements might display an error.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Charts
Duration: 20

### Customize chart and formatting color scales (GA)
Create custom color scales to use when formatting chart colors or conditional formatting for tables. Create a custom color scale for an organization theme, workbook theme, or for a specific data element.

For more information, see [Add a custom color scale.](https://help.sigmacomputing.com/docs/add-a-custom-color-scale)

### Interactive chart legends support map and funnel charts
Map and funnel charts that have a color by category set support the following interactive filtering capabilities in the legend:

- Hover over a legend entry to highlight corresponding data points.
- Click a legend entry label to isolate corresponding data points.
- Select or clear the checkbox of one or more legend entries to show or hide corresponding data points.
- Click anywhere (within the element) outside of the plot area or legend to reset the chart displ

### Legend control element (Beta) <img src="assets/heart_icon.png" width="25"/>
Add the `legend control element` to your workbook to target multiple charts with one legend and align colors across charts. 

The legend control functions as an interactive legend, letting you filter and highlight corresponding data points in targeted charts. Any categories not represented in the list are collected as an extra category, "Others", which can be turned off.

For example, the image below shows one legend control targeting two charts:

<img src="assets/fff_02_2025_2.png" width="800"/>

For more details, see [Create and configure a legend control (Beta)](https://help.sigmacomputing.com/docs/create-and-configure-a-legend-control)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Input Tables
Duration: 20

### Input tables are now supported on Amazon Redshift connections (GA) <img src="assets/heart_icon.png" width="25"/>

Input tables are now compatible with Amazon Redshift connections. These dynamic workbook elements support structured data entry that allows you to integrate new data points into your analysis and augment existing data.

For more information about input tables and how to use them, see the following documentation:

[Intro to input tables](https://help.sigmacomputing.com/docs/intro-to-input-tables)
[Create new input tables](https://help.sigmacomputing.com/docs/create-new-input-tables)
[Edit existing input table columns](https://help.sigmacomputing.com/docs/edit-existing-input-table-columns)

There is also a [QuickStart](https://quickstarts.sigmacomputing.com/guide/input_tables_use_cases/index.html?index=..%2F..index#0) that demonstrates common use case. While this QuickStart uses Snowflake, they will behave the same on Redshift as well. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## New QuickStarts in March
Duration: 20

### Resolving The Fan Trap with Sigma and Snowflake UDF
In this QuickStart, we explore a fan trap use case and one way to solve it in Sigma.

A fan trap occurs when a one-to-many relationship is followed by another one-to-many relationship, leading to potential overcounting of values in queries. 

[Resolving The Fan Trap with Sigma and Snowflake UDF](https://quickstarts.sigmacomputing.com/guide/tables_fan_traps/index.html?index=..%2F..index#0)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks
Duration: 20

### Change the grid density within containers (Beta)
You can now change the `density of the grid` within a container or tabbed container element. 

By default, a container's grid has `twelve` horizontal grid spaces, which expand and contract to fit the container size. 

Using the new `Column density` setting, you can opt to configure a lower or higher density, depending on your layout. 

Higher density gives you a finer grain of control over element positions in large containers.

For more information, see [Change the grid column density of a container (Beta).](https://help.sigmacomputing.com/docs/organize-workbook-layouts-with-containers#change-the-grid-column-density-of-a-container-beta) 

### Conditional formatting retained for XLSX files
When a table, input table, or pivot table with conditional formatting is exported as an XLSX-formatted (Excel) file, the conditional formatting is retained. Conditional formatting includes single color, color scale, and data bar formatting. This makes for reports that are more familiar to users and better-looking too.

### Detach a control from an element
You can now "detach" an element as a target of a control, you can now detach the control from the element from the element's filter menu.

This is handy when adding or remapping controls in the build stage of projects or when changes are required later. 

<img src="assets/fff_02_2025_9.png" width="800"/>

### Keyboard shortcut for cell selection
When you select a single cell in a table, you can add adjacent cells to the selection using the keyboard shortcut `⌘+⇧+arrow` (Mac) or `ctrl+⇧+arrow` (Windows).

### Redesigned user interface for workbooks and data models
The workbook and data model UI has been redesigned to simplify the creation experience in Sigma. The redesign includes the following changes:

- **Streamlined workbook header:** We’ve combined essential actions—such as saving, commenting, and sharing—into one spot. No more clicking around to find what you need.

<img src="assets/fff_02_2025_3.png" width="600"/>

- **New ways to create and edit elements:**
        - An Add new element bar where you can add elements at any time.
        - A simplified editor panel with tabs to access element properties, format, and actions.
        - For an overview of the new workbook UI, see Navigating a workbook (link).

- **Simpler custom views:** Previously known as `Explore`, these views are now easier to create and customize. You can save them, share them, or discard changes and return to the original Workbook anytime.

<img src="assets/fff_02_2025_1.gif" width="800"/>

- **Refined editor panel:** Properties, formatting options, and actions are now neatly organized into tabs, so you can make quick adjustments without feeling lost.

<img src="assets/fff_02_2025_4.png" width="600"/>

- **A new floating element bar:** Insert charts, tables, and other elements on the fly. It’s all about making sure inspiration doesn’t have to wait.

<img src="assets/fff_02_2025_5.png" width="500"/>

Sigma’s redesign sharpens the experience without sacrificing power. A cleaner UI, smarter workflows, and a more intuitive flow mean you can move faster, focus on what matters, and get to insights without distractions. Whether you’re deep into analysis or just getting started, Sigma stays flexible and responsive to your needs. This is just the start—we’ll keep pushing forward to make data exploration even more seamless, powerful, and accessible. 

The new UI has been rolled out for all **new** Sigma organizations, and will continue to be enabled in a multi-stage rollout for all existing organizations.

To learn more about the design ethos behind this change, see [Making Sigma Click: Introducing Our Refreshed Interface.](https://www.sigmacomputing.com/blog/making-sigma-click-introducing-our-refreshed-interface?_gl=1*616xf3*_gcl_au*MTAxNTE2MDYxOC4xNzMzNzY1NDI3*_ga*MjYwNTkzMzY0LjE2NzA0NDY3NTc.*_ga_PMMQG4DCHC*MTc0MTM2MTExMi4xMDYuMS4xNzQxMzYxMTY0LjguMC4w)

### Shared view limitations
Each workbook is now limited to `10 shared views.` If a workbook has version tags, the limit applies per tagged version. 

There is no limit on the number of personal saved views (previously known as personal bookmarks) per workbook.

Organizations with more than existing 10 saved views will be able to keep their existing views, but not be able to make more.

### Tabbed containers (Beta) <img src="assets/heart_icon.png" width="25"/>
Sigma already supported workbook pages that traditional spreadsheet users were familiar with.

Tabbed containers bring that functionality ***inside*** the workbook itself and are a fundamental design element used in data apps.

Add a tabbed container to your workbook pages when you want to offer multiple sets of content in the same section of your workbook canvas. 

A tabbed container has multiple tabs at the top of the container, which can either be visible or hidden for end users. 

By placing content on different tabs and configuring logic about which tab should display, you can allow users to experience different views in the same space without scrolling or navigating elsewhere.

For example:

<img src="assets/tabbed-containers.gif"/>

### Refined header on the Sigma home page
The home page header has been redesigned to match the recently updated workbook and data model UI. 

The change is ***aesthetic and does not impact any functionality.*** 

The new updated homepage header has rolled out for some organizations, and will continue to be incrementally rolled out over the coming weeks.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Additional Information
Duration: 20

**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
