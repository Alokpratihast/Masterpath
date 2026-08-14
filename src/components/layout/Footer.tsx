




import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { courses } from "@/data/courses";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-slate-900">

      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* ================= CTA ================= */}
      <section className="relative border-b border-white/10 bg-gradient-to-r from-[#0756d9] via-[#0879df] to-[#08a5c4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Start Your Career Journey
            </p>

            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Ready to build your future?
            </h2>

            <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
              Learn practical skills, work on real projects and get dedicated
              placement support.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-[#0756d9] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Book Free Counselling

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-16">

          {/* ================= BRAND ================= */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center"
              aria-label={`${siteConfig.name} home`}
            >
              <Image
                src="/images/logo/newlogo1.png"
                alt={siteConfig.name}
                width={170}
                height={58}
                className="h-auto w-[150px] object-contain"
              />
            </Link>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-slate-600">
              Helping students build successful careers through practical
              learning, real-world projects, expert mentors and dedicated
              placement support.
            </p>

            {/* ================= SOCIAL ================= */}
            <div className="mt-8 flex gap-3">

              {/* Facebook */}
              <a
                href={
                  socialLinks.find((s) => s.label === "Facebook")?.href
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              {/* Instagram */}
              <a
                href={
                  socialLinks.find((s) => s.label === "Instagram")?.href
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href={
                  socialLinks.find((s) => s.label === "LinkedIn")?.href
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>

              {/* YouTube */}
              <a
                href={
                  socialLinks.find((s) => s.label === "YouTube")?.href
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaYoutube size={16} />
              </a>

            </div>

            {/* ================= TRUST BADGE ================= */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <MessageCircle className="h-4 w-4" />
              </span>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Need guidance?
                </p>

                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-900 transition hover:text-blue-600"
                >
                  Talk to our counsellor
                </a>
              </div>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Quick Links
            </h3>

            <div className="mt-7 flex flex-col gap-4">

              {navLinks
                .filter((link) => link.label !== "Home")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-[15px] text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-slate-900"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                ))}

            </div>

          </div>

          {/* ================= COURSES ================= */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Popular Courses
            </h3>

            <div className="mt-7 flex flex-col gap-4">

              {courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group flex w-fit items-center gap-2 text-[15px] text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-slate-900"
                >
                  <span>{course.title}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Contact Us
            </h3>

            <div className="mt-7 space-y-5">

              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <Phone className="h-4 w-4 text-cyan-600" />
                </span>

                <span className="pt-1 text-[15px] text-slate-600 transition group-hover:text-slate-900">
                  {siteConfig.phone}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <Mail className="h-4 w-4 text-cyan-600" />
                </span>

                <span className="break-all pt-1 text-[15px] text-slate-600 transition group-hover:text-slate-900">
                  {siteConfig.email}
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <MapPin className="h-4 w-4 text-cyan-600" />
                </span>

                <span className="text-[15px] leading-6 text-slate-600">
                  {siteConfig.address}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-14 border-t border-slate-200 pt-7">

          <div className="flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

              <Link
                href="/privacy"
                className="transition hover:text-slate-900"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-slate-900"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/sitemap"
                className="transition hover:text-slate-900"
              >
                Sitemap
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}