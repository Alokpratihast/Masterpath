import { MessageCircleQuestion } from "lucide-react";

import { faqs } from "@/data/faqs";

import FAQItem from "./FAQitms";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <MessageCircleQuestion className="h-4 w-4" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Have Questions?
            <br />
            We've Got Answers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our
            training programs, placement support, and admissions.
          </p>
        </div>

        {/* FAQ List */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}