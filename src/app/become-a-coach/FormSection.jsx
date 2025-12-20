"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const FormSection = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen relative bg-black flex items-center justify-center p-4 md:px-8 md:py-20">
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
         <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
       </div>
      <div className="w-full max-w-6xl">
        <div className="relative rounded-3xl p-px ring-1 ring-gray-800 shadow-md shadow-[#EE3324] ">
          <div className="bg-[#FFFFFF0D] backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-4xl font-semibold text-white leading-tight">
                  Become a <span className="text-[#EE3324]">Fitterify</span><br />
                  Coach
                </h2>

                <div className="w-64 h-1 bg-linear-to-r from-[#EE3324] to-transparent"></div>

                <div className="space-y-4 font-poppins text-[#EDEDED80] text-sm md:text-base leading-relaxed">
                  <p>
                    Fitterify Coaches have helped more than 400,000 people achieve their fitness goals and regularly guide over 3 million community members looking to transform themselves.
                  </p>

                  <p>
                    As a coach, you&apos;ll educate and support the Fitterify community while influencing and motivating members to live their best lives. You will serve as a health ambassador who constantly strives to bring the benefits of fitness and nutrition to people from around the globe.
                  </p>

                  <p>
                    If you&apos;re ready to take your career in online fitness to the next level, consider becoming a Fitterify Coach today!
                  </p>
                </div>
                <div className="pt-4">
                  <button onClick={()=> router.push("/request-call")} className="bg-[#EE3324] cursor-pointer hover:bg-[#da594f] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-sm md:text-base">
                    Request a Call Back
                  </button>
                </div>
              </div>

              <div className="relative hidden lg:block"> 
                <div className="relative w-full h-[500px]">
                <div className='absolute w-15 h-15 top-28 flex items-center justify-center right-40 rounded-xl bg-[#FFFFFF0D] backdrop-blur-2xl ring-1 ring-[#EE3324]'>
                    <Image src="/decor.png" alt='decor' width={100} height={100} className='w-8 rounded-3xl'/>          
                </div>  
                <div className='absolute w-15 h-15 bottom-28 left-18 flex items-center justify-center rounded-xl bg-[#FFFFFF0D] backdrop-blur-2xl ring-1 ring-[#EE3324]'>
                    <Image src="/decor.png" alt='decor' width={100} height={100} className='w-8 rounded-3xl'/>          
                </div>              
                    <div className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden">
                      <Image src="/coach_img1.png" alt="Male Coach" fill className="object-cover rounded-2xl overflow-hidden" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-86 h-80 rounded-2xl overflow-hidden">
                      <Image src="/coach_img2.png" alt="Female Coach" fill className="object-cover rounded-2xl overflow-hidden" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSection