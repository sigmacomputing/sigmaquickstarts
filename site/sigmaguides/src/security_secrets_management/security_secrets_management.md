author: pballai
id: security_secrets_management
summary: security_secrets_management
categories: security
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2026-12-31

# Secrets Management in Sigma

## Overview
Duration: 5

Connect Sigma to an external secret manager — [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) or [HashiCorp Vault](https://www.hashicorp.com/en/products/vault) — so database credentials live in your own vault instead of being typed directly into a Sigma connection.

Sigma supports two secret managers, each with its own integration flow. Read the section that matches your environment — `Connect AWS Secrets Manager to Sigma` or `Connect HashiCorp Vault to Sigma` — then continue with the shared steps that apply no matter which one you chose:

- Connect AWS Secrets Manager or HashiCorp Vault to Sigma and complete the trust handshake
- Add a secret in Sigma and map it to the right key or path
- Attach a secret to a connection using the secret manager toggle
- Track where each secret is being used with the `Secret access` tab

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> Credentials stay where your security team already manages them. Sigma never stores the underlying password — it only holds a reference to the secret, and every connection that draws on it is visible in one place.
</aside>


<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
This QuickStart is for Sigma organization admins and security teams responsible for managing connection credentials, particularly those who already store secrets in AWS Secrets Manager or HashiCorp Vault.

### Prerequisites

<ul>
  <li>Admin account type in your Sigma organization.</li>
  <li>Access to an AWS Secrets Manager or HashiCorp Vault instance. If you don't already have a secret stored, this QuickStart walks through creating one.</li>
  <li>Permission to create IAM policies and roles in the AWS account that owns the secret (for the AWS Secrets Manager path).</li>
  <li>A Snowflake connection using key pair authentication — this guide's running example stores the private key and passphrase as secrets. If you don't already have a key pair generated, see <a href="https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index">Snowflake Key-pair Authorization</a> before continuing.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown, as the basics are assumed to be understood.</li>
 </ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma recommends using non-production resources when completing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Some features may carry a "Beta" tag. Beta features are subject to quick, iterative changes. As a result, the latest product version may differ from the contents of this document.
</aside>

![Footer](assets/sigma_footer.png)

## Connect AWS Secrets Manager to Sigma
Duration: 15

Before Sigma can reference a secret, it needs a trusted integration with the secret manager that stores it. This section covers AWS Secrets Manager, which uses AWS Security Token Service (STS) cross-account role assumption — Sigma assumes a role in your AWS account rather than holding a long-lived AWS key.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Generate your Snowflake key pair before starting this section — you'll need the private key and passphrase in hand to store them as secrets later on. See <a href="https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index">Snowflake Key-pair Authorization</a> if you haven't done this yet.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> Using HashiCorp Vault instead? Skip ahead to `Connect HashiCorp Vault to Sigma`, then rejoin this QuickStart at `Add and Use a Secret`.
</aside>

### Create an IAM policy in AWS

Log in to the AWS Management Console as an administrator and open the `IAM` console. In the left navigation menu, click `Policies`, then `Create policy`:

<img src="assets/sm_01.png" width="800"/>

Select the `JSON` tab and paste a policy (replacing the sample JSON) that grants read access to your secrets:

```copy-code
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret"
      ],
      "Resource": "arn:aws:secretsmanager:{region}:{aws-account-id}:secret:*"
    }
  ]
}
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace `{region}` and `{aws-account-id}` with your actual AWS region and 12-digit account ID before creating the policy. Leaving the placeholders in place causes AWS to reject the policy with "The policy failed legacy parsing" — the ARN grammar requires real values, not placeholder text. Your region is visible in the browser's URL bar (for example, `us-east-1` in `https://us-east-1.console.aws.amazon.com/...`); your account ID is in the AWS Console's account menu in the top right.
</aside>

<img src="assets/sm_01a.png" width="800"/>

Scroll down and click `Next`, enter a policy name (for example, `SigmaSecretsManagerPolicy`), and scroll down to click `Create policy`:

<img src="assets/sm_01b.png" width="700"/>

### Create an IAM role in AWS

In the IAM console, click `Roles`, then `Create role`. 

<img src="assets/sm_01c.png" width="800"/>

Select `AWS account` as the trusted entity type, then `AWS account`:
- Account ID: enter your own 12-digit AWS account ID as a temporary placeholder — you'll replace this with Sigma's IAM Principal ARN in a later step

- Select `Require external ID` and enter a temporary placeholder value (for example, `0000`) — you'll replace this with Sigma's generated External ID in a later step
- Leave `Require MFA` unchecked

<img src="assets/sm_01d.png" width="800"/>

Click `Next`.

- Select the policy you created above (`SigmaSecretsManagerPolicy`), click `Next` again,

<img src="assets/sm_02.png" width="800"/>

- Enter a role name (for example, `SigmaSecretsManagerRole`), and scroll down to click `Create role`.

<img src="assets/sm_02a.png" width="800"/>

- Open the new role

<img src="assets/sm_02b.png" width="800"/>

- Copy its Role ARN — you'll need it in the next step.

<img src="assets/sm_02c.png" width="800"/>

### Register the integration in Sigma

In Sigma, navigate to `Administration` > `Authentication` > `Secret Manager`, then click `Add secret manager`:

<img src="assets/sm_03.png" width="800"/>

Select `AWS Secrets Manager` as the type and `AWS STS` as the authentication method, then fill in:

- Integration Name: a descriptive name for this integration (`Sigma-AWS-Secrets-Integration`)
- Region: the AWS Region where your secrets reside (for example, `us-east-1`)
- Role ARN: the Role ARN you copied from AWS
- Role Session Name (optional): a custom session identifier for tracking requests in AWS CloudTrail
- Secret Format: select `Plain text`

The default format for secrets is `JSON` with `Plain text`, `Base64`, or `Base64-encoded JSON` as options. Pick based on the shape of what you're storing: `JSON` fits structured credentials with multiple related fields — AWS Secrets Manager's built-in templates (for example, "Credentials for RDS database") store username and password as JSON key-value pairs by default, and `JSON` lets you reference a specific field with a `Key path`. `Plain text` fits a single atomic value — a password, an API key, or a multi-line value like a private key or certificate, where forcing it into a JSON string risks losing line breaks (see the Snowflake key pair example later in this guide):

<img src="assets/sm_03a.png" width="700"/>

Click `Add`, then open the new integration from the list and record the generated IAM Principal ARN and External ID.

<img src="assets/sm_03b.png" width="600"/>

### Complete the trust handshake in AWS

Return to the AWS IAM console and select the role you created (`SigmaSecretsManagerRole`). Open the `Trust relationships` tab, click `Edit trust policy`:

<img src="assets/sm_03c.png" width="800"/>

Replace the placeholder values with the `IAM Principal ARN` and `External ID` Sigma generated:

```copy-code
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "{iam-principal-arn-from-sigma}"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "{external-id-from-sigma}"
        }
      }
    }
  ]
}
```

<aside class="negative">
<strong>IMPORTANT:</strong><br> Replace `{iam-principal-arn-from-sigma}` and `{external-id-from-sigma}` with the actual values Sigma generated in the previous step. As with the IAM policy above, leaving placeholder text in place causes AWS to reject the trust policy with a parsing error.
</aside>

Click `Update policy`. Sigma can now assume the role and read secrets from this AWS account.

<aside class="positive">
<strong>NOTE:</strong><br> The integration is registered, but you haven't confirmed it actually works yet. Skip ahead to `Add and Use a Secret` to add a secret and attach it to a connection — that's where you'll verify the trust handshake succeeds end to end.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Connect HashiCorp Vault to Sigma
Duration: 15

Before Sigma can reference a secret, it needs a trusted integration with the secret manager that stores it. This section covers HashiCorp Vault, which uses Self-Signed JWT authentication — Sigma acts as a JWT issuer, and Vault verifies tokens Sigma signs rather than Sigma holding a long-lived Vault token.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Generate your Snowflake key pair before starting this section — you'll need the private key and passphrase in hand to store them as secrets later on. See <a href="https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index">Snowflake Key-pair Authorization</a> if you haven't done this yet.
</aside>

<aside class="negative">
<strong>NOTE:</strong><br> Using AWS Secrets Manager instead? You've already completed the trust handshake in `Connect AWS Secrets Manager to Sigma` — skip ahead to `Add and Use a Secret`.
</aside>

<aside class="positive">
<strong>IMPORTANT:</strong><br> Your Vault instance must be reachable over HTTPS from Sigma — a purely local or internal-only Vault won't work on its own. Below are two ways to get there: a managed HCP Vault Dedicated instance (Option A), or a local Vault server exposed through a tunnel (Option B).
</aside>

### Option A: Set up an HCP Vault Dedicated instance

If you don't already have a Vault instance, HashiCorp Cloud Platform (HCP) gives you a managed one with a public HTTPS endpoint out of the box — no infrastructure to stand up yourself.

Sign up at [HashiCorp Cloud Platform](https://cloud.hashicorp.com/) and create an organization. When prompted for the organization type, select `Business` — HashiCorp's own guidance recommends this even for testing, since it ties the organization to your company rather than an individual, and it can't be changed after creation.

You'll land on your project's dashboard, listing HCP's available services (Boundary, Packer, Terraform, Vault Dedicated, and others). Click  `Vault Dedicated`:

<img src="assets/sm_07y.png" width="800"/>

<aside class="negative">
<strong>IMPORTANT:</strong><br> Use `Vault Dedicated`, not `Vault Radar` — Radar is a secrets-scanning product, not the key-value secret store this guide needs.
</aside>

Create your first Vault cluster from here:

<img src="assets/sm_07z.png" width="800"/>

The default settings are fine for this QuickStart but give the cluster a unique `Cluster ID and also select a `Vault tier` of `Development`.

<img src="assets/sm_07c.png" width="700"/>

Click `Create Cluster`:

<img src="assets/sm_07a.png" width="800"/>

The process can take between 5-10 minutes for the cluster to initialize:

<img src="assets/sm_07b.png" width="800"/>

### Option B: Run a local Vault dev server

For a quick way to get a testable Vault instance without provisioning managed infrastructure, run Vault locally in dev mode and expose it through a tunnel. This is a fast path for testing this integration — it isn't a production setup.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Dev mode stores everything in memory (nothing persists once you stop the process), auto-unseals, and hands you a root token with full access. Use this only for testing this integration, never for real secrets.
</aside>

Install Vault and start a dev server:

```copy-code
brew tap hashicorp/tap
brew install hashicorp/tap/vault
vault server -dev
```

<!-- <img src="assets/sm_08.png" width="800"/> -->

Vault prints a root token and an "Unseal Key" to the terminal on startup — note the root token, you'll need it for the CLI commands below. In a new terminal tab, point the Vault CLI at your dev server:

```copy-code
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='{root-token-from-startup-output}'
```

Now expose it over HTTPS with a tunnel — using [ngrok](https://ngrok.com/) as an example:

```copy-code
ngrok http 8200
```

<!-- <img src="assets/sm_08a.png" width="800"/> -->

ngrok prints a `Forwarding` URL like `https://{random-subdomain}.ngrok-free.app` — that's your `Vault URL` for registering the integration in Sigma. Vault itself is still just speaking plain HTTP on `localhost:8200`; the tunnel is what terminates HTTPS, so Sigma sees a valid HTTPS endpoint either way.

### Enable a JWT auth method in Vault

Working from the Vault CLI (or an equivalent HTTP API call), create a policy granting read-only access to the secret path(s) you want Sigma to reach:

```copy-code
vault policy write {your-policy-name} - <<EOF
path "{mount-path-for-secret}/data/{path-to-secret}/*" {
  capabilities = ["read"]
}
path "sys/mounts/{mount-path-for-secret}/tune" {
  capabilities = ["read"]
}
EOF
```

Enable the JWT auth method at a mount path of your choosing:

```copy-code
vault auth enable -path={mount-path} jwt
```

<!-- <img src="assets/sm_09.png" width="800"/> -->

<aside class="negative">
<strong>IMPORTANT:</strong><br> `{mount-path-for-secret}` above is the mount path for your KV secrets engine (where the actual secret values live) — a separate thing from `{mount-path}` for the JWT auth method you just enabled. Don't reuse the same value for both without meaning to; they serve different purposes.
</aside>

Create a Vault role tied to that JWT auth method and policy, binding the `Subject ID` and `Audience ID` Sigma will generate once you register the integration:

```copy-code
vault write auth/{mount-path}/role/{your-policy-name} \
  role_type="jwt" \
  bound_audiences="{audience-id-from-sigma}" \
  bound_subject="{subject-id-from-sigma}" \
  user_claim="sub" \
  policies="{your-policy-name}" \
  ttl="1h"
```

<!-- <img src="assets/sm_09a.png" width="800"/> -->

<aside class="positive">
<strong>NOTE:</strong><br> You won't have real values for `{audience-id-from-sigma}` and `{subject-id-from-sigma}` yet — Sigma generates those once you register the integration in the next step. Come back and update this role afterward, or set a placeholder now and revisit it as part of completing the trust handshake below.
</aside>

### Register the integration in Sigma

In Sigma, navigate to `Administration` > `Authentication` > `Secret Manager`, then click `Add secret manager`. Select `HashiCorp Vault` as the type and `Self-Signed JWT` as the authentication method, then fill in:

- Integration Name: a descriptive name for this integration
- Vault URL: your Vault instance's HTTPS address — the HCP cluster's endpoint (Option A) or your tunnel's `Forwarding` URL (Option B)
- Mount path: the JWT auth method's mount path in Vault
- Vault role: the role you created above
- Audience ID: the same `Audience` value from that role
- CA certificate (optional): only needed if your Vault instance uses a private or self-signed certificate — not applicable for either option above, since HCP and ngrok/Cloudflare Tunnel both terminate with publicly-trusted certificates
- Secret Format: pick based on the shape of what you're storing — see the note in `Connect AWS Secrets Manager to Sigma` on `JSON` vs `Plain text`

<!-- <img src="assets/sm_09b.png" width="700"/> -->

Click `Add`, then open the new integration from the list and record the generated `Subject ID`, `Issuer ID`, and `Public Key`.

<!-- <img src="assets/sm_09c.png" width="600"/> -->

### Complete the trust handshake in Vault

Using the `Subject ID`, `Issuer ID`, and `Public Key` Sigma generated, configure Vault's JWT auth method to trust Sigma as a token issuer:

```copy-code
vault write auth/{mount-path}/config \
  bound_issuer="{issuer-id-from-sigma}" \
  jwt_validation_pubkeys="{public-key-from-sigma}"
```

Then go back and update the role you created earlier with the real `Subject ID` and `Audience ID` (replacing any placeholder values you set before the integration existed):

```copy-code
vault write auth/{mount-path}/role/{your-policy-name} \
  role_type="jwt" \
  bound_audiences="{audience-id-from-sigma}" \
  bound_subject="{subject-id-from-sigma}" \
  user_claim="sub" \
  policies="{your-policy-name}" \
  ttl="1h"
```

<!-- <img src="assets/sm_09d.png" width="800"/> -->

<aside class="positive">
<strong>NOTE:</strong><br> The integration is registered, but you haven't confirmed it actually works yet. Continue to `Add and Use a Secret` to add a secret and verify the trust handshake succeeds end to end.
</aside>

<aside class="negative">
<strong>IMPORTANT:</strong><br> This section is a first draft based on Vault's authentication model and has not yet been validated against a live HCP Vault instance — exact field names, button labels, and CLI/UI steps may need correction once tested. The `vault write auth/{mount-path}/config` command above is reconstructed from Vault's documented JWT auth method parameters (`bound_issuer`, `jwt_validation_pubkeys`), not copied verbatim from a confirmed working example — double check it once you can actually test it.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Add and Use a Secret
Duration: 10

With the trust handshake complete, create a secret in AWS Secrets Manager (if you don't already have one) and then reference it in Sigma. Sigma only stores a reference to it — **the value itself stays in AWS Secrets Manager.**

### Create secrets in AWS Secrets Manager

A Snowflake key pair connection needs two separate credential pieces — the private key and its passphrase — so you'll create two secrets, one per value. Each gets attached to a different field on the connection later in this guide.

<aside class="negative">
<strong>IMPORTANT:</strong><br> Store both as `Plaintext`, not `Key/value`. A private key is multi-line, and the `Key/value` tab is a single-line input — pasting multi-line content into it silently flattens the real line breaks into spaces, which breaks the key. See Common Issues below for more on this.
</aside>

**Private key secret:**

Open the AWS `Secrets Manager` console, click `Store a new secret`:

<img src="assets/sm_05.png" width="800"/>

Select `Other type of secret`, then click the `Plaintext` tab.

Paste your full encrypted private key — including the `-----BEGIN ENCRYPTED PRIVATE KEY-----` and `-----END ENCRYPTED PRIVATE KEY-----` lines — keeping its original line breaks exactly as they are. Choose the default encryption key (`aws/secretsmanager`) unless your organization requires a customer-managed key.

<img src="assets/sm_05a.png" width="800"/>

Click `Next`, enter a secret name (for example, `sigma-snowflake-privatekey`):

<img src="assets/sm_05b.png" width="800"/>

Click `Next` through the remaining screens (automatic rotation is optional, and this walkthrough skips it), then click `Store` on the final `Review` page.

The new secret is not listed until the page is refreshed.

**Passphrase secret:**

Repeat the same steps — `Store a new secret` > `Other type of secret` > `Plaintext` tab — but this time paste only the raw passphrase (the passphrase that is paired with the private key), with nothing else around it: no quotes, no braces, no trailing space or newline.

Name it something you'll recognize later (for example, `sigma-snowflake-passphrase`), then `Store`.

<aside class="positive">
<strong>NOTE:</strong><br> You now have two secrets — `sigma-snowflake-privatekey` and `sigma-snowflake-passphrase` — each holding one raw value with nothing wrapped around it. That's what makes the next steps simple: no `Key path` to configure for either one.
</aside>

### Add the secrets in Sigma

In Sigma, navigate to `Administration` > `Authentication` > `Secret Manager`, then open the integration you created. On the `Secrets` tab, click `Add secret`:

<img src="assets/sm_04.png" width="800"/>

**Private key secret** — fill in:

- Secret name: a friendly label for Sigma, for example:

```copy-code
snowflake-private-key
```

- Secret reference: the AWS secret's own name, for example:

```copy-code
sigma-snowflake-privatekey
```

- Secret format: `Plain text` — the private key is a single raw value, not JSON

Click `Add`:

<img src="assets/sm_05e.png" width="400"/>

**Passphrase secret** — repeat the same steps with:

```copy-code
snowflake-passphrase
```

as the Secret name,

```copy-code
sigma-snowflake-passphrase
```

as the Secret reference, `Secret format` = `Plain text`, and `Key path` left blank.

`Secret format` = `Plain text`.

Click `Add`.

Both secrets now appear in the `Secrets` list for this integration.

<aside class="negative">
<strong>IMPORTANT:</strong><br> `Secret reference` points at the secret itself — not at the IAM role from the previous section (`SigmaSecretsManagerRole`). That role identifies who Sigma assumes to read secrets; it isn't a secret you'd ever reference here.
</aside>

<aside class="positive">
<strong>NOTE:</strong><br> If your own secret is stored as JSON instead of a single raw value, use `Secret format` = `JSON` and set `Key path` to the JSON key name whose value you want — never the value itself. Dot-separated key names (for example, `db.credentials.password`) walk down into nested JSON. Check a secret's structure anytime via `Retrieve secret value` in the AWS console.
</aside>

### Confirm Sigma can retrieve both secrets

Before attaching these secrets to a connection, confirm the trust handshake actually works for each one. Open a secret, click the `3-dot` menu > `Test`:

<img src="assets/sm_05d.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> A successful test confirms Sigma can assume the AWS role and read that secret's value — the same permissions a connection will use once you attach it. Repeat this for the second secret too; a passing test on one doesn't confirm the other.
</aside>

If `Test access` fails, double check that the IAM role's trust policy has the exact `IAM Principal ARN` and `External ID` Sigma generated, and that the IAM policy's `Resource` ARN covers the secret you're referencing. 

<aside class="positive">
<strong>IMPORTANT:</strong><br> Passing `Test access` confirms Sigma can retrieve *a* value — it doesn't confirm that value is correct for its intended use. See Common Issues below if a connection still fails after both secrets pass their tests.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Attach a Secret to a Connection
Duration: 5

With a secret added and confirmed working, attach it to whichever connection field needs it. This section uses a Snowflake connection configured with key pair authentication as the running example — if you don't already have a Snowflake key pair, see [Snowflake Key-pair Authorization](https://quickstarts.sigmacomputing.com/guide/security_snowflake_keypair_rotation/index) for how to generate one before continuing.

Each sensitive credential field on a connection — `Password`, `Private key`, `Private key passphrase`, depending on the connection type — has its own `Use secret manager` toggle, so you can mix secret-manager-backed fields with directly-entered ones on the same connection.

### Enable the secret manager toggle on a connection

In Sigma, navigate to `Administration` > `Connections`, then open the connection you want to update (or create a new one).

On the `Private key` field, turn on `Use secret manager`, then fill in:

- Secret manager: the integration you created earlier (for example, `Sigma-AWS-Secrets-Integration`)
- Secret: `snowflake-private-key`

Repeat for `Private key passphrase`, this time selecting `snowflake-passphrase` as the secret.

<img src="assets/sm_06a.png" width="800"/>

<aside class="negative">
<strong>NOTE:</strong><br> Each credential field toggles independently, so you could leave `Private key` entered directly (via `Add key file`) while only `Private key passphrase` uses the secret manager. That partially defeats the purpose, though — putting both in the secret manager is the better practice, so neither credential piece is typed directly into Sigma.
</aside>

Click `Save`.

If everything is correct, a success message will appear. If not, an error will appear at the top of the page.

<aside class="positive">
<strong>WHY IT MATTERS:</strong><br> The connection never stores the private key or passphrase directly — only a pointer to the secret. Rotate the value in AWS Secrets Manager, and every connection referencing it picks up the change automatically, with nothing to update in Sigma.
</aside>

Confirm the connection still works — Browse the connection, open a workbook that uses it, or run a query against it, to verify the secret-manager-backed credentials authenticate correctly.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Monitor Secret Usage
Duration: 5

### ...placeholder — Secret access tab, which connections/API connectors use a secret

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Common Issues
Duration: 10

Secret manager integrations involve a lot of moving pieces — AWS IAM, Sigma's own configuration, and the shape of the secret's underlying value. Most problems trace back to one of the issues below.

### Multi-line values losing their line breaks

AWS's `Key/value` tab is a single-line input, not a multi-line textarea. Pasting a multi-line value — a private key, a certificate — into it can silently flatten all the real line breaks into spaces. If you need to store multi-line content, use the `Plaintext` tab instead, and verify the result by reopening the secret and checking that it still spans multiple lines.

### The "Plaintext" tab shows the raw value, not a "cleaned up" one

Viewing a secret under AWS's `Plaintext` tab does not prove it was created as plain text — it just displays whatever the raw stored string is. If a secret was actually created via the `Key/value` tab, its `Plaintext` view will still show the JSON wrapper (for example, `{"mykey":"myvalue"}`), not a stripped-down plain value. If you see a JSON wrapper where you expected plain text, you need to edit the secret and retype the value directly under `Plaintext`.

### "Failed to retrieve secret from your secret manager" on every secret at once

If this error shows up for secrets that previously worked — not just a new one — the problem is usually the trust relationship, not any individual secret. Check that the AWS IAM role's trust policy `sts:ExternalId` still matches the `External ID` shown on the integration's detail page in Sigma. If the integration is ever deleted and recreated, Sigma generates a new `External ID` and `IAM principal ARN`, and the AWS-side trust policy needs to be updated to match — otherwise every secret tied to that integration fails, since Sigma can no longer assume the role at all.

### Changes not taking effect immediately

After fixing something on either side — the AWS secret's value, the IAM trust policy, the Sigma integration — refresh the Sigma page before retrying `Test` or the connection. Stale cached state can make a real fix look like it didn't work.

<aside class="negative">
<strong>IMPORTANT:</strong><br> A passing `Test` on a secret confirms Sigma can retrieve *something* from AWS — it does not confirm that value is correct for what you intend to use it for. `Test` has no way to know a private key passphrase should decrypt a specific key, for example. If a connection fails despite every secret passing `Test`, double check the actual stored value character by character rather than assuming the secret manager integration itself is broken.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we ...

- ...
- ...

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
