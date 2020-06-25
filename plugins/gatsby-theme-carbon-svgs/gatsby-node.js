const fs = require('fs');
const path = require('path');

const {
  icons: iconData,
  categories: iconCategoryData,
} = require('@carbon/icons/metadata.json');

const {
  icons: pictogramData,
  categories: pictogramCategoryData,
} = require('@carbon/pictograms/metadata.json');

exports.onPreBootstrap = async ({ store, reporter }) => {
  // eslint-disable-next-line no-unused-vars
  const removeUnusedData = ({ output, assets, ...metadata }) => metadata;
  const { program } = store.getState();
  const outDir = path.join(
    program.directory,
    'plugins/gatsby-theme-carbon-svgs'
  );

  reporter.log(`Processing SVG metadata`);

  const essentialIconData = iconData.map(removeUnusedData);
  const essentialPictogramData = pictogramData.map(removeUnusedData);

  fs.writeFileSync(
    path.join(outDir, 'components/IconLibrary/metadata.json'),
    JSON.stringify({ icons: essentialIconData, categories: iconCategoryData })
  );

  fs.writeFileSync(
    path.join(outDir, 'components/PictogramLibrary/metadata.json'),
    JSON.stringify({
      icons: essentialPictogramData,
      categories: pictogramCategoryData,
    })
  );
};
