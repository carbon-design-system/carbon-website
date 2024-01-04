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

    console.log(reactVersion);

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
                  case 'nottested':
                    screenReaderAVTTag = NotTestedTag;
                    break;
                  default:
                    screenReaderAVTTag = NotTestedTag;
                }

                let hasDefaultAVT = false;
                // let hasDefaultAVTPartial = false;

                let hasAdvancedAVT = false;
                // let hasAdvancedAVTPartial = false;

                let hasKeyboardNavAVT = false;
                // let hasKeyboardNavA VTPartial = false;

                if (componentTestData) {
                  // Iterate through all specs in the suite, and all tags in
                  // each spec, to determine if there is _any_ spec that includes
                  // a tag we're looking for.

                  hasDefaultAVT = componentTestData.suites.some((suite) => {
                    return suite.specs.some((spec) => {
                      return spec.tags.some((tag) => {
                        return tag.includes('avt-default-state');
                      });
                    });
                  });

                  hasAdvancedAVT = componentTestData.suites.some((suite) => {
                    return suite.specs.some((spec) => {
                      return spec.tags.some((tag) => {
                        return tag.includes('avt-advanced-states');
                      });
                    });
                  });

                  hasKeyboardNavAVT = componentTestData.suites.some((suite) => {
                    return suite.specs.some((spec) => {
                      return spec.tags.some((tag) => {
                        return tag.includes('avt-keyboard-nav');
                      });
                    });
                  });
                }

                return (
                  <>
                    <tr key={`avt-tests-${componentName}`}>
                      <td>
                        <a href={componentUrl}>{componentName}</a>
                      </td>
                      <td>Default state</td>
                      <td>{hasDefaultAVT ? TestedTag : NotTestedTag}</td>
                      <td>
                        <a href={githubUrl}>Github link</a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Advanced states</td>
                      <td>{hasAdvancedAVT ? TestedTag : NotTestedTag}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Keyboard states</td>
                      <td>{hasKeyboardNavAVT ? TestedTag : NotAvailableTag}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Screen reader</td>
                      <td>{screenReaderAVTTag}</td>
                      <td></td>
                    </tr>
                  </>
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
