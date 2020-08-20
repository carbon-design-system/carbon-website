import { Search, Row, Column } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

function ComponentIndexSearch({ value, onChange }) {
  function handleOnChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="component-index-search">
      <Row>
        <Column sm={4} md={6} lg={9}>
          <Search
            light
            id="component-index-search"
            labelText="Search component index by name, keyword, or domain"
            placeHolderText="Component name, keyword, domain"
            value={value}
            onChange={handleOnChange}
          />
        </Column>
      </Row>
    </div>
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
