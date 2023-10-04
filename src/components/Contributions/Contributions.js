import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Column, Row } from 'gatsby-theme-carbon';
import ArticleCard from 'gatsby-theme-carbon/src/components/ArticleCard';
import { imageStyle } from './Contributions.module.scss';

export default function Contributions({ contributionLimit = 9, ...rest }) {
  const data = useStaticQuery(graphql`
    query contributionsQuery {
      allAirtable {
        nodes {
          data {
            Storybook
            Github_Issue
            Date(formatString: "MMMM Do, YYYY")
            Contribution
            Website
            Adopter
            Screens {
              url
              thumbnails {
                full {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Row {...rest}>
      {data.allAirtable.nodes
        .slice(0, contributionLimit)
        .map((contribution, i) => (
          <Column key={i} colSm={4} colMd={4} colLg={4} noGutterMdLeft>
            <ArticleCard
              author={`Adopter: ` + contribution.data.Adopter}
              href={contribution.data.Github_Issue}
              date={`Date completed: ` + contribution.data.Date}>
              <img
                className={imageStyle}
                alt="Animated gif of the contribution"
                src={contribution.data.Screens[0].thumbnails.full.url}
              />
            </ArticleCard>
          </Column>
        ))}
    </Row>
  );
}
