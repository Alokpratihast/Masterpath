"use client";

import { useState } from "react";
import {
  CheckCircle2,
  FileText,
  Loader2,
  Upload,
  X,
} from "lucide-react";

import { courses } from "@/data/courses";

type PlacementApplicationModalProps = {
  open: boolean;
  onClose: () => void;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function PlacementApplicationModal({
  open,
  onClose,
}: PlacementApplicationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseSlug, setCourseSlug] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    resume: "",
    general: "",
  });

  if (!open) return null;

  const clearErrors = () => {
    setErrors({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      resume: "",
      general: "",
    });
  };

  const handleResumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    setErrors((previous) => ({
      ...previous,
      resume: "",
      general: "",
    }));

    if (!file) {
      setResume(null);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrors((previous) => ({
        ...previous,
        resume: "Only PDF, DOC, and DOCX files are allowed.",
      }));

      setResume(null);
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrors((previous) => ({
        ...previous,
        resume: "Resume size must not exceed 5 MB.",
      }));

      setResume(null);
      event.target.value = "";
      return;
    }

    setResume(file);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    clearErrors();

    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      course: "",
      resume: "",
      general: "",
    };

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (fullName.trim().length < 3) {
      newErrors.fullName =
        "Full name must be at least 3 characters.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    const cleanPhone = phone.trim();

    if (!cleanPhone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9]{10}$/.test(cleanPhone)) {
      newErrors.phone =
        "Phone number must be exactly 10 digits.";
    }

    if (!courseSlug) {
      newErrors.course = "Please select a course.";
    }

    if (!resume) {
      newErrors.resume = "Please upload your resume.";
    }

    if (
      newErrors.fullName ||
      newErrors.email ||
      newErrors.phone ||
      newErrors.course ||
      newErrors.resume
    ) {
      setErrors(newErrors);
      return;
    }

    const selectedCourse = courses.find(
      (course) => course.slug === courseSlug
    );

    if (!selectedCourse) {
      setErrors((previous) => ({
        ...previous,
        course: "Please select a valid course.",
      }));
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullName", fullName.trim());
      formData.append("email", email.trim());
      formData.append("phone", cleanPhone);
      formData.append("courseSlug", selectedCourse.slug);
      formData.append("courseName", selectedCourse.title);
      if (!resume) {
  setErrors((previous) => ({
    ...previous,
    resume: "Please upload your resume.",
  }));
  return;
}

formData.append("resume", resume);

      const response = await fetch("/api/placement/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const backendErrors = result.errors as
          | Record<string, string[]>
          | undefined;

        const firstFieldError = backendErrors
          ? Object.values(backendErrors)
              .flat()
              .find(
                (message): message is string =>
                  typeof message === "string"
              )
          : undefined;

        throw new Error(
          firstFieldError ||
            result.message ||
            "Something went wrong."
        );
      }

      setSuccess(true);
    } catch (err) {
      setErrors((previous) => ({
        ...previous,
        general:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (loading) return;

    setFullName("");
    setEmail("");
    setPhone("");
    setCourseSlug("");
    setResume(null);

    clearErrors();
    setSuccess(false);

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          aria-label="Close application form"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white disabled:cursor-not-allowed"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          /* Success State */
          <div className="px-6 py-16 text-center sm:px-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
              <CheckCircle2 className="h-9 w-9 text-emerald-400" />
            </div>

            <h2 className="text-2xl font-bold text-white">
              Application Submitted!
            </h2>

            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Thank you for applying. Our placement team will
              review your profile and contact you shortly.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-8 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="border-b border-white/10 px-6 py-7 sm:px-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Placement Cell
              </span>

              <h2 className="mt-2 pr-10 text-2xl font-bold text-white">
                Upload Your Resume
              </h2>

              <p className="mt-2 pr-8 text-sm leading-6 text-slate-400">
                Share your details and resume with our placement
                team. We&apos;ll connect with you regarding suitable
                opportunities.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 px-6 py-7 sm:px-8"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="placement-full-name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Full Name
                </label>

                <input
                  id="placement-full-name"
                  type="text"
                  value={fullName}
                  onChange={(event) => {
                    setFullName(event.target.value);

                    setErrors((previous) => ({
                      ...previous,
                      fullName: "",
                      general: "",
                    }));
                  }}
                  placeholder="Enter your full name"
                  required
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:ring-1 ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                />

                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Email */}
                <div>
                  <label
                    htmlFor="placement-email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email Address
                  </label>

                  <input
                    id="placement-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);

                      setErrors((previous) => ({
                        ...previous,
                        email: "",
                        general: "",
                      }));
                    }}
                    placeholder="you@example.com"
                    required
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:ring-1 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-white/10 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="placement-phone"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Phone Number
                  </label>

                  <input
                    id="placement-phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={phone}
                    onChange={(event) => {
                      const value =
                        event.target.value.replace(/\D/g, "");

                      setPhone(value);

                      setErrors((previous) => ({
                        ...previous,
                        phone: "",
                        general: "",
                      }));
                    }}
                    placeholder="9876543210"
                    required
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:ring-1 ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-white/10 focus:border-blue-500 focus:ring-blue-500"
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Course */}
              <div>
                <label
                  htmlFor="placement-course"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Interested Course
                </label>

                <select
                  id="placement-course"
                  value={courseSlug}
                  onChange={(event) => {
                    setCourseSlug(event.target.value);

                    setErrors((previous) => ({
                      ...previous,
                      course: "",
                      general: "",
                    }));
                  }}
                  required
                  className={`w-full rounded-xl border bg-slate-800 px-4 py-3 text-white outline-none transition focus:ring-1 ${
                    errors.course
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                >
                  <option value="">Select a course</option>

                  {courses.map((course) => (
                    <option
                      key={course.slug}
                      value={course.slug}
                    >
                      {course.title}
                    </option>
                  ))}
                </select>

                {errors.course && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.course}
                  </p>
                )}
              </div>

              {/* Resume Upload */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Resume
                </label>

                <label
                  className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-5 py-8 text-center transition ${
                    errors.resume
                      ? "border-red-500/60 bg-red-500/5"
                      : "border-white/20 bg-white/[0.03] hover:border-blue-500/60 hover:bg-blue-500/5"
                  }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="hidden"
                  />

                  {resume ? (
                    <>
                      <FileText className="h-9 w-9 text-blue-400" />

                      <p className="mt-3 max-w-full truncate text-sm font-medium text-white">
                        {resume.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {(resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>

                      <span className="mt-2 text-xs font-medium text-blue-400">
                        Click to change file
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-9 w-9 text-slate-400 transition group-hover:text-blue-400" />

                      <p className="mt-3 text-sm font-medium text-white">
                        Click to upload your resume
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        PDF, DOC or DOCX • Maximum 5 MB
                      </p>
                    </>
                  )}
                </label>

                {errors.resume && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.resume}
                  </p>
                )}
              </div>

              {/* General API Error */}
              {errors.general && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {errors.general}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Upload className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                Your resume will be securely submitted to our
                placement team.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}