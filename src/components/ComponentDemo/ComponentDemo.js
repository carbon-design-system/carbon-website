/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import prismTheme from 'gatsby-theme-carbon/src/components/Code/prismTheme';
import * as CarbonComponents from 'carbon-components-react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Row } from 'gatsby-theme-carbon';
import cx from 'classnames';

import {
  container,
  knoblessContainer,
  previewContainer,
  editorContainer,
  themeSwitcher,
  switchButton,
  expandKnobContainerButton,
  white,
  g10,
  g90,
  g100,
} from './ComponentDemo.module.scss';

import Code from './Code';
import KnobContainer from './KnobContainer';
import ErrorBoundary from './ErrorBoundary';
import { DemoContext } from './DemoContext';

export const PREVIEW_CONTAINER_HEIGHT = 560;

const { ContentSwitcher, Switch } = CarbonComponents;

const ComponentDemo = ({ code: codeProp, src, scope, knobs, noInline }) => {
  const [editorHeight, setEditorHeight] = useState();
  const [code, setCode] = useState(codeProp.trim());
  const [theme, setTheme] = useState(white);
  const { isMobile, setIsKnobContainerExpanded } = useContext(DemoContext);

  const knobContainerHeight = isMobile
    ? PREVIEW_CONTAINER_HEIGHT
    : editorHeight + PREVIEW_CONTAINER_HEIGHT;

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
      <Row>
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
          noInline={noInline}
          theme={prismTheme}
          scope={{ ...CarbonComponents, ...scope }}
          code={code}>
          <div className={cx(container, { [knoblessContainer]: !knobs })}>
            <LivePreview className={cx(theme, previewContainer)} />
            <button
              onClick={() => setIsKnobContainerExpanded(true)}
              className={expandKnobContainerButton}>
              expand
            </button>
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
                maxHeight={knobContainerHeight}
                knobs={knobs}
              />
            )}
          </div>
          {/* Eat syntax errors in production but not development */}
          {process.env.NODE_ENV === 'development' && <LiveError />}
        </LiveProvider>
      </Row>
    </ErrorBoundary>
  );
};

export default ComponentDemo;
