import React from 'react';
import { ComboBox } from 'carbon-components-react';
import items from './dropdown-items';

const ComboBoxDemo = ({ id, light }) => (
  <div style={{ width: 300 }}>
    <ComboBox
      id={id}
      light={light}
      items={items}
      itemToString={item => (item ? item.text : '')}
      placeholder="Filter..."
      onChange={() => {}}
    />
  </div>
);

export default ComboBoxDemo;
