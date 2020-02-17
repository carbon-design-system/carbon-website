import React, { useRef, useContext } from 'react';
import { pascalCase } from 'change-case';
import { Code16, Download16 } from '@carbon/icons-react';
import { Copy } from 'carbon-components-react';
import copy from 'copy-to-clipboard';
import { withPrefix } from 'gatsby';
import { LibraryContext } from './LibraryProvider';
import styles from './ActionBar.module.scss';

const ActionBar = ({
  name,
  friendlyName,
  setIsActionBarVisible,
  isActionBarVisible,
}) => {
  const { site, type } = useContext(LibraryContext);
  const component = `<${
    pascalCase(friendlyName) + (type === 'pictogram' ? '' : '32')
  } />`;
  const actionBarRef = useRef();

  // Don't show copy button on IDL deployment
  const shouldShowCopyButton = site === 'carbon';

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
        href={withPrefix(`/${type}s/${name}.svg`)}>
        <Download16 title={`download ${name}.svg`}>
          <title>Download {name}.svg</title>
        </Download16>
      </a>
      {shouldShowCopyButton && (
        <Copy
          onClick={() => copy(component)}
          onFocus={() => setIsActionBarVisible(true)}
          feedback={`Copied component`}
          className="bx--copy-btn"
          aria-label={`Copy the ${pascalCase(friendlyName)} React component`}>
          <Code16 />
        </Copy>
      )}
    </div>
  );
};

export default ActionBar;
