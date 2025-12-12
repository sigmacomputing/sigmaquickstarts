author: pballai
id: security_oauth_pkce_secure_integration
summary: security_oauth_pkce_secure_integration
categories: Security
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2025-12-12

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
The server that authenticates the user and issues access tokens after successful authorization. For Sigma integrations, this is typically your cloud data warehouse's OAuth service (Snowflake, BigQuery, Redshift, etc.) or your corporate identity provider (Okta, Azure AD, etc.).

**Resource Server:**<br>
The server hosting the protected resources (data). For Sigma users, this is your cloud data warehouse (Snowflake, BigQuery, Redshift, Azure Synapse, etc.) that Sigma queries on the user's behalf.

### The Authorization Flow

Here's how OAuth 2.0 works when a user accesses embedded Sigma content:

1. **User initiates action**: User clicks on embedded Sigma dashboard in your application
2. **Authorization request**: Your application redirects user to the authorization server (this could be your corporate SSO provider like Okta/Azure AD for federated identity, or directly to the data warehouse OAuth endpoint)
3. **User authentication**: User logs in with their credentials
4. **Authorization grant**: User approves Sigma's access request to query data on their behalf
5. **Token exchange**: Your application receives an access token from the authorization server (if using federated identity, your application exchanges the SSO token for a data warehouse token)
6. **Sigma queries data**: Sigma uses the data warehouse token to query with the user's permissions

<aside class="positive">
<strong>NOTE:</strong><br> The authorization flow varies by implementation pattern. With federated identity (most common for embedded analytics), users authenticate via corporate SSO. With connection-level OAuth, users authenticate directly with the data warehouse.
</aside>

<aside class="positive">
<strong>KEY BENEFIT:</strong><br> OAuth 2.0 separates authentication from authorization, allowing fine-grained access control without sharing credentials.
</aside>

### Connection-Level vs Organization-Level OAuth

When implementing OAuth with Sigma, you have two primary approaches for managing authentication:

**Connection-Level OAuth:**
- Each user authenticates individually with the data platform (Snowflake, BigQuery, Redshift, etc.)
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
Consider an enterprise scenario where you want to embed Sigma dashboards into your customer portal:

**Without OAuth/PKCE:**
- Requires storing data warehouse credentials in your application or Sigma connection
- All Sigma users share the same database connection and permissions
- No per-user access control - everyone sees all data
- Difficult to audit which individual user ran which Sigma query
- Security risk if application is compromised - credentials exposed
- Cannot leverage warehouse-native row-level security features

**With OAuth/PKCE:**
- No credentials stored in your application or Sigma
- Each Sigma user authenticates with their own data warehouse identity
- Sigma queries respect each user's warehouse permissions automatically
- Complete audit trail showing which user accessed what data through Sigma
- Tokens expire automatically (typically 1 hour), limiting exposure window
- Leverages warehouse-native security (e.g., Snowflake row access policies, BigQuery row-level security)

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
- **Sigma Storage:** Refresh tokens are encrypted using unique keys per customer. Encryption keys are housed in a separate key store for enhanced security

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

OAuth scopes vary by data warehouse platform. Here are examples from commonly used platforms:

**Snowflake:**
- `session:role-any` - Allows Sigma to use any role the user has access to
- `refresh_token` - Enables refresh token generation for long-running sessions
- `session:scope:warehouse` - Permission to use warehouse resources for query execution

**Databricks:**
- `sql` - Permission for Sigma to execute SQL queries against the data warehouse
- `offline_access` - Allows Sigma to request refresh tokens for long-running sessions
- `all-apis` - Full API access (use with caution, grant only necessary permissions)

**BigQuery:**
- `https://www.googleapis.com/auth/bigquery` - Access to BigQuery API for running queries
- `https://www.googleapis.com/auth/bigquery.readonly` - Read-only access to BigQuery data
- `offline_access` - Allows Sigma to request refresh tokens

**General Concepts Across Platforms:**
- SQL execution permissions - Core access to run queries
- Refresh token capabilities - For long-running Sigma sessions
- Resource access controls - Permission to use compute/warehouse resources
- Metadata access - Ability to read schema and table information

**Note:** Consult your data platform's OAuth documentation for specific scope names and definitions. Most cloud data warehouses support similar security concepts with platform-specific naming conventions.

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
2. Application generates PKCE code challenge and redirects to data warehouse OAuth login
3. User logs in with their data warehouse credentials
4. Data warehouse issues access token to your application after validating PKCE verifier
5. Application passes encrypted token to Sigma via embed API
6. Sigma queries data warehouse using user's individual token and permissions

**Pros:**
- **Supports PKCE for enhanced security** - protects against authorization code interception
- True user-level access control in Sigma - each user sees only their authorized data
- Complete audit trail showing exactly which user ran which Sigma queries
- No credential management in your application or Sigma connections
- Leverages platform-native security (e.g., Snowflake row access policies, BigQuery row-level security)
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
1. Your application authenticates with shared warehouse service account
2. User identity passed via Sigma embed parameters (user attributes)
3. Sigma includes user attributes in SQL queries (e.g., WHERE user_id = ?)
4. Data warehouse row-level security or custom SQL enforces RLS based on user context
5. Query results automatically filtered per user permissions

**Pros:**
- Simplified authentication flow - no OAuth redirect for Sigma users
- Users don't need individual data warehouse accounts (cost savings)
- Centralized permission management in Sigma user attributes
- Smoother embedded Sigma user experience

**Cons:**
- Less granular audit trail - queries run as service account
- Requires implementing RLS logic in warehouse or Sigma SQL
- Service account credentials must be secured in Sigma connection
- Cannot leverage some warehouse user-level features

### Pattern 3: Federated Identity

**Scenario:** Corporate SSO integrated with both Sigma and data platform

**Flow:**
1. User logs into your application via corporate SSO (Okta, Azure AD, etc.)
2. Your application exchanges SSO token for data warehouse OAuth token
3. Data warehouse OAuth token passed to Sigma for embedded content
4. Sigma uses token to query data - single identity across all systems
5. User never sees additional login prompts

**Pros:**
- Seamless Sigma user experience - single corporate login covers everything
- Centralized identity management across application, Sigma, and data platform
- Consistent access policies enforced by corporate identity provider
- Easy onboarding/offboarding - one place to manage all access
- Best for enterprise deployments with existing SSO infrastructure

**Cons:**
- Most complex initial setup - requires SSO integration with data warehouse and Sigma
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
- Embedding Sigma for external customers who don't have data warehouse accounts
- You control user permissions at the application layer
- Cost of per-user data warehouse licenses is prohibitive
- You already have RLS implemented in your data warehouse
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

Before implementing OAuth 2.0 with PKCE for your Sigma deployment, ensure your environment meets the necessary requirements and understand common challenges you'll encounter.

### Platform Requirements

Your OAuth implementation requires support from both the authorization server (your data platform) and your application.

<aside class="positive">
<strong>GOOD NEWS:</strong><br> Major cloud data warehouses like Snowflake, BigQuery, Redshift, and Azure Synapse all support OAuth 2.0 with PKCE out of the box.
</aside>

**Authorization Server Must Support:**
- OAuth 2.0 authorization code flow
- PKCE extension (code challenge/verifier)
- Token refresh capability
- Configurable token expiration times
- Scope-based permission management
- Token revocation endpoints

**Your Application Must Support:**
- HTTPS/TLS for all OAuth communications
- Secure token storage (never in localStorage)
- Automatic token refresh before expiration
- Error handling for expired/invalid tokens
- OAuth redirect URI handling
- State parameter for CSRF protection

![Footer](assets/sigma_footer.png)
<!-- END OF SUBSECTION-->

## Common Implementation Challenges
Duration: 10

Let's walk through the four most common challenges teams face when implementing OAuth with Sigma, with practical solutions you can apply.

### Challenge 1: Token Refresh Timing

**The Problem:**

Your embedded Sigma dashboard is working perfectly. A user is exploring data, building visualizations, when suddenly: "Authentication Error - Token Expired." The access token expired mid-session, breaking their workflow.

**Why This Happens:**

Access tokens typically expire after 60 minutes. If you wait for the token to expire before refreshing, users will see errors when Sigma tries to query data.

**The Solution:**

Implement proactive token refresh that runs before expiration.

**Practical Example:**

```code
// Check token expiration every 5 minutes
setInterval(async () => {
  const tokenExpiry = getTokenExpiration();
  const now = Date.now();
  const timeUntilExpiry = tokenExpiry - now;

  // Refresh if less than 10 minutes remaining
  if (timeUntilExpiry < 10 * 60 * 1000) {
    await refreshAccessToken();
  }
}, 5 * 60 * 1000);
```

**Best Practices:**
- Refresh tokens when 5-10 minutes remain on the access token
- Queue Sigma API requests during the refresh process
- Implement retry logic with exponential backoff for failed refreshes
- Monitor refresh token success rates to catch issues early

<aside class="positive">
<strong>SIGMA TIP:</strong><br> Most Sigma customers refresh tokens proactively at the 10-minute mark to ensure users never experience query interruptions.
</aside>

### Challenge 2: Redirect URI Management

**The Problem:**

OAuth requires exact redirect URI matching. You register `https://app.example.com/callback` with your data warehouse, but your staging environment uses `https://staging.example.com/callback`. Result? OAuth fails in staging with "redirect_uri_mismatch" error.

**Why This Happens:**

For security, authorization servers require exact matches between registered redirect URIs and the URI in your OAuth request. Different environments (dev/staging/prod) need different URIs.

**The Solution:**

Register separate OAuth applications for each environment and use environment variables.

**Practical Example:**

```code
// config/oauth.js
const oauthConfig = {
  development: {
    clientId: process.env.DEV_OAUTH_CLIENT_ID,
    redirectUri: 'http://localhost:3000/oauth/callback'
  },
  staging: {
    clientId: process.env.STAGING_OAUTH_CLIENT_ID,
    redirectUri: 'https://staging.example.com/oauth/callback'
  },
  production: {
    clientId: process.env.PROD_OAUTH_CLIENT_ID,
    redirectUri: 'https://app.example.com/oauth/callback'
  }
};

const config = oauthConfig[process.env.NODE_ENV];
```

**Best Practices:**
- Create separate OAuth apps in your data warehouse for each environment
- Store client IDs and redirect URIs in environment variables
- Document all registered redirect URIs in your team wiki
- Use wildcard subdomains if your authorization server supports them
- Test OAuth flow in each environment before deploying

### Challenge 3: Secure Token Storage

**The Problem:**

A developer stores OAuth tokens in browser localStorage for convenience. Later, a security audit flags this as a critical XSS vulnerability - any malicious script can steal tokens and access your data warehouse.

**Why This Happens:**

localStorage is accessible to any JavaScript running on your page. If an attacker injects malicious code (XSS attack), they can steal tokens and impersonate users in Sigma.

**The Solution:**

Use httpOnly, secure cookies that JavaScript cannot access.

**Practical Example:**

```code
// Backend: Set token as httpOnly cookie (Node.js/Express)
app.post('/oauth/callback', async (req, res) => {
  const tokens = await exchangeCodeForTokens(req.query.code);

  // Store access token in httpOnly cookie
  res.cookie('sigma_access_token', tokens.access_token, {
    httpOnly: true,    // JavaScript cannot access
    secure: true,      // HTTPS only
    sameSite: 'strict', // CSRF protection
    maxAge: 3600000    // 1 hour
  });

  // Store refresh token separately with longer expiry
  res.cookie('sigma_refresh_token', tokens.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 90 * 24 * 3600000  // 90 days
  });

  res.redirect('/dashboard');
});
```

**Best Practices:**
- Always use httpOnly, secure cookies for tokens
- Implement Content Security Policy headers
- Use SameSite cookie attribute to prevent CSRF attacks
- For mobile apps, use platform-native secure storage (Keychain/KeyStore)
- Consider backend-for-frontend pattern for maximum security
- Never store tokens in localStorage, sessionStorage, or URL parameters

<aside class="negative">
<strong>SECURITY CRITICAL:</strong><br> Storing OAuth tokens in localStorage is a common but dangerous practice. Always use httpOnly cookies or secure backend storage.
</aside>

### Challenge 4: Mobile Deep Linking

**The Problem:**

A user clicks your embedded Sigma dashboard in your mobile app. OAuth redirects them to Safari/Chrome for data warehouse login. After authenticating, they're stuck in the browser - the app doesn't resume, and the user is confused.

**Why This Happens:**

OAuth redirects users to the authorization server's web login. Mobile apps need special URL schemes to redirect users back from the browser to the app.

**The Solution:**

Implement universal links (iOS) or app links (Android) to seamlessly return users to your app.

**Practical Example:**

```code
// iOS Universal Link Configuration (apple-app-site-association)
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAMID.com.example.app",
        "paths": ["/oauth/callback"]
      }
    ]
  }
}

// Handle OAuth callback in your app
func application(_ app: UIApplication,
                 continue userActivity: NSUserActivity,
                 restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {

  guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
        let url = userActivity.webpageURL,
        url.path == "/oauth/callback" else {
    return false
  }

  // Extract authorization code from URL
  let code = extractAuthCode(from: url)

  // Exchange for tokens and load Sigma embed
  exchangeCodeForTokens(code) { tokens in
    loadSigmaEmbed(with: tokens.accessToken)
  }

  return true
}
```

**Best Practices:**
- Configure universal links (iOS) or app links (Android)
- Test deep linking across different iOS/Android versions
- Preserve user's place in the app during OAuth redirect
- Implement custom URL schemes as fallback
- Handle cases where universal links aren't configured
- Provide clear visual feedback during OAuth redirect flow

![Footer](assets/sigma_footer.png)
<!-- END OF SUBSECTION-->

## Testing and Monitoring
Duration: 5

### Testing Your OAuth Implementation

**Local Development:**

Start by testing OAuth flows on your development machine:

```code
// Use localhost for development
const devRedirectUri = 'http://localhost:3000/oauth/callback';

// Mock authorization server for unit tests
const mockAuthServer = {
  generateTokens: () => ({
    access_token: 'mock_access_token',
    refresh_token: 'mock_refresh_token',
    expires_in: 3600
  })
};
```

**Key Tests to Run:**
- Successful OAuth authorization flow end-to-end
- Token expiration and automatic refresh
- Error handling when tokens are invalid
- PKCE code challenge/verifier validation
- Redirect URI mismatch scenarios

**Staging Environment:**

Register a separate OAuth application for staging and test with production-like data:

- Verify all redirect flows work correctly
- Test token refresh before expiration
- Simulate token expiration mid-session
- Test error conditions (network failures, invalid tokens)
- Verify Sigma embeds load with staging OAuth tokens

**Production Monitoring:**

Once deployed, monitor your OAuth implementation continuously:

```code
// Log OAuth events (but never log tokens!)
logger.info('OAuth authorization started', {
  userId: user.id,
  timestamp: Date.now()
});

logger.info('Token refresh succeeded', {
  userId: user.id,
  expiresIn: 3600,
  scopes: ['sql', 'offline_access']
});

logger.error('Token refresh failed', {
  userId: user.id,
  errorType: 'invalid_grant',
  // DO NOT log the actual token or refresh token
});
```

**Metrics to Monitor:**
- Token refresh success rate (target: >99%)
- Authorization flow success rate
- Average time for OAuth redirect flow
- Token expiration errors
- Unusual token usage patterns

<aside class="negative">
<strong>SECURITY WARNING:</strong><br> Never log access tokens, refresh tokens, or authorization codes. Log only token metadata like expiration time, scopes, and user ID.
</aside>

![Footer](assets/sigma_footer.png)
<!-- END OF SUBSECTION-->

## Compliance and Governance
Duration: 5

OAuth implementations must meet audit, privacy, and security requirements.

### Audit Requirements

**What to Log:**
- Token issuance events (who, when, which scopes)
- Data access through Sigma (which user queried what data)
- Token refresh and revocation events
- Failed authorization attempts
- Scope changes or permission grants

**Practical Example:**

```code
// Audit log entry for Sigma query
{
  "timestamp": "2025-12-08T14:30:00Z",
  "event_type": "sigma_query_executed",
  "user_id": "john.doe@example.com",
  "data_platform": "snowflake",
  "query_type": "dashboard_load",
  "dashboard_id": "sales_metrics_q4",
  "scopes_used": ["session:role-any", "refresh_token"],
  "rows_returned": 1523
}
```

**Retention:** Retain audit logs according to your compliance requirements (typically 1-7 years).

### Data Privacy

**User Consent:**

Users must understand what access they're granting when they authorize Sigma:

- Clearly document what data each OAuth scope accesses
- Show users which permissions Sigma is requesting
- Allow users to review granted permissions in account settings
- Provide easy permission revocation capability

**Privacy Controls:**
- Implement data access agreements for sensitive data
- Log data access for GDPR/CCPA compliance
- Allow users to export their access history
- Provide user data deletion capability

### Security Policies

**Token Lifetime Policies:**
- Access tokens: 60 minutes (standard for most platforms)
- Refresh tokens: 90 days maximum
- Implement token rotation on each refresh
- Revoke tokens immediately on user logout

**Rate Limiting:**

Prevent abuse by limiting OAuth requests:

```code
// Example rate limit: 10 token refresh requests per hour per user
const rateLimiter = {
  maxRequests: 10,
  windowMs: 3600000,  // 1 hour
  message: 'Too many token refresh requests'
};
```

**Regular Security Audits:**
- Review OAuth logs quarterly for suspicious patterns
- Test token revocation workflows
- Verify token encryption at rest
- Scan for exposed tokens in logs or error messages
- Update OAuth libraries to patch security vulnerabilities

<aside class="positive">
<strong>COMPLIANCE TIP:</strong><br> Most Sigma customers conduct OAuth security audits quarterly and review token access patterns monthly to catch issues early.
</aside>

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
