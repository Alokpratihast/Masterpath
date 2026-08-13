"use client";

import { useEffect, useState } from "react";
import {
  GraduationCap,
  Phone,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { courses } from "@/data/courses";
import { LeadClient } from "@/services/crmlead.client";

export default function GlobalLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    courseSlug: "",
  });

  // Keep the hero readable on first load, then show the lead form later.
  useEffect(() => {
    const submitted = sessionStorage.getItem(
      "globalLeadSubmitted"
    );
    const dismissed = sessionStorage.getItem(
      "globalLeadDismissed"
    );

    if (submitted === "true" || dismissed === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // Close popup with Escape key
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen]);

  function closePopup() {
    if (loading) {
      return;
    }

    sessionStorage.setItem(
      "globalLeadDismissed",
      "true"
    );

    setIsOpen(false);
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!form.fullName.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    if (!form.courseSlug) {
      toast.error("Please select a course.");
      return;
    }

    const selectedCourse = courses.find(
      (course) => course.slug === form.courseSlug
    );

    if (!selectedCourse) {
      toast.error("Please select a valid course.");
      return;
    }

    try {
      setLoading(true);

      await LeadClient.createLead({
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        courseSlug: selectedCourse.slug,
        courseName: selectedCourse.title,
      });

      toast.success(
        "Thank you! Our counsellor will contact you shortly."
      );

      // Don't show the popup again in this session
      sessionStorage.setItem(
        "globalLeadSubmitted",
        "true"
      );
      sessionStorage.removeItem(
        "globalLeadDismissed"
      );

      setForm({
        fullName: "",
        phone: "",
        email: "",
        courseSlug: "",
      });

      setIsOpen(false);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
      onClick={closePopup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="global-lead-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          disabled={loading}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md transition hover:bg-white hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-8 text-white sm:px-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <GraduationCap className="h-6 w-6" />
          </div>

          <h2
            id="global-lead-title"
            className="pr-12 text-2xl font-bold sm:text-3xl"
          >
            Start Your Career Journey
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-blue-100">
            Get free career counselling from our experts
            and find the right program for your career
            goals.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6 sm:p-8"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="popup-fullName"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full Name
            </label>

            <input
              id="popup-fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={form.fullName}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  fullName: event.target.value,
                }))
              }
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="popup-phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Phone Number
            </label>

            <div className="relative">
              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="popup-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    phone: event.target.value,
                  }))
                }
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="popup-email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email{" "}
              <span className="text-slate-400">
                (Optional)
              </span>
            </label>

            <input
              id="popup-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  email: event.target.value,
                }))
              }
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Course */}
          <div>
            <label
              htmlFor="popup-course"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Interested Course
            </label>

            <select
              id="popup-course"
              name="courseSlug"
              required
              value={form.courseSlug}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  courseSlug: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">
                Select a course
              </option>

              {courses.map((course) => (
                <option
                  key={course.slug}
                  value={course.slug}
                >
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Submitting..."
              : "Get Free Counselling"}
          </button>

          {/* Privacy Note */}
          <p className="text-center text-xs leading-5 text-slate-500">
            By submitting this form, you agree to be
            contacted by our career counsellor.
          </p>
        </form>
      </div>
    </div>
  );
}
