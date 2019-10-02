import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import * as reactComponent from 'carbon-components-react';

const items = [
  {
    id: 'item-1',
    text: 'Item 1',
  },
  {
    id: 'item-2',
    text: 'Item 2',
  },
  {
    id: 'item-3',
    text: 'Item 3',
  },
  {
    id: 'item-4',
    text: 'Item 4',
  },
];

class ComponentReactExample extends Component {
  static propTypes = {
    name: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    hasVanillaVersion: PropTypes.bool,
    hasAngularVersion: PropTypes.bool,
    hasVueVersion: PropTypes.bool,
  };

  componentDidMount() {
    this.addReactComponent();
  }

  addReactComponent = () => {
    let NewComponent = reactComponent[this.props.component];

    if (this.props.component === 'ComboBox') {
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          placeholder="Filter..."
        />,
        this.comp
      );
    } else if (this.props.variation === 'MultiSelect.Filterable') {
      NewComponent = reactComponent.MultiSelect.Filterable;
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          onChange={() => {}}
          placeholder="Filter"
        />,
        this.comp
      );
    } else if (
      this.props.variation === 'Dropdown' ||
      this.props.variation === 'MultiSelect'
    ) {
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          label={`${this.props.component} label`}
        />,
        this.comp
      );
    } else if (
      this.props.variation === 'Dropdown.Inline' ||
      this.props.variation === 'MultiSelect.Inline'
    ) {
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          label={`${this.props.component} label`}
          type="inline"
        />,
        this.comp
      );
    }
  };

  render() {
    const {
      name,
      component,
      variation,
      hasVanillaVersion,
      hasAngularVersion,
      hasVueVersion,
    } = this.props;
    const storybookItem = `${component}--${variation ||
      'default'}`.toLowerCase();
    const storybookMessage = {
      'multiselect--multiselect.filterable':
        'Check off Filterable in KNOBS tab',
      'multiselect--multiselect.inline':
        'Select inline in UI type in KNOBS tab',
    }[storybookItem];
    const storybookVariation =
      {
        'dropdown--dropdown': 'dropdown--default',
        'dropdown--dropdown.inline': 'dropdown--default',
        'multiselect--multiselect': 'multiselect--default',
        'multiselect--multiselect.filterable': 'multiselect--default',
        'multiselect--multiselect.inline': 'multiselect--default',
      }[storybookItem] || storybookItem;
    const componentLink = `http://react.carbondesignsystem.com/?path=/story/${storybookVariation}`;

    const getLibraryLinks = () => {
      const librariesLinks = {
        React: 'https://github.com/carbon-design-system/carbon-components',
        vanilla: 'https://github.com/carbon-design-system/carbon-components',
        Angular: 'https://github.com/ibm/carbon-components-angular',
        Vue: 'https://github.com/carbon-design-system/carbon-components-vue',
      };
      const linksList = [
        'React',
        hasVanillaVersion && 'vanilla',
        hasAngularVersion && 'Angular',
        hasVueVersion && 'Vue',
      ]
        .filter(Boolean)
        .map((item, index, a) => (
          <React.Fragment key={item}>
            <a
              key={`${item}-link`}
              href={librariesLinks[item]}
              target="_blank"
              rel="noopener noreferrer">
              {item}
            </a>
            {index < a.length - 1 && (
              <span>{index < a.length - 2 ? ', ' : ' and '}</span>
            )}
          </React.Fragment>
        ));

      return (
        <>
          This component is {!hasVanillaVersion ? ' currently only' : ''}{' '}
          available in our {linksList}{' '}
          {linksList.length <= 1 ? 'library' : 'libraries'}.
        </>
      );
    };

    return (
      <>
        <div className="bx--row">
          <div className="bx--col-lg-12">
            <h2 className="page-h2">{name}</h2>
            <p className="component-example__heading-label page-p">
              {getLibraryLinks()}
            </p>
          </div>
        </div>
        <div className="component-variation bx--row">
          <div className="bx--col-lg-12 bx--no-gutter">
            <div>
              <div className="svg--sprite" aria-hidden="true" />
              <div className="component-example__live">
                <div className="component-example__live--rendered">
                  <div
                    ref={comp => {
                      this.comp = comp;
                    }}
                  />
                </div>
                <a
                  href={componentLink}
                  className="component-example__view-full-render component-example__view-full-render--react"
                  rel="noopener noreferrer">
                  View on React Storybook
                  {storybookMessage && ` (${storybookMessage})`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentReactExample;
