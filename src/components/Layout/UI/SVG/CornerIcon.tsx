import React from 'react';

interface CornerIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const CornerIcon: React.FC<CornerIconProps> = ({ className = '', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={`text-primary ${className}`}
    style={style}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20V4h16" />
  </svg>
);

export default CornerIcon;