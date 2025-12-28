import React from 'react'

const CompanySee = () => {
  return (
    <div className='bg-[#050504] flex justify-center py-26'>
      <div className='flex flex-col w-full md:w-auto md:max-w-[1200px] lg:w-[900px] xl:w-[1100px] items-center justify-center gap-10'>
            <div className='text-center px-4 md:px-0'>
                      <h2 className="text-white text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-2">What <span className='text-[#EE3324]'>Companies</span> See</h2>
                      <p className='text-[#EDEDED] font-poppins text-base xl:text-[19px] leading-5 xl:leading-7 w-full md:w-lg lg:w-md xl:w-xl'>Most wellness programs look good on paper.</p>                 
              </div> 
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full px-6 md:px-0'>
                  <div className='text-center py-2 xl:py-3 rounded-full bg-[#EE332440]'>
                      <p className='text-sm xl:text-base text-[#FFFFFF] uppercase font-bold leading-5'>More energy <br /> at work</p>
                  </div>
                  <div className='text-center py-2 xl:py-3 bg-[#EE332440] rounded-full'>
                      <p className='text-sm xl:text-base text-[#FFFFFF] uppercase font-bold leading-5'>Less burnout <br />& fatigue</p>
                  </div>
                  <div className='text-center py-2 xl:py-3 rounded-full bg-[#EE332440]'>
                      <p className='text-sm xl:text-base text-[#FFFFFF] uppercase font-bold leading-5'>Better <br />participation</p>
                  </div>
                  <div className='text-center py-2 xl:py-3 rounded-full bg-[#EE332440]'>
                      <p className='text-sm xl:text-base text-[#FFFFFF] uppercase font-bold leading-5'>Healthier, happier <br />teams</p>
                  </div>
              </div>  
      </div>
    </div>
  )
}

export default CompanySee
