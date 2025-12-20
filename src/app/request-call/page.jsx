"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'

const CallBackFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-3xl p-px">
          <div className="bg-[#FFFFFF0D] backdrop-blur-2xl shadow-md shadow-[#EE3324] rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full bg-black/40 border border-gray-700/50 rounded-2xl py-4 pl-12 pr-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#EE3324]/50 transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-black/40 border border-gray-700/50 rounded-2xl py-4 pl-12 pr-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#EE3324]/50 transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter Your Contact No."
                  className="w-full bg-black/40 border border-gray-700/50 rounded-2xl py-4 pl-12 pr-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#EE3324]/50 transition-colors"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#EE3324] hover:bg-[#d62b1f] text-white font-semibold py-4 rounded-full transition-colors duration-300 mt-8"
              >
                Request a Call Back
              </button>

            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="relative hidden lg:block h-[430px]">
                <div className='absolute w-12 h-12 top-42 flex items-center justify-center right-54 rounded-2xl bg-[#FFFFFF0D] backdrop-blur-2xl ring-[0.5px] ring-white/50'>
                    <Image src="/decor.png" alt='decor' width={100} height={100} className='w-6 rounded-3xl'/>          
                </div>  
                <div className='absolute w-12 h-12 bottom-12 left-32 flex items-center justify-center rounded-2xl bg-[#FFFFFF0D] backdrop-blur-2xl ring-[0.5px] ring-white/50'>
                    <Image src="/decor.png" alt='decor' width={100} height={100} className='w-6 rounded-3xl'/>          
                </div>                   
            <div className="absolute top-0 left-0 w-88 h-64 overflow-hidden">
              <Image src="/forms_img1.png" alt="Meditation" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-1/3 w-52 h-56 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/forms_img2.png" alt="Yoga" fill className="object-cover" />
            </div>
        </div>
      </div>
    </div>
  )
}


const Page = () => {
  return (
      <div className="bg-[#050504] min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
         <div className="w-[900px] h-[1000px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
       </div>
        <Navbar landing={false} />

    <div className="min-h-screen pt-38 xl:pt-52 2xl:pt-38 pb-16 px-4">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
          Get a Call Back
          </h1>
          <div className='w-60 border-2 mb-2 border-[#EE3324] text-center mx-auto'></div>
        <p className="font-poppins text-gray-400 text-sm md:text-lg max-w-3xl mx-auto">
          Ready to transform lives as a certified coach? Share your details and our team will connect with you to discuss coaching opportunities. 
        </p>
      </div>              
        <CallBackFormSection />
    </div>
      <Footer landing={false} />
      </div>
  )
}

export default Page
