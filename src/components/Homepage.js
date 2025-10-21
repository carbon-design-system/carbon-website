import React from 'react';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/components/Layouts/Homepage';
import { blue20, purple20, gray100 } from '@carbon/elements';
import { calloutLink, callToAction } from './Homepage.module.scss';
// import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';
import ImageV11 from './Homepage/Carbon-AI-banner-image.jpg';

const FirstLeftText = () => <p>Carbon Design System</p>;

const FirstRightText = () => (
  <p>
    Carbon is IBM&rsquo;s <strong>open source</strong> design system for
    products and digital experiences. With the IBM Design Language as its
    foundation, the system consists of working code, design tools and resources,
    human interface guidelines, and a vibrant community of contributors.
  </p>
);

const SecondLeftText = () => (
  <p>
    Wondering how
    <br />
    to contribute?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you&apos;re interested in
    contributing, check out our contributing guidelines to get started.
    <a className={calloutLink} href="/contributing/get-started/overview">
      Start contributing →
    </a>
  </p>
);

const customProps = {
  Banner: (
    <>
      {/* Remove the dots for now since we're using a static image for v11 */}
      {/* <span className="homepage--dots" /> */}
      <section className="homepage--header">
        <div
          className="cds--grid"
          style={{
            maxWidth: '100%',
            overflow: 'hidden',
            backgroundImage: `url(${ImageV11})`,
          }}>
          <div className="cds--row">
            <div className="cds--col-lg-4 cds--col-md-4 cds--col-sm-2 cds--offset-lg-8 cds--offset-md-4 cds--offset-sm-2 homepage--tile-header">
              <ResourceCard
                className={callToAction}
                subTitle="Introducing"
                title="Carbon for AI"
                href="https://carbondesignsystem.com/guidelines/carbon-for-ai/"
                actionIcon="arrowRight"
              />
            </div>
            {/* <HomepageVideo /> */}
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor={blue20}
      color={gray100}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color={gray100}
      backgroundColor={purple20}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
