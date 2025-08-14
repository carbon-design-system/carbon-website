/* eslint-disable global-require */
import React from 'react';
import { Link } from 'gatsby';
import componentList from '../../data/components.json';
import { Tag } from '@carbon/react';

// only display components where overview is true in the data
const filteredComponentList = componentList.components.filter(
  (item) => item.overview !== false
);

class ComponentOverview extends React.Component {
  renderItems = (currentItem) => {
    const { component, featureFlag } = currentItem;
    let componentUrl;
    if (component === 'Multiselect') {
      componentUrl = '/components/dropdown/usage';
    } else if (component === 'UI shell') {
      componentUrl = '/components/UI-shell-header/usage';
    } else if (component === 'Tree view') {
      componentUrl = '/components/tree-view/usage';
    } else {
      componentUrl = `/components/${component
        .toLowerCase()
        .replace(' ', '-')}/usage`;
    }

    let componentImg;
    try {
      componentImg = require(`./images/${component}.svg`).default;
    } catch (e) {
      // eslint-disable-next-line global-require
      componentImg = require('./images/NoImage.svg').default;
    }

    return (
      <li className="component-item" key={component}>
        <div className="cds--aspect-ratio cds--aspect-ratio--align cds--aspect-ratio--1x1">
          <div className="cds--aspect-ratio--object">
            <Link to={componentUrl} className="component-item__link">
              <img
                src={componentImg}
                alt={component}
                className="component-item__img"
              />
              <p className="component-name">{component}</p>{' '}
              {featureFlag ? (
                <Tag type="blue" className="component-tag--feature-flag">
                  Feature flag
                </Tag>
              ) : null}
            </Link>
          </div>
        </div>
      </li>
    );
  };

  render() {
    return (
      <div className="cds--row">
        <div className="cds--col-lg-12 cds--no-gutter">
          <ul className="component-overview">
            {Object.keys(filteredComponentList).map((component) =>
              this.renderItems(filteredComponentList[component])
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentOverview;
