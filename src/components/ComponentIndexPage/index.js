/* eslint-disable no-unused-expressions */
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

const filterLabels = [
  {
    title: 'Framework',
    options: ['React', 'Angular', 'Vue', 'Vanilla'],
  },
  {
    title: 'Design asset',
    options: ['Sketch', 'Azure', 'Adobe XD', 'Figma'],
  },
  {
    title: 'Availability',
    options: ['Open Source', 'IBM Internal'],
  },
  {
    title: 'Maintainer',
    options: ['Cloud Data & AI', 'Cloud PAL', 'Watson Health', 'Watson IoT'],
  },
];

function ComponentIndexPage() {
  const components = useComponentIndexData();
  const [activeSortOption, setActiveSortOption] = useState(initialSortOption);
  const [selected, setSelected] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  const searchClient = useMemo(() => new Fuse(components, searchOptions), [
    components,
  ]);

  const selectedOptions = {
    framework: ['React', 'Angular', 'Vue', 'Vanilla'].filter((value) =>
      selected.includes(value)
    ),
    designAsset: ['Sketch', 'Azure', 'Adobe XD', 'Figma'].filter((value) =>
      selected.includes(value)
    ),
    availability: ['Open Source', 'IBM Internal'].filter((value) =>
      selected.includes(value)
    ),
    maintainer: ['Cloud Data & AI', 'Cloud PAL', 'Watson Health', 'Watson IoT']
      .filter((value) => selected.includes(value))
      .map((value) => (value === 'Cloud Data & AI' ? 'CD&AI' : value)),
  };

  const filterFunction = ({
    framework,
    designAsset,
    availability,
    maintainer,
  }) => {
    // Display all components / filter groups on initial render.
    let frameworkIsSelected = true;
    let designAssetIsSelected = true;
    let availabilityIsSelected = true;
    let maintainerIsSelected = true;

    // Filter conditionals to only display components cotain selected filter option(s).
    if (
      selectedOptions.framework.length > 0 &&
      !selectedOptions.framework.includes(framework)
    ) {
      frameworkIsSelected = false;
    }
    if (
      selectedOptions.designAsset.length > 0 &&
      !selectedOptions.designAsset.includes(designAsset)
    ) {
      designAssetIsSelected = false;
    }
    if (
      selectedOptions.availability.length > 0 &&
      !selectedOptions.availability.includes(availability)
    ) {
      availabilityIsSelected = false;
    }
    if (
      selectedOptions.maintainer.length > 0 &&
      !selectedOptions.maintainer.includes(maintainer)
    ) {
      maintainerIsSelected = false;
    }

    return (
      frameworkIsSelected &&
      designAssetIsSelected &&
      availabilityIsSelected &&
      maintainerIsSelected
    );
  };

  const handleOnChange = (checkedOption, selectedFilter) => {
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

  if (searchResults.length > 0) {
    results = (
      <ComponentIndexList
        items={searchResults
          .slice()
          .sort(sortBy[activeSortOption])
          .filter(filterFunction)}
      />
    );
  } else {
    results = <ComponentIndexNotFound />;
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
        <fieldset className="component-index-filter__fieldset">
          {filterLabels.map(({ title, options, key }) => (
            <div key={key} className="component-index-filter__option">
              <legend className="component-index-filter__label">{title}</legend>
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
          ))}
        </fieldset>
      </Column>
    </Row>
  );
}

export default ComponentIndexPage;
