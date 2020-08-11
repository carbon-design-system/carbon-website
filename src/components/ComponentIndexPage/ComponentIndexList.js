/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-undef */
import { Link, Row, Column, Tag, TooltipIcon } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

const componentImg = require('./images/placeholderCompIndex.svg');

// TODO: Render icons dynamically based on framework & designAsset info.
const reactIcon = require('./images/React.svg');
const sketchIcon = require('./images/Sketch.svg');

function ComponentIndexList({ items }) {
  return (
    <section aria-label="Component index">
      {items.map(
        ({
          name,
          description,
          maintainer,
          framework,
          designAsset,
          codeUrl,
          websiteUrl,
        }) => {
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
                          href={websiteUrl}
                          rel="noopener noreferrer">
                          Website
                        </Link>
                        <div className="component-index-item__divider" />
                        <Link
                          className="component-index-item__link"
                          href={codeUrl}
                          rel="noopener noreferrer">
                          Code
                        </Link>
                      </div>
                      <ul className="component-index-item__tags">
                        <li className="component-index-item__tag component-index-item__tag--framework">
                          <TooltipIcon direction="top" tooltipText={framework}>
                            <img src={reactIcon} alt={framework} />
                          </TooltipIcon>
                        </li>
                        <li className="component-index-item__tag component-index-item__tag--design-asset">
                          <TooltipIcon
                            direction="top"
                            tooltipText={designAsset}>
                            <img src={sketchIcon} alt={designAsset} />
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
