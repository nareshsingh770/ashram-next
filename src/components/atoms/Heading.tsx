import React from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <h2 className="text-brand-primary tracking-widest text-4xl mb-2">
        {title}
      </h2>
      {subtitle && <h3 className="text-2xl mb-6">{subtitle}</h3>}
    </>
  );
};

export default Heading;
