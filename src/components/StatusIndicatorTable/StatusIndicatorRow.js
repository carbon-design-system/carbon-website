import { StructuredListCell, StructuredListRow, Tag } from '@carbon/react';
import {
  cell,
  descriptionCell,
  glyph,
  icon,
  iconGroup,
  iconWrapper,
  isDark,
  statusIndicatorRow,
} from './StatusIndicator.module.scss';

import React from 'react';
import cx from 'classnames';

export const StatusIcon = ({ attention, theme, fileName, isGlyph }) => {
  const path = `/status-icons/${attention}/${theme}/${fileName}.svg`;
  const size = isGlyph ? '16' : '20';
  return (
    <object
      height={size}
      width={size}
      className={cx(icon, isGlyph && glyph)}
      aria-label={`${fileName} status icon`}
      type="image/svg+xml"
      data={path}
    />
  );
};

export const StatusIconWrapper = ({ children }) => (
  <div className={iconWrapper}>{children}</div>
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

const StatusIndicatorRow = ({
  attention,
  fileNames,
  statusname,
  token,
  secondarytoken,
  description,
  usage,
}) => {
  const isGlyph = attention === 'glyph';
  return (
    <StructuredListRow className={statusIndicatorRow}>
      <StructuredListCell className={cell}>
        <StatusIconWrapper>
          <StatusIconGroup attention={attention}>
            {fileNames.map((fileName) => (
              <StatusIcon
                isGlyph={isGlyph}
                key={`${fileName}`}
                fileName={fileName}
              />
            ))}
          </StatusIconGroup>
          <StatusIconGroup attention={attention} theme="dark">
            {fileNames.map((fileName) => (
              <StatusIcon
                isGlyph={isGlyph}
                key={`${fileName}-dark`}
                fileName={fileName}
              />
            ))}
          </StatusIconGroup>
        </StatusIconWrapper>
      </StructuredListCell>
      <StructuredListCell className={cell}>{statusname}</StructuredListCell>
      <StructuredListCell className={cell}>
        <Tag size="sm">{token}</Tag>
        {secondarytoken && <Tag size="sm">{secondarytoken}</Tag>}
      </StructuredListCell>
      <StructuredListCell className={cx(cell, descriptionCell)}>
        {description}
        <br />
        {usage ? <em>Used for: {usage}</em> : null}
      </StructuredListCell>
    </StructuredListRow>
  );
};

export default StatusIndicatorRow;
