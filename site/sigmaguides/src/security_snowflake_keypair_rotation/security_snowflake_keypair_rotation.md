author: pballai
id: security_snowflake_keypair_rotation
summary: security_snowflake_keypair_rotation
categories: Administration
environments: web
status: Published
feedback link: https://github.com/sigmacomputing/sigmaquickstarts/issues
tags: default
lastUpdated: 2023-10-18


# Snowflake Key-pair Authorization

## Overview
Duration: 5 

Sigma supports Basic Auth (username + password) and Oauth for new Snowflake connections. 

With this feature release, we add support for the authentication method by key pair (public key + private key), for Snowflake connections.

Snowflake supports authentication using a combination of a public and private RSA key pair. The private key remains with the client (Sigma), and the corresponding public key is stored by the holder of the correct public key (in this case, Snowflake). 

The main idea is that Snowflake can verify the identity of the client without the client ever revealing its private key.

Every public key matches to only one private key. 

Private keys can have one or many public key holders (for example, multiple Sigma connections, if you prefer to use one private key).

Data encrypted with the private key can be decrypted only with the public key, and vice versa.

Together, they are used to encrypt and decrypt messages. In this case, the messages are Sigma's connection to Snowflake as configured in Sigma.

When keys are used for authentication, Sigma uses the private key to generate a digital signature. 

The client decrypts the signature using the public key and compares the hash with its own computed hash. If the values match, Sigma's authentication is successful.

We will discuss RSA encryption a little more in the next section, which is optional, but provided for it's educational value.

 ### Target Audience

Sigma administrators who are interested in implementing RSA connection encryption via key pair authorization and key rotation.

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

## RSA Encryption
Duration: 20

Snowflake uses RSA 2048-bit encryption for it's support of key pair authorization. 

Sigma is able to leverage this support via it's custom Go driver that is used to create connections to Snowflake. 

It is important to have a general understanding of RSA encryption (RSA) to appreciate just how good it is. We would be remiss if not to mention the three inventors behind RSA, who did the work way back in 1977. In fact, the name `RSA` is derived from their initials. They are:

<img src="assets/rsa1.png" width="800"/>

RSA has evolved over the many years but at it's core, the security lives in the difficulty in factoring of semi-prime numbers. 

A semi-prime number is a natural number that is the product of two prime numbers. 

Factoring a semi-prime results in two prime numbers. For example:

1515 is a semi-prime because it is the product of two prime numbers, 33 and 55.

There's no known algorithm that can factor large semi-primes in polynomial time (relative to the number of digits in the semi-prime). All known algorithms take time that grows at least exponentially with the size of the semi-prime, making them impractical for very large semi-primes.

There are quantum algorithms, like [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm), that can factor semi-primes in polynomial time. However, as of now, large-scale quantum computers that can run Shor's algorithm efficiently don't exist. If and when they do, they will pose a threat to cryptographic systems based on semi-prime factoring difficulty, like RSA in the long run.

#### The contest

The RSA Factoring Challenge was a challenge put forward by RSA Laboratories on March 18, 1991 with cash awards to successful participants.

The organizers published a list of semi-primes (numbers with exactly two prime factors) known as the RSA numbers, with a cash prize for the successful factorization of some of them. The smallest of them, a 100-decimal digit number called `RSA-100` was successfully factored by April 1, 1991. 

This is why you will never see anyone using RSA-100 in commercial applications today. In fact, the largest RSA number un-factored to date (in 2020) is `RSA-250`.

Many of the bigger numbers have still not been factored and are expected to remain un-factored for quite some time.

[You can read more about the content here:](https://en.wikipedia.org/wiki/RSA_Factoring_Challenge)

As mentioned earlier, Snowflake is using `RSA-2048` which has never been un-factored despite the cash prize for doing so being $200,000 at the time. 

RSA-2048 is considered by many to be currently impossible to factor, and may not be factorizable for many years to come, unless considerable advances are made in integer factorization or computational power. 

Of course, Sigma and Snowflake will adapt should progress be made in this area.

An example of what a RSA-2048 number looks like is:

<img src="assets/rsa2.png" width="800"/>

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Key Pair Auth
Duration: 20

Key pair authentication is a method of authenticating a user or service (Sigma connection) based on a pair of keys: a private key, which is kept secret, and a public key, which is shared. 

In the context of Snowflake, users or services can authenticate using RSA-2048 private keys rather than passwords.

Key rotation is the process of replacing an existing key with a new one, enhancing security.

Here are the basic steps:

**1: Key Pair Generation:**  
The user or service generates a pair of keys (private and public). This is typically done with [OpenSSL](https://www.openssl.org/)<br>

**2: Public Key Registration:** <br>
The Sigma connection is created and configured, using the private key created in step 1.

**3: Public Key Registration:** <br>
The public key is registered with Snowflake.

**4: Authentication:** <br>
For authentication of the Sigma connection request, Snowflake challenges Sigma, which Sigma proves by using their private key without revealing it.

**5: Key Rotation:** <br>
After a set period or under certain conditions, the old key pair is deprecated and a new key pair is generated. The new public key is then registered with Snowflake, and the process continues.

![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->

## Private Key Generation
Duration: 20

We will use OpenSSL to generate our encrypted private key. 

Generally, it is safer to generate encrypted keys although Sigma does support unencrypted private keys too. 

Sigma recommends communicating with your internal security and governance officers to determine which key type to generate prior to completing this step.

How OpenSSL is installed depends on your operating system; we are using Mac and macOS has shipped with OpenSSL preinstalled since 2000. If you are running a different O/S, consult [OpenSSL's documentation](https://www.openssl.org/docs/). 

You can also review the setup that [Snowflake recommends here](https://docs.snowflake.com/en/user-guide/key-pair-auth).

**Step 1:** Open a new `Terminal` session:

<img src="assets/rsa3.png" width="800"/>

<aside class="positive">
<strong>IMPORTANT:</strong><br> If you are not familiar with Terminal, make sure you know what folder (or directory) you are working in. The next command we run will create a file in that folder and you need to know where it lives. 
</aside>

Run the following command:
```code 
openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_2048_private_key.p8
```

<aside class="negative">
<strong>NOTE:</strong><br> If you do want to use an unencrypted private key, just append -nocrypt to the command provided above.
</aside>

We will place this new file on our Desktop.

You will be promoted to enter an encryption key. We will use `Fm*V@dWK5!apzu`. You can choose your own value or use this one. Just make sure to save your encryption key value somewhere safe if you use your own value.

<img src="assets/rsa4.png" width="800"/>

A new file called `rsa_2048_private_key.p8` is created on our Desktop:

<img src="assets/rsa5.png" width="300"/>



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