

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

// Category -> accent tint used on the mega-menu tags. Falls back to blue.
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
      {/* Top info bar */}
      <div className="hidden bg-[#0F172A] text-[#B9C4FF] sm:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 text-[13px] font-medium sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-5 md:gap-7">
            <span className="hidden items-center gap-2 whitespace-nowrap md:inline-flex">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-[#2E5EFF]/20 text-[#7C9CFF]">
                <MapPin className="h-3 w-3" />
              </span>
              {siteConfig.address}
            </span>

            <a
              className="inline-flex min-w-0 items-center gap-2 transition hover:text-white"
              href={`mailto:${siteConfig.email}`}
            >
              <span className="grid h-5 w-5 place-items-center rounded-md bg-[#16C79A]/20 text-[#5FE3C0]">
                <Send className="h-3 w-3" />
              </span>
              <span className="truncate">{siteConfig.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            {/* Placement-focused trust badge — reinforces the brand promise in nav */}
            <span className="hidden items-center gap-1.5 rounded-full bg-[#FFB020]/15 px-3 py-1 text-xs font-bold text-[#FFC553] md:inline-flex">
              <Briefcase className="h-3.5 w-3.5" />
              30+ hiring partners
            </span>

            <div className="hidden items-center gap-2 md:flex">
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

            <a
              className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#7C9CFF]"
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
            >
              <Phone className="h-3.5 w-3.5 text-[#7C9CFF]" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0B3B8F] via-[#1261C9] to-[#18A0AE]">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-[76px] lg:px-8">
          <Link
  href="/"
  className="flex h-full shrink-0 items-center"
  aria-label="MasterPath home"
>
  <Image
    src="/images/logo/logo3.png"
    alt="MasterPath"
    width={180}
    height={60}
    priority
    className="h-[52px] w-auto object-contain sm:h-[62px] lg:h-[68px]"
  />
</Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.label === "Courses" ? (
                <div className="group relative" key={link.href}>
                  <Link
                    className="inline-flex h-12 items-center gap-1.5 rounded-xl px-4 text-[15px] font-bold text-[#0F172A] transition hover:bg-[#F4F6FF] hover:text-[#2E5EFF]"
                    href={link.href}
                  >
                    Our Courses
                    <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                  </Link>

                  <div className="invisible absolute left-1/2 top-full w-[440px] -translate-x-1/2 translate-y-4 rounded-2xl border border-[#E4E9FB] bg-white p-3 opacity-0 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] transition group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
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

                    <div className="grid gap-1">
                      {courses.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          className="group/item flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-[#F4F6FF]"
                        >
                          <div>
                            <span className="block text-sm font-black text-[#0F172A] group-hover/item:text-[#2E5EFF]">
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
                <Link
                  key={link.href}
                  className="inline-flex h-12 items-center rounded-xl px-4 text-[15px] font-bold text-[#0F172A] transition hover:bg-[#F4F6FF] hover:text-[#2E5EFF]"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#E4E9FB] px-5 text-sm font-bold text-[#0F172A] transition hover:border-[#2E5EFF] hover:text-[#2E5EFF]"
            >
              Book free counselling
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#2E5EFF] px-5 text-sm font-black text-white shadow-[0_8px_20px_-6px_rgba(46,94,255,0.55)] transition hover:-translate-y-0.5 hover:bg-[#1E3FCC]"
            >
              Enquire now →
            </Link>
          </div>

          {/* Mobile / tablet actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              className="grid h-10 w-10 place-items-center rounded-xl border-2 border-[#E4E9FB] text-[#0F172A] transition hover:border-[#2E5EFF] hover:text-[#2E5EFF] sm:h-11 sm:w-11"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl border-2 border-[#E4E9FB] text-[#0F172A] sm:h-11 sm:w-11"
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

      {/* Mobile menu panel */}
      <div
        className={cn(
          "border-t border-[#E4E9FB] bg-white px-4 pb-5 shadow-lg lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-1 pt-3">
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

          <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FFB020]/15 px-3 py-1 text-xs font-bold text-[#B87700]">
            <Briefcase className="h-3.5 w-3.5" />
            30+ hiring partners
          </span>

          <div className="mt-2 flex flex-col gap-2 border-t border-[#E4E9FB] pt-3 text-sm text-[#5B6685]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#2E5EFF]" />
              {siteConfig.address}
            </span>
            <a
              className="inline-flex items-center gap-2"
              href={`mailto:${siteConfig.email}`}
            >
              <Send className="h-4 w-4 shrink-0 text-[#2E5EFF]" />
              {siteConfig.email}
            </a>
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-xl bg-[#2E5EFF] px-5 text-sm font-black text-white"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </header>
  );
}
