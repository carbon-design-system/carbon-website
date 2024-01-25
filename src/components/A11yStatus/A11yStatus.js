import React from 'react';
import PropTypes from 'prop-types';
import {
  DefinitionTooltip,
  Link,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
} from '@carbon/react';
import A11yStatusTag from '../A11yStatusTag';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import H3 from 'gatsby-theme-carbon/src/components/markdown/H3';
import { ArrowRight, Help, Launch } from '@carbon/icons-react';
import componentList from '../../data/components.json';
import * as avtTestData from '@carbon/react/.playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json';
import packageJson from '../../../package.json';

import {
  headingLink,
  help,
  moreLink,
  table,
  version,
} from './a11y-status.module.scss';

const A11yStatus = ({ components }) => {
  const reactVersion = packageJson.dependencies['@carbon/react'];

  // Check if 'components' is a string and convert it to an array
  const componentsArray =
    typeof components === 'string' ? [components] : components;

  // Check if 'componentsArray' exists and has elements
  const filteredComponentList =
    componentsArray && componentsArray.length
      ? // If 'componentsArray' is valid, filter 'componentList.components' based on the order of 'componentsArray'
        componentsArray
          .map((component) =>
            componentList.components.find(
              (item) => item.component === component
            )
          )
          .filter((item) => item !== undefined)
      : // If 'componentsArray' is not provided or is empty, filter based on 'a11ystatus'
        componentList.components.filter((item) => item.a11ystatus !== false);

  const helpTooltip = (
    <Toggletip className={help}>
      <ToggletipButton label="Help">
        <Help size={20} />
      </ToggletipButton>
      <ToggletipContent>
        <p>
          For every latest release, Carbon runs tests on all components to meet
          the{' '}
          <Link
            inline
            href="https://www.ibm.com/able/requirements/requirements/">
            accessibility requirements
          </Link>
          . These different statuses report the work that Carbon has done in the
          back end. These tests appear only when the components are stable.
        </p>
      </ToggletipContent>
    </Toggletip>
  );

  return (
    <div className="cds--row">
      <div className="cds--col-lg-12">
        {components ? (
          <H3>
            Accessibility testing status
            {helpTooltip}
          </H3>
        ) : (
          <>
            <span
              id="all-component-accessibility-status-anchor"
              className={headingLink}></span>
            <H2>
              <span id="all-component-accessibility-status"></span>
              All component accessibility status
              {helpTooltip}
            </H2>
            <p>
              This table reflects the current AVT status of stable components
              within @carbon/react.
            </p>
          </>
        )}
        <p className={version}>
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
                .replace(/\s+/g, '')}`;

              // Function to check if the spec has a specific tag and
              // if the status is skipped
              function checkAVTStatus(componentTestData, tag) {
                let hasAVT = false;
                let hasSkippedAVT = false;

                // Check if componentTestData exists
                if (componentTestData) {
                  // Check for the presence of the specified tag in any spec
                  hasAVT = componentTestData.suites.some((suite) => {
                    const searchSuites = suite.suites || [suite];
                    return searchSuites.some((innerSuite) =>
                      innerSuite.specs.some((spec) =>
                        spec.tags.some((specTag) => specTag.includes(tag))
                      )
                    );
                  });

                  // Check if any spec with the specified tag has tests with status 'skipped'
                  // this will render partially tested tag
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

              // Check AVT status for 'avt-default-state'
              const {
                hasAVT: hasDefaultAVT,
                hasSkippedAVT: hasSkippedDefaultAVT,
              } = checkAVTStatus(componentTestData, 'avt-default-state');

              // Check AVT status for 'avt-advanced-states'
              const {
                hasAVT: hasAdvancedAVT,
                hasSkippedAVT: hasSkippedAdvancedAVT,
              } = checkAVTStatus(componentTestData, 'avt-advanced-states');

              // Check AVT status for 'avt-keyboard-nav'
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
                        <Link href={componentUrl}>{componentName}</Link>
                      )}
                    </td>
                    <td>
                      {' '}
                      <DefinitionTooltip
                        openOnHover
                        definition="Test(s) that ensure the initial render state of a component is accessible.">
                        Default state
                      </DefinitionTooltip>
                    </td>
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
                    <td>
                      <DefinitionTooltip
                        openOnHover
                        definition="Tests that ensure additional states of the component are accessible. This could be interactive states of a component or its multiple variants.">
                        Advanced states
                      </DefinitionTooltip>
                    </td>
                    <td>{advancedAVTTag}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {' '}
                      <DefinitionTooltip
                        openOnHover
                        definition="Tests that ensure focus is properly managed, and all interactive functions of a component have a proper keyboard-accessible equivalent.">
                        Keyboard navigation
                      </DefinitionTooltip>
                    </td>
                    <td>{keyboardNavAVTTag}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <DefinitionTooltip
                        openOnHover
                        definition="This manual testing ensures that the visual information on the screen is properly conveyed and read correctly by screen readers such as JAWS, VoiceOver, and NVDA.">
                        Screen reader
                      </DefinitionTooltip>
                    </td>
                    <td>{screenReaderAVTTag}</td>
                    <td></td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
        {components && (
          <p className={moreLink}>
            <Link
              href="/components/overview/accessibility-status"
              renderIcon={() => <ArrowRight />}>
              Learn more about tag and test meaning
            </Link>
            <br />
            <Link
              href="/components/overview/accessibility-status#all-component-accessibility-status-anchor"
              renderIcon={() => <ArrowRight />}>
              View all component accessibility status
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

A11yStatus.propTypes = {
  /**
   * Components to render in the table
   */
  components: PropTypes.oneOfType([
    PropTypes.string, // for a single component
    PropTypes.arrayOf(PropTypes.string), // for multiple components
  ]),
};

export default A11yStatus;
