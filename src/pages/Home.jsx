import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Experiences from "../components/home/Experiences";
import Booking from "../components/home/Booking";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Cursor from "../components/home/Cursor";
import Marquee from "../components/home/Marquee";
import Feature from "../components/home/Feature";
// import ImageBreak from "../components/home/ImageBreak";

const Home = () => {
  return (
    <div className="font-sans bg-[#faf8f4] text-[#1a1a14] overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <div className="h-[6px] bg-gradient-to-r from-greenDeep via-amber to-greenMid"></div>
      <Marquee />
      <About />
      <div className="h-[6px] bg-gradient-to-r from-greenDeep via-amber to-greenMid"></div>
      <Experiences />
      <Feature />
      <Booking />
      <Footer />
    </div>
  );
};

export default Home;
