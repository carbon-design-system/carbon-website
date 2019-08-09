import React from 'react';
import { groupBy } from 'lodash';
import {
  h2,
  h3,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import IconCard from './IconCard';
import { iconGrid } from './IconLibrary.module.scss';

const IconSubcategory = ({ subcategory, icons }) => (
  <>
    <h3
      className={h3}
      style={{ margin: 0, marginTop: '48px', marginLeft: '1rem' }}>
      {subcategory}
    </h3>
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
    <section>
      <h2 className={h2} style={{ margin: 0, marginLeft: '1rem' }}>
        {category}
      </h2>
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
