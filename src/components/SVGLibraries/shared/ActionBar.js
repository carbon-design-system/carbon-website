// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useRef, useContext, useState } from 'react';
import { pascalCase } from 'change-case';
import { Code16, Download16 } from '@carbon/icons-react';
import { TooltipDefinition } from 'carbon-components-react';
import copy from 'copy-to-clipboard';
import cx from 'classnames';
import { LibraryContext } from './LibraryProvider';
import styles from './ActionBar.module.scss';

const ActionBar = ({
  name,
  friendlyName,
  source,
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

  const handleBlurEvent = (e) => {
    const isStillFocusedWithin = actionBarRef.current.contains(e.relatedTarget);
    setIsActionBarVisible(isStillFocusedWithin);
  };

  const handleDownload = () => {
    const a = document.body.appendChild(document.createElement('a'));
    const blob = new Blob([source], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    a.download = `${name}.svg`;
    a.href = url;
    a.click();
    document.body.removeChild(a);
  };

  const handleCopy = () => {
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText(`Copy ${component}`);
    }, 2000);
    copy(component, { format: 'text/plain' });
  };

  return (
    <div
      ref={actionBarRef}
      onBlur={handleBlurEvent}
      aria-hidden={!isActionBarVisible}
      className={cx(styles.container, {
        [styles.hidden]: !isActionBarVisible,
      })}>
      <TooltipDefinition
        onFocus={() => setIsActionBarVisible(true)}
        onClick={handleDownload}
        align="center"
        direction="top"
        tooltipText="Download SVG"
        className={styles.tooltip}
        triggerClassName={styles.trigger}>
        <Download16 />
      </TooltipDefinition>
      {shouldShowCopyButton && (
        <TooltipDefinition
          align="center"
          direction="top"
          tooltipText={copyText}
          onClick={handleCopy}
          onFocus={() => setIsActionBarVisible(true)}
          className={styles.tooltip}
          triggerClassName={styles.trigger}>
          <Code16 />
        </TooltipDefinition>
      )}
    </div>
  );
};

export default ActionBar;
