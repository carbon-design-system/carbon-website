# Deployments

## Random (for staging or test links)

```bash
# Build
yarn build

# Login
ibmcloud login --sso  -a https://api.stage1.ng.bluemix.net  -o 'carbon@us.ibm.com' -s production

# Deploy to random url
ibmcloud cf push -f manifest.random.yml
```

## Production

```bash
# Build
yarn build

# Run build locally
npx serve public

# Test local production build of website
http://localhost:5000

## Login and push
ibmcloud login --sso -a https://api.ng.bluemix.net -o carbon-design-system -s production

# Make sure you have blue-green-deploy installed as a plugin for cf
ibmcloud cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
ibmcloud cf install-plugin blue-green-deploy -r CF-Community

# Deploy the external website
ibmcloud cf blue-green-deploy carbon-website -f manifest.production.yml --delete-old-apps

# Deploy external website without blue-green
ibmcloud cf push -f manifest.production.yml

```
