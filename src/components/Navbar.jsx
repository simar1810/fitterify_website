"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false); // close mobile popup
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabClasses = (id) =>
    `text-sm cursor-pointer px-4 py-1 rounded-full transition hover:bg-[#EE3324] hover:text-white 
  ${
      activeSection === id
        ? "bg-[#EE3324] text-white"
        : "text-[#E0E0E0]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <div className="absolute top-6 left-0 right-0 flex items-center justify-start md:gap-60 w-screen md:mx-auto md:w-[1000px] z-50">
<div className="absolute -left-20 top-1/2 -translate-y-1/2 -z-10">
  <div className="w-44 h-44 bg-[radial-gradient(circle,rgba(238,51,36,0.55),rgba(238,51,36,0.15),transparent_70%)] blur-2xl rounded-full"></div>
</div>


        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-10 hidden md:block"
        />

        {/* Desktop Nav */}
        <div className="bg-[#2b2b2b] px-20 py-3 rounded-full hidden md:flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <span className={tabClasses("home")} onClick={() => scrollToSection("home")}>
            <p>Home</p>
          </span>
          <span className={tabClasses("about")} onClick={() => scrollToSection("about")}>
            About Us
          </span>
          <span className={tabClasses("contact")} onClick={() => scrollToSection("contact")}>
            Contact Us
          </span>
        </div>

        {/* Mobile Navbar */}
        <div className="px-4 py-2 rounded-full w-full mx-3 bg-[#2b2b2b] flex md:hidden items-center justify-between">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-10"
          />
          <div
            onClick={() => setMenuOpen(true)}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
          >
            <Menu size={14} className="text-black" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-999 flex items-center justify-center md:hidden transition-all duration-200 delay-75">
          <div className="bg-[#2b2b2b] rounded-2xl w-[85%] p-6 text-center relative">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-6 mt-6">
              <span
                className={tabClasses("home")}
                onClick={() => scrollToSection("home")}
              >
                Home
              </span>

              <span
                className={tabClasses("about")}
                onClick={() => scrollToSection("about")}
              >
                About Us
              </span>

              <span
                className={tabClasses("contact")}
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
