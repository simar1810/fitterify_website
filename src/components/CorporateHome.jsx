import Image from 'next/image'
import React from 'react'
import { Play } from 'lucide-react'

const CorporateHome = () => {
  return (
    <div className="bg-[#050504] min-h-screen flex justify-center pt-36 md:pt-38 xl:pt-52 2xl:pt-38 pb-20 md:pb-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
         <div className="w-[900px] h-[1000px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
        </div>
        <div className='w-full md:w-auto md:max-w-[1200px] px-6 md:px-0 mx-auto flex flex-col md:flex-row items-start justify-between gap-2 md:gap-10 xl:gap-16'>
              <div className='flex flex-col justify-start items-start gap-4 xl:gap-8 h-[400px] lg:h-[380px] xl:h-[520px] w-full md:w-auto'>
                  <div className='rounded-full py-2 bg-[#FFFFFF29] backdrop-blur-md w-full md:w-md xl:w-lg flex items-center justify-center'>
                      <p className='uppercase font-bold text-[#EE3324] text-xs md:text-base xl:text-[18px]'>Corporate Wellness That Actually Works</p>
                  </div>
                  <div className='w-full md:w-auto'>
                      <h2 className="text-white text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-4">Built for Workdays.<br /> <span className='text-[#EE3324]'>Backed by Science.</span></h2>
                      <p className='text-[#EDEDED] font-poppins text-base xl:text-[22px] leading-5 xl:leading-7 w-full md:w-md xl:w-lg'>Most wellness programs look good on paper.
Employees quit in 2 weeks.</p>
                  </div>
                  <div className='relative w-full'>
                      <Image src="/cw1.png" alt='img1' width={200} height={200} className='object-cover w-full' />
                      <div className='absolute w-[39vw] md:w-[200px] xl:w-[230px] h-[14vw] md:h-18 xl:h-20 bottom-0 left-0 rounded-lg bg-white py-2 px-2 flex items-center justify-between'>
                          <p className='text-[#050504] text-xs md:text-xl font-semibold leading-3 md:leading-5'>We are Built <br />Different</p>
                          <div className='bg-[#EE3324] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-2'>
                             <Play size={10} fill='black'/> 
                          </div>
                      </div>
                  </div>
              </div>
              <div className='overflow-hidden rounded-2xl w-full md:w-[380px] md:h-[410px] xl:w-[520px] xl:h-[510px] 2xl:h-[520px]'>
                  <Image src="/cw2.png" alt='img2' width={500} height={500} className='object-cover w-full h-full'/>
              </div>
        </div> 
    </div>
  )
}

export default CorporateHome
