import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  // const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 60);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex items-center justify-center px-6 md:px-16 transition-all duration-500 py-4
  `}
    >
      {/* MOBILE HEADER */}
      <div className="md:hidden w-full flex items-center justify-between">
        <img src={logo} alt="logo" className="h-12 object-contain" />

        <div className="text-white text-2xl">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>
      {/* CENTER PILL NAV */}
      <div className="hidden md:flex bg-white/80 backdrop-blur-md rounded-full px-10 py-4 items-center justify-between gap-10 w-full max-w-5xl">
        {/* LEFT LINKS */}
        <div className="hidden md:flex flex-1 justify-end gap-10 text-xs tracking-widest uppercase text-black/80">
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#whyChoose" className="hover:text-black transition">
            Why Us
          </a>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center flex-1">
          <img src={logo} alt="logo" className="h-14 md:h-20 object-contain" />
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex flex-1 justify-start items-center gap-10 text-xs tracking-widest uppercase text-black/80">
          <a href="#experiences" className="hover:text-black transition">
            Experiences
          </a>
          {/* <a href="#plan" className="hover:text-black transition">
            Plan Stay
          </a> */}

          <a
            href="#booking"
            className="inline-flex items-center justify-center 
  bg-amber text-black font-medium 
  px-4 sm:px-5 md:px-6 
  py-2 sm:py-2.5 
  text-[10px] sm:text-xs md:text-sm 
  tracking-widest uppercase 
  rounded-full 
  transition-all duration-300 
  hover:bg-amber/90 hover:scale-105 
  active:scale-95 
  whitespace-nowrap"
          >
            Book a Visit
          </a>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden text-white text-2xl absolute right-6">
        {menuOpen ? (
          <HiX onClick={() => setMenuOpen(false)} />
        ) : (
          <HiMenu onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-[70px] left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl text-black flex flex-col items-center gap-6 py-8 transform transition-all duration-500 md:hidden
  ${
    menuOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-5 pointer-events-none"
  }`}
      >
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-widest uppercase"
        >
          About
        </a>
        <a
          href="#cottages"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-widest uppercase"
        >
          Cottages
        </a>
        <a
          href="#experiences"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-widest uppercase"
        >
          Experiences
        </a>

        <a
          href="#booking"
          className="bg-amber px-6 py-2 text-xs tracking-widest rounded-md mt-2"
          onClick={() => setMenuOpen(false)}
        >
          Book a Visit
        </a>
      </div>
    </nav>
  );
}
