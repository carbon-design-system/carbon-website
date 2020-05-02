import React from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';

const FeedbackDialog = ({ props }) => {
  const onSubmit = async (data) => {
    const res = await fetch('/api/survey', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      mode: 'no-cors',
    });
    const result = await res.json();
    console.log(JSON.stringify(result, null, 2));
  };

  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;
};

export default FeedbackDialog;
