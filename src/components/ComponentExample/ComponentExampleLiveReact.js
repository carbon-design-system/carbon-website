import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import demos from '../../react-demo';

let instanceSeq = 0;
const getInstanceId = component => `${component}-${instanceSeq++}`; // eslint-disable-line no-plusplus

/**
 * The live demo portion of component example UI, for React.
 */
const ComponentExampleLiveReact = ({
  component,
  variation,
  useLightVersion,
}) => {
  const instanceId = useMemo(() => getInstanceId(component), [
    component,
    variation,
    useLightVersion,
  ]);
  const DemoComponent = demos[component] && demos[component][variation];
  return (
    <div>
      {!DemoComponent ? (
        undefined
      ) : (
        <DemoComponent id={instanceId} light={useLightVersion} />
      )}
    </div>
  );
};

ComponentExampleLiveReact.propTypes = {
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

export default ComponentExampleLiveReact;
