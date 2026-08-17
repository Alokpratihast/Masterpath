

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

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(15,23,42,0.10)]">
      {/* =========================================================
          TOP INFO BAR
      ========================================================== */}
      <div className="hidden bg-[#0F172A] text-[#B9C4FF] sm:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-4 px-4 text-[13px] font-medium sm:px-6 lg:px-8">
          {/* Left */}
          <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-5">
            {/* Location */}
            <span className="hidden min-w-0 max-w-[520px] items-center gap-2 md:inline-flex lg:max-w-[560px]">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[#2E5EFF]/20 text-[#7C9CFF]">
                <MapPin className="h-3 w-3" />
              </span>

              <span className="truncate whitespace-nowrap">
                {siteConfig.address}
              </span>
            </span>

            {/* Email */}
            <a
              className="inline-flex min-w-0 max-w-[190px] shrink items-center gap-2 transition hover:text-white"
              href={`mailto:${siteConfig.email}`}
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[#16C79A]/20 text-[#5FE3C0]">
                <Send className="h-3 w-3" />
              </span>

              <span className="truncate">{siteConfig.email}</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-3 lg:gap-4">
            {/* Hiring Partners */}
            <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-[#FFB020]/15 px-3 py-1 text-xs font-bold text-[#FFC553] md:inline-flex">
              <Briefcase className="h-3.5 w-3.5" />
              30+ hiring partners
            </span>

            {/* Social Links */}
            <div className="hidden shrink-0 items-center gap-1 md:flex lg:gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-7 w-7 place-items-center rounded-md text-[11px] font-black text-[#B9C4FF] transition hover:bg-white/10 hover:text-white"
                  aria-label={link.label}
                >
                  {link.label.slice(0, 2)}
                </a>
              ))}
            </div>

            {/* Phone */}
            <a
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-semibold text-white transition hover:text-[#7C9CFF]"
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#7C9CFF]" />
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
            <Image
              src="/images/logo/newlogo1.png"
              alt="MasterPath"
              width={180}
              height={60}
              priority
              className="h-[52px] w-auto object-contain sm:h-[62px] lg:h-[68px]"
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
                    className="inline-flex h-12 items-center gap-1.5 rounded-xl px-4 text-base font-bold text-slate-900 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Our Courses

                    <ChevronDown className="h-4 w-4 text-slate-700 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* =================================================
                      COURSES MEGA MENU
                  ================================================== */}
                  <div className="invisible absolute left-1/2 top-full w-[440px] -translate-x-1/2 translate-y-4 rounded-2xl border border-[#E4E9FB] bg-white p-3 opacity-0 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] transition-all duration-200 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                    {/* Header */}
                    <div className="mb-2 flex items-center justify-between px-3 pb-3">
                      <span className="inline-flex items-center gap-1.5 text-sm font-black text-[#0F172A]">
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
                          className="group/item flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-[#F4F6FF]"
                        >
                          <div>
                            <span className="block text-sm font-black text-[#0F172A] transition-colors group-hover/item:text-[#2E5EFF]">
                              {course.title}
                            </span>

                            <span className="mt-1 block text-xs leading-5 text-[#6B7690]">
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
                  className="inline-flex h-12 items-center rounded-xl px-4 text-base font-bold text-slate-900 transition hover:bg-slate-100 hover:text-slate-900"
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
            {/* Counselling */}
            <Link
              href="/contact#contact-form"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-5 text-sm font-bold text-slate-900 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
            >
              Book free counselling
            </Link>

            {/* Enquire */}
            <Link
              href="/contact#contact-form"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#2E5EFF] px-5 text-sm font-black text-white shadow-[0_8px_20px_-6px_rgba(46,94,255,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3FCC] hover:shadow-[0_12px_25px_-6px_rgba(46,94,255,0.65)]"
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
              className="grid h-10 w-10 place-items-center rounded-xl border-2 border-slate-300 bg-white text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 sm:h-11 sm:w-11"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>

            {/* Menu */}
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border-2 border-slate-300 bg-white text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 sm:h-11 sm:w-11"
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
          "border-t border-[#E4E9FB] bg-white px-4 pb-5 shadow-lg lg:hidden",
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
              className="rounded-xl px-3 py-3 text-sm font-bold text-[#0F172A] transition hover:bg-[#F4F6FF] hover:text-[#2E5EFF]"
            >
              {link.label === "Courses" ? "Our Courses" : link.label}
            </Link>
          ))}

          {/* Hiring Partners */}
          <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFB020]/15 px-3 py-1 text-xs font-bold text-[#B87700]">
            <Briefcase className="h-3.5 w-3.5" />
            30+ hiring partners
          </span>

          {/* Contact Info */}
          <div className="mt-2 flex flex-col gap-2 border-t border-[#E4E9FB] pt-3 text-sm text-[#5B6685]">
            {/* Location */}
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#2E5EFF]" />
              {siteConfig.address}
            </span>

            {/* Email */}
            <a
              className="inline-flex items-center gap-2"
              href={`mailto:${siteConfig.email}`}
            >
              <Send className="h-4 w-4 shrink-0 text-[#2E5EFF]" />
              {siteConfig.email}
            </a>
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact#contact-form"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-xl bg-[#2E5EFF] px-5 text-sm font-black text-white transition hover:bg-[#1E3FCC]"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </header>
  );
}