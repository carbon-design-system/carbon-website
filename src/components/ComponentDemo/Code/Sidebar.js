import copy from 'copy-to-clipboard';

import React from 'react';
import { CopyButton } from '@carbon/react';
import { Launch } from '@carbon/icons-react';
import { withLive } from 'react-live';
import cx from 'classnames';
import { button, sidebar, copyButton } from './Code.module.scss';

const Sidebar = ({ src, path, live }) => {
  const shouldShowSrcLink = !path && src;
  const shouldShowCopyButton = !path || src;
  const { code } = live;
  return (
    <div className={sidebar}>
      {shouldShowCopyButton && (
        <CopyButton
          className={cx(button, copyButton)}
          onClick={() => {
            copy(code);
          }}
        />
      )}
      {shouldShowSrcLink && (
        <a
          title="View source"
          target="_blank"
          rel="noopener noreferrer"
          className={button}
          href={src}
          style={{ zIndex: 200 }}>
          <Launch size={16} />
        </a>
      )}
    </div>
  );
};

export default withLive(Sidebar);
