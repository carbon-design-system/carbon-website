/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { graphql, useStaticQuery } from 'gatsby';

const CHART_INDEX_DATA = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "chart-index-images" } }) {
      nodes {
        name
        relativeDirectory
        childImageSharp {
          gatsbyImageData(width: 640, height: 480)
        }
      }
    }
    allChartIndexEntry {
      edges {
        node {
          availability
          aliases
          code_url
          date_added
          description
          friendly_name
          name
          chart_type
          complexity
          website_url
          maintainer {
            name
            friendly_name
          }
        }
      }
    }
  }
`;

export function useChartIndexData() {
  const { allChartIndexEntry, allFile } = useStaticQuery(CHART_INDEX_DATA);

  const images = allFile.nodes;
  const charts = allChartIndexEntry.edges.map((edge) => {
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
      chartType: node.chart_type,
      complexity: node.complexity,
    };
  });

  return charts;
}
