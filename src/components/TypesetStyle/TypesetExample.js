import React from 'react';
import classnames from 'classnames';
import { findKey, values } from 'lodash-es';
import {
  baseFontSize,
  breakpoints as carbonBreakpoints,
} from '@carbon/elements';
import { CodeSnippet, Layer } from '@carbon/react';

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

const defaultTypeValues = {
  'letter-spacing': 0,
};

const TypesetExample = (props) => (
  <div className={`cds--typeset-example-container`}>
    {(props.typeSet || []).map((type) => {
      const indexOfClosestLargerBreakpoint = Math.max(
        0,
        values(breakpoints).findIndex(
          (width) => props.simulatedScreenWidth <= width
        )
      );

      const currentBreakpointPx =
        values(breakpoints)[indexOfClosestLargerBreakpoint];

      const currentBreakpointName = findKey(
        breakpoints,
        (val) => val === currentBreakpointPx
      );
      const getCurrentCompoundStylesForBreakpoint = (breakpointName) => {
        const typeKeys = Object.keys(breakpoints);
        const typeStylesUntilCurrentBreakpoint = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const item of typeKeys) {
          typeStylesUntilCurrentBreakpoint.push(
            props.typeScale[type.key][item]
          );
          if (item === breakpointName) {
            break;
          }
        }
        return Object.assign(
          {},
          defaultTypeValues,
          ...typeStylesUntilCurrentBreakpoint
        );
      };

      const currentBreakpointSpecs = getCurrentCompoundStylesForBreakpoint(
        currentBreakpointName
      );

      const calculateFluidTypeSize = (attribute) =>
        currentBreakpointSpecs[attribute] * baseFontSize;

      const calculateFluidLineHeight = (attribute) =>
        currentBreakpointSpecs[attribute] * baseFontSize;

      const displayWeight = (weight, style) => {
        if (style === 'italic') {
          return `${weight} / Italic`;
        }
        switch (weight) {
          case '300':
            return '300 / Light';
          case '400':
            return '400 / Regular';
          case '600':
            return '600 / Semi-Bold';
          default:
            return weight;
        }
      };

      const specs = {
        fontWeight: currentBreakpointSpecs['font-weight'],
        fontSize: `${calculateFluidTypeSize('font-size')}px`,
        fontStyle: currentBreakpointSpecs['font-style'],
        lineHeight: `${calculateFluidLineHeight('line-height')}px`,
        letterSpacing: currentBreakpointSpecs['letter-spacing'],
      };
      const displaySpecs = {
        step: currentBreakpointSpecs.step,
        font: currentBreakpointSpecs.font,
        style: currentBreakpointSpecs['font-style'],
        typeSet: currentBreakpointSpecs['type-set'],
        fontWeight: displayWeight(
          currentBreakpointSpecs['font-weight'],
          currentBreakpointSpecs['font-style']
        ),
        fontSize: `${`${calculateFluidTypeSize(
          'font-size'
        )}px / `}${currentBreakpointSpecs['font-size']
          .toString()
          .replace('0.', '.')}rem`,
        // eslint-disable-next-line no-useless-concat
        lineHeight: `${`${calculateFluidLineHeight('line-height')}px / `}${
          currentBreakpointSpecs['line-height']
        }rem`,
        letterSpacing: currentBreakpointSpecs['letter-spacing']
          .toString()
          .replace('0.', '.'),
        warning: currentBreakpointSpecs.warning,
      };

      const versionClassName = type.version ? `cds--type-${type.version}` : '';

      const versionClassNames = classnames(
        `cds--type-${type.key}`,
        versionClassName
      );

      return (
        <div
          key={`${props.name}${type.key}${type.version}`}
          style={{ padding: 0 }}
          className={`cds--typeset-example`}>
          <div className={`cds--typeset-example-row cds--row`}>
            <div className={`cds--typeset-example-description cds--col-md-5`}>
              <p className={versionClassNames} style={specs}>
                {type.description}
              </p>
            </div>
            <div
              className={`cds--typeset-example-specs cds--col-md-3 cds--padding`}>
              <Layer>
                <span className={`cds--type-body-short-01`}>
                  <span className={`cds--type-semibold`}>{type.name} </span>
                  <br />
                  Type: {displaySpecs.font}
                  <br />
                  Size: {displaySpecs.fontSize}
                  <br />
                  Line height: {displaySpecs.lineHeight}
                  <br />
                  Weight:{' '}
                  <span style={{ textTransform: 'capitalize' }}>
                    {displaySpecs.fontWeight}
                  </span>
                  <br />
                  Letter spacing: {displaySpecs.letterSpacing}px
                  <br />
                  Type set: {displaySpecs.typeSet}
                  {displaySpecs.warning != null ? (
                    <span>
                      <br />
                      <span className={`cds--type-semibold`}>warning: </span>
                      {displaySpecs.warning}
                      <br />
                    </span>
                  ) : (
                    <br />
                  )}
                  <div className={`cds--typeset-example-code-style`}>
                    <CodeSnippet type="inline" feedback="Copied!" light>
                      ${type.name.split(' ')[0]}
                    </CodeSnippet>
                  </div>
                </span>
              </Layer>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default TypesetExample;
