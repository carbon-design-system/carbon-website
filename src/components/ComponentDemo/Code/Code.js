import React from 'react';

import cx from 'classnames';

import { container, sideBarMinHeight, row } from './Code.module.scss';

import PathRow from './PathRow';
import Sidebar from './Sidebar';

const Code = ({ children, code, path, src }) => (
  <div className={row}>
    <PathRow src={src} path={path}>
      {code}
    </PathRow>
    <div
      className={cx(container, {
        [sideBarMinHeight]: !path && src,
      })}>
      {children}
      <Sidebar path={path} src={src}>
        {code}
      </Sidebar>
    </div>
  </div>
);

export default Code;
