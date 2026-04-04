export default function Marquee() {
  const items = [
    "Durian",
    "Mangosteen",
    "Rambutan",
    "Avocado",
    "Jackfruit",
    "42 Varieties",
    "Durian",
    "Mangosteen",
    "Rambutan",
    "Avocado",
    "Jackfruit",
    "42 Varieties",
  ];

  return (
    <div className="bg-greenDeep py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="px-8 italic text-cream/60">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
