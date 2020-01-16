module.exports = {
  siteMetadata: {
    title: 'Carbon Design System',
    description:
      'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.',
    keywords:
      'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
  },
  plugins: [
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mdxExtensions: ['.mdx'],
        isSearchEnabled: true,
        iconPath: './src/images/favicon.svg',
        titleType: 'prepend',
        pngCompressionSpeed: 10,
        imageQuality: 5,
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-website',
          subDirectory: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: !process.env.ANALYZE,
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'VMSGXQRS',
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
