import React from 'react';
import cx from 'classnames';
import {
  icon,
  iconGroup,
  iconWrapper,
  statusIndicatorTableWrapper,
  isDark,
  isGlyph,
} from './StatusIndicator.module.scss';

export const StatusIcon = ({ attention, theme, fileName }) => {
  const path = `/status-icons/${attention}/${theme}/${fileName}.svg`;
  return (
    <img
      height="20px"
      width="20px"
      className={icon}
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

export const StatusIconGroup = ({
  theme = 'light',
  glyph = false,
  children,
  attention,
}) => {
  const className = cx(iconGroup, {
    [isDark]: theme === 'dark',
    [isGlyph]: glyph,
  });
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { theme, attention })
      )}
    </div>
  );
};
