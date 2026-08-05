import {
  MapPinned,
  Navigation,
} from "lucide-react";

import { siteConfig } from "@/data/site";

export default function Map() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <MapPinned className="h-4 w-4" />
            Visit Our Office
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Find Us Easily
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Visit our training center for career counselling,
            classroom sessions, and personalized guidance from our
            experts.
          </p>
        </div>

        {/* Map */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <iframe
            title="NFS Masterpath Location"
            src="https://www.google.com/maps?q=Bangalore,Karnataka&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>

        {/* Address Card */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                NFS Masterpath
              </h3>

              <p className="mt-3 text-lg text-slate-600">
                {siteConfig.address}
              </p>

              <p className="mt-2 text-slate-500">
                Visit us during office hours for admissions,
                counselling, and career guidance.
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
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