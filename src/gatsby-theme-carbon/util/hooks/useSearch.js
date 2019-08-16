import { useLayoutEffect } from 'react';
import 'docsearch.js/dist/cdn/docsearch.min.css';

const useAlgoliaSearch = () => {
  useLayoutEffect(() => {
    if (
      typeof window === `undefined` ||
      typeof window.docsearch === `undefined`
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
    } else {
      window.docsearch({
        apiKey: `296ea0c1d0e96b2b04900d0f4d1a6329`,
        indexName: `carbondesignsystem`,
        inputSelector: `#doc-search`,
        // set this to true if you need to debug css
        debug: false,
      });
    }
  });
};

export default useAlgoliaSearch;
