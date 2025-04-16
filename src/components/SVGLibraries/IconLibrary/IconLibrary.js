/* eslint-disable no-restricted-globals */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { groupBy, debounce } from 'lodash-es';
import loadable from '@loadable/component';

import * as metaData from '@carbon/icons/metadata.json';
import useColumnCount from '../shared/useColumnCount';

import { svgPage, svgLibrary } from '../shared/SvgLibrary.module.scss';

import FilterRow from '../shared/FilterRow';
import IconCategory from './IconCategory';
import NoResult from '../shared/NoResult';

const { icons: iconMetaData, categories: iconCategoryMetadata } = metaData;

const IconLibrary = () => {
  const [iconComponents, setIconComponents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All icons');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const columnCount = useColumnCount({ assetType: 'icons' });

  const debouncedSetSearchInputValue = debounce(setSearchInputValue, 200);

  useEffect(() => {
    const iconArray = iconMetaData.reduce((accumulator, icon) => {
      if (icon.deprecated) {
        return accumulator;
      }

      const path = icon.moduleInfo.filepath;

      if (icon.sizes.length === 1 && icon.sizes[0] === 'glyph') {
        return [
          ...accumulator,
          {
            ...icon,
            Component: loadable(() =>
              import(`@carbon/icons-react/lib/${path}`)
            ),
          },
        ];
      }
      return [
        ...accumulator,
        {
          ...icon,
          Component: loadable(() => import(`@carbon/icons-react/lib/${path}`)),
        },
      ];
    }, []);

    setCategoryList(
      iconCategoryMetadata
        .flatMap(({ subcategories }) =>
          subcategories.flatMap(({ name }) => name)
        )
        .sort()
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
      ({ friendlyName, category, subcategory, aliases = [], name }) => {
        const searchValue = searchInputValue.toLowerCase();
        return (
          friendlyName.toLowerCase().includes(searchValue) ||
          aliases.some((alias) =>
            alias.toString().toLowerCase().includes(searchValue)
          ) ||
          subcategory.toLowerCase().includes(searchValue) ||
          category.toLowerCase().includes(searchValue) ||
          name.toLowerCase().includes(searchValue)
        );
      }
    );
  };

  const filteredIcons = getFilteredIcons();

  const allCategories = Object.entries(
    groupBy(filteredIcons, 'subcategory')
  ).sort();

  const filteredCategories =
    selectedCategory === 'All icons'
      ? allCategories
      : allCategories.filter(([category]) => category === selectedCategory);

  const shouldShowNoResult = categoriesLoaded && filteredCategories.length < 1;

  return (
    <div className={svgPage}>
      <FilterRow
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
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allIconResults={filteredIcons.length}
          pageName="icon"
          pageUrl="https://github.com/carbon-design-system/carbon/blob/main/packages/icons/master/ui-icon-master.ai"
        />
      ) : (
        <div className={svgLibrary}>
          {filteredCategories.map(([category, icons]) => (
            <IconCategory
              columnCount={columnCount}
              key={category}
              category={category}
              icons={icons}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default IconLibrary;
