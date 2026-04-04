export default function Footer() {
  return (
    <footer className="bg-greenDeep text-white pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">
      {/* BIG BACKGROUND TEXT */}
      <div className="absolute right-0 bottom-0 text-[180px] font-serif text-white/5 pointer-events-none hidden md:block">
        DURIAN
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-serif mb-4">
            Jacob's <span className="text-amber">Durian</span> Farm
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            India’s first durian destination nestled in the foothills of
            Kerala’s Cardamom Hills. A place where nature, taste, and experience
            come together.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-amber mb-6">
            Navigate
          </h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>
              <a href="#about" className="hover:text-amberLight transition">
                About
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="hover:text-amberLight transition"
              >
                Experiences
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-amberLight transition">
                Booking
              </a>
            </li>
          </ul>
        </div>

        {/* EXPERIENCES */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-amber mb-6">
            Experiences
          </h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="hover:text-amberLight transition">Durian Trail</li>
            <li className="hover:text-amberLight transition">Harvest Table</li>
            <li className="hover:text-amberLight transition">Canopy Retreat</li>
            <li className="hover:text-amberLight transition">ESG Workshops</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <p>© 2025 Jacob's Durian Farm. All rights reserved.</p>
        <p className="italic text-amberLight/60">
          Kanjirapally · Cardamom Hills · Kerala
        </p>
      </div>
    </footer>
  );
}
