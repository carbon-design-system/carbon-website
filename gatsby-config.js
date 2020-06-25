module.exports = {
  siteMetadata: {
    title: 'Carbon Design System',
    siteUrl: 'https://www.carbondesignsystem.com',
    description:
      'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.',
    keywords:
      'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
  },
  plugins: [
    'gatsby-theme-carbon-svgs',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mdxExtensions: ['.mdx'],
        gatsbyPluginSharpOptions: {
          srcSetBreakpoints: [600],
          pngCompressionSpeed: 10,
        },
        isSearchEnabled: true,
        iconPath: './src/images/favicon.svg',
        titleType: 'prepend',
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-website',
          subDirectory: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'VMSGXQRS',
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-serviceworker',
  ],
};
