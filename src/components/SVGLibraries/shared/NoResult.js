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
  single,
  batch,
  update,
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
          It appears we don’t have{' '}
          {`${pageName === 'icon' ? 'an icon' : 'a pictogram'}`} that matches
          your search. Try different search terms or submit an issue for a new{' '}
          {`${pageName === 'icon' ? 'icon' : 'pictogram'}`}. Select from the
          ticket options here or check the{' '}
          <a
            href={`https://www.ibm.com/design/language/iconography/${
              pageName === 'icon' ? 'ui-icons' : 'pictograms'
            }/contribute`}>
            Contribute
          </a>{' '}
          page for more details and best practices.
        </p>
        <Row className="resource-card-group">
          <Column colMd={4} colLg={4} noGutterSm>
            <ResourceCard
              href={single}
              subTitle={`UI ${pageName} request: Single`}>
              <Github />
            </ResourceCard>
          </Column>
          <Column colMd={4} colLg={4} noGutterSm>
            <ResourceCard
              href={batch}
              subTitle={`UI ${pageName} request: Batch`}>
              <Github />
            </ResourceCard>
          </Column>
          <Column colMd={4} colLg={4} noGutterSm>
            <ResourceCard
              href={update}
              subTitle={`UI ${pageName} request: Update`}>
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
