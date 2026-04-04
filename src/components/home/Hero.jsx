// import video from "../../assets/videos/heroVideo.mp4";
import logo from "../../assets/images/logo.png";
import video from "../../assets/images/videoScreenshot.png";
export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 🎥 Video Background */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={video} type="video/mp4" />
      </video> */}
      <img
        src={video}
        alt="video"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* 🌑 Overlay (VERY IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10">
        <p className="tracking-[0.3em] text-amberLight text-xs mb-6">
          Kanjirapally · Kerala · India
        </p>

        <div className="w-24 h-24 border border-amberLight/50 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl text-amberLight">
          🌿
        </div>

        {/* <h1 className="text-[90px] font-serif leading-none">
          Jacob's <br />
          <span className="italic text-amberLight">Durian</span> <br />
          Farm
        </h1> */}
        <img src={logo} alt="logo" className="h-40 md:h-90" />

        <p className="italic mt-4 text-xl text-white/70">
          India's First Durian Destination
        </p>
      </div>
    </section>
  );
}
