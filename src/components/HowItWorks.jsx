import React from 'react'

const HowItWorks = () => {
  return (
    <div className='bg-[#1a1a19] flex justify-center py-10 md:py-20'>
      <div className='w-full md:w-auto md:max-w-[1200px] lg:w-[900px] xl:w-[1100px] mx-auto flex flex-wrap gap-8  items-center justify-start md:justify-between px-6 md:px-0'>
        <div className='flex flex-col items-start justify-center gap-8'>
            <div className='rounded-full py-2 bg-[#FFFFFF29] backdrop-blur-md px-4 flex items-center justify-center'>
                      <p className='uppercase font-bold text-[#FFFFFF] text-xs md:text-base'>The Magic behind fitterify</p>
                  </div>  
            <h2 className="text-white text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-4">How it <span className='text-[#EE3324]'>Works</span></h2>       
        </div>
        <div className='grid grid-col-1 gap-4 w-md xl:w-xl'>
            <div className='w-full border bg-[#FFFFFF24] backdrop-blur-md border-[#FFFFFF24] rounded-md px-4 py-3'>
               <p className='text-[#FFFFFF] text-sm md:text-base xl:text-[24px] font-semibold font-poppins'>Simple employee onboarding</p>       
            </div>       
            <div className='w-full border border-[#FFFFFF24] rounded-md px-4 py-3'>
               <p className='text-[#FFFFFF] text-sm md:text-base xl:text-[24px] font-semibold font-poppins'>Expert-led guidance</p>       
            </div>       
            <div className='w-full border border-[#FFFFFF24] rounded-md px-4 py-3'>
               <p className='text-[#FFFFFF] text-sm md:text-base xl:text-[24px] font-semibold font-poppins'>Fitterify app for daily support</p>       
            </div>       
            <div className='w-full border border-[#FFFFFF24] rounded-md px-4 py-3'>
               <p className='text-[#FFFFFF] text-sm md:text-base xl:text-[24px] font-semibold font-poppins'>Clear, non-medical insights for HR</p>       
            </div>       
        </div>    
      </div>
    </div>
  )
}

export default HowItWorks
