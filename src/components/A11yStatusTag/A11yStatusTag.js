import React from 'react';
import PropTypes from 'prop-types';
import { DefinitionTooltip, Tag } from '@carbon/react';

import * as styles from './a11y-status-tag.module.scss';

const A11yStatusTag = ({ tag, tooltip }) => {
  const tags = {
    tested: {
      color: 'green',
      text: 'Tested',
      definition: 'Tests have been implemented, pass, and show no violations ',
    },
    partial: {
      color: 'blue',
      text: 'Partially tested',
      definition:
        'Some testing has been done, but is still incomplete and in progress.',
    },
    manual: {
      color: 'teal',
      text: 'Manually tested',
      definition:
        'Manual testing has been performed and validated by a human to ensure proper accessibility, such as screen reader testing.',
    },
    notavailable: {
      color: 'gray',
      text: 'Not available',
      definition:
        'In some cases, testing data is not available for certain components or component states. For instance, keyboard navigation testing is not necessary for components that are non-interactive.',
    },
    nottested: {
      color: 'purple',
      text: 'Not tested',
      definition:
        'Manual and/or automated testing has been deferred. Most often this applies to experimental or unstable components',
    },
  };

  if (!tags[tag]) {
    return <Tag>{tag}</Tag>;
  }

  const { color, text, definition } = tags[tag];

  return (
    <Tag type={color} className={styles.tag}>
      {tooltip ? (
        <DefinitionTooltip openOnHover definition={definition}>
          {text}
        </DefinitionTooltip>
      ) : (
        text
      )}
    </Tag>
  );
};

A11yStatusTag.defaultProps = {
  tooltip: true,
};

A11yStatusTag.propTypes = {
  tag: PropTypes.oneOf([
    'tested',
    'partial',
    'manual',
    'notavailable',
    'nottested',
  ]),
  tooltip: PropTypes.bool,
};

export default A11yStatusTag;
