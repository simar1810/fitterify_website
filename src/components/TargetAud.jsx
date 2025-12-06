import React from "react";
import Image from "next/image";
import {BadgeCheck} from "lucide-react"

const TargetAud = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-[1300px] mx-auto px-4 xl:px-24 2xl:px-6  grid md:grid-cols-2 gap-12 xl:gap-8 2xl:gap-12 items-start justify-between">

        {/* LEFT SIDE CONTENT */}
        <div className="w-[90vw] md:w-auto">
          <div className="inline-flex items-center px-4 py-4 rounded-full bg-[#2A2A2A] text-[#EE3324] text-sm mb-6">
            Who This Is For
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-white">For Everybody who Wants</span><br />
            & to<span className="text-[#EE3324]"> live Healthy</span>
          </h2>

          <p className="text-gray-300 w-[80vw] md:max-w-md mb-15">
            People seeking long-term health, not quick fixes. <br />
            Communities investing in wellness infrastructure.
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:w-[500px]">
            <div className="text-[#EE3324] font-semibold text-sm md:text-lg px-4 py-3 text-center bg-[#131313] rounded-xl">Professionals</div>
            <div className="text-[#EE3324] font-semibold text-sm md:text-lg px-4 py-3 text-center bg-[#131313] rounded-xl">Entrepreneurs</div>
            <div className="text-[#EE3324] col-span-2 font-semibold text-sm md:text-lg px-4 py-3 text-center bg-[#131313] rounded-xl">High Performance Individuals</div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-[85vw] md:w-[35vw] xl:w-[38vw] 2xl:w-[35vw]">
          <Image
            src="/people-pickleball.png"
            width={2000}
            height={2000}
            alt="target audience"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </div>

      {/* PROBLEM & SOLUTION SECTION */}
      <div className="max-w-[1300px] mx-auto px-8 grid md:grid-cols-2 gap-8 mt-24">

        {/* PROBLEM CARD */}
        <div className="bg-[#1A1A1A] flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl py-8 px-4">
          <h3 className="text-white md:text-[#EE3324] font-bold text-xl mb-2 md:mb-6">The Problem</h3>

          <ul className="space-y-4 md:pl-6 border-t pt-5 md:pt-0 md:border-l md:border-t-0 border-gray-500 text-white font-medium">
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> Quietly powerful.</span></li>
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> Modern wellness is reactive.</span></li>
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> Most systems treat symptoms, not lifespan.</span></li>
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> We focus on preventive, measurable, sustainable living.</span></li>
          </ul>
        </div>

        {/* SOLUTION CARD */}
        <div className="bg-[#1A1A1A] flex flex-col md:flex-row items-start md:items-center gap-4 justify-between rounded-2xl py-8 px-4">
          <h3 className="text-white md:text-[#EE3324] font-bold text-xl mb-2 md:mb-6">Our Solution</h3>

          <ul className="space-y-4 md:pl-6 border-t pt-5 md:pt-0 md:border-l md:border-t-0 border-gray-500 text-white font-medium">
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> An integrated ecosystem</span></li>
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> Digital intelligence (App)</span></li>
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> Physical execution (Studios)</span></li>
            <li className="flex items-start justify-start gap-1 md:gap-2"><BadgeCheck size={15} className="mt-1"/><span> Human expertise (Coaches & Specialists)</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAud;
