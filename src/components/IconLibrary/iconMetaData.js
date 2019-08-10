import { keyBy } from 'lodash';
import { icons as iconMetaData } from '@carbon/icons/metadata.json';
import { pascal } from 'change-case';

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

const iconData = keyBy(flattenedIconMetaData, obj => pascal(obj.name));

export default iconData;
