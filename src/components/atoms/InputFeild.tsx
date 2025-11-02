import React from "react";

const InputFeild = ({
  label,
  type,
  name,
  zodErrors,
}: {
  label: string;
  type: string;
  name?: string;
  zodErrors?: string[];
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
        className={`${
          zodErrors && zodErrors.length > 0 ? "" : "mb-3"
        } w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm px-2`}
      />
      {zodErrors && zodErrors.length > 0 && (
        <div
          className={`text-red-600 text-[0.75rem] leading-1 ${
            zodErrors && zodErrors.length > 0 && "mb-3"
          }`}
        >
          {zodErrors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </label>
  );
};

export default InputFeild;
