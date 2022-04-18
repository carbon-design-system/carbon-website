import React from 'react';
import { Search, Dropdown } from '@carbon/react';
import cx from 'classnames';
import useSticky from './useSticky';
import { filterRow, pictograms, dropdown } from './SvgLibrary.module.scss';

const FilterRow = ({
  onSearchChange,
  onDropdownChange,
  selectedCategory,
  categoryList,
  type = 'icon',
}) => {
  const [filterRowRef, isSticky] = useSticky();
  const placeHolderText =
    type === 'icon'
      ? 'Search by descriptors like “add”, or “check”'
      : 'Search by descriptors like “electronics”, or “weather”';
  return (
    <div
      data-stuck={isSticky || undefined}
      ref={filterRowRef}
      className={cx(filterRow, {
        [pictograms]: type !== 'icon',
      })}>
      <Search
        labelText={`filter ${type}s by searching for their name or category`}
        onChange={onSearchChange}
        placeHolderText={placeHolderText}
        size="lg"
      />
      <Dropdown
        className={dropdown}
        id="category-filter"
        size="lg"
        direction="bottom"
        selectedItem={selectedCategory}
        onChange={onDropdownChange}
        label={`Filter ${type}s by category`}
        items={[`All ${type}s`, ...categoryList]}
      />
    </div>
  );
};

export default FilterRow;
