import React from 'react';

import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import SvgCard from '../shared/SvgCard';

import {
  svgGrid,
  categoryTitle,
  svgCategory,
} from '../shared/SvgLibrary.module.scss';

const IconCategory = ({ category, pictograms }) => (
  <section className={svgCategory}>
    <h2 className={cx(h2, categoryTitle)}>{category}</h2>
    <ul className={svgGrid}>
      {pictograms.map(pictogram => (
        <SvgCard key={pictogram.name} icon={pictogram} />
      ))}
    </ul>
  </section>
);

export default IconCategory;
