import React from "react";
import Image from "next/image";
import {ArrowRight, ArrowLeft, Star} from "lucide-react"

const Stories = () => {
  return (
    <section className="w-full bg-[#EF3B2D] px-6 md:px-24 py-8 md:py-16">
      <div className="max-w-[1300px] md:mx-auto flex flex-col md:flex-row justify-between items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <span className="inline-block bg-white/20 text-white text-sm px-4 py-3 rounded-full mb-6">
            Member Stories
          </span>
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug mb-6">
            What Our Members Say <br />
            About Their Fitterify <br />
            Experience
          </h2>
          <p className="text-[#FFFFFFC2] text-base max-w-md mb-10">
            From first-timers to experienced athletes — our members share how
            Fitterify changed their journey.
          </p>

          <div className="hidden md:flex gap-4">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ArrowLeft className="text-black text-lg"/>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="text-black text-lg"/>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-lg text-white pt-4 md:pt-14">
          <p className="text-lg w-full text-[#FFFFFFC2] md:w-sm leading-relaxed mb-8">
Before joining Fitvive, I struggled with staying consistent. The structured programs and trainer support helped me stay focused and drop 6kg while building real strength.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
              <Image
                src="/profile1.png"
                alt="Jake Wilson"
                 width={50} height={50}             
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">Jake Wilson</p>
              <div className="flex items-center gap-1 text-sm">
                <Star size={15} fill="white"/>
                <Star size={15} fill="white"/>
                <Star size={15} fill="white"/>
                <Star size={15} fill="white"/>
                <Star size={15} fill="white"/>
                <span className="text-white/80 ml-1">(4.8)</span>
              </div>
            </div>
          </div>
          <div className="flex md:hidden gap-4 mt-10">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ArrowLeft className="text-black text-lg"/>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="text-black text-lg"/>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stories;
