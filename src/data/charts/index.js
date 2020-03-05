import * as de from '@carbon/charts/demo/demo-data';

export * from '@carbon/charts/demo/demo-data';

console.log('de', de);
export const addHeightToOptions = options => ({
  ...options,
  height: '400px',
});
