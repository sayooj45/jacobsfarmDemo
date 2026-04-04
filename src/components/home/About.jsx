export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="h-[500px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1693399991519-bef70bed19a2?q=80&w=688&auto=format&fit=crop"
            alt="durian farm"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs tracking-[0.4em] text-amber mb-4">OUR STORY</p>

          <h2 className="text-5xl font-serif text-greenDeep mb-6">
            Let go,
            <br />
            <span className="italic text-amber">gently.</span>
          </h2>

          <p className="italic border-l-2 pl-6 mb-6">
            Tucked away in the foothills of Kerala’s Cardamom Hills,
            Kanjirapally is an ancient agrarian landscape shaped by rain, red
            loam, and centuries of cultivation. It is here that Jacob’s Durian
            Farm has evolved across generations, adapting to shifting markets
            while remaining deeply rooted in the land. What began as a legacy of
            spice trading and plantation crops has today transformed into a rare
            mixed orchard, envisioned by Mr. Jose Jacob as a space where
            agriculture meets experience. Spread across 8.5 acres, the farm is
            home to over 190 durian trees featuring some of the world’s most
            celebrated varieties, alongside a rich ecosystem of tropical fruits
            like mangosteen, rambutan, avocado, and jackfruit. Each season
            brings with it a distinct sensory journey, where flavour, terroir,
            and time converge. Guests are invited to experience this living
            landscape through curated durian tastings, guided walks, and
            immersive encounters that reveal the story behind every fruit.
            Beyond cultivation, Jacob’s Durian Farm offers a quiet, immersive
            setting for corporates seeking meaningful retreats. Designed for
            curated meetings, team offsites, and experiential gatherings, the
            farm blends nature, learning, and leisure into a seamless
            experience. Here, under a canopy of green, conversations deepen,
            teams reconnect, and ideas take root, making it not just a
            destination, but a setting where intent, nature, and collaboration
            come together.
          </p>

          <div className="flex gap-10 mt-10">
            <div>
              <h3 className="text-4xl font-serif">8.5ac</h3>
              <p className="text-xs tracking-widest">Farm Area</p>
            </div>
            <div>
              <h3 className="text-4xl font-serif">190+</h3>
              <p className="text-xs tracking-widest">Trees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
