import React from 'react';
import { groupBy } from 'lodash';
import {
  h2,
  h3,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import IconCard from './IconCard';
import {
  iconGrid,
  categoryTitle,
  subcategoryTitle,
  iconCategory,
} from './IconLibrary.module.scss';

const IconSubcategory = ({ subcategory, icons }) => (
  <>
    <h3 className={cx(h3, subcategoryTitle)}>{subcategory}</h3>
    <div className={iconGrid}>
      {icons.map(icon => (
        <IconCard key={icon.name} icon={icon} />
      ))}
    </div>
  </>
);

const IconCategory = ({ category, icons }) => {
  const subcategories = Object.entries(
    groupBy(icons, 'categories[0].subcategory')
  );
  return (
    <section className={iconCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      {subcategories.map(([subcategory, subcategoryIcons]) => (
        <IconSubcategory
          key={subcategory}
          subcategory={subcategory}
          icons={subcategoryIcons}
        />
      ))}
    </section>
  );
};

export default IconCategory;
