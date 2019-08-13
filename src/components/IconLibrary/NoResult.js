import React from 'react';
import ResourceCard from 'gatsby-theme-carbon/src/components/ResourceCard';
import { Column, Row } from 'gatsby-theme-carbon';
import {
  h2,
  paragraph,
} from 'gatsby-theme-carbon/src/components/markdown/Markdown.module.scss';

import MdxIcon from '../MdxIcon';
import { noResult } from './IconLibrary.module.scss';

const NoResult = () => (
  <div className={noResult}>
    <h2 className={h2}>No result found</h2>
    <p className={paragraph}>
      It appears we don’t have an icon that matches your search. Try different
      search terms or give us a hand—submit your own design to the library!
    </p>
    <Row className="resource-card-group">
      <Column colMd={4} colLg={4} noGutterSm>
        <ResourceCard subTitle="Submit an icon design">
          <MdxIcon name="github" />
        </ResourceCard>
      </Column>
      <Column colMd={4} colLg={4} noGutterSm>
        <ResourceCard actionIcon="download" subTitle="Download the icon grid">
          <MdxIcon name="illustrator" />
        </ResourceCard>
      </Column>
    </Row>
  </div>
);

export default NoResult;
