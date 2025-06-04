# Let's encrypt

[Let's Encrypt](https://letsencrypt.org/) is a free, automated way to get SSL
certificates for custom domains. Certificates generated with this tool last for
three months. Before they expire, one can renew them automatically using the
same tools that are used to generate a certificate.

## Generating a certificate

We can use the DNS challenge that is a part of the manual process outlined
[here](https://certbot.eff.org/docs/using.html#manual) to generate a certificate
for wildcard domains for our `carbondesignsystem.com` TLD.

To get started, you will need to install the
[`certbot`](https://certbot.eff.org/lets-encrypt/osx-other.html) utility. If
you're using homebrew, you can install this software by running the following in
your terminal:

```bash
brew install certbot
```

Once the `certbot` utility is available in your terminal, you can run the
following command:

```bash
certbot certonly \
  --config-dir config \
  --work-dir work \
  --logs-dir logs \
  --manual \
  --preferred-challenges dns \
  -d 'carbondesignsystem.com' \
  -d '*.carbondesignsystem.com'
```

The directory that you specify can be any directory, so feel free to change
those paths to whatever works for your machine. For example, you can create a
folder at `~/letsencrypt` and run the following:

```bash
certbot certonly \
  --manual \
  --preferred-challenges dns \
  -m 'carbon@us.ibm.com' \
  --agree-tos \
  --config-dir ~/letsencrypt/config \
  --work-dir ~/letsencrypt/work \
  --logs-dir ~/letsencrypt/logs \
  -d 'carbondesignsystem.com' \
  -d '*.carbondesignsystem.com'
```

After running this command, you should see an interactive prompt that asks a
couple of questions. The most notable of which is:

```bash
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
NOTE: The IP of this machine will be publicly logged as having requested this
certificate. If you're running certbot in manual mode on a machine that is not
your server, please ensure you're okay with that.

Are you OK with your IP being logged?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o:
```

For this question, you will need to select `(Y)es`, otherwise you will be unable
to move forward with this process.

The last step before you need to update the DNS for `carbondesignsystem.com`
will be to complete the DNS challenge(s).

```bash
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name
_acme-challenge.carbondesignsystem.com with the following value:

ABCDEFGH-_HIJK_LM_NOPQRSTUVWXYZ

Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

At this point, you will need to add the TXT record to our DNS provider. The name
of the sub-domain will be `_acme-challenge`. The type for the record will be
`TXT`. The value will be the value provided in that prompt above. You can verify
that the TXT record has been updated by running the following command in your
terminal:

```bash
nslookup -q=txt _acme-challenge.carbondesignsystem.com
```

After you add this record with your DNS provider, you can press enter to
continue.

**NOTE:** There may be a second or even a third challenge. Complete all the challenges as above before moving on.

If everything works properly, you should see the following prompt in your
terminal:

```bash
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /letsencrypt/config/live/carbondesignsystem.com/fullchain.pem
   Your key file has been saved at:
   /letsencrypt/config/live/carbondesignsystem.com/privkey.pem
   Your cert will expire on 2019-01-07. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /letsencrypt/config. You
   should make a secure backup of this folder now. This configuration
   directory will also contain certificates and private keys obtained
   by Certbot so making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

If you navigate to the directory inside of `~/letsencrypt/config/live/carbondesignsystem.com`, you should
see a `README.md` file that contains the following descriptions of the generate
files:

```
This directory contains your keys and certificates.

`privkey.pem`  : the private key for your certificate.
`fullchain.pem`: the certificate file used in most server software.
`chain.pem`    : used for OCSP stapling in Nginx >=1.3.7.
`cert.pem`     : will break many server configurations, and should not be used
                 without reading further documentation (see link below).

WARNING: DO NOT MOVE THESE FILES!
         Certbot expects these files to remain in this location in order
         to function properly!

We recommend not moving these files. For more information, see the Certbot
User Guide at https://certbot.eff.org/docs/using.html#where-are-my-certificates.
```

We will use the `fullchain.pem` file in our deployments with IBM Cloud.

### IBM Cloud

After generating the certificate files in the steps above, we will need to add
this certificate to IBM Cloud for our custom domain.

1. Click on "Manage > Account" in the top navigation
2. Click "Cloud Foundry Orgs"
3. Under the "... actions dropdown" click "domains"
4. Under the "..." menu for carbondesignsystem.com click "delete SSL Certificate"
5. Refresh the page if it freezes

In the table on the page, you should see an entry for `carbondesignsystem.com`.
In one of the columns, there should be a link to upload our certificates that we
generated in the steps above. After clicking that link, there should be a way to
choose a file for the certificate. The description for this option will roughly
be:

```
Certificate
Allowed file extensions: cert, cer, der, crt, pem, p7b, p7r, spc
```

You should upload the `fullchain.pem` file under this option. In addition, there
should be a field for the Private Key where you will upload the `privkey.pem`
file. Afterwards, continue the process and complete the upload step.

Once you have uploaded the files, you should see the SSL Certificate status set
to `Pending`. It should resolve in a couple of minutes! Once it shows as secure,
you should be able to visit any Cloud foundry applications with the secured
sub-domain (in this case \*.carbondesignsystem.com) and see the UI report that
the route is now secured with SSL 🎉.
