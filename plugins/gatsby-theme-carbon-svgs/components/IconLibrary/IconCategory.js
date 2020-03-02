import React from 'react';
import { groupBy } from 'lodash-es';
import {
  h2,
  h3,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import SvgCard from '../shared/SvgCard';
import {
  svgGrid,
  categoryTitle,
  subcategoryTitle,
  svgCategory,
} from '../shared/SvgLibrary.module.scss';

const IconCategory = ({ category, icons }) => {
  const subcategories = Object.entries(groupBy(icons, 'subcategory'));
  return (
    <section className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul>
        {subcategories.map(([subcategory, subcategoryIcons]) => (
          <IconSubcategory
            key={subcategory}
            subcategory={subcategory}
            icons={subcategoryIcons}
          />
        ))}
      </ul>
    </section>
  );
};

const IconSubcategory = ({ subcategory, icons }) => (
  <li>
    <h3 className={cx(h3, subcategoryTitle)}>{subcategory}</h3>
    <ul className={svgGrid}>
      {icons.map(icon => (
        <SvgCard key={icon.name} icon={icon} />
      ))}
    </ul>
  </li>
);

export default IconCategory;
