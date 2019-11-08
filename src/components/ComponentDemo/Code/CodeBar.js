// eslint-disable-next-line import/no-extraneous-dependencies
import copy from 'copy-to-clipboard';

import React from 'react';
import { CopyButton } from 'carbon-components-react';
import { Launch16 } from '@carbon/icons-react';
import cx from 'classnames';
import { codeBar, button, copyButton } from './Code.module.scss';
import useCodesandbox from './useCodesandbox';

// If no path is given, don't render. We'll use the Sidebar for buttons
// If a src url is given, the src Icon will display in this row, otherwise
// The copy button will.
const CodeBar = ({ src, code }) => {
  const sandboxUrl = useCodesandbox(code);
  return (
    <div className={codeBar}>
      <span>
        <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
          Edit in Codesandbox <Launch16 />
        </a>
      </span>
      {src ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="View source"
          className={button}
          href={src}
          style={{ position: 'relative', zIndex: 200 }}>
          <Launch16 />
        </a>
      ) : (
        <CopyButton
          className={cx(button, copyButton)}
          onClick={() => {
            copy(code);
          }}
        />
      )}
    </div>
  );
};

export default CodeBar;
