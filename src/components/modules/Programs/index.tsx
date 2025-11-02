import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import React from "react";

const Index = () => {
  const programs = [
    {
      title: "The Happiness Program",
      desc: "Powerful teaching techniques and practices. A mix of meditation and yoga to improve overall wellbeing.",
      img: "/images/programs-1.jpg",
    },
    {
      title: "Sihaj Samadhi Meditation",
      desc: "Experience deep inner peace with guided sessions that build focus and calm over time.",
      img: "/images/programs-1.jpg",
    },
    {
      title: "Advanced Meditation Program",
      desc: "For those who want a structured path to deepen their meditation practice and insight.",
      img: "/images/programs-1.jpg",
    },
  ];
  return (
    <section className="bg-slate-50 py-16">
      <div className="layout-spacing text-center">
        <Heading
          title="PROGRAMS"
          subtitle="Meditation, Yoga, Retreats, Free Programs & More..."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="font-semibold text-slate-800 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{p.desc}</p>
                <Button text="Know More" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
