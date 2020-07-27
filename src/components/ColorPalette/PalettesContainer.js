import React from 'react';
import cx from 'classnames';

const PalettesContainer = ({
  children,
  color,
  continuous,
  dark,
  index,
  type,
}) => {
  const paletteContainerClassNames = cx(`palettes-container`, {
    [`sequential`]: color,
    [`dark-mode`]: dark,
    [`gradient-blue`]: color === 'blue' && continuous,
    [`gradient-purple`]: color === 'purple' && continuous,
    [`gradient-red`]: color === 'red' && continuous,
    [`gradient-teal`]: color === 'teal' && continuous,
    [`gradient-cyan`]: color === 'cyan' && continuous,
    [`gradient-teal-only`]: color === 'teal-only' && continuous,
    [`alert-container`]: type === 'alert',
  });

  return (
    <div className={paletteContainerClassNames} key={index}>
      {children}
    </div>
  );
};

export default PalettesContainer;
