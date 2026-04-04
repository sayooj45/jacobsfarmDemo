import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 60);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex justify-between items-center px-8 md:px-16 transition-all duration-500 
    ${scrolled ? "bg-greenDeep/95 py-4 backdrop-blur" : "py-7"}`}
    >
      <img src={logo} alt="logo" className="h-18 md:h-24" />

      <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-white/80">
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#booking">Booking</a>
      </div>

      <a href="#booking" className="bg-amber px-6 py-2 text-xs tracking-widest">
        Book a Visit
      </a>
    </nav>
  );
}
