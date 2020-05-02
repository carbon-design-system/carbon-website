import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const FeedbackDialog = ({ props }) => {
  const onSubmit = async (data) => {
    fetch('https://carbondesignsystem.now.sh/api/survey', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      mode: 'no-cors',
    });
  };

  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
};

export default FeedbackDialog;
