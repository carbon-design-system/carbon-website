/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link, Row, Column, Tag, TooltipIcon } from 'carbon-components-react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import placeholder from './images/placeholder.svg';
import reactIcon from './images/React.svg';
import sketchIcon from './images/Sketch.svg';

const href = '/get-started/about-carbon';

const ComponentIndexListItem = React.memo(
  ({ name, description, maintainer, framework, designAsset, image }) => {
    let img = undefined;

    if (image?.fluid) {
      img = (
        <Image
          className="index-image"
          alt={`Image for the ${name} component`}
          fluid={image.fluid}
        />
      );
    } else {
      img = (
        <img
          src={placeholder}
          alt={`Placeholder image for the ${name} component`}
        />
      );
    }

    return (
      <Row>
        <Column sm={4} md={8} lg={9}>
          <article className="component-index-item">
            <div className="component-index-item__image bx--aspect-ratio bx--aspect-ratio--4x3">
              {img}
            </div>

            <div className="component-index-item__content">
              <header className="component-index-item__name">{name}</header>

              <p className="component-index-item__description">{description}</p>

              <footer className="component-index-item__info">
                <div className="component-index-item__links">
                  <Link
                    className="component-index-item__link"
                    href={href}
                    rel="noopener noreferrer">
                    Website
                  </Link>
                  <div className="component-index-item__divider" />
                  <Link
                    className="component-index-item__link"
                    href={href}
                    rel="noopener noreferrer">
                    Code
                  </Link>
                </div>
                <ul className="component-index-item__tags">
                  {framework && (
                    <li className="component-index-item__tag component-index-item__tag--framework">
                      <TooltipIcon direction="top" tooltipText={framework}>
                        <img src={reactIcon} alt={framework} />
                      </TooltipIcon>
                    </li>
                  )}
                  {designAsset && (
                    <li className="component-index-item__tag component-index-item__tag--design-asset">
                      <TooltipIcon direction="top" tooltipText={designAsset}>
                        <img src={sketchIcon} alt={designAsset} />
                      </TooltipIcon>
                    </li>
                  )}
                  <li className="component-index-item__tag component-index-item__tag--maintainer">
                    <TooltipIcon direction="top" tooltipText="Maintainer">
                      <Tag>{maintainer}</Tag>
                    </TooltipIcon>
                  </li>
                </ul>
              </footer>
            </div>
          </article>
        </Column>
      </Row>
    );
  }
);

export default ComponentIndexListItem;
