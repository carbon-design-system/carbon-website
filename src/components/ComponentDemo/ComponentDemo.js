/* eslint-disable import/no-extraneous-dependencies */
import useMedia from 'use-media';

import React, { useState } from 'react';
import prismTheme from 'gatsby-theme-carbon/src/components/Code/prismTheme';
import { breakpoints } from '@carbon/elements';
import * as CarbonComponents from 'carbon-components-react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import cx from 'classnames';

import {
  container,
  knoblessContainer,
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
import KnobContainer from './KnobContainer';
import DemoContextProvider from './DemoContext';
import ErrorBoundary from './ErrorBoundary';

const { ContentSwitcher, Switch } = CarbonComponents;

const ComponentDemo = ({ code: codeProp, src, scope, knobs }) => {
  const [editorHeight, setEditorHeight] = useState();
  const [code, setCode] = useState(codeProp.trim());
  const [theme, setTheme] = useState(white);
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });

  const themes = [
    { name: white, text: 'White' },
    { name: g10, text: isMobile ? 'G10' : 'Gray 10' },
    { name: g90, text: isMobile ? 'G90' : 'Gray 90' },
    { name: g100, text: isMobile ? 'G100' : 'Gray 100' },
  ];

  // TODO max width editor handle multiple clicks use regex for individual props?
  // allow for write-in props
  // Tests/cleanup context
  // handle true/false better

  return (
    <ErrorBoundary>
      <DemoContextProvider>
        <ContentSwitcher
          className={themeSwitcher}
          onChange={({ name }) => setTheme(name)}>
          {themes.map(({ name, text }) => (
            <Switch
              key={name}
              className={switchButton}
              name={name}
              text={text}
            />
          ))}
        </ContentSwitcher>
        <LiveProvider
          theme={prismTheme}
          scope={{ ...CarbonComponents, ...scope }}
          code={code}>
          <div className={cx(container, { [knoblessContainer]: !knobs })}>
            <LivePreview className={cx(theme, previewContainer)} />
            <Code code={code} setEditorHeight={setEditorHeight} src={src}>
              <LiveEditor
                padding={16}
                style={{ overflowX: 'auto', whiteSpace: 'pre' }}
                onChange={updatedCode => setCode(updatedCode)}
                className={editorContainer}
              />
            </Code>
            {knobs && (
              <KnobContainer
                code={code}
                setCode={setCode}
                leftPaneHeight={editorHeight + 560}
                knobs={knobs}
              />
            )}
          </div>
          <LiveError />
        </LiveProvider>
      </DemoContextProvider>
    </ErrorBoundary>
  );
};

export default ComponentDemo;
