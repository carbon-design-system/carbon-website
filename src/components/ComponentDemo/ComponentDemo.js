/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import getTheme from 'gatsby-theme-carbon/src/components/Code/getTheme';
import * as CarbonComponents from '@carbon/react';
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
    document.body.dataset.livePreviewTheme = event.selectedItem;
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

  const labelText = `Live editor for the ${components[0].label} component`;

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
            itemToString={(item) =>
              isMobile ? item.replace('ray ', '') : item
            }
            initialSelectedItem="White"
            id="theme-variant"
            label="Theme selector"
            titleText="Theme selector"
            items={Object.keys(themes)}
            size="lg"
          />
          <Dropdown
            onChange={onVariantChange}
            initialSelectedItem={components[0]}
            id="component-variant"
            titleText={childrenArray.length === 1 ? '' : 'Variant selector'}
            label="Variant selector"
            items={components}
            size="lg"
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
              }}>
              <Close16 />
            </button>
          )}
        </Row>
        <Row>
          <LiveProvider
            noInline={noInline}
            theme={getTheme('white')}
            scope={{ ...CarbonComponents, ...scope }}
            code={code}>
            <div className={cx(container, { [knoblessContainer]: !knobs })}>
              <button
                type="button"
                aria-label={
                  isFullscreen ? 'Exit full screen' : 'Expand to full screen'
                }
                className={cx(theme, fullscreenButton)}
                onClick={() => {
                  setFullscreen(!isFullscreen);
                }}>
                {isFullscreen ? <Minimize16 /> : <Maximize16 />}
              </button>
              <LivePreview className={cx(theme, previewContainer)} />
              {isMobile && (
                <button
                  type="button"
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
                <label htmlFor="live-editor-label">
                  <span className="live-editor-label">{labelText}</span>
                </label>
                <LiveEditor
                  padding={16}
                  style={{ overflowX: 'auto', whiteSpace: 'pre' }}
                  onChange={(updatedCode) => setCode(updatedCode)}
                  className={editorContainer}
                  textareaId="live-editor-label"
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
