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
  const hiddenPictograms = [
    'ibm--z--partition',
    'ibm--z-and-linuxone-multi-frame',
    'ibm--z-and-linuxone-single-frame',
    'tokyo--volcano',
  ];

  return (
    <section ref={sectionRef} className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul className={cx(svgGrid, pictogramList)}>
        {pictograms
          .filter((pictogram) => !hiddenPictograms.includes(pictogram.name))
          .map((pictogram, i) => (
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
