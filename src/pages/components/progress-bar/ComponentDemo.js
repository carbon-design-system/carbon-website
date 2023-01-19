import React from 'react';
import ComponentDemo from '../../../components/ComponentDemo';
import ComponentVariant from '../../../components/ComponentDemo/ComponentVariant';

const components = [
  {
    id: 'determinate',
    label: 'Determinate',
  },
  {
    id: 'indeterminate',
    label: 'Indeterminate',
  },
];

const knobs = {
  ProgressBar: ['hideLabel', 'size', 'status', 'type'],
};

const links = {
  React:
    'https://react.carbondesignsystem.com/?path=/story/components-progressbar--playground',
};

function PopoverComponentDemo() {
  return (
    <ComponentDemo
      components={components}
    >
      <ComponentVariant id="determinate" knobs={knobs} links={links}>
        {`
<div style={{ width: '75%' }}>
  <ProgressBar
    label="Progress bar label"
    helperText="Optional helper text"
    value={75}
  />
</div>
        `}
      </ComponentVariant>
      <ComponentVariant id="indeterminate" knobs={knobs} links={links}>
        {`
<div style={{ width: '75%' }}>
  <ProgressBar
    label="Progress bar label"
    helperText="Optional helper text"
  />
</div>
        `}
      </ComponentVariant>
    </ComponentDemo>
  );
}

export default PopoverComponentDemo;
