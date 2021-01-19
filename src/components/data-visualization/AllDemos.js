import React from 'react';

import * as ChartComponents from '@carbon/charts-react';

import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import CodeBar from '../ComponentDemo/Code/CodeBar.js';

import demoGroups from '../../data/data-visualization';

const generateHeadingID = (title) =>
  title
    .split(' ')
    .map((t) => t.toLowerCase())
    .join('-');

const AllDemos = () => (
  <>
    {demoGroups.map((demoGroup) => (
      <>
        <H2>{demoGroup.title}</H2>

        {demoGroup.description && (
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-8">
              <p className="dataviz-copy">{demoGroup.description}</p>
            </div>
          </div>
        )}

        {demoGroup.demos.map((demo) => {
          const DemoComponent = ChartComponents[demo.chartType.vanilla];
          return (
            <>
              {demo.description && (
                <div className="bx--row">
                  <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-8">
                    <p className="dataviz-copy">{demo.description}</p>
                  </div>
                </div>
              )}
              <div className="bx--row">
                <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-8">
                  <div
                    className="chart-demo-wrapper"
                    id={generateHeadingID(demo.title)}>
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
                </div>
              </div>
            </>
          );
        })}
      </>
    ))}
  </>
);

export default AllDemos;
