import React from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <h2 className="text-brand-primary tracking-widest text-5xl mb-6">
        {title}
      </h2>
      {subtitle && <h3 className="text-3xl mb-14">{subtitle}</h3>}
    </>
  );
};

export default Heading;
