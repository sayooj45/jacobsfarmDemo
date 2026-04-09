import durianbig from "../../assets/images/durianfirst.jpg";
import duriansmall from "../../assets/images/durianSmall.jpg";
export default function Feature() {
  return (
    <section className="bg-greenDeep text-white py-32 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-amberLight tracking-[0.3em] text-xs mb-4 uppercase">
            Corporate & Retreats
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Where nature becomes the{" "}
            <span className="italic text-amberLight">boardroom</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-md">
            Designed for curated meetings, leadership retreats, and mindful
            gatherings — surrounded by the calm of nature and the richness of
            the land.
          </p>

          {/* CTA */}
          <a
            href="#booking"
            className="inline-block mt-8 border border-amberLight text-amberLight px-6 py-3 text-xs tracking-widest uppercase hover:bg-amberLight hover:text-greenDeep transition"
          >
            Plan Your Retreat
          </a>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative">
          {/* Main Image */}
          <div
            className="h-[350px] md:h-[450px] w-full bg-cover bg-center rounded-xl shadow-lg"
            style={{
              backgroundImage: `url(${durianbig})`,
            }}
          />

          {/* Floating Accent Image */}
          <div
            className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 bg-cover bg-center rounded-lg shadow-md border border-white/10"
            style={{
              backgroundImage: `url(${duriansmall})`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
