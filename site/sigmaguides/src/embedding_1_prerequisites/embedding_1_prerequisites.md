author: pballai
id: embedding_1_prerequisites
summary: Prerequisites for the Sigma Embedding Series of QuickStarts
categories: Embedding
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-03-15
# Embedding 1: Prerequisites

## Overview 
Duration: 5 

This QuickStart introduces you to the user interface and embedding capabilities of Sigma Workbooks. It is part one of a series of QuickStarts focused on Embedding and should be taken first.
 
We have broken the different types of embeds into separate documents based on use cases to allow a user to focus on those areas of interest and improve overall readability and supportability of each document.
 
**This QuickStart is foundational to all the other embedding QuickStarts.** Additionally, it will demonstrate how to set up a local web application so that you can simulate using Sigma Embedding on your local computer. The local web application (Parent application) is to be reused on a few of the other embedding QuickStarts as required. 

For those interested, there is a comprehensive whitepaper, [Embedded Analytics Solutions for Secure Embedding](https://www.sigmacomputing.com/white-papers/white-paper-embedded-analytics) 

 ### Target Audience
Semi-technical users who will be aiding in the planning or implementation of Sigma with Embedding. No SQL or technical data skills are needed to do this QuickStart. It does assume some common computer skills like installing software, using Terminal, navigating folders and copy/paste operations.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when engaging in QuickStarts.
</aside>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<ul>
  <li></li>
    <li>Node.js and required Packages (all free):
        <ul>
        <li>Express</li>
        <li>Node-supervisor</li>
        <li>crypto (is now included with Node.js installation)</li>
        </ul>
    </li>
</ul>

### What You’ll Learn
We will cover the types of Embedding Sigma provides and how to setup a local environment to simulate an Application that we can embed into.

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart series demonstrates methods using Node.js, JavaScript and HTML but Sigma also provides an "Embed Sandbox" built directly into Sigma's interface. This allows you to quickly test configurations / parameters / theming without leaving Sigma. It is good to have options!
</aside>

### What You’ll Build
We will install, configure and verify a local Node.js web server to be used in later Embedding Series QuickStarts.

<aside class="negative">
<strong>NOTE:</strong><br> There are many programming languages and libraries you can use to plaintext a client and server-side application. Node.js is the one we will be using today. The plaintext today will also be highly simplified and commented to assist in your learning.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> We will refer to the Node.js Express web application as the “Parent” application going forward. This is analogous to a customer’s application that Sigma would be embedded into. 
</aside>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Use Cases
There are two types of embedding in Sigma: **Secure** and **Public**.

### **Secure Embedding**
**Secure** is the most common type of Sigma embedding. 

This is used when a company has a web portal that they wish to embed Sigma content directly into while retaining security, tenancy and a tailored user experience.
 
For example, a company may have an internal web site that employees have to log onto with single-sign-on where they want to provide a dashboard that only shows data filtered for each employee’s region. 

Another common use case is where a company has a web portal that their customers or partners can securely log onto to see data filtered for their own organization.
 
Sigma also allows you to extend or create custom Secure embed experiences as well.

These are the high-level use cases of Secure embedding that are most commonly seen:

![Alt text](assets/usecases1.png)

Sigma also supports Secure embedding in other 3rd party applications like Salesforce or Streamlit:

[QuickStart: Embedding 5: Application Embedding into SalesForce.](https://quickstarts.sigmacomputing.com/guide/embedding_5_application_embedding_into_salesforce/index.html?index=..%2F..index#0)

[QuickStart: Embedding Sigma in Streamlit Applications.](https://quickstarts.sigmacomputing.com/guide/embedding_9_embedding_into_streamlit/index.html?index=..%2F..index#0)
 
### **Public Embedding**
The simplest use case we provide is called Public embedding. **Customers use this when security is not required,** but there is a need to embed Sigma content. 

For example, embedding some KPIs or charts on a company’s public website that anyone can see. We will demonstrate Public embedding in a separate QuickStart:[Embedding 2: Public Embedding](https://quickstarts.sigmacomputing.com/guide/embedding_2_public_embedding/index.html) 

### **A word about iframes**
Sigma uses iframe(s) to embed Sigma content. An iframe is the type of HTML element that renders the embed in the browser. To tell the iframe what to render, you will need to pass it an embed URL. 

Embed URL creation affords a great deal of flexibility for customization by passing runtime parameters to render the embed, but also to pass parameters between the Parent application and the iframe, and back. Sigma provides a built-in JavaScript event "listener" in support of this along with allowing customer created parameters. This is covered in the [QuickStart: Embedding 6: Actions and Events.](https://quickstarts.sigmacomputing.com/guide/embedding_6_actions_events/index.html?index=..%2F..index#1)

This parameter passing is an **"easy-to-implement"** method for developers, but also provides for richer end user experience through deep interactivity of all the page/iframe elements.
There is a QuickStart that covers parameters and all the available options: [How To: Leverage Parameters and User-Attributes with Sigma Embedding](https://quickstarts.sigmacomputing.com/guide/embedding_howto_leverage_parameters_and_ua/index.html?index=..%2F..index#0)

Lastly, iFrames can be made "responsive" to optimize the end-users browser experience: 
[QuickStart: How to: Responsive iframes with Sigma](https://quickstarts.sigmacomputing.com/guide/embedding_dynamic_iframes/index.html?index=..%2F..index#0)


![Footer](assets/sigma_footer.png)
<!-- END -->

## Parent Application Setup
Duration: 20

First, we need to install and configure the portal where we can embed Sigma content. 

We will provide instructions for Mac systems, but the process is nearly identical for Windows and Linux. It does not matter which system you decide to use since Sigma runs in a browser. **The Parent application can be developed and run in the environment of your choice.**
 
We will use the popular framework [Node.js. ](https://nodejs.org/en)

Node.js (Node) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript engine and executes JavaScript plaintext outside a web browser, which was designed to build scalable network applications.
 
Node is going to allow us to set up a local web server that will make a web page available that we will use to securely embed our Sigma content. 

### Prerequisite Embed Project Files
Before we get into the details of Sigma embedding, we want to just verify that our locally installed web-server is working properly.

Download and unzip the project file to a suitable location of your choice that is easily accessible on your system. We placed it in a folder on the computer's desktop called `sigma_embedding`. 

[Download sigma_embed_prerequisites.zip](https://sigma-quickstarts-main.s3.us-west-1.amazonaws.com/embedding/sigma_embed_prerequisites.zip)

The zip file contains these two files:

 <ul>
      <li><strong>Index.html:</strong> the web page that contains the iframe we are embedding into</li>
      <li><strong>Server.js:</strong> a JavaScript routine that sets up the services required and allows configuration of the Sigma options. This is also referred to as the server-side JavaScript API.</li>
</ul>

<img src="assets/applicationsetup1.png" width="400"/>

### **Node.js Installation and Setup**

[Download and install Node.js from here:](https://Nodejs.org/en/download/)

Use the LTS (long term supported) version appropriate for your operating system.

Run the installer selecting all the defaults. This will install both Node and the Node package manager (which manages optional Node components). The package manager is abbreviated to “npm” when running commands.

You can verify your installation using Terminal:

`Right click` on the prerequisite folder and select `New terminal at folder`:

<img src="assets/applicationsetup2.png" width="500"/>

**Run the command:**
```code
node -v
```

This should return the version number as below:

<img src="assets/applicationsetup3.png" width="500"/>

<aside class="negative">
<strong>NOTE:</strong><br> You version number will likely vary from what is shown in the screenshot, based on when you installed Node.
</aside>

We now need to install two Node.js Packages. 

These will provide a web server and a random number generator for our web application. 

To do this, we will use the Node Package Manager (npm) which was installed as part of the Node installation.

Reuse the same Terminal session (or open a new one using the same method we just did).

**Run the command tro install the Express web-server:**
```plaintext
npm install express
```

<aside class="positive">
<strong>IMPORTANT:</strong><br> For packages that your project depends on (like Express.js in a web application), it's common to install them locally, within each project to avoid version conflicts between different projects. 

You may also use the -g flag (global) to make the express package available to all your Node.js projects, not just the one in your current directory. 

We have seen some instances (on various versions of operating systems and system configurations) where Express could not be found when trying to run our node application after using the -g flag. 

For this reason will just install Express for any embed QuickStart folders we create later too.
</aside>
<br>

<img src="assets/applicationsetup5.png" width="700"/>

### Node Supervisor
Node-supervisor is a package that runs your program, and watches for plaintext changes, so you can have hot-plaintext reloading-ish behavior. This means that you don't need to  worry about restarting your application (in this case, Node) each time you make a change to the server.js file.

A browser refresh will still be required to see the changes on the webpage. 

While this Package is technically not required, it is a real time-saver in the QuickStart.

**Run the command:**
```code
npm install supervisor
```

<img src="assets/applicationsetup6.png" width="700"/>

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## Bring up Express

You are now ready to test Node using your server.js file. 

**Run the command:** 
```code
supervisor server.js
```
<aside class="negative">
<strong>NOTE:</strong><br> Make sure to run this from the folder where the server.js file is stored.
</aside>

You should see the output as shown below indicating that the Express Web server is running and Node-supervisor is watching for plaintext changes:

<img src="assets/applicationsetup7.png" width="700"/>

**How is Node Express running, we did not start it did we?**

By opening `server.js` in a text editor, we can see that there are commands to require Express be loaded when Node is started. Recall that our Node command requested Supervisor to also read server.js when it starts Node, all inside our local folder we created called "sigma_embed_prerequisites":

<img src="assets/applicationsetup7a.png" width="600"/>

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## Test the Parent Website

You are now ready to check if the Parent application website is reachable in a browser.

Open a browser and set the URL to:

```code
http://localhost:3000
```
The return should be:

<img src="assets/applicationsetup8.png" width="600"/>


<aside class="negative">
<strong>NOTE:</strong><br> Supervisor will constantly watch for changes, but in the event you want to force Supervisor to stop, you can either manually exit Terminal, or hit CTRL+C to stay in Terminal, but terminate the Supervisor process so you can restart it as before.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END -->


## Make a Change

Let's make a small change to the plaintext that is driving the default webpage and see what happens.

The default webpage is changed by editing the file `index.html`.

With Node supervisor, you can make changes to `index.html` and save them. 

Supervisor will notice the change and restart Express to load your changes. 

Just refresh your browser page to see the changes. When you make changes, you may notice activity in the Terminal window and this is expected and normal. 

Make sure that Terminal is still open and running the last command `npm run supervisor`. 

Right-click on the `index.html` file and open it in a text editor:

<img src="assets/applicationsetup9.png" width="600"/>

Add and new line and some text just below the `Sigma Embed Prerequisite Complete!` line. Save the change and refresh your browser. You should see the change:

<img src="assets/applicationsetup10.png" width="500"/>

If you do, you are ready to progress to the next QuickStart in this Series which will use this framework we have setup.

![Footer](assets/sigma_footer.png)
<!-- END -->

## What we've covered
Duration: 5

We covered the types of embedding Sigma provides, common use cases, and how to setup a local environment to simulate an application that we can embed into.

For those interested in embedding without security (ie: Public embedding), proceed to [QuickStart: Embedding 2: Public Embedding](https://quickstarts.sigmacomputing.com/guide/embedding_2_public_embedding/index.html?index=..%2F..index#0)

If you are only interested in the Secure method, you can skip `Embedding 2: Public Embedding`.

For those interested in embedding with security, proceed to [QuickStart: Embedding 3: Secure Embedding ](https://quickstarts.sigmacomputing.com/guide/embedding_3_application_embedding/index.html?index=..%2F..index#0)

                                                                  
**Additional Resource Links**

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)

[Help Center Home](https://help.sigmacomputing.com)<br>
[Sigma Community](https://community.sigmacomputing.com/)<br>
[Sigma Blog](https://www.sigmacomputing.com/blog/)<br>
<br>

[<img src="./assets/twitter.png" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)&emsp;
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->
