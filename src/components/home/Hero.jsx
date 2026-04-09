// import video from "../../assets/videos/heroVideo.mp4";
import logo from "../../assets/images/logo.png";
// import video from "../../assets/images/videoScreenshot.png";
export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 🎥 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src="https://jacobsdurainfarm.blr1.cdn.digitaloceanspaces.com/content/heroVideo%20(1).mp4"
          type="video/mp4"
        />
      </video>
      {/* <img
        src={video}
        alt="video"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      /> */}

      {/* 🌑 Overlay (VERY IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-6 max-w-4xl mx-auto">
        {/* Location */}
        <p className="tracking-[0.4em] text-amberLight text-[10px] sm:text-xs mb-8 uppercase">
          Kanjirapally · Kerala · India
        </p>

        {/* MAIN TAGLINE (BIG) */}
        {/* <p
          className="font-serif italic leading-tight 
    text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] 
    text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          India’s First Durian Destination
        </p> */}
      </div>
    </section>
  );
}
