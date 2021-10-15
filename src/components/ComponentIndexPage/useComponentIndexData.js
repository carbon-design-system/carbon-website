/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { graphql, useStaticQuery } from 'gatsby';

const COMPONENT_INDEX_DATA = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "component-index-images" } }) {
      nodes {
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(width: 640, height: 480)
        }
      }
    }

    allComponentIndexEntry {
      edges {
        node {
          availability
          aliases
          code_url
          date_added
          description
          design_asset
          framework
          friendly_name
          name
          website_url
          fathom_goal

          maintainer {
            name
            friendly_name
          }
        }
      }
    }
  }
`;

export function useComponentIndexData() {
  const { allComponentIndexEntry, allFile } =
    useStaticQuery(COMPONENT_INDEX_DATA);

  const images = allFile.nodes;
  const components = allComponentIndexEntry.edges.map((edge) => {
    const { node } = edge;
    const { name, maintainer } = node;
    const image = images.find((imgNode) => {
      if (imgNode.name !== name) {
        return false;
      }

      const [imageMaintainer] = imgNode.relativeDirectory.split('/');
      if (imageMaintainer !== maintainer.name) {
        return false;
      }

      return true;
    });

    return {
      ...node,
      name: node.friendly_name,
      maintainer: node.maintainer.friendly_name,
      image: image?.childImageSharp,
      designAsset: node.design_asset,
      dateAdded: node.date_added,
      codeUrl: node.code_url,
      websiteUrl: node.website_url,
      fathomGoal: node.fathom_goal,
    };
  });

  return components;
}
