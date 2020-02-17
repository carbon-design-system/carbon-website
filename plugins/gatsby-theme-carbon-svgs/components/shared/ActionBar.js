import React, { useRef, useContext, useState, useEffect } from 'react';
import { pascalCase } from 'change-case';
import { Code16, Download16 } from '@carbon/icons-react';
import { TooltipDefinition } from 'carbon-components-react';
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
  const [copyText, setCopyText] = useState(`Copy ${component}`);
  const actionBarRef = useRef();

  // Don't show copy button on IDL deployment
  const shouldShowCopyButton = site === 'carbon';

  const handleBlurEvent = e => {
    const isStillFocusedWithin = actionBarRef.current.contains(e.relatedTarget);
    setIsActionBarVisible(isStillFocusedWithin);
  };

  const handleCopy = () => {
    setCopyText('Copied!');
    copy(component);
  };

  useEffect(() => {
    if (copyText === 'Copied!') {
      setTimeout(() => {
        setCopyText(`Copy ${component}`);
      }, 2000);
    }
  }, [copyText]);

  return (
    <div
      ref={actionBarRef}
      onBlur={handleBlurEvent}
      hidden={!isActionBarVisible}
      className={styles.container}>
      <TooltipDefinition
        align="center"
        direction="top"
        tooltipText="Download SVG"
        triggerClassName={styles.trigger}>
        <a
          onFocus={() => setIsActionBarVisible(true)}
          download={`${name}.svg`}
          href={withPrefix(`/${type}s/${name}.svg`)}>
          <Download16 />
        </a>
      </TooltipDefinition>
      {shouldShowCopyButton && (
        <TooltipDefinition
          align="center"
          direction="top"
          tooltipText={copyText}
          triggerClassName={styles.trigger}>
          <button
            onClick={handleCopy}
            onFocus={() => setIsActionBarVisible(true)}>
            <Code16 />
          </button>
        </TooltipDefinition>
      )}
    </div>
  );
};

export default ActionBar;
