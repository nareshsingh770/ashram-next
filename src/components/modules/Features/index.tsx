import Button from "@/components/atoms/Button";
import React from "react";

const index = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }, (_, i) => (
          <div className="relative rounded overflow-hidden h-64" key={i}>
            <img
              src={`/images/programs-1.jpg`}
              alt="feature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent flex items-end p-6">
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Learn and Practice Hindu Tradition and Culture.
                </h4>
                <Button
                  text={"Read More"}
                  classnames="mt-4 !px-4 !py-2 !rounded-full !text-sm"
                  isPrimary
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
