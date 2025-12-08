"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";


const Coaches = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prev) =>
    prev === 0 ? trainers.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
  setActiveIndex((prev) =>
    prev === trainers.length - 1 ? 0 : prev + 1
    );
  };

  const trainers = [
  {
    name: "Liam Carter",
    role: "HIIT & Fat Loss Expert",
    img: "/trainer1.png",
  },
  {
    name: "Ava Mitchell",
    role: "Strength & Conditioning Coach",
    img: "/trainer2.png",
  },
  {
    name: "Smith Hernandez",
    role: "Weight Loss & Toning Expert",
    img: "/trainer3.png",
  },
];
  // ★ Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === trainers.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [trainers.length]);
  return (
    <section className="w-full bg-[#1a1a19] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">

        <span className="inline-block bg-[#EE3324] font-semibold text-sm px-5 py-2 rounded-full mb-6">
          Meet Our Coaches
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Expert <span className="text-[#EE3324]">Trainers</span> Who Inspire Results
        </h2>
        <p className="text-[#EDEDED] max-w-2xl mx-auto mb-16">
          Every Fitterify coach is certified, committed, and here to help you push
          limits whether you&apos;re just getting started or chasing your next PR.
        </p>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="flex flex-col items-center">
              <div className="rounded-2xl bg-transparent w-full max-w-[260px] relative">
                <Image src="/Pattern.png" alt="pattern" width={500} height={500} className="w-full h-[360px] object-cover" />
                <Image src={trainer.img} alt="trainer" width={1000} height={1000} className="w-full h-[360px] absolute  top-[-15px] left-[-15px]"/>
              </div>

              <h4 className="mt-6 font-bold">{trainer.name}</h4>
              <p className="text-sm text-white">{trainer.role}</p>
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden relative">
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2"        viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="overflow-x-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {trainers.map((trainer) => (
                <div key={trainer.name} className="min-w-full flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="rounded-2xl bg-transparent w-[260px] relative">
                      <Image
                        src="/Pattern.png"
                        alt="pattern"
                        width={500}
                        height={500}
                        className="w-full h-[360px] object-cover"
                      />
                      <Image
                        src={trainer.img}
                        alt="trainer"
                        width={1000}
                        height={1000}
                        className="w-full h-[360px] absolute top-[-15px] left-[-15px]"
                      />
                    </div>
              
                    <h4 className="mt-4 font-semibold">{trainer.name}</h4>
                    <p className="text-sm text-gray-400">{trainer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            
          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {trainers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  activeIndex === index ? "bg-[#EE3324] px-4" : "bg-gray-600"
               }`}
              />
            ))}
          </div>
          
        </div>

        <div className="hidden md:flex justify-center mt-20">
          <button className="bg-[#717171] hover:bg-gray-600 transition text-sm px-6 py-3 rounded-full">
            View All Trainers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
