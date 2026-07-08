const js = require('@eslint/js');
const { fixupConfigRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: [
      'public/**',
      '.cache/**',
      'node_modules/**',
      // Keep ESLint 8-era behavior where dot-directories aren't linted by default
      '**/.*',
      // Avoid linting this config via the Carbon parser stack
      'eslint.config.cjs',
    ],
  },
  {
    linterOptions: {
      // Preserve pre-migration behavior and avoid unrelated disable-directive churn
      reportUnusedDisableDirectives: 'off',
    },
  },
  // Required for ESLint 9 compatibility with legacy plugins loaded via eslint-config-carbon
  ...fixupConfigRules(compat.extends('carbon')),
  {
    rules: {
      'react/prop-types': 0,
      'react/destructuring-assignment': 0,
      'react/no-access-state-in-setstate': 0,
      'react/jsx-props-no-spreading': 0,
      'react/state-in-constructor': ['error', 'never'],
      'no-useless-escape': 0,
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      'react/forbid-dom-props': 0,
      'react/forbid-component-props': 0,
    },
  },
];
