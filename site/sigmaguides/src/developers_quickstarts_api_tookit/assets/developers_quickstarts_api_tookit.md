author: pballai
id: developers_quickstarts_api_tookit
summary: developers_quickstarts_api_tookit
categories: Developers
environments: web
status: published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-11-20

# QuickStarts API Toolkit

## Overview 
Duration: 5 

The QuickStarts API Toolkit ("toolkit") is designed to allow you to experiment with Sigma API calls and learn common request flows.

The toolkit is completely self-contained - just clone the Github repository, authenticate and you're ready to go!

<aside class="positive">
<strong>IMPORTANT:</strong><br> This project does not replace or supersede the Sigma API reference in any way. It is also not intended for production use-<strong>use at your own risk.</strong>
</aside>

### What is included
The toolkit includes a web portal that provides an easy way to:

- Authenticate to Sigma and obtain a valid API bearer token
- Save authentication settings to encrypted local storage to make testing in multiple Sigma instances easy
- Run many of the API recipes directly
- Manually configure parameters or select the from a list when a corresponding resource is available in Sigma
- View the response and copy it to the clipboard
- View the recipe script and copy it to the clipboard
- README files provide information at the toolkit and recipe levels

Once built, the portal is visible on your localhost:

<img src="assets/rp_01.png" width="800"/>

**Bonus:**<br>
We have also include many simple API GET methods in the `Quick API` tab. Sometimes it can be useful to check the response of an endpoint quickly when looking for a value that is not visible in the Sigma UI, and this makes it really easy.

<img src="assets/rp_01.png" width="800"/>

While not "recipes", they can be a time-saver, so we included the more popular ones. This is certainly not a comprehensive list of endpoints, but hopefully you find them useful.

For a complete list of the most recent Sigma API operations, see [Sigma API Reference](https://help.sigmacomputing.com/reference/get-started-sigma-api)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Developers who are evaluating or working with Sigma's REST API. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Administrative access to your Sigma environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
  <li>A development environment of choice. We will demonstrate with Microsoft VSCode and related extensions</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

## Environment Setup
Duration: 5 

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

You can leave the terminal session open for now.

### Git Repository

To save you time, we've stored all the necessary project files in Git. Simply download them using git clone and explore the recipes that interest you.

In terminal, navigate to the desired directory where we want to clone the repo folder into.

For example:
```code
cd {/path/to/your/directory}
```

Execute the terminal command:
```code
git init
```

Add the remote repository as the origin:
```code
git remote add -f origin https://github.com/sigmacomputing/quickstarts-public.git
```

Enable sparse checkout:
```code
git config core.sparseCheckout true
```

Specify the folder you want to clone by adding it to the sparse-checkout configuration:
```code
echo "recipe-portal" > .git/info/sparse-checkout
```

At this point, we have run each command and not seen any errors:

<img src="assets/apics4d.png" width="800"/>

Finally, pull the specified folder from the repository:
```code
git pull origin main
```

We can now see the cloned project folder:

<img src="assets/apics4e.png" width="800"/>

Run the command:
```code
npm install
```

This will automatically install the project dependencies we use in the recipes. 

You can verify that the dependencies (at the time of this QuickStart) were installed by running:
```code
npm list
```

<img src="assets/apics2-2.png" width="800"/>

## Generate ClientID / Secret
Duration: 10

In preparation for using the API we need to use Sigma to generate a new API Token.

Log onto Sigma (as Administrator). Navigate to `Administration`, `Developer access`.

Click the `Create New` button:

<img src="assets/pm11.png" width="800"/>

Select `REST API`, give it a name and description. Some customers create a `Service Account` user for automation purposes; this is a best practice. Since we are just testing, you can choose any `Admin` user you prefer. Click `Create`.

<img src="assets/pm12.png" width="600"/>

Copy the `ClientID` and `Secret` from the popup and save them to a secure location. We will use them later. Close the popup:

<img src="assets/pm13.png" width="600"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Authentication - REQUIRED
Duration: 5 

Prior to using any of the toolkit operations we must first authenticate. Once a valid bearer token (token) is received, it is valid for 1-hour.



This script retrieves a bearer token from the Sigma API using client credentials authentication. It extracts required credentials from environment variables, sends a POST request to the authentication endpoint, and logs the obtained token. The function getBearerToken can be imported into other scripts for accessing protected resources.

This actual javascript is available as part of the git repository mentioned earlier or is available to copy directly from our API Code Samples site under: [Authentication: Get Access Token](https://help.sigmacomputing.com/reference/token) and returns a bearer token (token).
It also exports a Javascript function to request a bearer token (token) each time it is called. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> The token is valid for 3599 seconds (just under one hour) and needs to be refreshed. Our Javascript function will handle that.
</aside>


![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Items Worth Mentioning
Duration: 5 

In cases where a file download is requested, the portal will prompt for a download location. Recipes that do this (for example) are:

- Workbook / Export Workbook Element CSV
- Workbook / Export Workbook PDF
- Member / List All Members





![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## What we've covered
Duration: 5

In this QuickStart we covered setting up a local test environment leveraging Sigma's git repository of sample API recipes in support of a variety of use cases.

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
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
