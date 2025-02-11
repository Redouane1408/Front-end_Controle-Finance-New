import * as React from "react";
// type
//import { InputFieldProps } from "../../types/types";

export type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
};
export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  id,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-3 text-sm text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-[46px] w-full rounded-2xl border border-solid border-slate-200 px-5 py-0 text-sm text-slate-400"
        aria-label={label}
      />
    </div>
  );
};
