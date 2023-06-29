author: 123marianna123
id: ML_embedding_m3_l1
summary: Embedding partner training m3, l1
categories: Embedding
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default

<!-- 
SETTING THE AVAILABLE CATEGORIES WILL MAKE YOUR QUICKSTART PART OF A GROUP THAT USERS CAN FILTER ON IN THE QUICKSTART PORTAL.

AVAILABLE CATEGORIES ARE:
Administration
Embedding
Functions
Fundamentals
Partners
Snowflake
Tables (include pivot and input tables for now)
Use-cases

PLEASE REVIEW THE SIGMA QUICKSTART STYLE GUIDE. ALL QUICKSTART SHOULD SHARE A COMMON LOOK AND FEEL. 

YOU MAY WANT TO REVIEW A PUBLISHED GUIDE FIRST SO THAT YOU ARE FAMILIAR WITH HOW COMMON MARKDOWN IS APPLIED YOU CAN ACCESS THE SIGMA QUICKSTART STYLE GUIDE HERE:
http://localhost:8000/guide/sigma-style-guide/index.html?index=..%2F..internal#0
-->

# Generate and Test an Embed URL
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 
<!--Duration is deprecated and no longer required, however the code still expects to see it so include it for each section. The actual time value does not matter. -->

After you've set up your workspaces and planned for row-level security, you're ready to embed Sigma!

In this lab, we’re going to be using two tools: Pipedream, where we’ll create an API endpoint and Postman, which we’ll use to bring up our embedded workbook in our browser, independent of an application.

 ### Target Audience
Sigma partners who will be helping customers with embedding.

### Prerequisites
<ul>
  <li>A sigma account with admin access.</li>
  <li>Pipedream and Postman accounts.</li>
  <li>A broad understanding of API endpoints.</li>
  <li>A broad understanding of what embedding is and the different types of embedding available with Sigma.</li>
</ul>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>
  
### What You’ll Learn
How to create an API endpoint and bring up an embedded workbook in a browser.

![Footer](assets/sigma_footer.png)
<!-- NOTE: SIGMA LOGO REQUIRED AT END OF EACH ## SECTION -->
<!-- END OF OVERVIEW -->

## **Write an API in Pipedream**
Duration: 20
1. Log into Pipedream.
2. Click `new` to create a new workflow. 
3. Add `Embed Training Workflow` as the title in the upper left corner.
4. Click `HTTP/Webhook`. Make sure for `event data` it says `Full HTTP request.`
5. Under `HTTP Response`, click `Return a custom response from your workflow`.
6. Click `node`.
7. Click `run node code`.
8. Copy and paste the following code:

```
import crypto from 'crypto';

export default defineComponent({

  async run({ steps, $ }) {
    
    const nonce = crypto.randomUUID();
    let searchParams = `?:nonce=${nonce}`;

    searchParams += '&:email=' + steps.trigger.event.body.userEmail;
    searchParams += '&:external_user_id=' + steps.trigger.event.body.userEmail;
    searchParams += '&:external_user_team=' + steps.trigger.event.body.supplier + '_team,all_clients_team';
    searchParams += '&:ua_region=' + steps.trigger.event.body.region;
    searchParams += '&:account_type=Viewer';

    searchParams += `&:mode=userbacked`;
    searchParams += `&:show_footer=false`;

    searchParams += '&:session_length=3600';
    searchParams += `&:time=${Math.floor(new Date().getTime() / 1000)}`;

    searchParams += `&:client_id=your_client_id`;
    searchParams += '&cAttomID=' + steps.trigger.event.body.attomId;

    const URL_WITH_SEARCH_PARAMS = 'https://app.sigmacomputing.com/embed/' + steps.trigger.event.body.embedPath + searchParams;

    const SIGNATURE = crypto
      .createHmac('sha256', Buffer.from('your_secret_key', 'utf8'))
      .update(Buffer.from(URL_WITH_SEARCH_PARAMS, 'utf8'))
      .digest('hex');

    const URL_TO_SEND = `${URL_WITH_SEARCH_PARAMS}&:signature=${SIGNATURE}`

    await $.respond({
      status: 200,
      headers: {},
      body: { embedUrl: URL_TO_SEND }
    })

  }
})
```


9. Update parameters and user attributes.
10. Click `deploy`. Pipedream will return a URL. 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## **Test the embed URL using Postman**
Duration: 20

1. Log in to postman.co.
2. Create a new request. 
3. Paste the URL that you get from Pipedream in `Get`.
4. Click `Body`.
5. Click `x-www-form-urlencoded`.
6. Specify the key-value pai for each row. The keys can be found in the node.js code in the parameters after `steps.trigger.event.body`.
*Example* `Key`: `Region`; `Value`: `West`
7. Find the embed path by navigate to the Sigma dashboard, click the down arrow next to the dashboard name, and click `Embedding...`.
8. Return to Postman and enter the embed path as the `embedpath key`.
8. Click send. This makes a call to the API and generates a URL.
9. Copy and paste this URL in a new tab to bring up the embedded workbook.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->


## What we've covered
Duration: 5

In this lab we learned how to create an API endpoint and bring up an embedded workbook in a browser.

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