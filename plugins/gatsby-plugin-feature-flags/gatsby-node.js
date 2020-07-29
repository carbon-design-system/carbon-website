exports.onCreatePage = ({ page, actions }, pluginOptions) => {
  if (!page.context.frontmatter) {
    return;
  }

  if (!page.context.frontmatter.flag) {
    return;
  }

  const { deletePage } = actions;
  const { featureFlags } = pluginOptions;
  const { flag } = page.context.frontmatter;

  if (featureFlags[flag] === undefined) {
    throw new Error(`Unable to find a feature flag named: \`${flag}\``);
  }

  const enabled = featureFlags[flag];
  if (!enabled) {
    deletePage(page);
  }
};

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions;

  for (const [key, value] of Object.entries(pluginOptions.featureFlags)) {
    const node = {
      id: createNodeId(`feature-flag-${key}`),
      parent: null,
      children: [],
      internal: {
        type: 'FeatureFlag',
        description: `A flag used for enabling the ${key} feature`,
        contentDigest: createContentDigest({
          name: key,
          value,
        }),
      },
      name: key,
      value,
    };
    createNode(node);
  }
};
