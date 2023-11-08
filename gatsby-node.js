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
};
