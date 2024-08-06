import React from 'react';
import PropTypes from 'prop-types';
import { DefinitionTooltip, Tag } from '@carbon/react';

import * as styles from './a11y-status-tag.module.scss';

const A11yStatusTag = ({ tag, tooltip }) => {
  const tags = {
    tested: {
      color: 'green',
      text: 'Tested',
      definition:
        'Passes all automated tests with no reported accessibility violations.',
    },
    partial: {
      color: 'blue',
      text: 'Partially tested',
      definition:
        'Some tests are incomplete, in progress, invalid, or temporarily skipped.',
    },
    manual: {
      color: 'teal',
      text: 'Manually tested',
      definition:
        'A human has manually tested this component, e.g. screen reader testing.',
    },
    notavailable: {
      color: 'gray',
      text: 'Not available',
      definition:
        'Test data is either not available or not applicable for this component state.',
    },
    nottested: {
      color: 'purple',
      text: 'Not tested',
      definition: 'Automated or manual testing has been temporarily deferred.',
    },
  };

  if (!tags[tag]) {
    return <Tag>{tag}</Tag>;
  }

  const { color, text, definition } = tags[tag];

  return tooltip ? (
    <DefinitionTooltip openOnHover definition={definition}>
      <Tag type={color} className={styles.tag}>
        {text}
      </Tag>
    </DefinitionTooltip>
  ) : (
    <Tag type={color} className={styles.tag}>
      {text}
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
