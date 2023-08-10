author: pballai
id: embedding_dynamic_iframes
summary: embedding_dynamic_iframes
categories: Embedding
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2023-08-09

# How To: How to: Responsive iFrames with Sigma

## Overview 
Duration: 5 

One of the many challenges developers face when building applications if usability, and a common problem is making it obvious that a user needs to scroll to see more data.

This problem can be compounded when embedding content from any external application; even Sigma. 

Scroll bars on both parent and iframe content can significantly impact the user experience, often in a negative way. Here's why:

 <ul>
      <li><strong>Confusion and difficulty navigating:</strong> When both the parent page and the iframe have scroll bars, it can be confusing for the user to navigate. They may not immediately realize which scroll bar is active, leading to a disjointed and potentially frustrating experience.</li>
      <li><strong>Nested scrolling:</strong> If the iframe content is longer than the parent page's height, users might have to deal with nested scrolling. This means they have to scroll down within the iframe before being able to continue scrolling on the parent page. This is generally considered poor user experience design and can be very frustrating</li>
      <li><strong>Aesthetically unpleasing:</strong> Multiple scroll bars can make the page look cluttered and messy, which can detract from the overall aesthetic of the website.</li>
      <li><strong>Limited view of content:</strong> If an iframe has a scroll bar, it means that all the content isn't immediately visible to the user. This might cause users to miss important information if they don't realize they need to scroll within the iframe.</li>
      <li><strong>Mobile unfriendly:</strong> On mobile devices, where screen real estate is limited, scroll bars within iframes can be particularly problematic. Users may accidentally scroll within the iframe when they intended to scroll on the parent page, or vice versa.</li>
</ul>

To avoid these issues, it's generally best to avoid having scroll bars on both the parent and the iframed content. This can often be achieved by making the iframe (and potentially also the parent page) responsive, so that the iframe adjusts its size based on the content it contains and the size of the viewport.

 <ul>
      <li><strong>Better user experience:</strong> A responsive iframe ensures that the content within the iframe is displayed correctly regardless of the size of the user's device or browser window. This is particularly important for users on mobile devices or tablets, as it allows the iframe content to resize and fit the smaller screen sizes.</li>
      <li><strong>Consistency across devices:</strong> Since different users may be accessing the content on different devices (desktops, laptops, tablets, phones), it's important that the content looks good on all of these devices. A responsive iframe will resize based on the size of the user's device or browser window, ensuring that the content is always displayed in a user-friendly manner.</li>
      <li><strong>Keeping up with modern web standards:</strong> As of the current web standards, responsiveness is a key factor in web design and development. It's almost expected that any web page or web application be responsive to provide the best user experience.</li>
</ul>

In essence, making an iframe dynamic or responsive is about ensuring that the content within the iframe is accessible, user-friendly, and looks good on all devices and window sizes. It's about creating a better, more consistent user experience.

Since Sigma uses iframes for embedding, it is fairly easy to avoid this situation.∂

This QuickStart assumes you have already taken the QuickStart [Embedding 1: Prerequisites](https://quickstarts.sigmacomputing.com/guide/embedding_1_prerequisites/index.html?index=..%2F..index#0) so that you have a sample environment to complete the tasks in this QuickStart.

 ### Target Audience
Developers who are interested in how to leverage dynamic iframes to embed Sigma into their applications.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment.</li>
  <li>A working web server based on Node.js as demonstrated in the QuickStart Embedding 1: Prerequisites</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sigma Content
Duration: 20

Log in to Sigma and navigate to the `Templates` page.

Click to select the `Plugs Electronics Sales Performance` template:

<img src="assets/di1.png" width="800"/>

`Dismiss` the dialogue asking if you want to use your own data.

Click the `Save As` button and name the Workbook `Dynamic iframes`.

`Share` the Workbook with the `Finance Team` we created in the earlier QuickStarts.

<img src="assets/di2.png">

<img src="assets/di3.png" width="800"/>

Open the `Embedding` controls:

<img src="assets/di4.png" width="800"/>

Select `Dashboard` for just the entire workbook and select `Copy`:

<img src="assets/di5.png" width="800"/>

In the node project folder, open `server.js` and replace the value for `EMBED PATH` with this new value.

<aside class="negative">
<strong>NOTE:</strong><br> If you recently completed the QuickStarts for embedding, you probably already have valid APIs and Embed Secrets. If you don't, you will need to generate them from "Administration > "APIs & Embed Secrets".
</aside>

<img src="assets/di7.png" width="800"/>

Once server.js is setup, make sure that node's express server is running:

<img src="assets/di6.png" width="800"/>

Browse to localhost:3000 to verify that we have a working application with our Sigma table on it.

When you reduce the size of the browser you can see that there are two scroll bars present. 

<img src="assets/scrollbars1.gif">

This is what we want to try and avoid by making our iframe dynamic.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Responsive iframes
Duration: 20

Since we are embedding content that is created in Sigma, it is not always possible to ensure that the Sigma content will "fit" inside a static iframes dimensions.

Without control over the iframe's content, it's challenging to have a fully dynamic solution that adjusts to the exact height of the content every time.

**Given the constraints, the most practical approach is to:**

1: Set a default height for the iframe that should ideally fit most of the content you expect to embed.

2: Allow the iframe to scroll if its content exceeds this default height.

**This ensures that:**

1: The parent application remains without a scrollbar, providing a cleaner overall look.

2: The iframe will only show a scrollbar when absolutely necessary (i.e., when its content exceeds its set height).

This approach provides a good balance between user experience and practicality, given the constraints.

In this scenario, even when the browser is full screen, the embedded content we have elected to provide from Sigma will be too long, and thus the iframe requires a scroll bar. 

The parent page, however, should still avoid having a scroll bar.

For this use case, we will simply allow the iframe to scroll but ensure the parent page does not. 

Replace the code in your embed project folder for `index.html` with this code:
```sql
<!DOCTYPE html>
<html>

<head>
    <title>Sigma Embedding - Application</title>
    <style>
        /* Ensure html and body tags occupy full height */
        html, body {
            height: 100%; /* This makes sure the entire height of the viewport is covered by the page. */
            margin: 0;    /* Resetting default margins to prevent any unexpected space. */
            padding: 0;   /* Resetting default padding. */
            overflow: hidden; /* This hides scrollbars and prevents scrolling on the parent page. */
        }

        /* Set a height for the iframe and allow it to scroll */
        #sigmaDashboard {
            height: 85vh; /* This sets the iframe height to be 85% of the viewport's height. */
            width: 100%;  /* This ensures the iframe takes the full width of its container. */
            overflow: auto; /* This allows scrolling within the iframe if its content exceeds its height. */
        }
    </style>
</head>

<body>
    <h2>Sigma Embedding - Application</h2>
    <h3>iframe URL below comes from API call to server.js</h3>
    <iframe id="sigmaDashboard"></iframe> <!-- This is the iframe that will embed the content. -->
    <script>
        /* Define the API URL from where the iframe's source will be fetched. */
        const URL = "http://localhost:3000/api/foo";

        /* Fetch the URL using the Fetch API */
        fetch(URL)
        .then(data => { 
            return data.json(); /* Parse the response data as JSON. */
        })
        .then(res => { 
            /* Set the iframe's source URL to the value fetched from the API. */
            document.getElementById("sigmaDashboard").src = res.url;
        })
        .catch(e => {
            /* Log any errors that occur during the fetch. */
            console.log(e);
        });
    </script>
</body>

</html>

```

<aside class="negative">
<strong>NOTE:</strong><br> We have added in-line comments to explain what each line is doing in the html file.
</aside>

Once you have made the changes and saved `index.html`, refresh the browser page. 

Now we only have one scroll bar (in the embed) and the parent application does not present a scroll bar regardless of how we resize the browser. 

This is generally the behavior end-users expect.

<img src="assets/scrollbars2.gif">

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to implement a responsive iframe Sigma embed into an html page, using CSS. 

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