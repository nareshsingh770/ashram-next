import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";
import React from "react";

const Index = () => {
  const t = useTranslations("home");
  return (
    <section
      className="relative bg-cover bg-center h-[700px]"
      style={{
        backgroundImage: "url('/images/header-bg.png')",
      }}
    >
      <div className="layout-spacing py-24 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-left text-slate-100">
          <h1 className="text-4xl md:text-5xl  font-semibold leading-tight mb-4">
            {t("welcome")}
          </h1>
          <p className="max-w-xl text-slate-200 mb-6">{t("description")}</p>
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

export default Index;
