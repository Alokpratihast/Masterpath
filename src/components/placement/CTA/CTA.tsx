// import Link from "next/link";
// import {
//   ArrowRight,
//   Phone,
//   Mail,
// } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 py-28">
//       {/* Background Effects */}

//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

//         <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
//         <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
//           Ready To Start Your Career?
//         </span>

//         <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
//           Take The First Step
//           <br />
//           Towards Your Dream Job
//         </h2>

//         <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
//           Join thousands of students who transformed their careers
//           with industry-focused training, live projects, expert
//           mentorship, and dedicated placement assistance.
//         </p>

//         {/* Buttons */}

//         <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
//           >
//             Book Free Counselling

//             <ArrowRight className="h-5 w-5" />
//           </Link>

//           <Link
//             href="tel:+919999999999"
//             className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
//           >
//             <Phone className="h-5 w-5" />

//             Call Now
//           </Link>
//         </div>

//         {/* Contact Info */}

//         <div className="mt-12 flex flex-col items-center justify-center gap-8 text-slate-300 md:flex-row">
//           <div className="flex items-center gap-3">
//             <Phone className="h-5 w-5 text-blue-400" />

//             <span>+91 99999 99999</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <Mail className="h-5 w-5 text-blue-400" />

//             <span>info@nfsmasterpath.com</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




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

        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
          <span className="live-dot-wrap relative flex h-2 w-2">
            <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-300" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-300" />
          </span>
          Ready To Start Your Career?
        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
          Take The First Step
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-300 bg-clip-text text-transparent">
            Towards Your Dream Job
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Join thousands of students who transformed their careers
          with industry-focused training, live projects, expert
          mentorship, and dedicated placement assistance.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact#contact-form"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
          >
            Book Free Counselling
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Link>
        </div>

        {/* Contact Info */}

        <div className="mt-12 flex flex-col items-center justify-center gap-8 text-slate-300 md:flex-row">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-400" />

            <span>+917026543916 </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-400" />

            <span>hr@nfsmasterpath.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
