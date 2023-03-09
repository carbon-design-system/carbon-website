import { useMemo, useRef } from 'react';
import { getParameters } from 'codesandbox/lib/api/define';
import sampleData from '../data/sampleData';

const getIndex = ({ code = '' }) => {
  const uniqueComponents = Array.from(new Set(code.match(/<[A-Z]\w+/g))).map(
    (component) => component.slice(1)
  );

  const importSampleData = () => {
    const [componentName] = uniqueComponents;
    if (componentName === 'DataTable') {
      return `import { headerData, rowData } from './sampleData';`;
    }
    return '';
  };

  return `
  import React from 'react';
  import { render } from 'react-dom';
  import { ${uniqueComponents.join(', ')} } from '@carbon/react';
  ${importSampleData()}

  const App = () => (
  ${code}
  );

  render(<App />, document.getElementById('root'));
`;
};

const useCodesandbox = (code) => {
  const { current: originalCode } = useRef(code);
  const url = useMemo(() => {
    if (!originalCode) {
      return null;
    }

    const indexContent = getIndex({ code: originalCode });

    const parameters = getParameters({
      files: {
        'package.json': {
          content: {
            dependencies: {
              react: 'latest',
              'react-dom': 'latest',
              '@carbon/react': 'latest',
            },
          },
        },
        'index.js': {
          content: indexContent,
        },
        'public/index.html': {
          content: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8" />
              <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="theme-color" content="#000000" />
              <meta
                name="description"
                content="Web site created using create-react-app"
              />
              <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
              <!--
                manifest.json provides metadata used when your web app is installed on a
                user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
              -->
              <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
              <link
                rel="stylesheet"
                href="https://unpkg.com/@carbon/styles@1/css/styles.min.css"
              />
              <title>React App</title>
            </head>
            <body>
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <div id="root"></div>
            </body>
          </html>
          `,
        },
        ...(/^<DataTable/.test(code) && sampleData.DataTable),
      },
    });
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
  }, [code, originalCode]);

  return url;
};

export default useCodesandbox;
