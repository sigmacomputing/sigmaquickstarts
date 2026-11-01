author: pballai
id: events-hol_getting_started_with_sigma_and_motherduck
summary: events-hol_getting_started_with_sigma_and_motherduck
categories: eventhols
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Default
lastUpdated: 2026-11-01

# Getting Started with Sigma and MotherDuck

## Overview
Duration: 5

Sigma connects directly to your cloud data warehouse and pushes every query down to it, so the people closest to the business can explore live data without extracts or copies. MotherDuck brings that same model to DuckDB in the cloud, and Sigma extends it with a spreadsheet-like interface, governed data models, and AI that works from the data you already trust.

This QuickStart demonstrates how we will connect a new MotherDuck account to Sigma, model sample sales data, build a workbook with charts and an action sequence, add an agent, and then ask questions of the same data from the Sigma homepage and from Claude.

Along the way you'll learn how to:
- Create free Sigma and MotherDuck trial accounts
- Load sample data into MotherDuck and create a read-only token for Sigma
- Connect MotherDuck to Sigma
- Create a data model and build a workbook with charts and controls
- Add an action sequence and an agent to the workbook
- Ask questions of your data model from the Sigma homepage and from Claude

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
The typical audience for this QuickStart includes users of Excel, common Business Intelligence or Reporting tools, and semi-technical users who want to try out or learn Sigma with MotherDuck.

### Prerequisites

<ul>
  <li>Any modern browser is acceptable.</li>
  <li>A Sigma trial account with Admin access.</li>
  <li>A MotherDuck account (a free trial is sufficient).</li>
  <li>A Claude account, for the final section.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
<button>[MotherDuck Free Trial](https://motherduck.com/)</button>

![Footer](assets/sigma_footer.png)

## Prepare Your Sigma Account
Duration: 5

Sigma is fully managed software-as-a-service, so there is nothing to install. A trial gives you an Admin account where we can create the connection, the data model, and the workbook.

If you do not already have a Sigma account, register for a [Sigma free trial](https://www.sigmacomputing.com/free-trial/) and follow the prompts to create your organization and profile.

<!-- <img src="assets/md_01.png" width="600"/> -->

After activation, bookmark your Sigma URL for easy access.

Our data will come from MotherDuck.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Prepare Your MotherDuck Account
Duration: 15

### Sign up
If you do not already have a MotherDuck account, register for a free trial at [motherduck.com](https://motherduck.com/) and complete the account setup.

<img src="assets/md_02.png" width="600"/>

Once the trial is set up, log into MotherDuck.

<img src="assets/md_02a.png" width="900"/>

### Load the sample data
We will create a small retail dataset directly in MotherDuck using SQL. It has three tables: `products`, `customers`, and `orders`.

In the MotherDuck UI, open a new notebook.

<img src="assets/md_02b.png" width="600"/>

Run the following:

```copy-code
CREATE DATABASE IF NOT EXISTS sigma_qs;
USE sigma_qs;

CREATE OR REPLACE TABLE products AS
SELECT * FROM (VALUES
  (1, 'Laptop Pro 15',      'Computers',   1450.00, 1000.00),
  (2, 'Laptop Air 13',      'Computers',   1100.00,  760.00),
  (3, 'Desktop Tower',      'Computers',    950.00,  700.00),
  (4, 'Wireless Headphones','Audio',         220.00,  110.00),
  (5, 'Bluetooth Speaker',  'Audio',         140.00,   70.00),
  (6, '4K Monitor',         'Displays',      480.00,  310.00)
) AS t(product_id, product_name, category, unit_price, unit_cost);

CREATE OR REPLACE TABLE customers AS
SELECT
  i AS customer_id,
  'Customer ' || i AS customer_name,
  ['CA','NY','TX','WA','IL','FL','MA','CO'][1 + (i % 8)] AS state,
  ['Consumer','Business'][1 + (i % 2)] AS segment
FROM range(1, 501) AS t(i);

CREATE OR REPLACE TABLE orders AS
SELECT
  i AS order_id,
  1 + (hash(i) % 500)::INT AS customer_id,
  1 + (hash(i * 7) % 6)::INT AS product_id,
  1 + (hash(i * 13) % 4)::INT AS quantity,
  DATE '2030-01-01' + (hash(i * 17) % 365)::INT AS order_date
FROM range(1, 5001) AS t(i);
```

You should see `5000` rows.

<img src="assets/md_03.png" width="900"/>

### Create a Read Scaling token
Sigma connects to MotherDuck with a read-only Read Scaling token.

In MotherDuck, click your organization name > `Settings`. In the left menu under `INTEGRATIONS`, select `Access Tokens`.

<img src="assets/md_04.png" width="500"/>

Scroll down to `Integrations` and click the `+ Create token` button.

<img src="assets/md_04a.png" width="800"/>

Set `Name` to `Sigma`. The `Description` is optional.

The `Token type` defaults to `Read/Write Token`. Open the dropdown and change it to `Read Scaling Token`, since Sigma queries MotherDuck read-only.

<img src="assets/md_04b.png" width="500"/>

Leave `Automatically expire this token` off for this QuickStart, then click `Create token`. Copy the token and store it somewhere safe.

<img src="assets/md_04c.png" width="500"/>

### Find your Postgres endpoint
Sigma connects through the MotherDuck Postgres endpoint. In the same `INTEGRATIONS` menu, select `Postgres Endpoint` and copy the host name (for example, `pg.us-east-1-aws.motherduck.com`) and the user name.

<img src="assets/md_05.png" width="900"/>

<aside class="negative">
<strong>NOTE:</strong><br> Sigma queries MotherDuck read-only. The tables we created above are used for exploring and visualizing, and are not modified by anything we do in Sigma.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Getting Around in Sigma
Duration: 6

Open your Sigma URL and sign in. The home page is organized for quick access to the main functions, which are numbered and described below:

<img src="assets/md_06.png" width="900"/>

<img src="_shared_assets/1.png" width="30"/> **Sigma logo:** Click the Sigma logo in the upper left corner to return to the home page from anywhere in Sigma.

<img src="_shared_assets/2.png" width="30"/> **Search:** Search for content within Sigma.

<img src="_shared_assets/3.png" width="30"/> **Create New:** Use this anytime you want to create new content.

<ul>
   <li><strong>Workbook:</strong> our spreadsheet-like UI for exploring, analyzing, and visualizing data</li>
   <li><strong>Report:</strong> design and schedule pixel perfect reports</li>
   <li><strong>Data model:</strong> define shared tables and metrics that workbook builders start from</li>
   <li><strong>SQL query:</strong> query your connected data source directly using SQL</li>
   <li><strong>CSV upload:</strong> add a file from your computer</li>
</ul>

<img src="_shared_assets/4.png" width="30"/> **Chat:** Ask questions of your data in plain language using Sigma Assistant.

<img src="_shared_assets/5.png" width="30"/> **Your documents:**

<ul>
   <li><strong>Your documents:</strong> a personal folder for content you have created.</li>
   <li><strong>Workspaces:</strong> organize and share content with specific members or teams.</li>
   <li><strong>Templates:</strong> standardize and share workbook structures for quick, consistent reuse.</li>
   <li><strong>Shared with you:</strong> items others have shared directly with you.</li>
   <li><strong>Recent</strong> and <strong>Favorites:</strong> quick access to items you use most.</li>
   <li><strong>Trash:</strong> the typical recycle bin functionality.</li>
</ul>

<img src="_shared_assets/6.png" width="30"/> **Connections:** Lists the data sources available to you in the left menu (trials include the Sigma Sample Catalog and Sigma Sample Database). Selecting one shows the tables you can access. Our MotherDuck connection will appear here once we create it in the next section.

<img src="_shared_assets/7.png" width="30"/> **User Profile:** Your initials in the top right open your preferences and sign out.

<img src="_shared_assets/8.png" width="30"/> **Help:** The `?` icon in the bottom right opens Live chat, Documentation, tutorials, training videos, and What's new. Sigma is fanatical about supporting our customers, so use it.

<img src="_shared_assets/9.png" width="30"/> **Administration:** At the bottom of the left menu, this is where connections, users, and account types are managed. It is only shown to users with administrative permissions.

The landing page cards give quick starting points: `Analyze` your live data with a workbook, `Build apps` with workflows that write back to your data warehouse, `Create agents` powered by live data, and `Admin` for row and column level security.

If you want to see what is new in Sigma, check the [Release Notes](https://help.sigmacomputing.com/changelog) or the monthly [First Friday Features](https://quickstarts.sigmacomputing.com/firstfridayfeatures/) summary.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connect MotherDuck to Sigma
Duration: 8

Creating a connection requires an `Admin` account type, or an account type with the `Manage connections` permission enabled. Your trial account was created with your user as an administrator already.

Click your user profile icon in the top right corner of the page and select `Administration`.

<img src="assets/md_07.png" width="600"/>

Select `Connections` and then `Create Connection`.

<img src="assets/md_07a.png" width="900"/>

Under `Connection Details`, set:
- Name: `MotherDuck QuickStart`
- Type: `MotherDuck`

Under `Connection credentials`, enter:
- Host: `{your-postgres-endpoint-host}`
- Port: `5432`
- User: `{your-postgres-endpoint-user}`
- Token: `{your-read-scaling-token}`

<img src="assets/md_08.png" width="600"/>

Under `Connection features`, leave the `Connection timeout` at the default and turn `Use friendly names` on so column names are more readable.

<img src="assets/md_08a.png" width="600"/>

Click `Create`.

<img src="assets/md_09.png" width="800"/>

Next, we grant users access to the connection. Click `Browse Connection`, then `Add permission`.

The `Grant access to MotherDuck QuickStart` dialog opens. You can add your own account and set the `Access` level to `Can use`. To give others access, click `Search for members or teams` and select them.

For each member or team, open the `Access` dropdown and choose one of:
- `Can use`
- `Can use & annotate`
- `Can admin`
- `Can write only`

Choose `Can use` for everyone in this QuickStart. Because Sigma reads from MotherDuck without writing to it, `Can write only` does not apply here.

Leave `Send an email notification` unchecked, and click `Save`.

<img src="assets/md_10.png" width="900"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Users can only see the connection and its tables after access is granted. If a colleague cannot find the MotherDuck data later, check this step first.
</aside>

For more information, see [Data access overview](https://help.sigmacomputing.com/docs/data-permissions-overview)

Open the connection and confirm the `sigma_qs` database and its `products`, `customers`, and `orders` tables are visible.

<img src="assets/md_11.png" width="900"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Sigma queries MotherDuck live and pushes all computation down to it, so the data stays in your warehouse and every user sees current numbers, with permissions controlled at a single point.
</aside>

For the latest information on the MotherDuck connection in Sigma, see [Connect to MotherDuck](https://help.sigmacomputing.com/docs/connect-to-motherduck)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Create a Data Model
Duration: 10

### Use case
You are a data analyst at a retailer that sells computers, audio, and display products. The sales team wants to do ad-hoc analysis of orders and work from trusted calculations, such as `Revenue` and `Profit`, without redefining them in every analysis.

A data model lets us define that once and share it.

### Create the base table
From the Sigma homepage, click `Create new` > `Data model`.

<img src="assets/md_12.png" width="450"/>

From the `Element bar`, add a `Table` element.

<img src="assets/md_13.png" width="800"/>

In `Select source`, search for and select the `orders` table, in the `MotherDuck QuickStart` connection, `sigma_qs` database.

<img src="assets/md_13a.png" width="450"/>

Rename the table to `Orders`.

### Join the other tables
Since the sales team will always need customer and product details alongside each order, we can join those tables directly into the base table.

From `Orders`, select `Element source` > `Join` from the table menu:

<img src="assets/md_14b.png" width="800"/>

Search for the `customers` table (in the `MotherDuck QuickStart` connection, `sigma_qs` database), and accept all columns.

<img src="assets/md_14c.png" width="800"/>

Set the `Join keys` to `Customer Id`.

<img src="assets/md_14e.png" width="800"/>

Click the `+` icon to add another table to the join, select the `products` table, and set the `Join keys` to `Product Id`:

<img src="assets/md_14d.png" width="800"/>

Click `Preview output`. Sigma shows the lineage of the joins and gives us the opportunity to deselect columns we do not need, such as the duplicate `Customer Id` and `Product Id` key columns.

<img src="assets/md_14f.png" width="800"/>

Click `Done`.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Joining once in the data model means workbook builders start from a table that already has the customer and product context they need, with the same join logic every time and no SQL required.
</aside>

### Add calculated columns
`Revenue` and `Profit` use the quantity from `Orders` and the unit price and unit cost from `products`.

Add a new column to `Orders` by clicking the `+` in the column to the right of the last column. Rename it to `Revenue`, and set the formula to:

```copy-code
[Quantity] * [products/Unit Price]
```

<img src="assets/md_15.png" width="800"/>

Add another column, rename it to `Profit`, and set the formula to:

```copy-code
[Revenue] - ([Quantity] * [Unit Cost])
```

<img src="assets/md_15a.png" width="800"/>

### Publish
Rename the data model to `MotherDuck Sales` and click `Publish`.

<img src="assets/md_16.png" width="500"/>

For more information, see [Get started with data modeling](https://help.sigmacomputing.com/docs/get-started-with-data-modeling)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Create a Workbook
Duration: 15

The data model is currently in `Edit` mode. Open the `Publish` menu and select `Go to published`.

<img src="assets/md_17.png" width="500"/>

Click `Explore`. Sigma opens a workbook with the `Orders` table loaded. Because the data comes from a model, the calculations are consistent and trusted.

<img src="assets/md_17a.png" width="800"/>

### Add charts
We are now in an unsaved workbook.

Select the `Orders` table, click `Create child element`, and select `Chart`.

<img src="assets/md_18.png" width="800"/>

Select a `Bar` chart. Add `Category` to the `X-Axis` and `Profit` to the `Y-Axis`. Sigma aggregates the value to `Sum of Profit`.

Rename the chart `Profit by Category`.

<img src="assets/md_18a.png" width="600"/>

### Add a line chart

From the `Element bar` > `Charts` group, add a `Line` chart sourced from `Orders`. 

Drag `Order Date` to the `X-Axis`, change the date aggregation to `Month`.

<img src="assets/md_19.png" width="800"/>

Place `Revenue` on the `Y-Axis`.

Rename the chart `Revenue by Month`.

<img src="assets/md_19a.png" width="800"/>

Add a `KPI` chart sourced from `Orders` showing `Sum of Revenue`.

<img src="assets/md_20.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Arranging and resizing elements in Sigma is easy and intuitive so you can make any design you prefer. Explore the options in the Layout group of the element bar.
</aside>

For more information, see [Intro to layout elements](https://help.sigmacomputing.com/docs/intro-to-layout-elements)

### Add a filter control
From the `Orders` table, open the column menu for `State`, select `Add control`.

In the `Element panel`, configure the control to not `Show null option` and also give it a `Control ID`.

<img src="assets/md_21a.png" width="900"/>

The `Control ID` allows us to target the control programmatically if we want, which enables additional interactivity and workflows.

Because the charts use `Orders` as their source, they automatically react to the `State` filter without any additional configuration.

Select a few states and confirm that every element responds.

Click `Save As` and name the workbook `MotherDuck Sales Analysis`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add an Action Sequence
Duration: 10

Action sequences let workbook users trigger a series of steps from a click on a chart, table, or button. We will use one to turn the `Profit by Category` chart into a drill-down: click a bar and a window opens listing the orders behind it.

<aside class="negative">
<strong>NOTE:</strong><br> Sigma queries MotherDuck read-only, so action sequences that write data back to the connection (such as input tables) are not yet available with this connection type. This sequence navigates and filters, which needs no write access.
</aside>

### Add a category control
Place the workbook in `Edit` mode.

From the `Element bar`, select `Controls` and add a `List values` control. In the `Element panel`, set:
- Source: `Orders`
- Column: `Category`
- Control ID: `category-filter`

Turn off `Show null option` and `Allow multiple selection`.

<img src="assets/md_23.png" width="800"/>

We will leave this control's targets empty for now and set them once the modal exists.

### Add a modal
From the page control at the lower left corner of the page, select `Add modal`.

<img src="assets/md_23a.png" width="500"/>

Rename it to `Category Orders`.

Inside the modal, add a `Table` sourced from `Orders`, and rename it to `Orders in Category`.

Disable `Show close icon` and change the `Show primary button` text to `Close`.

<img src="assets/md_23b.png" width="800"/>

Under `Actions`, we can configure the `Close` button to simply close the modal.

<img src="assets/md_23b1.png" width="600"/>

Return to the `Page 1` page.

Select the `category-filter` control and, in its `Targets`, add only the `Orders in Category` table. Because the charts are not targeted, they keep showing every category.

<img src="assets/md_23c.png" width="800"/>

### Create the action sequence
Select the `Profit by Category` chart. In the `Element panel`, open `Actions` and add a trigger for when a bar is selected.

Add the first action, `Set control value`:
- Control: `category-filter`
- Value: the selected `Category` from the chart

<img src="assets/md_23d.png" width="600"/>

Add a second action, `Open modal`, and select `Category Orders`.

<img src="assets/md_23e.png" width="600"/>

### Test the interaction
Click `Publish` and go to the published version of the workbook. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Modal pages are hidden when the workbook is viewed by users.
</aside>

Click a bar in `Profit by Category`, such as `Audio`. The modal opens with the `Orders in Category` table showing only orders for that category.

Close the modal, click a different bar, and confirm the table updates.

<img src="assets/modal.gif" width="800"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> A chart answers "how much"; the drill-down answers "which orders". Building the click behavior as an action sequence means anyone using the workbook can go from a summary to the underlying rows in one click, with no filters to set and no SQL to write.
</aside>

For more information, see [Intro to actions](https://help.sigmacomputing.com/docs/intro-to-actions)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Leverage AI Features
Duration: 10

Sigma has a built-in [Sigma Assistant](https://help.sigmacomputing.com/docs/sigma-assistant-in-the-workbook) that lets anyone ask questions of their data in plain language, and agents let us shape that experience. We will start with Sigma Assistant in the published workbook, then build an agent and a chat element that limit what data it can use and give it a persona.

### Ask Sigma Assistant a question
Click `Publish` to publish the workbook, then open the published version.

Open Sigma Assistant from the published workbook and ask:

```copy-code
Which product category earns the most profit?
```

<img src="assets/md_24.png" width="900"/>

Sigma Assistant answers using the workbook's data. Compare the answer with the `Profit by Category` chart to confirm the value.

<img src="assets/md_24a.png" width="600"/>

Sigma Assistant is a general-purpose way to ask questions. An agent gives us control over two things it does not: which data it can see, and how it responds. We will set both next.

<aside class="positive">
<strong>NOTE:</strong><br> In trial accounts, Sigma makes the AI provider available through the sample data connection, so there is nothing to configure. In production, customers must provide their own AI provider.
</aside>

### Create the agent
Sigma Assistant is ready to use as soon as you open it. A Sigma agent is something you design, which makes it a good fit when a team needs consistent, purpose-built answers. Building one gives us:
- **A defined data scope:** the agent works only from the data sources we attach, so its answers stay within data we have chosen and governed.
- **A persona and instructions:** we decide the role it plays, how it phrases answers, and what it should do when the data cannot answer a question.
- **A greeting:** a fixed opening message tells users what this agent is for.
- **Reuse:** one agent can power chat elements on any page of the workbook, so everyone using it gets the same behavior.

Click a blank area of the canvas to deselect any element. In the right panel, click the `Agents` tab, then click the `+` button to create a new agent.

<img src="assets/md_25.png" width="900"/>

<aside class="positive">
<strong>NOTE:</strong><br> Agents are created at the workbook level, not the page level. The same agent can power a chat element on any page in this workbook.
</aside>

Click the pencil icon and change the default name from `Agent 1` to:

```copy-code
Sales Analyst
```

### Add the data source
Under `Data sources`, click `Add data source` (`+`) and select the `MotherDuck Sales` data model.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> This list is the agent's governance boundary. Whatever is not added here, the agent cannot see. Because the data source is our data model, the agent answers with the same trusted calculations as everyone else.
</aside>

### Define the persona
Click the `Instructions` tab and enter:

```copy-code
You are Sam, a friendly sales analyst for a retailer that sells computers, audio, and display products. Answer questions using the Orders table: orders, customers, products, quantities, revenue, and profit.

When responding:
- Speak in a clear, upbeat, plain-English style, like a trusted colleague
- Lead with the answer, then add one sentence of context
- Use exact figures from the data, and format revenue and profit as dollars
- If a question can't be answered from the Orders table, say so rather than guessing
```

<aside class="positive">
<strong>NOTE:</strong><br> The first sentence sets the persona and the last bullet sets the boundary. Together they keep the agent speaking as Sam while staying inside the data you gave it.
</aside>

### Set a greeting
Click `Greeting`, enable `Fixed`, then enter:

```copy-code
Hi, I'm Sam. Ask me about orders, revenue, and profit by product, category, customer state, or month.
```

<img src="assets/md_26.png" width="700"/>

Click `Save`. `Sales Analyst` now appears in the `Agents` panel with a data source and instructions attached.

### Add a chat element
A chat element is the interface that puts the agent in front of a user.

Click `+` next to the page tabs to add a new page and rename it to:

```copy-code
Ask Sam
```

On the new page, use the `Element bar` to add `UI` > `Chat`. With the chat element selected, choose `Sales Analyst` as its agent.

<img src="assets/md_27.png" width="800"/>

### Ask a question
Click `Publish`. In the published view, ask:

```copy-code
Which product category earns the most profit?
```

<img src="assets/md_28.png" width="800"/>

This is the same question we asked Sigma Assistant. The value matches, but Sam leads with the answer and adds one sentence of context, in the voice we defined.

<img src="assets/md_28a.png" width="800"/>

Now test the boundary with something the data cannot answer:

```copy-code
Did our last email campaign increase sales?
```

<img src="assets/md_28b.png" width="800"/>

The `Orders` table has no campaign information, so Sam should say it does not have that information instead of guessing. If it answers as though it does, make the last instruction more explicit.

For more information, see [Chat with an agent](https://help.sigmacomputing.com/docs/chat-with-agent)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Ask Questions from the Sigma Homepage
Duration: 5

The workbook and agent are not the only way to reach our data. Because the `MotherDuck Sales` data model is published, anyone with access can ask questions of it directly from the Sigma homepage using Sigma Assistant, without opening a workbook first.

### Start a chat
Click the Sigma logo to return to the homepage, then click `Chat` in the left menu.

### Choose the data model
Select the `MotherDuck Sales` data model as the data source for the conversation.

<img src="assets/md_29.png" width="900"/>

### Ask questions
Ask:

```copy-code
Which states have the highest revenue?
```

<img src="assets/md_30.png" width="900"/>

Then ask a follow-up:

```copy-code
What was total profit by category?
```

<img src="assets/md_31.png" width="900"/>

Click the `Open in workbook` link.

Sigma opens a new workbook with the `Orders` table grouped for us by `Category`.

<img src="assets/md_32.png" width="600"/>

Compare the profit values with the `Profit by Category` chart in the workbook. They match because Sigma Assistant answers from the `Revenue` and `Profit` definitions we published in the data model, not from its own interpretation of the raw tables.

<img src="assets/md_33.png" width="900"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> A published data model gives everyone, including people who never open a workbook, one trusted definition of each metric. Questions asked from the homepage are answered with the same calculations as the dashboards, and still respect each user's data access.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Use Sigma from Claude
Duration: 10

The Sigma connector for Claude lets you ask questions of your Sigma content and data models from Claude, with Sigma's permissions and governance still applied to every answer. It authenticates with OAuth, so no additional credentials or API keys are needed.

### Enable the data source
Before Claude can query our data, the data source must be enabled in Sigma's AI settings. This is a one-time step for a Sigma administrator.

In Sigma, navigate to `Administration` > `AI settings` and select the `Assistant` tab. 

<img src="assets/md_34.png" width="900"/>

Click `Add source`, search for `MotherDuck Sales`, select the data model, and click `Add`.

<img src="assets/md_35.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Only data sources that have been added here are available for the connector to query. If Claude reports that it cannot find or access the data, check this setting first.
</aside>

### Get the connection details from Sigma
We need two values from Sigma to give to Claude. Copy both to a text file.

**1.** MCP URL: click your profile icon in the upper right corner and select `Profile`. Select `Integrations`, then under `Connect Sigma to AI tools`, click the copy icon next to the `Sigma MCP URL`.

<img src="assets/md_36.png" width="900"/>

**2.** Organization name: this is part of the URL Sigma uses in your browser.

<img src="assets/md_37.png" width="900"/>

### Add the Sigma connector to Claude
Log into the Claude desktop app if you have it installed, or use your browser.

**1.** Click `Customize` from the left sidebar, select `Connectors`, click `+`, and select `Browse connectors`.

<img src="assets/md_38.png" width="900"/>

**2.** Search for `Sigma` and click to select it.

<img src="assets/md_38a.png" width="700"/>

**3.** Click the `Connect to Claude` button.

<img src="assets/md_38b.png" width="700"/>

**4.** Paste the `MCP URL` copied from Sigma and click `Continue`.

<img src="assets/md_38c.png" width="700"/>

**5.** A browser tab opens where you can log into Claude.

<img src="assets/md_38d.png" width="500"/>

**6.** Enter your Sigma organization name and click `Continue`.

<img src="assets/md_38e.png" width="900"/>

**7.** Provide your Sigma credentials and log in. When Claude prompts you, click `Allow`.

<img src="assets/md_38f.png" width="500"/>

**8.** Review the operations Sigma permits through Claude and `Approve` them. For this QuickStart, `Always allow` for all tools is convenient.

<img src="assets/md_38g.png" width="500"/>

Because the desktop app is installed (in this example), Sigma returns us to it.

<img src="assets/md_38h.png" width="400"/>

<aside class="negative">
<strong>NOTE:</strong><br> You need appropriate Sigma permissions to use the connector: at minimum, <code>View connections</code> on your account type and <code>Can view</code> or <code>Can use</code> access on the data you want to query. Your trial administrator account already has these.
</aside>

Sigma works with several AI providers. For more information, see [Use the Sigma MCP Server](https://help.sigmacomputing.com/docs/use-sigma-mcp-server)

### Configure permissions for Sigma in Claude

Under `Connectors` > `Your connectors` open the Sigma connector.

Permissions are fine-grained but we will `Always allow` the `Read-only tools` group.

<img src="assets/md_40.png" width="800"/>

### Ask Claude about your data
Start a new chat in Claude and ask:

```copy-code
Use Sigma to find the MotherDuck Sales data model and tell me which product category earns the most profit.
```

Claude searches your Sigma organization, finds the data model, queries it, and returns the answer with an explanation of how it got there. Compare the result with the `Profit by Category` chart.

<img src="assets/md_41.png" width="700"/>

Try a follow-up:

```copy-code
Use Sigma to show monthly revenue for the MotherDuck Sales data model and point out the strongest month.
```

<img src="assets/md_42.png" width="700"/>

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The same data model now serves the workbook, Sigma Assistant, and Claude. Each one uses the same trusted definitions of <code>Revenue</code> and <code>Profit</code> and the same Sigma permissions, so answers match no matter where people choose to ask.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

We built a sales analytics experience on live MotherDuck data, from a new trial account to answers delivered in Sigma and in Claude. Sigma queried MotherDuck directly and read-only, so the data stayed in one place and every result reflected its current state.

The data model ties everything together. We defined `Revenue` and `Profit` once, and the workbook, the action sequence, Sigma Assistant, the agent, and Claude all used those same definitions. That keeps an answer consistent no matter who asks the question or where they ask it.

Several of the patterns are reusable beyond this example:
- **Model first, then explore:** joining tables and defining calculations in a data model gives workbook builders a trusted starting point instead of a blank table.
- **Turn charts into starting points:** an action sequence can take someone from a summary to the rows behind it in a single click, with no write access required.
- **Shape what AI can see and say:** an agent limits the data it works from and gives its answers a consistent persona, which suits a team that needs predictable, purpose-built answers.
- **Meet people where they work:** the same published data model answers questions from the Sigma homepage and from Claude, with Sigma's permissions applied each time.

Swap in your own MotherDuck databases and the same steps apply: connect, model, build, and then let people ask questions in whichever way suits them.

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
