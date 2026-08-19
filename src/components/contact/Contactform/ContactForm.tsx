



// "use client";

// import { useState } from "react";
// import { CheckCircle2, Send, X } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import FormField from "./Formfiled";
// import { courses } from "@/data/courses";

// import {
//   contactSchema,
//   ContactInput,
// } from "@/validation/contact";

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);
//   const [successName, setSuccessName] = useState<string | null>(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<ContactInput>({
//     resolver: zodResolver(contactSchema),
//   });

//   const onSubmit = async (data: ContactInput) => {
//     try {
//       setLoading(true);

//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message);
//       }

//       // Show success popup with user's name
//       setSuccessName(data.fullName);

//       // Reset form
//       reset();
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section id="contact-form" className="bg-slate-50 py-28">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

//           {/* Heading */}
//           <div className="text-center">
//             <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//               Send Message
//             </span>

//             <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
//               Let's Start A Conversation
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               Fill out the form below and our career counsellor will
//               contact you shortly.
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
//           >
//             <div className="grid gap-6 md:grid-cols-2">

//               {/* Full Name */}
//               <FormField<ContactInput>
//                 label="Full Name"
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 register={register}
//                 error={errors.fullName}
//               />

//               {/* Email */}
//               <FormField<ContactInput>
//                 label="Email Address"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 register={register}
//                 error={errors.email}
//               />

//               {/* Phone */}
//               <FormField<ContactInput>
//                 label="Phone Number"
//                 name="phone"
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 register={register}
//                 error={errors.phone}
//               />

//               {/* Interested Course */}
//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="mb-2 block text-sm font-semibold text-slate-700"
//                 >
//                   Interested Course
//                 </label>

//                 <select
//                   id="subject"
//                   {...register("subject")}
//                   className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                 >
//                   <option value="">
//                     Select Course
//                   </option>

//                   {courses.map((course) => (
//                     <option
//                       key={course.slug}
//                       value={course.title}
//                     >
//                       {course.title}
//                     </option>
//                   ))}
//                 </select>

//                 {errors.subject && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.subject.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Message */}
//             <div className="mt-6">
//               <FormField<ContactInput>
//                 label="Message"
//                 name="message"
//                 placeholder="Tell us how we can help you..."
//                 textarea
//                 register={register}
//                 error={errors.message}
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {loading ? "Sending..." : "Send Message"}

//               {!loading && <Send className="h-5 w-5" />}
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* =====================================================
//           SUCCESS POPUP
//       ====================================================== */}
//       {successName && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
//           <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white p-8 text-center shadow-2xl">

//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={() => setSuccessName(null)}
//               className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
//               aria-label="Close"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             {/* Success Icon */}
//             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
//               <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30">
//                 <CheckCircle2 className="h-8 w-8 text-white" />
//               </div>
//             </div>

//             {/* Heading */}
//             <h3 className="mt-6 text-2xl font-black text-slate-900">
//               Thank You, {successName}! 🎉
//             </h3>

//             {/* Message */}
//             <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-slate-600">
//               Your enquiry has been submitted successfully.
//               Our career counsellor will contact you shortly.
//             </p>

//             {/* Extra Message */}
//             <div className="mt-5 rounded-2xl bg-blue-50 px-5 py-4">
//               <p className="text-sm font-semibold text-blue-700">
//                 We look forward to helping you build your career.
//               </p>
//             </div>

//             {/* Button */}
//             <button
//               type="button"
//               onClick={() => setSuccessName(null)}
//               className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
//             >
//               Got it
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { CheckCircle2, Download, Send, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "./Formfiled";
import { courses } from "@/data/courses";

import {
  contactSchema,
  ContactInput,
} from "@/validation/contact";

const brochureMap: Record<string, string> = {
  "Advanced Python": "/brochures/python.pdf",
  "Python": "/brochures/python.pdf",

  "Full Stack Development": "/brochures/fullstack.pdf",

  "Data Analyst": "/brochures/data-analytic-course.pdf",
  "Data Analytics": "/brochures/data-analytic-course.pdf",

  "Digital Marketing": "/brochures/digitalmarketing.pdf",

  "CMA": "/brochures/cma.pdf",

  "ACA": "/brochures/aca.pdf",
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successName, setSuccessName] = useState<string | null>(null);
  const [downloadedBrochure, setDownloadedBrochure] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const downloadBrochure = (courseName?: string) => {
  if (!courseName) {
    console.warn("No course selected.");
    return false;
  }

  const brochureUrl = brochureMap[courseName];

  if (!brochureUrl) {
    console.warn(`No brochure mapped for course: ${courseName}`);
    return false;
  }

  const link = document.createElement("a");

  link.href = brochureUrl;
  link.download = brochureUrl.split("/").pop() || "brochure.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return true;
};

  const onSubmit = async (data: ContactInput) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Something went wrong"
        );
      }

      // -----------------------------------------
      // DOWNLOAD SELECTED COURSE BROCHURE
      // -----------------------------------------

      const brochureDownloaded = downloadBrochure(
        data.subject
      );

      setDownloadedBrochure(brochureDownloaded);

      // -----------------------------------------
      // SHOW SUCCESS POPUP
      // -----------------------------------------

      setSuccessName(data.fullName);

      // -----------------------------------------
      // RESET FORM
      // -----------------------------------------

      reset();
    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section
        id="contact-form"
        className="bg-slate-50 py-28"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* =========================
              HEADING
          ========================== */}

          <div className="text-center">

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Send Message
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Let's Start A Conversation
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Fill out the form below and our career counsellor
              will contact you shortly.
            </p>

          </div>

          {/* =========================
              FORM
          ========================== */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
          >

            <div className="grid gap-6 md:grid-cols-2">

              {/* FULL NAME */}

              <FormField<ContactInput>
                label="Full Name"
                name="fullName"
                placeholder="Enter your full name"
                register={register}
                error={errors.fullName}
              />

              {/* EMAIL */}

              <FormField<ContactInput>
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                register={register}
                error={errors.email}
              />

              {/* PHONE */}

              <FormField<ContactInput>
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                register={register}
                error={errors.phone}
              />

              {/* INTERESTED COURSE */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Interested Course
                </label>

                <select
                  id="subject"
                  {...register("subject")}
                  disabled={loading}
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                >

                  <option value="">
                    Select Course
                  </option>

                  {courses.map((course) => (
                    <option
                      key={course.slug}
                      value={course.title}
                    >
                      {course.title}
                    </option>
                  ))}

                </select>

                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}

              </div>

            </div>

            {/* =========================
                MESSAGE
            ========================== */}

            <div className="mt-6">

              <FormField<ContactInput>
                label="Message"
                name="message"
                placeholder="Tell us how we can help you..."
                textarea
                register={register}
                error={errors.message}
              />

            </div>

            {/* =========================
                SUBMIT BUTTON
            ========================== */}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >

              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Download brochure
                  <Send className="h-5 w-5" />
                </>
              )}

            </button>

          </form>

        </div>
      </section>

      {/* =====================================================
          SUCCESS POPUP
      ====================================================== */}

      {successName && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">

          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white p-8 text-center shadow-2xl">

            {/* =========================
                CLOSE BUTTON
            ========================== */}

            <button
              type="button"
              onClick={() => {
                setSuccessName(null);
                setDownloadedBrochure(false);
              }}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* =========================
                SUCCESS ICON
            ========================== */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30">

                <CheckCircle2 className="h-8 w-8 text-white" />

              </div>

            </div>

            {/* =========================
                HEADING
            ========================== */}

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Thank You, {successName}! 🎉
            </h3>

            {/* =========================
                MESSAGE
            ========================== */}

            <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-slate-600">
              Your enquiry has been submitted successfully.
              Our career counsellor will contact you shortly.
            </p>

            {/* =========================
                BROCHURE MESSAGE
            ========================== */}

            {downloadedBrochure && (
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 px-5 py-4 text-left">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500">

                  <Download className="h-5 w-5 text-white" />

                </div>

                <div>

                  <p className="text-sm font-bold text-emerald-800">
                    Brochure Downloaded
                  </p>

                  <p className="mt-0.5 text-xs text-emerald-700">
                    Your selected course brochure has been downloaded.
                  </p>

                </div>

              </div>
            )}

            {/* =========================
                EXTRA MESSAGE
            ========================== */}

            <div className="mt-5 rounded-2xl bg-blue-50 px-5 py-4">

              <p className="text-sm font-semibold leading-6 text-blue-700">
                We look forward to helping you build your career.
              </p>

            </div>

            {/* =========================
                BUTTON
            ========================== */}

            <button
              type="button"
              onClick={() => {
                setSuccessName(null);
                setDownloadedBrochure(false);
              }}
              className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Got it
            </button>

          </div>

        </div>
      )}
    </>
  );
}