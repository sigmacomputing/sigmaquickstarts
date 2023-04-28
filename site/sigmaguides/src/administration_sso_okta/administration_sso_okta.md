author: pballai
id: administration_sso_okta
summary: administration_sso_okta
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: Getting Started, Analytics, Data Engineering, BI, Business Intelligence, Sigma, Sigma Computing, Snowflake, Dashboarding, Visualization, Analysis, Excel, Spreadsheet, Embedding
lastUpdated: 2023-05-01

# Single Sign On with Sigma and Okta
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart **QS** provides all the common Markup to be used in new QS. 

Sample code and examples are shown for each item.

We encourage you to review the QS called 

This QuickStart assumes you........

 ### Target Audience
Anyone who is trying to create QS content for Sigma. 

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>An Okta account as Administrator. A development environment is acceptable.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Okta Developer Account](https://developer.okta.com/signup//)</button>``

<aside class="postive">
<strong>IMPORTANT:</strong><br> We will assume you have access to (or setup trials) as outlined above before starting this QuickStart. We will not cover the steps to access the base sites as the vendors have made the process very straight-forward.
</aside>
  
### What You’ll Learn
How to apply Sigma approved Markdown for your QS.

### What You’ll Build
[I good example of the Sigma style that we want to try to adhere to is here](https://quickstarts.sigmacomputing.com/guide/getting_started_working_with_tables_hol/index.html)<br>.


INSERT IMAGE OF FINAL BUILD IF APPROPRIATE.........

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## **SSO Initial Configuration**
Duration: 20

Login into Okta as Administrator and navigate to `Applications` > `Applications` and click `Browse App Catalog`:

<img src="assets/ok1.png" width="800"/>

Type `Sigma` into the search bar and select either "Sigma on AWS" or "Sigma on GPC" depending on where your Sigma instance is hosted:

<img src="assets/ok2.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> To see where you Sigma instance is hosted, login to Sigma (as Administrator) and navigate to Administration > Account. The cloud provider is listed near the top in the "Site" grouping.
</aside>

On the next page we see that Sigma is "Okta Verified". Click `Add Integration`:

<img src="assets/ok3.png" width="800"/>

Give the integration a name and click `Done`:

<img src="assets/ok4.png" width="800"/>

We have to get some information and configure things in Sigma as we set this up.

In another browser tab, log into Sigma and navigate to `Administration` > `Account` and copy the URL as shown:

<img src="assets/ok8.png" width="800"/>

This is the URL Okta will use to reach Sigma. Save it off in a text file so we can use it later.

Navigate to `Administration` > `Authentication` and click `Edit`:

Select `SAML or password` while we are testing so that we can login with Okta SSO or directly into Sigma with a our admin username and password. 

There are other options on this page but we will leave them at the defaults. The links below provide more information on those options:

[Guest Access](https://help.sigmacomputing.com/hc/en-us/articles/4412853245971-Guest-User-Accounts)

[Multi-Factor Authentication](https://help.sigmacomputing.com/hc/en-us/articles/4409688043411-Two-Factor-Email-Authentication)

<img src="assets/ok6.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma supports the configuration of both SP-initiated and IdP-initiated authentication. This means your organization members can choose to login to Sigma from either your IdP console or your Sigma login page. After testing, we will change this to enforce SSO only login.
</aside>

Sigma needs to have an Identity Provider (IDP) login URL and X509 certificate. We can gets these from Okta (our IDP)

Return to Okta and navigate to the `Sign On` tab. Scroll down to find `Settings` group and the button to `Show details` after the "Metadata URL". We want to click to copy `Sign on URL`:

<img src="assets/ok9.png" width="800"/>

Paste this value into Sigma for the value of `Identity provider login URL`:

<img src="assets/ok10.png" width="800"/>

Now click to copy the x509 certificate, which little further down in the same group.

<img src="assets/ok11.png" width="800"/>

Paste this value into Sigma under the value for `Identity provider X509 certificate` and click `Save`:

<img src="assets/ok13.png" width="800"/>

Return to Okta and the `Sign On` page. This time, click `Edit` in the `Settings` group:

<img src="assets/ok14.png" width="800"/>

Copy the Sigma Account URL we saved off to a text file earlier and paste it into the `Default Relay State` box:

<img src="assets/ok15.png" width="800"/>

There are some additional options but we will discuss them later. 

Scroll all the way to the bottom and click `Save`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION -->

## Testing SSO

Open a new Chrome browser in `Incognito mode` so that we avoid issues with session cookies. You could also just use another browser like Firefox or Safari to create isolation. 

<img src="assets/ok16.png" width="800"/>

Navigate to your Sigma portal using whatever URL you typically use. 

For example: https://app.sigmacomputing.com/{YOUR ACCOUNT NAME}

Now that SSO is enabled, we are presented an additional login option. Recall that we left username/password authentication on. We will turn this off later.

<img src="assets/ok17.png" width="800"/>

Click the `Sign in with SSO` button. We are talking to an Okta page for signing into Sigma now.

<img src="assets/ok18.png" width="800"/>

Try to login with your Sigma credentials. It will fail. This is because we have not created this user in Okta.

When errors occur in Okta (before reaching out to Sigma) it can be useful to review the Okta Application error log:

<img src="assets/ok19.png" width="800"/>

Here we see `Verification error` which indicates that Okta does not have a record for this user login attempt:

<img src="assets/ok20.png" width="800"/>

### Add User in Okta

We need to add our Sigma Admin user in Okta so we can disable non-SSO logins to Sigma. 

Navigate to `Directory` > `People` and click `Add person`:

<img src="assets/ok21.png" width="800"/>

Configure the new user as follows and use the same password used for your Administrator user in Sigma:

<img src="assets/ok22.png" width="800"/>

Go back to the incognito Chrome window and try to login again. It will fail but this time, the errors is more instructive:

<img src="assets/ok23.png" width="800"/>

The user needs to be "assigned" to the Sigma application. Currently, this Okta user is not allowed to use anything.

In Okta, navigate to the `People` list again and click on the user we created previously.

<img src="assets/ok24.png" width="800"/>

Click the `Assign Application` button.

<img src="assets/ok25.png" width="800"/>

Click to assign the `Sigma on AWS` application:

<img src="assets/ok26.png" width="800"/>

Next click `Save and go back`:

<img src="assets/ok27.png" width="800"/>

Click `Done`.

Now that the user is added in Okta, go back to incognito Chrome again and try to login again.

We are now able to login to Sigma with SSO.

Another inspection of the Okta log for the Sigma application reveals the two steps that occured:

<img src="assets/ok28.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION -->

## **Disable Standard Authentication**
Duration: 20

We want to disable username/password logins to Sigma and enforce only SSO with Okta.

In Sigma, navigate to `Administration` > `Authentication` and click the `Edit` button.

Change the `Authentication Method` to only `SAML`. 

<img src="assets/ok29.png" width="800"/>

Sigma will now only support SSO login, in this case with Okta.

After logging out of Sigma, close the incognito browser and reopen a new one. Browse to Sigma like:

https://app.sigmacomputing.com/{ACCOUNT NAME}/login

We now only see the `Sign in with SSO` button:

<img src="assets/ok30.png" width="800"/>

The Sigma admin user is still able to login but only with SSO. 

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## **User Management Options**
Duration: 20

When using Okta SSO, there are several user management options available. These include:

 <ul>
      <li><strong>Bar charts:</strong> Some text...</li>
      <li><strong>Line charts:</strong> Some text...</li>
      <li><strong>Area charts"</strong> Some text...<li>
</ul>

    User Provisioning: Okta can automatically provision user accounts in the target applications when the user is added or modified in Okta. This can reduce manual effort and ensure consistency across applications.

    User Deprovisioning: Okta can automatically deprovision user accounts in the target applications when the user is deleted or deactivated in Okta. This can help ensure that former employees or contractors no longer have access to company data.

    Group Management: Okta allows administrators to create groups and assign users to those groups. This can simplify application provisioning and deprovisioning by allowing administrators to manage access based on groups instead of individual users.

    Access Policies: Okta allows administrators to define access policies that govern user access to specific applications or data. These policies can be based on factors such as user location, device, or role.

    Password Policies: Okta provides password policies that can enforce password complexity rules and expiration policies. This can help ensure that users have strong passwords and reduce the risk of password-related security breaches.

    User Self-Service: Okta provides a self-service portal that allows users to reset their passwords or update their profile information. This can reduce the burden on IT help desks and improve user satisfaction.


![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Help Center Home](https://help.sigmacomputing.com/hc/en-us)<br>
[Sigma Community](https://community.sigmacomputing.com/)<br>
[Sigma Blog](https://www.sigmacomputing.com/blog/)<br>
<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->