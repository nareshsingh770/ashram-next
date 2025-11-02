import Button from "@/components/atoms/Button";
import React from "react";

const index = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/header-bg.png')",
      }}
    >
      <div className="layout-spacing py-24 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-left text-slate-100">
          <h1 className="text-4xl md:text-5xl  font-semibold leading-tight mb-4">
            Venerable Shinomori Aoshi
          </h1>
          <p className="max-w-xl text-slate-200 mb-6">
            We welcome everyone who seeks to gain happiness and inner peace,
            through the study, meditation and practice of Buddhist teachings.
          </p>
          <div className="flex gap-4">
            <Button text="Learn More" isPrimary />
            <Button classnames="btn-brand-secondary" text="Programs" />
          </div>
        </div>

        {/* Floating monk image on the right */}
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
          <img
            src="/images/monk.png"
            alt="Teacher"
            className="w-56 md:w-72 transform translate-y-6"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
