import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ALL_COMPONENTS_QUERY = graphql`
  {
    allComponentIndexEntry {
      edges {
        node {
          name
          description
          # ...
        }
      }
    }
  }
`;

function ComponentIndexPage() {
  const data = useStaticQuery(ALL_COMPONENTS_QUERY);

  console.log(data);

  return "Hello";
}

export default ComponentIndexPage;
