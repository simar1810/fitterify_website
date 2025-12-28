import React from 'react'
import Image from 'next/image'
const WhyDifferent = () => {
  return (
    <div className='bg-[#050504] flex justify-center py-26'>
          <div className='w-full md:w-auto md:max-w-[1200px] px-6 md:px-0 mx-auto flex flex-col md:flex-row items-start justify-between gap-8 xl:gap-6'>
              <div className='flex flex-col justify-start items-start gap-6 xl:gap-4 h-auto lg:h-[280px] xl:h-[450px] w-full md:w-auto'>
                  <div className='rounded-full py-2 bg-[#FFFFFF29] backdrop-blur-md px-4 flex items-center justify-center'>
                      <p className='uppercase font-bold text-[#EE3324] text-xs md:text-base xl:text-[18px]'>Why Fitterify</p>
                  </div>
                  <div className='w-full md:w-auto'>
                      <h2 className="text-white text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-4">What Makes <span className='text-[#EE3324]'>Fitterify</span> Different</h2>
                      <p className='text-[#EDEDED] font-poppins text-base xl:text-[19px] leading-5 xl:leading-7 w-full md:w-lg lg:w-md xl:w-xl'>No matter which program you choose, we’re committed to helping you succeed. Here’s what every member can count on</p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-auto md:w-lg xl:w-2xl'>
                      <div className='flex items-center gap-4 justify-start md:justify-center px-4 py-3 bg-[#FFFFFF08] rounded-2xl'>
                          <div className='w-12 h-12 xl:w-15 xl:h-15 flex bg-[#EE3324] rounded-full items-center justify-center'>
                              <Image src="/cw_icon1.png" alt='icon' width={100} height={100} className='w-8'/>
                          </div>
                          <div className='flex flex-col items-start justify-center w-[180px] xl:w-[230px] gap-2'>
                              <p className='text-sm xl:text-base text-[#FFFFFF] font-semibold'>Not generic. Personal.</p>
                              <p className='text-xs xl:text-sm text-[#D9D9D9] font-poppins font-normal'>Wellness plans based on work type, energy levels, stress, pain, and recovery.</p>
                          </div>
                      </div>
                      <div className='flex items-center gap-4 justify-start md:justify-center px-4 py-3 bg-[#FFFFFF08] rounded-2xl'>
                          <div className='w-12 h-12 xl:w-15 xl:h-15 flex bg-[#EE3324] rounded-full items-center justify-center'>
                              <Image src="/cw_icon2.png" alt='icon' width={100} height={100} className='w-8'/>
                          </div>
                          <div className='flex flex-col items-start justify-center w-[180px] xl:w-[230px] gap-2'>
                              <p className='text-sm xl:text-base text-[#FFFFFF] font-semibold'>Beyond workouts.</p>
                              <p className='text-xs xl:text-sm text-[#D9D9D9] font-poppins font-normal'>We focus on movement, stress, sleep, and recovery—not just steps or yoga days.</p>
                          </div>
                      </div>
                      <div className='md:col-span-2 flex items-center gap-4 justify-start px-4 py-5 bg-[#FFFFFF08] rounded-2xl'>
                          <div className='w-12 h-12 xl:w-15 xl:h-15 flex bg-[#EE3324] rounded-full items-center justify-center'>
                              <Image src="/cw_icon3.png" alt='icon' width={100} height={100} className='w-8'/>
                          </div>
                          <div className='flex flex-col items-start justify-center gap-2'>
                              <p className='text-sm xl:text-[18px] text-[#FFFFFF] font-semibold'>No gym pressure. No time drain.</p>
                              <p className='text-xs xl:text-[16px] text-[#D9D9D9] font-poppins font-normal'>Short, effective routines that fit into real workdays.</p>
                          </div>
                      </div>

                  </div>

              </div>
              <div className='overflow-hidden rounded-2xl w-full md:w-[380px] md:h-[410px] xl:w-[420px] xl:h-[430px] 2xl:h-[440px]'>
                  <Image src="/cw4.png" alt='img2' width={500} height={500} className='object-cover w-full h-full'/>
              </div>
        </div> 
    </div>
  )
}

export default WhyDifferent
