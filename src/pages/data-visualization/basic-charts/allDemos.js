import React from 'react';

import * as ChartComponents from '@carbon/charts-react';
import { demoGroups } from '@carbon/charts/demo/data';

import CodeBar from "../../../components/ComponentDemo/Code/CodeBar.js";

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

          {demoGroup.demos.filter(demo => demo.isDemoExample === true)
            .map(demo => {
              const DemoComponent = ChartComponents[demo.chartType.vanilla];
              return (
                <>
                  {WRITEUPS[demo.title] && <p>{WRITEUPS[demo.title]}</p>}
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
            })
          }
        </>
      );
    })}
  </>
);
