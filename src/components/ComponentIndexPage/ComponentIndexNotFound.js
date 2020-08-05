/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

function ComponentIndexNotFound() {
  return (
    <>
      <h2>No results found</h2>
      <p>
        It appears we don’t have a communtiy component that matches your search.
        Try different search terms.
      </p>
      <p>
        This community component index does not include the Carbon core
        components and you may find what you’re looking for in the core
        component list.
      </p>
    </>
  );
}

export default ComponentIndexNotFound;
