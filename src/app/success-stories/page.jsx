"use client"
import Image from 'next/image';
import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <div className="bg-[#FFFFFF0D] backdrop-blur-2xl rounded-4xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-[#EE3324] w-full md:w-[26vw] xl:w-[22vw] 2xl:w-[20vw]">
      <div className="px-2 pt-2 pb-6 w-full md:w-[26vw] xl:w-[22vw] 2xl:w-[20vw]">
        <div className="relative w-full h-[200px] mb-4 rounded-4xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2 px-2">{name}</h3>
        <p className="text-[#FFFFFF] font-poppins text-sm font-medium mb-2 px-2">{role}</p>
        <div className='w-full border border-[#EE3324] mb-2'></div>
        <p className="text-[#EDEDED] text-sm lg:text-xs xl:text-sm leading-relaxed font-poppins px-2">
          {quote}
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Startup Founder, Bengaluru",
      quote: "In the last 14 months, my life has changed completely. I feel stronger, healthier, and more confident than ever. This journey didn’t just transform my body—it transformed my mindset.",
      image: "/ss6.jpg"
    },
    {
      name: "Riya Nambiar",
      role: "Marketing Professional, Mumbai",
      quote: "8 months ago, I was exhausted, stressed, and disconnected from myself. Today, I feel alive, balanced, and in control of my health. This journey gave me my best version back.",
      image: "/ss2.jpg"
    },
    {
      name: "Sanjay Patel",
      role: "Entrepreneur, Ahmedabad",
      quote: "These 3 months taught me what true self-care feels like. I didn’t just lose weight, I gained energy, discipline, and a sense of purpose. I feel like I’ve got a new life.",
      image: "/ss3.png"
    },
    {
      name: "Ananya Iyer",
      role: "IT Professional, Chennai",
      quote: "In just 45 days, my health, confidence, and happiness have taken a beautiful turn. I never believed I could feel this strong—physically, mentally, and emotionally.",
      image: "/ss4.png"
    },
    {
      name: "Meera Kapoor",
      role: "Teacher, Pune",
      quote: "In the last one year, I dreamt of a healthier me. Today, I am living that dream. I feel lighter, happier, and truly proud of how far I’ve come.",
      image: "/ss5.jpg"
    },
    {
      name: "Kabir Singh",
      role: "Fitness Coach, Delhi",
      quote: "Even as a fitness professional, I needed guidance—and these 5 months changed everything. I pushed limits, healed from within, and discovered what my body is truly capable of.",
      image: "/ss1.jpg"
    },
    {
      name: "Rohit Verma",
      role: "Photographer & Artist, Kolkata",
      quote: "In the few months, I didn’t just build a healthier body—I built a healthier life. My energy, focus, and passion have all come back stronger than ever.",
      image: "/ss7.png"
    }
  ];

  return (
    <div className='bg-[#050504] min-h-screen'> 
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
         <div className="w-[900px] h-[1000px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
       </div>
      <Navbar landing={false} />
      <div className="pt-44 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white mb-4">
              Client Testimonials
            </h1>
            <div className='w-80 border-2 mb-2 border-[#EE3324] text-center mx-auto'></div>
            <p className="text-[#EDEDED] text-base md:text-lg max-w-3xl mx-auto font-poppins">
              Each client here reminds us why we do what we do -  because when hearts align with vision, extraordinary things happen.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer landing={false} />
    </div> 
  )
}

export default Page