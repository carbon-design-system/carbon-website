const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        // light-weight fork of buble compiler from react-live team
        buble: path.resolve(__dirname, 'node_modules', '@philpl/buble'),
      },
    },
  });
  if (stage === `build-javascript`) {
    const config = getConfig();
    config.optimization.splitChunks.cacheGroups.carbon = {
      name: `carbon`,
      chunks: `all`,
      test: /[\\/]node_modules[\\/]@?carbon/,
    };
    // This will completely replace the webpack config with the modified object.
    actions.replaceWebpackConfig(config);
  }
};
