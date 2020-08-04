/**
 * Copyright IBM Corp. 2018, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Fuse from 'fuse.js';
import React, { useEffect, useState, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ComponentIndexSearch from './ComponentIndexSearch';
import ComponentIndexList from './ComponentIndexList';
import { useDebounce } from '../../hooks/useDebounce';

const ALL_COMPONENTS_QUERY = graphql`
  {
    allComponentIndexEntry {
      edges {
        node {
          name
          description
          maintainer
        }
      }
    }
  }
`;

const options = {
  includeScore: true,
  threshold: 0.4,
  keys: ['node.name', 'node.description', 'node.maintainer'],
};

function ComponentIndexPage() {
  const { allComponentIndexEntry: components } = useStaticQuery(
    ALL_COMPONENTS_QUERY
  );
  const [items, setItems] = useState(components.edges);
  const [searchValue, setSearchValue] = useState('');
  const searchClient = useMemo(() => {
    return new Fuse(components.edges, options);
  }, [components]);
  const [debouncedSearchValue] = useDebounce(searchValue, 300);

  useEffect(() => {
    if (debouncedSearchValue === '' && items !== components) {
      setItems(components.edges);
      return;
    }

    const searchResults = searchClient
      .search(debouncedSearchValue)
      .map((result) => result.item);

    setItems(searchResults);
  }, [debouncedSearchValue]);

  return (
    <>
      <ComponentIndexSearch value={searchValue} onChange={setSearchValue} />
      {items.length > 0 ? (
        <ComponentIndexList
          items={items.map(({ node }) => {
            const { name, description, maintainer } = node;
            return {
              name,
              description,
              maintainer,
            };
          })}
        />
      ) : (
        <div>No results available</div>
      )}
    </>
  );
}

export default ComponentIndexPage;
