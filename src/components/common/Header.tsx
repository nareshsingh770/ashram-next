import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { NAV_BAR_ITEMS } from "@/constant/appConstant";
import Button from "../atoms/Button";

const Header = () => {
  return (
    <div>
      {/* <LocaleSwitcher /> */}
      <header className="relative">
        <div
          className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-800/40 to-transparent pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header-bg.png')" }}
          aria-hidden
        />
        <nav className="relative layout-spacing py-6 flex items-center justify-between z-10">
          <ul className="hidden md:flex gap-8 text-sm text-slate-200">
            {NAV_BAR_ITEMS.map((item) => (
              <li
                key={item.title}
                className="hover:text-white text-xl cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <div className="text-white font-bold text-xl md:text-2xl">
              VIHARA
            </div>
            <div className="text-xs text-slate-300">
              Meditation & Spirituality
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="text-sm bg-slate-700/50 text-white px-4 py-2 rounded-full hover:bg-slate-700">
              Search
            </button>
            <button className="text-sm bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700">
              Donate
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          <div className="layout-spacing py-24 relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-left text-slate-100">
              <h1 className="text-4xl md:text-5xl  font-semibold leading-tight mb-4">
                Venerable Shinomori Aoshi
              </h1>
              <p className="max-w-xl text-slate-200 mb-6">
                We welcome everyone who seeks to gain happiness and inner peace,
                through the study, meditation and practice of Buddhist
                teachings.
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
      </header>
    </div>
  );
};

export default Header;
