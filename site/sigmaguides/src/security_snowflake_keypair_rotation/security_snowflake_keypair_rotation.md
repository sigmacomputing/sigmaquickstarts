author: pballai
id: security_snowflake_keypair_rotation
summary: security_snowflake_keypair_rotation
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-10-18


# Snowflake Key-pair Rotation

## Overview 
Duration: 5 

Currently, Sigma supports Basic Auth (username + password) and Oauth for new Snowflake connections. 

With this feature release, we add support for the authentication method by key pair (public key + private key), for Snowflake connections.

Snowflake supports authentication using a combination of a public and private RSA key pair. The private key remains with the client (Sigma), and the corresponding public key is stored in Snowflake. 

The main idea is that Snowflake can verify the identity of the client without the client ever revealing its private key.

Every public key matches to only one private key. Together, they are used to encrypt and decrypt messages. Data encrypted with the private key can be decrypted only with the public key and vice versa.

When keys are used for authentication, Sigma uses the private key to generate a digital signature. The client decrypts the signature using the public key and compares the hash with its own computed hash. If the values match, Sigma's authentication is successful.

    Key Pair Authentication: This is a method of authenticating a user or service based on a pair of keys: a private key, which is kept secret, and a public key, which is shared. In the context of Snowflake, users or services can authenticate using RSA private keys rather than passwords.

    Key Rotation: Refers to the process of replacing an existing key with a new one, enhancing security.

Here's a simple representation:

    Key Pair Generation: The user or service generates a pair of keys (private and public).

    Public Key Registration: The public key is registered with Snowflake.

    Authentication: For authentication, Snowflake challenges the user/service, which they prove by using their private key without revealing it.

    Key Rotation: After a set period or under certain conditions, the old key pair is deprecated and a new key pair is generated. The new public key is then registered with Snowflake, and the process continues.


RSA relies on the difficulty of factoring large numbers. If n can be factored into p and q, then the private key d can be derived. This is why it's crucial to choose very large primes and to keep the private key secret.
Over the years, to ensure security against improving factorization techniques and increasing computational power, the recommended size of n has grown.


 ### Target Audience


### Prerequisites

<ul>
  <li>A computer with a current browser. It does not matter which browser you want to use.</li>
  <li>Access to a Sigma environment.</li>
  <li>Access to a Snowflake environment.</li>
  <li>Some familiarity with Sigma is assumed. Not all steps will be shown as the basics are assumed to be understood.</li>
</ul>

<aside class="postive">
<strong>IMPORTANT:</strong><br> Sigma recommends that you use non-production resources when doing QuickStarts.
</aside>

<button>[Sigma Free Trial](https://www.sigmacomputing.com/free-trial/)</button> <button>[Snowflake Free Trial](https://signup.snowflake.com/)</button>
  
### What You’ll Learn

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## **NEXT SECTION**
Duration: 20

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## What we've covered
Duration: 5

In this lab we learned how to.........

INSERT FINAL IMAGE OF BUILD IF APPROPRIATE

<!-- THE FOLLOWING ADDITIONAL RESOURCES IS REQUIRED AS IS FOR ALL QUICKSTARTS -->
**Additional Resource Links**

[Blog](https://www.sigmacomputing.com/blog/)<br>
[Community](https://community.sigmacomputing.com/)<br>
[Help Center](https://help.sigmacomputing.com/hc/en-us)<br>
[QuickStarts](https://quickstarts.sigmacomputing.com/)<br>
=======
Be sure to check out all the latest developments at [Sigma's First Friday Feature page!](https://quickstarts.sigmacomputing.com/firstfridayfeatures/)
<br>

[<img src="./assets/twitter.jpeg" width="75"/>](https://twitter.com/sigmacomputing)&emsp;
[<img src="./assets/linkedin.png" width="75"/>](https://www.linkedin.com/company/sigmacomputing)
[<img src="./assets/facebook.png" width="75"/>](https://www.facebook.com/sigmacomputing)

![Footer](assets/sigma_footer.png)
<!-- END OF WHAT WE COVERED -->
<!-- END OF QUICKSTART -->