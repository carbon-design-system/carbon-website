/**
 * @param {Object} options The options.
 * @param {string} options.component The component name.
 * @param {string} options.variation The component variation name.
 * @param {boolean} [options.useLightVariant] `true` to use the light variant.
 * @returns {string} The component demo HTML.
 */
const getHTMLFile = ({ component, variation, useLightVariant }) => {
  // NOTE: Old code had a condition where `carbon-components/html/${variation}/...` is used:
  // https://github.com/carbon-design-system/carbon-website/blob/da6ec21/src/components/ComponentExample/ComponentExample.js#L89
  // But after some debugging effort with running all component examples, the usage could not be seen,
  // and thus such logic is removed here
  try {
    if (useLightVariant) {
      if (
        (variation !== 'text-input--password' && variation.includes('--')) ||
        variation === 'code-snippet--inline'
      ) {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        return require(`carbon-components/html/${component}/${variation}-light.html`);
      }
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`carbon-components/html/${component}/${variation}--light.html`);
    }
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(`carbon-components/html/${component}/${variation}.html`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      `Unable to import htmlFile at 'carbon-components/html/${component}/${variation}.html'`
    );
  }
  return undefined;
};

export default getHTMLFile;
