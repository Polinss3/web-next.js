// components/StyledLink.tsx
import React from 'react';

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children, className = '' }) => (
  <a
    href={href}
    className={`flex items-center bg-white text-primary px-5 py-2 mt-4 rounded-md no-underline ${className}`}
  >
    {children}
  </a>
);

export default StyledLink;