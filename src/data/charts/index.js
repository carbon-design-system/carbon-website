export * from './bar';
export * from './pie-donut';
export * from './line';

export const addHeightToOptions = (options) => ({
  ...options,
  height: '400px',
});
