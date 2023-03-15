import React from 'react';
import ComponentDemo from '../../../components/ComponentDemo';
import ComponentVariant from '../../../components/ComponentDemo/ComponentVariant';

const components = [
  {
    id: 'contained-list',
    label: 'ContainedList',
  },
];


const knobs = {
  ContainedList: ['kind', 'size', 'isInset'],
};

const links = {
  React:
    'https://react.carbondesignsystem.com/?path=/story/components-containedlist--default',
};

function ContainedListComponentDemo() {
  return (
    <ComponentDemo components={components}>
      <ComponentVariant id="contained-list" knobs={knobs} links={links}>
        {`
<div style={{ width: '75%' }}>
  <ContainedList label="List title" kind="on-page">
    <ContainedListItem>List item</ContainedListItem>
    <ContainedListItem>List item</ContainedListItem>
    <ContainedListItem>List item</ContainedListItem>
    <ContainedListItem>List item</ContainedListItem>
  </ContainedList>
</div>
        `}
      </ComponentVariant>
    </ComponentDemo>
  );
}

export default ContainedListComponentDemo;
