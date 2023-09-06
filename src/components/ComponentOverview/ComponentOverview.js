/* eslint-disable global-require */
import React from 'react';
import { Link } from 'gatsby';
import componentList from '../../data/components.json';
import * as avtTestData from '@carbon/react/.playwright/INTERNAL_AVT_REPORT_DO_NOT_USE.json';

class ComponentOverview extends React.Component {
  renderItems = (currentItem) => {
    const { component } = currentItem;
    let componentUrl;
    if (component === 'Multiselect') {
      componentUrl = '/components/dropdown/usage';
    } else if (component === 'UI shell') {
      componentUrl = '/components/UI-shell-header/usage';
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
              <p className="component-name">{component}</p>
            </Link>
          </div>
        </div>
      </li>
    );
  };

  render() {
    return (
      <>
        <div className="cds--row">
          <div className="cds--col-lg-12  cds--col-no-gutter page-table__container">
            <table className="page-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Has default avt test(s)</th>
                  <th>Has complex avt test(s)</th>
                  <th>Has keyboard nav avt test(s)</th>
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

                  // Iterate through all specs in the suite, and all tags in
                  // each spec, to determine if there is _any_ spec that includes
                  // a tag we're looking for.
                  const hasDefaultAVT = componentTestData.suites.some(
                    (suite) => {
                      return suite.specs.some((spec) => {
                        return spec.tags.some((tag) => {
                          return tag.includes('avt-default-state');
                        });
                      });
                    }
                  );

                  const hasComplexAVT = componentTestData.suites.some(
                    (suite) => {
                      return suite.specs.some((spec) => {
                        return spec.tags.some((tag) => {
                          return tag.includes('avt-advanced-states');
                        });
                      });
                    }
                  );

                  const hasKeyboardNavAVT = componentTestData.suites.some(
                    (suite) => {
                      return suite.specs.some((spec) => {
                        return spec.tags.some((tag) => {
                          return tag.includes('avt-keyboard-nav');
                        });
                      });
                    }
                  );

                  return (
                    <tr key={`avt-tests-${componentName}`}>
                      <td>{componentName}</td>
                      <td>{hasDefaultAVT ? '✅' : '🚫'}</td>
                      <td>{hasComplexAVT ? '✅' : '🚫'}</td>
                      <td>{hasKeyboardNavAVT ? '✅' : '🚫'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cds--row">
          <div className="cds--col-lg-12 cds--no-gutter">
            <ul className="component-overview">
              {Object.keys(componentList.components).map((component) =>
                this.renderItems(componentList.components[component])
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentOverview;
