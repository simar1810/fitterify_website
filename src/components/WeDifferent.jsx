import React from 'react'
import Image from 'next/image'
const WeDifferent = () => {
  return (
    <div className='bg-[#1a1a19] flex justify-center py-10 md:py-20'>
       <div className='w-full md:w-auto md:max-w-[1200px] lg:w-[900px] xl:w-auto mx-auto flex flex-col gap-8 md:gap-10 xl:gap-16 items-center justify-start md:justify-between px-6 md:px-0'>
          <div className='flex flex-col md:flex-row items-start justify-between gap-10'>
            <div className='space-y-5 md:space-y-10'>
               <div className='rounded-full py-2 bg-[#FFFFFF29] backdrop-blur-md w-[70vw] md:w-sm flex items-center justify-center'>
                      <p className='uppercase font-bold text-[#EE3324] text-xs md:text-base'>Its the new dawn for health</p>
                </div>
                <div className='space-y-1.5'>
                <h2 className="text-white text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-4"><span className='text-[#EE3324]'>Fitterify</span> is different.</h2> 
                <p className='text-[#EDEDED] font-poppins text-base xl:text-[22px] leading-5 xl:leading-7 w-full md:w-md xl:w-lg'>We design personalised wellness for busy professionals—so teams feel better, move better, and stay consistent.</p> 
                 </div>         
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='w-40 md:w-[200px] xl:w-[250px] rounded-lg px-4 py-3 flex flex-col items-start justify-center gap-2 bg-[#FFFFFF0D]'>
                    <p className='font-bold text-[20px] 2xl:text-[28px] text-[#FFFFFF]'>12+</p>
                    <p className='font-semibold text-[15px] 2xl:text-[18px] text-[#FFFFFF]'>Certified Trainers</p>      
                </div>
                <div className='w-40 md:w-[200px] xl:w-[250px] rounded-lg px-4 py-3 flex flex-col items-start justify-center gap-2 bg-[#FFFFFF0D]'>
                    <p className='font-bold text-[20px] 2xl:text-[28px] text-[#FFFFFF]'>3,500+</p>
                    <p className='font-semibold text-[15px] 2xl:text-[18px] text-[#FFFFFF]'>Happy Members</p>      
                </div>
                <div className='w-40 md:w-[200px] xl:w-[250px] rounded-lg px-4 py-3 flex flex-col items-start justify-center gap-2 bg-[#FFFFFF0D]'>
                    <p className='font-bold text-[20px] 2xl:text-[28px] text-[#FFFFFF]'>95%</p>
                    <p className='font-semibold text-[15px] 2xl:text-[18px] text-[#FFFFFF]'>Cilent Retention Rate</p>      
                </div>
                <div className='w-40 md:w-[200px] xl:w-[250px] rounded-lg px-4 py-3 flex flex-col items-start justify-center gap-2 bg-[#FFFFFF0D]'>
                    <p className='font-bold text-[20px] 2xl:text-[28px] text-[#FFFFFF]'>50+</p>
                    <p className='font-semibold text-[15px] 2xl:text-[18px] text-[#FFFFFF]'>Weekly Classes</p>      
                </div>

            </div>
          </div>
            <div className='w-full md:h-[400px] overflow-hidden rounded-2xl'>
                <Image src="/cw3.png" alt='cw' width={500} height={500} className='w-full object-cover'/>
            </div>   
      </div>
    </div>
  )
}

export default WeDifferent
