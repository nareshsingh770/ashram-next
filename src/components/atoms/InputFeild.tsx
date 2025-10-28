import React from "react";

const InputFeild = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name?: string;
}) => {
  const inputName = name || label;

  return (
    <label htmlFor={inputName}>
      <span className="text-sm font-medium text-gray-700"> {label} </span>
      <input
        type={type}
        id={inputName}
        name={inputName}
        autoComplete="on"
        className="mb-3 w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm px-2"
      />
    </label>
  );
};

export default InputFeild;
