import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { NAV_BAR_ITEMS } from "@/constant/appConstant";
import Button from "../atoms/Button";

const Header = () => {
  return (
    <div className="mb-20">
      {/* <LocaleSwitcher /> */}
      <header className="fixed top-0 right-0 left-0 z-50 bg-slate-900/80 backdrop-blur-md h-20">
        <div
          className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-800/40 to-transparent pointer-events-none bg-cover bg-center"
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
              Sh. Kapil Kanan
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
      </header>
    </div>
  );
};

export default Header;
