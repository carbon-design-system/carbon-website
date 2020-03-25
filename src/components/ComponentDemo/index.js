import React from 'react';
import ComponentDemo from './ComponentDemo';
import DemoContextProvider from './DemoContext';

export default (props) => (
  <DemoContextProvider>
    <ComponentDemo {...props} />
  </DemoContextProvider>
);
