import React from 'react';

import * as ChartComponents from '@carbon/charts-react';
import { demoGroups } from '@carbon/charts/demo/demo-data';

import { Launch16 } from '@carbon/icons-react';

export default () => (
  <>
    {demoGroups.map(demoGroup => {
      return (
        <>
          {demoGroup.demos.map(demo => {
            const DemoComponent = ChartComponents[demo.chartType.vanilla];
            return (
              <div className="charting-demo with-margin-bottom">
                <DemoComponent
                  data={demo.data}
                  options={demo.options}
                  style={{ maxWidth: 400 }}
                />

                <div className="component-toolbar" style={{ marginTop: 0 }}>
                  <div className="component-toolbar__current">CodeSandbox:</div>
                  <div className="component-toolbar__links">
                    <a
                      href={demo.codesandbox.react}
                      target="_blank"
                      rel="noopener noreferrer">
                      React <Launch16 />
                    </a>

                    <a
                      href={`https://carbon-design-system.github.io/carbon-charts/angular/?path=/story/${demo.id}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      Angular <Launch16 />
                    </a>

                    <a
                      href={demo.codesandbox.vue}
                      target="_blank"
                      rel="noopener noreferrer">
                      Vue <Launch16 />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    })}
  </>
);
