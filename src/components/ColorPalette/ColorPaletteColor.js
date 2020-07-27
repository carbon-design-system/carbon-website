import React, { useState } from 'react';
import cx from 'classnames';
import copy from 'copy-to-clipboard';
import { CopyButton } from 'carbon-components-react';

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

  const handleCopy = () => {
    copy(hex, { format: 'text/plain' });
  };

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
      <div>
        <span>{hex}</span>
        <CopyButton
          feedback="Copied!"
          feedbackTimeout={3000}
          iconDescription="Copy to clipboard"
          onClick={handleCopy}
          className={cx('palette-copy', { 'light-copy': lightText })}
        />
      </div>
    </div>
  );
};

export default ColorPaletteColor;
