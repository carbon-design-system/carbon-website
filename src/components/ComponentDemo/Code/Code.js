import React, { useEffect } from 'react';

import useResizeObserver from 'use-resize-observer';

import { container, sidebar, row } from './Code.module.scss';

import CodeBar from './CodeBar';

const Code = ({ children, code, path, src, setEditorHeight }) => {
  // eslint-disable-next-line no-unused-vars
  const [ref, _, height] = useResizeObserver({ defaultHeight: 40 });

  useEffect(() => {
    setEditorHeight(height);
  }, [height]);

  return (
    <div ref={ref} className={row}>
      <CodeBar code={code} src={src} path={path} />
      <div className={container}>
        {children}
        <div className={sidebar} />
      </div>
    </div>
  );
};

export default Code;
