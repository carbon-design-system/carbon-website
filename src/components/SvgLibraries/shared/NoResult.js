import React from 'react';
import ResourceCard from 'gatsby-theme-carbon/src/components/ResourceCard';
import { Column, Row } from 'gatsby-theme-carbon';
import cx from 'classnames';
import {
  h2,
  paragraph,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';

import MdxIcon from '../../MdxIcon';
import { noResult, allSvgs, searchLabel } from './SvgLibrary.module.scss';

const NoResult = ({
  allIconResults,
  setSelectedCategory,
  selectedCategory,
  type = 'icons',
}) => (
  <div className={noResult}>
    {allIconResults ? (
      <>
        <span className={searchLabel}>
          {`0 results found in the "${selectedCategory}" category.`}
        </span>
        <h2 className={h2}>
          {allIconResults} matches found in{' '}
          <span
            role="button"
            tabIndex="0"
            onClick={() => setSelectedCategory(`All ${type}`)}
            href="#"
            className={cx(allSvgs, 'bx--link')}>
            all {type}.
          </span>
        </h2>
      </>
    ) : (
      <>
        <h2 className={h2}>No result found</h2>
        <p className={paragraph}>
          It appears we don’t have an icon that matches your search. Try
          different search terms or give us a hand—submit your own design to the
          library!
        </p>
        <Row className="resource-card-group">
          <Column colMd={4} colLg={4} noGutterSm>
            <ResourceCard subTitle="Submit an icon design">
              <MdxIcon name="github" />
            </ResourceCard>
          </Column>
          <Column colMd={4} colLg={4} noGutterSm>
            <ResourceCard
              actionIcon="download"
              subTitle="Download the icon grid">
              <MdxIcon name="illustrator" />
            </ResourceCard>
          </Column>
        </Row>
      </>
    )}
  </div>
);

export default NoResult;
