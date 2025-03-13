author: pballai
id: fundamentals_7_design_v3
summary: fundamentals_7_design_v3
categories: Fundamentals
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2025-03-13

# Fundamentals 7: Design Elements (UI & Layout)

## Overview 
Duration: 5 

This QuickStart is part of a series designed to help new users understand a few of the design elements in Sigma and a few design concepts to consider as well.

In this QuickStart, we will use elements built in previous Fundamentals lessons to create a visually appealing dashboard.

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart assumes you have already taken the other QuickStart Fundamentals, and are now generally familiar with Sigma. Given this, some steps are assumed to be known and may not be shown in detail.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma is continuously adding and enhancing functionality. Rest assured, Sigma’s intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases.](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something is not working as you expect, here is how to [contact Sigma support.](https://help.sigmacomputing.com/docs/sigma-support)

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some features may carry the "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

 ### Target Audience
The typical audience for this QuickStart includes users of Excel, common Business Intelligence or Reporting tools, and semi-technical users who want to try out or learn Sigma.

### Prerequisites
<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Completion of the QuickStarts Fundamentals 1 and 2</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
</ul>

<button>[Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

![Footer](assets/sigma_footer.png)

## Construct the Dashboard
Duration: 5 

Let's place a few of the elements that we created in the previous fundamentals on the `Dashboard` page, which is currently empty.

<aside class="negative">
<strong>NOTE:</strong><br> If somewhere along the way you deleted the Dashboard page, just create a new page and rename it.
</aside>

Once we have the elements we want, we can then style them all at once, using a custom Sigma theme. 

On the `Fundamentals 6` page, move everything except the slider controls to the `Dashboard` page. 

Click, hold and drag the selection box around the elements to select them:

<img src="assets/fdesign_1.png" width="800"/>

Open the `3-dot` menu and select `Move to` > `Dashboard`:

<img src="assets/fdesign_2.png" width="500"/>

Rearrange the elements:

<img src="assets/fdesign_3.png" width="800"/>

### Containers
Select all the control elements and click to place them into a container:

<img src="assets/fdesign_4.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> This is one way to add a container. Another is to drag one onto the page from the "Layout" group on the "Element bar".
</aside>

Containers act like a group of elements in that they can be moved together by selecting the container, rather than individual elements.

Containers can also be styled and named too. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Naming a container is a best practice. It allows actions to be applied to everything in the container instead of one at a time. For example, clearing all control values via Sigma action.
</aside>

<img src="assets/fdesign_4a.png" width="800"/>

Sigma also provides a `Tabbed container` element, which is exactly what it sounds like. Some common use cases for this are:

- Show Chart and underlying data in the same dashboard space
- Show different visualizations based on number of selected items in a control
- Custom “No Data” message
- Create a drill down to different chart experience with actions and tabbed containers

<img src="assets/tabbed-cont.gif"/>

For more information, see [Create and configure tabbed containers](https://help.sigmacomputing.com/docs/create-and-configure-tabbed-containers)

### Images
Let's add a logo to the page. Drag an `Image` element from the `UI` group on the `Element bar` onto the page:

<img src="assets/fdesign_5.png" width="800"/>

Right-click on this images and select `Save Image as`, and store it somewhere easy to locate on your computer:

<img src="assets/plugs_logo2.png" width="400"/>

In Sigma, click the `Add image` button and browse to find the file just saved.

After a tweaking the size, the `Dashboard` should look like this:

<img src="assets/fdesign_6.png" width="800"/>

![Footer](assets/sigma_footer.png)

## Dynamic text
Duration: 5 

We have some controls on the page, and when they are clicked, it would better if we could make the table's title provide some indication of that. 

Let's just do one for demonstration purposes; the process is the same for others anyway.

Double-click on the table's label, backspace over the text until only `Plugs_Store_Sales ` is left (include the trailing space).

Then press `=` to bring up the formula bar. Type `[` and Sigma provides all the possible choices. We are interested in the control ID of `[f6-c-stack-by]`:

<img src="assets/fdesign_7.png" width="500"/>

Now, changing the `Stack By` control will group by the selection and the header text will reflect that change too.

<img src="assets/fdesign_8.png" width="800"/>

Adding text anywhere on a page can also be done using the `Text` element in the `UI` group of the `Element bar:

<img src="assets/fdesign_9.png" width="400"/>

Click `Publish`.

![Footer](assets/sigma_footer.png)

## Custom Theme
Duration: 5 

Sigma provides several pre-made themes, but many customers prefer using custom fonts and colors that align with their style guidelines.

Navigate to `Administration` > `Account` > `Branding Settings`.

This is where we can add fonts and configure themes:

<img src="assets/fdesign_10.png" width="800"/>

There are many options, but let's name the custom theme and then adjust each section.

Clicking the `Swap preset` link reveals the standard Sigma-provided themes:

<img src="assets/fdesign_11.png" width="600"/>

We will create our own and the changes we make will be reflected under `Theme colors` as `Custom`:

<img src="assets/fdesign_11a.png" width="450"/>

### COLOR section
For example, if we select gold for `Text`, the change is reflected (#3), and Sigma warns us that it is not the best choice due to low contrast:

<img src="assets/fdesign_12.png" width="600"/>

Set the `Text` color to standard black.

Set the `Highlight` color to the hex value, and press enter:
```code
F59A23
```

Set the `Surface` color to the hex value, and press enter:
```code
3D293D
```

Sigma provides detailed control of colors. For example, `Categorical colors` can be selected individually:

<img src="assets/fdesign_14.png" width="600"/>

Pick any colors you prefer, but here are the ten hex codes we used, in order, if you are interested in that:

<img src="assets/fdesign_15.png" width="400"/>

1: 1976D2<br>
2: F6BD16<br>
3: EF5350<br>
4: 52CBFF<br>
5: 2A8D5C<br>
6: FB9649<br>
7: 6E4BD2<br>
8: 87DC44<br>
9: F72585<br>
10: 68DFC5

`Sequential colors` are done in a similar way, but have only a start and end color to create a fade:

<img src="assets/fdesign_16.png" width="600"/>

Here are the two hex codes we used, in order, if you are interested in those:

F59A23<br>
CE7300

`Diverging colors` are done in a similar way, but have a start, middle and end color to create a center-fade:

<img src="assets/fdesign_17.png" width="600"/>

Here are the three hex codes we used, in order, if you are interested in those:

134B85<br>
F59A23<br>
3D293D

Since there are so many options, collapsing all the sections can make navigation easier:

<img src="assets/fdesign_18.png" width="400"/>

### FONT section
We will use the `Raleway` font, from the list of pre-installed fonts:

<img src="assets/fdesign_19.png" width="400"/>

### LAYOUT STYLE section
The only change here, is to uncheck the `Padding` checkbox:

<img src="assets/fdesign_20.png" width="400"/>

### TABLE STYLE section
This section has top level configuration along with three sub-sections for header, Subheader and Cell:

<img src="assets/fdesign_21.png" width="400"/>

**Subheader section**<br>

<img src="assets/fdesign_22.png" width="400"/>

**Cell section**<br>

<img src="assets/fdesign_23.png" width="400"/>

When done, click `Save`.

We can now apply the custom theme to our workbook.

![Footer](assets/sigma_footer.png)

## Apply Custom Theme 
Duration: 5 

Back in the workbook and in `Edit` mode, click in an empty area on the canvas so no elements are selected. This will make the `Workbook settings` option available:

<img src="assets/fdesign_24.png" width="800"/>

The theme is immediately applied to the workbook. For example, the `Fundamentals 5` page looks like this now:

<img src="assets/fdesign_25.png" width="800"/>

The theme is applied to all pages of the workbook:

<img src="assets/fdesign_26.png" width="800"/>

If the light purple background isn’t ideal, simply update the theme by opening the workbook settings and selecting a different canvas color:

<img src="assets/fdesign_27.png" width="800"/>

Once we get the look we like, we can update the existing theme (a huge time saver!) or create a new custom theme:

<img src="assets/fdesign_28.png" width="500"/><br><br>


<img src="assets/fdesign_29.png" width="400"/>

![Footer](assets/sigma_footer.png)

## Buttons
Duration: 5 

Using buttons is an easy way to add basic interactivity to our workbook. It also allows us to introduce Sigma Actions, which take workbooks to a whole new level-Data Apps.

Let's do something simple: add a button that users can click to navigate to a different page. 

Add a new `Button` element from the `Element bar` > `UI` group, to the `Dashboard` page.

<img src="assets/fdesign_33.png" width="800"/>

Notice that even though we have a custom theme in place, we can still override any elements properties too.

Adding a action to make the button go to another page is really simple:

<img src="assets/fdesign_34.png" width="800"/>

Test it out!

Of course, we probably want to add a button on the other page to let the user get back. 

For more information see [Intro to actions](https://help.sigmacomputing.com/docs/intro-to-actions)

There is a whole [series of QuickStarts](https://quickstarts.sigmacomputing.com/?cat=dataapps) dedicated to data apps too.

There is a ton of data app resources on our [About Sigma data apps](https://help.sigmacomputing.com/docs/data-apps) help page. Check them out!

![Footer](assets/sigma_footer.png)

## Best Practices
Duration: 5 

The following are additional things to consider when building any user-centric application.

If you are making a dashboard, report or a data app, this hold true:

***Humans see data faster than they read data.***

***Humans can process images much faster than text.***

***Humans remember far more of what they see than what they read.***

For example, when using a table (as shown below), we’re asking users to process 60 individual numbers, which is too much for the brain to quickly interpret. By visualizing the data, we reduce cognitive load; instead of scanning rows of numbers, users can grasp key insights from just five trend lines.

Want your users to identify patterns? **Use data visualization.** 

Once they grasp the big picture, they can explore the underlying data as needed.

<img src="assets/fdesign_30.png" width="800"/>

With that in mind, it follows that design is critically important to engaging the user, and giving them what they need as visually as possible is a key goal.

### The Role of Color in Design

**Humans perceive color before shape:** Color is the first thing the brain processes, making it a powerful tool for guiding attention.<br>

**Establish a consistent color identity:** Define and use organization-wide color palettes to maintain branding and visual cohesion.<br>

**Hue vs. Shade:** Hue represents the base color (e.g., red, blue, green), while shades and tints affect contrast and readability.<br>

**Use hot colors sparingly:** Reds, oranges, and yellows naturally draw attention but can become overwhelming if overused.<br>

**Consider color blindness:** Ensure accessibility by using high contrast and colorblind-friendly palettes to make visualizations inclusive.<br>

**Limit the number of colors:** Too many colors create clutter; use thoughtful palettes to differentiate data without confusion.<br>

#### Color makes us feel things
Companies invest heavily in creating emotional associations with their brand.

For example:

<img src="assets/fdesign_31.png" width="650"/>

[source: Color Psychology: How Strategic Color Choices Enhance Marketing and Brand Impact (2024)](https://www.oberlo.com/blog/color-psychology-color-meanings)

### What bad looks like
This Monthly Scorecard has several problems and is probably not well liked by the users:

<img src="assets/fdesign_32.png" width="800"/>

The main problem is, **NOTHING IS IMPORTANT**

- The colors have lost any meaning
- Lots of big, heavy text
- No white space
- In the end, it is just exhausting to look at

There are many more things to consider; these should get you thinking about it. Lastly, keep the `Five Second Rule` in mind:

- Your dashboard should provide the most relevant information in about 5 seconds.

- The top line of the dashboard must be concise, content-rich and color coded

- Serve multiple audiences at once:
  - Assume that some user will look at the top line and will never read the rest, so make it count
  - Some other users will look at the top and the second row, but never read the details. 

- Reveal more data as needed and encourge users to explore for deeper insights.

For more on this topic, check out this excellent blog: [8 Best Practices for Dashboard Design with Excellent Examples](https://www.sigmacomputing.com/blog/best-practices-dashboard-design-examples)

There are multiple samples available that have [visually appealing workbooks](https://www.sigmacomputing.com/resources/library) with video walk-throughs too. 

![Footer](assets/sigma_footer.png)

## Some Samples
Duration: 5

Sigma offers a diverse range of interface options to accommodate various use cases—some of which you may not have even considered. 

Below are a few examples showcasing what others have already created.

### Full featured dashboard

<img src="assets/bigbuys_1.png" width="800"/>


### Google analytics

<img src="assets/bigbuys_3.png" width="800"/>

### Bill of Lading (Pixel perfect)

<img src="assets/bigbuys_2.png" width="800"/>

### Newsletter creator using AI

Configure the AI prompt:
<img src="assets/bigbuys_4.png" width="800"/>

Get a newsletter!
<img src="assets/bigbuys_5.png" width="800"/>

There are multiple samples available that have [visually appealing workbooks](https://www.sigmacomputing.com/resources/library) with video walk-throughs too. 

![Footer](assets/sigma_footer.png)

## What we've covered
Duration: 5

In this QuickStart, we covered the basics of using Sigma design elements to enhance the appearance of your project. 

For more information see [Create and manage workbook themes](https://help.sigmacomputing.com/docs/create-and-manage-workbook-themes)

The next QuickStart in this series covers [administration in Sigma.](https://quickstarts.sigmacomputing.com/guide/fundamentals_8_administration_v3/index.html?index=..%2F..index#0)

If you are not an administrator, you may be interested in [Fundamentals 9: Beyond the Basics.](https://quickstarts.sigmacomputing.com/guide/fundamentals_9_beyond_the_basics_v3/index.html?index=..%2F..index#0)

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
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
