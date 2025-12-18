import React from "react";
import Image from "next/image";
import {BadgeCheck} from "lucide-react"

const TargetAud = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-[1300px] mx-auto px-4 xl:px-24 lg:px-8 2xl:px-6  grid md:grid-cols-2 gap-12 xl:gap-8 2xl:gap-12 items-start justify-between">

        {/* LEFT SIDE CONTENT */}
        <div className="w-[90vw] md:w-auto">
          <div className="inline-flex items-center px-4 py-4 rounded-full bg-[#2A2A2A] text-[#EE3324] text-sm mb-6">
            Who This Is For
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4">
            <span className="text-white">For Everybody who Wants</span><br />
            & to<span className="text-[#EE3324]"> live Healthy</span>
          </h2>

          <p className="text-gray-300 w-[80vw] md:max-w-md mb-15 lg:mb-10 xl:mb-15">
            People seeking long-term health, not quick fixes. <br />
            Communities investing in wellness infrastructure.
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:w-[500px]">
            <div className="text-[#EE3324] font-semibold text-sm md:text-lg lg:text-sm xl:text-base px-4 py-3 text-center bg-[#131313] rounded-xl">Busy Urban Professionals</div>
            <div className="text-[#EE3324] font-semibold text-sm md:text-lg lg:text-sm xl:text-base px-4 py-3 text-center bg-[#131313] rounded-xl">Consistency Seekers</div>
            <div className="text-[#EE3324] font-semibold text-sm md:text-lg lg:text-sm xl:text-base px-4 py-3 text-center bg-[#131313] rounded-xl">Longevity & Preventive Users</div>
            <div className="text-[#EE3324] font-semibold text-xs md:text-lg lg:text-sm xl:text-base px-4 py-3 text-center bg-[#131313] rounded-xl">High-Performance Lifestyles</div>
            <div className="text-[#EE3324] col-span-2 font-semibold text-sm md:text-lg lg:text-sm xl:text-base px-4 py-3 text-center bg-[#131313] rounded-xl">Guidance-Driven Users</div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-[85vw] md:w-[35vw] lg:w-[38vw] xl:w-[38vw] 2xl:w-[35vw]">
          <div className="absolute -top-2.5 2xl:top-[-5px] left-1 lg:left-2 2xl:left-4 w-20 h-20 md:w-28 md:h-28 lg:w-22 lg:h-22 xl:w-28 xl:h-28 bg-[#EE3324] rounded-full flex items-center justify-center">
          <div className="w-15 h-15 md:w-21 md:h-21 lg:w-16 lg:h-16 xl:w-21 xl:h-21 bg-transparent rounded-full flex items-center justify-center ring-2 ring-white">     
            <div className="w-10 h-10 rounded-full md:w-15 md:h-15 lg:w-8 lg:h-8 xl:w-15 xl:h-15 bg-white flex items-center justify-center">
                <Image src="/footer-logo.png" alt="footer-logo" width={500} height={500} className="w-5 md:w-10 lg:w-5 xl:w-10"/>
            </div>
          </div>            
          </div>
          <Image
            src="/pickleball.png"
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
