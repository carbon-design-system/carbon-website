import React, { useState } from 'react';
import { globalHistory } from '@reach/router';
import PropTypes from 'prop-types';
import {
  DefinitionTooltip,
  unstable__FluidDropdown as FluidDropdown,
  Link,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
} from '@carbon/react';
import A11yStatusTag from '../A11yStatusTag';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import H3 from 'gatsby-theme-carbon/src/components/markdown/H3';
import { Column, ResourceCard, Row } from 'gatsby-theme-carbon';
import { ArrowRight, Help, Launch } from '@carbon/icons-react';
import componentList from '../../data/components.json';
import * as avtTestData from '@carbon/react/.playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json';
import packageJson from '../../../package.json';

import {
  cardGroup,
  dropdown,
  help,
  hidden,
  moreLink,
  variant,
  version,
  headingLink,
} from './A11yStatus.module.scss';

const A11yStatus = ({ components, layout }) => {
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

  const [selectedComponent, setSelectedComponent] = useState(
    components ? components[0] : null
  );
  const onComponentChange = (selectedItem) => {
    setSelectedComponent(selectedItem);
  };

  const componentA11yData = Object.keys(filteredComponentList).map(
    (component) => {
      const componentName = filteredComponentList[component].component;
      const componentTestData = avtTestData.default.suites.find((suite) => {
        return suite.title
          .toLowerCase()
          .includes(componentName.toLowerCase().replace(' ', ''));
      });

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
      const { hasAVT: hasDefaultAVT, hasSkippedAVT: hasSkippedDefaultAVT } =
        checkAVTStatus(componentTestData, 'avt-default-state');

      // Check AVT status for 'avt-advanced-states'
      const { hasAVT: hasAdvancedAVT, hasSkippedAVT: hasSkippedAdvancedAVT } =
        checkAVTStatus(componentTestData, 'avt-advanced-states');

      // Check AVT status for 'avt-keyboard-nav'
      const {
        hasAVT: hasKeyboardNavAVT,
        hasSkippedAVT: hasSkippedKeyboardNavAVT,
      } = checkAVTStatus(componentTestData, 'avt-keyboard-nav');

      // Render tag types
      let tagTooltip = true;
      if (layout === 'cards') {
        tagTooltip = false;
      }
      let defaultTagType = hasSkippedDefaultAVT
        ? 'partial'
        : hasDefaultAVT
        ? 'tested'
        : 'nottested';
      let advTagType = hasSkippedAdvancedAVT
        ? 'partial'
        : hasAdvancedAVT
        ? 'tested'
        : 'nottested';
      let keyboardTagType = hasSkippedKeyboardNavAVT
        ? 'partial'
        : hasKeyboardNavAVT
        ? 'tested'
        : 'notavailable';

      const defaultAVTTag = (
        <A11yStatusTag tag={defaultTagType} tooltip={tagTooltip} />
      );
      const advancedAVTTag = (
        <A11yStatusTag tag={advTagType} tooltip={tagTooltip} />
      );
      const keyboardNavAVTTag = (
        <A11yStatusTag tag={keyboardTagType} tooltip={tagTooltip} />
      );

      // tag for screen reader AVT
      const screenReaderTagType =
        filteredComponentList[component]?.testing.screenreader;
      const screenReaderAVTTag = (
        <A11yStatusTag
          tag={screenReaderTagType || 'notavailable'}
          tooltip={tagTooltip}
        />
      );

      // link for component name in table
      let componentUrl;
      if (componentName === 'Aspect ratio') {
        componentUrl = '/elements/2x-grid/overview/#aspect-ratio';
      } else if (componentName === 'Grid') {
        componentUrl = '/elements/2x-grid/code#css-grid';
      } else if (componentName === 'Flex grid') {
        componentUrl = '/elements/2x-grid/code#flexbox-grid';
      } else if (componentName === 'UI Shell') {
        componentUrl = '/components/UI-shell-header/usage';
      } else if (componentName === 'Theme') {
        componentUrl = '/elements/themes/overview/';
      } else if (componentName === 'Skeleton') {
        componentUrl = '/patterns/loading-pattern/#skeleton-states';
      } else if (componentName === 'Layer') {
        componentUrl = '/elements/color/usage#implementing-layering';
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

      const accessibilityPageUrl =
        globalHistory.location.pathname.replace(/\/[^\/]+\/?$/, '') +
        '/accessibility#accessibility-testing-status';

      if (layout === 'cards') {
        return (
          <React.Fragment key={`avt-tests-${componentName}`}>
            <Row
              className={`${cardGroup} ${
                selectedComponent.selectedItem === componentName ||
                selectedComponent === componentName ||
                !Array.isArray(components)
                  ? ''
                  : hidden
              }`}
              id={componentName}>
              <Column colLg={4} colMd={4} noGutterSm>
                <ResourceCard
                  subTitle="Default state"
                  href={accessibilityPageUrl}
                  actionIcon="arrowRight">
                  {defaultAVTTag}
                </ResourceCard>
              </Column>
              <Column colLg={4} colMd={4} noGutterSm>
                <ResourceCard
                  subTitle="Advanced states"
                  href={accessibilityPageUrl}
                  actionIcon="arrowRight">
                  {advancedAVTTag}
                </ResourceCard>
              </Column>
              <Column colLg={4} colMd={4} noGutterSm>
                <ResourceCard
                  subTitle="Screen reader"
                  href={accessibilityPageUrl}
                  actionIcon="arrowRight">
                  {screenReaderAVTTag}
                </ResourceCard>
              </Column>
              <Column colLg={4} colMd={4} noGutterSm>
                <ResourceCard
                  subTitle="Keyboard navigation"
                  href={accessibilityPageUrl}
                  actionIcon="arrowRight">
                  {keyboardNavAVTTag}
                </ResourceCard>
              </Column>
            </Row>
          </React.Fragment>
        );
      } else {
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
                  GitHub link
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
      }
    }
  );

  if (layout === 'cards') {
    return (
      <>
        <H3 id="accessibility-testing-status">
          <span id="accessibility-testing-status">
            Accessibility testing status
          </span>
          {helpTooltip}
        </H3>
        {/* Only display the dropdown if there are multiple components being displayed */}
        {Array.isArray(components) && (
          <Row className={variant}>
            <Column sm={4} colMd={4} colLg={4} noGutterSm>
              <FluidDropdown
                isCondensed
                className={dropdown}
                id="variant"
                titleText="Variant"
                label="Variant"
                items={components}
                initialSelectedItem={components[0]}
                onChange={onComponentChange}
              />
            </Column>
          </Row>
        )}
        {componentA11yData}
      </>
    );
  } else {
    return (
      <>
        {components ? (
          <H3>
            <span id="accessibility-testing-status">
              Accessibility testing status
            </span>
            {helpTooltip}
          </H3>
        ) : (
          <>
            <span
              id="all-component-accessibility-status-anchor"
              className={headingLink}></span>
            <H2>All component accessibility status{helpTooltip}</H2>
            <p>
              This table reflects the current AVT status of stable components
              within @carbon/react.
            </p>
          </>
        )}
        <p className={version}>
          <strong>Latest version:</strong> {reactVersion} |{' '}
          <strong>Framework:</strong> React (@carbon/react)
        </p>
        <Row>
          <Column colLg={12} noGutterSm className="page-table__container">
            <table className="page-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Accessibility test</th>
                  <th>Status</th>
                  <th>Link to source code</th>
                </tr>
              </thead>
              <tbody>{componentA11yData}</tbody>
            </table>
          </Column>
        </Row>
        {components && (
          <Row>
            <Column colLg={12}>
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
            </Column>
          </Row>
        )}
      </>
    );
  }
};

A11yStatus.defaultProps = {
  layout: 'table',
};

A11yStatus.propTypes = {
  /**
   * Components to render, if empty will render full list
   */
  components: PropTypes.oneOfType([
    PropTypes.string, // for a single component
    PropTypes.arrayOf(PropTypes.string), // for multiple components
  ]),
  /**
   * Layout to display, default is table
   */
  layout: PropTypes.oneOf(['table', 'cards']),
};

export default A11yStatus;
