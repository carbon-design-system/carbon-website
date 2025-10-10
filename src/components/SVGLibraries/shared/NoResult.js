import React from 'react';
import ResourceCard from 'gatsby-theme-carbon/src/components/ResourceCard';
import { Column, Row } from 'gatsby-theme-carbon';
import cx from 'classnames';
import {
  h2,
  paragraph,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';

import { Illustrator, Github } from './Icons';
import { noResult, allSvgs, searchLabel } from './SvgLibrary.module.scss';

const NoResult = ({
  allIconResults,
  setSelectedCategory,
  selectedCategory,
  type = 'icons',
  pageName,
  pageUrl,
}) => (
  <div className={noResult}>
    {allIconResults ? (
      <>
        <span className={searchLabel}>
          {`0 results found in the "${selectedCategory}" category.`}
        </span>
        <h2 className={h2}>
          {allIconResults} matches found in{' '}
          <button
            type="button"
            onClick={() => setSelectedCategory(`All ${type}`)}
            className={cx(allSvgs, 'cds--link')}>
            all {type}.
          </button>
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
            <ResourceCard
              subTitle={`Submit ${
                pageName === 'icon' ? 'an icon' : 'a pictogram'
              } design`}
              href={
                pageName === 'icon'
                  ? 'https://github.ibm.com/brand/ui-icons/issues/new'
                  : 'https://github.ibm.com/brand/pictograms/issues/new'
              }>
              <Github />
            </ResourceCard>
          </Column>
          <Column colMd={4} colLg={4} noGutterSm>
            <ResourceCard
              actionIcon="download"
              href={pageUrl}
              subTitle={`Download the ${pageName} master`}>
              <Illustrator />
            </ResourceCard>
          </Column>
        </Row>
      </>
    )}
  </div>
);

export default NoResult;
