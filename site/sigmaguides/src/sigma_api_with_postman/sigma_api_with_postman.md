author: pballai
id: sigma_api_with_postman
summary: How to use the Sigma API with Postman
categories: administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Getting Started, Analytics, Data Engineering, BI, Business Intelligence, Sigma, Sigma Computing, Snowflake, Dashboarding, Visualization, Analysis, Excel, Spreadsheet, Embedding, API
lastUpdated: 2023-03-15

# Sigma API with Postman

## Overview 
Duration: 5 

This QuickStart will discuss and demonstrate how to leverage the very popular API platform called Postman with Sigma's REST API. 

Postman is an API platform for developers to design, build, test and iterate their APIs. Postman reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.

Postman offers a tiered pricing model, with a free option that allows for "designing, developing, and testing APIs". We will use the free tier for testing.

 ### Target Audience
Developers who are interested in using the API methods provided by Sigma to automate operations or use functionality embedded in their own commercial applications. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>Postman installed. Web or Desktop version will work.</li>
  <li>If have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
We will install Postman, add the Sigma API to a new Postman API, configure authorization and test a few API methods.

### What You’ll Build
When done, we will have a **ready for use** Sigma API in Postman we can use whenever we want to evaluate methods and the returns.

![Footer](assets/sigma_footer.png)
<!-- END -->

## **Setup Postman**
Duration: 10

Postman offers a native web experience as well as a Desktop version. Either is fine; we will use the web version for simplicity. For this QuickStart there is not much difference in the web/desktop versions of Postman.

If you already have a Postman account you can use that or otherwise you will have to sign up for an account (free tier for our use case):

<button>[Login or Sign Up to Postman](https://identity.getpostman.com/login)</button>

After signing into Postman, click into `Workspaces`:

![Alt text](assets/pm1.png)

There are several workflows available in Postman and we will use this one:

Create a `new Workspace` called `Sigma`:

<img src="assets/pm2.png" width="500"/>

Give it the `name`, `description` and set the `visibility to Personal` for now. Click `Create Workspace`:

<img src="assets/pm3.png" width="400"/>

We want to create a new API and there are several ways to do that. In our case, we will use the `Import` option as we will grab the latest Sigma API release from our public Swagger page.

Make sure `API` is set and click the `Import` icon:

<img src="assets/pm4.png" width="500"/>

Next we will need to get the link (URL) to the latest Sigma API. Open another browser tab.

[Browse to this Sigma Help page](https://help.sigmacomputing.com/hc/en-us/articles/4408827709459-Sigma-s-Swagger-Playground) and click the link as shown below:

<img src="assets/pm5.png" width="500"/>

Right click on the link shown below and select `Copy Link Address`:

<img src="assets/pm6.png" width="500"/>

Paste the address into the Postman UI (in the link section) as shown and click `Continue`:

<img src="assets/pm7.png" width="500"/>

Click the `Import` button:

<img src="assets/pm8.png" width="500"/>

Expand the `Sigma Public API` to see the available methods as below:

<img src="assets/pm9.png" width="500"/>

In order to be able to use any API in the web version of Postman, you need to install the Postman Agent on your local machine. 

The Postman Desktop Agent is a micro-application that runs locally on your desktop. It enables you to bypass the limitations that exist in the browser by allowing API requests to originate in the browser, but be routed through your local machine and network. The Postman Desktop Agent overcomes the Cross Object Resource Sharing (CORS) limitations of browsers and acts as your agent for making API requests from the Postman web app.

Download and install the Postman Desktop Agent. You will need to unzip to perform the installation. 

<img src="assets/pm10.png" width="500"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Generate ClientID / Secret
Duration: 10

In preparation for using the API we need to use Sigma to generate a new API Token.

Log onto Sigma (as Administrator). Navigate to `Administration`, `APIs & Embed Secrets`

Click the `Create New` button:

<img src="assets/pm11.png" width="500"/>

Select `API Token`, give it a name and description. Notice that we have also created a Service Account user for automation purposes; this is a best practice. Since we are just testing, you can choose any user you prefer. Click `Create`.

<img src="assets/pm12.png" width="500"/>

Copy the `Secret` from the popup and save it to a secure location. We will use this later. Close the popup:

<img src="assets/pm13.png" width="500"/>

Also copy the ClientID and save it to a secure location. We will use this later:

<img src="assets/pm14.png" width="500"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Postman Environments
Duration: 10

Postman provides the ability to create distinct environments which contain one or more values you can use in your Postman requests and easily switch between them using variables. 

For example, you might want to use a different set of credentials to test API calls. Having two environments configured with different credentials allows you to use the same API methods but switch the environment with a click to use the different credentials / variables.

We will use this to ease the Authentication required for the Sigma API (or any token based API) by creating an Environment to hold required values and then let the API methods just inherit. It is a timesaver.

Postman displays the active environment in the environment selector, located in the top right of the workbench.

You can access all environments from Environments in the sidebar. Select the set active icon Set active icon next to an environment to make it the active environment.

To create a new environment, select `Environments` on the left and `select +`.

<img src="assets/pm28.png" width="400">

Name the Environment `Sigma API - AWS` and set the `Variables` and `Initial Values` as follows:

```plaintext
VARIABLES:    / INITIAL VALUES:
baseUrl       / https://aws-api.sigmacomputing.com
tokenBaseURL  / https://aws-api.sigmacomputing.com/v2/auth/token
clientID      / {use the clientID we created earlier that you saved off to a text file}
secret        / {use the secret we created earlier that you saved off to a text file}
```
Click `Save`

The Environment should look like this:

<img src="assets/pm15.png" width="800">

<aside class="negative">
<strong>NOTE:</strong><br> We are using urls for AWS because that is where our specific Sigma instance is hosted. If you are using GCP or Azure you will need to adjust those values accordingly or the API calls will fail. Please refer to Sigma's online documentation for those URLs.
</aside>

Postman uses tabs (similar to a browser). 

Select the new Environment but using the drop list as shown:

<img src="assets/pm16.png" width="700">

Now all our API methods will use these variable values (once we configure that in the Sigma API),

You can close this Environment tab as it does not need to be open for us to use it.

![Footer](assets/sigma_footer.png)
<!-- END -->

## Authentication
Duration: 10

Sigma's API requires that we authenticate prior to use. We will be using the Environment `Sigma API - AWS` that we setup in the last step to request a token. This token is also know as a Bearer or JSON web token (JWT).

In Postman `APIs`, expand the Sigma Public API and select as shown below.

Set the Token section to add `{{token}}`. This format is using a yet to be defined variable called "token":

<img src="assets/pm17.png" width="800">

On the `Variables` tab add the new variable for `token`. We will set a value once we actually authenticate:

<img src="assets/pm18.png" width="800">

Since we copied this API library from Swagger, it did not include an authenticate method. The Swagger page has button for authentication on it so we will need to create a method.

It is easy to create a new method. Click `APIs`, `Sigma Public API` and select `Add request`:

<img src="assets/pm19.png" width="400">

Name the new method `Authenticate` and configure it as shown using these values:
```plaintext
KEY:           / VALUE:
grant_type     / client_credentials
clientID       / {{clientID}}
client_secret  / {{secret}}
```

Change the method from Get to Post (as shown item #3).

<img src="assets/pm20.png" width="800">

Click `Save`

We are now ready to test to see if we get a token back from our new Authentication method. 

Click `Send`:

If all is right with our configuration, we should get a response with a valid `access token`. 

<img src="assets/pm21.png" width="800">

Select the `access token` as shown and copy it (you may have to use CTL+V to copy):

<img src="assets/pm22.png" width="800">

Open `APIs`, `Sigma Public API` and click the `Variables` tab.

Paste the token into the `Current Value` section for the variable `token`.

Click `Save`:

<img src="assets/pm24.png" width="800">

You now are ready to test any API method you would like and it will use this token. 

<aside class="negative">
<strong>NOTE:</strong><br> Tokens do expire. If the API later returns one of these (or similar):<br>
message="invalid signature"<br>
code="unauthorized"<br>
message="jwt expired"<br>

...we just need to resend the Authentication request, copy and paste the new token as we demonstrated earlier in this section.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Our First API Request
Duration: 10

Let's use the API to `Get` a list of available Connections.

Expand the API to show the method under `V2`, `connections`, `Returns a list of available connections` and click to select open it in a new tab.

We need to uncheck the two checkboxes (item #4 in the screenshot) for `Params` as we just want to return all the connections. These two optional parameters allow us to filter the return but we won't do that at this point. Click `Send`:

<img src="assets/pm25.png" width="800">

In the `Body` section is the return from the API in JSON. For example, our first connection is described this way:

```plaintext
        {
            "organizationId": "adbfe832-733a-4c83-b64d-bdbf6ae8d2cb",
            "connectionId": "10eed7b7-4a10-4c40-802b-4ba91287d5fe",
            "isSample": true,
            "lastActiveAt": "2023-01-25T14:44:50.000Z",
            "name": "Sigma Sample Database",
            "type": "snowflake",
            "useOauth": false,
            "createdBy": "1IDcJykBMeDwcot0MXWaw5R1RUwI7",
            "updatedBy": "yRn1UFV8ngVWBM1Hgrl51h7MS8uow",
            "createdAt": "2022-09-22T18:41:47.151Z",
            "updatedAt": "2023-01-25T14:44:50.695Z",
            "isArchived": false
        },
```

Even if you are only using a Sigma Trial and have not created a connection yourself there will be one shown. This is Sigma's sample database and is included on all Sigma instances by default. Your ID values will be different of course.


![Footer](assets/sigma_footer.png)
<!-- END -->

## New Connection using POST
Duration: 10

The API provides methods to *add/update/delete* a Sigma instance using `POST` messages. We will demonstrate this by creating a new Snowflake connection. 

**This is a demonstration only** as we will show duplicating an existing connection. 

<aside class="negative">
<strong>NOTE:</strong><br> You may use this demonstration to perform the same operation but will have to supply your own Snowflake connection details.
</aside>

We will use the following code to configure a POST message to create a new connection in Sigma. 

[You can get this code and more information here.](https://help.sigmacomputing.com/hc/en-us/articles/4487189442963-Connection-API#create)

**The values shown below are for example only:**

<aside class="negative">
<strong>NOTE:</strong><br> The code to enable write access has been removed to simplify this example.
</aside>

```plaintext
{  
 "name": "Snowflake via API POST",     
    "details": { 
                    "type": "snowflake", 
                    "account": "tester", 
                    "host": "testing.snowtest.com", 
                    "password": "<password>", 
                    "role": "A_ROLE", 
                    "user": "THE_DEV", 
                    "warehouse": "TEST_WAREHOUSE", 
                }
}
```

Configure the method `"Creates a new connection"` as shown and click `Send` (we have masked some values of course). A successful result is similar to what is shown in item #6:

<img src="assets/pm26.png" width="800">

Logging into the Sigma portal we can see we have a new connection:

<img src="assets/pm27.png" width="400">

![Footer](assets/sigma_footer.png)
<!-- END -->


## What we've covered
Duration: 5

We created a Postman account, created API token secrets in Sigma, imported the Sigma API to a new Postman API, configured authorization and tested GET and POST methods.

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Sigma API Documentation](https://help.sigmacomputing.com/hc/en-us/sections/4408551771411-API-Get-Started)

[Postman Learning Center](https://learning.postman.com/docs/getting-started/introduction/)<br>

[Sigma Help Center Home](https://help.sigmacomputing.com/hc/en-us)<br>
[Sigma Community](https://community.sigmacomputing.com/)<br>
[Sigma Blog](https://www.sigmacomputing.com/blog/)<br>
<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END -->
<!-- END OF QUICKSTART -->
