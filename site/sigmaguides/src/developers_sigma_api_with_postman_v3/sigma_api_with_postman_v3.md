author: pballai
id: sigma_api_with_postman
summary: How to use the Sigma API with Postman
categories: Developers
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-05-18

# Sigma API with Postman

## Overview 
Duration: 5 

Authenticate, explore, and test Sigma's REST API using Postman — step-by-step setup from first request to a working reusable test environment. 

Postman is an API platform for developers to design, build, test and iterate their APIs. Postman reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub.

Postman offers a tiered pricing model, with a free option that allows for "designing, developing, and testing APIs". We will use the free tier for testing.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
Developers who are interested in using the API methods provided by Sigma to automate operations or use functionality embedded in their own commercial applications. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>Postman installed. Web or Desktop version will work.</li>
  <li>If you have not already, you can sign up for a Sigma Trial here:</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Setup Postman
Duration: 10

Postman offers a native web experience as well as a Desktop version. Either is fine; we will use the web version for simplicity. For this QuickStart there is not much difference in the web/desktop versions of Postman.

If you already have a Postman account you can use that or otherwise you will have to sign up for an account (free tier for our use case):

<button>[Login or Sign Up to Postman](https://identity.getpostman.com/login)</button>

After signing into Postman, click into `Workspaces`:

<img src="assets/pm1.png" width="800"/>

There are several workflows available in Postman and we will use this one:

Create a `new Workspace` called `Sigma`:

<img src="assets/pm2.png" width="800"/>

Give it the `name` and `description` and click `Create Workspace`:

<img src="assets/pm3.png" width="600"/>

We want to create a new "Collection" and there are several ways to do that. In our case, we will use the `Import` option as we will grab the latest Sigma API release from our public API Reference page.

Click the `3-dot menu` icon and select `Import`:

<img src="assets/pm29.png" width="800"/>

We need to provide the URL to the latest Sigma API. This is available from the [Sigma API Reference](https://help.sigmacomputing.com/reference/get-started-sigma-api) under the button `Download the Sigma OpenAPI Definitions`.

Here is that URL:
```copy-code
https://help.sigmacomputing.com/openapi/sigma-computing-public-rest-api.json
```

Paste the URL into Postman. When ready, we are prompted:

<img src="assets/pm32b.png" width="600"/>

Click `Import`. 

The import will run and Postman will show a running icon:

<img src="assets/pm32a.png" width="500"/>

When done, the API will appear as a new `Collection`. It may be helpful to rename the collection if you have more than one copy.

<img src="assets/pm32.png" width="800"/>

Expand the `Sigma Computing Public REST API` > `v2` to see the available methods as below:

<img src="assets/pm33.png" width="700"/>

To use any API in the web version of Postman, you can either use the `Cloud Agent` or install the `Postman Desktop Agent` on your local machine. We will let Postman decide and use the Cloud Agent to keep things simple.

<img src="assets/pmRevised1.png" width="700"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Generate ClientID / Secret
Duration: 10

In preparation for using the API we need to use Sigma to generate a new API Token.

Log onto Sigma (as Administrator). Navigate to `Administration` > `Developer access`.

Click the `Create New` button:

<img src="assets/pm11.png" width="800"/>

Select `REST API`, give it a name and description. Some customers create a `Service Account` user for automation purposes; this is a best practice. Since we are just testing, you can choose any `Admin` user you prefer. Click `Create`.

<img src="assets/pm12.png" width="350"/>

Copy the `ClientID` and `Secret` and save them to a secure location. We will use them later. Then click `Close`:

<img src="assets/pm13.png" width="550"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Postman Variables
Duration: 10

Postman variables enable us to store and reuse values in Postman. By storing a value as a variable, we can reference it throughout our API Collection (API).

Creating a dedicated `environment` in Postman is a great approach for managing variables such as the Sigma access_token. 

It not only helps in organizing and isolating your variables based on different stages of development (like testing, staging, and production) but also enhances security by keeping sensitive information such as tokens and secrets scoped to specific environments. 

We will only be using one environment, but this is great functionality to know when using Postman to work with APIs.

In any case, we need to manage the Sigma bearer token, so let's do it using Postman environment variables, which is a best-practice.

Here's how you can set up an environment in Postman:

### Create a New Environment

Environment variables in Postman allow values to be referenced dynamically. For example, {{access_token}} will retrieve the most recent value stored in that variable, for the current selected environment.

Expand `Environments` in the lower left side of Postman.

Click `+ Create`:

<img src="assets/pmRevised2.png" width="800"/>

Give the new environment a meaningful name, such as `Sigma API Testing`.

Copy and paste the values below into the respective `Variable` and `Value` fields:

```copy-code
Variable       /   Initial Value
baseUrl        /   https://api.us-a.aws.sigmacomputing.com
tokenBaseURL   /   https://api.us-a.aws.sigmacomputing.com/v2/auth/token
clientID       /   "Your Client ID"
secret         /   "Your secret"
access_token   /   Leave blank
refresh_token  /   Leave blank
token_type     /   Leave blank
expires_in     /   Leave blank
```

<aside class="positive">
<strong>IMPORTANT:</strong><br> Be sure to replace the initial and current values with the correct URLs based on where the Sigma portal is hosted (e.g., AWS, GCP, or Azure).
</aside>

<img src="assets/pmRevised3.png" width="800"/>

If unsure where Sigma is hosted, this is found in `Sigma` > `Administration` > `General Settings` > `Site`:

<img src="assets/pm13c.png" width="800"/>

For the list of API endpoints by cloud platform and region, see [Supported regions, data platforms, and features](https://help.sigmacomputing.com/docs/region-warehouse-and-feature-support)

Modify the `baseUrl` and `tokenBaseURL` as needed for the cloud provider.

### Use the new environment

**Don't miss this step!**

Once we have the new environment saved, we need to make it the active one for our API to use it:

<img src="assets/pmRevised4.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Authentication
Duration: 10

Sigma's API requires that we authenticate prior to use. 

We will be using variables that we set up in the last step to request an `access_token`. This access_token is also known as a Bearer or JSON web token (JWT).

We are going to add a `POST` method to automate authenticating, retrieving an access_token, and persisting it in a variable. 

### New POST Method

Click `3-dot` menu > `Add request`:

<img src="assets/pm35.png" width="500"/>

This opens a new request which we will rename to `Authenticate`.   

Change the `method` to `POST` and `Authorization` to `No Auth`:

<img src="assets/pm35b.png" width="800"/>

Under the `Body` tab, add the following values (two are environment variables and one is static):

Be sure to select the **x-www-form-urlencoded** message type.

```console
grant_type      / client_credentials
client_id       / {{clientID}}
client_secret   / {{secret}}
```

Provide the request url using the curly-brace format to leverage our environment variable:
```copy-code
{{tokenBaseURL}}
```

<img src="assets/pm35d.png" width="600"/>

We want to persist this new `access_token` in our environment variable under the same name.

To do that, we need to add this script to the authenticate method, under the `Scripts` > `Post-response` tab:
```copy-code
let responseData = pm.response.json(); // Extract the JSON response
pm.environment.set("access_token", responseData.access_token);   // Bearer token
pm.environment.set("refresh_token", responseData.refresh_token); // Refresh token
pm.environment.set("token_type", responseData.token_type);       // Always "bearer"
pm.environment.set("expires_in", responseData.expires_in);       // Seconds until expiry
```

<img src="assets/pmRevised5.png" width="800"/>

Now that we are configured, click `Save` and `Send` to try our request. If all is correct, we will get a `Status 200 OK` and an access token:

<img src="assets/pm35e.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Access tokens are valid for one hour. If the API later returns one of these (or similar):<br>

message="invalid signature"<br>
code="unauthorized"<br>
message="jwt expired"<br>

...just re-send the Authenticate request. The post-response script updates the <code>access_token</code> environment variable automatically — no copy and paste required.
</aside>

We can verify that the access_token has been stored by going back to the `environments` icon, opening it, clicking `edit`, and observing that the value has been stored:

<img src="assets/pmRevised6.png" width="800"/>

We are now ready to proceed to using other API methods.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Our First API Request
Duration: 10

### Set Bearer Auth Once at the Collection Level

Rather than configuring `Bearer Token` authorization on every request, we configure it once at the parent Collection and let every child request inherit it. The only exception is the `Authenticate` request, which already overrides this with `No Auth` (since it has no token yet — it's the one fetching it).

Click the parent Collection (e.g., `Sigma Computing Public REST API`) and open the `Authorization` tab. Set:

| Field | Value |
|---|---|
| Auth Type | `Bearer Token` |
| Token | `{{access_token}}` |

`Save` the change.

<img src="assets/pm25b.png" width="800"/>

<aside class="positive">
<strong>NOTE:</strong><br> All child requests default to <code>Auth Type</code> = <code>Inherit auth from parent</code>, so this single setting now applies to every method in the Collection. When the post-response script on the <code>Authenticate</code> request refreshes <code>access_token</code>, every other request immediately picks up the new value.
</aside>

### List Connections

Let's use the API to `Get` a list of available Connections.

Expand the API to show the method under `V2`, `connections`, `List connections` and click to select open it in a new tab.

We need to uncheck the checkboxes (item #4 in the screenshot) for `Params` as we just want to return all the connections:

<img src="assets/pm25.png" width="800">

Confirm the `Authorization` tab shows `Inherit auth from parent` — no per-request changes needed.

Click `Send`. The `Body` panel returns the list of connections as JSON:

<img src="assets/pm25a.png" width="800"/>

Even if you are only using a Sigma Trial, and have not created a connection yourself, there will be one shown. This is Sigma's sample database, and is included on all Sigma instances by default. Your ID values will be different, of course.

![Footer](assets/sigma_footer.png)
<!-- END -->

## New Connection using POST
Duration: 10

The API provides methods to *add/update/delete* connections on a Sigma instance using `POST` messages. We will demonstrate this by creating a new Snowflake connection that mirrors an existing working one.

For more information, see [Create a connection](https://help.sigmacomputing.com/reference/createconnection)

The easiest way to build a valid payload is to start from an existing, working connection. Use the `List connections` method from the previous section and locate the connection you want to model. A typical response looks like this:

```copy-code
{
    "name": "Snowflake East",
    "type": "snowflake",
    "account": "YOURORG-YOURACCOUNT",
    "host": "YOURORG-YOURACCOUNT.snowflakecomputing.com",
    "warehouse": "COMPUTE_WH",
    "user": "SIGMA_SERVICE_USER",
    "role": "SIGMA_SERVICE_ROLE"
}
```

Take note of the `account`, `host`, `warehouse`, `user`, and `role` values — these are the fields Sigma needs to reach your Snowflake instance.

<aside class="negative">
<strong>NOTE:</strong><br> Both <code>account</code> and <code>host</code> should be provided. If <code>host</code> is omitted, Sigma may fail to resolve the Snowflake endpoint and return <code>"Could not connect to host"</code>.
</aside>

Use the following payload as the request body for the `Create a connection` method, replacing the placeholder values with your own:

```copy-code
{
    "name": "Snowflake via API POST",
    "details": {
        "type": "snowflake",
        "account": "YOURORG-YOURACCOUNT",
        "host": "YOURORG-YOURACCOUNT.snowflakecomputing.com",
        "warehouse": "COMPUTE_WH",
        "user": "SIGMA_SERVICE_USER",
        "role": "SIGMA_SERVICE_ROLE",
        "authType": "key-pair",
        "privateKey": "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFHDBO...\n...\n-----END ENCRYPTED PRIVATE KEY-----",
        "privateKeyPassphrase": "YOUR_PASSPHRASE"
    }
}
```

<aside class="positive">
<strong>IMPORTANT:</strong><br> The <code>privateKey</code> must be a valid PEM string with <code>\n</code> escape sequences in place of actual line breaks. Snowflake will reject keys that arrive without the proper line boundaries. The matching public key must already be registered against the <code>user</code> in Snowflake.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> The code to enable write access (<code>writeAccess</code> block) has been omitted to keep this example minimal. See the <a href="https://help.sigmacomputing.com/reference/createconnection">API reference</a> for the full schema.
</aside>

Configure the `Create a connection` method as shown and click `Send`. A successful result returns a `201 Created` response with the new connection's `connectionId`:

<img src="assets/pm26.png" width="800">

Logging into the Sigma portal we can see we have a new connection:

<img src="assets/pm27.png" width="700">

![Footer](assets/sigma_footer.png)
<!-- END -->

## What We've Covered
Duration: 5

You now have a working Postman environment for the Sigma REST API — one you can keep extending as new endpoints become relevant to your work. The setup is more than a one-off test harness; the patterns used here are the foundation for any automation, embedded workflow, or CI/CD integration built on top of Sigma's API.

A few techniques are worth carrying forward to other API work:

- **Authenticate once, persist automatically.** The post-response script on the `Authenticate` request writes every token field into the active environment, so downstream requests pick up fresh values the moment you re-authenticate. The same pattern applies to any OAuth 2.0 client_credentials flow — not just Sigma's.
- **Inherit auth at the Collection level.** Configuring `Bearer Token` once on the parent Collection and leaving child requests on `Inherit auth from parent` keeps per-request configuration clean and removes the most common source of "why is this request failing?" friction.
- **Use `List` responses to model `POST` payloads.** When building a new connection, workbook, or any other resource, the corresponding `List` endpoint is the fastest way to discover the shape of a valid object. Copy a working response, swap in your values, and submit.

From here, the API opens up the broader surface area of Sigma — administration, embedding workflows, content lifecycle, and integration with external systems — all using the same authenticated environment you just built.

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
