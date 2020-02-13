import React, { useRef } from 'react';
import { pascal } from 'change-case';
import { Code16, Download16 } from '@carbon/icons-react';
import { Copy } from 'carbon-components-react';
import copy from 'copy-to-clipboard';

import styles from './ActionBar.module.scss';

const ActionBar = ({
  name,
  friendlyName,
  setIsActionBarVisible,
  isActionBarVisible,
}) => {
  const component = `<${pascal(friendlyName)}32 />`;
  const actionBarRef = useRef();

  const handleBlurEvent = e => {
    const isStillFocusedWithin = actionBarRef.current.contains(e.relatedTarget);
    setIsActionBarVisible(isStillFocusedWithin);
  };

  return (
    <div
      ref={actionBarRef}
      onBlur={handleBlurEvent}
      hidden={!isActionBarVisible}
      className={styles.container}>
      <a
        onFocus={() => setIsActionBarVisible(true)}
        download={`${name}.svg`}
        href={`/icons/${name}.svg`}>
        <Download16 title={`download ${name}.svg`}>
          <title>Download {name}.svg</title>
        </Download16>
      </a>
      <Copy
        onClick={() => copy(component)}
        onFocus={() => setIsActionBarVisible(true)}
        className="bx--copy-btn"
        aria-label={`Copy the ${pascal(friendlyName)} React component`}>
        <Code16 />
      </Copy>
    </div>
  );
};

export default ActionBar;
