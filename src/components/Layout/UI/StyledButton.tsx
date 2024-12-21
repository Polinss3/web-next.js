// components/StyledButton.tsx
import React from 'react';

interface StyledButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`flex justify-center items-center bg-white text-primary px-5 py-2 mt-4 rounded-md no-underline ${className}`}
  >
    {children}
  </button>
);

export default StyledButton;