import { useMemo, useRef } from 'react';
import { getParameters } from 'codesandbox/lib/api/define';

const getIndex = ({ code = '' }) => {
  const uniqueComponents = Array.from(
    new Set(code.match(/<[A-Z]\w+/g))
  ).map(component => component.slice(1));

  return `
      import React from 'react';
      import { render } from 'react-dom';
      import 'carbon-components/css/carbon-components.min.css';
      import { ${uniqueComponents.join(', ')} } from 'carbon-components-react';
    
      const App = () => (
        ${code}
      );

      render(<App />, document.getElementById('root'));
    `;
};

const useCodesandbox = code => {
  const { current: originalCode } = useRef(code);
  const url = useMemo(() => {
    const indexContent = getIndex({ code: originalCode });

    const parameters = getParameters({
      files: {
        'package.json': {
          content: {
            dependencies: {
              react: 'latest',
              'react-dom': 'latest',
              'carbon-components-react': 'latest',
              'carbon-components': 'latest',
            },
          },
        },
        'index.js': {
          content: indexContent,
        },
        'index.html': {
          content: `<div id="root"></div>`,
        },
      },
    });
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
  }, [code]);

  return url;
};

export default useCodesandbox;
