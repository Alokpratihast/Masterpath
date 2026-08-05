import Link from "next/link";
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
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Company */}

          <div>
            <h2 className="text-3xl font-black">
              {siteConfig.name}
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Helping students build successful careers through
              practical learning, live projects, expert mentors,
              and dedicated placement support.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-sky-600"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-red-600"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between text-slate-400 transition hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Courses */}

          <div>
            <h3 className="text-lg font-bold">
              Popular Courses
            </h3>

            <div className="mt-6 space-y-4">
              {courses.slice(0, 4).map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="group flex items-center justify-between text-slate-400 transition hover:text-white"
                >
                  {course.title}

                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-blue-400" />

                <a
                  href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                  className="text-slate-400 transition hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-blue-400" />

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-400 transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-blue-400" />

                <span className="text-slate-400">
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/sitemap"
              className="transition hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
