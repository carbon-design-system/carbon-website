import React from 'react';
import PropTypes from "prop-types";

/**
 * KalturaVideo component: A video player container for Kaltura videos.
 *
 * @param {object} videoProps - KalturaVideo component props
 * @param {string} videoProps.videoid - The ID of the Kaltura video to be played.
 * @param {boolean} videoProps.hideCaption - Determines if caption should be hidden.
 * @returns {JSX.Element} JSX element containing the video player container.
 */
const KalturaVideo = ({ videoid, hideCaption = false }) => {
    let videoProps = {
        'video-id': videoid,
    }

    if (hideCaption) {
        videoProps['hide-caption'] = true;
    }

    return (
        <div>
            <dds-video-player-container {...videoProps}></dds-video-player-container>
        </div>
    );
};

/**
 * @typedef {object} KalturaVideoProps
 *
 * @property {string} videoid - The ID of the Kaltura video to be played.
 */
KalturaVideo.propTypes = {
    hideCaption: PropTypes.bool,
    videoid: PropTypes.string.isRequired,
};

/**
 * @type {{hideCaption: boolean}}
 */
KalturaVideo.defaultProps = {
    hideCaption: false,
}

export default KalturaVideo;
