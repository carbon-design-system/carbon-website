/* eslint-disable import/prefer-default-export */
import './src/styles/index.scss';

export const onClientEntry = () => {
  if (window.fathom) {
    window.addEventListener('load', () => {
      switch (window.navigator.language.slice(0, 2)) {
        case 'en':
          window.fathom('trackGoal', 'U8CTWM12', 0);
          break;
        case 'zh':
          window.fathom('trackGoal', 'U2CWMKXS', 0);
          break;
        case 'es':
          window.fathom('trackGoal', 'KWIV8NQH', 0);
          break;
        case 'ar':
          window.fathom('trackGoal', 'GM8KBYWH', 0);
          break;
        case 'pt':
          window.fathom('trackGoal', '2PYNY8FF', 0);
          break;
        default:
          window.fathom('trackGoal', 'XBZNHQHJ', 0);
      }
    });
  }
};
