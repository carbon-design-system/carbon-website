import React from 'react';

import * as ChartComponents from '@carbon/charts-react';
import { demoGroups } from '@carbon/charts/demo/data';

import { Launch16 } from '@carbon/icons-react';

import WRITEUPS from "./writeups";

const generateHeadingID = title => title.split(" ")
  .map(title => title.toLowerCase()).join("-");

export default () => (
  <>
    {demoGroups.map(demoGroup => {
      return (
        <>
          <h2 id={generateHeadingID(demoGroup.title)}>{demoGroup.title}</h2>

          {WRITEUPS[demoGroup.title] && <p>{WRITEUPS[demoGroup.title]}</p>}

          {demoGroup.demos.map(demo => {
            const DemoComponent = ChartComponents[demo.chartType.vanilla];
            return (
              <>
                {WRITEUPS[demo.title] && <p>{WRITEUPS[demo.title]}</p>}
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
                        href={demo.codesandbox.vanilla}
                        target="_blank"
                        rel="noopener noreferrer">
                        vanilla <Launch16 />
                      </a>

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
              </>
            );
          })}
        </>
      );
    })}
  </>
);
