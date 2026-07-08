---
title: Use the Sigma CLI
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

You can programmatically manage your Sigma documents, users, and data using the Sigma CLI. For instructions to set up the Sigma CLI, see [Install and configure the Sigma CLI](doc:install-and-configure-the-sigma-cli).

This document explains the basic command structure of the Sigma CLI, outputs, and logging.

<Callout icon="🚩" theme="default">
  The Sigma CLI is an external command line interface tool, the use of which is governed by the CLI license. Review the [Sigma CLI Notice](doc:notice-for-sigma-cli-license) before using the Sigma CLI to connect with or access your Sigma organization.
</Callout>

## Command structure

Commands in the Sigma CLI follow a common structure, in the format:

```shell
sigma api <resource> <action> [--flags]
```

For example, the following command lists workbooks in the organization associated with the current profile:

```shell
sigma api workbooks list
```
<Callout icon="📘" theme="info">
  Because the Sigma CLI is a command-line tool for the Sigma REST API, resources and actions are derived from Sigma REST API endpoints. For example, the command `sigma api workbooks list` calls the [List workbooks](ref:listworkbooks) endpoint. For more information on available resources and actions, review the available endpoints in the [Sigma API reference documentation](ref:get-started-sigma-api).
</Callout>

To see a list of all resources you can interact with via the Sigma CLI, run the following command:

```shell
sigma --help
```

To see a list of actions and flags for a particular `resource` type, run the following command:

```shell
sigma api <resource> --help
```

For example, to see all actions and flags for connections, run the following command:

```shell
sigma api connections --help
```

### Structure API calls using the Sigma CLI

To see the parameters a command accepts, including each parameter name and whether it's required, run the `schema` command for that command path:

```shell
# Print the schema for the workbooks get command
sigma api schema workbooks get
```

To pass a path parameter, include it as a key in the JSON object you provide to the `--params` flag. For example, the [Get a workbook](ref:getworkbook) endpoint requires a `workbookId` path parameter:

```shell
# Retrieve a single workbook by its ID
sigma api workbooks get --params '{"workbookId":"<workbook-id>"}'
```

To pass query parameters, add them as additional keys. For example, you can limit the number of results the [List workbooks](ref:listworkbooks) endpoint returns:

```shell
# List workbooks, returning at most two results
sigma api workbooks list --params '{"limit":2}'
```

You can combine path and query parameters in the same JSON object. For example, the following command lists the pages of a specific workbook and limits the results:

```shell
# List up to three pages of a specific workbook
sigma api workbooks pages list --params '{"workbookId":"<workbook-id>","limit":3}'
```

## Manage command output

You can pipe command output from the Sigma CLI to other commands to create custom scripts and workflows. 

All command output in the Sigma CLI is formatted as JSON printed to `stdout`.

For example, to filter a list of workbooks using `jq`, run the following command:

```shell
# Pipe to jq for filtering
sigma api workbooks list | jq '.entries[].name'
```

To save the metadata for a workbook to a file titled `workbook.json`, run the following command:

```shell
# Save to a file
sigma api workbooks get --params '{"workbookId":"<workbook-id>"}' > workbook.json
```

## Interpret exit codes and manage errors

To check if a Sigma CLI command was successful, or to understand the cause of an error when using the Sigma CLI, refer to the following exit codes:

| Exit code | Meaning |
| --- | --- |
| `0` | Success |
| `1` | API error (HTTP 4xx/5xx) |
| `2` | Authentication error |
| `3` | Validation error (bad input) |
| `4` | HTTP/network error |

All errors are formatted as JSON printed to `stdout`, with a colored label printed to `stderr`.

For example, if you request a workbook with an invalid `workbookId`, such as in the following command:

```shell
sigma api workbooks get --params '{"workbookId":"invalid-id"}'
```

The following structured error prints to `stdout`:

```json
{
  "code": 400,
  "error": "api",
  "message": "Expecting UUID at workbookId but instead got: \"inva...\"",
  "requestId": null
}
```

The error label prints to `stderr`:

```shell
error[api]: Expecting UUID at workbookId but instead got: "inva..."
```

## Enable debug logging

To troubleshoot errors when working with the Sigma CLI, you can enable debug logging by setting the `SIGMA_CLI_LOG` environment variable.

For example, to see the debug log when requesting a list of connections, run the following command:

```shell
SIGMA_CLI_LOG=debug sigma api connections list
```
