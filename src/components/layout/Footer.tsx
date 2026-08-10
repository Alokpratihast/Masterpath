import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { navLinks, siteConfig } from "@/data/site";
import { courses } from "@/data/courses";

export function Footer() {
  return (
    <footer className="bg-[#03182b] text-white">
      {/* CTA strip — signature element, ties footer back to the brand blue instead of dropping straight to generic dark */}
      <div className="border-b border-white/10 bg-[#005f9f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Next batch enrolling now
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
              Ready to start your next chapter?
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-black text-[#005f9f] shadow-sm transition hover:bg-[#e8f4ff]"
          >
            Talk to a Counsellor
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-14">
          {/* Company */}

          <div>
            <Link href="/" className="inline-flex" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/images/logo/logo3.png"
                alt={siteConfig.name}
                width={160}
                height={54}
                className="h-auto w-[140px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-400">
              Helping students build successful careers through
              practical learning, live projects, expert mentors,
              and dedicated placement support.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-transparent hover:bg-[#005f9f]"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-transparent hover:bg-[#005f9f]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-transparent hover:bg-[#005f9f]"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-transparent hover:bg-[#005f9f]"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-1.5 text-[15px] text-slate-400 transition hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Courses */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Popular Courses
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {courses.slice(0, 4).map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group inline-flex w-fit items-center gap-1.5 text-[15px] text-slate-400 transition hover:text-white"
                >
                  {course.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="h-4 w-4 text-[#4db8ff]" />
                </span>
                <span className="text-[15px] text-slate-400 transition group-hover:text-white">
                  {siteConfig.phone}
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-4 w-4 text-[#4db8ff]" />
                </span>
                <span className="break-all text-[15px] text-slate-400 transition group-hover:text-white">
                  {siteConfig.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-[#4db8ff]" />
                </span>
                <span className="text-[15px] leading-6 text-slate-400">
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/sitemap" className="transition hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
