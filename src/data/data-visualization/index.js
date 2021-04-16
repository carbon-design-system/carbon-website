import { storybookDemoGroups } from '@carbon/charts/demo/data';

export const simpleChartDemoGroups = storybookDemoGroups.filter(
  (demoGroup) => demoGroup.type === 'simple-chart'
);

export const complexChartDemoGroups = storybookDemoGroups.filter(
  (demoGroup) => demoGroup.type === 'complex-chart'
);

export const getDemoGroupByTitle = (title) =>
  storybookDemoGroups.find(
    (demoGroup) => demoGroup.title.toLowerCase() === title.toLowerCase()
  );
