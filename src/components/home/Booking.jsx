export default function Booking() {
  return (
    <section id="booking" className="py-28 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20">
        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-serif mb-6">
            Plan your <span className="italic text-amber">farm journey</span>
          </h2>

          {/* MAP BOX */}
          <div className="mt-10 h-[220px] overflow-hidden border border-amber/30">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kanjirapally,Kerala&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-cream p-10">
          <input className="w-full p-3 mb-4 border" placeholder="Name" />
          <input className="w-full p-3 mb-4 border" placeholder="Email" />

          <button className="w-full bg-greenDeep text-amberLight py-4">
            Send Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
