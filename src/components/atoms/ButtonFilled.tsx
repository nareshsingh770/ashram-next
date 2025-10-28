import React from "react";

const ButtonFilled = ({
  children,
  classnames,
  type = "button",
}: {
  children: React.ReactNode;
  classnames?: string;
  type?: "button" | "submit";
}) => {
  return (
    <>
      <button
        className={`inline-block cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden ${classnames}`}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonFilled;
