import React from 'react';
import cx from 'classnames';

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
  const sequentialStyle = !continuous ? { background: `#${hex}` } : null;
  const defaultStyle = { background: `#${hex}` };

  // determine number
  const checkDigit = index >= 9 ? `${index + 1}. ` : `0${index + 1}. `;
  const number = isNumbered ? checkDigit : null;

  return (
    <div
      key={index}
      className={cx('color-palette-color', { 'light-text': lightText })}
      style={isSequential ? sequentialStyle : defaultStyle}
    >
      <span>
        {number}
        {name}
      </span>
      <span>{hex}</span>
    </div>
  );
};

export default ColorPaletteColor;
