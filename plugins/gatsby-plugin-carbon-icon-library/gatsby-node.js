const { copy, remove, readdirSync, lstatSync } = require(`fs-extra`);
const { join } = require(`path`);

const isDirectory = source => lstatSync(source).isDirectory();

exports.onPreBootstrap = async ({ pathPrefix }) => {
  const destination = `./public/${pathPrefix}/icons`;

  await copy('./node_modules/@carbon/icons/svg/32', destination, {
    overwrite: true,
  });

  const subDirectories = readdirSync(destination)
    .map(item => join(destination, item))
    .filter(isDirectory);

  subDirectories.forEach(async dir => {
    await copy(dir, destination, {
      overwrite: true,
    });
    remove(dir);
  });
};
