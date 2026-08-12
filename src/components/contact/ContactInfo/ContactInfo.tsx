import { Clock3, ArrowRight } from "lucide-react";

import { contactInfo } from "@/data/contactInfo";
import { officeHours } from "@/data/officeHours";

import InfoCard from "./InfoCard";

export default function ContactInfo() {
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
          <span className="inline-flex items-center rounded-full border border-[#DCE5FF] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2E5EFF] shadow-sm sm:text-sm">
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Start Your
            <span className="block text-[#2E5EFF]">
              Career Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64708B] sm:mt-6 sm:text-lg sm:leading-8">
            Have questions about our courses, batches, or career programs?
            Reach out to us and our team will be happy to guide you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <InfoCard {...item} />
            </div>
          ))}
        </div>

        {/* Office Hours */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-[#E1E7F5] bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] sm:mt-16 lg:mt-20">
          {/* Top Accent */}
          <div className="h-1.5 bg-gradient-to-r from-[#2E5EFF] via-[#1261C9] to-[#16C79A]" />

          <div className="p-6 sm:p-8 lg:p-10">
            {/* Office Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#EAF0FF] text-[#2E5EFF] sm:h-14 sm:w-14">
                  <Clock3 className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2E5EFF]">
                    Visit Us
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-[#0F172A] sm:text-3xl">
                    Office Hours
                  </h3>
                </div>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6FBF4] px-4 py-2 text-xs font-bold text-[#0E9A78]">
                <span className="h-2 w-2 rounded-full bg-[#16C79A]" />
                We&apos;re available
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {officeHours.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[#E8ECF5] bg-[#F8FAFF] px-4 py-4 transition-colors duration-200 hover:border-[#C9D6FF] hover:bg-[#F4F6FF] sm:px-5"
                >
                  <span className="text-sm font-semibold text-[#59657F] sm:text-base">
                    {item.day}
                  </span>

                  <span className="whitespace-nowrap text-sm font-black text-[#2E5EFF] sm:text-base">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col gap-4 border-t border-[#E8ECF5] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-base font-bold text-[#0F172A] sm:text-lg">
                  Need help choosing the right course?
                </h4>

                <p className="mt-1 text-sm text-[#6B7690]">
                  Talk to our career counsellors for personalized guidance.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E5EFF] px-5 py-3 text-sm font-black text-white shadow-[0_10px_25px_-8px_rgba(46,94,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E3FCC] sm:w-auto"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}