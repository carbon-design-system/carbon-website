import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import getHTMLFile from '../../utils/getHTMLFile';

const CodeExampleHTML = ({ component, variation, useLightVersion }) => {
  const html = getHTMLFile({
    component,
    variation,
    useLightVersion,
  });
  return <CodeExample htmlFile={html} codeClassName="language-html" />;
};

CodeExampleHTML.propTypes = {
  /**
   * The component name.
   */
  component: PropTypes.string,

  /**
   * The component variation name.
   */
  variation: PropTypes.string,

  /**
   * `true` to use the light version.
   */
  useLightVersion: PropTypes.bool,
};

export default CodeExampleHTML;
