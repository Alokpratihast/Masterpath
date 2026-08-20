"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useState } from "react";

import { courses } from "@/data/courses";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

// Category -> accent tint used on the mega-menu tags
const CATEGORY_STYLES: Record<string, string> = {
  Development: "bg-[#EAF0FF] text-[#2E5EFF]",
  Data: "bg-[#E6FBF4] text-[#0E9A78]",
  Design: "bg-[#FFF3DE] text-[#B87700]",
  Marketing: "bg-[#FFE9E9] text-[#D14747]",
};

// Social label -> icon + brand hover color, used in the top info bar
const SOCIAL_ICON_MAP: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; hover: string }
> = {
  Facebook: { icon: FaFacebookF, hover: "hover:bg-[#1877F2]" },
  Instagram: { icon: FaInstagram, hover: "hover:bg-[#E1306C]" },
  LinkedIn: { icon: FaLinkedinIn, hover: "hover:bg-[#0A66C2]" },
  X: { icon: FaXTwitter, hover: "hover:bg-slate-100" },
  Twitter: { icon: FaXTwitter, hover: "hover:bg-slate-100" },
  YouTube: { icon: FaYoutube, hover: "hover:bg-[#FF0000]" },
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(15,23,42,0.10)]">
      {/* =========================================================
          TOP INFO BAR
      ========================================================== */}
      <div className="hidden border-b border-slate-200 bg-white text-slate-600 sm:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-[12.5px] font-medium sm:px-6 lg:px-8">
          {/* Left */}
          <div className="flex min-w-0 flex-1 items-center gap-5 lg:gap-6">
            {/* Location */}
            <span className="hidden min-w-0 max-w-[480px] items-center gap-2 md:inline-flex lg:max-w-[520px]">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#0B5FAE]" />

              <span className="truncate whitespace-nowrap text-slate-600">
                {siteConfig.address}
              </span>
            </span>

            {/* Divider */}
            <span className="hidden h-3.5 w-px shrink-0 bg-slate-200 md:block" />

            {/* Email */}
            <a
              className="inline-flex min-w-0 max-w-[200px] shrink items-center gap-2 transition-colors hover:text-[#0B5FAE]"
              href={`mailto:${siteConfig.email}`}
            >
              <Send className="h-3.5 w-3.5 shrink-0 text-[#0B5FAE]" />

              <span className="truncate text-slate-600">
                {siteConfig.email}
              </span>
            </a>
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-4 lg:gap-5">
            {/* Hiring Partners */}
            <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11.5px] font-bold tracking-wide text-slate-700 md:inline-flex">
              <Briefcase className="h-3 w-3 text-[#FFB020]" />
              30+ hiring partners
            </span>

            {/* Divider */}
            <span className="hidden h-3.5 w-px shrink-0 bg-slate-200 md:block" />

            {/* Social Links */}
            <div className="hidden shrink-0 items-center gap-1.5 md:flex">
              {socialLinks.map((link) => {
                const entry = SOCIAL_ICON_MAP[link.label];
                if (!entry) return null;
                const Icon = entry.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "grid h-[26px] w-[26px] place-items-center rounded-full bg-slate-100 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-white",
                      entry.hover,
                    )}
                    aria-label={link.label}
                  >
                    <Icon className="h-3 w-3" />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <span className="hidden h-3.5 w-px shrink-0 bg-slate-200 md:block" />

            {/* Phone */}
            <a
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-bold text-slate-900 transition-colors hover:text-[#0B5FAE]"
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}
      <div className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-[76px] lg:px-8">
          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            href="/"
            className="flex h-full shrink-0 items-center"
            aria-label="MasterPath home"
          >
            {/* Icon-only mark on small/medium screens */}
            <Image
              src="/images/logo/logo-icon.png"
              alt="MasterPath"
              width={269}
              height={187}
              priority
              className="h-[34px] w-auto object-contain sm:h-[40px] lg:hidden"
            />

            {/* Full lockup (icon + wordmark) on desktop */}
            <Image
              src="/images/logo/logo.png"
              alt="MasterPath"
              width={860}
              height={310}
              priority
              className="hidden h-[45px] w-auto object-contain lg:block"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAV LINKS
          ====================================================== */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.label === "Courses" ? (
                /* ================= COURSES ================= */
                <div className="group relative" key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex h-12 items-center gap-1.5 rounded-xl px-4 text-base font-semibold text-slate-700 transition hover:bg-[#EAF0FF] hover:text-[#0B5FAE]"
                  >
                    Our Courses

                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#0B5FAE]" />
                  </Link>

                  {/* =================================================
                      COURSES MEGA MENU
                  ================================================== */}
                  <div className="invisible absolute left-1/2 top-full w-[440px] -translate-x-1/2 translate-y-4 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] transition-all duration-200 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                    {/* Header */}
                    <div className="mb-2 flex items-center justify-between border-b border-slate-200 px-3 pb-3">
                      <span className="inline-flex items-center gap-1.5 text-sm font-black text-slate-900">
                        <Sparkles className="h-4 w-4 text-[#FFB020]" />
                        Popular courses
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E6FBF4] px-2.5 py-1 text-xs font-bold text-[#0E9A78]">
                        <Star className="h-3 w-3" />
                        Hybrid batches
                      </span>
                    </div>

                    {/* Course List */}
                    <div className="grid gap-1">
                      {courses.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          className="group/item flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-[#EAF0FF]"
                        >
                          <div>
                            <span className="block text-sm font-black text-slate-900 transition-colors group-hover/item:text-[#0B5FAE]">
                              {course.title}
                            </span>

                            <span className="mt-1 block text-xs leading-5 text-slate-600">
                              {course.duration} · {course.mode}
                            </span>
                          </div>

                          <span
                            className={cn(
                              "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold",
                              CATEGORY_STYLES[course.category] ??
                                "bg-[#EAF0FF] text-[#2E5EFF]",
                            )}
                          >
                            {course.category}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* ================= NORMAL LINKS ================= */
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex h-12 items-center rounded-xl px-4 text-base font-semibold text-slate-700 transition hover:bg-[#EAF0FF] hover:text-[#0B5FAE]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* =====================================================
              DESKTOP CTA BUTTONS
          ====================================================== */}
          <div className="hidden items-center gap-3 xl:flex">
            {/* Enquire */}
            <Link
              href="/contact#contact-form"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0E5FAF] px-5 text-sm font-black text-white shadow-[0_8px_20px_-6px_rgba(14,95,175,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A4F91] hover:shadow-[0_12px_25px_-6px_rgba(14,95,175,0.40)]"
            >
              Enquire now →
            </Link>
          </div>

          {/* =====================================================
              MOBILE / TABLET ACTIONS
          ====================================================== */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:border-[#0B5FAE]/30 hover:bg-[#EAF0FF] hover:text-[#0B5FAE] sm:h-11 sm:w-11"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>

            {/* Menu */}
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:border-[#0B5FAE]/30 hover:bg-[#EAF0FF] hover:text-[#0B5FAE] sm:h-11 sm:w-11"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <div
        className={cn(
          "border-t border-slate-200 bg-white px-4 pb-5 shadow-lg lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-1 pt-3">
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#EAF0FF] hover:text-[#0B5FAE]"
            >
              {link.label === "Courses" ? "Our Courses" : link.label}
            </Link>
          ))}

          {/* Hiring Partners */}
          <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#B87700]">
            <Briefcase className="h-3.5 w-3.5" />
            30+ hiring partners
          </span>

          {/* Contact Info */}
          <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3 text-sm text-slate-600">
            {/* Location */}
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#0B5FAE]" />
              {siteConfig.address}
            </span>

            {/* Email */}
            <a
              className="inline-flex items-center gap-2 hover:text-[#0B5FAE]"
              href={`mailto:${siteConfig.email}`}
            >
              <Send className="h-4 w-4 shrink-0 text-[#0B5FAE]" />
              {siteConfig.email}
            </a>
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact#contact-form"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-xl bg-[#0E5FAF] px-5 text-sm font-black text-white transition hover:bg-[#0A4F91]"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </header>
  );
}
