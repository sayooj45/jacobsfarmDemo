export default function Booking() {
  return (
    <section id="booking" className="py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT */}
        <div>
          <p className="text-amber tracking-[0.3em] text-xs mb-4 uppercase">
            Plan Your Visit
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Plan your <span className="italic text-amber">farm journey</span>
          </h2>

          <p className="text-black/60 max-w-md">
            Share your details and we’ll curate a personalized farm experience
            tailored to your needs.
          </p>

          {/* MAP */}
          <div className="mt-10 h-[240px] overflow-hidden rounded-xl border border-black/10 shadow-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kanjirapally,Kerala&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-cream p-8 md:p-10 rounded-2xl border border-black/5 shadow-sm">
          <form className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none transition"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none transition"
            />

            {/* Enquiry Type */}
            <select className="w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none text-black/60">
              <option>Enquiry Type</option>
              <option>Corporate Visit</option>
              <option>Family Visit</option>
              <option>Workshops</option>
              <option>Custom Experience</option>
            </select>

            {/* Date */}
            <input
              type="date"
              className="w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none text-black/60"
            />

            {/* Time Slot */}
            <select className="w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none text-black/60">
              <option>Select Time Slot</option>
              <option>Morning (9 AM - 12 PM)</option>
              <option>Afternoon (12 PM - 3 PM)</option>
              <option>Evening (3 PM - 6 PM)</option>
            </select>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message"
              className="col-span-2 w-full p-3 border border-black/10 rounded-md focus:border-amber outline-none resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="col-span-2 justify-self-center mt-4
              bg-greenDeep text-amberLight 
              px-10 py-3 
              uppercase tracking-widest text-xs 
              rounded-full 
              hover:bg-greenDeep/90 hover:scale-105 active:scale-95
              transition-all duration-300"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
