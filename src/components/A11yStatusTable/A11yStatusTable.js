import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@carbon/react';
import A11yStatusTag from '../A11yStatusTag';
import { Launch } from '@carbon/icons-react';
import componentList from '../../data/components.json';
import * as avtTestData from '@carbon/react/.playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json';
import packageJson from '../../../package.json';

import { table } from './a11y-status-table.module.scss';

const A11yStatusTable = ({ components }) => {
  const filteredComponentList = componentList.components.filter(
    (item) => item.a11ystatus !== false
  );
  const reactVersion = packageJson.dependencies['@carbon/react'];

  // TODO: filter table and only display components listed
  // default is to display full list
  console.log(components);

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
              const componentName = filteredComponentList[component].component;
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
                defaultAVTTag = <A11yStatusTag tag="partial" />;
              } else if (hasDefaultAVT == true) {
                defaultAVTTag = <A11yStatusTag tag="tested" />;
              } else {
                defaultAVTTag = <A11yStatusTag tag="nottested" />;
              }

              // tag for advanced AVT
              let advancedAVTTag;
              if (hasSkippedAdvancedAVT == true) {
                advancedAVTTag = <A11yStatusTag tag="partial" />;
              } else if (hasAdvancedAVT == true) {
                advancedAVTTag = <A11yStatusTag tag="tested" />;
              } else {
                advancedAVTTag = <A11yStatusTag tag="nottested" />;
              }

              // tag for keyboard AVT
              let keyboardNavAVTTag;
              if (hasSkippedKeyboardNavAVT == true) {
                keyboardNavAVTTag = <A11yStatusTag tag="partial" />;
              } else if (hasKeyboardNavAVT == true) {
                keyboardNavAVTTag = <A11yStatusTag tag="tested" />;
              } else {
                keyboardNavAVTTag = <A11yStatusTag tag="notavailable" />;
              }

              // tag for screen reader AVT
              const screenReaderAVT =
                filteredComponentList[component]?.testing.screenreader;
              let screenReaderAVTTag;
              switch (screenReaderAVT) {
                case 'manual':
                  screenReaderAVTTag = <A11yStatusTag tag="manual" />;
                  break;
                case 'partial':
                  screenReaderAVTTag = <A11yStatusTag tag="partial" />;
                  break;
                case 'notavailable':
                  screenReaderAVTTag = <A11yStatusTag tag="notavailable" />;
                  break;
                default:
                  screenReaderAVTTag = <A11yStatusTag tag="nottested" />;
              }

              // link for component name in table
              let componentUrl;
              if (componentName === 'Aspect ratio') {
                componentUrl = '/2x-grid/overview/#aspect-ratio';
              } else if (componentName === 'Grid') {
                componentUrl = '/guidelines/2x-grid/code#css-grid';
              } else if (componentName === 'Flex grid') {
                componentUrl = '/guidelines/2x-grid/code#flexbox-grid';
              } else if (componentName === 'UI Shell') {
                componentUrl = '/components/UI-shell-header/usage';
              } else if (componentName === 'Theme') {
                componentUrl = '/guidelines/themes/overview/';
              } else if (componentName === 'Skeleton') {
                componentUrl = '/patterns/loading-pattern/#skeleton-states';
              } else if (componentName === 'Layer') {
                componentUrl = '/guidelines/color/usage#implementing-layering';
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
                      <Link
                        href={githubUrl}
                        renderIcon={() => <Launch aria-label="Launch" />}>
                        Github link
                      </Link>
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
};

A11yStatusTable.propTypes = {
  /**
   * Components to render in the table
   */
  components: PropTypes.object,
};

export default A11yStatusTable;
