author: pballai
id: embedding_15_embed_sdk
summary: embedding_15_embed_sdk
categories: Embedding
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2024-09-18

# Embedding 15: Embed-SDK for React

## Overview 
Duration: 5 

Sigma provides many methods to allow users and developers to interact with its systems including web-ui, [REST API,](https://help.sigmacomputing.com/reference/get-started-sigma-api) [Javascript Embed API](https://help.sigmacomputing.com/docs/example-embed-api-and-url) and an SDK for the [React](https://react.dev/) framework. 

The Embed-SDK for React offers a higher-level, developer-friendly interface that simplifies integration into applications, in contrast to Sigma’s lower-level JavaScript Embed-API, which provides more granular control but may require additional coding

There are some reasons why developers might choose one over the other. Each method offers distinct advantages depending on the project requirements, developer expertise, and desired level of control or simplicity.2

Some of those reasons can be:

### Simplification of Integration:
**Ease of Use:** An SDK typically provides higher-level abstractions and utilities that simplify integration into various frameworks and environments. It’s often designed to handle common tasks, setup, and error handling more automatically.

**Reduced Boilerplate Code:** Using an SDK can significantly reduce the amount of code developers need to write themselves, as it often includes methods that encapsulate multiple steps of a process into single function calls.

### Consistency and Reliability:
**Standardized Code:** SDKs provide a standardized way of interacting with an API, which can reduce errors and inconsistencies in how different developers or teams implement their solutions.

**Maintained by Source:** Since SDKs are usually provided and maintained by the source company (in this case, Sigma), they are likely to be well-supported and updated regularly, ensuring compatibility with the latest versions of the API.

### Framework-Specific Integration:
**Framework Optimizations:** SDKs often include optimizations for specific programming frameworks (like React, Angular, or Vue.js). For example, a React SDK might use hooks or context providers to integrate more seamlessly with React apps.
	
**Handling Dependencies:** The SDK might automatically manage dependencies and interactions with other libraries, which can help in maintaining clean and efficient codebases.

Choosing between an SDK and directly using an API depends on the specific needs of your project, your team’s expertise, and the level of custom functionality required. 

SDKs are generally recommended for most standard implementations due to their ease of use, while direct API integration might be better suited for more customized or lower-level integrations.

### Target Audience
Developers interested in evaluating Sigma software development kit ("SDK") for [React.](https://react.dev/)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases.](https://help.sigmacomputing.com/docs/sigma-product-releases)

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
 
![Footer](assets/sigma_footer.png)

## Source Code Editor - VSCode 
Duration: 5 

For this QuickStart, we will demonstrate using Visual Studio Code (VSCode), but you may use any IDE you prefer. 

VSCode, is a source-code editor developed by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

[Install VSCode from Microsoft's download site](https://code.visualstudio.com/download)

Run the installation with all defaults.

Open VSCode and make sure it loads without error.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Using in Projects
Duration: 5

For experienced developers who just want to see how to use the SDK in a React project, we provide the following information.

The pubic embed-sdk git repository is [here](https://github.com/sigmacomputing/embed-sdk)

<aside class="negative">
<strong>NOTE:</strong><br> If you are interested in running a sample application that is included in a git repo, skip to the section "Running the Sample Application".
</aside>

### For react-embed-sdk:
Use the following command, depending on your package manager:

```code
npm:
npm install @sigmacomputing/react-embed-sdk

yarn:
yarn add @sigmacomputing/react-embed-sdk

pnpm:
pnpm add @sigmacomputing/react-embed-sdk
```

### For embed-sdk:
Use the following command, depending on your package manager:

```code
npm:
npm install @sigmacomputing/embed-sdk

yarn:
yarn add @sigmacomputing/embed-sdk

pnpm:
pnpm add @sigmacomputing/embed-sdk
```

### Building
The repo uses turbo for its build system. It currently has 3 packages:

- embed-sdk: "bare-bones" wrappers over postMessages
- react-embed-sdk: React hooks to easily use the embed-sdk
- docs: A bare-bone documentation / examples

To build:
```code
pnpm run build
```

For additional information on Sigma embedding, see the [documentation](https://help.sigmacomputing.com/docs/intro-to-embedded-analytics)

There is also a QuickStart series on embedding [here](https://quickstarts.sigmacomputing.com/?cat=embedding)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Running the Sample Application
Duration: 5 

We created a simple application, that you can add an embed to.

To save you time, we've stored all the necessary project files in a [GitHub](https://github.com/) repository ("git repo"). Simply clone the git repo using a VSCode to download a copy to our local computer.

To clone the git repository in VSCode, click the link to `Clone Git Repository`:

We have made the source code available for this QuickStart's demonstration in a [public GitHub repository](https://github.com/sigmacomputing/quickstarts-public).

While you may clone the entire repository (it is not that large), we want to avoid cloning sections of the repository that are not of immediate interest. 

Instead, we will use VSCode and terminal to perform a git `sparse-checkout` of the specific project folder we are interested in. A few extra steps, but cleaner local project folder. 

Open `VSCode` and a new `terminal` session.

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
echo "embed-sdk-react" > .git/info/sparse-checkout
```

At this point, we have run each command and not seen any errors:

<img src="assets/ae16.png" width="800"/>

Finally, pull the specified folder from the repository:
```code
git pull origin main
```

We can now see the cloned project folder:

<img src="assets/ae17.png" width="800"/>

The folder contains the entire `embed-sdk-react` for you to explore, and there is a sample application we will use for demonstration. 

Before we do that, we need to install a few other dependencies to prepare the project folder for initial use.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Environment Setup
Duration: 20

We need to install Node and other related packages. While this can be done manually, Homebrew allows us to install Node and pnpm with a simple command. 

This avoids the need to manually download and install from the official websites.

Using VSCode, open a terminal session (or use the old session):

<img src="assets/sdk17.png" width="800"/>

Paste the following command into terminal and press Enter. This command will download and install Homebrew:

```code
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The system will prompt for your system password, and then wait till enter is pressed:

<img src="assets/sdk1.png" width="800"/>

Homebrew will be downloaded and setup. Once completed, a success message will be shown:

<img src="assets/sdk2.png" width="800"/>

To verify the installation, run the command:
```code
brew --version
```

A version number should be returned. If not, review the next section.

### Brew: command not found error
This error generally indicates that brew cannot be found by the terminal session. This can be resolved by manually adding Homebrew to the path.

In terminal, open your .zshrc file with this command (still in terminal):
```code
nano ~/.zshrc
```

Add the following line at the end of the file to include Homebrew’s path:
```code
export PATH="/opt/homebrew/bin:$PATH"
```
<img src="assets/sdk3.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Review the other content of the .zshrc to make sure there the path to Homebrew is not already set from a previous installation. The path value needs to be assigned to where the Homebrew code is actually installed. 

If the path was already present, close the editor and run the command shown below.
</aside>

Save the changes, overwriting the existing file (the commands are shown on the editor's footer). 

Close the editor after saving.

Reload your shell configuration by running this command:
```code
source ~/.zshrc
```

The terminal prompt will reappear with no reply.

Retry brew verification:
```code
brew --version
```

The expected response looks like this:

<img src="assets/sdk18.png" width="800"/>

### Runtime Environment - Node.js

[Node.js](https://nodejs.org/en) (Node) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript engine and executes JavaScript plaintext outside a web browser, which was designed to build scalable network applications.
 
We will install Node by using a terminal session in VSCode and leverage Homebrew via command line.

In VSCode, open a new terminal session and run the following command to check if Node is already installed:

```code
node -v
```

In our case, we see a recent version number, so no need to install again:

<img src="assets/sdk16.png" width="800"/>

If Node.js is not already installed, install it by running the following command:

```code
brew install node
```

This command will download and install the latest stable version of Node along with `npm` (Node Package Manager) on your system. Once the installation is complete, you can verify the installation by checking the versions of Node.js as described earlier.

<aside class="negative">
<strong>NOTE:</strong><br> You version number will likely vary from what is shown in the screenshot, based on when you installed Node.
</aside>

### Additional Dependencies

#### Corepack 
[Corepack](https://nodejs.org/api/corepack.html) is a Node tool intended to manage package managers without needing global installs of these package managers. It comes pre-installed with Node starting from version 16.10, but we still need to enable it.

Run the following command to enable `Corepack`:

```code
corepack enable
```

The terminal prompt will appear with no other message unless there is an error. 

<aside class="negative">
<strong>NOTE:</strong><br> We have seen instances where it is required to run the command shown above as "sudo". If an error is thrown regarding access, rerun the command as "sudo corepack enable". Terminal will prompt for the system password, allowing the action to be allowed.
</aside>

#### pnpm
[pnpm](https://www.npmjs.com/package/pnpm) is a package manager like npm or Yarn, known for its efficiency regarding disk space and speed.

Running `pnpm i` installs the dependencies listed in your project’s package.json file. It creates a node_modules directory where all your project’s dependencies are stored and also updates the pnpm-lock.yaml file, which ensures that the same versions of the dependencies are installed every time you or anyone else runs pnpm install.

Run the following command to install  `pnpm`:

```code
pnpm i
```

If terminal throws an error "This project is configured to use yarn", make sure you are in the correct directory, which should be:
```code
{your path}/embed-sdk-react
```

The results look like this:

<img src="assets/sdk19.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Start Development Server
We are ready to test the `Embed-SDK` application. Run the following command in terminal:

```code
pnpm run dev
```

The first time, the system may prompt to allow network connections. Click `Allow`, as this is only running on our local machine, port 3000. 

This starts the development server and when ready will appear like this. 

<img src="assets/sdk14.png" width="800"/>

Open a browser and navigate to:
```code
http://localhost:3000
```

Sigma has provided a sample application page, with useful links.

<img src="assets/sdk15.png" width="800"/>

In the next section will will look at how the embed is configured in code.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sample Application
Duration: 5 

Before we load the `Sample Application`, lets review which files are involved in this sample application. 

### Primary source files
There are five files involved in this example embed:

<ul>
  <li><strong>utils.ts:</strong> Defines utility functions and constants, including HMAC signing logic and configuration parameters, to generate a secure, signed URL for embedding the Sigma dashboard.</li>
  <li><strong>route.js:</strong> Generates a securely signed embed URL for the Sigma dashboard by using HMAC signing and serves it via an API endpoint.</li>
  <li><strong>basic-example-wrapper.tsx:</strong> Fetches the signed embed URL from the API and conditionally renders the basic-example-embed.tsx component once the URL is retrieved.</li>
  <li><strong>basic-example-embed.tsx:</strong> Embeds the Sigma dashboard iframe into the React application, using the Sigma SDK’s useSigmaIframe hook to manage loading and error states.</li>
  <li><strong>page.mdx:</strong> Renders the webpage, SignedIframe, and logs the signed URL for console log display only.</li>
</ul>

### Logging
When the sample application is running, the server displayed in VSCode’s Terminal will show a one-time-use SignedURL for debugging purposes only. 

**While not required**, we’ve included this to demonstrate and assist in debugging any issues you may encounter while customizing embed parameters.

<img src="assets/sdk22.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Customize the Embed
Duration: 5 

We want to use your Sigma instance for this embed, so we will need to do a few things.

### 1: Embed credentials
Log into your own Sigma instance as `Administrator` and navigate to `Administration` > `Developer Access` and click the button to `Create New` client credentials. 

Check the box on for `Embedding`, provide a name and assign the new credentials to a Sigma administrator for now.

Copy the `Client Id` and `Secret` and update the `.env` file that is part of the new `basic-example` folder, over-writing the old values. `Save` the `.env` file.

For more information on generating embed client credentials, [see here](https://help.sigmacomputing.com/docs/generate-embed-client-credentials)

### 2: Create a new workbook
Create a new workbook in Sigma and add any available table to it. It does not matter at this point what content is added.

<aside class="negative">
<strong>NOTE:</strong><br> The Sigma Sample Database has lots of data you can use to quickly start working on common example datasets.
</aside>

Save the workbook, the name does not matter at this point. 

### 3: Share the Workbook
Click the share icon in the upper right corner. 

<img src="assets/sdk24.png" width="800"/>

We are sharing ours with the `Sales_People` team:

<aside class="negative">
<strong>NOTE:</strong><br> If no teams exist yet, navigate to "Administration" > "Teams" and create a new public team.
</aside>

<img src="assets/sdk27.png" width="800"/>

For more information on teams in Sigma, [see here](https://help.sigmacomputing.com/docs/manage-teams)

### Generate Embed URL
Open the workbook's menu again and select `Embedding` this time.

Select `Secure` and `Entire Workbook`. Copy this url and click `Close`.

Open the project file `/embed-sdk-react/docs/basic-examples/lib/utils.ts`.

Replace the placeholder values for `EMBED_PATH`, `CLIENT_ID`, `EMBED_SECRET`, `EMAIL` and `EXTERNAL_USER_TEAM` to match your values created/used earlier.

For `EMAIL` you can make up any address, formatted appropriately. 

For `ACCOUNT_TYPE` use `Pro`.

<img src="assets/sdk26.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> We are hard-coding parameter values but these are normally generate programmatically by the parent application at runtime and are based on the requesting user.
</aside>

Make sure the terminal session does not throw unexpected errors after saving both of the files.

### Test the application

Refresh the browser using the url:
```code
http://localhost:3000/examples/basic-example
```

The workbook we elected to embed is shown on the React application page, in the iframe as expected:

<img src="assets/sdk31.png" width="800"/>

For more information on using parameters and user attributes in Sigma embedding scenarios, the following resources are available:

Embed URL Parameters documentation, [see here](https://help.sigmacomputing.com/docs/embed-url-parameters)

[QuickStart on Parameters and User-Attributes](https://quickstarts.sigmacomputing.com/guide/embedding_03_using_jwt_claims_and_embed_parameters_v3/index.html?index=..%2F..embedding#0)

Implement inbound and outbound events in embeds documentation, [see here](https://help.sigmacomputing.com/docs/inbound-and-outbound-events-in-embeds)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart we explored how to use the embedding SDK for React with Sigma. 

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