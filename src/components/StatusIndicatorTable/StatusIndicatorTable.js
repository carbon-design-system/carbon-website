import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';
import yaml from '../../data/status-indicators/status-indicators.yaml';
import StatusIndicatorRow from './StatusIndicatorRow';
import {
  table,
  statusIndicatorTableWrapper,
  headerCell,
} from './StatusIndicator.module.scss';

// TODO: Organize styles, add the rest of the yaml
const StatusIndicatorTable = ({ attention }) => (
  <div className={statusIndicatorTableWrapper}>
    <StructuredListWrapper className={table}>
      <StructuredListHead className='bx--grid'>
        <StructuredListRow className='bx--row' head>
          <StructuredListCell className={`bx--col-lg-4 bx--col-md-1 ${headerCell}`} head>
            Icon
          </StructuredListCell>
          <StructuredListCell className={`bx--col-lg-2 bx--col-md-2 ${headerCell}`} head>
            Name
          </StructuredListCell>
          <StructuredListCell className={`bx--col-lg-2 bx--col-md-2 ${headerCell}`} head>
            Token
          </StructuredListCell>
          <StructuredListCell className={`bx--col-lg-4 bx--col-md-3 ${headerCell}`} head>
            Description & usage
          </StructuredListCell>
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
  </div>
);

export default StatusIndicatorTable;
