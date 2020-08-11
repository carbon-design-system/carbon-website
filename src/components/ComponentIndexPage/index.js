import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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

  return (
    <dl>
      {components.edges.map(({ node }) => {
        const { name, description, maintainer } = node;
        const key = `${name}:${maintainer}`;
        return (
          <React.Fragment key={key}>
            <dt>
              {maintainer}: {name}
            </dt>
            {description ? <dd>{description}</dd> : null}
          </React.Fragment>
        );
      })}
    </dl>
  );
}

export default ComponentIndexPage;
