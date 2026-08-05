"use client";

import Link from "next/link";
import {
  BookOpenCheck,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  X,
} from "lucide-react";
import { useState } from "react";
import { courses } from "@/data/courses";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200 bg-[#f7f9fd] text-slate-800">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 text-sm font-medium sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4 md:gap-7">
            <span className="hidden items-center gap-2 whitespace-nowrap sm:inline-flex">
              <MapPin className="h-4 w-4 text-[#0061a8]" />
              {siteConfig.address}
            </span>
            <span className="hidden h-5 w-px bg-slate-300 sm:block" />
            <a className="inline-flex min-w-0 items-center gap-2 transition hover:text-[#0061a8]" href={`mailto:${siteConfig.email}`}>
              <Send className="h-4 w-4 shrink-0 text-[#0061a8]" />
              <span className="truncate">{siteConfig.email}</span>
            </a>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-md text-xs font-black text-[#0061a8] transition hover:bg-white hover:text-[#004f8c]" aria-label={link.label}>
                  {link.label.slice(0, 2)}
                </a>
              ))}
            </div>
            <span className="h-5 w-px bg-slate-300" />
            <a className="inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-[#0061a8]" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              <Phone className="h-4 w-4 text-[#0061a8]" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#005f9f] text-white">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4" aria-label="NFS Masterpath home">
            <span className="grid h-14 w-14 place-items-center rounded-md border border-white/30 bg-white/10 shadow-inner shadow-white/10">
              <BookOpenCheck className="h-8 w-8 text-white" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">NFS</span>
              <span className="block text-2xl font-black uppercase tracking-[0.18em] text-white">Masterpath</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) =>
              link.label === "Courses" ? (
                <div className="group relative" key={link.href}>
                  <Link className="inline-flex h-12 items-center gap-2 rounded-md px-4 text-[15px] font-bold text-white transition hover:bg-white/12" href={link.href}>
                    Our Courses
                    <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[430px] -translate-x-1/2 translate-y-4 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-2xl shadow-slate-950/20 transition group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                    <div className="mb-2 flex items-center justify-between border-b border-slate-100 px-3 pb-3">
                      <span className="text-sm font-black text-slate-950">Popular Courses</span>
                      <span className="rounded-md bg-[#e8f4ff] px-2 py-1 text-xs font-bold text-[#005f9f]">Hybrid batches</span>
                    </div>
                    <div className="grid gap-1">
                      {courses.map((course) => (
                        <Link key={course.slug} href={`/courses/${course.slug}`} className="group/item rounded-md px-3 py-3 transition hover:bg-[#f0f8ff]">
                          <span className="block text-sm font-black text-slate-950 group-hover/item:text-[#005f9f]">{course.title}</span>
                          <span className="mt-1 block text-xs leading-5 text-slate-600">{course.duration} | {course.mode} | {course.category}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} className="inline-flex h-12 items-center rounded-md px-4 text-[15px] font-bold text-white transition hover:bg-white/12" href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <button className="grid h-11 w-11 place-items-center rounded-md border border-white/25 text-white transition hover:bg-white/12" aria-label="Search courses">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-5 text-sm font-black text-[#005f9f] shadow-sm transition hover:bg-[#e8f4ff]">
              Enquire Now
            </Link>
          </div>

          <button className="grid h-12 w-12 place-items-center rounded-md border border-white/25 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <div className={cn("border-t border-white/10 bg-[#00568f] px-4 pb-5 shadow-lg lg:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto grid max-w-7xl gap-1 pt-3 text-white">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold transition hover:bg-white/12">
              {link.label === "Courses" ? "Our Courses" : link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-black text-[#005f9f]">
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
