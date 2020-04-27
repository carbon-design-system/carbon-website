import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * Simple state manager for modals.
 */
const ModalStateManager = ({
  renderLauncher: LauncherContent,
  children: ModalContent,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!ModalContent || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
            <ModalContent open={open} setOpen={setOpen} />,
            document.body
          )}
      {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
    </>
  );
};

ModalStateManager.propTypes = {
  children: PropTypes.elementType,

  /**
   * The component to render the launcher UI.
   */
  renderLauncher: PropTypes.elementType,
};

export default ModalStateManager;
