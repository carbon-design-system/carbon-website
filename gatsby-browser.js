/* eslint-disable import/prefer-default-export */
import './src/styles/index.scss';

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
  console.log('sw updated');
};
