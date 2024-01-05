/* eslint-disable global-require */
import React from 'react';
import { Tag } from '@carbon/react';
import componentList from '../../data/components.json';
import * as avtTestData from '@carbon/react/.playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json';
import packageJson from '../../../package.json';

import { table } from './a11y-status.module.scss';

const filteredComponentList = componentList.components.filter(
  (item) => item.a11ystatus !== false
);

class A11yStatus extends React.Component {
  render() {
    const reactVersion = packageJson.dependencies['@carbon/react'];
    const TestedTag = <Tag type="green">Tested</Tag>;
    const NotTestedTag = <Tag type="purple">Not yet tested</Tag>;
    const PartiallyTestedTag = <Tag type="blue">Partially tested</Tag>;
    const ManuallyTestedTag = <Tag type="teal">Manually tested</Tag>;
    const NotAvailableTag = <Tag>Not available</Tag>;

    return (
      <div className="cds--row">
        <div className="cds--col-lg-12">
          <p>
            <strong>Latest version:</strong> {reactVersion} |{' '}
            <strong>Framework</strong> React (@carbon/react)
          </p>
        </div>
        <div
          className={`${table} cds--col-lg-12 cds--col-no-gutter page-table__container`}>
          <table className="page-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Accessibility test</th>
                <th>Status</th>
                <th>Link to source code</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(filteredComponentList).map((component) => {
                const componentName =
                  filteredComponentList[component].component;
                const componentTestData = avtTestData.default.suites.find(
                  (suite) => {
                    return suite.title
                      .toLowerCase()
                      .includes(componentName.toLowerCase().replace(' ', ''));
                  }
                );

                const githubUrl = `https://github.com/carbon-design-system/carbon/tree/main/packages/react/src/components/${componentName
                  .replace(/\b\w/g, (char) => char.toUpperCase())
                  .replace(' ', '')}`;

                // Function to check if the spec has a specific tag and
                // if the status is skipped
                function checkAVTStatus(componentTestData, tag) {
                  let hasAVT = false;
                  let hasSkippedAVT = false;

                  if (componentTestData) {
                    hasAVT = componentTestData.suites.some((suite) => {
                      const searchSuites = suite.suites || [suite];
                      return searchSuites.some((innerSuite) =>
                        innerSuite.specs.some((spec) =>
                          spec.tags.some((specTag) => specTag.includes(tag))
                        )
                      );
                    });

                    hasSkippedAVT = componentTestData.suites.some((suite) =>
                      (suite.suites || [suite]).some((innerSuite) =>
                        innerSuite.specs.some(
                          (spec) =>
                            spec.tags?.includes(tag) &&
                            spec.tests.some((test) => test.status === 'skipped')
                        )
                      )
                    );
                  }

                  return { hasAVT, hasSkippedAVT };
                }

                const {
                  hasAVT: hasDefaultAVT,
                  hasSkippedAVT: hasSkippedDefaultAVT,
                } = checkAVTStatus(componentTestData, 'avt-default-state');
                const {
                  hasAVT: hasAdvancedAVT,
                  hasSkippedAVT: hasSkippedAdvancedAVT,
                } = checkAVTStatus(componentTestData, 'avt-advanced-states');
                const {
                  hasAVT: hasKeyboardNavAVT,
                  hasSkippedAVT: hasSkippedKeyboardNavAVT,
                } = checkAVTStatus(componentTestData, 'avt-keyboard-nav');

                // tag for default AVT
                let defaultAVTTag;
                if (hasSkippedDefaultAVT == true) {
                  defaultAVTTag = PartiallyTestedTag;
                } else if (hasDefaultAVT == true) {
                  defaultAVTTag = TestedTag;
                } else {
                  defaultAVTTag = NotTestedTag;
                }

                // tag for advanced AVT
                let advancedAVTTag;
                if (hasSkippedAdvancedAVT == true) {
                  advancedAVTTag = PartiallyTestedTag;
                } else if (hasAdvancedAVT == true) {
                  advancedAVTTag = TestedTag;
                } else {
                  advancedAVTTag = NotTestedTag;
                }

                // tag for keyboard AVT
                let keyboardNavAVTTag;
                if (hasSkippedKeyboardNavAVT == true) {
                  keyboardNavAVTTag = PartiallyTestedTag;
                } else if (hasKeyboardNavAVT == true) {
                  keyboardNavAVTTag = TestedTag;
                } else {
                  keyboardNavAVTTag = NotAvailableTag;
                }

                // tag for screen reader AVT
                const screenReaderAVT =
                  filteredComponentList[component].testing.screenreader;
                let screenReaderAVTTag;
                switch (screenReaderAVT) {
                  case 'manual':
                    screenReaderAVTTag = ManuallyTestedTag;
                    break;
                  case 'partial':
                    screenReaderAVTTag = PartiallyTestedTag;
                    break;
                  case 'notavailable':
                    screenReaderAVTTag = NotAvailableTag;
                    break;
                  default:
                    screenReaderAVTTag = NotTestedTag;
                }

                // link for component name in table
                let componentUrl;
                if (componentName === 'Aspect ratio') {
                  componentUrl = '/2x-grid/overview/#aspect-ratio';
                } else if (
                  componentName === 'Grid' ||
                  componentName === 'FlexGrid'
                ) {
                  componentUrl = '/2x-grid/overview';
                } else if (componentName === 'Theme') {
                  componentUrl = '/guidelines/themes/overview/';
                }
                // if a parent component is set link to the parent component
                else if (filteredComponentList[component].parentComponent) {
                  componentUrl = `/components/${filteredComponentList[
                    component
                  ].parentComponent
                    .toLowerCase()
                    .replace(' ', '-')}/usage`;
                }
                // if component isn't linked on overview page and no parent
                // component set then there is no where to link to so set
                // to null
                else if (
                  filteredComponentList[component].overview === false &&
                  filteredComponentList[component].parentComponent === undefined
                ) {
                  componentUrl = null;
                } else {
                  componentUrl = `/components/${componentName
                    .toLowerCase()
                    .replace(' ', '-')}/usage`;
                }

                return (
                  <React.Fragment key={`avt-tests-${componentName}`}>
                    <tr>
                      <td>
                        {componentUrl === null ? (
                          componentName
                        ) : (
                          <a href={componentUrl}>{componentName}</a>
                        )}
                      </td>
                      <td>Default state</td>
                      <td>{defaultAVTTag}</td>
                      <td>
                        <a href={githubUrl}>Github link</a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Advanced states</td>
                      <td>{advancedAVTTag}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Keyboard states</td>
                      <td>{keyboardNavAVTTag}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Screen reader</td>
                      <td>{screenReaderAVTTag}</td>
                      <td></td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default A11yStatus;
