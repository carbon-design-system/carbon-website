/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react';
import ToggleIcon from './ToggleIcon';

import mp4 from './carbon.mp4';
import webm from './carbon.webm';
import mp4Mobile from './carbon-mobile.mp4';
import webmMobile from './carbon-mobile.webm';
import poster from './poster.png';

const HomepageVideo = () => {
  const videoRef = useRef();
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const onClick = () => {
    if (videoRef.current) {
      if (paused) {
        setPaused(false);
        videoRef.current.play();
      } else {
        setPaused(true);
        videoRef.current.pause();
      }
    }
  };

  // const { children } = this.props;

  return (
    <div className="homepage-video--main">
      <div className="homepage-video--wrapper">
        <video poster={poster} ref={videoRef} muted autoPlay playsInline loop>
          <source
            src={webmMobile}
            type="video/webm"
            media="all and (max-width: 600px)"
          />
          <source
            src={mp4Mobile}
            type="video/mp4"
            media="all and (max-width: 600px)"
          />
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      <div className="homepage--video--overlay" />
      <button
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        aria-label="play pause toggle"
        className="homepage-video--controls"
        onClick={onClick}>
        <ToggleIcon hovering={hovering} paused={paused} />
      </button>
    </div>
  );
};

export default HomepageVideo;
