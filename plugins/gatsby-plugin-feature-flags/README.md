# gatsby-plugin-feature-flags

> An internal module for managing feature flags with the Carbon Design System
> website

## Usage

You can use feature flags to conditionally render pages on the website by
specifying the `flag` field in the frontmatter of the page that you're working
on.

```mdx
---
title: Example page title
flag: enable-feature-flag-a
---

...
```

Providing this flag will cause Gatsby to conditionally render the page based on
if that flag is enabled, or not. To enable the flag, you will need to
set the flag to true in your Gatsby [configuration](#configuration).

### At runtime

You can also incorporate feature flags while building product features through
Gatsby's `useStaticQuery` hook. This hook will allow you to pass in a GraphQL
query to collect all the feature flags defined for the project. You can then
use this data to determine if your feature should run, or not.

```js
import { useStaticQuery, graphql } from "gatsby";

const FEATURE_FLAG_QUERY = graphql`
  query featureFlagQuery {
    allFeatureFlag {
      edges {
        node {
          name
          value
        }
      }
    }
  }
`;

function MyDemoComponent() {
  const { allFeatureFlag: featureFlags } = useStaticQuery(FEATURE_FLAG_QUERY);
  // ...
}
```

## Configuration

You can add or configure feature flags in the
[`gatsby-config.js`](../gatsby-config.js) file under the
`gatsby-plugin-feature-flags` plugin options. For example:

```js
module.exports = {
  // ...
  plugins: [
    {
      resolve: "gatsby-plugin-feature-flags",
      options: {
        featureFlags: {
          "enable-feature-flag-a": true,
        },
      },
    },
  ],
};
```

It can be helpful to set feature flags based on ENV variables, to do so you can
read from `process.env` and then supply the value to the `featureFlags` option.
For example:

```js
const { ENABLE_FEATURE_FLAG_A } = process.env;

module.exports = {
  // ...
  plugins: [
    {
      resolve: "gatsby-plugin-feature-flags",
      options: {
        featureFlags: {
          "enable-feature-flag-a": !!ENABLE_FEATURE_FLAG_A,
        },
      },
    },
  ],
};
```
