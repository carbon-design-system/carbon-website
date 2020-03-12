/* eslint-disable import/prefer-default-export */
import './src/styles/index.scss';

export const onClientEntry = () => {
  if (window.fathom) {
    window.addEventListener('load', () => {
      switch (window.navigator.language.slice(0, 2)) {
        case 'en':
          window.fathom('trackGoal', 'VIWQLLAA', 0);
          break;
        case 'zh':
          window.fathom('trackGoal', 'GTB7NIQZ', 0);
          break;
        case 'es':
          window.fathom('trackGoal', '3FC1DPEL', 0);
          break;
        case 'ar':
          window.fathom('trackGoal', 'C8ODCSVW', 0);
          break;
        case 'pt':
          window.fathom('trackGoal', 'JW5BELDY', 0);
          break;
        case 'de':
          window.fathom('trackGoal', 'WRXNAWW6', 0);
          break;
        case 'fr':
          window.fathom('trackGoal', 'SXUCR6V6', 0);
          break;
        default:
          window.fathom('trackGoal', 'OQLWLPHN', 0);
      }
    });
  }
};
