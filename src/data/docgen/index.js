import docgen from './react-docgen.json';

// Button lacks proper docgen info until docgen 5.0 due to prop-type import abstraction
// related: https://github.com/carbon-design-system/carbon/issues/4580

// CodeSnippet isn't compiling in a way docgen can understand
// https://github.com/carbon-design-system/carbon/issues/4635
import overrides from './overrides.json';

export default { ...docgen, ...overrides };
