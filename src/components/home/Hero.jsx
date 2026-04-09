import logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source
          src="https://jacobsdurainfarm.blr1.cdn.digitaloceanspaces.com/content/heroVideo%20(1).mp4"
          type="video/mp4"
        />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>

      {/* 🌿 Content */}
      <div className="relative z-10 text-center text-white px-5 sm:px-8 md:px-12 max-w-5xl mx-auto">
        {/* 📍 Location */}
        <p className="tracking-[0.35em] text-amberLight text-[9px] sm:text-xs md:text-sm mb-6 sm:mb-8 uppercase">
          Kanjirapally · Kerala · India
        </p>

        {/* 🏷️ Main Heading */}
        <h1
          className="
            font-serif italic leading-[1.2] tracking-tight
            text-[20px]
            sm:text-[28px]
            md:text-[38px]
            lg:text-[52px]
            xl:text-[60px]
            drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
        >
          India’s first durian farm <br className="hidden sm:block" />
          showcasing <span className="text-amberLight">42 rare varieties</span>
          , <br className="hidden sm:block" />
          and an ecosystem <br className="hidden sm:block" />
          beyond the ordinary
        </h1>

        {/* 🔘 Optional CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="#experiences"
            className="px-6 py-3 text-xs sm:text-sm tracking-widest uppercase border border-white/40 hover:bg-white hover:text-black transition-all duration-500"
          >
            Explore Experiences
          </a>
        </div>
      </div>
    </section>
  );
}
