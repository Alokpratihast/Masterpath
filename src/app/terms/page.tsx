import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#17134A] via-[#1B245E] to-[#101F4D] px-6 py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
            MasterPath
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            Please read these Terms & Conditions carefully before using
            the MasterPath website and services.
          </p>

          <p className="mt-6 text-sm text-gray-400">
            Last updated: August 24, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">

          {/* 1. Acceptance */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              By accessing or using the MasterPath website, you agree to
              be bound by these Terms & Conditions. If you do not agree
              with any part of these terms, please do not use the MasterPath
              website or its services.
            </p>
          </section>

          {/* 2. Use of Website */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              2. Use of the MasterPath Website
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath provides this website and its services for
              legitimate and lawful purposes. You agree to use the
              MasterPath website only in accordance with these Terms &
              Conditions.
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "You must not use the MasterPath website for unlawful activities.",
                "You must not attempt to gain unauthorized access to MasterPath systems.",
                "You must not introduce malicious software, harmful code, or other security threats.",
                "You must not misuse or reproduce MasterPath website content without permission.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6C4DE6]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              3. MasterPath Services and Information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath provides information and services through its
              website to assist users based on the information available
              at the time. MasterPath makes reasonable efforts to keep
              the information accurate and up to date.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              However, MasterPath does not guarantee that all information
              provided through the website will always be complete,
              accurate, or current.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              4. Intellectual Property
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Unless otherwise stated, the content available on the
              MasterPath website, including text, graphics, logos, images,
              designs, and other materials, is protected by applicable
              intellectual property laws.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              You may not copy, reproduce, modify, distribute, or use
              MasterPath website content for commercial purposes without
              appropriate authorization.
            </p>
          </section>

          {/* 5. User Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              5. User Information
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              When you submit information through forms or other
              communication channels on the MasterPath website, you agree
              to provide information that is accurate and complete to the
              best of your knowledge.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath may use the information provided by users in
              accordance with its Privacy Policy.
            </p>
          </section>

          {/* 6. Third Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              6. Third-Party Links
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The MasterPath website may contain links to third-party
              websites. These websites are operated independently and
              may have their own terms, conditions, and privacy policies.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath is not responsible for the content, availability,
              security, or practices of third-party websites.
            </p>
          </section>

          {/* 7. Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              7. Disclaimer
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The MasterPath website and its content are provided on an
              &quot;as available&quot; basis. While MasterPath makes
              reasonable efforts to maintain the website, MasterPath does
              not guarantee that the website will always be available,
              error-free, or uninterrupted.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              8. Limitation of Liability
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              To the extent permitted by applicable law, MasterPath will
              not be responsible for losses or damages arising from your
              use of, or inability to use, the MasterPath website or its
              services.
            </p>
          </section>

          {/* 9. Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              9. Changes to These Terms
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              MasterPath may update these Terms & Conditions from time to
              time. Any changes will be published on the MasterPath
              website, and the updated date will be displayed accordingly.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#171329]">
              10. Governing Law
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              These Terms & Conditions shall be governed by and interpreted
              in accordance with the applicable laws and regulations
              governing MasterPath and its services.
            </p>
          </section>

          {/* 11. Contact */}
          <section className="rounded-2xl bg-[#F7F5FF] p-7 md:p-8">
            <h2 className="text-2xl font-bold text-[#171329]">
              11. Contact Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              If you have any questions about these Terms & Conditions,
              MasterPath is available to assist you. Please contact us
              through the MasterPath website.
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