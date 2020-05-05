import React from 'react';
import cx from 'classnames';

import { container, sidebar, row } from './Code.module.scss';

import CodeBar from './CodeBar';

const Code = ({ children, code, path, src, links, className }) => (
  // eslint-disable-next-line no-unused-vars

  <div className={cx(row, className)}>
    <CodeBar links={links} code={code} src={src} path={path} />
    <div className={container}>
      {children}
      <div className={sidebar} />
    </div>
  </div>
);
export default Code;
