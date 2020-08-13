/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Fuse from 'fuse.js';
import React, { useEffect, useState, useMemo } from 'react';
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

let count = 0;
function ComponentIndexPage() {
  const components = useComponentIndexData();
  const [activeSortOption, setActiveSortOption] = useState(initialSortOption);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  const searchClient = useMemo(() => new Fuse(components, searchOptions), [
    components,
  ]);

  let searchResults = components;
  if (debouncedSearchValue !== '') {
    searchResults = searchClient
      .search(debouncedSearchValue)
      .map((result) => result.item);
  }

  let results = undefined;
  if (searchResults.length > 0) {
    results = (
      <ComponentIndexList
        items={searchResults.slice().sort(sortBy[activeSortOption])}
      />
    );
  } else {
    results = <ComponentIndexNotFound />;
  }

  return (
    <>
      <ComponentIndexSearch value={searchValue} onChange={setSearchValue} />
      <ComponentIndexSort
        initialSortOption={initialSortOption}
        options={sortOptions}
        onChange={setActiveSortOption}
      />
      {results}
    </>
  );
}

export default ComponentIndexPage;
