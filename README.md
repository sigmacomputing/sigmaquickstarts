# Sigma Quickstarts

## What are Sigma Quickstarts?
Sigma Quickstarts are interactive tutorials and self-serve demos written in markdown syntax. Quickstarts provide a unique step-by-step reading experience and automatically saves tutorial progress for readers. These tutorials are published at [quickstarts.sigmacomputing.com](https://quickstarts.sigmacomputing.com)

You can submit your own Quickstarts to be published on Sigma's website by submitting a pull request to this repo. This repository contains all the tools and documentation you’ll need for building, writing, and submitting your own Quickstart!

<aside class="postive">
<strong>IMPORTANT:</strong><br> Please register your intent to create a QuickStart here so that others know it exists or is planned.
</aside>

[Visit QuickStart Content Log](https://docs.google.com/spreadsheets/d/1Jnfx3cXQoRHNvnbZ05qv1xbWAlbRas3Zi7y_-2peEsw/edit?usp=sharing)

## What's special about the Quickstart format?

* Powerful and flexible authoring flow in Markdown text
* Ability to produce interactive web or markdown tutorials without writing any code
* Easy interactive previewing
* Usage monitoring via Google Analytics
* Support for multiple target environments or events (conferences, kiosk, web, offline, etc.)
* Support for anonymous use - ideal for public computers at developer events
* Looks great, with a responsive web implementation
* Remembers where the student left off when returning to a quickstarts
* Mobile friendly user experience

## Getting Started

### Prerequisites

  1. [Install Node 14](https://nodejs.org/en/download/); Homebrew installed? `brew install node@14`
     - Install gulp-cli `npm i -g gulp-cli`
  2. [Install Go](https://golang.org/doc/install); Homebrew installed? `brew install golang`
     - Install claat `go install github.com/googlecodelabs/tools/claat@latest`
     - Ensure go and claat is in your `PATH` [claat path setup](#claat-related-errors)
  3. **Optional**: install the live-reload plugin for Chrome: [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

### Run locally

  1. Fork this repository to your personal github account (top right of webpage, `fork` button)
  2. Clone your new fork `git clone https://github.com/<YOUR-USERNAME>/sigmaquickstarts.git sigmaquickstarts`
  3. Navigate to the site directory `cd sigmaquickstarts/site`
  4. Install node dependencies `npm install`
  5. Run the site `npm run serve`

Congratulations! You now have the Sigma Quickstarts landing page running.

### Common Errors

#### 1. Claat related errors
   - Make sure Go is properly in your `PATH`. Add the following lines to your profile (`~/.profile`, or `~/.zshrc`):
````bash
#adding Golang to path
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin
````
  ***Note:** After adding Go to your `PATH`, be sure to apply your new profile: `source ~/.profile` or `source ~/.zshrc`*

#### 2. You get a `EACCES` error when installing `gulp-cli`
   - This means that your npm location needs to be updated. Follow the steps here: [Resolve EACCESS permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory)

#### 3. You get `Error: Cannot find module 'postcss'` when running `npm run serve` 
   - The module may not have been installed for some reason so run `npm install --save-dev postcss gulp-postcss` and then rerun `npm run serve` 

## Write Your First Quickstart
**Before you write your first QuickStart, we recommend you:**

1: Watch this video on how to create your first QuickStart:<br> 
[<img src="./site/app/images/styleguidethumbnail.png" width="600">](https://youtu.be/m4DbElos2bI)

2: Review the [QuickStart Style Guide](https://quickstarts.sigmacomputing.com/guide/sigma-style-guide/). We want to try and give the consumer a uniform look and feel for QuickStarts and the Style Guide will give you everything you need to deliver on that.**

**3: Please only use the new Sales Performance Template when creating a QuickStart that needs to make use of pre-built content.<br>**
<img src="./site/app/images/salesperformance_dashboard.png" width="800"/>

**Steps:**<br>
  1. Terminate the running server with `ctrl C` and and navigate to the `sigmaguides` source directory `cd sigmaguides/src`
     - In this directory, you will see all existing guides and their markdown files.
  2. Generate a new guide from the guide template `npm run template <GUIDE_NAME>` 
      - Don't use spaces in the name of your guide, instead use underscores.
      - For Standalone QuickStarts just create a simple name that describes it.
      - For Series QuickStarts use the format {SeriesNamn} #: {Name}
          - for example, Fundamentals 2: Working with Tables
          - **NOTE: Then file name is not what appears in the portal; that is defined in the QuickStart itself.**
  3. Navigate to the newly generated guide (`cd sigmaguides/src/<GUIDE_NAME>`) and edit your guide in a tool like vscode.
  4. Run the website again `npm run serve`
  5. As you edit and save changes, your changes will automatically load in the browser.

### Tips

- The following list of Quickstart categories are:
    - Administration
    - Controls
    - Embedding
    - Functions
    - Fundamentals
    - Partners
    - Tables
    - Use Cases
    - Visualizations
  
- If you want to suggest a new category please create a github issue!
- Checkout [how to use VS Code to write markdown files](https://code.visualstudio.com/docs/languages/markdown)
- If you want to learn more about Quickstarts, check out this [excellent tutorial](https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)

## How do I get my Sigma Quickstart on [quickstarts.sigmacomputing.com](https://quickstarts.sigmacomputing.com)?

1. You will need to sign Sigma's CLA 
2. Fork this repository
3. Clone it to your local system
4. Make a new branch
5. Make your changes
6. Push it back to your repo
7. Open this repository on GitHub.com
8. Click the Pull Request button to open a new pull request
9. Sigma will review and approve the submission

To learn more how to submit a pull request on GitHub in general, checkout github's [official documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).
