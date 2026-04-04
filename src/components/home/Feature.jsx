export default function Feature() {
  return (
    <section className="bg-greenDeep text-white py-28 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-serif">
            Where nature becomes the{" "}
            <span className="italic text-amberLight">boardroom</span>
          </h2>
          <p className="mt-6 text-white/60">
            Designed for curated meetings and retreats...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div
            className="h-40 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7)",
            }}
          />
          <div
            className="h-40 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1592457712400-b9c8e81a8e67)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
