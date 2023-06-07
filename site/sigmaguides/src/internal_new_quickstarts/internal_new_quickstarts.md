author: pballai
id: internal_new_quickstarts
summary: This is a sample Sigma Guide
categories: PLEASE PROVIDE FROM LIST BELOW
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: internal

# Setup Local Development

## Overview 
Duration: 5 


Snowflake Quickstarts are interactive tutorials and self-serve demos written in markdown syntax. Quickstarts provide a unique step-by-step reading experience and automatically saves tutorial progress for readers. These tutorials are published at quickstarts.snowflake.com

You can submit your own Quickstarts to be published on Snowflake's website by submitting a pull request to this repo. This repository contains all the tools and documentation you’ll need for building, writing, and submitting your own Quickstart!

 ### Target Audience
Content creators interested in publishing to Sigma QuickStarts.

### Prerequisites

1. [Install HomeBrew](https://brew.sh)

2. [Install Node 14](https://nodejs.org/en/download/); 
      - `brew install node@14`

3. Install gulp-cli 
      - `npm i -g gulp-cli`

4. [Install Go](https://golang.org/doc/install); 
      - `brew install golang`

5. Install claat 
      -  `go install github.com/googlecodelabs/tools/claat@latest`
      - Ensure go and claat is in your `PATH` [claat path setup](http://localhost:8000/guide/internal_new_quickstarts/index.html?index=..%2F..internal#4)

6. [Install VSCode from Microsoft](https://code.visualstudio.com/download)

7. [Install GitHub Desktop](https://desktop.github.com/)

8. Create a GitHub account for yourself. Use a non-work email to make things easier.

9. **Recommended**: install the live-reload plugin for Chrome: 
      -  [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## **Deploy Locally**
Duration: 20

Once the pre-requisites have been installed, we can make a local copy of the QuickStarts GitHub repo.

  1. Fork this repository to your personal github account (top right of webpage, `fork` button)
  2. Clone your new fork `git clone https://github.com/<YOUR-USERNAME>/sigmaquickstarts.git sigmaquickstarts`
  3. Navigate to the site directory `cd sigmaquickstarts/site`
  4. Install node dependencies `npm install`
  5. Run the site `npm run serve`


![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## Write Your First Quickstart
Duration: 5
**Before you write your first QuickStart, we recommend you:**

1: Review the [QuickStart Style Guide](https://quickstarts.sigmacomputing.com/guide/sigma-style-guide/#0). 

We want to try and give the consumer a uniform look and feel for QuickStarts and the Style Guide will give you everything you need to deliver on that.

2: Please only use the "new Template" method described later when creating a QuickStart.<br>

**Steps:**<br>
  1. Terminate the running server with `ctrl C` and and navigate to the `sigmaguides` source directory `cd sigmaguides/src`
     - In this directory, you will see all existing guides and their markdown files.
  2. Generate a new guide from the guide template `npm run template <GUIDE_NAME>` 
      - Don't use spaces in the name of your guide, instead use underscores.
      - For Standalone QuickStarts just create a simple name that describes it.
      - For Series QuickStarts use the format {SeriesName} #: {Name}
          - for example, Fundamentals 2: Working with Tables<br>
NOTE: The file name is not what appears in the portal; that is defined in the QuickStart itself.

  3. Navigate to the newly generated guide (`cd sigmaguides/src/<GUIDE_NAME>`) and edit your guide in VSCode.
  4. Run the website again `npm run serve`
  5. As you edit and save changes, your changes will automatically load in the browser.
  
To see QuickStarts in your local browser, navigate to:
http://localhost:8000/

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION -->

## GitHub
Duration: 5

1. Make a new branch in GitHub Desktop
2. Make your changes in VSCode and save/commit them
3. Publish your branch to GitHub using GitHub Desktop
4. Create a Pull Request (PR) in GitHub Desktop
5. Open this repository on GitHub.com
6. Open the Pull Request and set an approver to Namdar
7. Sigma will review and approve the submission
8. Verify the QuickStart is live once you get an email that the Pull Request was approved

Once approved, the QuickStart will be live in under 5 min.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION -->

## Common Errors
Duration: 5

### 1. Claat related errors
   - Make sure Go is properly in your `PATH`. Add the following lines to your profile (`~/.profile`, or `~/.zshrc`):
````bash
#adding Golang to path
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin
````
  ***Note:** After adding Go to your `PATH`, be sure to apply your new profile: `source ~/.profile` or `source ~/.zshrc`*

### 2. You get a `EACCES` error when installing `gulp-cli`
   - This means that your npm location needs to be updated. Follow the steps here: [Resolve EACCESS permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory)

### 3. You get `Error: Cannot find module 'postcss'` when running `npm run serve` 
   - The module may not have been installed for some reason so run `npm install --save-dev postcss gulp-postcss` and then rerun `npm run serve` 

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION -->
<!-- END OF QUICKSTART -->