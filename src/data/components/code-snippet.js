export const codeSnippet = `"scripts": {
  "build": "lerna run build --stream --prefix --npm-client yarn",
  "ci-check": "carbon-cli ci-check",
  "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",
  "doctoc": "doctoc --title '## Table of Contents'",
  "format": "prettier --write '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**'",
  "format:diff": "prettier --list-different '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**' '!packages/components/**'",
  "lint": "eslint actions config codemods packages",
  "lint:styles": "stylelint '**/*.{css,scss}' --report-needless-disables --report-invalid-scope-disables",
  "sync": "carbon-cli sync",
  "test": "cross-env BABEL_ENV=test jest",
  "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns='examples,/packages/components/,/packages/react/'"
},
"resolutions": {
  "react": "~16.9.0",
  "react-dom": "~16.9.0",
  "react-is": "~16.9.0",
  "react-test-renderer": "~16.9.0"
}
`;

export const codeSnippetSingle = `node -v`;
