const path = require('path');

// gatsby-node.js
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type SitePage implements Node @dontInfer {
      path: String!
    }
  `);
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
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
