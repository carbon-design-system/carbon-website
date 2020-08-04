import { Row, Column } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

function ComponentIndexSearch({ value, onChange }) {
  return (
    <Row>
      <Column lg={8}>
        <label htmlFor="seach-index">Search</label>
        <input
          id="search-index"
          type="text"
          value={value}
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}
        />
      </Column>
    </Row>
  );
}

ComponentIndexSearch.propTypes = {
  /**
   * Control the value of the search using the `value` prop
   */
  value: PropTypes.string.isRequired,

  /**
   * Receive an update for the latest value and use it to update the passed in
   * `value`
   */
  onChange: PropTypes.func.isRequired,
};

export default ComponentIndexSearch;
