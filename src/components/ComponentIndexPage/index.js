/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Fuse from 'fuse.js';
import React, { useState, useMemo } from 'react';
import { Column, Checkbox, Row } from 'carbon-components-react';
import ComponentIndexList from './ComponentIndexList';
import ComponentIndexNotFound from './ComponentIndexNotFound';
import ComponentIndexSearch from './ComponentIndexSearch';
import ComponentIndexSort from './ComponentIndexSort';
import { useDebounce } from '../../hooks/useDebounce';
import { useComponentIndexData } from './useComponentIndexData';

const searchOptions = {
  includeScore: true,
  threshold: 0.4,
  keys: [
    {
      name: 'friendly_name',
      weight: 2,
    },
    {
      name: 'name',
      weight: 2,
    },
    'availability',
    'description',
    'maintainer.name',
    'maintainer.friendly_name',
    'aliases',
    'framework',
    'design_asset',
  ],
};

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function sortByMaintainer(a, b) {
  if (a.maintainer === b.maintainer) {
    return sortByName(a, b);
  }
  return a.maintainer.localeCompare(b.maintainer);
}

function sortByNewest(a, b) {
  const dateA = new Date(a.date_added);
  const dateB = new Date(b.date_added);
  return dateA - dateB;
}

const sortOptions = ['A to Z', 'Maintainer', 'Newest'];
const initialSortOption = 'A to Z';
const sortBy = {
  'A to Z': sortByName,
  'Maintainer': sortByMaintainer,
  'Newest': sortByNewest,
};

const filterLabels = [
  {
    title: 'Maintainer',
    options: [
      'Cloud & Cognitive',
      'Cloud PAL',
      'Watson Health',
      'AI Apps',
      'IBM.com',
    ],
  },
  {
    title: 'Framework',
    options: ['React', 'Angular', 'Vue', 'Vanilla'],
  },
  {
    title: 'Design asset',
    options: ['Sketch', 'Axure', 'Adobe XD', 'Figma'],
  },
  {
    title: 'Availability',
    options: ['Open Source', 'IBM Internal'],
  },
];

function filterItems(items, filters) {
  return items.filter((item) => {
    // If there are no filters, return true.
    if (filters.length === 0) {
      return true;
    }
    const { framework, designAsset, availability, maintainer } = item;
    const fields = [framework, designAsset, availability, maintainer];
    return filters.every((filter) => fields.includes(filter));
  });
}

function ComponentIndexPage() {
  const components = useComponentIndexData();
  const [activeSortOption, setActiveSortOption] = useState(initialSortOption);
  const [selected, setSelected] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  const searchClient = useMemo(() => new Fuse(components, searchOptions), [
    components,
  ]);

  const handleOnChange = (_checkedOption, selectedFilter) => {
    // Remove unchecked filter option(s) from setSelected state.
    if (selected.includes(selectedFilter)) {
      setSelected(
        selected.filter((checkedOption) => checkedOption !== selectedFilter)
      );

      // Add checked filter option(s) to setSeleted state.
    } else {
      setSelected([...selected, selectedFilter]);
    }
  };

  let searchResults = components;
  if (debouncedSearchValue !== '') {
    searchResults = searchClient
      .search(debouncedSearchValue)
      .map((result) => result.item);
  }

  let results;
  const indexItems = filterItems(searchResults.slice(), selected).sort(
    sortBy[activeSortOption]
  );

  if (searchResults.length === 0 || indexItems.length === 0) {
    results = <ComponentIndexNotFound />;
  } else {
    results = <ComponentIndexList items={indexItems} />;
  }

  return (
    <Row>
      <Column
        sm={4}
        md={6}
        lg={9}
        className="component-index-container bx--no-gutter">
        <ComponentIndexSearch value={searchValue} onChange={setSearchValue} />
        <ComponentIndexSort
          initialSortOption={initialSortOption}
          options={sortOptions}
          onChange={setActiveSortOption}
        />
        {results}
      </Column>
      <Column sm={0} md={2} lg={3} className="component-index-filter-container">
        <header className="component-index-filter__header">Filters</header>
        {filterLabels.map(({ title, options, key }) => (
          <fieldset className="component-index-filter__fieldset">
            <legend className="component-index-filter__label">{title}</legend>
            <div key={key} className="component-index-filter__option">
              {options.map((selectedFilter) => (
                <Checkbox
                  labelText={selectedFilter}
                  id={selectedFilter}
                  checked={selected.includes(selectedFilter)}
                  onChange={(checkedOption) =>
                    handleOnChange(checkedOption, selectedFilter)
                  }
                />
              ))}
            </div>
          </fieldset>
        ))}
      </Column>
    </Row>
  );
}

export default ComponentIndexPage;
