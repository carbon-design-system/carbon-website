const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
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
  // if (stage === `build-javascript`) {
  //   const config = getConfig();
  //   config.optimization.splitChunks.cacheGroups.carbon = {
  //     name: `carbon`,
  //     chunks: `all`,
  //     test: /[\\/]node_modules[\\/]@?carbon/,
  //   };
  //   // This will completely replace the webpack config with the modified object.
  //   actions.replaceWebpackConfig(config);
  // }
};
