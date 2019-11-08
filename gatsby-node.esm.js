/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-unresolved */
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

const rimraf = require('rimraf');

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

// Generate docgen info from carbon-components-react
exports.onPreBootstrap = () => {
  const { sep } = path;
  const tmpDir = fs.mkdtempSync(`.cache${sep}`);

  execSync(
    `babel ./node_modules/carbon-components-react/es --out-dir ${tmpDir} --plugins=babel-plugin-react-docgen,transform-es2015-modules-commonjs`
  );

  const CarbonComponentsReact = require(`./${tmpDir}`);

  // Button lacks proper docgen info until docgen 5.0 due to prop-type import abstraction
  // related: https://github.com/carbon-design-system/carbon/issues/4580
  CarbonComponentsReact.Button.__docgenInfo.props.kind.type = {
    name: 'enum',
    description: 'Specify the kind of Button you want to create',
    value: [
      { value: `'primary'` },
      { value: `'secondary'` },
      { value: `'danger'` },
      { value: `'ghost'` },
      { value: `'danger-primary'` },
      { value: `'tertiary'` },
    ],
  };

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

  rimraf.sync(tmpDir);
};
