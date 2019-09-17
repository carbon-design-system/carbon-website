import React from 'react';
import { Dropdown, FormItem } from 'carbon-components-react';
import items from './dropdown-items';

const DropdownDemo = ({ id, light }) => (
  <>
    <FormItem>
      <Dropdown
        id={`${id}-0`}
        light={light}
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Dropdown menu options"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
        helperText="Optional helper text"
      />
    </FormItem>
    <FormItem>
      <Dropdown
        id={`${id}-1`}
        light={light}
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Dropdown menu options"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
        helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
      />
    </FormItem>
    <FormItem>
      <Dropdown
        id={`${id}-2`}
        disabled
        light={light}
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Dropdown menu options"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
        helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
      />
    </FormItem>
    <FormItem>
      <Dropdown
        id={`${id}-3`}
        light={light}
        invalid
        invalidText="This is not a validation message"
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Dropdown menu options"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
        helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
      />
    </FormItem>
  </>
);

export const DropdownInlineDemo = ({ id }) => (
  <>
    <FormItem>
      <Dropdown
        id={`${id}-0`}
        type="inline"
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Inline dropdown label"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
      />
    </FormItem>
    <FormItem>
      <Dropdown
        id={`${id}-1`}
        disabled
        type="inline"
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Inline dropdown label"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
      />
    </FormItem>
    <FormItem>
      <Dropdown
        id={`${id}-2`}
        type="inline"
        invalid
        invalidText="This is not a validation message"
        items={items}
        itemToString={item => (item ? item.text : '')}
        label="Inline dropdown label"
        ariaLabel="Dropdown"
        titleText="Dropdown label"
      />
    </FormItem>
  </>
);

export default DropdownDemo;
