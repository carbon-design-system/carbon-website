import React from 'react';
import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import SvgCard from '../shared/SvgCard';
import useIntersectionObserver from '../shared/useIntersectionObserver';

import {
  svgGrid,
  categoryTitle,
  svgCategory,
} from '../shared/SvgLibrary.module.scss';

const IconCategory = ({ category, icons, columnCount }) => {
  const [subCategoryRef, containerIsVisible] = useIntersectionObserver();
  return (
    <section className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul ref={subCategoryRef}>
        <ul className={svgGrid}>
          {icons.map((icon, i) => (
            <SvgCard
              isLastCard={(i + 1) % columnCount === 0}
              containerIsVisible={containerIsVisible}
              key={icon.name}
              icon={icon}
            />
          ))}
        </ul>
      </ul>
    </section>
  );
};

export default IconCategory;
