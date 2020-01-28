// eslint-disable-next-line import/no-extraneous-dependencies
import copy from 'copy-to-clipboard';

import React from 'react';
import { CopyButton } from 'carbon-components-react';
import { Launch16 } from '@carbon/icons-react';
import cx from 'classnames';
import { codeBar, button, copyButton, linkList } from './Code.module.scss';
import useCodesandbox from './useCodesandbox';

// If no path is given, don't render. We'll use the Sidebar for buttons
// If a src url is given, the src Icon will display in this row, otherwise
// The copy button will.
const CodeBar = ({ src, code }) => {
  const sandboxUrl = useCodesandbox(code);
  return (
    <div className={codeBar}>
      <div className={linkList}>
        <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
          CodeSandbox <Launch16 />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
          React <Launch16 />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
          Angular <Launch16 />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
          Vanilla <Launch16 />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
          Vue <Launch16 />
        </a>
      </div>
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
