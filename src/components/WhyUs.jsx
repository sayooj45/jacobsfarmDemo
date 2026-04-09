export default function WhyUs() {
  const items = [
    "42+ Exotic Varieties",
    "Guided Farm Experiences",
    "Eco-Luxury Environment",
    "Private Retreat Spaces",
  ];

  return (
    <section
      id="whyChoose"
      className="py-32 px-6 md:px-20 bg-white text-center"
    >
      <h2 className="text-5xl font-serif mb-20">
        Why Choose <span className="italic text-amber">Our Farm</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-xl border border-amber/20 shadow-sm hover:shadow-md transition"
          >
            <p className="text-lg font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
