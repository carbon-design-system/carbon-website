/* eslint-disable */

'use strict';

const { paramCase } = require('change-case');
const fs = require('fs-extra');
const path = require('path');
const csv = require('csvtojson');
const yml = require('js-yaml');
const schema = require('../src/schema');

const CSV_FILEPATH = path.resolve(__dirname, '../data/index.csv');
const renames = {
  'Platform (Web, iOS, Android)': 'platform',
  'Availability (open source, IBM internal)': 'availability',
  'Date added to index': 'date_added',
  'Search aliases': 'aliases',
  'Design asset': 'design_asset',
  'Maintainer team': 'maintainer',
  Image: 'image_url',

  // New
  'Website link': 'website_url',
  'Storybook/GitHub': 'code_url',
};
const maintainerRenames = {
  'Cloud PAL': 'cloud-pal',
  'Cloud Data & AI': 'cdai',
  'Watson Health': 'watson-health',
  'AI Apps': 'ai-apps',
};

async function main() {
  const data = await csv().fromFile(CSV_FILEPATH);
  const components = data
    // Rename keys
    .map((component) => {
      const keys = Object.keys(component);
      const result = {};
      for (const key of keys) {
        if (renames[key]) {
          const rename = renames[key];
          result[rename] = component[key];
        } else {
          result[key] = component[key];
        }
      }
      return result;
    })
    // Lowercase
    .map((component) => {
      const keys = Object.keys(component);
      const result = {};
      for (const key of keys) {
        result[key.toLowerCase()] = component[key];
      }
      return result;
    })
    // Transform aliases to array
    .map((component) => {
      const aliases =
        component.aliases.length > 0
          ? component.aliases
              .split(',')
              .map((alias) => alias.trim().toLowerCase())
          : [];
      return {
        ...component,
        aliases,
      };
    })
    // Transform empty fields to null
    .map((component) => {
      const result = {};
      const keys = Object.keys(component);
      for (const key of keys) {
        const value = component[key];
        if (value === '') {
          continue;
        }
        result[key] = component[key];
      }
      return result;
    })
    // Transform design asset to Sketch
    .map((component) => {
      if (component.design_asset) {
        switch (component.design_asset) {
          case 'CD&AI Design Kit':
          case 'IBM Watson IoT PAL tables':
          case 'IBM Watson IoT PAL charts':
          case 'IBM Watson IoT PAL.sketch':
          case 'IBM Watson IoT PAL buttons':
            component.design_asset = 'Sketch';
            break;
          case 'No asset':
            component.design_asset = null;
        }
      }
      return component;
    })
    .filter((component) => {
      return component.name !== 'Not included';
    })
    .map((component) => {
      const result = {};
      for (const key of Object.keys(component)) {
        if (component[key] === 'n/a') {
          continue;
        }
        result[key] = component[key];
      }
      return result;
    })
    .map((component) => {
      return {
        ...component,
        date_added: '2020-08-04',
      };
    });

  const maintainers = new Map();

  for (const component of components) {
    if (!maintainers.has(component.maintainer)) {
      maintainers.set(component.maintainer, {
        components: [],
      });
    }
    const maintainer = maintainers.get(component.maintainer);
    maintainer.components.push(component);
  }

  const INDEX_DATA_DIRECTORY = path.resolve(
    __dirname,
    '../../../src/data/index'
  );

  if (await fs.pathExists(INDEX_DATA_DIRECTORY)) {
    await fs.emptyDir(INDEX_DATA_DIRECTORY);
  }
  await fs.ensureDir(INDEX_DATA_DIRECTORY);

  const manifestFilePath = path.join(INDEX_DATA_DIRECTORY, 'maintainers.yml');
  const manifestFile = {
    maintainers: Array.from(maintainers.keys())
      .sort()
      .map((friendlyName) => {
        return {
          name: maintainerRenames[friendlyName],
          friendly_name: friendlyName,
        };
      }),
  };

  await fs.writeFile(manifestFilePath, yml.safeDump(manifestFile), 'utf8');

  for (const [maintainer, value] of maintainers) {
    const directory = path.join(
      INDEX_DATA_DIRECTORY,
      maintainerRenames[maintainer]
    );
    await fs.ensureDir(directory);

    for (const component of value.components) {
      const filepath = path.join(directory, `${paramCase(component.name)}.yml`);
      const entry = {};

      for (const key of Object.keys(component)) {
        if (component[key] !== null) {
          entry[key] = component[key];
        }
      }

      const { value, error } = schema.component.validate(entry);
      if (error) {
        throw error;
      }
      const data = yml.safeDump(value);
      await fs.writeFile(filepath, data, 'utf8');
    }
  }
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
