/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';

import { groupBy, debounce } from 'lodash-es';
import * as pictogramsReact from '@carbon/pictograms-react';

import FilterRow from '../shared/FilterRow';
import pictogramMetaData from './pictogramMetaData';
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
    const iconArray = Object.keys(pictogramMetaData).map(icon => ({
      ...pictogramMetaData[icon],
      // If the icon is unprefixed and starts with a number, add an underscore
      Component: pictogramsReact[icon],
    }));
    setCategoryList(
      Object.keys(groupBy(iconArray, 'categories[0].name')).sort()
    );
    setCategoriesLoaded(true);
    setPictogramComponents(iconArray);
  }, []);

  const getFilteredPictorams = () => {
    if (!searchInputValue) {
      return pictogramComponents;
    }
    return pictogramComponents.filter(
      // eslint-disable-next-line camelcase
      ({ friendly_name, categories, aliases = [], name }) => {
        const searchValue = searchInputValue.toLowerCase();
        return (
          friendly_name.toLowerCase().includes(searchValue) ||
          aliases.some(alias =>
            alias
              .toString()
              .toLowerCase()
              .includes(searchValue)
          ) ||
          (categories &&
            categories[0] &&
            categories[0].name.toLowerCase().includes(searchValue)) ||
          name.toLowerCase().includes(searchValue)
        );
      }
    );
  };

  const filteredPictograms = getFilteredPictorams();

  const allCategories = Object.entries(
    groupBy(filteredPictograms, 'categories[0].name')
  );

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
        onSearchChange={e =>
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
          pageName={'pictogram'}
          pageUrl={
            'https://github.com/carbon-design-system/carbon/blob/master/packages/pictograms/master/pictogram-master.ai'
          }
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
