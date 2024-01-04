/* eslint-disable global-require */
import React from 'react';
import { Tag } from '@carbon/react';
import componentList from '../../data/components.json';
import * as avtTestData from '@carbon/react/.playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json';
import packageJson from '../../../package.json';

import { table } from './a11y-status.module.scss';

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
              {Object.keys(componentList.components).map((component) => {
                const componentName =
                  componentList.components[component].component;
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

                let componentUrl;
                if (componentName === 'Multiselect') {
                  componentUrl = '/components/dropdown/usage';
                } else if (componentName === 'Combo box') {
                  componentUrl = '/components/dropdown/usage';
                } else if (componentName === 'UI shell') {
                  componentUrl = '/components/UI-shell-header/usage';
                } else {
                  componentUrl = `/components/${componentName
                    .toLowerCase()
                    .replace(' ', '-')}/usage`;
                }

                let hasDefaultAVT = false;
                let hasAdvancedAVT = false;
                let hasKeyboardNavAVT = false;

                let hasSkippedDefaultAVT = false;
                let hasSkippedAdvancedAVT = false;
                let hasSkippedKeyboardNavAVT = false;

                if (componentTestData) {
                  // Check if the spec has the tag 'avt-default-state'
                  hasDefaultAVT = componentTestData.suites.some((suite) => {
                    return suite.specs.some((spec) => {
                      return spec.tags.some((tag) => {
                        return tag.includes('avt-default-state');
                      });
                    });
                  });

                  hasSkippedDefaultAVT = componentTestData.suites.some(
                    (suite) => {
                      return suite.specs.some((spec) => {
                        // Check if the spec has the tag 'avt-default-state'
                        if (
                          spec.tags &&
                          spec.tags.includes('avt-default-state')
                        ) {
                          // Check if any test in the spec is skipped
                          return spec.tests.some(
                            (test) => test.status === 'skipped'
                          );
                        }
                        return false;
                      });
                    }
                  );

                  // Check if the spec has the tag 'avt-advanced-states'
                  hasAdvancedAVT = componentTestData.suites.some((suite) => {
                    return suite.specs.some((spec) => {
                      return spec.tags.some((tag) => {
                        return tag.includes('avt-advanced-states');
                      });
                    });
                  });

                  hasSkippedAdvancedAVT = componentTestData.suites.some(
                    (suite) => {
                      return suite.specs.some((spec) => {
                        // Check if the spec has the tag 'avt-advanced-states'
                        if (
                          spec.tags &&
                          spec.tags.includes('avt-advanced-states')
                        ) {
                          // Check if any test in the spec is skipped
                          return spec.tests.some(
                            (test) => test.status === 'skipped'
                          );
                        }
                        return false;
                      });
                    }
                  );

                  // Check if the spec has the tag 'avt-keyboard-nav'
                  hasKeyboardNavAVT = componentTestData.suites.some((suite) => {
                    return suite.specs.some((spec) => {
                      return spec.tags.some((tag) => {
                        return tag.includes('avt-keyboard-nav');
                      });
                    });
                  });

                  hasSkippedKeyboardNavAVT = componentTestData.suites.some(
                    (suite) => {
                      return suite.specs.some((spec) => {
                        // Check if the spec has the tag 'avt-keyboard-nav'
                        if (
                          spec.tags &&
                          spec.tags.includes('avt-keyboard-nav')
                        ) {
                          // Check if any test in the spec is skipped
                          return spec.tests.some(
                            (test) => test.status === 'skipped'
                          );
                        }
                        return false;
                      });
                    }
                  );
                }

                // tag for default AVT
                let defaultAVTTag;

                if (hasSkippedDefaultAVT == true) {
                  defaultAVTTag = PartiallyTestedTag;
                } else if (hasDefaultAVT == true) {
                  defaultAVTTag = TestedTag;
                } else {
                  defaultAVTTag = NotTestedTag;
                }

                // tag for Advanced AVT
                let advancedAVTTag;
                if (hasSkippedAdvancedAVT == true) {
                  advancedAVTTag = PartiallyTestedTag;
                } else if (hasAdvancedAVT == true) {
                  advancedAVTTag = TestedTag;
                } else {
                  advancedAVTTag = NotTestedTag;
                }

                // tag for Keyboard AVT
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
                  componentList.components[component].testing.screenreader;
                let screenReaderAVTTag;
                switch (screenReaderAVT) {
                  case 'manual':
                    screenReaderAVTTag = ManuallyTestedTag;
                    break;
                  case 'partial':
                    screenReaderAVTTag = PartiallyTestedTag;
                    break;
                  default:
                    screenReaderAVTTag = NotTestedTag;
                }

                return (
                  <React.Fragment key={`avt-tests-${componentName}`}>
                    <tr>
                      <td>
                        <a href={componentUrl}>{componentName}</a>
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
