import React from 'react';

import { h2 } from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';
import cx from 'classnames';

import useIntersectionObserver from '../shared/useIntersectionObserver';

import SvgCard from '../shared/SvgCard';

import {
  svgGrid,
  categoryTitle,
  svgCategory,
  pictograms as pictogramList,
} from '../shared/SvgLibrary.module.scss';

const IconCategory = ({ category, pictograms, columnCount }) => {
  const [sectionRef, containerIsVisible] = useIntersectionObserver();
  return (
    <section ref={sectionRef} className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul className={cx(svgGrid, pictogramList)}>
        {pictograms.map((pictogram, i) => (
          <SvgCard
            isLastCard={(i + 1) % columnCount === 0}
            containerIsVisible={containerIsVisible}
            key={pictogram.name}
            icon={pictogram}
            height="23.5%"
            width="23.5%"
          />
        ))}
      </ul>
    </section>
  );
};

export default IconCategory;
