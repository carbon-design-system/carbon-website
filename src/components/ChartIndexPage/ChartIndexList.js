/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import ChartIndexListItem from './ChartIndexListItem';

function ChartIndexList({ items }) {
  return (
    <section aria-label="Chart index">
      {items.map(
        ({
          codeUrl,
          description,
          designAsset,
          framework,
          image,
          maintainer,
          name,
          chartType,
          complexity,
          websiteUrl,
        }) => {
          const key = `${name}:${maintainer}`;
          return (
            <ChartIndexListItem
              key={key}
              codeUrl={codeUrl}
              description={description}
              designAsset={designAsset}
              framework={framework}
              image={image}
              maintainer={maintainer}
              name={name}
              chartType={chartType}
              complexity={complexity}
              websiteUrl={websiteUrl}
            />
          );
        }
      )}
    </section>
  );
}

ChartIndexList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      maintainer: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default ChartIndexList;
