/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Fuse from 'fuse.js';
import React, { useEffect, useState, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ComponentIndexList from './ComponentIndexList';
import ComponentIndexNotFound from './ComponentIndexNotFound';
import ComponentIndexSearch from './ComponentIndexSearch';
import ComponentIndexSort from './ComponentIndexSort';
import { useDebounce } from '../../hooks/useDebounce';

const ALL_COMPONENTS_QUERY = graphql`
  {
    allComponentIndexEntry {
      edges {
        node {
          name
          description
          maintainer
          date_added
        }
      }
    }
  }
`;

const searchOptions = {
  includeScore: true,
  threshold: 0.4,
  keys: ['node.name', 'node.description', 'node.maintainer'],
};

const sortOptions = ['Sort by A to Z', 'Sort by Maintainer', 'Sort by Newest'];
const initialSortOption = 'Sort by A to Z';
const sortBy = {
  'Sort by A to Z': sortByName,
  'Sort by Maintainer': sortByMaintainer,
  'Sort by Newest': sortByNewest,
};

function sortByName(a, b) {
  return a.node.name.localeCompare(b.node.name);
}
function sortByMaintainer(a, b) {
  if (a.node.maintainer === b.node.maintainer) {
    return sortByName(a, b);
  }
  return a.node.maintainer.localeCompare(b.node.maintainer);
}
function sortByNewest(a, b) {
  const dateA = new Date(a.node.date_added);
  const dateB = new Date(b.node.date_added);
  return dateA - dateB;
}

function ComponentIndexPage() {
  const { allComponentIndexEntry: components } = useStaticQuery(
    ALL_COMPONENTS_QUERY
  );
  const [items, setItems] = useState(components.edges);
  const [activeSortOption, setActiveSortOption] = useState(initialSortOption);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  const searchClient = useMemo(() => {
    return new Fuse(components.edges, searchOptions);
  }, [components]);

  useEffect(() => {
    setItems((currentItems) => {
      if (debouncedSearchValue === '') {
        if (currentItems !== components) {
          return components.edges;
        }
        return currentItems;
      }

      const searchResults = searchClient
        .search(debouncedSearchValue)
        .map((result) => result.item);

      return searchResults;
    });
  }, [components, debouncedSearchValue, searchClient]);

  return (
    <>
      <ComponentIndexSearch value={searchValue} onChange={setSearchValue} />
      <ComponentIndexSort
        initialSortOption={initialSortOption}
        options={sortOptions}
        onChange={setActiveSortOption}
      />
      {items.length > 0 ? (
        <ComponentIndexList
          items={items
            .slice()
            .sort(sortBy[activeSortOption])
            .map(({ node }) => {
              const { name, description, maintainer } = node;
              return {
                name,
                description,
                maintainer,
              };
            })}
        />
      ) : (
        <ComponentIndexNotFound />
      )}
    </>
  );
}

export default ComponentIndexPage;
