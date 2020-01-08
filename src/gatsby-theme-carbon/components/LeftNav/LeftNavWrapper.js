import React from 'react';
import cx from 'classnames';

import {
  leftNavWrapper,
  expanded as expandedStyles,
} from './LeftNavWrapper.module.scss';

const LeftNavWrapper = ({ expanded, ...rest }) => {
  const className = cx(leftNavWrapper, {
    [expandedStyles]: expanded,
  });
  return (
    <div
      style={{ transform: `translateX(${expanded ? '0px' : '-256px'})` }}
      className={className}
      {...rest}
    />
  );
};

export default LeftNavWrapper;
