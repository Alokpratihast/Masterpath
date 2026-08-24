import Link from "next/link";
import {
  ArrowRight,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/data/site";

export default function HeroContent() {
  return (
    <div>
      <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
        Contact Us
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
        Let&apos;s Build
        <br />
        Your Career Together
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
        Whether you&apos;re looking for career guidance, course information,
        or placement support, our team is here to help you at every step.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Courses

          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
        >
          <Phone className="h-5 w-5" />

          Call Now
        </Link>
      </div>
    </div>
  );
}