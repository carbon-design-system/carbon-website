import React, { useEffect } from 'react';

import cx from 'classnames';

import useResizeObserver from 'use-resize-observer';

import { container, sideBarMinHeight, row } from './Code.module.scss';

import PathRow from './PathRow';
import Sidebar from './Sidebar';

const Code = ({ children, code, path, src, setEditorHeight }) => {
  // eslint-disable-next-line no-unused-vars
  const [ref, _, height] = useResizeObserver({ defaultHeight: 40 });

  useEffect(() => {
    setEditorHeight(height);
  }, [height]);

  return (
    <div ref={ref} className={row}>
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
};

export default Code;
