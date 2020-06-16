import React from 'react';

import * as ChartComponents from '@carbon/charts-react';
import { demoGroups } from '@carbon/charts/demo/data';

import CodeBar from '../ComponentDemo/Code/CodeBar.js';

const generateHeadingID = (title) =>
  title
    .split(' ')
    .map((t) => t.toLowerCase())
    .join('-');

const AllDemos = () => (
  <>
    {demoGroups.map((demoGroup) => (
      <>
        <h2 id={generateHeadingID(demoGroup.title)}>{demoGroup.title}</h2>

        {demoGroup.description && (
          <p className="dataviz-copy">{demoGroup.description}</p>
        )}

        {demoGroup.demos.map((demo) => {
          const DemoComponent = ChartComponents[demo.chartType.vanilla];
          return (
            <>
              {demo.description && (
                <p className="dataviz-copy">{demo.description}</p>
              )}
              <div
                className="chart-demo-wrapper"
                id={generateHeadingID(demo.title)}
              >
                <div className="chart-demo">
                  <DemoComponent
                    data={demo.data}
                    options={demo.options}
                    style={{ maxWidth: 400 }}
                  />
                </div>
                <CodeBar
                  links={{
                    React: demo.codesandbox.react,
                    Angular: `https://carbon-design-system.github.io/carbon-charts/angular/?path=/story/${demo.id}`,
                    Vue: demo.codesandbox.vue,
                    Vanilla: demo.codesandbox.vanilla,
                  }}
                />
              </div>
            </>
          );
        })}
      </>
    ))}
  </>
);

export default AllDemos;
