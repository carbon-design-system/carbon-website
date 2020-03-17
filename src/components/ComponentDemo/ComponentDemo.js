/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import prismTheme from 'gatsby-theme-carbon/src/components/Code/prismTheme';
import * as CarbonComponents from 'carbon-components-react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Row } from 'gatsby-theme-carbon';
import { TableOfContents20 } from '@carbon/icons-react';
import cx from 'classnames';

import {
  container,
  knoblessContainer,
  previewContainer,
  editorContainer,
  themeSwitcher,
  switchButton,
  iconButton,
  iconButtonExpand,
  white,
  g10,
  g90,
  g100,
  zamboni,
  dropdown,
} from './ComponentDemo.module.scss';

import Code from './Code';
import KnobContainer from './KnobContainer';
import ErrorBoundary from './ErrorBoundary';
import { DemoContext } from './DemoContext';

export const PREVIEW_CONTAINER_HEIGHT = 560;

const { Dropdown, ContentSwitcher, Switch } = CarbonComponents;

const ComponentDemo = ({
  children,
  src,
  scope,
  knobs,
  noInline,
  links,
  items,
  initialSelectedItem,
}) => {
  const [theme, setTheme] = useState(white);
  const { isMobile, setIsKnobContainerCollapsed } = useContext(DemoContext);

  // dropdown selected state
  const [dropdownSelected, setDropdownSelected] = useState(initialSelectedItem);
  // component variant selected state
  const childrenArray = React.Children.toArray(children);
  const initialMatchingChild = childrenArray.filter(
    child => child.props.id === dropdownSelected.id
  );
  const [code, setCode] = useState(initialMatchingChild[0].props.children);

  const themes = [
    { name: white, text: 'White' },
    { name: g10, text: isMobile ? 'G10' : 'Gray 10' },
    { name: g90, text: isMobile ? 'G90' : 'Gray 90' },
    { name: g100, text: isMobile ? 'G100' : 'Gray 100' },
  ];

  const onDropdownChange = event => {
    setDropdownSelected(event.selectedItem);

    const matchingChild = childrenArray.filter(
      child => child.props.id === event.selectedItem.id
    );

    setCode(matchingChild[0].props.children);
  };

  // TODO max width editor handle multiple clicks use regex for individual props?
  // allow for write-in props
  // Tests/cleanup context
  // handle true/false better

  return (
    <ErrorBoundary>
      <Row>
        <Dropdown
          onChange={onDropdownChange}
          className={dropdown}
          light
          initialSelectedItem={dropdownSelected}
          id="component-variant"
          items={items}
          size="xl"
        />
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
            <Code links={links} code={code} src={src}>
              <LiveEditor
                padding={16}
                style={{ overflowX: 'auto', whiteSpace: 'pre' }}
                onChange={updatedCode => setCode(updatedCode)}
                className={editorContainer}
              />
            </Code>
            {knobs && (
              <>
                <KnobContainer code={code} setCode={setCode} knobs={knobs} />
                <span className={zamboni} />
              </>
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
