import React, { useState } from "react";

const Index = () => {
  const [donation, setDonation] = useState(0);
  const goal = 15000;

  function selectAmount(value: number) {
    setDonation(value);
  }
  return (
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
  );
};

export default Index;
