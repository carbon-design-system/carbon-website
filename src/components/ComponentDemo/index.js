import React from 'react';
import ComponentDemo from './ComponentDemo';
import DemoContextProvider from './DemoContext';

const Demo = (props) => (
  <DemoContextProvider>
    <ComponentDemo {...props} />
  </DemoContextProvider>
);

export default Demo;
