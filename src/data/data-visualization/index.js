import { demoGroups as dG } from '@carbon/charts/demo/data';

// Merge all demoGroups with matching names
const demoGroups = [];
dG.forEach((demoGroup) => {
  const demoGroupTitle = demoGroup.title;
  const demoGroupExistingIndex = demoGroups.findIndex(
    (dg) => dg.title === demoGroupTitle
  );

  if (demoGroupExistingIndex === -1) {
    demoGroups.push(demoGroup);
  } else {
    const existingDemos = demoGroups[demoGroupExistingIndex].demos;
    demoGroups[demoGroupExistingIndex].demos = existingDemos.concat(
      demoGroup.demos
    );
  }
});

export default demoGroups;
