author: pballai
id: embedding_12_secure_embedding_into_streamlit
summary: embedding_12_embedding_into_streamlit
categories: Embedding
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-10-17

# Embedding 12: Secure Embedding into Streamlit
<!-- The above name is what appears on the website and is searchable. -->

## Overview 
Duration: 5 

This QuickStart will guide you through the implementation of a quick, easy, and rapid to develop method to embed Sigma content in a Streamlit application. Embedding Sigma content within Streamlit applications is a powerful tool-set that enables and empowers developers, data analysts, and even business users to create interactive data applications backed by the power of Sigma.

### What is Streamlit
Streamlit is an open source app framework in Python language. It will help us to create interactive web apps for data science and machine learning in a short time. It is compatible with all major Python libraries, such as scikit-learn, Keras, PyTorch, SymPy(latex), NumPy, pandas, Matplotlib, and more.

Streamlit is intended to provide Snowflake users the ability to rapidly deploy applications and share data.

**Teams use Streamlit to build Python applications to benefit from:**
<ul>
    <li>Rapid Development Cycle</li>
    <li>Simplified Coding Experience</li>
    <li>Flexible Components</li>
    <li>Internal or External Facing</li>
    <li>Extensible Embedding</li>
</ul>

Streamlit works great with Sigma to accelerate your path of deployment for any data applications built, especially those that rely on visualizations, while providing the user with our industry-differentiated ability to deep dive into the data powering those visuals and unlocking the power of your data warehouse.

**Building the analytics front-end In Sigma provides:**
<ul>
    <li>End users a familiar, spreadsheet-like interface.</li>
    <li>No Code or Semantic knowledge required.</li> 
    <li>Full Role-based Access Control Support.</li>
    <li>Data Governance and Lineage.</li> 
    <li>Full Feature Set While Embedded.</li>
    <li>Ability to leverage massive datasets</li>
</ul>

 ### Target Audience
Snowflake customers who are using (or interested in using) Streamlit and want to also embed Sigma content in a Streamlit application. Sigma customer who are looking to rapidly develop and deploy data applications in Streamlit.

### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to your Sigma environment. A Sigma trial environment is acceptable and preferred.</li>
  <li>A development environment (or RTE) of your choice. In this QuickStart we use Microsoft VSCode with related extensions.</li>
  <li>A Python 3.8, or later, environment. In this QuickStart we use Miniconda for the required Python environment and packages as a Python Virtual Environment is recommended.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Microsoft VSCode](https://code.visualstudio.com/download)</button> <button>[Miniconda](https://docs.conda.io/en/latest/miniconda.html)</button>
  
### What You’ll Learn
What is Snowflake Streamlit and how can we embed Sigma content into it.

### What You’ll Build

We will use Streamlit and Sigma to build a webpage that embeds a Sigma dashboard:

<img src="assets/sl19.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## **Setup Python**
Duration: 20

We will start by setting up our local Python environment based on Miniconda, which is a "thin" version of Conda (Anaconda). If you already have an existing Python environment, you may make use of that or proceed with Miniconda as well.

Conda is an open-source, cross-platform, language-agnostic package manager and environment management system. It was originally developed to solve difficult package management challenges faced by Python data scientists, and today is a popular package manager for Python and R.

Miniconda is the much smaller (~200 MB vs. ~4+ GB) installer version of Conda and will save us time and disk-space compared with installing the full Conda application.

It includes only Conda, Python, the packages they depend on, and a small number of other useful packages, including pip, zlib and a few others. Packages that are not included, have to be called at runtime or installed individually.

Use the following link to download the Miniconda. Download the version that includes Python 3.8 or above based on your operating system and its processor (x86 32 bit or 64 bit, Apple Silicon, or etc.)

[Use the following link to download the Miniconda.](https://docs.conda.io/en/latest/miniconda.html) Download the version that includes **Python 3.8 or above** based on your operating system and its configuration (32 bit or 64 bit).

<aside class="negative">
<strong>NOTE:</strong><br> Snowpark requires Python version 3.7 or later.
</aside>

After downloading the operation system appropriate version from Miniconda, go ahead and run the installation, accepting the license and all the defaults.

<img src="assets/sp4.png" width="800"/>

Now that Miniconda is installed (along with our selected version of Python; v3.8), we can move to the next step.

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## **Setup VSCode**
Duration: 20

[Install VSCode from Microsoft's download site.](https://code.visualstudio.com/download)

Run the installation with all defaults.

Once the software is installed, we need to configure it for our use case. 

Open VSCode and click the sidebar icon for `Extentions`. 

Search for `Python` and select the extension from the list as shown. Click `Install`:

<img src="assets/sp1.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> VSCode may notify you (in the lower left corner of the application) that it requires a restart. Go ahead and select restart. This is required when the extension needs to perform additional registration with VSCode.
</aside>

<img src="assets/sp2.png" width="500"/>

<aside class="negative">
<strong>NOTE:</strong><br> Microsoft has made a Python extension for VSCode and you may want to install that as well although not required to complete this QuickStart. Pylance enhances productivity, minimizes the likelihood of errors, and improves the overall efficiency of writing Python code in VS Code.
</aside>

[Link to Pylance Extension page.](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

We now have a development environment ready, but we need to do a few more steps.

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## **Create a Python Environment**
Duration: 20

Since we installed Miniconda, every available Conda package is not present in our system. While this saves install time and saves disk-space, we will have to be aware that each VScode project will need to have required package dependencies installed at runtime. 

We could solve this by installing packages globally, but we prefer to avoid that and maintain tight control of our development environment. 

To properly support this control, we will make use of `Python environments` to create project/package isolation. 

For our first project, we will create a Python environment called `streamlit`.

In our local computer, navigate to where Miniconda is installed. The default is based on your computer username.

Right-click and open a terminal session:

<img src="assets/sp5.png" width="500"/>

First, let's see what environments already exist. Run the command:
```plaintext
conda env list
```

We should see the "base" environment that is included with Miniconda. 

<img src="assets/sp6.png" width="800"/>

Now let's create our "streamlit" environment for our VSCode project. Run the command:
```plaintext
conda create --name streamlit python=3.8
```

When prompted to proceed, type `y` and hit return:

<img src="assets/sp7.png" width="600"/>

We need to activate our new environment. Run the command:
```plaintext
conda activate streamlit
```

Listing the environments again, we should see `streamlit` being the current select noted by the "*":
```plaintext
conda env list
```

<img src="assets/sl1.png" width="800"/>

We are ready with our new Conda environment called `streamlit`. 

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## Install Streamlit

<aside class="negative">
<strong>NOTE:</strong><br> The following instructions demonstrate installation on MacOS, your installation will differ somewhat on a different operating system.
</aside>

To install Streamlit on our local computer, execute the following command in Terminal:
```plaintext
pip install streamlit
```

A lot of information will be displayed and the command prompt will appear when done. There should be no error messages:

<img src="assets/sl4.png" width="800"/>

Now we can test our local Streamlit environment. Execute the following command in Terminal:
```plaintext
streamlit hello
```

Click the `Allow` button to allow Python to accept incoming network connections:

<img src="assets/sl6.png" width="800"/>

The following prompt should appear in terminal asking for email address (we will skip over that, so leave it blank and press `Enter`):

<img src="assets/sl5.png" width="800"/>

Streamlit will automatically open your default browser to the standard webpage that comes with Streamlit:

<img src="assets/sl7.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Streamlit uses port 8501 on your local computer. This port is not commonly used, but if it happens to be in use, you will need to stop the other service temporarily. If port 8501 is unavailable, or if you are running multiple Streamlit apps, it will try to launch on subsequent ports such as 8502, 8503, etc. However, you may still want to stop other services temporarily.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF NEXT SECTION-->

## Source Code from Git
Duration: 5 

To make this easier, we have stored the project code in Git. While you may clone the entire repository (it is not that large), we want to avoid cloning sections of the repository that are not of immediate interest. 

Instead, we will use VSCode and terminal to perform a git `sparse-checkout` of the specific project folder we are interested in. A few extra steps, but cleaner local project folder. 

Open `VSCode` and a new `terminal` session.

In terminal, navigate to the desired directory where we want to clone the repo folder into.

For example:
```code
cd {/path/to/your/directory}
```

Make a new directory:
```code
mkdir embedding_streamlit
```

Change to the new directory:
```code
cd embedding_streamlit
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
echo "embedding-streamlit/" >> .git/info/sparse-checkout
```

At this point, we have run each command and not seen any errors.

Finally, pull the specified folder from the repository:
```code
git pull origin main
```

After the command runs, click the button to `Open Folder`:

We can now see the project called `embedding-streamlit`:

<img src="assets/sp11.png" width="800"/>

The project has almost everything we need, but we will need some embedded content and credentials from Sigma before we can test this out.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Sigma Embed Content
Duration: 20

We will need something to embed into Streamlit from Sigma. To keep this simple, we will embed the `Plugs Electronics Profit Planning Tool Template.`

Log into Sigma (as Administrator) and navigate to `Templates` and click the `Plugs Profit Planning Tool Template`:

<img src="assets/sl14.png" width="800"/>

Dismiss the pop-up help regarding swapping of data sources. We will just use the sample data provided.

Click the `Save As` button in the upper right corner and use the name `Sigma Dashboard`; click `Save`.

Now click the drop menu (as shown below) and select `Embedding`:

<img src="assets/sl15.png" width="500"/>

In the `Embed workbook` pop-up, click the `Secure` tab, and then the drop arrow, followed by the `Profit Planning Tool`. This will define all the elements on the Workbook's Dashboard page to be embedded. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma embedding supports a Workbook, Page or any Elements to be embedded into external applications.
</aside>

<img src="assets/sl16a.png" width="600"/>

Once we selected to embed the `Profit Planning Tool`, we are presented with the `Embed path`.

Click `Copy` to select the `Embed path` and paste it into a text file; we will use it in the next step:

<img src="assets/sl17a.png" width="600"/>

### Share with Team
We need to share our workbook with a Sigma team. Creating a team is an `Administration` function in Sigma. To learn how to to create a team in Sigma, see [here.]()

### Sigma Embed Credentials
We will now create credentials that will be used to secure the embed in Streamlit.

Navigate to `Administration` > `Developer Access`:

<img src="assets/ae1.png" width="800">

Click `Create New`, located in the page's top right corner. This will open the `Create client credentials` modal.

Under `Select privileges` select `Embedding`.

Enter a `Name` and `Description` as you see fit.

Under `Owner`, select an organization member with the account type you would like to associate with the embed secret. For now, just select yourself or an `Administrator`.

<img src="assets/ae2.png" width="600">

<aside class="negative">
<strong>NOTE:</strong><br> Some customers elect to have a "Service Account" user with administrative privileges for this "owner" assignment.
</aside>

Click `Create.`

Copy the provided `ClientID` and `Secret` and store them:

<img src="assets/ae1a.png" width="600">

Click `Close.`

Paste the credentials into a known safe location in case they are needed again in the future. 

We can use these credentials for all embeds, but you may create as many credentials as you prefer.

### Variables management
Our project separates variables into a file called `.env`.

This approach is helpful for storing configuration variables and secrets (like API keys and database passwords) outside of your main codebase, enhancing security and flexibility.

We need to install the `python-dotenv` package to load environment variables from a `.env` file. 

Run the following command in a VSCode terminal session to install the `python-dotenv` package:
```code
pip install python-dotenv
```

<img src="assets/ae3.png" width="800">

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Testing the Secure Embed in Streamlit

Open the `embedding-streamlit` folder in VSCode and open the `.env` file.

**Make sure to replace the placeholder values with your actual values for the four variables:**

<img src="assets/ae4.png" width="800"/>

After updating `.env` with your values, `save` the file.

Open a new terminal window in VSCode and run the command:
```code
conda activate streamlit
```

Start the Streamlit app:
```code
streamlit run app.py
```

<img src="assets/ae4a.png" width="800"/>

The default browser should open and display the webpage with the Sigma embed inside it:

<img src="assets/sl19.png" width="800"/>

Congratulations, you have setup your Streamlit app with a secure Sigma embed.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned what is Streamlit and how to Embed Sigma into Streamlit application that we built together.

If you would like to learn more about Streamlit, there is a [video series available.](https://www.youtube.com/watch?v=bfw28e6v4_s)

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)

[Streamlit Documentation](https://docs.streamlit.io/)<br>
[Get started with Streamlit](https://docs.streamlit.io/library/get-started)<br>
<br>

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
