/* eslint-disable import/no-unresolved */
const path = require('path');
// const CarbonComponentsReact = require('carbon-components-react/es');
// const babel = require('@babel/core');
const { execSync } = require('child_process');
// const reactDocgen = require('babel-plugin-react-docgen');
// const transformCjs = require('babel-plugin-transform-es2015-modules-commonjs');
const fs = require('fs');

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
    },
  });
};

exports.onPreBootstrap = () => {
  execSync(
    'babel ./node_modules/carbon-components-react/es --out-dir lib/ccr --plugins=babel-plugin-react-docgen,transform-es2015-modules-commonjs'
  );

  // eslint-disable-next-line global-require
  const CarbonComponentsReact = require('./lib/ccr');
  const components = Object.keys(CarbonComponentsReact);
  const docgen = {};

  components.forEach(component => {
    // eslint-disable-next-line no-underscore-dangle
    docgen[component] = CarbonComponentsReact[component].__docgenInfo;
  });

  fs.writeFileSync(
    'src/data/react-docgen.json',
    JSON.stringify(docgen, null, 2)
  );
};
