import { useStaticQuery, graphql } from "gatsby";
import { useNavItems as useThemeNavItems } from "gatsby-theme-carbon/src/util/NavItems";

const FEATURE_FLAG_QUERY = graphql`
  query featureFlagQuery {
    allFeatureFlag {
      edges {
        node {
          name
          value
        }
      }
    }
  }
`;

const featureFlagsForPages = new Map([
  ["/community/component-index", "enable-component-index-page"],
]);

export function useNavItems() {
  const { allFeatureFlag: featureFlags } = useStaticQuery(FEATURE_FLAG_QUERY);
  const navItems = useThemeNavItems();

  return navItems.map((section) => {
    return {
      ...section,
      pages: section.pages.filter((page) => {
        if (featureFlagsForPages.has(page.path)) {
          const flag = featureFlagsForPages.get(page.path);
          const edge = featureFlags.edges.find(({ node }) => {
            return node.name === flag;
          });
          return edge.node.value;
        }
        return true;
      }),
    };
  });
}
