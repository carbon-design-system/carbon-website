import { keyBy } from 'lodash';
import { icons as iconMetaData } from '../../data/metadata.json';

const flattenedIconMetaData = iconMetaData.flatMap(
  ({ variants, ...parent }) => {
    // top level icon
    if (!variants) return parent;

    // give parent aliases to children
    const variantsWithParentData = variants.map(variant => ({
      aliases: parent.aliases,
      ...variant,
    }));

    // don't return shell parents
    if (parent.categories.length < 1) {
      return variantsWithParentData;
    }

    // if parent is an icon, include it
    return [parent, ...variantsWithParentData];
  }
);

const iconData = keyBy(flattenedIconMetaData, obj => {
  const friendlyNameArr = obj.friendly_name.split(' ');
  const moduleName = friendlyNameArr
    .map(word => {
      // if the 'word' is a number at the end, use the an underscore prefix
      if (!isNaN(word)) {
        return `_${word}`;
      }
      // capitalize each word before joining
      return word[0].toUpperCase() + word.slice(1);
    })
    .join('');
  return moduleName;
});

export default iconData;
