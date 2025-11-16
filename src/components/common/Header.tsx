"use client";
import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { NAV_BAR_ITEMS } from "@/constant/appConstant";
import Button from "../atoms/Button";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Header = () => {
  const { isAuthenticated, userDetails, logout } = useAuth();
  console.log(userDetails, "userDetails in header");
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

          <div className="hidden md:flex gap-4 items-center">
            <button className="text-sm bg-slate-700/50 text-white px-4 py-2 rounded-full hover:bg-slate-700">
              Search
            </button>
            <button className="text-sm bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700">
              Donate
            </button>
            <LocaleSwitcher />

            {isAuthenticated && userDetails ? (
              <div className="flex items-center gap-3">
                <span className="text-white text-sm">
                  Welcome, {userDetails.name}
                </span>
                <button
                  onClick={logout}
                  className="text-sm bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
