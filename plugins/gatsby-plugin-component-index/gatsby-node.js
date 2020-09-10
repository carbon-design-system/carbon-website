const fs = require('fs-extra');
const path = require('path');
const yml = require('js-yaml');
const schema = require('./src/schema');

// TODO: for some reason throwing an error in `sourceNodes` here does not cause
// the build to fail. In the interim, we're logging the error to the console and
// manually exiting the process so that we don't have builds that pass but don't
// have the appropriate source nodes
exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { directory: rootDirectory } = pluginOptions;
  const { createNode } = actions;

  const manifestPath = path.join(rootDirectory, 'maintainers.yml');
  if (!(await fs.pathExists(manifestPath))) {
    console.log(`Unable to find maintainer manifest at ${manifestPath}`);
    process.exit(1);
  }

  const manifestData = yml.safeLoad(await fs.readFile(manifestPath, 'utf8'));
  const { value: manifest, error } = schema.maintainer.validate(manifestData);
  if (error) {
    console.log(error.annotate());
    process.exit(1);
  }

  const components = [];

  for (const maintainer of manifest.maintainers) {
    const directory = path.join(rootDirectory, maintainer.name);
    const files = await fs.readdir(directory);

    for (const file of files.filter(filterFiles)) {
      const filepath = path.join(directory, file);
      const contents = await fs.readFile(filepath, 'utf8');
      const component = yml.safeLoad(contents);

      components.push({
        ...component,
        name: path.basename(file, '.yml'),
        friendly_name: component.name,
        maintainer: {
          name: maintainer.name,
          friendly_name: maintainer.friendly_name,
        },
      });
    }
  }

  for (const component of components) {
    const { error, value } = schema.component.validate(component);
    if (error) {
      console.log(error.annotate());
      process.exit(1);
    }

    const node = {
      id: createNodeId(`${value.maintainer.name}:${value.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'ComponentIndexEntry',
        contentDigest: createContentDigest(value),
      },
      ...value,
    };

    createNode(node);
  }
};

const denylist = new Set(['images', '.DS_Store']);
function filterFiles(filename) {
  return !denylist.has(filename);
}
