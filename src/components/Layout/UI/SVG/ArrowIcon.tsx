// components/Layout/UI/SVG/ArrowIcon.tsx
import React from 'react';

const ArrowIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 text-primary ${className}`}
  >
    <g transform="translate(24 24) rotate(180)">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 6H11a1 1 0 00-.78.375l-4 5a1 1 0 000 1.25l4 5A1 1 0 0011 18h6a1 1 0 00.78-1.625L14.28 12l3.5-4.375A1 1 0 0017 6z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default ArrowIcon;