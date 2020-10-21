import styles from './FeedbackDialog.module.scss';

import cx from 'classnames';
import React, { useState } from 'react';
import ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';
import Form from 'gatsby-theme-carbon/src/components/FeedbackDialog/Form';

function onSubmit(data) {
  if (process.env.NODE_ENV === 'production') {
    return fetch(process.env.BACKEND_URI, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      mode: 'no-cors',
    });
  }
}

function FeedbackDialog({ props }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Form onSubmit={onSubmit} setVisible={setVisible} visible={visible} />
      <LaunchButton
        visible={visible}
        icon={SpookyScaryIcon}
        onClick={() => setVisible(!visible)}
      />
    </>
  );
}

function LaunchButton({ onClick, visible, icon: Icon }) {
  const classNames = cx(styles.button, {
    [styles.selected]: visible,
  });

  return (
    <button
      type="button"
      aria-haspopup
      className={classNames}
      onClick={onClick}
      aria-label="This launches a modal form to give website feedback.">
      <Icon />
    </button>
  );
}

function SpookyScaryIcon() {
  return (
    <svg
      className="spooky_scary-icon"
      width="36"
      height="24"
      viewBox="0 0 48 32">
      <title>Halloween</title>
      <g><path d="M18.792 19.031h10.752v-2.7H18.792zM18.792 24.431h10.752v-2.7H18.792zM24.168 10.931a5.368 5.368 0 0 1 4.655 2.7h-9.31a5.368 5.368 0 0 1 4.655-2.7M24.168 29.831a5.368 5.368 0 0 1-4.655-2.7h9.31a5.368 5.368 0 0 1-4.655 2.7M24.84 7.894a2.357 2.357 0 0 0 2.352 2.362 2.357 2.357 0 0 0 2.352-2.362 2.357 2.357 0 0 0-2.352-2.363 2.357 2.357 0 0 0-2.352 2.363M23.496 7.894a2.357 2.357 0 0 1-2.352 2.362 2.357 2.357 0 0 1-2.352-2.362 2.357 2.357 0 0 1 2.352-2.363 2.357 2.357 0 0 1 2.352 2.363"/><path d="M19 11.374C15.255 9.335 14.205 6.211 15.848 2H1c4.347 2.59 5.725 6.545 4.134 11.863 4.698 1.58 7.047 4.96 7.047 10.137l5.187-3.978v-6.159c0-.706.544-1.535 1.632-2.489zM29 11.374C32.745 9.335 33.795 6.211 32.152 2H47c-4.347 2.59-5.725 6.545-4.134 11.863-4.698 1.58-7.047 4.96-7.047 10.137l-5.187-3.978v-6.159c0-.706-.544-1.535-1.632-2.489z" fillRule="nonzero"/></g>
    </svg>
  );
}

export default FeedbackDialog;