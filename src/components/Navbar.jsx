"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import ContactForm from "./ContactUs";

export default function Navbar({landing=true}) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const router = useRouter()
  const pathname = usePathname();
  const isBecomeCoach = pathname === "/become-a-coach";
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };
 const operate = (id) => {
    if (landing) {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
   } 
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact", "program"];
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
    `text-xs xl:text-sm font-extrabold cursor-pointer px-4 py-1 rounded-full transition hover:bg-[#EE3324] hover:text-white 
  ${
      activeSection === id && landing
        ? "bg-[#EE3324] text-white"
        : "text-[#E0E0E0]"
    }`;

  return (
    <>
      <div className="absolute top-10 xl:top-16 2xl:top-10 left-1/12 flex items-center justify-start md:gap-60 lg:gap-5 xl:gap-18 2xl:gap-32 md:mx-auto lg:w-[85vw] w-[85vw] z-50">
      {/* <div className="absolute -left-20 top-1/2 -translate-y-1/2 -z-10">
        <div className="w-44 h-44 bg-[radial-gradient(circle,rgba(238,51,36,0.55),rgba(238,51,36,0.15),transparent_70%)] blur-2xl rounded-full"></div>
      </div> */}

        <Image
          onClick={()=>operate("home")}
          src="/fitterify.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-16 lg:w-14 xl:w-16 hidden md:block cursor-pointer"
        />

        {/* Desktop Nav */}
        <div className="flex gap-3">
        <div className="px-10 xl:px-10 2xl:px-30 py-3 xl:py-4 rounded-full hidden md:flex items-center xl:gap-3 shadow-[0_0_40px_rgba(0,0,0,0.8)] bg-[#FFFFFF0D] backdrop-blur-2xl ring-1 ring-white/10 uppercase">
          <span className={tabClasses("home")} onClick={() => operate("home")}>
            <p>Home</p>
          </span>
          <span className={tabClasses("about")} onClick={() => operate("about")}>
            About Us
          </span>
          <span className={tabClasses("contact")} onClick={() => router.push("/programs")}>
            Programs
          </span>
          <span className={tabClasses("contact")} onClick={() => router.push("/corporate-wellness")}>
            Corporate Wellness
          </span>
          <span className={tabClasses("contact")} onClick={() => setContactFormOpen(!contactFormOpen)}>
            Contact Us
          </span>
          </div>
          <div className="relative flex">
        <div onClick={() => router.push("/app")} className="bg-[#FFFFFF0D] backdrop-blur-2xl px-8 py-2 text-white text-xs xl:text-sm font-extrabold rounded-full hidden md:flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:bg-[#EE3324] hover:cursor-pointer ring-1 ring-[#EE332480] uppercase">
          Get App
        </div>
        <div className="absolute hidden lg:flex top-1 right-[-15px] w-10 h-10 rounded-full bg-[#EE332480] backdrop-blur-2xl items-center justify-center">
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
        {/* Mobile Navbar */}
        <div className="px-4 py-3 rounded-full w-full bg-[#FFFFFF0D] backdrop-blur-sm flex md:hidden items-center justify-between">
          <Image
            src="/fitterify.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-8"
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

            <div className="flex flex-col gap-6 mt-6 uppercase">
              <span
                className={tabClasses("home")}
                onClick={() => operate("home")}
              >
                Home
              </span>

              <span
                className={tabClasses("about")}
                onClick={() => operate("about")}
              >
                About Us
              </span>

              <span
                className={tabClasses("program")}
                onClick={() => router.push("/programs")}
              >
                Programs
              </span>
              <span
                className={tabClasses("contact")}
                onClick={() => router.push("/corporate-wellness")}
              >
                Corporate Wellness
              </span>
              <span
                className={tabClasses("contact")}
                onClick={() => setContactFormOpen(!contactFormOpen)}
              >
                Contact Us
              </span>
              <span
                className="text-[#EE3324] font-extrabold"
                onClick={() => router.push("/app")}
              >
                Get App
              </span>
            </div>
          </div>
        </div>
      )}
      <ContactForm isOpen={contactFormOpen} onClose={()=>setContactFormOpen(false)}/>
    </>
  );
}
