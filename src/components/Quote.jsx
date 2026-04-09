export default function Quote() {
  return (
    <section className="bg-white py-32 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="w-16 h-[2px] bg-amber mx-auto mb-10"></div>

        {/* Quote */}
        <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-[#1a1a14]">
          “A place where time slows down, and nature speaks in silence.”
        </p>

        {/* Author */}
        <p className="mt-8 text-sm tracking-widest uppercase text-black/50">
          — Guest Experience
        </p>

        {/* Bottom line */}
        <div className="w-16 h-[2px] bg-amber mx-auto mt-10"></div>
      </div>
    </section>
  );
}
