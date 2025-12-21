"use client"
import React, { useState } from "react";
import Image from "next/image";
import {ArrowRight, ArrowLeft, Star} from "lucide-react"

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const stories = [
    {
      id: 1,
      name: "Raghav Arora",
      rating: 4,
      stars: 5,
      image: "/profile1.png",
      testimonial: "Before joining Fitterify, I struggled with staying consistent. The structured programs and trainer support helped me stay focused and drop 6kg while building real strength."
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4.5,
      stars: 5,
      image: "/profile2.png",
      testimonial: "Fitterify transformed my approach to fitness. The personalized workout plans and nutrition guidance helped me achieve results I never thought possible. Down 8kg and feeling stronger than ever!"
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 3.5,
      stars: 5,
      image: "/profile3.png",
      testimonial: "As a busy professional, I needed flexible workouts. Fitterify's trainers understood my schedule and created programs that fit my life. Lost 5kg and gained so much energy!"
    },
    {
      id: 4,
      name: "Neha Kapoor",
      rating: 4.7,
      stars: 5,
      image: "/profile4.png",
      testimonial: "The community at Fitterify is incredible. Having a support system made all the difference in my fitness journey. I've never felt more motivated and confident in my body."
    },
    {
      id: 5,
      name: "Vikram Singh",
      rating: 4.6,
      stars: 5,
      image: "/profile5.png",
      testimonial: "From struggling with basic exercises to completing my first marathon, Fitterify has been with me every step. The expert guidance and encouragement pushed me beyond my limits."
    }
  ];
    const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = stories[currentIndex];
  return (
    <section className="w-full bg-[#EF3B2D] px-6 md:px-24 py-8 md:py-16">
      <div className="max-w-[1300px] md:mx-auto flex flex-col md:flex-row justify-between items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <span className="inline-block bg-white/20 text-white font-extrabold uppercase text-sm px-4 py-3 rounded-full mb-6">
            Member Stories
          </span>
          <h2 className="text-white text-2xl md:text-4xl font-extrabold leading-snug mb-6">
            What Our Members Say <br />
            About Their Fitterify <br />
            Experience
          </h2>
          <p className="text-[#FFFFFFC2] text-base max-w-md mb-10 font-poppins">
            From first-timers to experienced athletes — our members share how
            Fitterify changed their journey.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-lg text-white pt-4 md:pt-14">
          <p className="text-lg w-full font-poppins text-[#FFFFFFC2] md:w-sm leading-relaxed mb-8 min-h-[140px]">
            {currentStory.testimonial}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-black font-bold text-xl">
                {currentStory.name.charAt(0)}
              </div>
            </div>
            <div>
              <p className="font-semibold">{currentStory.name}</p>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => {
                  const rating = currentStory.rating;
                  if (i < Math.floor(rating)) {
                    return <Star key={i} size={15} fill="white" className="text-white"/>;
                  } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                    return (
                      <div key={i} className="relative">
                        <Star size={15} className="text-white" />
                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                          <Star size={15} fill="white" className="text-white"/>
                        </div>
                      </div>
                    );
                  } else {
                    return <Star key={i} size={15} className="text-white"/>;
                  }
                })}
                <span className="text-white/80 ml-1">({currentStory.rating})</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-start gap-6 mt-6 md:mt-4">
          <div className="flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-4 my-2">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={15} className="text-black text-lg"/>
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ArrowRight size={15} className="text-black text-lg"/>
            </button>
            </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Stories;
