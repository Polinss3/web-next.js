import React, { TextareaHTMLAttributes } from "react";

interface StyledTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const StyledTextArea: React.FC<StyledTextAreaProps> = (props) => {
  return (
    <div className="flex justify-end mt-5 mb-5">
      <textarea
        {...props}
        className="h-full min-h-[54px] w-full rounded-lg border px-4 py-2 text-md font-medium focus:outline-none border-zinc-800 bg-transparent text-white placeholder:text-zinc-400"
      />
    </div>
  );
};

export default StyledTextArea;
