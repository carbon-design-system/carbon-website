# Emergency production deployment

1. Update and install dependencies
   ```bash
   git pull upstream master && yarn install --frozen-lockfile
   ```
2. Run build and test locally

   ```bash
   yarn build && yarn serve
   ```

   The build should succeed and be served under at http://localhost:9000/

3. Install IBM Cloud CLI (skip if already installed)
   ```bash
   curl -fsSL https://clis.cloud.ibm.com/install/osx | sh
   ```
4. Install Cloud Foundry CLI (skip if already installed)
   ```bash
   ibmcloud cf install
   ```
5. Get your one time passcode for IBM Cloud

   1. Log in to https://cloud.ibm.com
   2. Be sure you have the Carbon account selected (1569355 - IBM) in the dropdown to the right of "Manage" in the UI Shell header
   3. Click on your profile picture and select "Log in to CLI and API"
   4. Look for your "one time passcode" near the top of the modal and click to copy it

6. Log in to IBM Cloud
   Replace the asterisks with your one time passcode

   ```bash
   ibmcloud login -a "https://cloud.ibm.com" -u apikey -p ********** -o "carbon-design-system" -s "production" -r "us-south"
   ```

7. Deploy website
   ```bash
   ibmcloud cf v3-zdt-push carbon-website -b https://github.com/cloudfoundry/nginx-buildpack.git
   ```

# Vercel deployment previews

We use the [Vercel GitHub action](https://github.com/marketplace/actions/vercel-action) for deploy previews. This allows us to leverage GitHub action's caching mechanisms for quicker deploy previews when compared to Vercel's GitHub integration.

## Secrets

> **note:** Secrets can be managed in the [project settings](https://github.com/carbon-design-system/carbon-website/settings/secrets)

In the event of our VERCEL_TOKEN expiring, any team member can get a new token from their [vercel account page](https://vercel.com/account/tokens). The other two secrets (VERCEL_PROJECT_ID and VERCEL_ORG_ID) can be replaced by any team member by [linking the project](https://github.com/marketplace/actions/vercel-action#project-linking) locally.

## Testing or Sharing builds without GitHub

In the event you want to test/share a deployment without pushing to GitHub, download the `vercel` package globally through npm:

```bash
npm i -g vercel
```

To share the link with others, run `vercel` or `vc`
