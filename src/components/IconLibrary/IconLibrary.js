/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { pickBy, keyBy } from 'lodash';
import { icons as iconMetaData } from '../../data/metadata.json';
import IconContainer from './IconContainer';

import { iconGrid } from './IconLibrary.module.scss';

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

const IconLibrary = () => {
  const [iconComponents, setIconComponents] = useState([]);
  useEffect(() => {
    import('@carbon/icons-react').then(iconsReact => {
      const iconComponentList = pickBy(
        iconsReact,
        (val, key) => key.slice(-2) === '32'
      );
      const iconArray = Object.keys(iconData).map(icon => ({
        ...iconData[icon],
        Component:
          iconComponentList[`${icon}32`] ||
          iconComponentList[`WatsonHealth${icon}32`] ||
          iconComponentList[`Q${icon}32`],
      }));
      setIconComponents(iconArray);
    });
  }, []);

  return (
    <div className={iconGrid}>
      {iconComponents.map(icon => (
        <IconContainer icon={icon} />
      ))}
    </div>
  );
};
export default IconLibrary;
