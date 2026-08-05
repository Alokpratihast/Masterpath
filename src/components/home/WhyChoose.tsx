import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FeatureCard from "./FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Why Choose MasterPath
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            More Than Training.
            <br />
            Career Transformation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our programs are designed to bridge the gap between learning
            and employment with industry-focused curriculum, expert
            mentorship, and dedicated placement support.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}