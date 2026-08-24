import Link from "next/link";

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Pages",
      description: "Explore the main sections of our website.",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Placement", href: "/placement" },
        { name: "Our Services", href: "/services" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      description: "Helpful resources for your career journey.",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Career Guidance", href: "/placement" },
        { name: "Interview Preparation", href: "/placement" },
      ],
    },
    {
      title: "Information",
      description: "Important information and policies.",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#17134A] via-[#1B245E] to-[#101F4D] px-6 py-20">

        {/* Background glow */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Sitemap
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Find everything you need in one place. Explore our
            services, placement support, resources and more.
          </p>

        </div>
      </section>


      {/* Sitemap */}
      <section className="bg-[#FAFAFC] px-6 py-16 md:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-3">

            {sections.map((section, index) => (
              <div
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#6C4DE6]/40 hover:shadow-lg"
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0EDFF] text-sm font-bold text-[#6C4DE6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl text-gray-300">
                    ↗
                  </span>

                </div>


                {/* Title */}
                <h2 className="mt-6 text-xl font-bold text-[#171329]">
                  {section.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {section.description}
                </p>


                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" />


                {/* Links */}
                <ul className="space-y-1">

                  {section.links.map((link) => (
                    <li key={link.name}>

                      <Link
                        href={link.href}
                        className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm text-gray-600 transition hover:bg-[#F5F3FF] hover:text-[#6C4DE6]"
                      >

                        <span className="flex items-center">

                          <span className="mr-3 text-gray-300 transition group-hover:text-[#6C4DE6]">
                            →
                          </span>

                          {link.name}

                        </span>

                        <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>

                      </Link>

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#17134A] to-[#202B68]">

          <div className="px-6 py-12 text-center md:px-12">

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Need help finding something?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300">
              Our team is here to help you find the right information
              and take the next step in your career.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-[#6C4DE6] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5838CF]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}