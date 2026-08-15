

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import FeatureCard from "./FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[20%] top-0 h-64 w-64 rounded-full bg-[#FFB020]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E6FBF4] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#0E9A78]">
            <Sparkles className="h-4 w-4" />
            Why choose MasterPath
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
            More than training.
            <br />
            Career transformation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4B5675]">
            Our programs are designed to bridge the gap between learning and
            employment with industry-focused curriculum, expert mentorship,
            and dedicated placement support.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4F6FF] px-5 py-2.5 text-sm font-bold text-[#2E5EFF] transition hover:gap-3 hover:bg-[#EAF0FF]"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
              accent={ACCENTS[index % ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
