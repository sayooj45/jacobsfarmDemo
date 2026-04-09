export default function Booking() {
  return (
    <section
      id="booking"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
        {/* LEFT */}
        <div>
          <p className="text-amber tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 uppercase">
            Plan Your Visit
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4 sm:mb-6">
            Plan your <span className="italic text-amber">farm journey</span>
          </h2>

          <p className="text-sm sm:text-base text-black/60 max-w-md">
            Share your details and we’ll curate a personalized farm experience
            tailored to your needs.
          </p>

          {/* MAP */}
          <div className="mt-6 sm:mt-8 md:mt-10 h-[180px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-xl border border-black/10 shadow-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kanjirapally,Kerala&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-cream p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl border border-black/5 shadow-sm">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none transition"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none transition"
            />

            {/* Enquiry Type */}
            <select className="w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none text-black/60">
              <option>Enquiry Type</option>
              <option>Corporate Visit</option>
              <option>Family Visit</option>
              <option>Workshops</option>
              <option>Custom Experience</option>
            </select>

            {/* Date */}
            <input
              type="date"
              className="w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none text-black/60"
            />

            {/* Time Slot */}
            <select className="w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none text-black/60">
              <option>Select Time Slot</option>
              <option>Morning (9 AM - 12 PM)</option>
              <option>Afternoon (12 PM - 3 PM)</option>
              <option>Evening (3 PM - 6 PM)</option>
            </select>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message"
              className="sm:col-span-2 w-full p-3 text-sm sm:text-base border border-black/10 rounded-md focus:border-amber outline-none resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="sm:col-span-2 w-full sm:w-auto justify-self-center mt-2 sm:mt-4
              bg-greenDeep text-amberLight 
              px-8 sm:px-10 py-3 
              uppercase tracking-widest text-[10px] sm:text-xs 
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
