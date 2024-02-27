const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Allows importing html files for component code examples
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
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        // light-weight fork of buble compiler from react-live team
        buble: path.resolve(__dirname, 'node_modules', '@philpl/buble'),
      },
    },
  });

  // Disable sourcemaps in production
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  // Community index
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

  // Developing
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

  // Case studies
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

  // Data-visualization
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

  // Elements L0 - 2022/02
  createRedirect({
    fromPath: '/guidelines/2x-grid/overview',
    toPath: '/elements/2x-grid/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/color/overview',
    toPath: '/elements/color/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/icons/library',
    toPath: '/elements/icons/library',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/pictograms/library',
    toPath: '/elements/pictograms/library',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/motion/overview',
    toPath: '/elements/motion/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/spacing/overview',
    toPath: '/elements/spacing/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/themes/overview',
    toPath: '/elements/themes/overview',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/guidelines/typography/overview',
    toPath: '/elements/typography/overview',
    isPermanent: true,
  });
};
