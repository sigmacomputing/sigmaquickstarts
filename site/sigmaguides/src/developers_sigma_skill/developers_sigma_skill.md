author: pballai
id: developers_sigma_skill
summary: developers_sigma_skill
categories: developers
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-06-20

# Sigma Skills for AI Assistants

## Overview
Duration: 5

Use Sigma's open-source agent skills to give AI coding assistants direct knowledge of Sigma's REST API and data modeling workflows — then put them to work building against Sigma without writing boilerplate from scratch.

Sigma publishes agent skills through the [sigma-agent-skills](https://github.com/sigmacomputing/sigma-agent-skills) GitHub repository. These skills are reference files that tell a coding agent how to authenticate with Sigma, call the API, and create or update data models — the same patterns you'd write by hand, now available to any supported AI assistant automatically.

In this QuickStart, you'll learn how to:
- Understand what Sigma agent skills are and what each skill provides
- Install Sigma agent skills in Claude Code but skills can be used in others such as OpenAI Codex, Snowflake Cortex Code, or Cursor
- Use the `sigma-api` skill to authenticate and make API calls through an AI assistant
- Use the `sigma-data-models` skill to create and update data models through natural language prompts

<aside class="negative">
<strong>NOTE:</strong><br> At the time of this QuickStart, Sigma agent skills were at v0.1.2 and represent Sigma's first open-source release. Available skills and installation steps may change as the project matures. Always refer to the <a href="https://github.com/sigmacomputing/sigma-agent-skills">sigma-agent-skills repository</a> for the latest version.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
This QuickStart is for developers and technical users who work with AI coding assistants and want to use them to build against Sigma's REST API or manage data models programmatically.

### Prerequisites

<ul>
  <li>A Sigma account with API access enabled</li>
  <li>A Sigma API client ID and client secret — see <a href="https://help.sigmacomputing.com/docs/generate-api-client-credentials">Generate API client credentials</a></li>
  <li>One of the following AI coding assistants installed: Claude Code, OpenAI Codex, Snowflake Cortex Code, or Cursor</li>
  <li>Git installed locally (required if using Codex and Cursor installations)</li>
  <li>Can Edit or Admin permission on relevant Sigma resources</li>
</ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What Are Sigma Agent Skills?
Duration: 5

Agent skills are structured reference files that tell an AI coding assistant how to work with a specific platform or API. 

Instead of relying on the agent's general training data — which may be outdated or incomplete — skills give the agent precise, current instructions it can follow during a session.

Sigma's agent skills are open source and distributed through the [sigma-agent-skills](https://github.com/sigmacomputing/sigma-agent-skills) GitHub repository. When installed, they extend your AI assistant with Sigma-specific knowledge so you can interact with Sigma's APIs using natural language prompts rather than writing raw API calls by hand.

At the time of this QuickStart there are two skills available with many more planned.

**sigma-api:**<br>
Provides the agent with instructions for authenticating to Sigma's REST API using client credentials. This includes how to obtain a bearer token, how to pass it in API requests, and troubleshooting guidance for common authentication errors. With this skill active, you can ask the agent to list workbooks, retrieve document metadata, manage members, or perform any other operation exposed by [Sigma's REST API.](https://help.sigmacomputing.com/docs/get-started-with-sigmas-api)

**sigma-data-models:**<br>
Provides the agent with instructions for creating and managing Sigma data models programmatically. This includes the authentication flow, how to gather metadata about available connections and tables, and how to construct and submit data model specifications. With this skill active, you can ask the agent to build a new data model, update an existing one, or inspect what's already deployed.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Agent skills make Sigma's APIs accessible to anyone who can write a prompt. Developers get a faster path to API-driven workflows; technical analysts and builders can automate tasks that would otherwise require reading API documentation and writing code from scratch.
</aside>

### How Skills Work

When a skill is loaded into an AI assistant, the assistant reads the skill's reference files at the start of a session. From that point forward, it uses those instructions to guide its API calls, authentication steps, and troubleshooting decisions — without you needing to supply that context manually.

The skills wrap Sigma's APIs but do not replace them. **You still need a valid Sigma account and API credentials.** The agent handles the mechanics; your credentials and permissions determine what it can do.

<!-- dss_01.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Generate ClientID / Secret
Duration: 10

In preparation for using the API we need to use Sigma to generate a new API Token.

Log onto Sigma (as Administrator). Navigate to `Administration`, `Developer access`.

Click the `Create New` button:

<img src="assets/pm11.png" width="800"/>

Select `REST API`, give it a name and description. Some customers create a `Service Account` user for automation purposes; this is a best practice. Since we are just testing, you can choose any `Admin` user you prefer. Click `Create`.

<img src="assets/pm12.png" width="600"/>

Copy the `ClientID` and `Secret` from the popup and save them to a secure location. We will use them later. Close the popup:

<img src="assets/pm13.png" width="500"/>

Also copy the `API base URL`:

<img src="assets/pm14.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END -->

## Install the Skills
Duration: 10

This section walks through setup using VSCode with Claude Code. For installation on other platforms, see [Install skills for AI assistants](https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants).

### Create a Working Directory

Create a dedicated folder for this project. Open a terminal and run:

```copy-code
mkdir sigma-skills-demo
cd sigma-skills-demo
```

### Open in VSCode

From the same terminal, open the folder in VSCode:

```copy-code
code .
```

<aside class="positive">
<strong>NOTE:</strong><br> If the <code>code</code> command is not found, open VSCode manually, then select <code>File</code> > <code>Open Folder</code> and navigate to the folder you just created.
</aside>

### Open an Integrated Terminal

In VSCode, open the integrated terminal with `Terminal` > `New Terminal`. This keeps your work in a single window.

### Store Your API Credentials Securely

The Sigma skills authenticate using your API client ID and client secret. Rather than entering credentials directly into prompts — where they can appear in session logs or chat history — store them in a `.env` file in your project folder and load them as shell environment variables. Claude Code inherits environment variables from the shell it was launched from, so loading credentials before starting Claude is the cleanest approach.

**Step 1:**<br>
In VSCode, create a new file named `.env` in the `sigma-skills-demo` folder with the following content, replacing the placeholder values with your actual credentials:

```copy-code
export SIGMA_CLIENT_ID=your_client_id_here
export SIGMA_CLIENT_SECRET=your_client_secret_here
export SIGMA_BASE_URL=https://aws-api.sigmacomputing.com
```

<img src="assets/dss_03.png" width="800"/>

<aside class="positive">
<strong>NOTE:</strong><br> The <code>SIGMA_BASE_URL</code> value above is for Sigma environments hosted on AWS. If your organization uses a different cloud provider, use the base URL that matches your Sigma environment. You can confirm this from the API reference in your Sigma admin settings.
</aside>

**Step 2:** In the VSCode terminal, load the environment variables into your shell session:

```copy-code
source .env
```

There is no reply in terminal unless there is an error.

These variables are now available in the current shell session. Starting Claude Code after this step ensures it inherits `SIGMA_CLIENT_ID`, `SIGMA_CLIENT_SECRET`, and `SIGMA_BASE_URL` automatically — no credentials in any prompt.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Run <code>source .env</code> each time you open a new terminal session. Environment variables set this way do not persist across sessions.
</aside>

### Start Claude Code

From the VSCode terminal, start Claude Code:

```copy-code
claude
```

Claude Code launches in the terminal, ready to accept commands.

<img src="assets/dss_04.png" width="800"/>

### Install the Sigma Skills

With Claude Code running, install the Sigma plugin using these two commands in sequence.

The first command registers the sigma-agent-skills repository as a marketplace source:

```copy-code
/plugin marketplace add https://github.com/sigmacomputing/sigma-agent-skills.git
```

The response will be:
```code
Successfully added marketplace: sigma-computing
```

The second installs the Sigma plugin from that source:

```copy-code
/plugin install sigma-computing@sigma-computing
```

Claude Code displays an interactive panel showing the plugin details and a trust warning before proceeding. Review the details, then use the arrow keys to select an installation scope and press `Enter` to confirm.

The three scope options are:

- `Install for you (user scope)` — installs the plugin globally for your user account, making it available in any Claude Code session on this machine. **Recommended for most users.**
- `Install for all collaborators on this repository (project scope)` — installs the plugin for the current repository, shared with anyone who works in it.
- `Install for you, in this repo only (local scope)` — installs only for your account in this specific repository.

<aside class="positive">
<strong>NOTE:</strong><br> Select <code>Install for you (user scope)</code> if you want the Sigma skills available across all your projects. Select one of the repository-scoped options if you prefer to limit the plugin to a specific project.
</aside>

The response will be:
```code
Installed sigma-computing. Run /reload-plugins to apply.
```

Run the reload command to activate the plugin in the current session:

```copy-code
/reload-plugins
```

The response will confirm the plugin loaded:
```code
Reloaded: 1 plugin · 0 skills · 5 agents · 0 hooks · 0 plugin MCP servers · 0 plugin LSP servers
```

<aside class="positive">
<strong>NOTE:</strong><br> The <code>0 skills</code> in this output refers to Claude Code's own internal skill definitions — not Sigma agent skills. The Sigma plugin loads as a plugin, which is why the count shows <code>1 plugin</code>. This is expected.
</aside>

For reference, see [Claude Code plugin discovery](https://code.claude.com/docs/en/discover-plugins)

### Other AI Assistants

For assistants not directly listed in Sigma's documentation, manually reference the skill files located in the `skills/` directory of the cloned repository. Add them to your assistant's context using whatever mechanism that tool provides for injecting reference documents — custom instructions, system prompts, context files, or similar.

<aside class="positive">
<strong>IMPORTANT:</strong><br> These tools are released under the Apache 2.0 License.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Using the sigma-api Skill
Duration: 10

With the skill installed and credentials loaded into the environment, we are ready to provide the assistant with prompts that use Sigma's REST API. This section walks through the basic flow using Claude Code as the primary example. The same prompt patterns apply in other supported assistants.

### Credentials

If you completed the setup in the previous section, your credentials are already loaded as environment variables (`SIGMA_CLIENT_ID`, `SIGMA_CLIENT_SECRET`, and `SIGMA_BASE_URL`). Claude Code inherits these from the shell, so the agent can authenticate without you supplying credentials in any prompt.

### Authenticate and Make an API Call

Let's use the skill's authentication instructions to obtain a bearer token using your environment variables, then passes it in subsequent API requests.

A simple starting prompt:

```copy-code
Using my Sigma API credentials from the environment, list all the workbooks I have access to.
```

The agent will:
1. Read `SIGMA_CLIENT_ID` and `SIGMA_CLIENT_SECRET` from the shell environment
2. Follow the skill's instructions to obtain a bearer token from the Sigma token endpoint
3. Call the appropriate Sigma REST API endpoint
4. Return the results in a readable format

<aside class="negative">
<strong>TROUBLESHOOTING:</strong><br> If you receive an error such as <em>"The script's allowlist doesn't include [your-api-url]"</em>, the plugin's network allowlist does not include your Sigma instance's regional API endpoint. This is a known limitation in early versions of the skill. Check the <a href="https://github.com/sigmacomputing/sigma-agent-skills/issues">sigma-agent-skills issue tracker</a> for updates, or open a new issue with your API base URL so it can be added to the allowlist.
</aside>

<!-- dss_07.png -->

### Example Prompts

With the `sigma-api` skill active, you can prompt the agent to perform any operation the Sigma REST API supports. Some practical examples:

```copy-code
List all members in my Sigma organization.
```

```copy-code
Get the details for the workbook named "Sales Dashboard".
```

```copy-code
List all connections available in my Sigma environment.
```

```copy-code
Create a new folder called "Analytics Reports" in the shared workspace.
```

The agent translates these prompts into authenticated API calls using the skill's reference instructions. It also applies the skill's troubleshooting guidance if authentication fails or an API call returns an error.

### Working with API Results

The agent returns results as structured text or code, depending on how you frame the prompt. To get output you can use downstream, be specific about the format:

```copy-code
List all workbooks and return the results as a JSON array with workbook ID and name only.
```

```copy-code
Get all members and save the results to a file named sigma_members.csv.
```

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Tasks that would normally require reading API documentation, constructing curl commands, and managing token expiration are reduced to a single prompt. This is particularly useful for developers building integrations or automating repetitive Sigma administration tasks.
</aside>

For a full reference of available Sigma REST API endpoints, see the [Sigma API documentation](https://help.sigmacomputing.com/reference/get-started-sigma-api).

<!-- dss_08.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Using the sigma-data-models Skill
Duration: 10

The `sigma-data-models` skill gives your AI assistant the instructions it needs to create and manage Sigma data models programmatically. This section walks through how to prompt the agent to build a new data model and update an existing one.

### How the Skill Approaches Data Model Creation

Before creating a data model, the agent needs to gather metadata about your Sigma environment — specifically, which connections are available and which tables exist in a given connection. The `sigma-data-models` skill includes instructions for this metadata-gathering step, so the agent handles it automatically when you reference a connection or table in your prompt.

The general flow is:
1. Agent authenticates using your API credentials
2. Agent queries available connections in your Sigma environment
3. Agent retrieves table metadata from the relevant connection
4. Agent constructs a data model specification and submits it via the API

### Create a New Data Model

Describe what you want to model and where the data lives:

```copy-code
Create a new Sigma data model using the PLUGS_ELECTRONICS schema in our Snowflake connection. Include the TRANSACTIONS table.
```

The agent authenticates, gathers the necessary metadata from your connection, builds the data model specification, and submits it to Sigma's API.

<!-- dss_09.png -->

You can be more specific about the columns and relationships you want included:

```copy-code
Create a data model from the ORDERS and CUSTOMERS tables in the SALES schema of our Snowflake connection. Join them on CUSTOMER_ID.
```

### Update an Existing Data Model

To modify an existing data model, reference it by name and describe the change:

```copy-code
Add the RETURNS table to the existing "Sales Overview" data model. Join it to ORDERS on ORDER_ID.
```

```copy-code
Update the "Inventory" data model to include a calculated column: DAYS_IN_STOCK as the difference between RECEIPT_DATE and today's date.
```

The agent retrieves the current data model definition, applies the requested changes, and submits the updated specification back to the API.

### Inspect Deployed Data Models

Use the skill to read what's already in your environment:

```copy-code
List all data models in my Sigma organization.
```

```copy-code
Show me the current definition of the "Revenue" data model.
```

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Treating data models as code — defined in prompts, versioned in Git, deployed through API calls — applies modern software engineering practices to analytics infrastructure. Sigma agent skills make this accessible without requiring deep API knowledge, so more people on a team can contribute to data model management.
</aside>

For more on Sigma data models and their structure, see [Data models](https://help.sigmacomputing.com/docs/data-models).

<!-- dss_10.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Extending and Customizing Skills
Duration: 5

The published Sigma skills work out of the box for standard API and data model workflows, but many organizations have conventions and context that make a customized version more effective. Because the skills are open source and built from plain text reference files, extending them is straightforward.

### Clone the Repository

Start by cloning the sigma-agent-skills repository locally:

```copy-code
git clone https://github.com/sigmacomputing/sigma-agent-skills.git
cd sigma-agent-skills
```

The skill files live in the `skills/` directory. Open the folder in VSCode to inspect them:

```copy-code
code .
```

### What's in a Skill File

Each skill is a structured text document that gives the agent instructions for a specific domain. The files describe:

- How to authenticate and what credentials to use
- Which API endpoints are relevant and how to call them
- What context to gather before acting (e.g., which connections are available)
- How to handle common errors

These are reference documents — not code — so editing them requires no programming. You are adding or modifying natural language instructions that the agent reads and follows.

### What to Customize

Common org-specific additions include:

- **Connection names and schema conventions** — if your organization uses consistent naming (e.g., a production connection always named `PROD_SNOWFLAKE`), add that context so the agent doesn't need to ask
- **Approved tables or schemas** — restrict the skill to specific parts of your data environment to reduce the chance of the agent acting on the wrong data
- **Standard patterns** — document data model structures or API workflows your team uses repeatedly so the agent follows them by default
- **Additional API operations** — extend the `sigma-api` skill with instructions for endpoints your team uses that aren't covered in the base skill

### Use a Customized Skill Locally

Once you've edited a skill file, reference it directly in your agent session instead of using the published plugin. In Claude Code, you can supply local files as context at session start. For other agents, use whatever mechanism the tool provides for injecting reference documents — custom instructions, system prompts, or context files.

This approach also works well for version-pinning: by maintaining your own fork, you control when upstream changes are adopted.

### Contributing Back

If your customization addresses a general gap — a missing endpoint, a broader allowlist, a clearer instruction — consider submitting a pull request to the [sigma-agent-skills repository](https://github.com/sigmacomputing/sigma-agent-skills). The Apache 2.0 license makes contribution straightforward, and improvements benefit the broader community of Sigma users building with AI assistants.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> A skill customized to your organization's data environment, naming conventions, and approved workflows reduces prompt overhead and produces more consistent results. Over time, a well-maintained internal fork becomes a shared asset for every developer on the team who works with Sigma through an AI assistant.
</aside>

<!-- dss_11.png -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

Sigma agent skills bring your AI coding assistant into Sigma's API ecosystem. Rather than context-switching between documentation, terminal, and code editor, you describe what you want in plain language and the agent handles authentication, API mechanics, and error handling using Sigma's own reference materials.

The two skills available today — `sigma-api` and `sigma-data-models` — cover the most common developer entry points: interacting with Sigma programmatically and managing analytics infrastructure as code. As Sigma adds more skills to the repository, the same installation pattern applies.

Because the skills are open source, they can be extended, versioned, and contributed back to — making this a foundation that improves with community use.

**Additional Resource Links**

[sigma-agent-skills Repository](https://github.com/sigmacomputing/sigma-agent-skills)<br>
[Sigma API Documentation](https://help.sigmacomputing.com/reference/get-started-sigma-api)<br>
[Generate API Client Credentials](https://help.sigmacomputing.com/docs/generate-api-client-credentials)<br>
[Data Models](https://help.sigmacomputing.com/docs/data-models)<br>
[Install Skills for AI Assistants](https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants)<br>
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
