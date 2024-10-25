import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '@carbon/react';
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
      <StructuredListHead className="cds--grid">
        <StructuredListRow className="cds--row" head>
          <StructuredListCell
            className={`cds--col-lg-1 cds--col-md-1 ${headerCell}`}
            head>
            Icon
          </StructuredListCell>
          <StructuredListCell
            className={`cds--col-lg-1 cds--col-md-1 ${headerCell}`}
            head>
            Status name
          </StructuredListCell>
          <StructuredListCell
            className={`cds--col-lg-2 cds--col-md-2 ${headerCell}`}
            head>
            Token
          </StructuredListCell>
          <StructuredListCell
            className={`cds--col-lg-4 cds--col-md-3 ${headerCell}`}
            head>
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
