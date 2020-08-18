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
    'description',
    'maintainer.name',
    'maintainer.friendly_name',
    'aliases',
    'framework',
    'design_asset',
  ],
};

const sortOptions = ['Sort by A to Z', 'Sort by Maintainer', 'Sort by Newest'];
const initialSortOption = 'Sort by A to Z';
const sortBy = {
  'Sort by A to Z': sortByName,
  'Sort by Maintainer': sortByMaintainer,
  'Sort by Newest': sortByNewest,
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

const filterOptions = {
  Framework: ['React', 'Angular', 'Vue', 'Vanilla'],
  'Design asset': ['Sketch', 'Azure', 'Adobe XD', 'Figma'],
  Availability: ['Open Source', 'IBM Internal'],
  Maintainer: ['Cloud Data & AI', 'Cloud PAL', 'Watson Health', 'Watson IoT'],
};

function ComponentIndexPage() {
  const components = useComponentIndexData();
  const [activeSortOption, setActiveSortOption] = useState(initialSortOption);
  const [selected, setSelected] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  const searchClient = useMemo(() => new Fuse(components, searchOptions), [
    components,
  ]);

  const handleOnChange = (filterOption, selectedFilter) => {
    if (selected.includes(selectedFilter)) {
      setSelected(
        selected.filter((filterOption) => filterOption !== selectedFilter)
      );
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

  if (searchResults.length > 0) {
    results = (
      <ComponentIndexList
        items={searchResults
          .slice()
          .sort(sortBy[activeSortOption])
          .filter(({ description, framework, maintainer, designAsset }) =>
            selected.length === 0
              ? searchResults
              : selected.includes(maintainer) ||
                selected.includes(framework) ||
                selected.includes(designAsset) ||
                selected.includes(description)
          )}
      />
    );
  } else {
    results = <ComponentIndexNotFound />;
  }

  return (
    <Row>
      <Column sm={4} md={8} lg={9} className="component-index-container">
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
        <fieldset className="bx--fieldset">
          {Object.entries(filterOptions).map((key) => (
            <div className="component-index-filter__option">
              <legend className="bx--label">{key[0]}</legend>
              {key[1].map((selectedFilter) => (
                <Checkbox
                  labelText={selectedFilter}
                  id={selectedFilter}
                  checked={selected.includes(selectedFilter)}
                  onChange={(filterOption) =>
                    handleOnChange(filterOption, selectedFilter)
                  }
                />
              ))}
            </div>
          ))}
        </fieldset>
      </Column>
    </Row>
  );
}

export default ComponentIndexPage;
