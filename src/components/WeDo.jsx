import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WeDo() {
  return (
    <div className="w-full bg-[#1a1a19] text-white py-20">
      <div className="text-center mx-auto mb-20 border-b border-gray-600 w-full pb-10 px-4 md:px-0">
        <button className="px-5 py-1 rounded-full bg-[#323131] text-sm text-white font-bold">
          What we Do
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
          Train <span className="text-[#EE3324]">Smarter.</span>{" "}
          Perform <span className="text-[#EE3324]">Better.</span>{" "}
          Grow <span className="text-[#EE3324]">Stronger.</span>
        </h1>

        <p className="text-gray-300 mt-1 font-literata max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re just starting out or chasing peak performance, our
          expert-led programs are built to push your limits.
        </p>
      </div>
      <div className="relative space-y-46 md:space-y-32">
        {/* card1 */}
      <div className="sticky top-32 z-10 bg-[#1a1a19] transition-transform duration-500 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between py-6 px-4 md:px-28">
        <div className="flex md:flex-col items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-[#717171] flex items-center justify-center">
            <Image
              src="/Group.png"
              width={32}
              height={32}
              alt="icon"
              className="opacity-80"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#EE3324]">
              Wellness App
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center mt-4 md:mt-0">
          <div className="flex-col items-center justify-center gap-4">
            <Image src="/wellness_app.png" alt="longevity" width={100} height={100} className="w-24 mb-2 rounded-2xl mx-auto" />
            <div className="flex items-center justify-center gap-2">
              <Image src="/appstore.png" alt="appstore" width={100} height={40} className="w-18 md:w-20"/>
              <Image src="/playstore.png" alt="playstore" width={100} height={40} className="w-18 md:w-20"/>
            </div>
          </div>
          
         <p className="text-white mt-2 md:mt-12 max-w-sm font-literata leading-relaxed">
              Data-driven insights for daily health, recovery, and performance.
        </p>
        </div>

        <button className="w-12 h-12 mt-6 md:mt-0 rounded-full border border-gray-600 flex items-center justify-center">
          <ArrowRight size={20} />
        </button>
          </div>
        </div>
        {/* card2 */}
      <div className="sticky top-32 z-20 -mt-40 md:-mt-24 bg-[#EE3324] transition-transform duration-500">
      <div className="flex flex-wrap items-center justify-between py-6 px-4 md:px-28 bg-[#EE3324]">
        <div className="flex md:flex-col items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <Image
              src="/Group2.png"
              width={32}
              height={32}
              alt="icon"
              className="opacity-80"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Longevity <br /> Framework
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center mt-4 md:mt-0">
          <div className="flex-col items-center justify-center gap-4">
            <Image src="/longevity.png" alt="longevity" width={100} height={100} className="w-24 mb-2 rounded-2xl mx-auto" />
            <div className="flex items-center justify-center gap-2">
              <Image src="/appstore.png" alt="appstore" width={100} height={40} className="w-18 md:w-20"/>
              <Image src="/playstore.png" alt="playstore" width={100} height={40} className="w-18 md:w-20"/>
            </div>
          </div>
         <p className="text-white mt-2 md:mt-12 max-w-sm font-literata leading-relaxed">
             Programs designed for long-term vitality, not short-term results.
        </p>
        </div>
        <div className="relative md:space-x-4">
          <Image
            src="/Image-Hover2.png"
            width={160}
            height={220}
            alt="people-gym"
            className="rounded-xl hidden md:block"
          />
          <button className="hidden absolute -right-10 bottom-4 w-12 h-12 rounded-full border-2 border-white md:flex items-center justify-center bg-white/10 backdrop-blur">
            <ArrowRight size={20} color="white" />
          </button>
                  


           <div className="md:hidden flex flex-col items-start justify-center mt-5 gap-4 w-[90vw]">
             <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur">
                <ArrowRight size={20} color="white" />
             </button>
             <Image
                src="/Image-Hover3.png"
                width={160}
                height={220}
                alt="people-gym"
                className="rounded-xl w-full"
             />        
                      
            </div>
 
        </div>
          </div>
      </div>
        {/* card3 */}
      <div className="sticky top-32 z-30 -mt-40 md:-mt-24 bg-[#1a1a19] transition-transform duration-500">
      <div className="flex flex-wrap items-center justify-between px-4 md:px-28 border-b border-gray-600 pt-10  pb-[80vh] md:pb-40 md:pt-20">
        <div className="flex md:flex-col items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-[#717171] flex items-center justify-center">
            <Image
              src="/Group3.png"
              width={32}
              height={32}
              alt="icon"
              className="opacity-80"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#EE3324]">
              Transformation <br /> Studios
            </h2>
          </div>
        </div>
        <p className="text-white mt-6 md:mt-12 max-w-sm font-literata leading-relaxed">
              Physical spaces where wellness becomes a lived experience.
        </p>
        <button className="w-12 h-12 mt-6 md:mt-0 rounded-full border border-gray-600 flex items-center justify-center">
          <ArrowRight size={20} />
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
