const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
    resolve: {
      // Ensure node_modules are in the path for resolution
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        buble: path.resolve(__dirname, 'node_modules', '@philpl/buble'),
        // Explicitly resolve @carbon packages to their node_modules path
        '@carbon/react': path.resolve(__dirname, 'node_modules/@carbon/react'),
        '@carbon/icons-react': path.resolve(__dirname, 'node_modules/@carbon/icons-react'),
        '@carbon/styles': path.resolve(__dirname, 'node_modules/@carbon/styles'), // Keep for Sass if needed
      },
      // Fallback for older module resolution patterns
      fallback: {
        'crypto': false, // Example of adding fallbacks if needed for older modules
        'stream': false,
        'path': require.resolve('path-browserify'), // Ensure path resolves correctly
        // You might need more if other 'cannot resolve' errors appear for node built-ins
      }
    },
  });

  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/community/components',
    toPath: '/community/component-index',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/community/contribute-a-component',
    toPath: '/community/component-index',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/resources',
    toPath: '/developing/developer-resources',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/tutorial/react/overview',
    toPath: '/developing/react-tutorial/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/tutorial/web-components/overview',
    toPath: '/developing/web-components-tutorial/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/tutorial/angular/overview',
    toPath: '/developing/angular-tutorial/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/tutorial/vue/overview',
    toPath: '/developing/vue-tutorial/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/typography/styling-strategies',
    toPath: '/guidelines/typography/style-strategies',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/whats-happening/releases',
    toPath: '/all-about-carbon/releases',
    isPermanent: true,
  });
  createRedirect({
    fromPath: ' /contributing/overview',
    toPath: '/contributing/get-started',
    isPermanent: true,
  });
  createRedirect({
    fromPath: ' /components/overview',
    toPath: '/components/overview/components/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: ' /case-studies/overview',
    toPath: '/all-about-carbon/who-uses-carbon/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: ' /case-studies/consistency-in-the-cloud',
    toPath: '/all-about-carbon/who-uses-carbon/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: ' /case-studies/ibm-commerce-platform',
    toPath: '/all-about-carbon/who-uses-carbon/',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/data-visualization/basic-charts',
    toPath: '/data-visualization/simple-charts',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/data-visualization/advanced-charts',
    toPath: '/data-visualization/complex-charts',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/guidelines/2x-grid/overview',
    toPath: '/elements/2x-grid/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/2x-grid/usage',
    toPath: '/elements/2x-grid/usage',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/2x-grid/code',
    toPath: '/elements/2x-grid/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/color/overview',
    toPath: '/elements/color/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/color/usage',
    toPath: '/elements/color/usage',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/color/tokens',
    toPath: '/elements/color/tokens',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/color/code',
    toPath: '/elements/color/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/icons/library',
    toPath: '/elements/icons/library',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/icons/usage',
    toPath: '/elements/icons/usage',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/icons/code',
    toPath: '/elements/icons/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/pictograms/library',
    toPath: '/elements/pictograms/library',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/pictograms/usage',
    toPath: '/elements/pictograms/usage',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/pictograms/code',
    toPath: '/elements/pictograms/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/motion/overview',
    toPath: '/elements/motion/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/motion/choreography',
    toPath: '/elements/motion/choreography',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/motion/code',
    toPath: '/elements/motion/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/spacing/overview',
    toPath: '/elements/spacing/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/spacing/code',
    toPath: '/elements/spacing/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/themes/overview',
    toPath: '/elements/themes/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/themes/code',
    toPath: '/elements/themes/code',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/typography/overview',
    toPath: '/elements/typography/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/typography/style-strategies',
    toPath: '/elements/typography/style-strategies',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/typography/type-sets',
    toPath: '/elements/typography/type-sets',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/typography/code',
    toPath: '/elements/typography/code',
    isPermanent: true,
  });
};