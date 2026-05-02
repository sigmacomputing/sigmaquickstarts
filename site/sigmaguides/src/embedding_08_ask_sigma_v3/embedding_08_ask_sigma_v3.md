author: pballai
id: embedding_08_ask_sigma_v3
summary: embedding_08_ask_sigma_v3
categories: embedding
environments: web
status: published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-05-29

# Embedding 08: Embedding Sigma Assistant

<!-- NOTE:
This QS is Hidden until the Assistant works with embedding. I tested and it does not yet.
 -->

## Overview 
Duration: 5 

This QuickStart guides you through the process of embedding Sigma Assistant—Sigma's AI analyst—into your application. 

You'll learn how to integrate natural language querying capabilities, enabling users to interact with data seamlessly within your product environment. By the end, you'll have a functional, embedded Sigma Assistant instance, ready to enhance user engagement and data accessibility.

Before proceeding, ensure you've completed the [Embedding 01: Getting Started](https://quickstarts.sigmacomputing.com/guide/embedding_01_getting_started_v3/index.html?index=..%2F..embedding#0)

### What is Sigma Assistant?
Sigma Assistant is Sigma's natural language query interface designed to function like a data analyst. It allows users to pose questions in everyday language and receive guided, transparent analyses. 

Key features include:

**Discovery:**<br> 
Uncover new data sources, related workbooks, and insights beyond the initial query.

**Transparency:**<br>
View each step of the AI's analytical process, including data sources and calculations.

**Control:**<br>
Modify any part of the analysis—change data sources, adjust formulas, or refine prompts.

**A Path Forward:**<br>
Receive suggestions for further exploration, enabling deeper data understanding.

This approach ensures users not only get answers but also comprehend the methodology behind them, fostering trust and enabling informed decision-making.

### Embedding Use Cases
Embedding Sigma Assistant into your application can transform user interactions with data. Potential use cases include the following:

**Customer-Facing Dashboards:**<br> 
Allow clients to query data directly, enhancing transparency and engagement.

**Internal Tools:**<br>
Equip teams with intuitive data exploration capabilities without requiring SQL knowledge.

**Premium Offerings:**<br>
Differentiate your product by offering advanced analytics features as part of a premium package.

By integrating Sigma Assistant, you provide users with a powerful tool to derive insights, fostering a data-driven culture within your application.

### Benefits
Embedding Sigma Assistant offers several advantages:

**Enhanced User Experience:**<br>
Users interact with data conversationally, helping to reduce the learning curve.

**Increased Engagement:**<br>
Interactive analytics encourage deeper data exploration.

**Operational Efficiency:**<br>
Reduces reliance on data teams by empowering users to find answers independently.

**Scalability:**<br>
As your user base grows, embedded analytics will scale without significant additional resources.

These benefits collectively contribute to a more dynamic, user-centric application, positioning your product as a leader in data accessibility and innovation.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. Sigma continuously adds and enhances functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn’t work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Semi-technical users who will be aiding in the planning or implementation of Sigma with embedding. No SQL or technical data skills are needed to complete this QuickStart. It assumes some basic computer skills, such as installing software, using Terminal, navigating folders and copy/paste operations

### Prerequisites

<ul>
  <li>Any modern browser is acceptable.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown, as the basics are assumed to be understood.</li>
  <li>An AI provider (discussed in a later section)</li>
  <li>Embedding 01: Getting Started is required to complete this QuickStart.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry a “Beta” tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>
 
![Footer](assets/sigma_footer.png)

## Enabling Sigma Assistant
Duration: 5

Before anyone can use Sigma Assistant, two configuration steps are required: configuring a data warehouse hosted model as the AI provider, and enabling source permissions on the `Assistant` tab.

### Step 1: Configure a data warehouse hosted model

Log in to Sigma as `Administrator` and navigate to `Administration` > `AI settings`.

Under `Model provider`, select `Data warehouse hosted model` and choose the connection to your Snowflake or Databricks warehouse.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Using a warehouse hosted model keeps data within your own infrastructure — no data is sent to a third-party AI provider. This is the recommended approach for organizations with sensitive data.
</aside>

<img src="./assets/as_1.png" width="800"/>

Save the configuration. Sigma will use this connection to process all Sigma Assistant requests.

For the full list of supported providers and configuration options, see [Configure an AI provider](https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization#configure-an-ai-provider).

### Step 2: Enable source permissions on the Assistant tab

With the model provider configured, you now need to specify which data sources Sigma Assistant is allowed to query.

On the `AI settings` page, select the `Assistant` tab. Locate the `Sigma Assistant data sources` section and add the connections, schemas, or tables you want to make available.

<img src="./assets/as_2.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Embed users must also have permission in Sigma to access any sources enabled here. Grant connection-level access through `Administration` > `Connections`.
</aside>

For example, we need to share the `CUSTOMER` table with the `Sales_People` team:

<img src="./assets/as_2a.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Project Configuration
Duration: 5

We’ll move through this quickly, assuming you’ve done similar configurations before in the `Getting Started QuickStart`.

In VSCode > Terminal, start the local web server in the `embedding_qs_series_2` project folder:
```copy-code
npm start
```

In a browser, open:
```copy-code
http://localhost:3000/assistant/?mode=assistant
```

The page loads, but the message `Failed to load Sigma embed. Check console for details` is shown. This happens because we haven’t passed the required values yet.

### Edit .env file
In VSCode, open the project’s `.env` file and scroll to the `# Embedding 08: Embedding Sigma Assistant`.

We configured a few values for you but you will need to provide your `{org-slug}`, which is the part of the URL directly following `https://app.sigmacomputing.com/` in the browser:

<img src="./assets/as_8.png" width="800"/>

For example, in the URL `https://app.sigmacomputing.com/my_company_name/`, the org-slug is `my_company_name`.

Once .env is updated, save your changes.

Refresh the browser page, and Sigma Assistant should appear:

<img src="./assets/as_9.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Our Unique Approach
Duration: 5

AI is a powerful tool, but how it’s implemented makes a huge difference to users. 

Allowing users to ask questions is one thing but how can we tell what the AI is doing? 

- Is it using trusted data sources? 
- What steps, calculations, and workflows did it use to generate results? 
- Once we have the response, what’s next for the user?

We have addressed all these and more with our unique design, summarized below in three sections:

**1: Discovery**<br>
Ensure corporate governance by restricting source data used for analysis and preventing exposing data to third-parties.

**2: Trust**<br>
Ensure that only verified, trusted data sources are used. Decisions made from bad data are time-consuming and potentially costly too.

**3: Exploration**

Allow users to launch selected results into a workbook for further analysis or sharing.

### A quick test
Let's ask a simple question, since we have one table to work with: `CUSTOMERS`:
```copy-code
How many customers are there per market segment?
```

As the processing starts, we can see the first thing the AI decided was to use the `CUSTOMER` table (obviously!) but Sigma also displays the decision logic in `Analysis breakdown?`, shedding light on the choices the AI is making.

It also lets us peak at the SQL used to obtain the data:

<img src="./assets/as_12.png" width="800"/>

Then it provides a bar chart and some detail on the findings. We can `Explore` the response in a Sigma workbook:

<img src="./assets/as_12a.png" width="700"/>

Becuase we are a `Build` user, we have access to all of the other tools Sigma provides.

The functionality available to the user is determined by their `Account type` setting. This enables different user experiences and allows embedded customers to offer premium services:

<img src="./assets/as_12b.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we explored how to embed Sigma Assistant into an application and configure it for secure, governed use. 

Sigma Assistant can deliver conversational analytics in a secure, customizable, and highly intuitive way — ready to enhance any embedded experience.

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
