/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { Search, Dropdown } from 'carbon-components-react';
import { pickBy, groupBy, debounce } from 'lodash';
import * as iconsReact from '@carbon/icons-react';

import iconMetaData from './iconMetaData';
import { iconPage, filterRow, iconLibrary } from './IconLibrary.module.scss';

import IconCategory from './IconCategory';
import NoResult from './NoResult';

const IconLibrary = () => {
  const [iconComponents, setIconComponents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All icons');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  const debouncedSetSearchInputValue = debounce(setSearchInputValue, 200);

  useEffect(() => {
    const iconComponentList = pickBy(
      iconsReact,
      (val, key) => key.slice(-2) === '32'
    );

    const iconArray = Object.keys(iconMetaData).map(icon => ({
      ...iconMetaData[icon],
      // If the icon is unprefixed and starts with a number, add an underscore
      Component:
        iconComponentList[isNaN(icon[0]) ? `${icon}32` : `_${icon}32`] ||
        iconComponentList[`WatsonHealth${icon}32`] ||
        iconComponentList[`Q${icon}32`],
    }));

    setCategoryList(
      Object.keys(groupBy(iconArray, 'categories[0].name')).sort()
    );
    setCategoriesLoaded(true);
    setIconComponents(iconArray);
  }, []);

  const getFilteredIcons = () => {
    if (!searchInputValue) {
      return iconComponents;
    }
    return iconComponents.filter(
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
          (categories &&
            categories[0] &&
            categories[0].subcategory.toLowerCase().includes(searchValue)) ||
          name.toLowerCase().includes(searchValue)
        );
      }
    );
  };

  const filteredIcons = getFilteredIcons();

  const categories = Object.entries(
    groupBy(filteredIcons, 'categories[0].name')
  );

  const filteredCategories =
    selectedCategory === 'All icons'
      ? categories
      : categories.filter(([category]) => category === selectedCategory);

  const shouldShowNoResult = categoriesLoaded && filteredCategories.length < 1;

  return (
    <div className={iconPage}>
      <div className={filterRow}>
        <Search
          small
          light
          labelText="filter icons by searching for their name or subcategory"
          onChange={e => debouncedSetSearchInputValue(e.currentTarget.value)}
          placeHolderText={`Search by descriptors like “add”, or “check”`}
        />
        <Dropdown
          id="category-filter"
          direction="bottom"
          light
          selectedItem={selectedCategory}
          onChange={({ selectedItem }) => setSelectedCategory(selectedItem)}
          label="Filter icons by category"
          items={['All icons', ...categoryList]}
        />
      </div>
      {shouldShowNoResult ? (
        <NoResult
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allIconResults={filteredIcons.length}
        />
      ) : (
        <div className={iconLibrary}>
          {filteredCategories.map(([category, icons]) => (
            <IconCategory key={category} category={category} icons={icons} />
          ))}
        </div>
      )}
    </div>
  );
};
export default IconLibrary;
