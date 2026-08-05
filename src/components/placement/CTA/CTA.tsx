import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-28">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
          Ready To Start Your Career?
        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
          Take The First Step
          <br />
          Towards Your Dream Job
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Join thousands of students who transformed their careers
          with industry-focused training, live projects, expert
          mentorship, and dedicated placement assistance.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Book Free Counselling

            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />

            Call Now
          </Link>
        </div>

        {/* Contact Info */}

        <div className="mt-12 flex flex-col items-center justify-center gap-8 text-slate-300 md:flex-row">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-400" />

            <span>+91 99999 99999</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-400" />

            <span>info@nfsmasterpath.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}