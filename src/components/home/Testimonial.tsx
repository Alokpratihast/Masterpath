

import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { Star, MessageCircleHeart } from "lucide-react";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function Testimonials() {
  // duplicate the list so the scroll loop is seamless
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#F4F6FF] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[18%] top-0 h-64 w-64 rounded-full bg-[#FFB020]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF3DE] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#B87700]">
            <MessageCircleHeart className="h-4 w-4" />
            Student success stories
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
            Hear from our successful Almuni
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4B5675]">
            Thousands of students have transformed their careers through
            industry-focused learning, live projects, and dedicated
            placement support.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.1)]">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#FFB020] text-[#FFB020]"
                />
              ))}
            </div>

            <span className="text-sm font-bold text-[#0F172A]">
              4.8/5 · 1.1+ student reviews
            </span>
          </div>
        </div>

        {/* Cards — auto-scrolling marquee, pauses on hover */}
        <div
          className="group/marquee mt-20 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div className="testimonial-marquee-track flex w-max gap-8">
            {loopTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[340px] shrink-0 md:w-[380px]"
              >
                <TestimonialCard
                  testimonial={item}
                  accent={ACCENTS[index % ACCENTS.length]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonial-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .testimonial-marquee-track {
          animation: testimonial-marquee-scroll 45s linear infinite;
        }
        .group\\/marquee:hover .testimonial-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
