"use client";
import React, { useState } from "react";
import Programs from "./modules/Programs";
import About from "./modules/About";

const events = [
  {
    id: 1,
    date: "13",
    month: "Jul",
    title: "Honoring Yogi Bhajan's Birthday 2020",
    time: "8:00 am",
    img: "/images/event1.jpg",
  },
  {
    id: 2,
    date: "06",
    month: "Aug",
    title: "Gong Yoga Relaxation and Meditation",
    time: "9:00 am",
    img: "/images/event2.jpg",
  },
  {
    id: 3,
    date: "19",
    month: "Sep",
    title: "September New Moon Gong",
    time: "7:00 am",
    img: "/images/event3.jpg",
  },
  {
    id: 4,
    date: "09",
    month: "Oct",
    title: "Kundalini Yoga to Melt Unhealthy Habits",
    time: "6:30 am",
    img: "/images/event4.jpg",
  },
];

export default function Home() {
  const [donation, setDonation] = useState(0);
  const goal = 15000;

  function selectAmount(value: number) {
    setDonation(value);
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Programs */}
      <Programs />

      {/* About */}
      <About />

      {/* Events */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-sky-400 tracking-widest text-sm mb-2">EVENTS</h3>
          <h2 className="text-3xl  mb-8">Upcoming Events And Workshops</h2>

          <div className="space-y-4">
            {events.map((e) => (
              <div
                key={e.id}
                className="flex items-center bg-white rounded shadow-sm overflow-hidden"
              >
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-28 h-20 object-cover"
                />
                <div className="px-4 py-3 flex-1">
                  <div className="flex items-baseline gap-4">
                    <div className="text-sm text-sky-500 font-semibold">
                      <div className="text-xl font-bold">{e.date}</div>
                      <div className="text-xs uppercase">{e.month}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {e.title}
                      </h4>
                      <p className="text-xs text-slate-500">{e.time}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6">
                  <button className="bg-slate-700 text-white px-4 py-2 rounded-full">
                    Info
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center mt-6">
              <button className="bg-slate-700 text-white px-6 py-2 rounded-full">
                More Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative rounded overflow-hidden h-64">
            <img
              src="/images/feature1.jpg"
              alt="feature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent flex items-end p-6">
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Know the Basic Tenets With Traditional Definitions.
                </h4>
                <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded overflow-hidden h-64">
            <img
              src="/images/feature2.jpg"
              alt="feature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent flex items-end p-6">
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Learn and Practice Hindu Tradition and Culture.
                </h4>
                <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded overflow-hidden h-64">
            <img
              src="/images/feature3.jpg"
              alt="feature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent flex items-end p-6">
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Understand the Concepts With Orthodox Interpretation.
                </h4>
                <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-sky-400 text-sm tracking-widest mb-2">
              DONATION
            </h3>
            <h2 className="text-2xl md:text-3xl  mb-4">qwerty</h2>
            <p className="text-slate-600 mb-6">
              Donations are essential to support the teaching project and help
              sustain community programs, retreats and outreach.
            </p>

            <div className="bg-white p-6 rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-slate-500">Raised</div>
                  <div className="text-xl font-semibold">
                    ${donation?.toLocaleString() || "0"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Goal</div>
                  <div className="text-sm">${goal.toLocaleString()}</div>
                </div>
              </div>

              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-4">
                <div
                  className="h-3 bg-sky-500 rounded-full"
                  style={{
                    width: `${Math.min(100, (donation / goal) * 100)}%`,
                  }}
                />
              </div>

              <div className="flex gap-3 flex-wrap mb-4">
                {[25, 50, 100, 250].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => selectAmount(amt)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      donation === amt
                        ? "bg-sky-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
                <button
                  onClick={() => selectAmount(0)}
                  className="px-4 py-2 rounded-full text-sm bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  Custom
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 border rounded"
                />
              </div>

              <div className="mt-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4" />I agree that my
                  submitted data is being collected and stored.
                </label>
              </div>

              <div className="mt-4">
                <button className="bg-sky-600 text-white px-6 py-2 rounded-full">
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          {/* Right image or testimonial area */}
          <div className="flex items-center justify-center">
            <img
              src="/images/donation-illustration.jpg"
              alt="donation"
              className="w-full rounded shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA / Subscribe */}
      <section className="bg-linear-to-t from-slate-900 to-slate-800 text-white py-14">
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
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-white font-bold">VIHARA</div>
            <div className="text-xs">ThemeWXX © 2025. All Rights Reserved.</div>
          </div>
          <div className="flex gap-6 text-sm">
            <span>Home</span>
            <span>Programs</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
