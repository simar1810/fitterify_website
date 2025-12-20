"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import { toast } from "react-toastify";


const CallBackFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contact: ''
  })

    const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required'
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters'
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name should only contain letters'
    }
    return ''
  }
  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }
    return ''
  }
  const validateContact = (contact) => {
    if (!contact.trim()) {
      return 'Contact number is required'
    }
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(contact.replace(/\s/g, ''))) {
      return 'Please enter a valid 10-digit contact number'
    }
    return ''
  }
  const handleSubmit = () => {
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const contactError = validateContact(formData.contact)

    if (nameError || emailError || contactError) {
      setErrors({
        name: nameError,
        email: emailError,
        contact: contactError
      })
      toast.error("Please fill all fields correctly before submitting.");
      return
    }

    console.log('Form submitted:', formData)
    toast.success("Callback request submitted!")
    setFormData({
      name: '',
      email: '',
      contact: ''
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:pl-20 py-6">
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
                className="bg-[#EE3324] cursor-pointer hover:bg-[#da594f] text-white font-bold uppercase px-8 py-4 rounded-[20px] transition-colors duration-300 text-sm md:text-base mt-6"
              >
                Request a Call Back
              </button>

            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="relative hidden lg:block h-[430px]">
                <div className='absolute w-12 h-12 top-42 flex items-center justify-center right-42 2xl:right-44 rounded-2xl bg-[#FFFFFF0D] backdrop-blur-2xl ring-[0.5px] ring-white/50'>
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

    <div className="min-h-screen pt-38 xl:pt-52 2xl:pt-44 pb-16 px-4">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white mb-4">
          Get a Call Back
          </h1>
          <div className='w-60 border-2 mb-2 border-[#EE3324] text-center mx-auto'></div>
        <p className="font-poppins text-[#EDEDED] text-sm md:text-lg max-w-4xl mx-auto">
          Request a call back - Dream of making a real difference? Let’s connect and turn your passion into purpose. 
        </p>
      </div>              
        <CallBackFormSection />
    </div>
      <Footer landing={false} />
      </div>
  )
}

export default Page
