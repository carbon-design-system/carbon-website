import ComboBoxDemo from './ComboBox';
import DropdownDemo, { DropdownInlineDemo } from './Dropdown';
import MultiSelectDemo, {
  MultiSelectFilterableDemo,
  MultiSelectInlineDemo,
} from './MultiSelect';

/**
 * A table, keyed by component name and variant name, of React components that works as live demos.
 * The code snippet is generated as a conversion from a shallow React component tree to a JSX string.
 * Due to its "shallow" nature, using `<DemoComponent foo={fooValue}>`
 * for the React-component-tree-to-JSX converter just emits `<DemoComponent foo={fooValue}>`
 * (as the code snippet), and thus we run `DemoComponent({ foo: fooValue })` instead
 * to pass along to the converter to get the JSX of the React component tree of
 * what `DemoComponent` generates.
 * Those demo components has to be implemented as pure functions therefore.
 * @type {Object}
 */
export default {
  'combo-box': {
    'combo-box': ComboBoxDemo,
  },
  dropdown: {
    dropdown: DropdownDemo,
    'dropdown--inline': DropdownInlineDemo,
  },
  'multi-select': {
    'multi-select': MultiSelectDemo,
    'multi-select--filterable': MultiSelectFilterableDemo,
    'multi-select--inline': MultiSelectInlineDemo,
  },
};
