import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FloatingSection from "@/components/FloatingSection";
import AboutSection from "@/components/AboutSection";
import WeDo from "@/components/WeDo";
import TargetAud from "@/components/TargetAud";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Coaches from "@/components/Coaches";
export default function Home() {
  return (
    <div className="">
     <Navbar />
      <HeroSection />
      {/* <FloatingSection /> */}
      <AboutSection />
      <WeDo />
      <div className="relative md:space-y-32 bg-black">
        <TargetAud />
        <Coaches/>
      </div>
      <Stories />
      <Footer/>
    </div>
  );
}
