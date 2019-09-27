import React from 'react';
import {
  colors,
  black,
  green50,
  orange40,
  red60,
  white,
  yellow20,
} from '@carbon/colors';
import PropTypes from 'prop-types';

function ColorSwatch({ hex, ...rest }) {
  return (
    <div
      {...rest}
      className="color-grid__swatch"
      style={{ backgroundColor: hex }}
    />
  );
}
ColorSwatch.propTypes = {
  /**
   * hex value of the color swatch
   */
  hex: PropTypes.string,
};

export default function ColorGrid({ colorFamily, ...rest }) {
  if (colorFamily === 'alerts') {
    return (
      <div {...rest} className="color-grid">
        <ColorSwatch hex={red60} />
        <ColorSwatch hex={orange40} />
        <ColorSwatch hex={yellow20} />
        <ColorSwatch hex={green50} />
      </div>
    );
  }
  return (
    <div {...rest} className="color-grid">
      <ColorSwatch hex={black} />
      {Object.values(colors[colorFamily])
        .reverse()
        .map((hex, i) => (
          <ColorSwatch key={i} hex={hex} />
        ))}
      <ColorSwatch hex={white} />
    </div>
  );
}
ColorGrid.propTypes = {
  /**
   * Carbon color family name or "alerts"
   */
  colorFamily: PropTypes.oneOf([
    'alerts',
    'red',
    'magenta',
    'purple',
    'blue',
    'cyan',
    'teal',
    'green',
    'coolGray',
    'gray',
    'warmGray',
  ]),
};
