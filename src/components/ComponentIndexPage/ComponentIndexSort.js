/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Dropdown } from '@carbon/react';
import PropTypes from 'prop-types';
import React from 'react';

function ComponentIndexSort({ initialSortOption, options, onChange }) {
  return (
    <div className="component-index-sort-container">
      <div className="component-index-sort">
        <Dropdown
          id="component-index-sort"
          initialSelectedItem={initialSortOption}
          items={options}
          light
          onChange={({ selectedItem }) => {
            onChange(selectedItem);
          }}
          type="inline"
          titleText="Sort by:"
        />
      </div>
    </div>
  );
}

ComponentIndexSort.propTypes = {
  /**
   * Receive an update for the latest value and use it to update the passed in
   * `value`
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Provide the available sort options to be selected
   */
  options: PropTypes.arrayOf(PropTypes.string),
};

export default ComponentIndexSort;
