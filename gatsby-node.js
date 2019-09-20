const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  const arr = [
    ['/getting-started/about-carbon', '/get-started/about-carbon'],
    ['/getting-started/developers/vanilla', '/get-started/develop/vanilla'],
    ['/getting-started/designers', '/get-started/design'],
    ['/tutorial/overview', '/tutorial/react/overview'],
    ['/tutorial/react-step-1', '/tutorial/react/step-1'],
    ['/tutorial/react-step-2', '/tutorial/react/step-2'],
    ['/tutorial/react-step-3', '/tutorial/react/step-3'],
    ['/tutorial/react-step-4', '/tutorial/react/step-4'],
    ['/tutorial/react-step-5', '/tutorial/react/step-5'],
    ['/tutorial/wrapping-up', '/tutorial/react/wrapping-up'],
    ['/contributions/overview', '/how-to-contribute/overview'],
    ['/contributions/governance', '/how-to-contribute/governance'],
    [
      '/contributions/bugs-and-requests',
      '/how-to-contribute/bugs-and-requests',
    ],
    ['/contributions/documentation', '/how-to-contribute/documentation'],
    ['/contributions/component', '/how-to-contribute/component'],
    ['/contributions/pattern', '/how-to-contribute/pattern'],
    ['/contributions/add-ons', '/how-to-contribute/add-ons'],
  ];

  arr.forEach(a => {
    createRedirect({
      fromPath: a[0],
      toPath: a[1],
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
