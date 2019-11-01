import React, { useRef } from 'react';
import prismTheme from 'gatsby-theme-carbon/src/components/Code/prismTheme';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ComponentDemo = ({ scope, children }) => {
  const { current: initialContent } = useRef(children);
  return (
    <LiveProvider theme={prismTheme} scope={scope} code={initialContent}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  );
};

export default ComponentDemo;
