import React from 'react';
import PropTypes from "prop-types";

/**
 * KalturaVideo component: A video player container for Kaltura videos.
 *
 * @param {string} videoid - The ID of the Kaltura video to be played.
 * @returns {JSX.Element} JSX element containing the video player container.
 */
const KalturaVideo = ({ videoid }) => {
    return (
        <div>
            <dds-video-player-container video-id={videoid}></dds-video-player-container>
        </div>
    );
};

/**
 * @typedef {object} KalturaVideoProps
 *
 * @property {string} videoid - The ID of the Kaltura video to be played.
 */
KalturaVideo.propTypes = {
    videoid: PropTypes.string,
};

export default KalturaVideo;
