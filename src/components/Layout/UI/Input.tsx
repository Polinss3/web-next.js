// components/Input.tsx
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex justify-end mt-5 mb-5">
      <input
        {...props}
        className="h-full min-h-[54px] w-full rounded-lg border px-4 py-2 text-md font-medium focus:outline-none border-zinc-800 bg-transparent text-white placeholder:text-zinc-400"
      />
    </div>
  );
};

export default Input;
