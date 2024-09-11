import React, { useRef, useContext, useState } from 'react';
import { Code, Download } from '@carbon/icons-react';
import { Button } from '@carbon/react';
import copy from 'copy-to-clipboard';
import cx from 'classnames';
import { LibraryContext } from './LibraryProvider';
import { container, trigger, hidden, tooltip } from './ActionBar.module.scss';

const ActionBar = ({
  moduleName,
  name,
  source,
  setIsActionBarVisible,
  isActionBarVisible,
  isLastCard,
}) => {
  const { site } = useContext(LibraryContext);
  const [copyText, setCopyText] = useState(`Copy <${moduleName} />`);
  const actionBarRef = useRef();

  // Don't show copy button on IDL deployment
  const shouldShowCopyButton = site === 'carbon';

  const handleBlurEvent = (e) => {
    const isStillFocusedWithin = actionBarRef.current.contains(e.relatedTarget);
    setIsActionBarVisible(isStillFocusedWithin);
  };

  const tooltipAlignment = isLastCard ? 'end' : 'center';

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
      setCopyText(`Copy ${moduleName}`);
    }, 2000);
    copy(`<${moduleName} />`, { format: 'text/plain' });
  };

  return (
    <div
      ref={actionBarRef}
      onBlur={handleBlurEvent}
      aria-hidden={!isActionBarVisible}
      className={cx(container, {
        [hidden]: !isActionBarVisible,
      })}>
      <Button
        kind="ghost"
        size="small"
        hasIconOnly
        tooltipAlignment={tooltipAlignment}
        tooltipPosition="top"
        iconDescription="Download SVG"
        renderIcon={Download}
        onFocus={() => setIsActionBarVisible(true)}
        onClick={handleDownload}
        className={tooltip}
        triggerClassName={trigger}
      />
      {shouldShowCopyButton && (
        <Button
          kind="ghost"
          size="small"
          hasIconOnly
          tooltipAlignment={tooltipAlignment}
          tooltipPosition="top"
          iconDescription={copyText}
          renderIcon={Code}
          onClick={handleCopy}
          onFocus={() => setIsActionBarVisible(true)}
          className={tooltip}
          triggerClassName={trigger}
        />
      )}
    </div>
  );
};

export default ActionBar;
