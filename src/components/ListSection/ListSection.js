import React from 'react';
import cx from 'classnames';
import { Row } from 'gatsby-theme-carbon';
import { listSection } from './ListSection.module.scss';

const ListSection = ({ className, ...props }) => (
  <Row className={cx(className, listSection)} {...props} />
);

export default ListSection;
