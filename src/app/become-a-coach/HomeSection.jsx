import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar'
const HomeSection = () => {
  return (
    <div className="relative bg-[url('/becomeCoach.png')] bg-cover w-full h-full px-4 md:px-20">
      <Navbar landing={false} />   
        {/* <div className="absolute inset-0 z-0">
        <Image 
          src="/becomeCoachbg.png" 
          alt='coach' 
          fill 
          priority 
          className='object-cover w-full h-full' 
        />
      </div> */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container md:mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span className='' style={{
                WebkitTextStroke: '2px #EE3324',
                textStroke: '2px #EE3324'
              }}>700+</span> Expert<br />
              Coaches<br />
              <span className="block mt-2">You could be</span>
              <span className="block">one of them!</span>
            </h1>

            <p className="text-[#EDEDED] font-poppins text-lg md:text-xl font-light">
              Be a part of the fitness revolution
            </p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default HomeSection
