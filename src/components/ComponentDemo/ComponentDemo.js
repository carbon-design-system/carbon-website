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

const ComponentDemo = ({ children, src, scope, noInline, components }) => {
  // theme selected state
  const [theme, setTheme] = useState(white);
  const { isMobile, setIsKnobContainerCollapsed } = useContext(DemoContext);
  const [isFullscreen, setFullscreen] = useState(false);

  // selected variant
  const childrenArray = React.Children.toArray(children);
  const initialVariant = childrenArray.find(
    (variant) => variant.props.id === components[0].id
  );
  const [id, setId] = useState(initialVariant.props.id);
  const [code, setCode] = useState(initialVariant.props.children);
  const [initialCode, setInitialCode] = useState(code);
  const [knobs, setKnobs] = useState(initialVariant.props.knobs);
  const [links, setLinks] = useState(initialVariant.props.links);

  const themes = {
    White: white,
    'Gray 10': g10,
    'Gray 90': g90,
    'Gray 100': g100,
  };

  const onThemeChange = (event) => {
    setTheme(themes[event.selectedItem]);
  };

  const onVariantChange = (event) => {
    const currentVariant = childrenArray.find(
      (variant) => event.selectedItem.id === variant.props.id
    );
    setKnobs(currentVariant.props.knobs);
    setId(currentVariant.props.id);
    setLinks(currentVariant.props.links);

    setCode(() => {
      setInitialCode(currentVariant.props.children);
      return currentVariant.props.children;
    });
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
            onChange={onThemeChange}
            light
            itemToString={(item) =>
              isMobile ? item.replace('ray ', '') : item
            }
            initialSelectedItem="White"
            id="theme-variant"
            label="Theme variant selection"
            items={Object.keys(themes)}
            size="xl"
          />
          <Dropdown
            onChange={onVariantChange}
            light
            initialSelectedItem={components[0]}
            id="component-variant"
            label="Component variant selection"
            items={components}
            size="xl"
            className={cx(variantDropdown, {
              [hiddenDropdown]: childrenArray.length === 1,
            })}
          />
          {isFullscreen && (
            <button
              type="button"
              className={exitFullscreenButton}
              onClick={() => {
                setFullscreen(false);
              }}
            >
              <Close16 />
            </button>
          )}
        </Row>
        <Row>
          <LiveProvider
            noInline={noInline}
            theme={prismTheme}
            scope={{ ...CarbonComponents, ...scope }}
            code={code}
          >
            <div className={cx(container, { [knoblessContainer]: !knobs })}>
              <button
                type="button"
                className={cx(theme, fullscreenButton)}
                onClick={() => {
                  setFullscreen(!isFullscreen);
                }}
              >
                {isFullscreen ? <Minimize16 /> : <Maximize16 />}
              </button>
              <LivePreview className={cx(theme, previewContainer)} />
              {isMobile && (
                <button
                  type="button"
                  aria-labelledby="expand-knob-container-button"
                  onClick={() => setIsKnobContainerCollapsed(false)}
                  className={cx(theme, iconButton, iconButtonExpand)}
                >
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
                  onChange={(updatedCode) => setCode(updatedCode)}
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
                    variantId={id}
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
