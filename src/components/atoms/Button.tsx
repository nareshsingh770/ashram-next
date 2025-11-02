import Link from "next/link";
import React from "react";

const Button = ({
  text,
  classnames,
  isPrimary,
  type = "button",
  href,
}: {
  text: string;
  classnames?: string;
  isPrimary?: boolean;
  type?: "button" | "submit";
  href?: string;
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
    <button className={baseClassName} type={type}>
      {text}
    </button>
  );
};

export default Button;
