import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex justify-between items-center px-6 md:px-16 transition-all duration-500 
      ${scrolled ? "bg-greenDeep/95 py-4 backdrop-blur" : "py-6"}`}
    >
      {/* Logo */}
      <img src={logo} alt="logo" className="h-14 md:h-20" />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-white/80">
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#experiences" className="hover:text-white transition">
          Experiences
        </a>
        <a href="#booking" className="hover:text-white transition">
          Booking
        </a>
      </div>

      {/* Desktop Button */}
      <a
        href="#booking"
        className="hidden md:block bg-amber px-6 py-2 text-xs tracking-widest"
      >
        Book a Visit
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-2xl">
        {menuOpen ? (
          <HiX onClick={() => setMenuOpen(false)} />
        ) : (
          <HiMenu onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-greenDeep text-white flex flex-col items-center gap-6 py-8 transform transition-all duration-500 md:hidden
        ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#experiences" onClick={() => setMenuOpen(false)}>
          Experiences
        </a>
        <a href="#booking" onClick={() => setMenuOpen(false)}>
          Booking
        </a>

        <a
          href="#booking"
          className="bg-amber px-6 py-2 text-xs tracking-widest"
          onClick={() => setMenuOpen(false)}
        >
          Book a Visit
        </a>
      </div>
    </nav>
  );
}
