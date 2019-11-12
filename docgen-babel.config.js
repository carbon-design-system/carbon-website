module.exports = {
  plugins: [
    'babel-plugin-react-docgen',
    'transform-es2015-modules-commonjs',
    'dev-expression',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
  ],
  presets: ['@babel/preset-react'],
};
