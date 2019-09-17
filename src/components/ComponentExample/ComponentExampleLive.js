import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import * as carbonComponents from 'carbon-components/es/globals/js/components';
import settings from 'carbon-components/es/globals/js/settings';
import {
  DIRECTION_TOP,
  DIRECTION_BOTTOM,
} from 'carbon-components/es/components/floating-menu/floating-menu';
import InlineLoadingDemoButton from './inline-loading-demo-button';
import getHTMLFile from '../../utils/getHTMLFile';

const components = {
  ...carbonComponents,
  InlineLoadingDemoButton,
};

const componentNamesMap = {
  Card: ['OverflowMenu'],
  CodeSnippet: ['CodeSnippet', 'CopyButton'],
  DataTable: ['DataTable', 'DataTableV2', 'OverflowMenu', 'Toolbar'],
  DetailPageHeader: ['OverflowMenu', 'Tab'],
  InlineLoading: ['InlineLoading', 'InlineLoadingDemoButton'],
  OrderSummary: ['Dropdown'],
  Tabs: ['Tab', 'ContentSwitcher'],
};

/**
 * Determines how the vertical position of live demo container should affect the floating menu position offset.
 * Refs:
 * https://github.com/IBM/carbon-components/blob/v9.0.0/src/components/floating-menu/floating-menu.js#L61
 * https://github.com/IBM/carbon-components/blob/v9.0.0/src/components/floating-menu/floating-menu.js#L69
 * @type {Object<string, number>}
 */
const liveDemoContainerVerticalPositionFactors = {
  [DIRECTION_TOP]: 1,
  [DIRECTION_BOTTOM]: -1,
};

/**
 * Releases stale vanilla component instaces and creates ones in the given DOM element.
 * @param {Object} The options.
 * @param {Element} options.container The DOM element to instantiate vanilla components in.
 * @param {string} options.component The name of vanilla component to instantiate.
 * @returns {Handle} The handle to release the components created in this function.
 */
const instantiateComponents = ({ container, component, initHandles }) => {
  if (!container) {
    return null;
  }
  const handles = [];
  const currentComponent = component
    .replace(/-([a-z])/g, (match, token) => token.toUpperCase())
    .replace(/^([a-z])/, (match, token) => token.toUpperCase());
  // TODO: See if instances with different prefixes may exist as the same time.
  // If so, we need to figure out more sophisticted approach here.
  settings.prefix = 'bx';
  (componentNamesMap[currentComponent] || [currentComponent]).forEach(name => {
    const TheComponent = components[name];
    if (TheComponent) {
      const options = {};
      if (name === 'DatePicker') {
        const liveContainerRef = container.closest('.component-example__live');
        options.appendTo = liveContainerRef;
        options.onPreCalendarPosition = (
          selectedDates,
          value,
          { _positionElement, calendarContainer }
        ) => {
          // Make it "post" positioning handler
          Promise.resolve().then(() => {
            const {
              left: inputLeft,
              top: inputTop,
            } = _positionElement.getBoundingClientRect();
            const {
              left: containerLeft,
              top: containerTop,
            } = liveContainerRef.getBoundingClientRect();
            // eslint-disable-next-line no-param-reassign
            calendarContainer.style.left = `${inputLeft - containerLeft}px`;
            // eslint-disable-next-line no-param-reassign
            calendarContainer.style.top = `${inputTop -
              containerTop +
              _positionElement.offsetHeight}px`;
          });
        };
      }
      if (name === 'OverflowMenu' || name === 'Tooltip') {
        ['objMenuOffset', 'objMenuOffsetFlip'].forEach(optionName => {
          if (TheComponent.options[optionName]) {
            options[optionName] = (menuBody, direction, trigger) => {
              const origOffset = TheComponent.options[optionName](
                menuBody,
                direction,
                trigger
              );
              const liveContainerRef = container.closest(
                '.component-example__live'
              );
              if (liveContainerRef) {
                const { left: origLeft, top: origTop } = origOffset;
                const {
                  left: liveContainerLeft,
                  top: liveContainerTop,
                } = liveContainerRef.getBoundingClientRect();
                const borderWidth =
                  name !== 'OverflowMenu'
                    ? 0
                    : parseInt(
                        liveContainerRef.ownerDocument.defaultView
                          .getComputedStyle(liveContainerRef)
                          .getPropertyValue('border-left-width'), // FF doesn't have one for `border-width`
                        10
                      );
                const adjustLeft =
                  liveContainerLeft +
                  borderWidth +
                  menuBody.ownerDocument.defaultView.pageXOffset;
                const adjustTop =
                  liveContainerTop +
                  borderWidth +
                  menuBody.ownerDocument.defaultView.pageYOffset;
                return {
                  left: origLeft - adjustLeft,
                  top:
                    origTop +
                    adjustTop *
                      liveDemoContainerVerticalPositionFactors[direction],
                };
              }
              return origOffset;
            };
          }
        });
      }
      if (TheComponent.prototype.createdByLauncher) {
        // eslint-disable-next-line no-underscore-dangle
        if (!initHandles.has(TheComponent)) {
          initHandles.set(
            TheComponent,
            TheComponent.init(container.ownerDocument, options)
          );
        }
      } else {
        const selectorInit = TheComponent.options.selectorInit;
        // Gatsby's setup seems to use `.concat()` for [...arraylike], which does not work for `NodeList`
        handles.push(
          ...Array.from(container.querySelectorAll(selectorInit)).map(elem =>
            TheComponent.create(elem, options)
          )
        );
      }
    }
  });
  return {
    release() {
      for (let handle = handles.pop(); handle; handle = handles.pop()) {
        handle.release();
      }
      return null;
    },
  };
};

/**
 * The live demo portion of component example UI.
 */
const ComponentExampleLive = ({ component, variation, useLightVersion }) => {
  const initHandles = useMemo(() => new Map(), []);
  const handleRef = useRef(null);
  const containerRef = useRef(null);
  const htmlFile = getHTMLFile({ component, variation, useLightVersion });
  useEffect(() => {
    const { current: container } = containerRef;
    if (handleRef.current) {
      handleRef.current = handleRef.current.release();
    }
    handleRef.current = instantiateComponents({
      container,
      component,
      initHandles,
    });
    return () => {
      if (handleRef.current) {
        handleRef.current = handleRef.current.release();
      }
      initHandles.forEach((value, key) => {
        if (value) {
          value.release();
        }
        initHandles.delete(key);
      });
    };
  }, [component, variation, useLightVersion]);
  return (
    <div
      ref={containerRef}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: htmlFile }}
    />
  );
};

ComponentExampleLive.propTypes = {
  /**
   * The component name.
   */
  component: PropTypes.string,

  /**
   * The component variation name.
   */
  variation: PropTypes.string,

  /**
   * `true` to use the light version.
   */
  useLightVersion: PropTypes.bool,
};

export default ComponentExampleLive;
