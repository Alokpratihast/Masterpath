"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "./Formfiled";

import {
  contactSchema,
  ContactInput,
} from "@/validation/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

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
        throw new Error(result.message);
      }

      alert("Enquiry submitted successfully.");

      reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id ="contact-form"className="bg-slate-50 py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Send Message
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Let's Start A Conversation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Fill out the form below and our career counsellor will
            contact you shortly.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <FormField<ContactInput>
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              register={register}
              error={errors.fullName}
            />

            <FormField<ContactInput>
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email}
            />

            <FormField<ContactInput>
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              register={register}
              error={errors.phone}
            />

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
                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-blue-600"
              >
                <option value="">
                  Select Course
                </option>

                <option>
                  Advanced Python
                </option>

                <option>
                  Full Stack Development
                </option>

                <option>
                  Data Analyst
                </option>

                <option>
                  Digital Marketing
                </option>
              </select>
            </div>
          </div>

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

          <button
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}

            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}



