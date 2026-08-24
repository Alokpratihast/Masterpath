import {
  MapPinned,
  Navigation,
} from "lucide-react";

export default function Map() {
  const officeAddress =
    "15th Main Rd, 3rd Stage, 4th Block, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092";

  const encodedAddress = encodeURIComponent(officeAddress);

  return (
    <section className="relative overflow-hidden bg-[#F7F9FF] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#2E5EFF]/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#16C79A]/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE5FF] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2E5EFF] shadow-sm sm:text-sm">
            <MapPinned className="h-4 w-4" />
            Visit Our Office
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Find Us Easily
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64708B] sm:text-lg sm:leading-8">
            Visit our training center for career counselling, classroom
            sessions, and personalized guidance from our experts.
          </p>
        </div>

        {/* Google Map */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#E1E7F5] bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] sm:mt-14 lg:mt-16">
          <iframe
            title="NFS Masterpath Head Office Location"
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[350px] w-full border-0 sm:h-[450px] lg:h-[500px]"
          />
        </div>

        {/* Address Card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#E1E7F5] bg-white shadow-[0_15px_45px_-25px_rgba(15,23,42,0.25)] sm:mt-10">
          {/* Gradient Top Border */}
          <div className="h-1.5 bg-gradient-to-r from-[#2E5EFF] via-[#1261C9] to-[#16C79A]" />

          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            {/* Address */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#EAF0FF] text-[#2E5EFF]">
                  <MapPinned className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black text-[#0F172A] sm:text-2xl">
                  NFS Masterpath Head Office
                </h3>
              </div>

              <p className="mt-4 text-base leading-7 text-[#59657F] sm:text-lg">
                {officeAddress}
              </p>

              <p className="mt-2 text-sm leading-6 text-[#7A849C]">
                Visit us during office hours for admissions, counselling, and
                career guidance.
              </p>
            </div>

            {/* Directions Button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2E5EFF] px-6 py-3.5 text-sm font-black text-white shadow-[0_10px_25px_-8px_rgba(46,94,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E3FCC] sm:w-auto sm:px-8 sm:py-4"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
