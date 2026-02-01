author: pballai
id: aiapps_file_uploads_multimodal_ai
summary: aiapps_file_uploads_multimodal_ai
categories: aiapps
environments: web
status: Hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2026-01-30

# Multi-Modal File Analysis with AI

## Overview
Duration: 5

Sigma's file uploads feature allows users to attach files to row-level data, preview them, and pass file references through input tables and forms. By configuring external storage integration with Snowflake, you can extend this capability to perform advanced AI-powered processing on uploaded files.

In this QuickStart, you'll learn how to build a multi-modal AI application that can:

- **Analyze images** using AI vision capabilities
- **Transcribe and analyze audio/video** files
- **Extract structured information** from documents (PDFs, invoices, receipts)
- **Ask questions across multiple files** simultaneously using natural language

This approach enables unstructured data analysis directly within Sigma, combining file attachments with Snowflake's AI functions for intelligent document processing, content classification, and information extraction.

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
This QuickStart is designed for data analysts, developers, and technical users who want to build AI-powered applications that process unstructured data like images, documents, and audio files.

### Prerequisites

<ul>
  <li>A computer with a modern web browser (any browser will work).</li>
  <li>Access to your Sigma environment with file upload capabilities enabled.</li>
  <li>Administrative access to a Snowflake environment.</li>
  <li>Snowflake Cortex AI enabled in your Snowflake account.</li>
  <li>AWS S3 bucket for external file storage.</li>
  <li>Familiarity with Snowflake SQL and Sigma workbook development.</li>
</ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> Snowflake Cortex is not enabled by default in most accounts and is not available in all regions. To use Cortex, you must request enablement through Snowflake Support. See <a href="https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst">Region availability</a> for supported regions.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Snowflake Free Trial](https://signup.snowflake.com/)</button> <button>[AWS Free Trial](https://aws.amazon.com/free/?trk=0737953a-5bcb-42c3-bdbe-bdfc3cc79c51&sc_channel=ps&trk=0737953a-5bcb-42c3-bdbe-bdfc3cc79c51&sc_channel=ps&ef_id=EAIaIQobChMIs4Oh4dKzkgMVGzcIBR3fJy0zEAAYASAAEgIiG_D_BwE:G:s&s_kwcid=AL!4422!3!651751058802!e!!g!!aws%20free%20trial!19852662149!145019244177&gad_campaignid=19852662149&gbraid=0AAAAADjHtp_-YsRlD16DM0CSKK2h5hWGD&gclid=EAIaIQobChMIs4Oh4dKzkgMVGzcIBR3fJy0zEAAYASAAEgIiG_D_BwE)
</button> 

![Footer](assets/sigma_footer.png)

## Configure AWS S3 Storage
Duration: 15

Before configuring Sigma's storage integration, you need to set up the AWS infrastructure that will store your uploaded files. This involves creating an S3 bucket, IAM policies, and roles with proper permissions.

### Create S3 Bucket

Log into your AWS Console and navigate to S3.

Click `Create bucket` and configure:
- **Bucket name**: Choose a unique name (e.g., `file-uploads-quickstart`)
- **AWS Region**: Select your preferred region
- **Block Public Access settings**: Keep all public access blocked (recommended)
- Leave other settings as default

Scroll all the way down the page and click `Create bucket`.

<img src="assets/fupl_02.png" width="600"/>

### Create IAM Policy
Navigate to `IAM` > `Policies` and click `Create policy`:

<img src="assets/fupl_20.png" width="800"/>

Switch to the `JSON` tab and replace the existing code with the following policy document:

```code
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketLocation",
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::file-uploads-quickstart"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:PutObjectTagging"
      ],
      "Resource": "arn:aws:s3:::file-uploads-quickstart/*"
    }
  ]
}
```

<img src="assets/fupl_03.png" width="800"/>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace <code>file-uploads-quickstart</code> with your actual bucket name. If you want to restrict uploads to a specific folder, use <code>arn:aws:s3:::file-uploads-quickstart/prefix/*</code> for the object operations.
</aside>

Click `Next`, then:
- **Policy name**: `sigma-file-uploads-quickstart-policy`
- **Description**: `Allows Sigma to upload and manage files in S3`

Click `Create policy`.

<img src="assets/fupl_04.png" width="800"/>

### Create IAM Role
Navigate to IAM > Roles and click `Create role`.

Configure the role:
1. **Trusted entity type**: Select `AWS account`
2. **An AWS account**: Select `This account` and enter your AWS account ID
3. **Require external ID**: Check this box and enter a temporary value: `0000`

<aside class="positive">
<strong>NOTE:</strong><br> You'll update the trust policy with Sigma's actual external ID in a later step. The temporary value allows you to create the role initially.
</aside>

<img src="assets/fupl_05.png" width="800"/>

Click `Next`.

On the permissions page:
- Search for and select `sigma-file-uploads-quickstart-policy` (the policy you just created)

<img src="assets/fupl_06.png" width="800"/>

Click `Next`, then:
- **Role name**: `sigma-file-uploads-role`
- **Description**: `Allows Sigma cross-account access to upload files`

Click `Create role`.

After creating the role, search for it by name (`sigma-file-uploads-role`), click on it and copy the **Role ARN** - you'll need this when configuring Sigma.

The ARN format is: `arn:aws:iam::123456789012:role/sigma-file-uploads-role`

<img src="assets/fupl_06.png" width="800"/>

### Configure S3 Bucket CORS
Return to S3 and click to select your file uploads bucket.

Click the `Permissions` tab, then scroll to `Cross-origin resource sharing (CORS)`.

Click `Edit` and enter the following CORS configuration:

```code
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST"],
    "AllowedOrigins": ["https://app.sigmacomputing.com"],
    "ExposeHeaders": []
  }
]
```

<img src="assets/fupl_08.png" width="800"/>

<aside class="positive">
<strong>NOTE:</strong><br> If you use a custom Sigma domain, add it to the <code>AllowedOrigins</code> array. For example: <code>["https://app.sigmacomputing.com", "https://custom.sigmacomputing.com"]</code>
</aside>

Click `Save changes`.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Configure External Storage Integration in Sigma
Duration: 10

Now that your AWS infrastructure is ready, you'll configure Sigma to use your S3 bucket for file storage.

### Add Storage Integration in Sigma

Log into Sigma as Administrator and navigate to `Administration` > `Account` > `Storage Integration` and click `Add`:

<img src="assets/fupl_01.png" width="800"/>

Configure the external storage integration:

- **Provider**: Select `AWS S3`
- **AWS customer IAM role ARN**: Enter the Role ARN from your IAM role (e.g., `arn:aws:iam::123456789012:role/sigma-file-uploads-role`)
- **Bucket name**: Enter your S3 bucket name (e.g., `file-uploads-quickstart`)
- **Prefix**: (Optional) Enter a folder path if you want to isolate Sigma uploads (e.g., `sigma-uploads/`)

<img src="assets/fupl_09.png" width="500"/>

After entering these details, Sigma will display three values:
- **AWS IAM user ARN**: Sigma's IAM user identity (copy this)
- **AWS external role ARN**: Sigma's external ID for cross-account access (copy this)
- **AWS customer IAM role ARN**: Your role ARN echoed back (already have this)

<aside class="negative">
<strong>IMPORTANT:</strong><br> Copy the first two values (AWS IAM user ARN and AWS external role ARN) displayed by Sigma - you'll need them in the next step to update your IAM role's trust policy. The third value is just your role ARN being displayed back to you.
</aside>

<img src="assets/fupl_10.png" width="500"/>

### Update IAM Role Trust Policy

Return to AWS Console and navigate to IAM > Roles.

Select your `sigma-file-uploads-role`.

Click the `Trust relationships` tab, then click `Edit trust policy`:

<img src="assets/fupl_11.png" width="800"/>

Replace the entire trust policy document with:

```code
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:user/sigma-upload-user"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "abc123def456ghi789"
        }
      }
    }
  ]
}
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace the values in the <code>Principal.AWS</code> field with the <strong>AWS IAM user ARN</strong> from Sigma, and the <code>sts:ExternalId</code> value with the <strong>AWS external role ARN</strong> from Sigma.
</aside>

<img src="assets/fupl_12.png" width="600"/>

Click `Update policy`.

### Verify Configuration
Return to Sigma and click `Test connection` on the Storage Integration page:

<img src="assets/fupl_13.png" width="800"/>

If configured correctly, you'll see a success message confirming Sigma can access your S3 bucket:

<img src="assets/fupl_14.png" width="400"/>

Sigma will now persist all uploaded files to your S3 bucket, making them accessible for downstream processing in Snowflake.

For additional details, see [Configure storage integration for file upload columns](https://help.sigmacomputing.com/docs/configure-storage-integration-for-file-upload-columns)

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Configure Snowflake Cortex AI
Duration: 5

Before setting up storage integration, you need to ensure Snowflake Cortex AI is properly configured with a vision-capable model.

### Enable Cross-Region Inference

Multi-modal AI models (like Claude) that can analyze images may not be available in all Snowflake regions by default. Enable cross-region inference to access these models.

In Snowflake, run as ACCOUNTADMIN:

```code
USE ROLE ACCOUNTADMIN;
ALTER ACCOUNT SET CORTEX_ENABLED_CROSS_REGION = 'AWS_US';
```

<aside class="positive">
<strong>NOTE:</strong><br> You can use <code>AWS_EU</code> or <code>ANY_REGION</code> instead of <code>AWS_US</code> based on your preference. See <a href="https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference">Snowflake's cross-region inference documentation</a> for details.
</aside>

### Test Which Models Are Available

Different Snowflake regions have different models available. Test which models work in your region:

```code
-- Test Claude models (vision-capable, best for multi-modal)
SELECT SNOWFLAKE.CORTEX.COMPLETE('claude-3-7-sonnet', 'Say hello') AS response;
SELECT SNOWFLAKE.CORTEX.COMPLETE('claude-3-5-sonnet', 'Say hello') AS response;

-- Test Reka (vision-capable)
SELECT SNOWFLAKE.CORTEX.COMPLETE('reka-flash', 'Say hello') AS response;

-- Test text-only models (these will NOT work for image processing)
SELECT SNOWFLAKE.CORTEX.COMPLETE('mistral-7b', 'Say hello') AS response;
SELECT SNOWFLAKE.CORTEX.COMPLETE('mixtral-8x7b', 'Say hello') AS response;
SELECT SNOWFLAKE.CORTEX.COMPLETE('llama3-70b', 'Say hello') AS response;
```

Run each query to see which models are available in your region.

**Choose a vision-capable model** that works:
- `claude-3-7-sonnet` or `claude-3-5-sonnet` (recommended for best quality)
- `reka-flash` (alternative vision model)

You'll use this model name in the application's `LLM` control later.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Text-only models like <code>mistral-7b</code>, <code>mixtral-8x7b</code>, and <code>llama3-70b</code> will NOT work for image processing. You must use a multi-modal vision model like Claude or Reka for this QuickStart.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Create Snowflake Storage Integration
Duration: 10

To make files uploaded via Sigma accessible for AI processing in Snowflake, you need to create a database, schema, storage integration, and external stage.

### Create or Use Database and Schema
First, create a database and schema to store your file upload stage, or use existing ones if you prefer.

In Snowflake, run the following SQL:

```code
USE ROLE ACCOUNTADMIN;
CREATE DATABASE IF NOT EXISTS QUICKSTARTS;
USE DATABASE QUICKSTARTS;

CREATE SCHEMA IF NOT EXISTS FILE_UPLOADS;
USE SCHEMA FILE_UPLOADS;
```

<aside class="positive">
<strong>NOTE:</strong><br> You can use an existing database and schema if you prefer. Just make sure to use the same database and schema names consistently in the following steps.
</aside>

### Create Storage Integration

Run the following SQL to create a storage integration mapped to your AWS S3 bucket:

```code
CREATE OR REPLACE STORAGE INTEGRATION my_file_uploads_storage_integration
  TYPE = EXTERNAL_STAGE
  STORAGE_PROVIDER = 'S3'
  ENABLED = TRUE
  STORAGE_AWS_ROLE_ARN = 'arn:aws:iam::YOUR_AWS_ACCOUNT_ID:role/sigma-file-uploads-role'
  STORAGE_ALLOWED_LOCATIONS = ('s3://file-uploads-quickstart/');
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace the entire <code>STORAGE_AWS_ROLE_ARN</code> value with your actual IAM role ARN from AWS:
<ul>
<li>Go to AWS Console > IAM > Roles > sigma-file-uploads-role</li>
<li>Copy the full ARN (e.g., <code>arn:aws:iam::849276620055:role/sigma-file-uploads-role</code>)</li>
<li>Replace <code>YOUR_AWS_ACCOUNT_ID</code> with your actual 12-digit AWS account ID</li>
<li>Replace <code>file-uploads-quickstart</code> with your actual S3 bucket name</li>
</ul>
</aside>

<img src="assets/fupl_15.png" width="600"/>

### Update IAM Trust Policy for Snowflake

Now you need to update your AWS IAM role to trust both Sigma AND Snowflake.

First, get Snowflake's IAM credentials:

```code
DESC STORAGE INTEGRATION my_file_uploads_storage_integration;
```

From the output, copy these two values:
- **STORAGE_AWS_IAM_USER_ARN** (e.g., `arn:aws:iam::644982758253:user/yq810000-s`)
- **STORAGE_AWS_EXTERNAL_ID** (e.g., `AJB44127_SFCRole=2_PRSQLGRBPzzYcOuK1pSOUmr5beI=`)

In AWS Console, navigate to IAM > Roles > `sigma-file-uploads-role` > Trust relationships > Edit trust policy.

Replace the trust policy with the following, adding BOTH Sigma and Snowflake credentials:

```code
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "PASTE_SIGMA_AWS_IAM_USER_ARN_HERE",
          "PASTE_SNOWFLAKE_STORAGE_AWS_IAM_USER_ARN_HERE"
        ]
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": [
            "PASTE_SIGMA_AWS_EXTERNAL_ROLE_ARN_HERE",
            "PASTE_SNOWFLAKE_STORAGE_AWS_EXTERNAL_ID_HERE"
          ]
        }
      }
    }
  ]
}
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace all four placeholder values:
<ul>
<li><strong>Sigma values</strong>: From Sigma > Administration > Account > Storage Integration (AWS IAM user ARN and AWS external role ARN)</li>
<li><strong>Snowflake values</strong>: From the DESC STORAGE INTEGRATION command above (STORAGE_AWS_IAM_USER_ARN and STORAGE_AWS_EXTERNAL_ID)</li>
</ul>
</aside>

Click `Update policy` in AWS.

Grant usage on the storage integration to the role that Sigma uses to connect to Snowflake:

```code
GRANT USAGE ON INTEGRATION my_file_uploads_storage_integration TO ROLE sigma_user;
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace <code>sigma_user</code> with the actual Snowflake role that your Sigma connection uses. You can find this in Sigma under <strong>Administration</strong> > <strong>Connections</strong> > select your Snowflake connection > view the <strong>Role</strong> field.
</aside>

### Create External Stage

Create an external stage in Snowflake that maps to your storage integration:

```code
CREATE OR REPLACE STAGE QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS
  STORAGE_INTEGRATION = my_file_uploads_storage_integration
  URL = 's3://file-uploads-quickstart/';
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace <code>file-uploads-quickstart</code> with your actual S3 bucket name (the same one you used in the storage integration). If you used a different database or schema name, update <code>QUICKSTARTS.FILE_UPLOADS</code> accordingly.
</aside>

<aside class="positive">
<strong>NOTE:</strong><br> Snowflake converts unquoted identifiers to uppercase, so this stage will be created as <code>FILE_UPLOADS</code> (all uppercase). The stage full path is: <code>QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS</code>
</aside>

Enable directory listing on the stage:

```code
ALTER STAGE QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS SET DIRECTORY = (ENABLE = TRUE);
```

Grant permissions to your Sigma user role:

```code
-- Grant access to database and schema
GRANT USAGE ON DATABASE QUICKSTARTS TO ROLE sigma_user;
GRANT USAGE ON SCHEMA QUICKSTARTS.FILE_UPLOADS TO ROLE sigma_user;

-- Grant access to the stage
GRANT USAGE, READ, WRITE ON STAGE QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS TO ROLE sigma_user;

-- Grant access to Snowflake Cortex AI functions
GRANT DATABASE ROLE SNOWFLAKE.CORTEX_USER TO ROLE sigma_user;
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace <code>sigma_user</code> with the same Snowflake role from the previous step (the role your Sigma connection uses). The <code>CORTEX_USER</code> database role is required to use Snowflake's AI functions.
</aside>

<aside class="positive">
<strong>TIP:</strong><br> Verify your stage configuration by running <code>LIST @QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS;</code> in Snowflake after uploading a test file through Sigma.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

<!-- commented out, This section was not used but was part of another example that did more detailed processing
## Create Custom Functions
Duration: 10

Sigma's custom functions allow you to encapsulate complex Snowflake operations into reusable formulas. You'll create three custom functions for file processing.

### Function 1: FileGetURL
This function generates a pre-signed URL for rendering files in the browser.

In Sigma, navigate to `Administration` > `Account` > `Custom Functions` and click `Add`:

<img src="assets/fupl_16.png" width="800"/>

Configure the function:

**Name**: `FileGetURL`

**Description**: `Retrieve a pre-signed URL for rendering a file in the browser`

**Arguments**:
- Name: `File`, Type: `Variant`, Description: `The Sigma file upload column`

**Formula**:
```code
CallText("GET_PRESIGNED_URL", "@QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS", Text([File][0].id))
```

**Return type**: `Text`

<aside class="negative">
<strong>IMPORTANT:</strong><br> If you used a different database, schema, or stage name in the previous section, update <code>@QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS</code> to match your actual stage path. The @ symbol indicates it's a stage reference in Snowflake.
</aside>

<img src="assets/fupl_17.png" width="700"/>

Click `Save`.

### Function 2: FileAskAI
This function uses Snowflake's `AI_COMPLETE` function to analyze file content and answer questions.

Create a new custom function with:

**Name**: `FileAskAI`

**Description**: `Run AI Complete against a file uploaded in a Sigma File column`

**Add 3 Arguments**:
- Name: `File`, Type: `Variant`, Description: `A Sigma file input field`
- Name: `Prompt`, Type: `Text`, Description: `Instruction prompt for the LLM`
- Name: `Model`, Type: `Text`, Description: `The LLM you would like to use (e.g. claude-3-7-sonnet)`

**Formula**:
```code
Text(CallVariant("AI_COMPLETE", [Model], [Prompt], CallText("TO_FILE", "@QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS", Text([File][0].id))))
```

**Return type**: `Text`

<aside class="negative">
<strong>IMPORTANT:</strong><br> Use the same stage path as in FileGetURL. If you used different names, update accordingly.
</aside>

<img src="assets/fupl_18.png" width="700"/>

Click `Save`.

### Function 3: FileExtractDetail
This function uses AI_EXTRACT to pull structured information from documents.

Create a new custom function with:

**Name**: `FileExtractDetail`

**Description**: `Extract information from a Sigma file upload`

**Arguments**:
- Name: `File`, Type: `Variant`, Description: `A Sigma file column`
- Name: `Results`, Type: `Variant`, Description: `An array of arrays containing labels and prompts for extracting data`

**Formula**:
```code
CallVariant("AI_EXTRACT", CallText("TO_FILE", "@QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS", Text([File][0].id)), [Results])
```

**Return type**: `Variant`

<aside class="negative">
<strong>IMPORTANT:</strong><br> Use the same stage path as in the previous functions. Consistency across all three functions is critical.
</aside>

<aside class="positive">
<strong>NOTE:</strong><br> Unlike the previous two functions which return Text, this function returns <strong>Variant</strong> because AI_EXTRACT returns structured JSON data containing the extracted fields and values. Returning Variant preserves this structure so you can access individual fields in your workbook formulas.
</aside>


<img src="assets/fupl_19.png" width="700"/>

Click `Save`.

![Footer](assets/sigma_footer.png)
-->

## Build the AI App in Sigma
Duration: 20

Now you'll build the application interface that allows users to upload files and interact with AI processing.

### Create Initial Workbook Structure
Create a new workbook in Sigma.

From the element bar at the bottom of the page, click `Controls` and select `File upload`.

Configure the file upload control:
- Change `Control ID` in the properties panel to `Files`
- Deselect `Allow multiple files`
- Click the `Format` tab and change `Label position` to `Left`

<img src="assets/fupl_21.png" width="800"/>

### Add Input Table for Files
From the element bar, click `Input` > `Empty` and select your Snowflake connection.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Your Snowflake connection must have write access enabled to use input tables. See <a href="https://help.sigmacomputing.com/docs/connect-to-snowflake#configure-write-access">Configure write access</a> for setup instructions.
</aside>

Configure the input table columns:
1. Double-click the existing `Text` column header and rename it to `AI Detailed Description`
2. Click the `+` next to this column and select `Text` as the column type
3. Rename the new column to `Name` and right-click to hide it
4. Click the `+` next to this column and select `Text` as the column type
5. Rename the new column to `File ID` and right-click to hide it
6. Click the `+` next to this column and select `File` **as the column type** (leave the column name as `File`)
7. Drag the File column to the first position (before the other columns)

Rename the table to `Your files` by double-clicking the table name.

Delete the pre-populated rows:
- Highlight rows 1-3, right-click and select `Delete 3 rows`:

<img src="assets/fupl_22.png" width="550"/>

### Add Row ID Column
Add a Row ID column to uniquely identify each row.

Click the `+` next to the `AI Detailed Description` column, choose the Sigma provided `Row ID` column type.

Right-click the `Row ID` column header and select `Hide column`.

<aside class="positive">
<strong>NOTE:</strong><br> The File ID column will be populated automatically when files are uploaded via the action sequence you'll configure in the next section. It stores the actual filename in S3 (with Sigma's prefix and UUID).
</aside>

### Add Delete Button Column
Add a calculated column with a delete icon that users can click to remove entries.

Click the `+` next to the `AI Detailed Description` column and select `New column`.

Configure the delete column:
1. Rename the column to `Delete` by double-clicking the column header
2. In the formula bar, enter:
```code
"https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
```
3. Transform the column type to `set image`:

<img src="assets/fupl_23.png" width="500"/>

Set the image to `20 x 15`:

<img src="assets/fupl_24.png" width="350"/>

Press Enter - you should see a trash icon appear (you may need to add one empty row to see it)

4. Click the **Actions** tab in the properties panel
5. Click `Add action` and select `Delete row(s)`
6. Configure the action:
   - **In**: `Your files (User)`
   - **Delete row(s) by**: `Single row`
   - **Column**: Select `ID` (the Row ID column)
   - **ID**: Select `ID` (the Row ID column)

<img src="assets/fupl_25.png" width="700"/>

The trash icon will now act as a clickable delete button for each row.

<aside class="positive">
<strong>TIP:</strong><br> You can use any image URL for the delete icon. The formula creates a calculated column that displays the image in every row.
</aside>

<aside class="negative">
<strong>IMPORTANT:</strong><br> The delete button removes the row from the Sigma input table, but does <strong>not</strong> delete the actual file from S3. Files remain in your S3 bucket even after being removed from the table. To clean up unused files in S3, you can manually delete them from the AWS Console or configure S3 lifecycle policies to automatically remove old files.
</aside>

### Add Visual Separation
From the element bar, click `UI` > `Divider`.

Drag this divider between your file uploader and table.

Select all three objects (file uploader, divider, and table) by dragging a selection box around them.

Click `Create container` to group them together.

Your workbook should now show a clean file upload interface with a table to display results.

Rename the page `Your Files`.

Click `Save as` and name the workbook `File Uploads QuickStart`:

<img src="assets/fupl_26.png" width="700"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Configure AI Processing Actions
Duration: 15

Next we will configure actions that automatically process files when they're uploaded, using different AI functions based on file type.

### Create Admin Page for Variables

From the element bar, click `Controls` > `Text input`.

Change `Control ID` in the properties panel to `LLM`.

Click the 3-dot menu on this control and select `Move to` > `New page`.

Rename the new page to `Admin`.

Click the 3-dot menu again and select `Duplicate`.

Change the `Control ID` of the duplicate to `Stage`.

In the `LLM` control, type: `claude-3-7-sonnet`

In the `Stage` control, type your stage path: `@QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS`

<aside class="negative">
<strong>IMPORTANT:</strong><br> If you used different database, schema, or stage names when creating your Snowflake stage, update this path to match. This must be the same path you used in the custom functions. Remember that Snowflake converts unquoted identifiers to uppercase.
</aside>

<img src="assets/fupl_27.png" width="450"/>

### Create Processing Modal
Click `More options` in the lower left corner and select `Add modal`.

Click the `Format` tab in the properties panel:
- In the `Footer` section, deselect both button options
- In the `Header` section, deselect both options for title and close icon

Minimize the modal height:

<img src="assets/fupl_28.png" width="700"/>

Change the header test to `Please wait...` 

Select `UI` from the bottom toolbar and click `Text` object.

Set the text to `processing your AI request...` and center it, applying any other styling you prefer:

<img src="assets/fupl_29.png" width="800"/>

### Add Action 1: Process Images
Return to the `Your Files` and click the `Files` upload control (with the `Browse` button).

Click `Actions` in the right-hand properties panel.

Click the 3-dot menu next to `Action sequence` and select `Add condition`.

In the box under `Custom formula`, enter:
```code
SplitPart(Text(Json(Text([Files])).type), "/", 1) = "image"
```

This condition checks if the uploaded file is an image.

Click the `+` (Add action) button next to Action sequence:

**Action 1**: Select `Open modal` and choose the modal page you created.

<img src="assets/fupl_30.png" width="800"/>

Close the `Insert row` action.

Click the `+` button again to create another action.

**Action 2**: Select `Insert row`.

For the insert row target, select the `Your files` input table.

Configure the column mappings for all four columns:

- **File**: Click `Control` and verify it defaults to `Files`

- **Name**: Click `Formula` and enter:
```code
Text(Json(Text([Files])).name)
```

- **File ID**: Click `Formula` and enter:
```code
Text(Json(Text([Files])).id)
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Make sure to set File ID to <strong>Formula</strong> (not Static value). This column must capture the S3 filename with Sigma's UUID prefix for the delete functionality to work later.
</aside>

- **AI Detailed Description**: Click `Formula` and enter:
```code
Text(CallVariant("ai_complete", [LLM], "give a detailed description of the following: ", CallText("to_file", [Stage], Text(Json(Text([Files])).id))))
```

<img src="assets/fupl_31.png" width="800"/>

Click the `+` button again:

**Action 3**: Select `Clear control` and choose `Files` from `Your Files`:

<img src="assets/fupl_32.png" width="700"/>

Click the `+` button again:

**Action 4**: Select `Close modal`.

### Add Action 2: Process Audio/Video (Optional)
<aside class="positive">
<strong>OPTIONAL:</strong><br> This section is optional. You can test the application with just image processing. Add audio/video and document processing later if needed for your use case.
</aside>

Click the 3-dot menu next to the action sequence you just created and select `Duplicate`.

Change the condition formula to:
```code
In(SplitPart(Text(Json(Text([Files])).type), "/", 1), "audio", "video")
```

In the Insert row action, change the `AI Detailed Description` formula to:
```code
Text(CallVariant("ai_complete", [LLM], Concat("give a detailed description of the following: ", CallText("to_varchar", CallText("ai_transcribe", CallText("to_file", [Stage], Text(Json(Text([Files])).id)))))))
```

This uses AI_TRANSCRIBE to convert audio/video to text before analyzing.

### Add Action 3: Process Documents (Optional)

<aside class="positive">
<strong>OPTIONAL:</strong><br> This section is also optional. The core application works with just image processing configured above.
</aside>

Click the 3-dot menu next to the action sequence and select `Duplicate` again.

Change the condition formula to:
```code
Not(In(SplitPart(Text(Json(Text([Files])).type), "/", 1), "image", "audio", "video"))
```

This catches all other file types (PDFs, Office docs, etc.).

In the Insert row action, change the `AI Detailed Description` formula to:
```code
Text(CallVariant("ai_complete", [LLM], Concat("give a detailed description of the following: ", CallText("get", CallText("ai_parse_document", CallText("to_file", [Stage], Text(Json(Text([Files])).id))), "content"))))
```

This uses AI_PARSE_DOCUMENT to extract text from documents before analyzing.

<aside class="positive">
<strong>TIP:</strong><br> You can rename action sequences by double-clicking their names. Use descriptive names like "Process Image Files", "Process Audio/Video Files", and "Process Document Files" to make them easier to manage.
</aside>

<!-- <img src="assets/all_action_sequences.png" width="800"/> -->

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add Multi-Modal Inquiry Feature
Duration: 10

Now you'll add the ability to ask questions across all uploaded files simultaneously.

### Create Inquiry Interface

From the element bar, click `Controls` > `Text input`.

Change `Control ID` to `Multimodal-Inquiry`.

Drag it to the right side of your existing container.

From the element bar, click `UI` > `Divider` and place it under the text input.

From the element bar, click `Controls` > `Text area`.

Change `Control ID` to `AI Results`.

Drag it underneath the divider.

From the element bar, click `UI` > `Button`.

Change the button `Text` to `Ask`.

Drag it to the right of the `Multimodal Inquiry` text input.

Select all four new objects (text input, divider, text area, button) and click `Create container`:

<img src="assets/fupl_33.png" width="800"/>

### Create Multi-Modal Processing Table
In the upper right corner of the `Your files` table, click `Create Child Element` > `Table`.

Click the 3-dot menu on this new table and select `Move to` > `Admin`.

Select the arrow on the `Admin` page tab and select `Hide page`.

Rename the child table to `Multimodal`.

Click `+` next to `Groupings` and select `Add new column`.

Enter `1` as the formula for this new field `calc` (the actual name and value don't matter).

Click `+` next to `calculations` in the Groupings section.

Select `Add new column` and enter the following formula:
```code
Text(CallVariant("ai_complete", [LLM], "answer inquiry '" & [Multimodal-Inquiry] & "' from following data:" & ListAgg(Concat([Name], ": ", [AI Detailed Description], "\n"), "\n")))
```

Rename this column to `Multimodal Results`.

Since we had one row (when working on the delete column) there is one row with no information but the results show that the app is already working:

<img src="assets/fupl_34.png" width="800"/>

### Configure Ask Button Actions
Return to the `User` page and click the `Ask` button.

Click `Actions` in the properties panel.

Click the `+` button to add actions:

**Action 1**: Select `Open modal` and choose your processing modal.

**Action 2**: Select `Set control value`.
- **Update control**: Select `AI Results (Your Files)`
- **Set value as**: Select `Formula`
- Enter formula: `[Multimodal/Multimodal results]`

**Action 3**: Select `Close modal`.

<img src="assets/fupl_35.png" width="600"/>

### Configure Table Editing

Return to `Your Files` and click on the `Your files` table.

Change the table mode to `Editable in published version (all users)`.

<aside class="positive">
<strong>NOTE:</strong><br> Users can remove entries by clicking the <strong>Delete</strong> button in each row. The file preview modal's delete functionality has known beta limitations in published mode, so the Delete button column provides the best user experience.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Test the Application
Duration: 10

Now you're ready to test your multi-modal file processing application.

### Test Basic File Upload

To make the example really simple, we created two screenshots, one of Sigma's homepage and another of the QuickStarts homepage. We will upload them both and then as the AI to compare them, just to see what happens.

Upload any test image by clicking the `Browse` button in the `Files` control.

The application should:
1. Show the "Please wait..." modal briefly
2. Automatically generate an AI description of the image
3. Display the file and description in the `Your files` table

<aside class="positive">
<strong>NOTE:</strong><br> AI processing can take 10-30 seconds depending on your Snowflake warehouse size, file size, and whether cross-region inference is being used. Larger warehouses (Medium, Large) will process faster than X-Small warehouses. The modal will remain visible until processing completes.
</aside>

<img src="assets/uploadfile.gif">

### Test Multi-Modal Inquiry

After uploading another file:

1. Enter a question in the `Multimodal Inquiry` field, such as:
   - "Compare and contrast my files"
   - "What common themes appear in these files?"
   - "Summarize the key information across all documents"

2. Click the `Ask` button

3. Review the AI-generated response in the `AI Results` text area

The AI will analyze all uploaded files collectively and provide an integrated answer based on their combined content.

<img src="assets/fupl_36.png" width="500"/>

### Expected Results

You should now have a working multi-modal AI application that:
- Processes images, documents, and audio/video files automatically
- Generates intelligent descriptions of file content
- Answers natural language questions across multiple files
- Provides a clean, user-friendly interface for unstructured data analysis

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Troubleshooting
Duration: 5

This section covers common issues you may encounter and how to resolve them.

### Error: "Edits can only be made in draft mode"

**Symptom**: When uploading a file, you see: `Error in Insert row into 'Your files' - Edits can only be made in draft mode`

**Solution**: Click the `Edit` button in the top-right of the workbook to enter draft/edit mode. Input table actions only work in draft mode during development. Once you publish the workbook with the table set to "Editable in published version", end users will be able to insert rows.

### Error: "Warehouse error: query failed" during file upload

**Symptom**: Files upload to S3 but the Insert row action fails with a vague warehouse error.

**Root Cause**: Usually an AWS permissions or Snowflake grants issue.

**Solution**: Check these in order:

**1. Verify Snowflake can access the stage**

```code
USE ROLE your_sigma_role;
LIST @QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS;
```

If this fails with an AWS assume role error, the IAM trust policy is incorrect.

**2. Check IAM trust policy includes both Sigma AND Snowflake**

In AWS Console > IAM > Roles > sigma-file-uploads-role > Trust relationships, verify BOTH:
- Sigma's IAM user ARN and External ID (from Sigma Admin page)
- Snowflake's IAM user ARN and External ID (from `DESC STORAGE INTEGRATION`)

The trust policy should have arrays with both values:

```code
"AWS": [
  "arn:aws:iam::XXXX:user/sigma-user",
  "arn:aws:iam::XXXX:user/snowflake-user"
],
"sts:ExternalId": [
  "sigma-external-id",
  "snowflake-external-id"
]
```

**3. Verify Cortex permissions**

```code
SHOW GRANTS TO ROLE your_sigma_role;
```

Look for `DATABASE ROLE SNOWFLAKE.CORTEX_USER`. If missing:

```code
USE ROLE ACCOUNTADMIN;
GRANT DATABASE ROLE SNOWFLAKE.CORTEX_USER TO ROLE your_sigma_role;
```

**4. Verify stage permissions**

```code
SHOW GRANTS TO ROLE your_sigma_role;
```

Look for `USAGE, READ, WRITE ON STAGE`. If missing:

```code
USE ROLE ACCOUNTADMIN;
GRANT USAGE, READ, WRITE ON STAGE QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS TO ROLE your_sigma_role;
```

**5. Test the AI function directly in Snowflake**

```code
USE ROLE your_sigma_role;
SELECT SNOWFLAKE.CORTEX.AI_COMPLETE(
  'claude-3-7-sonnet',
  'Say hello'
) AS result;
```

If this fails, check cross-region inference is enabled:

```code
USE ROLE ACCOUNTADMIN;
ALTER ACCOUNT SET CORTEX_ENABLED_CROSS_REGION = 'AWS_US';
```

### Error: "Error assuming AWS_ROLE: User is not authorized to perform sts:AssumeRole"

**Symptom**: Snowflake cannot access the S3 stage.

**Solution**: The AWS IAM role trust policy doesn't trust Snowflake's IAM user. Follow the "Update IAM Trust Policy for Snowflake" section to add Snowflake's credentials to the trust policy.

### Files upload to S3 but don't appear in the table

**Symptom**: You can see files in the S3 bucket, but the Insert row action doesn't add them to the Sigma table.

**Solution**:
1. Make sure you're in Edit mode (not published/view mode)
2. Check the browser console for JavaScript errors
3. Verify all four column mappings in the Insert row action are configured (File, Name, File ID, AI Detailed Description)
4. Simplify the Insert row to just File and a static value for AI Detailed Description to isolate if the issue is with the AI formula

### Admin page controls (LLM, Stage) are empty

**Symptom**: The LLM or Stage controls on the Admin page don't have values.

**Solution**: Navigate to the Admin page and manually enter:
- **LLM**: `claude-3-7-sonnet` (or your preferred vision-capable model)
- **Stage**: `@QUICKSTARTS.FILE_UPLOADS.FILE_UPLOADS` (or your actual stage path)

Save the workbook after setting these values.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Managing S3 Storage
Duration: 5

### Understanding File Deletion Behavior

The delete button in the application removes rows from the Sigma input table, but **does not delete the actual files from S3**.

<aside class="positive">
<strong>NOTE:</strong><br> It is possible to configure the delete button to also remove files from S3 using Snowflake stored procedures with External Access Integrations and the boto3 Python package. However, this requires additional AWS credential configuration and is beyond the scope of this QuickStart. For most use cases, the options below provide simpler file management approaches.
</aside>

### Managing S3 Files

You have several options for managing files in your S3 bucket:

**Option 1: Manual Cleanup**
- Periodically review and delete old files through the AWS S3 Console
- Simple and gives you full control over what gets deleted

**Option 2: S3 Lifecycle Policies** (Recommended)
- Configure automatic deletion of files older than a certain age
- Example: Delete files older than 90 days automatically
- Set up in AWS S3 Console under `Management` > `Lifecycle rules`

**Option 3: Monitor and Alert**
- Set up AWS CloudWatch alerts for bucket size
- Manually clean up when storage costs exceed thresholds

<aside class="positive">
<strong>TIP:</strong><br> Most organizations use S3 lifecycle policies to automatically remove old files after 30, 60, or 90 days. This approach is simple, cost-effective, and doesn't require additional Snowflake configuration.
</aside>

### Example: S3 Lifecycle Policy

To automatically delete files older than 90 days:

1. In AWS S3 Console, select your bucket
2. Navigate to `Management` > `Lifecycle rules`
3. Click `Create lifecycle rule`
4. Configure:
   - **Rule name**: `Delete old uploads`
   - **Prefix**: (leave empty to apply to all files, or specify your Sigma prefix)
   - **Lifecycle rule actions**: Select `Expire current versions of objects`
   - **Days after object creation**: `90`
5. Click `Create rule`

Files will now be automatically deleted 90 days after upload, keeping your storage costs manageable.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, you learned how to extend Sigma's file uploads feature with AI-powered processing capabilities:

- **Configured external storage integration** to persist files in your cloud storage
- **Created Snowflake storage integration and stage** to access uploaded files
- **Built custom functions** for file processing (FileGetURL, FileAskAI, FileExtractDetail)
- **Developed a multi-modal AI application** that handles images, documents, and audio/video
- **Implemented conditional processing** based on file type
- **Enabled multi-modal inquiry** to ask questions across multiple files

### Advanced Use Cases

The techniques in this QuickStart enable many business applications:

**Intelligent Document Processing**
- Extract structured data from invoices and receipts
- Classify documents by type and content
- Automate form data extraction

**Visual Content Analysis**
- Analyze product images for quality control
- Classify visual content for organization
- Generate metadata for image libraries

**Audio/Video Intelligence**
- Transcribe meeting recordings and generate summaries
- Analyze customer service calls
- Extract action items from video conferences

### Next Steps

Explore additional AI capabilities:
- **FileExtractDetail**: Use the extraction function to pull specific fields from documents (vendor name, date, amount, etc.)
- **Classification**: Add automatic content classification using AI_COMPLETE
- **Translation**: Implement multi-language support using AI_TRANSLATE
- **Batch Processing**: Process multiple files in bulk with input tables

For more information, see:
- [Snowflake Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions)
- [Sigma Custom Functions](https://help.sigmacomputing.com/docs/custom-functions)

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
