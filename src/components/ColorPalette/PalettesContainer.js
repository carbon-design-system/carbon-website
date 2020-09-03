import React from 'react';
import cx from 'classnames';
import {
  palettesContainer,
  sequential,
  darkMode,
  gradientBlue,
  gradientPurple,
  gradientRed,
  gradientTeal,
  gradientCyan,
  gradientTealOnly,
  alertContainer,
} from './ColorPalette.module.scss';

const PalettesContainer = ({
  children,
  color,
  continuous,
  dark,
  index,
  type,
}) => {
  const paletteContainerClassNames = cx(palettesContainer, {
    [sequential]: color,
    [darkMode]: dark,
    [gradientBlue]: color === 'blue' && continuous,
    [gradientPurple]: color === 'purple' && continuous,
    [gradientRed]: color === 'red' && continuous,
    [gradientTeal]: color === 'teal' && continuous,
    [gradientCyan]: color === 'cyan' && continuous,
    [gradientTealOnly]: color === 'teal-only' && continuous,
    [alertContainer]: type === 'alert',
  });

  return (
    <div className={paletteContainerClassNames} key={index}>
      {children}
    </div>
  );
};

export default PalettesContainer;
