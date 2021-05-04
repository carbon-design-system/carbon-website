import React from 'react';

import * as ChartComponents from '@carbon/charts-react';

import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import P from 'gatsby-theme-carbon/src/components/markdown/P';
import CodeBar from '../ComponentDemo/Code/CodeBar.js';

import {
  CardGroup,
  MiniCard,
} from 'gatsby-theme-carbon/src/components/MiniCard';

import STORYBOOK_LOGO from '../../images/storybook-icon.svg';

const generateHeadingID = (title) =>
  title
    .split(' ')
    .map((t) => t.toLowerCase())
    .join('-');

const ChartDemoGroup = ({ demoGroup, light }) => {
  let demo = demoGroup.demos.find((d) => d.mainDemo === true);
  if (!demo) {
    demo = demoGroup.demos[0];
  }

  const DemoComponent = ChartComponents[demo.chartType.vanilla];

  const numberOfRemainingDemos =
    demoGroup.demos.length > 2 ? demoGroup.demos.length - 1 : 0;

  const demoGroupClassification = demoGroup.type.replace('-chart', '');

  return (
    <div>
      {light !== true && <H2>{demoGroup.title}</H2>}

      {light !== true && demoGroup.description && (
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-8">
            <P className="dataviz-copy">{demoGroup.description}</P>
          </div>
        </div>
      )}

      <>
        {light !== true && demo.description && (
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-8">
              <P className="dataviz-copy">{demo.description}</P>
            </div>
          </div>
        )}

        <div className="bx--row" style={{ marginTop: '1.5rem' }}>
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
                  Angular: `https://carbon-design-system.github.io/carbon-charts/angular/?path=/story/${demoGroupClassification}-charts-${demo.id}`,
                  Vue: demo.codesandbox.vue,
                  Vanilla: demo.codesandbox.vanilla,
                }}
              />
            </div>
          </div>
        </div>

        {numberOfRemainingDemos > 0 && (
          <MiniCard
            title={`${numberOfRemainingDemos} more demo${
              numberOfRemainingDemos > 1 ? 's' : ''
            }`}
            href={`https://carbon-design-system.github.io/carbon-charts/?path=/story/${demoGroupClassification}-charts-${demo.id}`}>
            <img src={STORYBOOK_LOGO} style={{ height: 20 }} />
          </MiniCard>
        )}
      </>
    </div>
  );
};

export default ChartDemoGroup;
