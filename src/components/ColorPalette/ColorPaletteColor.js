import React from 'react';
import cx from 'classnames';
import { colorPaletteColor, textLight } from './ColorPalette.module.scss';

const ColorPaletteColor = ({
  index,
  lightText,
  hex,
  name,
  isNumbered,
  isSequential,
  continuous,
}) => {
  // determine styles
  const defaultStyle = { background: `#${hex}` };
  const sequentialStyle = !continuous ? defaultStyle : null;

  // determine number
  const checkDigit = index >= 9 ? `${index + 1}. ` : `0${index + 1}. `;
  const number = isNumbered ? checkDigit : null;

  return (
    <div
      key={index}
      className={cx(colorPaletteColor, { [textLight]: lightText })}
      style={isSequential ? sequentialStyle : defaultStyle}>
      <span>
        {number}
        {name}
      </span>
      <span>{hex}</span>
    </div>
  );
};

export default ColorPaletteColor;
