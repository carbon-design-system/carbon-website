/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link, Tag, TooltipIcon } from '@carbon/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

// Placeholder image
import placeholder from './images/placeholder.svg';

const ChartIndexListItem = React.memo(
  ({ codeUrl, description, image, maintainer, name, websiteUrl }) => {
    let img;

    if (image?.gatsbyImageData) {
      img = (
        <GatsbyImage
          className="index-image"
          alt={`Image for the ${name} chart`}
          image={image.gatsbyImageData}
        />
      );
    } else {
      img = <img src={placeholder} alt={`Placeholder for the ${name} chart`} />;
    }

    return (
      <article className="component-index-item">
        <div className="component-index-item__image">{img}</div>
        <div className="component-index-item__content">
          <header className="component-index-item__name">{name}</header>
          <p className="component-index-item__description">{description}</p>
          <footer className="component-index-item__info">
            <div className="component-index-item__links">
              <Link
                className="component-index-item__link"
                href={websiteUrl}
                rel="noopener noreferrer">
                Docs
              </Link>
              {codeUrl && (
                <>
                  <div className="component-index-item__divider" />
                  <Link
                    className="component-index-item__link"
                    href={codeUrl}
                    rel="noopener noreferrer">
                    Code
                  </Link>
                </>
              )}
            </div>
            <ul className="component-index-item__tags">
              {maintainer && (
                <li className="component-index-item__tag component-index-item__tag--maintainer">
                  <TooltipIcon direction="top" tooltipText="Maintainer">
                    <Tag>{maintainer}</Tag>
                  </TooltipIcon>
                </li>
              )}
            </ul>
          </footer>
        </div>
      </article>
    );
  }
);
ChartIndexListItem.displayName = 'ChartIndexListItem';

export default ChartIndexListItem;
