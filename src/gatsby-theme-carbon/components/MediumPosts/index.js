import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ArticleCard from '../ArticleCard';
import { Column, Row } from 'gatsby-theme-carbon';

const MediumPosts = ({ postLimit = 3, cardProps, ...rest }) => {
  const data = useStaticQuery(graphql`
    {
      allMediumFeed(sort: { date: DESC }) {
        edges {
          node {
            author
            date(formatString: "MMMM Do, YYYY")
            slug
            thumbnail
            title
            link
          }
        }
      }
    }
  `);

    const allPosts = data.allMediumFeed.edges.map(({ node }) => node);
    const designIbmPost = ["https://medium.com/design-ibm/the-quest-for-usable-ai-e649b6cb9e9a?source=rss----9d530348b622---4"]
    const filteredPosts = allPosts.reduce((acc, post) => {
  if (post.link.includes('design-ibm')) {
    // Only add the specific "design-ibm" post
    if (designIbmPost.includes(post.link)) {
      acc.push(post);
    }
  } else if (post.link.includes('carbondesign')) {
    // Add all "carbondesign" posts
    acc.push(post);
  }
  return acc;
}, []);

  return (
    <Row {...rest}>
      {filteredPosts.slice(0, postLimit).map((latestPost) => (
        <Column
          key={latestPost.slug}
          sm={4}
          md={4}
          lg={4}
          noGutterMdLeft
          >
          <ArticleCard
            title={latestPost.title}
            author={latestPost.author}
            href={latestPost.link}
            date={latestPost.date}
            color="dark"
            {...cardProps}>
            <img
              alt={latestPost.title}
              src={latestPost.thumbnail}
            />
          </ArticleCard>
        </Column>
      ))}
    </Row>
  );
};

MediumPosts.propTypes = {
  cardProps: PropTypes.object,
  postLimit: PropTypes.number,
};

export default MediumPosts;
