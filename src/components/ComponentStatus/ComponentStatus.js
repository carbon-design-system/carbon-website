import React from 'react';
import { Tag } from '@carbon/react';
import Packages from '../../../package.json';
import componentStatus from '../../data/components.json';

const tags = {
  stable: <Tag type="green">Stable</Tag>,
  experimental: <Tag type="teal">Experimental</Tag>,
  new: <Tag type="purple">New</Tag>,
  updated: <Tag type="blue">Updated</Tag>,
  deprectated: <Tag type="red">Deprecated</Tag>,
  underConstruction: <Tag type="cool-gray">Under construction</Tag>,
  notAvailable: <span className="component-status--unavailable">–</span>,
};

class ComponentStatus extends React.Component {
  renderItems = (currentItem) => (
    <tr key={currentItem.component}>
      <td>{currentItem.component}</td>
      <td>
        {Object.keys(currentItem.vanilla)
          .filter((key) => currentItem.vanilla[key])
          .map((key) => (
            <React.Fragment key={key}>{tags[key]}</React.Fragment>
          ))}
      </td>
      <td>
        {Object.keys(currentItem.react)
          .filter((key) => currentItem.react[key])
          .map((key) => (
            <React.Fragment key={key}>{tags[key]}</React.Fragment>
          ))}
      </td>
      <td>
        {Object.keys(currentItem.angular)
          .filter((key) => currentItem.angular[key])
          .map((key) => (
            <React.Fragment key={key}>{tags[key]}</React.Fragment>
          ))}
      </td>
      <td>
        {Object.keys(currentItem.vue)
          .filter((key) => currentItem.vue[key])
          .map((key) => (
            <React.Fragment key={key}>{tags[key]}</React.Fragment>
          ))}
      </td>
    </tr>
  );

  render() {
    const coreVersion = Packages.dependencies['@carbon/react'];
    return (
      <div className="cds--row component-status">
        <div className="cds--col-lg-12">
          <h2 className="page-h2">Current version: {coreVersion}</h2>
        </div>
        <div className="cds--col-lg-12 cds--no-gutter cds--table-container">
          <table className="page-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Vanilla</th>
                <th>React</th>
                <th>Angular</th>
                <th>Vue</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(componentStatus.components).map((component) =>
                this.renderItems(componentStatus.components[component])
              )}
            </tbody>
          </table>
        </div>
        <div className="cds--col-lg-8 component-status__key">
          <h4 className="page-h4">Key</h4>
        </div>
        <div className="cds--col-lg-8 cds--no-gutter">
          <table className="page-table">
            <thead>
              <tr>
                <th>Tag</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{tags.stable}</td>
                <td>Component is dev and design production-ready.</td>
              </tr>
              <tr>
                <td>{tags.experimental}</td>
                <td>
                  Component can be used but is not considered stable and changes
                  to it may occur.
                </td>
              </tr>
              <tr>
                <td>{tags.deprectated}</td>
                <td>
                  Component has either been replaced by a new version or it is
                  no longer being supported by the system.
                </td>
              </tr>
              <tr>
                <td>{tags.notAvailable}</td>
                <td>Component is not available in this framework.</td>
              </tr>
              <tr>
                <td>{tags.new}</td>
                <td>
                  Component is new to framework in the last major version
                  update.
                </td>
              </tr>
              <tr>
                <td>{tags.updated}</td>
                <td>
                  An existing component that had been under review, tweaked, and
                  re-released in the last major version.
                </td>
              </tr>
              <tr>
                <td>{tags.underConstruction}</td>
                <td>New components that are currently being worked on.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ComponentStatus;
