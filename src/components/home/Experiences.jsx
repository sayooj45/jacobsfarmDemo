const data = [
  {
    title: "Durian Immersion Trail",
    tag: "For Corporates / Families",
    desc: "Step into the heart of the plantation and experience Durian like never before. Explore cultivation, harvesting insights, and the science behind the ‘King of Fruits’, ending with an exclusive seasonal tasting.",
  },
  {
    title: "Seasonal Harvest Table",
    tag: "Tasting Experience",
    desc: "A sensorial tasting of fresh durian and seasonal farm produce. Discover flavours, textures, and the story behind each crop rooted in sustainable farming.",
  },
  {
    title: "Quiet Canopy Retreat",
    tag: "For Corporates",
    desc: "Unplug under a canopy of green. A serene escape designed for pause, reflection, and reconnection with nature.",
  },
  {
    title: "Green Synergy Sessions",
    tag: "For Corporates",
    desc: "Purpose-driven team experiences that foster collaboration and connection through shared farm activities and guided interactions.",
  },
  {
    title: "Living Earth Workshops",
    tag: "ESG / Sustainability",
    desc: "Interactive sessions on eco-living, sustainability, and regenerative farming for conscious organizations.",
  },
  {
    title: "Curated Farm Day",
    tag: "For All",
    desc: "A fully customized farm experience with guided tours, curated meals, and flexible activities tailored to your group.",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-cream py-32 px-6 md:px-20">
      <h2 className="text-center text-5xl font-serif mb-20">
        The Farm <span className="italic text-amber">Experiences</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-xl border border-black/5 
      hover:bg-greenDeep transition duration-500 group 
      hover:shadow-xl flex flex-col justify-between"
          >
            {/* TAG */}
            <p className="text-[10px] tracking-widest uppercase text-amber mb-4">
              {item.tag}
            </p>

            {/* TITLE */}
            <h3
              className="text-xl md:text-2xl font-serif mb-4 
      group-hover:text-white transition"
            >
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="text-sm text-black/60 leading-relaxed 
      group-hover:text-white/70 transition"
            >
              {item.desc}
            </p>

            {/* LINE */}
            <div className="w-10 h-[2px] bg-amber mt-6 group-hover:bg-white transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
