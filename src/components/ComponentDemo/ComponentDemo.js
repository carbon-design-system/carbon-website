/* eslint-disable import/no-extraneous-dependencies */
import useMedia from 'use-media';

import React, { useRef, useState } from 'react';
import prismTheme from 'gatsby-theme-carbon/src/components/Code/prismTheme';
import { breakpoints } from '@carbon/elements';
import * as CarbonComponents from 'carbon-components-react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import cx from 'classnames';

import {
  demoContainer,
  previewContainer,
  editorContainer,
  themeSwitcher,
  switchButton,
  white,
  g10,
  g90,
  g100,
} from './ComponentDemo.module.scss';

import Code from './Code';

const { ContentSwitcher, Switch } = CarbonComponents;

const ComponentDemo = ({ code, path, src }) => {
  const { current: content } = useRef(code);
  const [theme, setTheme] = useState(white);
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });

  const themes = [
    { name: white, text: 'White' },
    { name: g10, text: isMobile ? 'G10' : 'Gray 10' },
    { name: g90, text: isMobile ? 'G90' : 'Gray 90' },
    { name: g100, text: isMobile ? 'G100' : 'Gray 100' },
  ];

  return (
    <div className={demoContainer}>
      <ContentSwitcher
        className={themeSwitcher}
        onChange={({ name }) => setTheme(name)}>
        {themes.map(({ name, text }) => (
          <Switch key={name} className={switchButton} name={name} text={text} />
        ))}
      </ContentSwitcher>
      <LiveProvider
        theme={prismTheme}
        scope={CarbonComponents}
        code={content.trim()}>
        <LivePreview className={cx(theme, previewContainer)} />
        <Code path={path} src={src}>
          <LiveEditor className={editorContainer} />
        </Code>
        <LiveError />
      </LiveProvider>
    </div>
  );
};

export default ComponentDemo;
