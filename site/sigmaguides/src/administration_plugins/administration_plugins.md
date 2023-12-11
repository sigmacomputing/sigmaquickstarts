author: pballai
id: administration_plugins
summary: administration_plugins
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-12-9

# Extend Sigma with Plugins

## Overview 
Duration: 5 

This QuickStart is designed to help both the experienced developer as well as those who never worked with open source charting libraries. Feel free to skip sections that do not apply to you.

In either case we assume you have some experience with software development, even if only a little. 

<aside class="negative">
<strong>NOTE:</strong><br> Not every step will be shown in detail although we will make it as simple as possible so that you can build an working example.
</aside>

We will make use of the two popular, open source charting libraries; [D3.js](https://d3js.org/) and [Highcharts.js](https://www.highcharts.com/)

<aside class="positive">
<strong>IMPORTANT:</strong><br> The information provided here is meant to demonstrate the basic techniques to creating and deploying a Sigma plugin. The actual development of any plugin is solely the customer's responsibility.
</aside>


### Target Audience
Programmers who want to enhance Sigma's functionality using third-party plugins.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>A development environment (or RTE) of your choice. In this QuickStart we use Microsoft VSCode with related extensions.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
How to .......

### What You’ll Build


![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## Create Local Development Project
Duration: 20

At Sigma, we use the VSCode for development and will demonstrate based on that. You may use whatever development environment to develop custom Sigma plugins you are comfortable with; the methods will still be similar. 

If you choose to use a different method, ensure that it supports the use of **JavaScript;**.

Let's get started.

### **Setup VSCode**
Duration: 20

[Install VSCode from Microsoft's download site.](https://code.visualstudio.com/download)

Run the installation with all defaults.

Once the software is installed, we need to clone Sigma's Git repository:

<img src="assets/plugin1.png" width="400"/>

When prompted for the URL, enter:
```code
https://github.com/sigmacomputing/sigma-sample-plugins.git
```

VSCode will prompt you to provide a location on your local computer to store the project. We used a folder called `GitHub\sigma_plugins` that we created for this:

<img src="assets/plugin6.png" width="400"/>

Open the repository when prompted by VSCode.

The new VSCode project contains several sample plugins. We will focus on the d3-graph sample to get started.

D3 (or D3.js) is a free, [open-source JavaScript library for visualizing data.](https://d3js.org/)

<aside class="positive">
<strong>IMPORTANT:</strong><br> We are using Node's package manager on our local system but this can also be done with Yarn. In a typical workflow, it's best to choose one package manager and stick with it for a given project to ensure consistency and reduce potential issues.
</aside>

### Local Copy of Plugin Repository

......

Create a folder for your project called `Sigma_Plugin_QuickStart`


![Footer](assets/sigma_footer.png)

## Simple Example


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Detailed Example

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Triggering Events

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

### Additional Resource Links
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