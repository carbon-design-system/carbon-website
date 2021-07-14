/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';
import {
  baseFontSize,
  breakpoints as carbonBreakpoints,
} from '@carbon/elements';
import { findLastIndex, values } from 'lodash-es';

import InputRange from './InputRange';
import StickyContainer from './StickyContainer';
import TypesetExample from './TypesetExample';

import typeScale from './typeScale';
import typeSets from './typeSets';

const { prefix } = settings;

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

const nextLargerBreakpointPx = viewportWidth =>
  values(breakpoints)[indexOfCurrentBreakpoint(viewportWidth) + 1];

const indexOfCurrentBreakpoint = viewportWidth =>
  findLastIndex(values(breakpoints), width => viewportWidth >= width);

const isWithinBreakpoint = (viewportWidth, currentBreakpoint) => {
  if (viewportWidth === currentBreakpoint) return true;
  return (
    viewportWidth >= currentBreakpoint &&
    viewportWidth < nextLargerBreakpointPx(currentBreakpoint)
  );
};

class TypesetStyle extends React.Component {
  state = {
    simulatedScreenWidth: 1056,
    tab: 0,
    sticky: false,
    mobile: false,
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      this.setState({
        mobile: true,
      });
    }
    this.addResizeListener();
    this.addScrollListener();
  }

  addScrollListener() {
    document.addEventListener('scroll', () => {
      if (this.refs.stickyBar) {
        if (this.refs.stickyBar.getBoundingClientRect().top <= 112) {
          this.setState({
            sticky: true,
          });
        } else if (this.refs.stickyBar.getBoundingClientRect().top > 112) {
          this.setState({
            sticky: false,
          });
        }
      }
    });
  }

  addResizeListener() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.setState({
          mobile: true,
        });
      } else if (window.innerWidth > 500) {
        this.setState({
          mobile: false,
        });
      }
    });
  }

  toggleBreakpoint = e => {
    this.setState({ simulatedScreenWidth: Number(e.target.value) });
  };

  toggleSet = value => {
    this.setState({ tab: value });
  };

  getButtons = () =>
    Object.keys(breakpoints).map(breakpointName => (
      <button
        className={`${prefix}--typeset-style-button ${prefix}--type-body-long-01 ${
          isWithinBreakpoint(
            this.state.simulatedScreenWidth,
            breakpoints[breakpointName]
          )
            ? 'selected'
            : ''
        }`}
        value={breakpoints[breakpointName]}
        selected={isWithinBreakpoint(
          this.state.simulatedScreenWidth,
          breakpoints[breakpointName]
        )}
        onClick={this.toggleBreakpoint}
        key={`breakpoint-tab${breakpointName}`}>
        {breakpointName}
      </button>
    ));

  render() {
    const {
      navBar,
      banner,
      secondary,
      top,
      breakpointControls=false,
      header=false,
      typesets,
    } = this.props;

    const typesetStyleStickyClassnames = classnames(
      [`${prefix}--typeset-style-controls-sticky`],
      [`${prefix}--row`],
      {
        [`${prefix}--typeset-style-controls-sticky-stuck`]: this.state.sticky,
      }
    );

    return (
      <div className={`${prefix}--typeset-style-container`}>
        <StickyContainer
          navBar={navBar || true}
          banner={banner || true}
          secondary={secondary || false}
          top={top || null}>
          {breakpointControls && (
            <>
              <div
                className={`${prefix}--typeset-style-title-shiv ${prefix}--row`}
              />
              <div ref="stickyBar" className={typesetStyleStickyClassnames}>
                <div className={`${prefix}--typeset-style-breakpoint-controls`}>
                  <span
                    className={`${prefix}--type-body-long-01 ibm-padding--horizontal`}
                    style={{ marginBottom: 0 }}>
                    Breakpoints
                  </span>
                  <div
                    className={`${prefix}--typeset-style-button-controls-container`}>
                    {this.getButtons()}
                  </div>
                </div>
                <div className={`${prefix}--typeset-style-screen-controls`}>
                  <span
                    className={`${prefix}--type-body-long-01 ${prefix}--typeset-style-screen-width-label`}
                    style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
                    Screen width
                  </span>
                  <InputRange
                    id="screenWidthInput"
                    min={breakpoints.sm}
                    max={breakpoints.max}
                    value={this.state.simulatedScreenWidth}
                    onChange={this.toggleBreakpoint}
                  />
                  <label
                    className={`${prefix}--typeset-style-screen-label ${prefix}--type-body-long-01`}
                    htmlFor="screenWidthInput">
                    {this.state.simulatedScreenWidth}
                  </label>
                </div>
              </div>
            </>
          )}
        </StickyContainer>
        <div>
          {typesets
            .replace(', ', ',')
            .split(',')
            .map((typeset, i) => (
              <>
                {header && (
                <h4 className="page-h4">
                  {typeset
                    .replace(/fixed/g, '')
                    .replace(/([a-z])([A-Z])/g, '$1 $2')
                    .toLowerCase()}
                </h4>
                )}
                <TypesetExample
                  key={i}
                  simulatedScreenWidth={this.state.simulatedScreenWidth}
                  name={typeset}
                  typeSet={typeSets[typeset]}
                  typeScale={typeScale}
                />
              </>
            ))}
        </div>
      </div>
    );
  }
}

export default TypesetStyle;

// these props are passed onto the sticky container
TypesetStyle.propTypes = {
  // if site has banner at top ( ex. go to v1)
  banner: PropTypes.bool,

  // if page navBar is showing / hiding, toggle this on/off
  navBar: PropTypes.bool,

  // for items that are on pages that already have a sticky item
  secondary: PropTypes.bool,

  // if custom top is necessary, must include units - (rem, px, etc)
  top: PropTypes.string,

  // show / hide breakpoint controls
  breakpointControls: PropTypes.bool,

  // show / hide the header
  header: PropTypes.bool,

  // comma separated list of typesets to display
  typesets: PropTypes.string,
};
