// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOMServer from 'react-dom/server';
import React, { useRef, useContext, useState, useEffect } from 'react';
import { pascalCase } from 'change-case';
import { Code16, Download16 } from '@carbon/icons-react';
import { TooltipDefinition } from 'carbon-components-react';
import copy from 'copy-to-clipboard';
import { LibraryContext } from './LibraryProvider';
import styles from './ActionBar.module.scss';

const ActionBar = ({
  name,
  friendlyName,
  component: Element,
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

  const handleDownload = () => {
    const a = document.body.appendChild(document.createElement('a'));
    const string = ReactDOMServer.renderToStaticMarkup(<Element />);
    const blob = new Blob([string], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    a.download = `${name}.svg`;
    a.href = url;
    a.click();
    document.body.removeChild(a);
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
