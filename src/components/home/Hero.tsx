


"use client";

import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

import { homeHero } from "../../data/homeHero";

import HeroVisual from "./HeroVisual";
import HeroFeatures from "./HeroFeatures";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#182A55] bg-gradient-to-br from-[#06143B] via-[#0B2B73] to-[#03102D]">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-[450px] w-[450px] rounded-full bg-[#2E5EFF]/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#16C79A]/10 blur-3xl" />

        <div className="absolute right-[25%] top-10 h-64 w-64 rounded-full bg-[#FFB020]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-12 lg:pt-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_520px] lg:gap-8">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase text-white shadow-lg backdrop-blur-md sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16C79A] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16C79A]" />
              </span>

              <Award className="h-4 w-4 text-[#FFB020]" />

              {homeHero.badge}
            </div>

            {/* =========================
                ANIMATED HEADING
            ========================== */}
            <h1 className="max-w-[620px] text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[60px]">

              {/* Line 1 */}
              <span className="hero-word hero-delay-1 block">
                <span className="relative inline-block text-white/40">
                  {homeHero.title.line1.split(" ")[0]}

                  <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-[#FF5C5C]" />
                </span>{" "}

                {homeHero.title.line1.split(" ").slice(1).join(" ")}
              </span>

              {/* Line 2 */}
              <span className="hero-word hero-delay-2 block">
                {homeHero.title.line2}
              </span>

              {/* Line 3 */}
              <span className="hero-word hero-delay-3 relative block">
                <span className="bg-gradient-to-r from-[#18C8FF] to-[#6FE3FF] bg-clip-text text-transparent">
                  {homeHero.title.line3}
                </span>

                <span className="absolute -bottom-2 left-0 h-1 w-2/3 rounded-full bg-gradient-to-r from-[#FFB020] to-[#FFD37A] shadow-[0_0_12px_3px_rgba(255,176,32,0.45)]" />
              </span>

              {/* Line 4 */}
              <span className="hero-word hero-delay-4 block">
                {homeHero.title.line4}
              </span>
            </h1>

            {/* =========================
                DESCRIPTION
            ========================== */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              {homeHero.description}
            </p>

            {/* =========================
                CTA
            ========================== */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href={homeHero.primaryButton.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2E5EFF] to-[#4772FF] px-7 py-4 font-bold text-white shadow-[0_12px_30px_-10px_rgba(46,94,255,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(46,94,255,0.9)]"
              >
                {homeHero.primaryButton.label}

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={homeHero.secondaryButton.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
              >
                {homeHero.secondaryButton.label}
              </Link>
            </div>

            {/* Features */}
            <HeroFeatures />
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div className="relative mx-auto h-[215px] w-[260px] sm:h-[279px] sm:w-[338px] md:h-[344px] md:w-[416px] lg:mx-0 lg:h-[430px] lg:w-[520px]">
            <div className="absolute left-0 top-0 h-[430px] w-[520px] origin-top-left scale-50 sm:scale-[0.65] md:scale-[0.8] lg:scale-100">
              <HeroVisual students={homeHero.students} />
            </div>
          </div>
        </div>

        {/* =========================
            STATS
        ========================== */}
        <HeroStats />
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#03102D]/40 to-transparent" />

      {/* =========================
          HEADING ANIMATION
      ========================== */}
      <style jsx>{`
        @keyframes heroReveal {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .hero-word {
          opacity: 0;
          animation: heroReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.1s;
        }

        .hero-delay-2 {
          animation-delay: 0.3s;
        }

        .hero-delay-3 {
          animation-delay: 0.5s;
        }

        .hero-delay-4 {
          animation-delay: 0.7s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-word {
            opacity: 1;
            animation: none;
            transform: none;
            filter: none;
          }
        }
      `}</style>
    </section>
  );
}