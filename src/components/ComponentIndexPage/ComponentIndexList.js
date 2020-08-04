import { Row, Column } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

const componentImg = require('./images/placeholderCompIndex.svg');
const href = '/get-started/about-carbon';

function ComponentIndexList({ items }) {
  return (
    <section aria-label="Component index">
      {items.map(({ name, description, maintainer }) => {
        const key = `${name}:${maintainer}`;
        return (
          <Row key={key}>
            <Column lg={9}>
              <article className="component-index-item">
                <div className="component-index-item__image">
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
                    <a className="component-index-item__web-link" href={href}>
                      Website
                    </a>
                    <a
                      className="component-index-item__storybook-link"
                      href={href}>
                      Storybook/GitHub
                    </a>
                    <ul>
                      <li>{maintainer}</li>
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
