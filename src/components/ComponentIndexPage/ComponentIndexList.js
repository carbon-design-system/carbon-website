/* eslint-disable global-require */
/* eslint-disable no-undef */
import { Link, Row, Column, Tag, TooltipIcon } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

const componentImg = require('./images/placeholderCompIndex.svg');

const angularIcon = require('./images/Angular.svg');
const reactIcon = require('./images/React.svg');
const vanillaIcon = require('./images/Vanilla.svg');
const vueIcon = require('./images/Vue.svg');

const axureIcon = require('./images/Axure.svg');
const figmaIcon = require('./images/Figma.svg');
const sketchIcon = require('./images/Sketch.svg');
const xdIcon = require('./images/XD.svg');

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

const href = '/get-started/about-carbon';

function ComponentIndexList({ items }) {
  return (
    <section aria-label="Component index">
      {items.map(
        ({ name, description, maintainer, framework, designAsset }) => {
          const key = `${name}:${maintainer}`;
          return (
            <Row key={key}>
              <Column sm={4} md={8} lg={9}>
                <article className="component-index-item">
                  <div className="component-index-item__image bx--aspect-ratio bx--aspect-ratio--4x3">
                    <img
                      src={componentImg}
                      alt="component-img"
                      className="index-image"
                    />
                  </div>

                  <div className="component-index-item__content">
                    <header className="component-index-item__name">
                      {name}
                    </header>

                    <p className="component-index-item__description">
                      {description}
                    </p>

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
                        <li className="component-index-item__tag component-index-item__tag--framework">
                          <TooltipIcon direction="top" tooltipText={framework}>
                            <img
                              img
                              src={frameworkIcons[framework] || null}
                              alt={framework}
                            />
                          </TooltipIcon>
                        </li>
                        <li className="component-index-item__tag component-index-item__tag--design-asset">
                          <TooltipIcon
                            direction="top"
                            tooltipText={designAsset}>
                            <img
                              img
                              src={designAssetIcons[designAsset] || null}
                              alt={designAsset}
                            />
                          </TooltipIcon>
                        </li>
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
      )}
    </section>
  );
}

ComponentIndexList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      maintainer: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default ComponentIndexList;
