/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Fuse from 'fuse.js';
import React, { useState, useMemo } from 'react';
import { Column, Checkbox, Row } from '@carbon/react';
import ChartIndexList from './ChartIndexList';
import ChartIndexNotFound from './ChartIndexNotFound';
import ChartIndexSearch from './ChartIndexSearch';
import ChartIndexSort from './ChartIndexSort';
import { useDebounce } from '../../hooks/useDebounce';
import { useChartIndexData } from './useChartIndexData';

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
    'chartType',
    'complexity',
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

const sortOptions = ['Sort by A to Z', 'Sort by Maintainer', 'Sort by Newest'];
const initialSortOption = 'Sort by A to Z';
const sortBy = {
  'Sort by A to Z': sortByName,
  'Sort by Maintainer': sortByMaintainer,
  'Sort by Newest': sortByNewest,
};

const filterLabels = [
  {
    title: 'Maintainer',
    options: ['Carbon Charts', 'AI Apps'],
  },
  {
    title: 'Chart type',
    options: [
      'Comparisons',
      'Trends',
      'Part-to-whole',
      'Correlations',
      'Connections',
      'Geospatial',
      'Other',
    ],
  },
  {
    title: 'Complexity',
    options: ['Basic', 'Advanced'],
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
    const { chartType, availability, maintainer, complexity } = item;
    const fields = [chartType, availability, maintainer, complexity];
    return filters.every((filter) => fields.includes(filter));
  });
}

function ChartIndexPage() {
  const charts = useChartIndexData();
  const [activeSortOption, setActiveSortOption] = useState(initialSortOption);
  const [selected, setSelected] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  const searchClient = useMemo(() => new Fuse(charts, searchOptions), [charts]);

  const handleOnChange = (_checkedOption, selectedFilter) => {
    // Remove unchecked filter option(s) from setSelected state.
    if (selected.includes(selectedFilter)) {
      setSelected(
        selected.filter((checkedOption) => checkedOption !== selectedFilter)
      );

      // Add checked filter option(s) to setSelected state.
    } else {
      setSelected([...selected, selectedFilter]);
    }
  };

  let searchResults = charts;
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
    results = <ChartIndexNotFound />;
  } else {
    results = <ChartIndexList items={indexItems} />;
  }

  return (
    <Row>
      <Column
        sm={4}
        md={6}
        lg={9}
        className="component-index-container cds--no-gutter">
        <ChartIndexSearch value={searchValue} onChange={setSearchValue} />
        <ChartIndexSort
          initialSortOption={initialSortOption}
          options={sortOptions}
          onChange={setActiveSortOption}
        />
        {results}
      </Column>
      <Column sm={0} md={2} lg={3} className="component-index-filter-container">
        <header className="component-index-filter__header">Filters</header>
        <fieldset className="component-index-filter__fieldset">
          {filterLabels.map(({ title, options, key }) => (
            <div key={key} className="component-index-filter__option">
              <legend className="component-index-filter__label">{title}</legend>
              {options.map((selectedFilter, i) => (
                <Checkbox
                  key={`${selectedFilter}-${i}`}
                  labelText={selectedFilter}
                  id={selectedFilter}
                  checked={selected.includes(selectedFilter)}
                  onChange={(checkedOption) =>
                    handleOnChange(checkedOption, selectedFilter)
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

export default ChartIndexPage;
