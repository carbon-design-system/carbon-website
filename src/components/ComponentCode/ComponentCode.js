import React from 'react';
import PropTypes from 'prop-types';
import ComponentExample from '../ComponentExample/ComponentExample';

export default class ComponentCode extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    variation: PropTypes.string,
    codepen: PropTypes.string,
    hasLightVersion: PropTypes.bool,
    hasReactVersion: PropTypes.bool,
    hasAngularVersion: PropTypes.string,
    hasVueVersion: PropTypes.string,
    experimental: PropTypes.bool,
  };

  render() {
    const {
      component,
      codepen,
      hasLightVersion,
      hasReactVersion,
      hasAngularVersion,
      hasVueVersion,
      variation,
      experimental,
    } = this.props;

    let htmlFile;
    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      htmlFile = require(`carbon-components/html/${component}/${variation}.html`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(
        `Unable to import htmlFile at 'carbon-components/html/${component}/${variation}.html'`
      );
    }

    return (
      <div className="component-variation bx--row">
        <div className="bx--col-lg-8 bx--no-gutter">
          <ComponentExample
            codepenSlug={codepen}
            component={component}
            variation={variation}
            htmlFile={htmlFile}
            hideViewFullRender={this.props.hideViewFullRender}
            hasLightVersion={hasLightVersion}
            hasReactVersion={hasReactVersion}
            hasAngularVersion={hasAngularVersion}
            hasVueVersion={hasVueVersion}
            experimental={experimental}
          />
        </div>
      </div>
    );
  }
}
