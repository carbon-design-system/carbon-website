import React from 'react';
import { MultiSelect } from 'carbon-components-react';
import items from './dropdown-items';

MultiSelect.displayName = 'MultiSelect';

const MultiSelectDemo = ({ id, light }) => (
  <div style={{ width: 300 }}>
    <MultiSelect
      id={id}
      light={light}
      items={items}
      itemToString={item => (item ? item.text : '')}
      label="MultiSelect Label"
    />
  </div>
);

export const MultiSelectFilterableDemo = ({ id, light }) => (
  <div style={{ width: 300 }}>
    <MultiSelect.Filterable
      id={id}
      light={light}
      items={items}
      itemToString={item => (item ? item.text : '')}
      label="MultiSelect Label"
      placeholder="Filter"
    />
  </div>
);

export const MultiSelectInlineDemo = ({ id }) => (
  <div style={{ width: 300 }}>
    <MultiSelect
      id={id}
      type="inline"
      items={items}
      itemToString={item => (item ? item.text : '')}
      label="Inline MultiSelect Label"
      titleText="MultiSelect"
    />
  </div>
);

export default MultiSelectDemo;
