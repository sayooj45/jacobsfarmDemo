const data = [
  "Durian Immersion Trail",
  "Seasonal Harvest Table",
  "Quiet Canopy Retreat",
  "Green Synergy Sessions",
  "Living Earth Workshops",
  "Curated Farm Day",
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-cream py-32 px-6 md:px-20">
      <h2 className="text-center text-5xl font-serif mb-20">
        The Farm <span className="italic text-amber">Experiences</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-10 bg-white hover:bg-greenDeep transition duration-300 rounded-lg shadow-sm hover:shadow-lg group"
          >
            <h3 className="text-2xl font-serif group-hover:text-white">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
