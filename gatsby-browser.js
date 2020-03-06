/* eslint-disable import/prefer-default-export */
import './src/styles/index.scss';

export const onInitialClientRender = () => {
  const trackLanguage = code => {
    fathom('trackGoal', code, 0);
  };

  switch (window.navigator.language.slice(0, 2)) {
    case 'en':
      trackLanguage('U8CTWM12');
      break;
    case 'zh':
      trackLanguage('U2CWMKXS');
      break;
    case 'es':
      trackLanguage('KWIV8NQH');
      break;
    case 'ar':
      trackLanguage('GM8KBYWH');
      break;
    case 'pt':
      trackLanguage('2PYNY8FF');
      break;
    default:
      trackLanguage('XBZNHQHJ');
  }
};
