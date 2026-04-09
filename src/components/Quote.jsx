import { useEffect, useState } from "react";

export default function Quote() {
  const quotes = [
    {
      text: "A place where time slows down, and nature speaks in silence.",
      author: "Guest Experience",
    },
    {
      text: "The Durian Immersion Trail was incredible! We learned about cultivation, harvesting, and enjoyed an exclusive durian tasting.",
      author: "Visitor Review",
    },
    {
      text: "Seasonal harvest tasting was a feast for all senses. Every fruit had a story, and the flavors were unforgettable.",
      author: "Guest Experience",
    },
    {
      text: "The Quiet Canopy Retreat offered our team the perfect escape. Fresh air, green landscapes, and a chance to reconnect.",
      author: "Corporate Guest",
    },
    {
      text: "Green Synergy Sessions helped our corporate team build alignment in a fun, interactive way far from the boardroom.",
      author: "Team Experience",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-32 px-6 md:px-20 text-center ">
      <div className="max-w-4xl mx-auto relative">
        {/* Top line */}
        <div className="w-16 h-[2px] bg-amber mx-auto mb-10"></div>

        {/* Quote wrapper */}
        <div className="relative h-[120px] md:h-[160px]">
          {quotes.map((q, i) => (
            <p
              key={i}
              className={`absolute inset-0 text-2xl md:text-4xl font-serif italic leading-relaxed text-[#1a1a14] transition-opacity duration-1000 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              “{q.text}”
            </p>
          ))}
        </div>

        {/* Author */}
        <p className="mt-8 text-sm tracking-widest uppercase text-black/50 transition-all duration-700">
          — {quotes[current].author}
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                i === current ? "bg-amber scale-125" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="w-16 h-[2px] bg-amber mx-auto mt-10"></div>
      </div>
    </section>
  );
}
