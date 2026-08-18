// import {
//   ArrowRight,
//   Building2,
//   CheckCircle2,
//   Code2,
//   Sparkles,
// } from "lucide-react";

// import { softwareCompanies } from "@/data/services";

// export default function SoftwareCompanies() {
//   return (
//     <section
//       id="software-companies"
//       className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#2E5EFF]/7 blur-3xl" />

//         <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#16C79A]/7 blur-3xl" />

//         <div
//           className="absolute inset-0 opacity-[0.18]"
//           style={{
//             backgroundImage:
//               "radial-gradient(#2E5EFF 0.7px, transparent 0.7px)",
//             backgroundSize: "32px 32px",
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0FAF87] shadow-sm">
//             <Building2 className="h-4 w-4" />
//             Our Technology Network
//           </span>

//           <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
//             Trusted by Businesses
//             <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
//               Building What&apos;s Next.
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
//             We work with businesses and teams to design, develop and deploy
//             modern digital solutions that solve real business problems.
//           </p>
//         </div>

//         {/* Capability Strip */}
//         <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2">
//           {[
//             "Web Development",
//             "Custom Software",
//             "AI & Automation",
//             "SaaS Development",
//             "Cloud Solutions",
//           ].map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Companies */}
//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {softwareCompanies.map((company) => (
//             <div
//               key={company.id}
//               className="group relative flex min-h-[170px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_-25px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_55px_-25px_rgba(46,94,255,0.3)]"
//             >
//               {/* Hover Glow */}
//               <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//               {/* Logo */}
//               <div className="relative flex h-24 w-full items-center justify-center">
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="max-h-20 max-w-[190px] object-contain grayscale opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
//                 />
//               </div>

//               {/* Company Name */}
//               <div className="absolute bottom-4 left-0 right-0 text-center">
//                 <span className="text-xs font-bold text-slate-400 transition-colors duration-300 group-hover:text-[#2E5EFF]">
//                   {company.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Banner */}
//         <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#071A4D] via-[#0B2B73] to-[#06143B] px-6 py-8 shadow-[0_25px_70px_-30px_rgba(7,26,77,0.5)] sm:px-8">
//           <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#16C79A]/15 blur-3xl" />

//           <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//             {/* Text */}
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16C79A]/10">
//                 <Code2 className="h-6 w-6 text-[#35D9A8]" />
//               </div>

//               <div>
//                 <p className="text-xs font-black uppercase tracking-[0.16em] text-[#35D9A8]">
//                   Technology Partnerships
//                 </p>

//                 <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
//                   Looking to build your next digital solution?
//                 </h3>

//                 <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
//                   Tell us about your requirement and let&apos;s explore how we
//                   can turn it into a practical technology solution.
//                 </p>
//               </div>
//             </div>

//             {/* CTA */}
//             <a
//               href="/contact"
//               className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16C79A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#16C79A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0FAF87]"
//             >
//               Start a Conversation

//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>
//           </div>
//         </div>

//         {/* Trust Points */}
//         <div className="mt-8 grid gap-3 sm:grid-cols-3">
//           <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
//             <CheckCircle2 className="h-4 w-4 text-[#16C79A]" />
//             Business-focused solutions
//           </div>

//           <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
//             <Sparkles className="h-4 w-4 text-[#2E5EFF]" />
//             Modern technology stack
//           </div>

//           <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
//             <Code2 className="h-4 w-4 text-[#16C79A]" />
//             Scalable development
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";

import { softwareCompanies } from "@/data/services";
import CompanyLogo from "./CompanyLogo";

export default function SoftwareCompanies() {
  return (
    <section
      id="software-companies"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#2E5EFF]/7 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#16C79A]/7 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#2E5EFF 0.7px, transparent 0.7px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0FAF87] shadow-sm">
            <Building2 className="h-4 w-4" />
            Our Technology Network
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Trusted by Businesses
            <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
              Building What&apos;s Next.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            We work with businesses and teams to design, develop and deploy
            modern digital solutions that solve real business problems.
          </p>
        </div>

        {/* Capability Strip */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {[
            "Web Development",
            "Custom Software",
            "AI & Automation",
            "SaaS Development",
            "Cloud Solutions",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Companies */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {softwareCompanies.map((company) => (
            <CompanyLogo
              key={company.id}
              company={company}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#071A4D] via-[#0B2B73] to-[#06143B] px-6 py-8 shadow-[0_25px_70px_-30px_rgba(7,26,77,0.5)] sm:px-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#16C79A]/15 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16C79A]/10">
                <Code2 className="h-6 w-6 text-[#35D9A8]" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#35D9A8]">
                  Technology Partnerships
                </p>

                <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                  Looking to build your next digital solution?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Tell us about your requirement and let&apos;s explore how we
                  can turn it into a practical technology solution.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16C79A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#16C79A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0FAF87]"
            >
              Start a Conversation

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="h-4 w-4 text-[#16C79A]" />
            Business-focused solutions
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
            <Sparkles className="h-4 w-4 text-[#2E5EFF]" />
            Modern technology stack
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
            <Code2 className="h-4 w-4 text-[#16C79A]" />
            Scalable development
          </div>
        </div>
      </div>
    </section>
  );
}