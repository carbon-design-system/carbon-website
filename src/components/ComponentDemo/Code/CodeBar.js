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
const StorybookLink = ({ framework, url }) => (
  <a target="_blank" rel="noopener noreferrer" href={url}>
    {framework} <Launch16 />
  </a>
);

const CodeBar = ({ src, code, links }) => {
  const sandboxUrl = useCodesandbox(code);
  const storybookLinks = Object.entries(links);
  const shouldShowCopyButton = !src && code;

  return (
    <div className={codeBar}>
      <div className={linkList}>
        {sandboxUrl && (
          <a target="_blank" rel="noopener noreferrer" href={sandboxUrl}>
            CodeSandbox <Launch16 />
          </a>
        )}
        {storybookLinks.map(([framework, url]) => (
          <StorybookLink key={framework} framework={framework} url={url} />
        ))}
      </div>

      {src && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="View source"
          className={button}
          href={src}
          style={{ position: 'relative', zIndex: 200 }}
        >
          <Launch16 />
        </a>
      )}

      {shouldShowCopyButton && (
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
