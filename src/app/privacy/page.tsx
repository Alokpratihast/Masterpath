import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#17134A] via-[#1B245E] to-[#101F4D] px-6 py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            At MasterPath, your privacy is important to us. This Privacy
            Policy explains how MasterPath collects, uses, and protects your
            information when you use the MasterPath website and services.
          </p>

          <p className="mt-6 text-sm text-gray-400">
            Last updated: August 24, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">

          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              1. Introduction
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how
              MasterPath may collect, use, store, and protect information when
              you visit the MasterPath website or use MasterPath services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              2. Information We Collect
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Depending on how you interact with MasterPath, we may collect
              the following types of information:
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Name and contact information provided to MasterPath.",
                "Email address and phone number when provided.",
                "Information submitted through MasterPath contact or enquiry forms.",
                "Browser, device, and technical information collected when using the MasterPath website.",
                "Other information voluntarily provided by you while interacting with MasterPath.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6C4DE6]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              3. How We Use Your Information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath may use the information collected through the
              MasterPath website to respond to enquiries, provide requested
              services, communicate with users, improve the MasterPath
              website and services, maintain website functionality, and
              protect the security of the MasterPath platform.
            </p>
          </section>

          {/* 4. Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              4. Protection of Your Information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath takes reasonable measures to protect personal
              information submitted through the MasterPath website against
              unauthorized access, misuse, alteration, disclosure, or
              destruction.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              However, no method of electronic transmission or storage can be
              guaranteed to be completely secure. MasterPath therefore cannot
              guarantee absolute security of information transmitted through
              the internet.
            </p>
          </section>

          {/* 5. Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              5. Cookies
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath may use cookies or similar technologies to improve
              the functionality of the MasterPath website, understand how
              visitors use the website, maintain website performance, and
              provide a better user experience.
            </p>
          </section>

          {/* 6. Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              6. Third-Party Services
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The MasterPath website may contain links to third-party
              websites or use third-party services. These third parties may
              have their own privacy policies and practices.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath is not responsible for the privacy practices or
              content of external third-party websites.
            </p>
          </section>

          {/* 7. Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              7. Sharing of Information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath does not sell or rent your personal information.
              Information may be shared when necessary to provide requested
              MasterPath services, operate and maintain the MasterPath
              website, comply with applicable legal requirements, or protect
              the rights, property, and security of MasterPath and its users.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              8. Children&apos;s Privacy
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath services are not specifically directed toward
              children. If you believe that personal information has been
              submitted to MasterPath by a child without appropriate consent,
              please contact MasterPath so that appropriate action can be
              taken.
            </p>
          </section>

          {/* 9. Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              9. Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath may update this Privacy Policy from time to time.
              Any changes will be reflected on this MasterPath Privacy Policy
              page together with the updated date. We encourage users to
              review this page periodically for the latest information.
            </p>
          </section>

          {/* 10. Contact */}
          <section className="rounded-2xl bg-[#F7F5FF] p-7 md:p-8">
            <h2 className="text-2xl font-bold text-[#171329]">
              10. Contact Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              If you have questions about this MasterPath Privacy Policy or
              how MasterPath handles your information, please get in touch
              with the MasterPath team.
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