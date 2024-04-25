author: pballai
id: 04_2024_first_friday_features
summary: 04_2024_first_friday_features
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: first_friday_features
lastUpdated: 2024-04-31

<!-- 
04-05 (in previous month)
04-12 done 
04-19 done
04-26

-->

# (04-2024) April
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart lists all the new and public beta features released, as well as bugs fixed in April 2024.

It is summary in nature, and you should refer to the specific Sigma documentation links provided for more information.

**Public beta features will carry the section text "Beta".**

All other features are considered released (**GA** or generally available).

Sigma actually has feature and bug fix releases weekly, and high-priority bug fixes on demand. We felt it was best to keep these QuickStarts to a summary of the previous month for your convenience.

New first Friday features QuickStarts will be published on the first Friday of each month, and will include information for the previous month.

![Footer](assets/sigma_footer.png)

## Administration
Duration: 20

### Cross-org template sharing
Send and accept workbook templates across different Sigma organizations.

With secure cross-org sharing, a receiving organization must choose its own data source to populate the shared template, ensuring no data from the sharing organization is disclosed.

For more information, see [Share and accept cross-org workbook templates.](https://help.sigmacomputing.com/docs/share-and-accept-cross-org-workbook-templates)

### Snowflake key pair authentication and rotation
Create a Snowflake connection using the key pair authentication method, and protect your data with key rotation.

Key pair authentication offers enhanced security through the use of a private key (secured by Sigma) and a public key (shared with Snowflake) for encryption and decryption. By implementing periodic key rotation, you can further protect your data from threats of exposure and compromised keys.

For more information, see Sigma’s [Snowflake Key-pair Authorization QuickStart.](https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation?_gl=1*tpxaou*_ga*MTM0MjUwMjM2Ny4xNzAwMjQxMDE5*_ga_PMMQG4DCHC*MTcxMzU0ODkyNS42NDAuMS4xNzEzNTU2MzUyLjM3LjAuMA..)

![Footer](assets/sigma_footer.png)

## API
Duration: 20

### Scoped API keys
This update provides more control over API privileges to ensure developers are granted relevant feature access.

You are now able to define the scope of an API key to permit access to APIs only, embeds only, or both:

<img src="assets/fff_04_2024_3.png" width="800"/>

For more information about client credentials, see [Generate API client credentials](https://help.sigmacomputing.com/docs/generate-api-client-credentials) and [Generate embed client credentials.](https://help.sigmacomputing.com/docs/generate-embed-client-credentials)

![Footer](assets/sigma_footer.png)

## Bug Fixes
Duration: 20

1: To preserve data integrity, Sigma no longer converts `Yes/No` and `0/1` values to True/False boolean values in CSV uploads.

![Footer](assets/sigma_footer.png)

## Data models (BETA)
Duration: 20

Sigma Data Models represent the next iteration of Datasets and their introduction is a **foundational change that offers significant benefits** over the existing Dataset functionality. We’re investing heavily in Data Models over the coming months and years, with plans to add a whole suite of functionality, coupled with the ease-of-use that you have come to expect from Sigma.

<img src="assets/fff_04_2024_2.png" width="800"/>

This is large topic, and we will be providing a ton of resources for customers to take advantage of, including a new QuickStart. 

For now, we strongly recommend reading this post in [Sigma Community on DataModels.](https://community.sigmacomputing.com/t/data-model-faqs/3481)

There is also some documentation (with more to come) [here.](https://help.sigmacomputing.com/docs/intro-to-data-models)

![Footer](assets/sigma_footer.png)

## Embedding
Duration: 20

### Embed API Code Samples (signing packages)
Sigma has previously provided code samples based on node.js and Javascript. 

Now you can see sample code for additional languages, for signing embed URLs to reduce time to deploy embedded applications.

For sample code in Go, Python, Ruby, and JavaScript, see the [Embed Signing Packages Github repository.](https://github.com/sigmacomputing/embed-signing-packages)

![Footer](assets/sigma_footer.png)

## Functions
Duration: 20

### Advanced calculation options for metrics
Quickly convert metrics to cumulative aggregates (grand total) or relative aggregates (percent of total) in tables, pivot tables, and visualizations. 

Open the relevant metric column menu, then hover over `Advanced calculations` and select an option to show the `grand total` or `percent of total`. 

Available percentage breakdowns (by grand total, x-axis, row, column, etc.) depend on the element type.

For example:

<img src="assets/fff_04_2024_1.png" width="800"/>

![Footer](assets/sigma_footer.png)

## Visualizations
Duration: 20

### Interactive chart legends
Interact with chart legend entries to quickly focus on specific data subsets. 

Charts containing legends that represent qualitative segments (like categories or series) support the following interactive filtering capabilities:

<ul>
      <li><strong> Hover over a legend entry to highlight corresponding data points.</strong></li>
      <li><strong> Click a legend entry label to isolate corresponding data points.</strong></li>
      <li><strong> Select or clear the checkbox of one or more legend entries to show or hide corresponding data points.</strong></li>
      <li><strong> Click anywhere (within the element) outside of the plot area or legend to reset the chart display.</strong></li>
</ul>

<aside class="negative">
<strong>NOTE:</strong><br> Changes resulting from chart legend interactions persist when you switch between workbook modes; however, they don’t persist across user sessions and aren’t saved when the workbook is published.
</aside>

<img src="assets/interactive-chart.gif" width="800"/>

![Footer](assets/sigma_footer.png)

## Workbooks
Duration: 20

### Actions
Sigma's "Actions" feature offers several capabilities to enhance dashboard interactivity:

 <ul>
      <li><strong>Navigational Actions:</strong>  Users can configure dashboard elements to act as links, enabling navigation to specific destinations based on the displayed data, which facilitates seamless integration with other tools or detailed reports.</li>
      <li><strong>Control Management:</strong> These actions allow users to dynamically manage control values such as filters and parameters directly from the dashboard, enhancing user interaction and data exploration flexibility.</li>
      <li><strong>Element Modification:</strong> Users can set actions to modify or refresh dashboard elements in real-time, ensuring data visualizations are always current and relevant.</li>
      <li><strong>Download and Export:</strong> This feature enables the automatic downloading and exporting of data or reports directly from the dashboard, streamlining data handling and reporting processes.</li>
</ul>

Each of these functionalities adds significant value by making dashboards more interactive, user-friendly, and efficient in handling complex data workflows.

An ***simple example*** of this can be found in the free Sigma Loan Analysis template. In this example, there are three action buttons on the page and the "Performance" button has a click-action that will take the user to a specific workbook page. 

<img src="assets/actions.png" width="800"/>


For more information, see [Intro to Actions](https://help.sigmacomputing.com/docs/intro-to-actions)


![Footer](assets/sigma_footer.png)

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