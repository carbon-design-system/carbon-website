/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import prismTheme from 'gatsby-theme-carbon/src/components/Code/prismTheme';
import * as CarbonComponents from 'carbon-components-react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Row } from 'gatsby-theme-carbon';
import {
  TableOfContents20,
  Maximize16,
  Minimize16,
  Close16,
} from '@carbon/icons-react';
import cx from 'classnames';

import {
  fullscreen,
  container,
  knoblessContainer,
  previewContainer,
  editorContainer,
  iconButton,
  iconButtonExpand,
  fullscreenButton,
  exitFullscreenButton,
  white,
  g10,
  g90,
  g100,
  zamboni,
  dropdownRow,
  codeRow,
  hiddenDropdown,
  variantDropdown,
} from './ComponentDemo.module.scss';

import Code from './Code';
import KnobContainer from './KnobContainer';
import ErrorBoundary from './ErrorBoundary';
import { DemoContext } from './DemoContext';

export const PREVIEW_CONTAINER_HEIGHT = 560;

const { Dropdown } = CarbonComponents;

const ComponentDemo = ({
  children,
  src,
  scope,
  noInline,
  items,
  initialSelectedItem,
}) => {
  // theme selected state
  const [theme, setTheme] = useState(white);
  const { isMobile, setIsKnobContainerCollapsed } = useContext(DemoContext);
  const [isFullscreen, setFullscreen] = useState(false);

  // component variant selected state
  const [variantSelected, setVariantSelected] = useState(initialSelectedItem);
  const childrenArray = React.Children.toArray(children);
  const initialMatchingChild = childrenArray.filter(
    child => child.props.id === variantSelected.id
  );
  const [code, setCode] = useState(initialMatchingChild[0].props.children);
  const [initialCode, setInitialCode] = useState(code);
  const [knobs, setKnobs] = useState(initialMatchingChild[0].props.knobs);
  const [links, setLinks] = useState(initialMatchingChild[0].props.links);

  const themes = [
    { id: white, label: 'White' },
    { id: g10, label: isMobile ? 'G10' : 'Gray 10' },
    { id: g90, label: isMobile ? 'G90' : 'Gray 90' },
    { id: g100, label: isMobile ? 'G100' : 'Gray 100' },
  ];

  const onVariantChange = event => {
    setVariantSelected(event.selectedItem);

    const matchingChild = childrenArray.filter(
      child => child.props.id === event.selectedItem.id
    );

    setCode(() => {
      setInitialCode(matchingChild[0].props.children);
      return matchingChild[0].props.children;
    });
    setKnobs(matchingChild[0].props.knobs);
    setLinks(matchingChild[0].props.links);
  };

  // TODO max width editor handle multiple clicks use regex for individual props?
  // allow for write-in props
  // Tests/cleanup context
  // handle true/false better

  return (
    <ErrorBoundary>
      <div className={cx({ [fullscreen]: isFullscreen })}>
        <Row className={dropdownRow}>
          <Dropdown
            onChange={event => setTheme(event.selectedItem.id)}
            light
            initialSelectedItem={{ id: white, label: 'White' }}
            id="theme-variant"
            label="Theme variant selection"
            items={themes}
            size="xl"
          />
          <Dropdown
            onChange={onVariantChange}
            light
            initialSelectedItem={variantSelected}
            id="component-variant"
            label="Component variant selection"
            items={items}
            size="xl"
            className={cx(variantDropdown, {
              [hiddenDropdown]: childrenArray.length === 1,
            })}
          />
          {isFullscreen && (
            <button
              className={exitFullscreenButton}
              onClick={() => {
                setFullscreen(false);
              }}>
              <Close16 />
            </button>
          )}
        </Row>
        <Row>
          <LiveProvider
            noInline={noInline}
            theme={prismTheme}
            scope={{ ...CarbonComponents, ...scope }}
            code={code}>
            <div className={cx(container, { [knoblessContainer]: !knobs })}>
              <button
                className={cx(theme, fullscreenButton)}
                onClick={() => {
                  setFullscreen(!isFullscreen);
                }}>
                {isFullscreen ? <Minimize16 /> : <Maximize16 />}
              </button>
              <LivePreview className={cx(theme, previewContainer)} />
              {isMobile && (
                <button
                  aria-labelledby="expand-knob-container-button"
                  onClick={() => setIsKnobContainerCollapsed(false)}
                  className={cx(theme, iconButton, iconButtonExpand)}>
                  <span id="expand-knob-container-button" hidden>
                    Expand component knob container
                  </span>
                  <TableOfContents20 />
                </button>
              )}

              <Code links={links} code={code} src={src} className={codeRow}>
                <LiveEditor
                  padding={16}
                  style={{ overflowX: 'auto', whiteSpace: 'pre' }}
                  onChange={updatedCode => setCode(updatedCode)}
                  className={editorContainer}
                />
              </Code>
              {knobs && (
                <>
                  <KnobContainer
                    code={code}
                    setCode={setCode}
                    knobs={knobs}
                    initialCode={initialCode}
                  />
                  <span className={zamboni} />
                </>
              )}
            </div>
            {/* Eat syntax errors in production but not development */}
            {process.env.NODE_ENV === 'development' && <LiveError />}
          </LiveProvider>
        </Row>
      </div>
    </ErrorBoundary>
  );
};

export default ComponentDemo;
