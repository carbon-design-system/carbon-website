import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * Simple state manager for modals.
 */
const ModalStateManager = ({ renderLauncher, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!children || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(children({ open, setOpen }), document.body)}
      {renderLauncher && renderLauncher({ open, setOpen })}
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
