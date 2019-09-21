/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react';
import mp4 from './carbon.mp4';
import webm from './carbon.webm';
import ToggleIcon from './ToggleIcon';

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
        <video ref={videoRef} muted autoPlay playsInline loop>
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
