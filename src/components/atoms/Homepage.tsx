"use client";
import React, { useState } from "react";
import Programs from "../modules/Programs";
import About from "@/components/modules/About";
import UpcomingEvent from "@/components/modules/UpcomingEvent";
import Features from "../modules/Features";
import Donation from "../modules/Donation";
import Hero from "../modules/Hero";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Programs */}
      <Programs />

      {/* About */}
      <About />

      {/* Events */}
      <UpcomingEvent />

      {/* Feature Grid */}
      <Features />

      {/* Donation */}
      <Donation />

      {/* CTA / Subscribe */}
      {/* <section className="bg-linear-to-t from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl  mb-4">Learn To Be Sustainably Happy!</h2>
          <p className="text-slate-300 mb-6">
            Join our newsletter to receive updates, courses and upcoming events.
          </p>

          <form className="flex flex-col md:flex-row items-center gap-3 justify-center">
            <input
              className="p-3 rounded-full w-full md:w-1/3 text-slate-800"
              placeholder="Name"
            />
            <input
              className="p-3 rounded-full w-full md:w-1/3 text-slate-800"
              placeholder="Mobile Number"
            />
            <input
              className="p-3 rounded-full w-full md:w-1/3 text-slate-800"
              placeholder="Email Address"
            />
          </form>

          <div className="mt-4 text-sm">
            <label className="flex items-center gap-2 justify-center text-slate-300">
              <input type="checkbox" className="h-4 w-4" />I agree that my
              submitted data is being collected and stored.
            </label>
          </div>

          <div className="mt-6">
            <button className="bg-white text-slate-900 px-6 py-2 rounded-full">
              Register Now
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
