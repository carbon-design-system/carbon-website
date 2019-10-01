import React from 'react';

import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';
import useMedia from 'use-media';

import SvgCard from '../shared/SvgCard';

import {
  svgGrid,
  categoryTitle,
  svgCategory,
  pictograms as pictogramList,
} from '../shared/SvgLibrary.module.scss';

const IconCategory = ({ category, pictograms }) => {
  const isMobile = useMedia({ maxWidth: 1000 });
  const size = isMobile ? 156 : 128;
  return (
    <section className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul className={cx(svgGrid, pictogramList)}>
        {pictograms.map(pictogram => (
          <SvgCard
            key={pictogram.name}
            icon={pictogram}
            height={size}
            width={size}
          />
        ))}
      </ul>
    </section>
  );
};

export default IconCategory;
