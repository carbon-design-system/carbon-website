import React from 'react';
import PropTypes from 'prop-types';

const TableContainer = ({ children }) => (
  <div className="bx--table-container">{children}</div>
);

TableContainer.propTypes = {
  /**
   * child table node
   */
  children: PropTypes.node,
};

export default TableContainer;
