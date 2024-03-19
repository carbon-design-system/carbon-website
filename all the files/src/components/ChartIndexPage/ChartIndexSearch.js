import { Search } from '@carbon/react';
import PropTypes from 'prop-types';
import React from 'react';

function ChartIndexSearch({ value, onChange }) {
  function handleOnChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="component-index-search">
      <Search
        light
        id="component-index-search"
        labelText="Search chart index by name, keyword, or domain"
        placeHolderText="Chart name, keyword, domain"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

ChartIndexSearch.propTypes = {
  /**
   * Receive an update for the latest value and use it to update the passed in
   * `value`
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Control the value of the search using the `value` prop
   */
  value: PropTypes.string.isRequired,
};

export default ChartIndexSearch;
