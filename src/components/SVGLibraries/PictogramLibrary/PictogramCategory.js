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

const IconCategory = ({ category, pictograms }) => {
  const [sectionRef, containerIsVisible] = useIntersectionObserver();
  return (
    <section ref={sectionRef} className={svgCategory}>
      <h2 className={cx(h2, categoryTitle)}>{category}</h2>
      <ul className={cx(svgGrid, pictogramList)}>
        {pictograms.map((pictogram) => (
          <SvgCard
            containerIsVisible={containerIsVisible}
            key={pictogram.name}
            icon={pictogram}
<<<<<<< HEAD
            height="23.5%"
            width="23.5%"
=======
            height="35%"
            width="35%"
>>>>>>> 93adede02e182b04a4aa0b857cadaed04a67595e
          />
        ))}
      </ul>
    </section>
  );
};

export default IconCategory;
