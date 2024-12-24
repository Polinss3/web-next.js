import React, { SelectHTMLAttributes } from "react";

interface StyledSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const StyledSelect: React.FC<StyledSelectProps> = (props) => {
  return (
    <div className="flex justify-end mt-5 mb-5">
      <select
        {...props}
        className="h-full min-h-[54px] w-full rounded-lg border px-4 py-2 text-md font-medium focus:outline-none border-zinc-800 bg-transparent text-white placeholder:text-zinc-400"
      >
        {props.children}
      </select>
    </div>
  );
};

export default StyledSelect;
