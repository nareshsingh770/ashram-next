import Heading from "@/components/atoms/Heading";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "@/components/atoms/Button";

const index = () => {
  return (
    <section className="relative bg-linear-to-b from-slate-800 to-slate-700 text-white py-20">
      <div className="layout-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center w-full">
            <div className="rounded-full overflow-hidden ring-8 ring-slate-900/40">
              <Image
                src="/images/profile-monk.jpg"
                alt="About"
                className="w-full h-full object-cover"
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="">
            <Heading
              title="ABOUT"
              subtitle="Learn About Venerable Shinomori Aoshi"
            />
            <p className="text-slate-200 max-w-2xl">
              Over the years Venerable Shinomori Aoshi has dedicated his life to
              public teaching, writing and guiding students towards inner peace.
              His approach connects ancient wisdom with modern practice.
            </p>
            <div className="mt-6">
              <Button text="More About" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
