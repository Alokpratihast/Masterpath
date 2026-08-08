"use client";

import { useState } from "react";
import { toast } from "sonner";

import { LeadClient } from "@/services/crmlead.client";

interface LeadCaptureFormProps {
  courseSlug: string;
  courseName: string;
}

export default function LeadCaptureForm({
  courseSlug,
  courseName,
}: LeadCaptureFormProps) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      await LeadClient.createLead({
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        courseSlug,
        courseName,
      });

      toast.success(
        "Your enquiry has been submitted successfully."
      );

      setForm({
        fullName: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Request a Free Career Counselling
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill in your details and our admission counsellor
          will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) =>
              setForm({
                ...form,
                fullName: e.target.value,
              })
            }
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email <span className="text-slate-400">(Optional)</span>
          </label>

          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Selected Course */}
        <div>
          <label
            htmlFor="course"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Selected Course
          </label>

          <input
            id="course"
            type="text"
            value={courseName}
            disabled
            className="w-full rounded-xl bg-slate-100 px-4 py-3 text-slate-600"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Request Callback"}
        </button>

        <p className="text-center text-xs text-slate-500">
          Your information is safe and will only be used to
          contact you regarding your enquiry.
        </p>
      </form>
    </section>
  );
}