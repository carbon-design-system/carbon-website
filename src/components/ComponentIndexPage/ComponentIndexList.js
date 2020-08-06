/* eslint-disable no-undef */
import { Link, Row, Column, Tag, Tooltip } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

const componentImg = require('./images/placeholderCompIndex.svg');

const href = '/get-started/about-carbon';

const props = {
  withoutIcon: () => ({
    showIcon: false,
  }),
};

function ComponentIndexList({ items }) {
  console.log(items);
  return (
    <section aria-label="Component index">
      {items.map(({ name, description, maintainer }) => {
        const key = `${name}:${maintainer}`;
        return (
          <Row key={key}>
            <Column sm={4} md={8} lg={9}>
              <article className="component-index-item">
                <div className="component-index-item__image bx--aspect-ratio bx--aspect-ratio--4x3">
                  <img
                    src={componentImg}
                    alt="some-img"
                    className="index-image"
                  />
                </div>

                <div className="component-index-item__content">
                  <header className="component-index-item__name">{name}</header>

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
                      <li className="component-index-item__tag component-index-item__tag--maintainer">
                        <Tooltip
                          {...props.withoutIcon()}
                          direction="top"
                          selectorPrimaryFocus=""
                          tabIndex={0}
                          triggerText={<Tag>{maintainer}</Tag>}>
                          <div>Maintainer</div>
                        </Tooltip>
                      </li>
                    </ul>
                  </footer>
                </div>
              </article>
            </Column>
          </Row>
        );
      })}
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
