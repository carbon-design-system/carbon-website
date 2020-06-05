import React from 'react';

import * as ChartComponents from '@carbon/charts-react';
import { demoGroups } from '@carbon/charts/demo/data';

import CodeBar from "../ComponentDemo/Code/CodeBar.js";

const generateHeadingID = title => title.split(" ")
  .map(title => title.toLowerCase()).join("-");

export default () => (
  <>
    {demoGroups.map(demoGroup => {
      return (
        <>
          <h2 id={generateHeadingID(demoGroup.title)}>{demoGroup.title}</h2>

          {demoGroup.description && <p>{demoGroup.description}</p>}

          {demoGroup.demos.map(demo => {
            const DemoComponent = ChartComponents[demo.chartType.vanilla];
            return (
              <>
                {demo.description && <p>{demo.description}</p>}
                <div className="chart-demo-wrapper">
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
      );
    })}
  </>
);
