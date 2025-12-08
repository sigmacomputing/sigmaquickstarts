author: pballai
id: security_oauth_pkce_secure_integration
summary: security_oauth_pkce_secure_integration
categories: Security
environments: web
status: hidden
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: 
lastUpdated: 2025-12-03

# OAuth 2.0 & PKCE for Secure Data Integration

## Overview
Duration: 5

OAuth 2.0 with Proof Key for Code Exchange (PKCE) provides a secure authentication framework for integrating Sigma with cloud data platforms. When embedding Sigma analytics in your applications or implementing secure data access patterns, OAuth 2.0 with PKCE ensures that users authenticate with their own credentials and access only the data they're authorized to see.

This QuickStart explains the key concepts, security benefits, and implementation considerations for using OAuth 2.0 with PKCE in Sigma deployments. You'll understand why OAuth matters for both native and embedded analytics, how PKCE enhances security, and what patterns work best for different Sigma use cases.

This is a conceptual QuickStart designed to build foundational understanding and is not "hands-on".

<aside class="positive">
<strong>IMPORTANT:</strong><br> Some screens in Sigma may appear slightly different from those shown in QuickStarts. This is because Sigma continuously adds and enhances functionality. Rest assured, Sigma's intuitive interface ensures that any differences will not prevent you from successfully completing any QuickStart.
</aside>

For more information on Sigma's product release strategy, see [Sigma product releases](https://help.sigmacomputing.com/docs/sigma-product-releases)

If something doesn't work as expected, here's how to [contact Sigma support](https://help.sigmacomputing.com/docs/sigma-support)

### Target Audience
The typical audience for this QuickStart includes:
- Security architects and administrators planning Sigma deployments
- Data platform engineers integrating Sigma with cloud data warehouses
- Technical decision makers evaluating secure Sigma embedding patterns
- Developers implementing embedded Sigma analytics in custom applications

### Prerequisites

<ul>
  <li>Understanding of authentication and authorization concepts</li>
  <li>Familiarity with web application security principles</li>
  <li>Basic knowledge of OAuth 2.0 flows (recommended but not required)</li>
</ul>

<aside class="positive">
<strong>IMPORTANT:</strong><br> This QuickStart focuses on conceptual understanding. No trial accounts or hands-on setup is required.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF OVERVIEW -->

## Understanding OAuth 2.0
Duration: 10

### What is OAuth 2.0?

OAuth 2.0 is an industry-standard authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. Rather than sharing passwords, OAuth 2.0 allows users to grant applications access to their resources through secure token-based authentication.

### Key Components

**Resource Owner (User):**<br>
The person who owns the data and grants access to it. In Sigma deployments, this is typically an employee or customer accessing data through Sigma workbooks or dashboards embedded in your application.

**Client (Application):**<br>
The application requesting access to protected resources on behalf of the user. When using Sigma Embedding, this is your custom application hosting embedded Sigma content (dashboards, workbooks, or visualizations).

**Authorization Server:**<br>
The server that authenticates the user and issues access tokens after successful authorization. For Sigma integrations, this could be Databricks OAuth, Snowflake OAuth, or your corporate identity provider (Okta, Azure AD, etc.).

**Resource Server:**<br>
The server hosting the protected resources (data). For Sigma users, this is your cloud data warehouse (Databricks, Snowflake, BigQuery, etc.) that Sigma queries on the user's behalf.

### The Authorization Flow

Here's how OAuth 2.0 works when a user accesses embedded Sigma content:

1. **User initiates action**: User clicks on embedded Sigma dashboard in your application
2. **Authorization request**: Your application redirects user to data platform's OAuth endpoint (e.g., Databricks login)
3. **User authentication**: User logs in with their data platform credentials
4. **Authorization grant**: User approves Sigma's access request to query data on their behalf
5. **Token exchange**: Your application receives an access token from the authorization server
6. **Sigma queries data**: Sigma uses the token to query your data warehouse with the user's permissions

<aside class="positive">
<strong>KEY BENEFIT:</strong><br> OAuth 2.0 separates authentication from authorization, allowing fine-grained access control without sharing credentials.
</aside>

### Connection-Level vs Organization-Level OAuth

When implementing OAuth with Sigma, you have two primary approaches for managing authentication:

**Connection-Level OAuth:**
- Each user authenticates individually with the data platform (Databricks, Snowflake, etc.)
- Tokens are scoped to specific connections
- **Supports PKCE for enhanced security** (this is the key advantage)
- Ideal for embedded scenarios where user identity and individual permissions matter
- Each query runs with the authenticated user's credentials
- Provides the strongest audit trail and access control

**Organization-Level OAuth:**
- Uses a single service account or shared credentials for all users
- All users query through the same organizational identity
- Does not support PKCE
- Simpler initial setup but less granular access control
- Better for scenarios where all users have identical data permissions
- Requires implementing Row-Level Security (RLS) separately if user-specific data access is needed

<aside class="positive">
<strong>IMPORTANT:</strong><br> Sigma supports PKCE exclusively for connection-level OAuth. This is a key reason to choose connection-level authentication when implementing embedded analytics with user-specific data access requirements and enhanced security needs.
</aside>

### Why OAuth 2.0 for Sigma Deployments?

**Security:**<br>
No database credentials stored in Sigma or your application - users authenticate directly with the data platform

**Granular Control:**<br>
Each Sigma user queries data with their own permissions - see only what they're authorized to access

**Audit Trail:**<br>
Detailed logging shows which user ran which Sigma queries and when, meeting governance requirements

**User Experience:**<br>
Single sign-on enables seamless access to embedded Sigma content without additional logins

**Compliance:**<br>
Meets regulatory requirements (SOC 2, HIPAA, GDPR) for data access controls and auditability

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Understanding PKCE
Duration: 10

### What is PKCE?
Proof Key for Code Exchange (PKCE, pronounced "pixie") is an extension to OAuth 2.0 that provides additional security for public clients, particularly browser-based and mobile applications. When using Sigma, PKCE prevents authorization code interception attacks that could compromise user data access.

### The Security Problem PKCE Solves
Traditional OAuth 2.0 authorization code flow assumes the client can securely store a client secret. However, public
clients like browser-based and mobile applications cannot securely store secrets because:

- JavaScript code can be inspected in the browser
- Mobile applications can be decompiled
- OAuth secrets in client-side code can be extracted by attackers

This creates a vulnerability where an attacker could intercept the authorization code and exchange it for an access token, gaining unauthorized access to your data warehouse.

### How PKCE Works
PKCE adds two cryptographic elements to the authorization flow:

**Code Verifier:**<br>
A cryptographically random string (43-128 characters) generated by the client at the start of the flow. This remains secret on the client.

**Code Challenge:**<br>
A transformed version of the code verifier, created using SHA-256 hashing. This is sent to the authorization server.

### PKCE Flow Step-by-Step

1. **Client generates code verifier**: Random string created at flow start
2. **Client creates code challenge**: SHA-256 hash of code verifier
3. **Authorization request with challenge**: Client sends code challenge to auth server
4. **User authenticates**: Standard OAuth login flow occurs
5. **Authorization code returned**: Server sends code back to client
6. **Token request with verifier**: Client sends authorization code AND original code verifier
7. **Server validates**: Server hashes verifier, compares to stored challenge
8. **Token issued**: If match confirmed, access token provided

<aside class="negative">
<strong>CRITICAL SECURITY:</strong><br> Because the code verifier never leaves the client until token exchange, and the challenge cannot be reversed to get the verifier, an attacker intercepting the authorization code cannot exchange it for a token.
</aside>

### PKCE Benefits

**No Client Secret Required**: Eliminates the need to store secrets in public clients<br>

**Prevents Code Interception**: Even if authorization code is stolen, it's useless without the verifier<br>

**Backward Compatible**: Works with existing OAuth 2.0 infrastructure<br>

**Industry Best Practice**: Recommended by OAuth 2.0 Security Best Practices RFC<br>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## OAuth 2.0 + PKCE in Practice
Duration: 10

### Real-World Use Case: Embedded Sigma Analytics
Consider an enterprise scenario where you want to embed Sigma dashboards into your customer portal, with data stored in Databricks:

**Without OAuth/PKCE:**
- Requires storing Databricks credentials in your application or Sigma connection
- All Sigma users share the same database connection and permissions
- No per-user access control - everyone sees all data
- Difficult to audit which individual user ran which Sigma query
- Security risk if application is compromised - credentials exposed
- Cannot leverage Databricks Unity Catalog row-level security

**With OAuth/PKCE:**
- No credentials stored in your application or Sigma
- Each Sigma user authenticates with their own Databricks identity
- Sigma queries respect each user's Databricks permissions automatically
- Complete audit trail showing which user accessed what data through Sigma
- Tokens expire automatically (typically 1 hour), limiting exposure window
- Leverages Databricks Unity Catalog for fine-grained access control

### Token Lifecycle Management
**Access Tokens**
- Short-lived (typically 1 hour)
- Used for API requests
- Included in request headers
- Should never be logged or stored long-term
- **Sigma Storage:** Access tokens are stored in buffer and encrypted using envelope encryption with AES256

**Refresh Tokens**
- Longer-lived (up to 90 days)
- Used to obtain new access tokens
- Must be stored securely
- Can be revoked by authorization server
- **Sigma Storage:** Refresh tokens are stored in MySQL, encrypted using unique keys per customer. Encryption keys are housed in a separate key store for enhanced security

**Token Expiration Flow in Sigma**
1. User views embedded Sigma dashboard, Sigma queries data with access token
2. Data warehouse returns "token expired" error
3. Your application uses refresh token to request new access token from authorization server
4. New access token issued without user re-authentication
5. Sigma retries the query with new token - user experience uninterrupted

<aside class="positive">
<strong>BEST PRACTICE:</strong><br> Implement proactive token refresh logic before tokens expire to ensure Sigma users never experience query failures due to expired tokens. Most Sigma customers refresh tokens when they have 5-10 minutes remaining.
</aside>

### Scopes and Permissions
OAuth 2.0 uses "scopes" to define what access a token grants. When Sigma integrates with data platforms, scopes determine what Sigma can do on the user's behalf:

**Common Scope Examples for Sigma Integration:**

**Databricks:**
- `sql` - Permission for Sigma to execute SQL queries against the data warehouse
- `all-apis` - Full API access
- `offline_access` - Allows Sigma to request refresh tokens for long-running sessions
- `cluster:read` - Read access to compute cluster information
- `catalog:read` - Permission to access Unity Catalog metadata

**Snowflake:**
- `session:role-any` - Allows Sigma to use any role the user has access to
- `refresh_token` - Enables refresh token generation for long-running sessions
- `session:scope:warehouse` - Permission to use warehouse resources for query execution

**Note:** While scope names vary by platform, most cloud data warehouses support similar concepts: SQL execution permissions, refresh token capabilities, and resource access controls. Consult your data platform's OAuth documentation for specific scope names and definitions.

**Scope Request Flow:**
1. Your application requests specific scopes when initiating OAuth flow
2. Authorization server shows user what Sigma will be able to do
3. User approves or denies the requested scopes
4. Token is issued with only approved scopes
5. Data warehouse enforces scope restrictions on all Sigma queries

### Security Considerations

**Token Storage:**
- Never store tokens in localStorage vulnerable to [Cross-Site Scripting attack (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting)
- Use httpOnly cookies for web applications
- Use secure system keychains for mobile apps
- Encrypt tokens at rest if persistent storage required

**Token Transmission:**
- Always use HTTPS/TLS
- Include tokens in Authorization header, not URL parameters
- Validate SSL certificates
- Implement certificate pinning for mobile apps

**Token Revocation:**
- Implement token revocation endpoints
- Allow users to revoke access from settings
- Revoke tokens when user logs out
- Monitor for suspicious token usage patterns

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Integration Architecture Patterns
Duration: 10

### Pattern 1: Connection-Level OAuth with PKCE (Direct User Authentication)

**Scenario:** Users authenticate directly with data platform before accessing Sigma using connection-level OAuth with PKCE

**Flow:**
1. User accesses embedded Sigma dashboard in your application
2. Application generates PKCE code challenge and redirects to data platform OAuth login (e.g., Databricks)
3. User logs in with their data platform credentials
4. Data platform issues access token to your application after validating PKCE verifier
5. Application passes encrypted token to Sigma via embed API
6. Sigma queries data platform using user's individual token and permissions

**Pros:**
- **Supports PKCE for enhanced security** - protects against authorization code interception
- True user-level access control in Sigma - each user sees only their authorized data
- Complete audit trail showing exactly which user ran which Sigma queries
- No credential management in your application or Sigma connections
- Leverages platform-native security (e.g., Databricks Unity Catalog row-level security)
- Strongest security posture for embedded analytics

**Cons:**
- Requires all users to have individual data platform accounts (licensing cost)
- Additional login step interrupts embedded Sigma user experience
- More complex token management logic in your application

<aside class="positive">
<strong>RECOMMENDED FOR:</strong><br> Connection-level OAuth with PKCE is the preferred approach when security, auditability, and user-specific data access are primary requirements. This is the only pattern that supports PKCE in Sigma.
</aside>

### Pattern 2: Service Account with Row-Level Security

**Scenario:** Sigma connects using shared service account, data filtered by user attributes

**Flow:**
1. Your application authenticates with shared Databricks service account
2. User identity passed via Sigma embed parameters (user attributes)
3. Sigma includes user attributes in SQL queries (e.g., WHERE user_id = ?)
4. Databricks Unity Catalog or custom SQL enforces RLS based on user context
5. Query results automatically filtered per user permissions

**Pros:**
- Simplified authentication flow - no OAuth redirect for Sigma users
- Users don't need individual Databricks accounts (cost savings)
- Centralized permission management in Sigma user attributes
- Smoother embedded Sigma user experience

**Cons:**
- Less granular audit trail - queries run as service account
- Requires implementing RLS logic in Unity Catalog or Sigma SQL
- Service account credentials must be secured in Sigma connection
- Cannot leverage some Databricks user-level features

### Pattern 3: Federated Identity

**Scenario:** Corporate SSO integrated with both Sigma and data platform

**Flow:**
1. User logs into your application via corporate SSO (Okta, Azure AD, etc.)
2. Your application exchanges SSO token for Databricks OAuth token
3. Databricks OAuth token passed to Sigma for embedded content
4. Sigma uses token to query data - single identity across all systems
5. User never sees additional login prompts

**Pros:**
- Seamless Sigma user experience - single corporate login covers everything
- Centralized identity management across application, Sigma, and data platform
- Consistent access policies enforced by corporate identity provider
- Easy onboarding/offboarding - one place to manage all access
- Best for enterprise deployments with existing SSO infrastructure

**Cons:**
- Most complex initial setup - requires SSO integration with Databricks and Sigma
- Dependency on identity provider availability

### Choosing the Right Pattern for Sigma

**Use Connection-Level OAuth with PKCE (Pattern 1) when:**
- You need the strongest security posture with PKCE protection
- Regulatory compliance requires tracking which user ran which Sigma query
- Users already have individual data platform accounts
- Data sensitivity is very high (healthcare, financial)
- You want to leverage platform-native permissions in Sigma dashboards
- Enhanced security against authorization code interception is required

**Use Service Account with RLS when:**
- Embedding Sigma for external customers who don't have platform accounts
- You control user permissions at the application layer
- Cost of per-user data platform licenses is prohibitive
- You already have RLS implemented in Unity Catalog or your warehouse
- Sigma user experience is more important than granular audit trail

**Use Federated Identity when:**
- Enterprise SSO already deployed across your organization
- Embedding Sigma for internal employees only
- Multiple data platforms need consistent authentication
- User convenience is top priority
- You have resources for complex initial integration

<aside class="positive">
<strong>RECOMMENDATION:</strong><br> Most Sigma customers use federated identity patterns for internal employee access and service account patterns for external customer-facing embedded Sigma dashboards.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Implementation Considerations
Duration: 10

### Platform Support Requirements

**Authorization Server Requirements:**
- OAuth 2.0 compliance
- PKCE extension support
- Token refresh capability
- Configurable token expiration
- Scope management
- Token revocation endpoint

**Application Requirements:**
- HTTPS/TLS support
- Secure token storage
- Token refresh logic
- Error handling for expired tokens
- Redirect URI handling
- State parameter management (CSRF protection)

### Common Implementation Challenges

**Challenge 1: Token Refresh Timing**

**Problem:** Access tokens expire mid-session, interrupting user workflows

**Solution:**
- Implement proactive token refresh (refresh before expiration)
- Set up background refresh process
- Queue API requests during refresh
- Add retry logic with exponential backoff

**Challenge 2: Redirect URI Management**

**Problem:** OAuth requires exact redirect URI matching, complex with multiple environments

**Solution:**
- Register separate OAuth apps per environment
- Use environment variables for redirect URIs
- Implement wildcard subdomain support if available
- Document all registered URIs

**Challenge 3: Mobile Deep Linking**

**Problem:** OAuth redirects to browser, must return to app

**Solution:**
- Implement custom URL schemes
- Use universal links (iOS) or app links (Android)
- Handle app resumption gracefully
- Preserve application state across redirect

**Challenge 4: Token Storage on Web**

**Problem:** XSS vulnerabilities in browser-based apps

**Solution:**
- Use httpOnly, secure cookies
- Implement Content Security Policy
- Use SameSite cookie attribute
- Consider backend-for-frontend pattern

### Testing OAuth Flows

**Local Development:**
- Use localhost redirect URIs
- Mock authorization server for unit tests
- Implement token generation utilities
- Test token expiration scenarios

**Staging Environment:**
- Register separate OAuth application
- Test with production-like data
- Verify all redirect flows
- Test error conditions

**Production Monitoring:**
- Log OAuth errors (without logging tokens!)
- Monitor token refresh success rates
- Track authorization success/failure
- Alert on unusual patterns

<aside class="negative">
<strong>SECURITY WARNING:</strong><br> Never log access tokens, refresh tokens, or authorization codes. Log only token metadata (expiration, scopes, user ID).
</aside>

### Compliance and Governance

**Audit Requirements:**
- Log all token issuance events
- Track which users accessed what data
- Retain audit logs per compliance requirements
- Implement log analysis for anomaly detection

**Data Privacy:**
- Document what data each scope accesses
- Implement data access agreements
- Allow users to review granted permissions
- Provide permission revocation capability

**Security Policies:**
- Define token lifetime policies
- Establish refresh token rotation
- Implement rate limiting
- Regular security audits

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this QuickStart, we explored OAuth 2.0 and PKCE authentication patterns for secure data integration.

**Key Concepts:**
- OAuth 2.0 authorization framework and its components
- PKCE extension for enhanced security in public clients
- Token lifecycle management and refresh strategies
- Common integration architecture patterns
- Implementation challenges and solutions
- Security best practices and compliance considerations


To learn more about secure embedding:
- [Sigma Embedding Documentation](https://help.sigmacomputing.com/docs/embedding)
- [OAuth 2.0 Security Best Practices](https://tools.ietf.org/html/draft-ietf-oauth-security-topics)
- [PKCE RFC 7636](https://tools.ietf.org/html/rfc7636)

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