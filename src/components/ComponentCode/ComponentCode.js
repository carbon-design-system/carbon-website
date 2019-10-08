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

    return (
      <div className="component-variation bx--row">
        <div className="bx--col-lg-12 bx--no-gutter">
          <ComponentExample
            codepenSlug={codepen}
            component={component}
            variation={variation}
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
