import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Search, Dropdown, Row, Column } from 'carbon-components-react';

const componentImg = require('./images/placeholderCompIndex.svg');

const ALL_COMPONENTS_QUERY = graphql`
  {
    allComponentIndexEntry {
      edges {
        node {
          name
          description
          maintainer
        }
      }
    }
  }
`;

function ComponentIndexPage() {
  const { allComponentIndexEntry: components } = useStaticQuery(
    ALL_COMPONENTS_QUERY
  );

  const href = '/get-started/about-carbon';

  const items = [];

  return (
    <>
      <Row>
        <Column lg={9}>
          <Search
            className="component-index-search"
            id="search-1"
            placeHolderText="Search"
          />
          <Dropdown
            ariaLabel="Dropdown"
            id="carbon-dropdown-example"
            items={items}
            label="Sort by A to Z"
            className="placeholder-sort"
          />
        </Column>
      </Row>

      <section aria-label="Component index">
        {components.edges.map(({ node }) => {
          const { name, description, maintainer } = node;
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
                    <header className="component-index-item__name">
                      {name}
                    </header>

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
                    </footer>
                  </div>
                </article>
              </Column>
            </Row>
          );
        })}
      </section>
    </>
  );
}

export default ComponentIndexPage;
