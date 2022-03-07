/* eslint-disable react/display-name */
/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link, Tag, Tooltip } from '@carbon/react';

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import angularIcon from './images/Angular.svg';
import axureIcon from './images/Axure.svg';
import figmaIcon from './images/Figma.svg';
import placeholder from './images/placeholder.svg';
import reactIcon from './images/React.svg';
import sketchIcon from './images/Sketch.svg';
import vanillaIcon from './images/Vanilla.svg';
import vueIcon from './images/Vue.svg';
import xdIcon from './images/XD.svg';

const frameworkIcons = {
  Angular: angularIcon,
  React: reactIcon,
  Vanilla: vanillaIcon,
  Vue: vueIcon,
};

const designAssetIcons = {
  Axure: axureIcon,
  Figma: figmaIcon,
  Sketch: sketchIcon,
  XD: xdIcon,
};

const ComponentIndexListItem = React.memo(
  ({
    codeUrl,
    description,
    designAsset,
    framework,
    image,
    maintainer,
    name,
    websiteUrl,
    fathomGoal,
  }) => {
    let img;

    if (image?.gatsbyImageData) {
      img = (
        <GatsbyImage
          className="index-image"
          alt={`Image for the ${name} component`}
          image={image.gatsbyImageData}
        />
      );
    } else {
      img = (
        <img src={placeholder} alt={`Placeholder for the ${name} component`} />
      );
    }

    const linkProps = {
      className: 'component-index-item__link',
      rel: 'noopener noreferrer',
    };

    const websiteLinkProps = {
      ...linkProps,
      href: websiteUrl,
      onClick: () => fathomGoal && fathom.trackGoal(fathomGoal, 0),
    };

    const codeLinkProps = {
      ...linkProps,
      href: codeUrl,
      onClick: () => fathomGoal && fathom.trackGoal(fathomGoal, 1),
    };

    return (
      <article className="component-index-item">
        <div className="component-index-item__image">{img}</div>
        <div className="component-index-item__content">
          <header className="component-index-item__name">{name}</header>
          <p className="component-index-item__description">{description}</p>
          <footer className="component-index-item__info">
            <div className="component-index-item__links">
              <Link {...websiteLinkProps}>Docs</Link>
              {codeUrl && (
                <>
                  <div className="component-index-item__divider" />
                  <Link {...codeLinkProps}>Code</Link>
                </>
              )}
            </div>
            <ul className="component-index-item__tags">
              {framework && (
                <li className="component-index-item__tag component-index-item__tag--framework">
                  <Tooltip
                    aria-label={`framework type ${framework}`}
                    align="top"
                    label={framework}>
                    <img
                      aria-hidden="true"
                      src={frameworkIcons[framework] || null}
                      alt={framework}
                    />
                  </Tooltip>
                </li>
              )}
              {designAsset && (
                <li className="component-index-item__tag component-index-item__tag--design-asset">
                  <Tooltip
                    aria-label={`design asset type ${designAsset}`}
                    align="top"
                    label={designAsset}>
                    <img
                      aria-hidden="true"
                      src={designAssetIcons[designAsset] || null}
                      alt={designAsset}
                    />
                  </Tooltip>
                </li>
              )}
              {maintainer && (
                <li className="component-index-item__tag component-index-item__tag--maintainer">
                  <Tooltip
                    align="top"
                    label="Maintainer"
                    aria-label={`Component maintainer ${maintainer}`}>
                    <Tag aria-hidden="true">{maintainer}</Tag>
                  </Tooltip>
                </li>
              )}
            </ul>
          </footer>
        </div>
      </article>
    );
  }
);

export default ComponentIndexListItem;
