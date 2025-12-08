import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="
      relative w-full h-[135vh] md:h-screen flex flex-col md:flex-row  items-center justify-between md:pr-48 lg:pr-28 2xl:pr-52
      bg-[#050504] overflow-hidden
      "
    >

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,50,30,0.22),transparent_70%)] blur-3xl"></div>
      </div>

      <div className="w-full md:max-w-[900px] lg:max-w-[800px] mt-[30vw] md:mt-0 2xl:max-w-[900px] px-6 md:px-4 md:ml-48 lg:ml-28 2xl:ml-40 lg:mt-20 flex flex-col items-start bg-transparent text-left z-10">
        <h1 className="hidden md:block text-2xl md:text-7xl lg:text-4xl xl:text-5xl 2xl:text-[50px] font-semibold text-white lg:leading-[45px] xl:leading-[60px] 2xl:leading-[68px]">
          A New <br />
          Standard <br />
          Designed for a <br />
          <span className="text-[#EE3324]"> Longer,
            <br /> Healthier Life.</span>
        </h1>
        <h1 className="w-full md:hidden text-4xl font-semibold text-white">
          A New Standard <br />
          Designed for a <br />
          <span className="text-[#EE3324]"> Longer,
            <br /> Healthier Life.</span>
        </h1>

        <p className="text-[#EDEDED] text-base lg:text-sm lg:w-sm xl:w-md xl:text-base mt-[5vh] md:mt-4 leading-relaxed">
          Science-backed, personalized fitness that combines training, recovery, nutrition, and performance— into one intelligent experience.

        </p>

        <div className="flex items-center mt-[4vh] mb-[2vh] lg:mt-6 xl:mt-8">
          <button className="px-8 py-3 rounded-full text-white text-sm font-bold bg-[#f5594efc]">
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

      <div className="mt-2 md:mt-10 z-10 mb-44 sm:mb-0">
          <Image
            src="/sub.png"
            alt="home-img"
            width={500}
            height={500}
            className="w-[60vw] lg:w-[38vw] xl:w-[40vw] 2xl:w-[33vw] object-cover"
          />
        </div>

    </div>
  );
}
