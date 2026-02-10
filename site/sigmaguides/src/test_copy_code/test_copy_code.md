author: Test Author
id: test_copy_code
summary: Testing the new copy-code functionality
categories: testing
environments: web
status: Draft
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-02-09

# Testing Copy Code Functionality
<!-- The above name is what appears on the website and is searchable. -->

## Overview
Duration: 5

This QuickStart demonstrates the new copy-code functionality for code blocks.

### Target Audience
Developers and content creators who want to make code easier to copy.

### Prerequisites
<ul>
  <li>A web browser</li>
</ul>

### What You'll Learn
How to use the new copy-code syntax in markdown files.

![Footer](assets/sigma_footer.png)

## Regular Code Block (No Copy Button)
Duration: 2

Here's a regular code block using the standard ` ```code` syntax. This will NOT have a copy button:

```code
SELECT *
FROM customers
WHERE region = 'West'
LIMIT 100;
```

Notice there's no copy button on this block.

![Footer](assets/sigma_footer.png)

## Copy-Enabled Code Block
Duration: 2

Here's a code block using the new ` ```copy-code` syntax. This WILL have a copy button:

```copy-code
USE ROLE ACCOUNTADMIN;

CREATE OR REPLACE STAGE QUICKSTARTS.CORTEX_DEMO.SEMANTIC_MODELS_EXTERNAL
  URL = 'https://sigma-quickstarts-main/yaml-files/'
  DIRECTORY = (ENABLE = TRUE);
```

Click the "copy" button in the top-right corner! It will change to "copied" when clicked.

![Footer](assets/sigma_footer.png)

## Multiple Copy Blocks
Duration: 3

You can have multiple copy-enabled blocks in the same QuickStart:

```copy-code
npm install
npm start
```

Here's another one:

```copy-code
http://localhost:3000/public_access/?mode=public_access
```

And one more with SQL:

```copy-code
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Each block gets its own independent copy button!

![Footer](assets/sigma_footer.png)

## What we've covered
Duration: 1

You've learned how to use the new ` ```copy-code` syntax to add copy buttons to code blocks in Sigma QuickStarts.

**Key Points:**
- Use ` ```code` for regular code blocks (no copy button)
- Use ` ```copy-code` for code blocks with copy buttons
- The button text changes from "copy" to "copied" when clicked
- Each code block has its own independent copy button

![Footer](assets/sigma_footer.png)
