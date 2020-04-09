import * as de from '@carbon/charts/demo/data';

export * from '@carbon/charts/demo/data';

console.log('de', de);
export const addHeightToOptions = options => ({
  ...options,
  height: '400px',
});
