author: pballai
id: administration_api_code_samples
summary: administration_api_code_samples
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-03-01

# Sigma REST API Code Samples

## Overview 
Duration: 5 
<!--Duration is deprecated and no longer required, however the code still expects to see it so include it for each section. The actual time value does not matter. -->

This QuickStart **QS** provides all the common Markup to be used in new QS. 

Sample code and examples are shown for each item.

We encourage you to review the QS called 

This QuickStart assumes you........

 ### Target Audience
Anyone who is trying to create QS content for Sigma. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>A development environment of choice. We will demonstrate with Microsoft VSCode and related extensions</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
How to apply Sigma approved Markdown for your QS.

### What You’ll Build
[I good example of the Sigma style that we want to try to adhere to is here](https://quickstarts.sigmacomputing.com/guide/administration_audit_logging/index.html?index=..%2F..index#0)

INSERT IMAGE OF FINAL BUILD IF APPROPRIATE.........

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->


## Environment Setup

### Create Sigma Project Folder

Create a new folder on your local computer called `Sigma_QuickStart_Public_Repo`. It does not matter where, as long as you can navigate to it easily.

### Source Code Editor - VSCode 

For this QuickStart, we will demonstrate using Visual Studio Code (VSCode), but you may use any IDE you prefer. 

VSCode, is a source-code editor developed by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

[Install VSCode from Microsoft's download site.](https://code.visualstudio.com/download)

Run the installation with all defaults.

Open VSCode and make sure it loads without error and open the folder `Sigma_QuickStart_Public_Repo` we created earlier:

<img src="assets/apics2.png" width="800"/>

### Runtime Environment - Node.js
Duration: 20

While developers can use any language to communicate with the Sigma REST API, we will use the popular framework [Node.js. ](https://nodejs.org/en) for our examples.

Node.js (Node) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript engine and executes JavaScript plaintext outside a web browser, which was designed to build scalable network applications.
 
[Download and install Node.js from here:](https://Nodejs.org/en/download/)

Use the LTS (long term supported) version appropriate for your operating system.

Run the installer selecting all the defaults. **We do not need to specify our project folder for this installation.**

This will install both `Node` and the `Node package manager` (which manages optional Node components, which add more functionality). 

The package manager is abbreviated to `npm` when running commands.

You can verify your installation using VSCode's built-in Terminal:

<img src="assets/apics3.png" width="800"/>

**Run the command:**
```code
node -v
```

This should return the version number as below:

<img src="assets/apics4.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> You version number will likely vary from what is shown in the screenshot, based on when you installed Node.
</aside>

You can leave the Terminal session open as we will use that in the next section.

### Node modules

We need to install a few Node modules **in our local folder.**

This process is the same for many Node modules. We will start with two, but in later use-cases we may require others to be installed, so watch for that along the way.

### Axios

The first module we will install is called `Axios`, and is one of the most popular JavaScript libraries in the world. It is an HTTP client that can be used to make requests from both browsers and NodeJS. We will use this to make calls to the Sigma REST API, via a Javascript.

In VSCode Terminal, run:
```
npm install axios
```
<img src="assets/apics5.png" width="800"/>

No errors should be returned. 

### dotenv

[dotenv](https://www.npmjs.com/package/dotenv) is a popular Node. js module that allows you to load environment variables from a `.env` file into your Node. js application. This will simplify our project code. 

Run the following command in Terminal:
```code
npm install dotenv
```

No errors should be returned. 

### Project Files

To save you time, we have stored all the required project files in Git, so you can just download them, and explore the use cases that interest you. This QuickStart will guide you, based on use case name, so feel free to skip to the section that interests you most.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The section named "Get Bearer Token Script" is a must read, as proper authentication is required in all use cases. Do that section once you finish this section.
</aside>

To clone the Git repository in VSCode, open the `Command palette`:

<img src="assets/apics10.png" width="800"/>

Type `Clo` into the command palette bar and then click `Git: Clone`:

<img src="assets/apics11.png" width="800"/>

Paste this URL and hit enter:
```code
https://github.com/sigmacomputing/quickstarts-public.git
```

VSCode will prompt for the location to store the files on your computer. Navigate to the `Sigma_QuickStart_Public_Repo` folder and click the `Select as Repository Destination` button.

<img src="assets/apics12.png" width="800"/>

If prompted to open the cloned repository, click `Open`.

The repository contains other code samples you can explore, but we are interested in the `rest-api-recipes` folder:

<img src="assets/apics13.png" width="800"/>

### Environment Variables
We need to update the file that stores our environment variables. 

First, you will need to provide the values for `ClientID`, `Secret`, `Base` and `AuthURL`. [Instructions can be found in the API Swagger if needed.](https://help.sigmacomputing.com/reference/explanation)

This file keeps our keys out of our scripts and also contains other variables we may want to change in different use-cases:

<img src="assets/apics14.png" width="800"/>

Replace the placeholders for `YourClientID` and `YourAPISecret`. The values for auth and baseURL are for Sigma instances hosted in AWS-US. You may need to change these based on where your instance is running. If you are not sure, check the instructions mentioned above (in the API Swagger).

Save the file.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Get Bearer Token Script
In this step, we will look at a script that authenticates to the [Sigma get access token endpoint](https://help.sigmacomputing.com/reference/token) and returns a bearer token (token)

<aside class="positive">
<strong>IMPORTANT:</strong><br> The token is valid for 3599 seconds (just under one hour) and needs to be refreshed.
</aside>

It also exports a Javascript function to request a bearer token (token) each time it is called. We can reference this function from any other API scripts we create, saving time later.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The token is valid for 3599 seconds (just under one hour) and needs to be refreshed. Our Javascript function will handle that.
</aside>

Open the file `authenticate-bearer` and review it's contents. Each section is commented so it can be understood. 

Start the VSCode debugger against this code by pressing `F5` on your keyboard.

If prompted by VSCode to select a debugger, select `Node.js`:

<img src="assets/apics15.png" width="800"/>

The VSCode debugger console will show this API response if the .env variables are configured correctly:

<img src="assets/apics16.png" width="800"/>

The script is configured to run standalone as well as export a function that we can call from other scripts too. 

The ability to run it standalone is only for convenience, so that we can verify it obtains a token.

We can now move on to use cases, leveraging the `getBearerToken` function.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Change a Members's Account Type
Duration: 20

With our system setup and getting a bearer token from the authentication endpoint, we can try our first script. 

### Create Test Member
Let's create new member in Sigma to test with. 

<aside class="negative">
<strong>NOTE:</strong><br> We could also do this with the API, but we will use the UI to create a test member. We want to use the UI to verify API changes we make via API too.
</aside>

If you prefer, you can use any non-production user you want, but we recommend creating a test user for this purpose. 

If you are not sure how to create a user (member) in Sigma, [please refer to this documentation.](https://help.sigmacomputing.com/docs/invite-people-to-your-organization).

We created a test user using [Gmail's email alias](https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html) feature. 

Our test user is called `sales_rep`.

Make a note of the test user's memberId. Again, we could get this using the API, but in this example, we will just copy it from the URL, when looking at the user's profile from the `Administration` > `People` list:

<img src="assets/apics8.png" width="800"/>

In this case, the memberId is `KteJXJQfHuei5GxxY9hQOnFZHP91A`. Yours will be different.

Add these values to the .env file we created and save the change.
```code
MEMBER_ID=KteJXJQfHuei5GxxY9hQOnFZHP91A
NEW_MEMBER_TYPE=Creator
```

<img src="assets/apics17.png" width="800"/>

### Change Test Members's Account Type
Our test user is currently a `Viewer` account type. We want to call the Sigma API endpoint to `Update the specified member` account type to `Creator`.

<img src="assets/apics9.png" width="800"/>

We will be using the [Update the specified member](https://help.sigmacomputing.com/reference/updatemember-1) endpoint.

### Running the Script
Open the file `change-member-account-type.js`. 

Each code block is commented to explain what operations are being performed. 

Press `F5` to run the script with VSCode's debugger. 

The expected response is:

<img src="assets/apics18.png" width="800"/>

A quick check against the member in Sigma shows them having the `Creator` account type now:

<img src="assets/apics19.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Workbooks Last Accessed for a Member
Duration: 20

In this use case, we want to return a list of the Workbooks (by name), the permission and when they last accessed for each Workbook, ordered by most recent first.

Open the file called `.env` and ensure that the memberID is set for someone who has accessed Workbooks in your Sigma instance. In a trial environment, pick someone who is very active or yourself if that is the case. As long as there is activity, it does not matter otherwise.

If you are not sure how to obtain a memberID, review the section called `Create Test Member` in the step called `Change a Members's Account Type`.

Open the file called `most-recent-workbook-access.js`.

Each code block is commented to explain what operations are being performed. 

Press `F5` to run the script with VSCode's debugger. 

The expected response is:

<img src="assets/apics20.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Pagination   NEEDS WORK AND CLARIFICATION FROM SAM S.
Duration: 20

Query parameters page and limit are commonly used together in APIs to implement pagination. This mechanism allows clients to request data in discrete chunks or "pages", making it easier to handle large datasets. Here's how these parameters typically work together in API use cases:

Many of Sigma's API operations support `page` and `limit` as query parameters. 

These parameters can be used in different ways but generally they are used to:

1: Reduces the load on the server and the amount of data transmitted over the network at any one time.
2: Make it easier for clients to consume data in manageable chunks, especially important for user interfaces where users scroll through lists or tables of data.
3: Provide flexibility so customers can adjust the limit based on their current needs or capabilities/ For example, requesting more data on a powerful desktop browser or less on a mobile device with limited bandwidth.

### The Page parameter
The page parameter indicates the current page of data to retrieve.

In Sigma, this is a `string` value. 



### The Limit parameter




### Used Together






![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Hold content
Duration: 20

The [Sigma API Reference Swagger](https://help.sigmacomputing.com/reference/explanation) provides sample code for all the popular programming languages, so definitely check that out:

<img src="assets/apics1.png" width="800"/>

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

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->