import React from 'react';
import PropTypes from 'prop-types';
import ComponentExample from '../ComponentExample/ComponentExample';

export default class ComponentCode extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    variation: PropTypes.string,
    codepen: PropTypes.string,
    hasLightVersion: PropTypes.bool,
    defaultFrameworkVariant: PropTypes.bool,
    hasVanillaVersion: PropTypes.bool,
    hasReactVersion: PropTypes.oneOfType(
      PropTypes.bool,
      PropTypes.oneOf('live', 'link')
    ),
    hasAngularVersion: PropTypes.string,
    hasVueVersion: PropTypes.string,
    experimental: PropTypes.bool,
  };

  render() {
    const {
      component,
      codepen,
      hasLightVersion,
      defaultFrameworkVariant,
      hasVanillaVersion,
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
            defaultFrameworkVariant={defaultFrameworkVariant}
            hasVanillaVersion={hasVanillaVersion}
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
