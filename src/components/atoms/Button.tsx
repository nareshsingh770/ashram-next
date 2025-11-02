import Link from "next/link";
import React from "react";

const Button = ({
  text,
  classnames,
  isPrimary,
  type = "button",
  href,
  disabled = false,
}: {
  text: string;
  classnames?: string;
  isPrimary?: boolean;
  type?: "button" | "submit";
  href?: string;
  disabled?: boolean;
}) => {
  const baseClassName = `${
    isPrimary ? "btn-brand-primary" : "btn-brand-secondary"
  } ${classnames}`;

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClassName} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
