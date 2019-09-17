import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import CodeExample from './CodeExample';
import demos from '../../react-demo';

let instanceSeq = 0;
const getInstanceId = component => `${component}-${instanceSeq++}`; // eslint-disable-line no-plusplus

const CodeExampleReact = ({ component, variation, useLightVersion }) => {
  const instanceId = useMemo(() => getInstanceId(component), [
    component,
    variation,
    useLightVersion,
  ]);
  const DemoComponent = demos[component] && demos[component][variation];
  // Uses function call instead of JSX to get the React element that `DemoComponent` generates
  const html =
    DemoComponent &&
    reactElementToJSXString(
      DemoComponent({ id: instanceId, light: useLightVersion }),
      { showDefaultProps: false, showFunctions: true }
    );
  return <CodeExample htmlFile={html} codeClassName="language-jsx" />;
};

CodeExampleReact.propTypes = {
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

export default CodeExampleReact;
