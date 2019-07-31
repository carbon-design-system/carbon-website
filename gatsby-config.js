module.exports = {
  siteMetadata: {
    title: 'Carbon Design System',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mdxExtensions: ['.mdx'],
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-www',
          subDirectory: '',
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
};
