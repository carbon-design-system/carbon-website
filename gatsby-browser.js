/* eslint-disable import/prefer-default-export */
import './src/styles/index.scss';

export const onClientEntry = () => {
  const body = document.querySelector('body');
  window.addEventListener('load', () => {
    body.classList.remove('body--preload');
  });
};
