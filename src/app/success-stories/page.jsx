"use client"
import NavbarRebound from '@/components/NavbarRebound'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const TestimonialCard = ({ name, quote, beforeImage, afterImage }) => {
  return (
    <div className="flex flex-col items-center px-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">{name}</h3>
      <p className="text-gray-600 text-center mb-6 px-4 max-w-sm">
        {quote}
      </p>
      <div className="relative w-full max-w-md">
        <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={beforeImage}
            alt={`${name} before`}
            width={500} height={500}
            className="w-full h-80 object-cover"
          />
          <Image
            src={afterImage}
            alt={`${name} after`} width={500} height={500}
            className="w-full h-80 object-cover"
          />
        </div>
    </div>
    </div>
  );
};
const Page = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
  }, []);
  const testimonials = [
    {
      name: "Rajan & Richa",
      quote: "As busy doctors with kids, Fitterify's easy-to-follow plans were a blessing!",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop"
    },
    {
      name: "Shilpa Mehta",
      quote: "Fitterify inspired me to defeat low energy & body pain and get shredded!",
      beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=600&fit=crop"
    },
    {
      name: "Dr Anirudh Deepak",
      quote: "At 194 kg, I felt like a ticking time bomb... but Fitterify gave me a new life!",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop"
    },
    {
      name: "Priya Sharma",
      quote: "Lost 25kg and gained confidence. Fitterify changed my life completely!",
      beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop"
    },
    {
      name: "Rahul Verma",
      quote: "From sedentary lifestyle to marathon runner. Thank you Fitterify!",
      beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop"
    }
    ];
    const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const handlePrevMobile = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };
    return (
    <div className=''> 
    <NavbarRebound />
    <div className="min-h-screen pt-30 bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
            Client Testimonials
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Here&apos;s what some of our happy clients have to say
          </p>
        </div>

       <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-1/3 shrink-0">
                  <TestimonialCard
                    name={testimonial.name}
                    quote={testimonial.quote}
                    beforeImage={testimonial.beforeImage}
                    afterImage={testimonial.afterImage}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0">
                  <TestimonialCard
                    name={testimonial.name}
                    quote={testimonial.quote}
                    beforeImage={testimonial.beforeImage}
                    afterImage={testimonial.afterImage}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevMobile}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={handleNextMobile}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => {
            const isActive = isDesktop
              ? index >= currentIndex && index < currentIndex + 3
              : index === currentIndex;
            
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive ? 'bg-gray-800 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
    </div> 
  )
}

export default Page
