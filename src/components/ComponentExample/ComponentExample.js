/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';
import { Launch16 } from '@carbon/icons-react';

import CodeExampleHTML from '../CodeExample/CodeExampleHTML';
import CodeExampleReact from '../CodeExample/CodeExampleReact';
import ComponentExampleLive from './ComponentExampleLive';
import ComponentExampleLiveReact from './ComponentExampleLiveReact';

class ComponentExample extends Component {
  static propTypes = {
    component: PropTypes.string,
    variation: PropTypes.string,
    codepenSlug: PropTypes.string,
    defaultFrameworkVariant: PropTypes.oneOf('vanilla', 'react'),
    hasLightVersion: PropTypes.bool,
    hasVanillaVersion: PropTypes.bool,
    hasReactVersion: PropTypes.string, // React demo link or `live`
    hasAngularVersion: PropTypes.string,
    hasVueVersion: PropTypes.string,
  };

  static _initHandles = new WeakMap();

  state = {
    currentFieldColor: 'field-01',
    currentFrameworkVariant: this.props.defaultFrameworkVariant,
  };

  onSwitchFieldColors = value => {
    this.setState({
      currentFieldColor: value,
    });
  };

  switchToVanilla = () => {
    this.setState({ currentFrameworkVariant: 'vanilla' });
  };

  switchToReact = () => {
    this.setState({ currentFrameworkVariant: 'react' });
  };

  render() {
    const {
      component,
      variation,
      codepenSlug,
      hasLightVersion,
      hasVanillaVersion,
      hasReactVersion,
      hasAngularVersion,
      hasVueVersion,
    } = this.props;

    const { currentFieldColor, currentFrameworkVariant } = this.state;

    const classNames = classnames({
      'component-example__live--rendered': true,
      [`${component}`]: true,
    });

    const lightUIclassnames = classnames({
      'component-example': true,
      'bx--global-light-ui': component === 'tabs',
    });

    let componentName =
      component
        .replace(/-/g, ' ')
        .charAt(0)
        .toUpperCase() + component.replace(/-/g, ' ').substring(1);

    if (componentName.split(' ').length > 1) {
      componentName = `${componentName.split(' ')[0]} ${componentName
        .split(' ')[1]
        .charAt(0)
        .toUpperCase() + componentName.split(' ')[1].substring(1)}`;
    }

    const useLightVersion =
      currentFieldColor === 'field-02' && hasLightVersion === true;
    const liveBackgroundClasses = classnames(
      'component-example__live',
      `component-example__live--${component}`,
      {
        'component-example__live--light': useLightVersion,
      }
    );

    const componentLink = `https://codepen.io/team/carbon/full/${codepenSlug}/`;
    const counter = Math.floor(Math.random() * 100) + 1;
    const ComponentExampleLiveToUse =
      currentFrameworkVariant !== 'react'
        ? ComponentExampleLive
        : ComponentExampleLiveReact;
    const CodeExampleToUse =
      currentFrameworkVariant !== 'react' ? CodeExampleHTML : CodeExampleReact;

    /* eslint-disable no-script-url */
    return (
      <div className={lightUIclassnames}>
        <div className={liveBackgroundClasses} data-floating-menu-container>
          <div className={classNames}>
            <ComponentExampleLiveToUse
              component={component}
              variation={variation}
              useLightVersion={useLightVersion}
            />
          </div>
        </div>
        <div className="component-toolbar">
          <div className="component-toolbar__current">
            {currentFrameworkVariant === 'react' ? 'React' : 'Vanilla JS'}
          </div>
          <div className="component-toolbar__links">
            {currentFrameworkVariant !== 'vanilla' && hasVanillaVersion && (
              <a
                href="javascript:void 0"
                rel="noopener noreferrer"
                onClick={this.switchToVanilla}>
                Vanilla JS
              </a>
            )}
            {currentFrameworkVariant !== 'react' &&
              (hasReactVersion === 'live' ? (
                <a
                  href="javascript:void 0"
                  rel="noopener noreferrer"
                  onClick={this.switchToReact}>
                  React
                </a>
              ) : (
                <a
                  href={`http://react.carbondesignsystem.com/?path=/story/${hasReactVersion}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  React <Launch16 />
                </a>
              ))}
            {/* hasAngularVersion should be the query part of the storybook url */}
            {typeof hasAngularVersion === 'string' && (
              <a
                href={`http://angular.carbondesignsystem.com/${hasAngularVersion}`}
                target="_blank"
                rel="noopener noreferrer">
                Angular <Launch16 />
              </a>
            )}
            {typeof hasVueVersion === 'string' && (
              <a
                href={`http://vue.carbondesignsystem.com/?path=/story/components-cv${hasVueVersion}`}
                target="_blank"
                rel="noopener noreferrer">
                Vue <Launch16 />
              </a>
            )}
            {codepenSlug !== undefined && (
              <a target="_blank" href={componentLink} rel="noopener noreferrer">
                CodePen <Launch16 />
              </a>
            )}
          </div>
          {hasLightVersion === true && (
            <div className="component-toolbar__switcher">
              <RadioButtonGroup
                defaultSelected={currentFieldColor}
                name={`radio-button-group-${counter}`}
                legend="Field selector"
                onChange={this.onSwitchFieldColors}>
                <RadioButton
                  value="field-01"
                  id={`field-01-${counter}`}
                  labelText="field-01"
                />
                <RadioButton
                  value="field-02"
                  id={`field-02-${counter}`}
                  labelText="field-02"
                />
              </RadioButtonGroup>
            </div>
          )}
        </div>
        <CodeExampleToUse
          component={component}
          variation={variation}
          useLightVersion={useLightVersion}
        />
      </div>
    );
    /* eslint-enable no-script-url */
  }
}

export default ComponentExample;
