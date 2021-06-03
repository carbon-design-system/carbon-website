import React from 'react';
import cx from 'classnames';
import {
  icon,
  iconGroup,
  iconWrapper,
  statusIndicatorTableWrapper,
  isDark,
  glyph,
} from './StatusIndicator.module.scss';

export const StatusIcon = ({ attention, theme, fileName, isGlyph }) => {
  const path = `/status-icons/${attention}/${theme}/${fileName}.svg`;
  const size = isGlyph ? '16px' : '20px';
  return (
    <img
      height={size}
      width={size}
      className={cx(icon, isGlyph && glyph)}
      alt={`${fileName} status icon`}
      src={path}
    />
  );
};

export const StatusIconWrapper = ({ children }) => (
  <div className={iconWrapper}>{children}</div>
);
export const StatusIndicatorTableWrapper = ({ children }) => (
  <div className={statusIndicatorTableWrapper}>{children}</div>
);

export const StatusIconGroup = ({ theme = 'light', children, attention }) => {
  const className = cx(iconGroup, {
    [isDark]: theme === 'dark',
  });
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { theme, attention })
      )}
    </div>
  );
};
