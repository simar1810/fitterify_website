"use client"
import Image from 'next/image';
import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <div className="bg-[#FFFFFF0D] backdrop-blur-2xl rounded-4xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-[#EE3324]">
      <div className="px-2 pt-2 pb-6">
        <div className="relative w-full h-64 mb-4 rounded-4xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-[#FFFFFF] font-poppins text-sm font-semibold mb-2 font-poppins">{role}</p>
        <div className='w-full border border-[#EE3324] mb-2'></div>
        <p className="text-[#EDEDED80] text-sm leading-relaxed font-poppins">
          {quote}
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  const testimonials = [
    {
      name: "Rajan & Richa",
      role: "Busy Doctors & Parents",
      quote: "As busy doctors with kids, Fitterify's easy-to-follow plans were a blessing! We managed to lose weight together and feel more energetic throughout our demanding days.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop"
    },
    {
      name: "Shilpa Mehta",
      role: "Fitness Enthusiast",
      quote: "Fitterify inspired me to defeat low energy & body pain and get shredded! The personalized approach made all the difference in my transformation journey.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=600&fit=crop"
    },
    {
      name: "Dr Anirudh Deepak",
      role: "Medical Professional",
      quote: "At 194 kg, I felt like a ticking time bomb... but Fitterify gave me a new life! The science-backed approach and constant support helped me reclaim my health.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Corporate Executive",
      quote: "Lost 25kg and gained confidence. Fitterify changed my life completely! Now I can keep up with my kids and feel amazing in my own skin.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop"
    },
    {
      name: "Rahul Verma",
      role: "Marathon Runner",
      quote: "From sedentary lifestyle to marathon runner. Thank you Fitterify! The structured training plans and nutrition guidance transformed not just my body but my entire lifestyle.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop"
    },
    {
      name: "Anita Desai",
      role: "Yoga Instructor",
      quote: "Fitterify helped me combine my yoga practice with strength training perfectly. The results have been incredible and my students notice the difference!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop"
    }
  ];

  return (
    <div className='bg-[#050504] min-h-screen'> 
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
         <div className="w-[900px] h-[1000px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
       </div>
      <Navbar landing={false} />
      <div className="pt-38 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
              Client Testimonials
            </h1>
            <div className='w-80 border-2 mb-2 border-[#EE3324] text-center mx-auto'></div>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto font-poppins">
              Here&apos;s what some of our happy clients have to say about their transformative journey with Fitterify
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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