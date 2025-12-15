"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
    const goToSection = (id) => {
    router.push(`/#${id}`);
  };

  const tabClasses = (id) =>
    `text-sm cursor-pointer px-4 py-1 rounded-full transition hover:bg-[#EE3324] text-white`

  return (
    <>
      <div className="absolute top-6 left-0 right-0 flex items-center justify-start md:gap-60 lg:gap-32 xl:gap-50 w-screen md:mx-auto md:w-[1000px] lg:w-[800px] xl:w-[1000px] z-50">


        <Image
          src="/footer-logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-16 lg:w-14 xl:w-18 2xl:w-16 hidden md:block"
        />

        <div className="bg-[#2b2b2b] px-20 py-3 rounded-full hidden md:flex items-center gap-6">
          <span className={tabClasses("home")} onClick={() => goToSection("home")}>
            <p>Home</p>
          </span>
          <span className={tabClasses("about")} onClick={() => goToSection("about")}>
            About Us
          </span>
          <span className={tabClasses("contact")} onClick={() => goToSection("contact")}>
            Contact Us
          </span>
        </div>
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
                onClick={() => goToSection("home")}
              >
                Home
              </span>

              <span
                className={tabClasses("about")}
                onClick={() => goToSection("about")}
              >
                About Us
              </span>

              <span
                className={tabClasses("contact")}
                onClick={() => goToSection("contact")}
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
