import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';
import yaml from '../../data/status-indicators/status-indicators.yaml';
import {
  StatusIcon,
  StatusIconGroup,
  StatusIconWrapper,
  StatusIndicatorTableWrapper,
} from './StatusIcon';
import {
  table,
  statusIndicatorRow,
  tokenCell,
  descriptionCell,
} from './StatusIndicator.module.scss';

// TODO: Organize styles, add the rest of the yaml
const StatusIndicators = ({ attention }) => (
  <StatusIndicatorTableWrapper>
    <StructuredListWrapper className={table}>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Icon</StructuredListCell>
          <StructuredListCell head>Name</StructuredListCell>
          <StructuredListCell head>Token</StructuredListCell>
          <StructuredListCell head>Description & usage</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {yaml[attention].map((indicator, i) => (
          <StatusIndicatorRow
            key={`${indicator.name}-${i}`}
            attention={attention}
            {...indicator}
          />
        ))}
      </StructuredListBody>
      <StructuredListBody />
    </StructuredListWrapper>
  </StatusIndicatorTableWrapper>
);

const StatusIndicatorRow = ({
  attention,
  fileNames,
  name,
  token,
  description,
  usage,
}) => (
  <StructuredListRow className={statusIndicatorRow}>
    <StructuredListCell>
      <StatusIconWrapper>
        <StatusIconGroup attention={attention}>
          {fileNames.map((fileName) => (
            <StatusIcon key={`${fileName}`} fileName={fileName} />
          ))}
        </StatusIconGroup>
        <StatusIconGroup attention={attention} theme="dark">
          {fileNames.map((fileName) => (
            <StatusIcon key={`${fileName}-dark`} fileName={fileName} />
          ))}
        </StatusIconGroup>
      </StatusIconWrapper>
    </StructuredListCell>
    <StructuredListCell>{name}</StructuredListCell>
    <StructuredListCell className={tokenCell}>{token}</StructuredListCell>
    <StructuredListCell className={descriptionCell}>
      {description}
      <br />
      {usage ? <em>Used for: {usage}</em> : null}
    </StructuredListCell>
  </StructuredListRow>
);

export default StatusIndicators;
