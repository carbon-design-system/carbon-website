import './styles.scss';

import { Checkbox } from '@carbon/icons-react';
import React from 'react';
import ComponentDemo from '../../../components/ComponentDemo';
import ComponentVariant from '../../../components/ComponentDemo/ComponentVariant';

const content = `
<Popover open>
  <div className="popover-trigger">
    <Checkbox />
  </div>
  <PopoverContent>
    <div className="popover-example-content">
      <p className="popover-title">Available storage</p>
      <p className="popover-details">
        This server has 150 GB of block storage remaining.
      </p>
    </div>
  </PopoverContent>
</Popover>
`;

const components = [
  {
    id: 'popover',
    label: 'Popover',
  },
];

const knobs = {
  Popover: ['align', 'caret', 'dropShadow', 'highContrast'],
};

const links = {
  React:
    'https://react.carbondesignsystem.com/?path=/story/components-popover--playground',
  'Web Components': 'https://web-components.carbondesignsystem.com/?path=/story/components-popover--playground'
};

function PopoverComponentDemo() {
  return (
    <ComponentDemo
      components={components}
      scope={{
        Checkbox,
      }}
    >
      <ComponentVariant id="popover" knobs={knobs} links={links}>
        {content}
      </ComponentVariant>
    </ComponentDemo>
  );
}

export default PopoverComponentDemo;
