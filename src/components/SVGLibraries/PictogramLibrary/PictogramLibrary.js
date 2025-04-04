/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';

import { groupBy, debounce } from 'lodash-es';

import * as metaData from '@carbon/pictograms/metadata.json';
import useColumnCount from '../shared/useColumnCount';

import FilterRow from '../shared/FilterRow';
import { svgPage, svgLibrary } from '../shared/SvgLibrary.module.scss';

import PictogramCategory from './PictogramCategory';
import NoResult from '../shared/NoResult';

const { icons: pictogramMetaData, categories: pictogramCategoryMetadata } =
  metaData;

const IconLibrary = () => {
  const [pictogramComponents, setPictogramComponents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All pictograms');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  const debouncedSetSearchInputValue = debounce(setSearchInputValue, 200);
  const columnCount = useColumnCount({ assetType: 'pictograms' });

  useEffect(() => {
    const pictogramArray = pictogramMetaData.reduce(
      (accumulator, pictogram) => {
        if (pictogram.deprecated) {
          return accumulator;
        }

        const path = [...pictogram.namespace, pictogram.name].join('/');

        return [
          ...accumulator,
          {
            ...pictogram,
            Component: loadable(() =>
              import(`@carbon/pictograms-react/lib/${path}`)
            ),
          },
        ];
      },
      []
    );

    setCategoryList(pictogramCategoryMetadata.map(({ name }) => name).sort());
    setCategoriesLoaded(true);

    setPictogramComponents(pictogramArray);
  }, []);

  const getFilteredPictograms = () => {
    if (!searchInputValue) {
      return pictogramComponents;
    }
    return pictogramComponents.filter(
      // eslint-disable-next-line camelcase
      ({ friendlyName, category, aliases = [], name }) => {
        const searchValue = searchInputValue.toLowerCase();
        return (
          friendlyName.toLowerCase().includes(searchValue) ||
          aliases
            .filter(Boolean)
            .some((alias) =>
              alias.toString().toLowerCase().includes(searchValue)
            ) ||
          category.toLowerCase().includes(searchValue) ||
          name.toLowerCase().includes(searchValue)
        );
      }
    );
  };

  const filteredPictograms = getFilteredPictograms();

  const allCategories = Object.entries(
    groupBy(filteredPictograms, 'category')
  ).sort(([categoryA], [categoryB]) => categoryA > categoryB);

  const filteredCategories =
    selectedCategory === 'All pictograms'
      ? allCategories
      : allCategories.filter(([category]) => category === selectedCategory);

  const shouldShowNoResult = categoriesLoaded && filteredCategories.length < 1;

  return (
    <div className={svgPage}>
      <FilterRow
        type="pictogram"
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        onSearchChange={(e) =>
          debouncedSetSearchInputValue(e.currentTarget.value)
        }
        onDropdownChange={({ selectedItem }) =>
          setSelectedCategory(selectedItem)
        }
      />
      {shouldShowNoResult ? (
        <NoResult
          type="pictograms"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allIconResults={filteredPictograms.length}
          pageName="pictogram"
          pageUrl="https://github.com/carbon-design-system/carbon/raw/refs/heads/main/packages/pictograms/master/productive-pictogram-master.ai"
        />
      ) : (
        <div className={svgLibrary}>
          {filteredCategories.map(([category, pictograms]) => (
            <PictogramCategory
              columnCount={columnCount}
              key={category}
              category={category}
              pictograms={pictograms}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default IconLibrary;
