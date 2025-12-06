import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="
      relative w-full h-screen flex flex-col items-center justify-start overflow-hidden
      bg-[#050504]
      "
    >

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
      </div>

      <div className="max-w-[900px] mt-25 xl:mt-30 2xl:mt-25 flex flex-col items-center md:mt-25 px-4 bg-transparent text-center z-10">
        <h1 className="text-4xl md:text-7xl xl:text-5xl 2xl:text-6xl font-semibold text-white leading-tight">
          A New Standard Designed{" "}
          for a<span className="text-[#EE3324]"> Longer, Healthier Life.</span>
        </h1>

        <p className="text-[#EDEDED] px-6 md:px-0 text-base mt-4 leading-relaxed">
          Science-backed, personalized fitness that combines training, recovery, nutrition, and performance— into one intelligent experience.

        </p>

        <div className="flex items-center mt-8">
          <button className="px-8 py-3 rounded-full text-white text-sm font-bold bg-[#717171]">
            Explore the Platform
          </button>

          <div className="w-10 h-10 rounded-full bg-[#EE3324] flex items-center justify-center">
            <Image
              src="/home-cta.png"
              alt="cta"
              width={20}
              height={20}
              className="w-5"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex mt-15 2xl:mt-12 justify-center pb-10 z-10">
        <div className="w-[90%] md:w-[70%] 2xl:w-[55%] rounded-[50px] overflow-hidden">
          <Image
            src="/home-img3.png"
            alt="home-img"
            width={1400}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}
