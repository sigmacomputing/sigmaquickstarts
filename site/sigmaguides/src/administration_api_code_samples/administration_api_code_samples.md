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

### Create Project Folder

Create a new folder on your local computer called `rest_api_recipes`. It does not matter where, as long as you can navigate to it easily.

### Source Code Editor - VSCode 

For this QuickStart, we will demonstrate using Visual Studio Code (VSCode), but you may use any IDE you prefer. 

VSCode, is a source-code editor developed by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

[Install VSCode from Microsoft's download site.](https://code.visualstudio.com/download)

Run the installation with all defaults.

Open VSCode and make sure it loads without error and open the folder `rest_api_recipes` we created earlier:

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

### Environment Variables

We need to create a file to store our environment variables. 

This file keeps our bearer token out of our scripts and also contains other variables we may want to change in different use-cases.

In VSCode, click the icon to create a new file, name the file `.env` and paste the following code into the editor.

<img src="assets/apics7.png" width="800"/>

```code
CLIENT_ID=yourClientId
SECRET=yourSecret
MEMBER_ID=yourMemberId
```

Replace the placeholders for `yourClientId` and `yourSecret`. We will replace `yourMemberId` later on.

Save the file.

<aside class="positive">
<strong>IMPORTANT:</strong><br> The token value will need to be refreshed each hour. We will handle that in our Javascript code.
</aside>

### Create Test Member
Let's create new member to test with. We could also do this with the API, but we will use the UI, since we want to use it to also verify API changes after the fact. 

If you prefer, you can use any non-production user you want, but we recommend creating a test user for this purpose. 

If you are not sure how to create a user (member) in Sigma, [please refer to this documentation.](https://help.sigmacomputing.com/docs/invite-people-to-your-organization).

We created a test user using [Gmail's email alias](https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html) feature. 

Our test user is called `sales_rep`.

Make a note of the test user's memberId. Again, we could get this using the API, but in this example, we will just copy it from the URL, when looking at the user's profile from the `Administration` > `People` list:

<img src="assets/apics8.png" width="800"/>

In this case, the memberId is `KteJXJQfHuei5GxxY9hQOnFZHP91A`. Yours will be different.

Add this value to the .env file we created and save the change.
```code
MEMBER_ID=KteJXJQfHuei5GxxY9hQOnFZHP91A
```

### Bearer Token Script
In this step, we will create a script that exports a Javascript function to request a bearer token (token) each time it is called. 

We will be able to reference this function from any other API scripts we create, saving time.

Create a new file called `authenticate-bearer.js` and paste this code into it:
```code
STOPPED HERE PHIL
```

Save the file.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Change a Members's Account Type
Duration: 20

With our system setup, we can try our first script. 

### Change Test Members's Account Type
Our test user is currently a `Viewer` account type. We want to call the Sigma API endpoint to `Update the specified member` account type to `Creator`.

<img src="assets/apics9.png" width="800"/>

We will be using [this endpoint.](https://help.sigmacomputing.com/reference/updatemember-1)

In VSCode, click to create a new file called `change-member-account-type.js` in our project folder:

<img src="assets/apics6.png" width="400"/>

Next, paste the following code into the codeblock section as shown. There are in-line comments to describe the major sections:
```code
// Use Axios module:
const axios = require('axios');

// Load environment variables directly:
const clientId = process.env.CLIENT_ID; // Loaded from the .env file
const secret = process.env.SECRET; // Loaded from the .env file
const memberId = process.env.MEMBER_ID; // Loaded from the .env file

// Set member type desired into a variable:
const newMemberType = 'Creator';

// Sigma API authentication endpoint (BaseURL):
const authUrl = 'https://aws-api.sigmacomputing.com/auth'; // Update with the baseURL where your Sigma instance is hosted 

// Function to obtain Bearer token:
async function getBearerToken() {
  try {
    const response = await axios.post(authUrl, {
      clientId,
      secret,
    });
    return response.data.accessToken; // Adjust according to the actual response structure
  } catch (error) {
    console.error('Error obtaining Bearer token:', error);
    return null;
  }
}

// Main function to update member type:
async function updateMemberType() {
  const token = await getBearerToken();
  if (!token) {
    console.log('Failed to obtain Bearer token.');
    return;
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  const data = {
    memberType: newMemberType
  };

  axios.patch(`https://aws-api.sigmacomputing.com/v2/members/${memberId}`, data, { headers })
    .then(response => {
      console.log('User account type updated successfully:', JSON.stringify(response.data, null, 2));
    })
    .catch(error => {
      const errorMessage = error.response ? JSON.stringify(error.response.data, null, 2) : error.message;
      console.error('Error updating user account type:', errorMessage);
    });
}

// Call the main function
updateMemberType();
```

Save the file.






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