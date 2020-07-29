"use strict";

const { paramCase } = require("change-case");
const fs = require("fs-extra");
const path = require("path");
const csv = require("csvtojson");
const yml = require("js-yaml");

const CSV_FILEPATH = path.resolve(__dirname, "./index.csv");
const renames = {
  "Platform (Web, iOS, Android)": "platform",
  "Availability (open source, IBM internal)": "availability",
  "Date added to index": "date_added",
  "Search aliases": "aliases",
  "Design asset": "design_asset",
  "Maintainer team": "maintainer",
  Image: "image_url",
};
const maintainerRenames = {
  "Cloud PAL": "cloud-pal",
  "CD&AI": "cdai",
  "Watson Health": "watson-health",
  "Watson IoT": "watson-iot",
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
    // Rename maintainers
    .map((component) => {
      const keys = Object.keys(component);
      const result = {};
      for (const key of keys) {
        if (key === "maintainer") {
          result[key] = maintainerRenames[component[key]];
          continue;
        }
        result[key] = component[key];
      }
      return result;
    })
    // Transform aliases to array
    .map((component) => {
      const aliases =
        component.aliases.length > 0
          ? component.aliases
              .split(",")
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
        if (value === "") {
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
          case "CD&AI Design Kit":
          case "IBM Watson IoT PAL tables":
          case "IBM Watson IoT PAL charts":
          case "IBM Watson IoT PAL.sketch":
          case "IBM Watson IoT PAL buttons":
            component.design_asset = "Sketch";
            break;
          case "No asset":
            component.design_asset = null;
        }
      }
      return component;
    })
    .filter((component) => {
      return component.name !== "Not included";
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

  const INDEX_DATA_DIRECTORY = path.resolve(__dirname, "src/data/index");

  if (await fs.pathExists(INDEX_DATA_DIRECTORY)) {
    await fs.emptyDir(INDEX_DATA_DIRECTORY);
  }
  await fs.ensureDir(INDEX_DATA_DIRECTORY);

  for (const [maintainer, value] of maintainers) {
    const directory = path.join(INDEX_DATA_DIRECTORY, maintainer);
    await fs.ensureDir(directory);

    for (const component of value.components) {
      const filepath = path.join(directory, `${paramCase(component.name)}.yml`);
      const data = yml.safeDump(component);
      await fs.writeFile(filepath, data, "utf8");
    }
  }
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
