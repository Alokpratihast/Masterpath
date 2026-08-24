import Link from "next/link";

const faqs = [
  {
    question: "What is MasterPath?",
    answer:
      "MasterPath is a platform designed to help users access information, services, and solutions through a simple and user-friendly online experience.",
  },
  {
    question: "How can I use MasterPath services?",
    answer:
      "You can explore the MasterPath website, browse the available services and information, and contact the MasterPath team for further assistance.",
  },
  {
    question: "How can I contact MasterPath?",
    answer:
      "You can contact the MasterPath team through the Contact Us page. Submit your enquiry and the MasterPath team will get in touch with you.",
  },
  {
    question: "Does MasterPath collect my personal information?",
    answer:
      "MasterPath may collect information that you voluntarily provide through contact forms, enquiry forms, or other interactions with the website. Please review the MasterPath Privacy Policy for more information.",
  },
  {
    question: "How does MasterPath protect my information?",
    answer:
      "MasterPath takes reasonable measures to protect information submitted through the website against unauthorized access, misuse, alteration, disclosure, or destruction.",
  },
  {
    question: "Does MasterPath use cookies?",
    answer:
      "MasterPath may use cookies or similar technologies to improve website functionality, understand website usage, maintain performance, and provide a better user experience.",
  },
  {
    question: "Can I submit an enquiry through the MasterPath website?",
    answer:
      "Yes. You can use the relevant enquiry or contact form available on the MasterPath website to submit your details and request assistance.",
  },
  {
    question: "Are MasterPath services available to everyone?",
    answer:
      "Availability of MasterPath services may depend on the specific service, location, eligibility, and other applicable requirements. Please contact MasterPath for more information.",
  },
  {
    question: "Where can I find the MasterPath Privacy Policy?",
    answer:
      "You can read the complete MasterPath Privacy Policy by visiting the Privacy Policy page available in the website footer.",
  },
  {
    question: "Where can I find the MasterPath Terms & Conditions?",
    answer:
      "You can read the MasterPath Terms & Conditions by visiting the Terms & Conditions page available through the website footer.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#17134A] via-[#1B245E] to-[#101F4D] px-6 py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            Find answers to commonly asked questions about MasterPath,
            our website, services, privacy, and how to get in touch with us.
          </p>
        
      </section>

      {/* FAQ Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-[#171329] md:text-3xl">
              How Can We Help?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
              Here are some common questions about MasterPath. If you
              cannot find the answer you are looking for, our team is
              happy to help.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#6C4DE6]/40 hover:shadow-md md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-[#171329] md:text-lg">
                  <span>
                    <span className="mr-2 text-[#6C4DE6]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0EDFF] text-[#6C4DE6] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Contact Section */}
          <section className="mt-14 rounded-2xl bg-[#F7F5FF] p-7 text-center md:p-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              Still Have Questions?
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
              If you could not find the answer you were looking for,
              contact the MasterPath team and we will be happy to assist you.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#6C4DE6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5838CF]"
            >
              Contact Us
            </Link>
          </section>

        </div>
      </section>
    </main>
  );
}