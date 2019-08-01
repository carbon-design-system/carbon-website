import React from 'react';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Carbon Design System</p>;

const FirstRightText = () => (
  <p>
    Carbon is IBM’s <strong>open-source</strong> design system for products and
    experiences. With the IBM Design Language as its foundation, the system
    consists of working code, design tools and resources, human interface
    guidelines, and a vibrant community of contributors.
  </p>
);

const SecondLeftText = () => <p>Wondering how to contribute?</p>;

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
    <a
      className={calloutLink}
      href="https://www.carbondesignsystem.com/contributions/overview/">
      Start contributing →
    </a>
  </p>
);

const customProps = {
  Banner: (
    <>
      <span className="homepage--dots" />
      <section className="homepage--header">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
              <ResourceCard
                subTitle="Read"
                title="Migrate to v10"
                href="/updates/v10-migration/overview"
                color="dark"
                actionIcon="arrowRight"
              />
            </div>
            <HomepageVideo>
              <iframe
                src="https://player.vimeo.com/video/322021187?muted=1&autoplay=1&loop=1&background=1"
                width="100%"
                height="100%"
              />
            </HomepageVideo>
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
