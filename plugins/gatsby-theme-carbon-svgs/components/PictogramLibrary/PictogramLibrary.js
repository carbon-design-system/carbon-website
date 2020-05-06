/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';

import { groupBy, debounce } from 'lodash-es';

import {
  icons as pictogramMetaData,
  categories as pictogramCatagoryMetadata,
} from '@carbon/pictograms/metadata.json';

import FilterRow from '../shared/FilterRow';
import { svgPage, svgLibrary } from '../shared/SvgLibrary.module.scss';

import PictogramCategory from './PictogramCategory';
import NoResult from '../shared/NoResult';

const IconLibrary = () => {
  const [pictogramComponents, setPictogramComponents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All pictograms');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  const debouncedSetSearchInputValue = debounce(setSearchInputValue, 200);

  useEffect(() => {
    const pictogramArray = pictogramMetaData.reduce(
      (accumulator, pictogram) => {
        if (pictogram.deprecated) return accumulator;

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

    setCategoryList(pictogramCatagoryMetadata.map(({ name }) => name).sort());
    setCategoriesLoaded(true);

    setPictogramComponents(pictogramArray);
  }, []);

  const getFilteredPictorams = () => {
    if (!searchInputValue) {
      return pictogramComponents;
    }
    return pictogramComponents.filter(
      // eslint-disable-next-line camelcase
      ({ friendlyName, category, aliases = [], name }) => {
        const searchValue = searchInputValue.toLowerCase();
        return (
          friendlyName.toLowerCase().includes(searchValue) ||
          aliases.some((alias) =>
            alias.toString().toLowerCase().includes(searchValue)
          ) ||
          category.toLowerCase().includes(searchValue) ||
          name.toLowerCase().includes(searchValue)
        );
      }
    );
  };

  const filteredPictograms = getFilteredPictorams();

  const allCategories = Object.entries(
    groupBy(filteredPictograms, 'category')
  ).sort(([catagoryA], [catagoryB]) => catagoryA > catagoryB);

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
          pageUrl="https://github.com/carbon-design-system/carbon/blob/master/packages/pictograms/master/pictogram-master.ai"
        />
      ) : (
        <div className={svgLibrary}>
          {filteredCategories.map(([category, pictograms]) => (
            <PictogramCategory
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
