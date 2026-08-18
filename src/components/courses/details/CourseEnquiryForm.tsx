"use client";

import { useState } from "react";
import { Send, ShieldCheck, Loader2, MessageSquareText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "@/components/contact/Contactform/Formfiled";

import {
  contactSchema,
  ContactInput,
} from "@/validation/contact";

type CourseEnquiryFormProps = {
  courseName: string;
  brochure?:string;
};

export default function CourseEnquiryForm({
  courseName,
  brochure,
}: CourseEnquiryFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: courseName,
      message: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          subject: courseName,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong"
        );
      }

      if (brochure) {
  const link = document.createElement("a");
  link.href = brochure;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



      alert("Enquiry submitted successfully.");

      reset({
        fullName: "",
        email: "",
        phone: "",
        subject: courseName,
        message: "",
      });
    } catch (error) {
      console.error("Course enquiry error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

      <div className="p-5 sm:p-6">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <MessageSquareText className="h-4.5 w-4.5 text-blue-600" />
            </span>

            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              Enquire About Course
            </span>
          </div>

          <h3 className="mt-4 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
            Interested in this course?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Fill in your details and our career counsellor will contact
            you shortly.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 space-y-4"
        >
          {/* Full Name */}
          <FormField<ContactInput>
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            register={register}
            error={errors.fullName}
          />

          {/* Phone */}
          <FormField<ContactInput>
            label="Mobile Number"
            name="phone"
            type="tel"
            placeholder="Enter your mobile number"
            register={register}
            error={errors.phone}
          />

          {/* Email */}
          <FormField<ContactInput>
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            register={register}
            error={errors.email}
          />

          {/* Course */}
          <div>
            <label
              htmlFor="course"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Preferred Course
            </label>

            {/* Visible course */}
            <div
              id="course"
              className="flex min-h-11 items-center rounded-xl border border-blue-100 bg-blue-50/60 px-4 text-sm font-semibold text-blue-700"
            >
              {courseName}
            </div>

            {/* Actual value submitted to API */}
            <input
              type="hidden"
              {...register("subject")}
              value={courseName}
              readOnly
            />
          </div>

          {/* Message */}
          <FormField<ContactInput>
            label="Message / Requirements"
            name="message"
            placeholder="Tell us about your requirements..."
            textarea
            register={register}
            error={errors.message}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg disabled:pointer-events-none disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>

          {/* Privacy */}
          <div className="flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Your information is safe with us.
          </div>
        </form>
      </div>
    </div>
  );
}
