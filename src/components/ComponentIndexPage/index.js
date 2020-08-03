import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, Search, Dropdown } from 'carbon-components-react';

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

      <dl>
        {components.edges.map(({ node }) => {
          const { name, description, maintainer } = node;
          const key = `${name}:${maintainer}`;

          return (
            <div key={key} className="row">
              <div className="component-image-card">
                <img
                  src={componentImg}
                  alt="some-img"
                  className="index-image"
                />
              </div>
              <div className="component-index-text">
                <div>
                  <p className="component-index-name">
                    {maintainer}:{name}
                  </p>
                  <p className="component-index-description">
                    {description ? <dd>{description}</dd> : null}
                  </p>
                </div>
                <div className="links-row">
                  <Link to={href} className="link-website">
                    Website
                  </Link>
                  <Link to={href} className="link-storybook">
                    GitHub/Storybook
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </dl>
    </>
  );
}

export default ComponentIndexPage;
