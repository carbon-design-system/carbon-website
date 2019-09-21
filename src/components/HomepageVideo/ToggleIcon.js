import React from 'react';

const Pause = ({ hovering }) =>
  hovering ? (
    <svg
      className="mouseIn"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32">
      <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,22H12V10h2Zm6,0H18V10h2Z" />
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        className="cls-1"
        width="32"
        height="32"
      />
    </svg>
  ) : (
    <svg
      className="mouseOut"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32">
      <path d="M14 10h-2v12h2V10zm6 0h-2v12h2V10z" />
      <path d="M16 4A12 12 0 1 1 4 16 12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z" />
    </svg>
  );

const Play = ({ hovering }) =>
  hovering ? (
    <svg
      className="mouseIn"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32">
      <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm7.48,14.88-11,6a1,1,0,0,1-1,0A1,1,0,0,1,11,22V10a1,1,0,0,1,.49-.86,1,1,0,0,1,1,0l11,6a1,1,0,0,1,0,1.76Z" />
      <polygon points="13 20.32 20.91 16 13 11.69 13 20.32" />
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        className="cls-1"
        width="32"
        height="32"
      />
    </svg>
  ) : (
    <svg
      className="mouseOut"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32">
      <path d="M16 4A12 12 0 1 1 4 16 12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z" />
      <path d="M12 23a1 1 0 0 1-.51-.14A1 1 0 0 1 11 22V10a1 1 0 0 1 .49-.86 1 1 0 0 1 1 0l11 6a1 1 0 0 1 0 1.76l-11 6a1 1 0 0 1-.49.1zm1-11.32v8.64L20.91 16z" />
    </svg>
  );

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

export default ToggleIcon;
