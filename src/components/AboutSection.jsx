"use client"
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

function CountUp({ end }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const increment = end / (duration / 16);

          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          animate();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
}

const AboutSection = () => {
  return (
    <div id="about" className="w-full bg-[#050505] py-24 px-6 xl:px-20 2xl:px-6 flex justify-center">
      <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
        <div>
          <p className="text-xs font-semibold text-[#EE3324] bg-[#1a1a1a] w-fit px-3 py-3 rounded-full">
            About Fitterily
          </p>

          <h2 className="text-4xl lg:text-3xl xl:text-4xl font-bold text-white leading-snug">
            Discover a Company <br />
            That Trains You <br />
            to Be{" "}
            <span className="text-[#EE3324]">Stronger</span>,{" "}
            <span className="text-[#EE3324]">Fitter</span>, and More{" "}
            <span className="text-[#EE3324]">Focused</span>
          </h2>
        </div>
        <div className="bg-[#717171] w-full md:w-80 px-4  py-5 text-center flex flex-row md:flex-col justify-between items-center shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center mb-4">
            <Image src="/barbell.png" alt="icon" width={24} height={24} />
          </div>

          <p className="text-[#FFFFFF] text-base w-20 md:w-auto md:text-xl font-semibold">
            Trusted by Over <br />
            <CountUp end={1000} /> Members
          </p>
          <div className="flex items-center md:mt-6">
            <Image
              src="/profile1.png"
              alt="p1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white ml-0"
            />
            <Image
              src="/profile2.png"
              alt="p2"
              width={40}
              height={40}
              className="rounded-full border-2 border-white -ml-3"
            />
            <Image
              src="/profile3.png"
              alt="p3"
              width={40}
              height={40}
              className="rounded-full border-2 border-white -ml-3"
            />
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center -ml-3 text-sm font-semibold">
              +1K
            </div>
          </div>
        </div>
        <div className="text-[#EDEDED] text-[15px] leading-3 md:pr-8 ">
          <p className="font-literata text-lg lg:text-base xl:text-lg leading-6">
            At Fitterify, our community isn’t just showing up — they’re leveling up. From newcomers to elite athletes, every member pushes harder, lifts stronger, and supports one another through every rep.
          </p>

          <button className="mt-6 md:mt-10 px-6 py-3 border w-full border-white rounded-full font-bold text-white flex items-center justify-between gap-2 hover:bg-white hover:text-black transition">
            Read More About Us
            <Image
              src="/home-cta.png"
              alt="arrow"
              width={14}
              height={14} className="w-5"
                          
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
