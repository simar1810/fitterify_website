"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    const handleWhatsApp = () => {
    const phoneNumber = "919815919243";
    const message = "Hi! I'm interested in learning more about Fitterify.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <footer id="contact" className="w-full bg-black text-white px-6 md:px-20 py-16">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 lg:gap-2 xl:gap-10">
        
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
          To redefine how the world experiences health — from{" "}
          <span className="text-[#EE3324]">
            short-term fitness <span className="text-white">to</span> lifelong wellness.
          </span>
        </h2>
        <div className="w-20 h-20 md:w-28 md:h-28 lg:w-22 lg:h-22 xl:w-28 xl:h-28 bg-[#EE3324] rounded-full flex items-center justify-center">
          <div className="w-15 h-15 md:w-21 md:h-21 lg:w-16 lg:h-16 xl:w-21 xl:h-21 bg-transparent rounded-full flex items-center justify-center ring-2 ring-white">     
            <div className="w-10 h-10 rounded-full md:w-15 md:h-15 lg:w-8 lg:h-8 xl:w-15 xl:h-15 bg-white flex items-center justify-center">
                <Image src="/footer-logo.png" alt="footer-logo" width={500} height={500} className="w-5 md:w-10 lg:w-5 xl:w-10"/>
            </div>
          </div>            
        </div>
      </div>
      <div className="border-t border-white/10 my-14" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <Image onClick={() => scrollToSection("home")} src="/logo.png" alt="footer-logo" width={500} height={500} className="w-15 mx-auto md:mx-0 lg:w-12 xl:w-14 "/>
          <p className="text-white text-lg leading-relaxed mt-6">
            Train with Purpose. <br />
            Transform with Power.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-8 flex justify-center md:justify-start items-center gap-2">
            ⏳ Our Timings
          </h4>
          <div className="text-white text-lg flex  gap-3">
            <p>
              <span className="font-medium text-white">Mon–Sat:</span>
              <br />
              6:00 AM – 10:00 PM
            </p>
            <p className="pl-4 border-l">
              <span className="font-medium text-white">Sunday:</span>
              <br />
              8:00 AM – 2:00 PM
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-8 text-center md:text-left">🔗 Quick Links</h4>
          <ul className="text-white text-lg space-y-2 flex flex-wrap gap-x-8 items-center justify-center md:justify-start">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer">About</li>
            <li className="cursor-pointer" onClick={()=>router.push("/programs")}>Programs</li>
            <li onClick={() => scrollToSection("trainer")} className="cursor-pointer">Trainers</li>
            <li className="cursor-pointer" onClick={()=>router.push("/success-stories")}>Success Stories</li>
            <li className="cursor-not-allowed">Pricing</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-6" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white">
        <p className="text-center md:text-left">© 2025 Fitterify. All rights reserved. <br /><span>powered by WellnessZ</span></p>
        <div className="flex flex-wrap gap-4">
          <button onClick={()=>router.push("https://www.facebook.com/profile.php?id=100083752502766&mibextid=wwXIfr&mibextid=wwXIfr")} className="px-4 cursor-pointer py-2 border border-white/20 rounded-full flex items-center gap-2">
            <Image src="/facebook.png" alt="facebook" width={50} height={50} className="w-4"/>        
            Facebook
          </button>
          <button onClick={()=>router.push("https://www.instagram.com/fitterify?igsh=ZjV5bndodWxidGRp")} className="px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 cursor-pointer">
            <Image src="/instagram.png" alt="instagram" width={50} height={50} className="w-4"/>
            Instagram
          </button>
          {/* <button className="px-4 cursor-not-allowed py-2 border border-white/20 rounded-full flex items-center gap-2">
            <Image src="/youtube.png" alt="youtube" width={50} height={50} className="w-4"/>
            YouTube
          </button> */}
          <button onClick={handleWhatsApp} className="px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors bg-[#25D366]/10">
            <Image src="/whatsapp.png" alt="whatsapp" width={50} height={50} className="w-4"/>
            WhatsApp
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
