const path = require('path');

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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'component-index-images',
        path: path.join(__dirname, 'src/data/index'),
        ignore: ['**/*.js', '**/*.yml', '**/.*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'chart-index-images',
        path: path.join(__dirname, 'src/data/chart-index'),
        ignore: ['**/*.js', '**/*.yml', '**/.*'],
      },
    },
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1152,
        linkImagesToOriginal: false,
        quality: 75,
        withWebp: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mdxExtensions: ['.mdx'],
        isServiceWorkerEnabled: false,
        iconPath: './src/images/favicon.svg',
        titleType: 'prepend',
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-website',
          subDirectory: '',
        },
        mediumAccount: 'carbondesign',
        theme: {
          homepage: 'white',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design System',
        short_name: 'Carbon',
        icon: 'src/images/favicon.svg',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-component-index',
      options: {
        directory: path.resolve(__dirname, './src/data/index'),
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `AIRTABLE_CONTRIBUTION_API_KEY`,
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `AIRTABLE_CONTRIBUTION_BASEID`,
            tableName: `AIRTABLE_CONTRIBUTION_TABLENAME`,
            tableView: `AIRTABLE_CONTRIBUTION_TABLEVIEW`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-chart-index',
      options: {
        directory: path.resolve(__dirname, './src/data/chart-index'),
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-meta-redirect',
  ],
};
