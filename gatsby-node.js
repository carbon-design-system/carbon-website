const fs = require("fs-extra");
const path = require("path");
const yml = require("js-yaml");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ["html-loader", "markdown-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          options: {
            minimize: false,
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        // light-weight fork of buble compiler from react-live team
        buble: path.resolve(__dirname, "node_modules", "@philpl/buble"),
      },
    },
  });

  // Disable sourcemaps in production
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const INDEX_DATA_DIRECTORY = path.resolve(__dirname, "./src/data/index");
  const maintainers = await fs.readdir(INDEX_DATA_DIRECTORY);
  const components = [];

  for (const maintainer of maintainers) {
    const directory = path.join(INDEX_DATA_DIRECTORY, maintainer);
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filepath = path.join(directory, file);
      const contents = await fs.readFile(filepath, "utf8");
      const component = yml.safeLoad(contents);

      components.push(component);
    }
  }

  for (const component of components) {
    const node = {
      id: createNodeId(component.name),
      parent: null,
      children: [],
      internal: {
        type: "ComponentIndexEntry",
        contentDigest: createContentDigest(component),
      },
      ...component,
    };

    createNode(node);
  }

  // 1. We know that we have a folder of index data _somewhere_
  // 2. We want to transform that folder of data into something that we can query
  // in GraphQL
  // 3. The way that we can add something to GraphQL in Gatsby is through
  // `createNode`
  // 1. Where is the data, how is it structured, what are the rules, how do we
  //    validate (images???)
  // 2. How do we load where the data is stored and _transform_ it into a list
  //    of components
  //    Tree (filesystem) -> Array (list of components)
  // 3. Once we have the data, we can create nodes of that type
};
