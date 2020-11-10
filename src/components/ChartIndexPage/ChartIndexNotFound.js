/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Row, Column, Link } from 'carbon-components-react';
import React from 'react';

function ChartIndexNotFound() {
  return (
    <div className="component-index-not-found">
      <Row>
        <Column sm={4} md={6} lg={6}>
          <h2 className="component-index-not-found__title">No results found</h2>
          <p className="component-index-not-found__text">
            It appears we don’t have a chart that matches your search. Try
            different search terms.
          </p>
        </Column>
      </Row>
      <Row>
        <Column sm={4} md={6} lg={6}>
          <p className="component-index-not-found__text">
            If you have designs or code for a chart that isn't listed here,
            please
            <Link
              className="component-index-not-found__link"
              href="/community/contribute-a-chart"
              rel="noopener noreferrer">
              add it
            </Link>
            to the index.
          </p>
        </Column>
      </Row>
    </div>
  );
}

export default ChartIndexNotFound;
