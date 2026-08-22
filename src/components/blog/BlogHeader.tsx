import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";

type BlogHeaderProps = {
  title: string;
  excerpt?: string | null;
  publishedAt?: Date | string | null;

  category?: {
    id: string;
    name: string;
    slug: string;
  } | null;

  author?: {
    id: string;
    fullName: string;
  } | null;

  readingTime?: number;
};

export default function BlogHeader({
  title,
  excerpt,
  publishedAt,
  category,
  author,
  readingTime = 6,
}: BlogHeaderProps) {
  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      )
    : null;

  const authorInitial = author?.fullName
    ?.charAt(0)
    .toUpperCase();

  return (
    <section className="relative overflow-hidden bg-[#071B3A] text-white">
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left glow */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[110px]" />

        {/* Right glow */}
        <div className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-250px] left-1/3 h-[420px] w-[650px] rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.06]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:52px_52px]
          "
        />
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

      <div className="pointer-events-none absolute -right-5 top-1/2 hidden h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-blue-300/10 lg:block" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14 lg:py-16">
        {/* Back */}
        <Link
          href="/blogs"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            px-4
            py-2
            text-xs
            font-medium
            text-blue-100/80
            backdrop-blur-sm
            transition-all
            hover:border-white/20
            hover:bg-white/10
            hover:text-white
          "
        >
          <ArrowLeft
            className="
              h-3.5
              w-3.5
              transition-transform
              group-hover:-translate-x-1
            "
          />

          Back to Blogs
        </Link>

        {/* Category */}
        {category && (
          <div className="mt-8">
            <Link
              href={`/blogs?category=${category.slug}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-300/20
                bg-blue-400/10
                px-3.5
                py-1.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-blue-200
                backdrop-blur-sm
                transition-colors
                hover:bg-blue-400/20
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />

              {category.name}
            </Link>
          </div>
        )}

        {/* Title */}
        <h1
          className="
            mt-5
            max-w-4xl
            text-4xl
            font-bold
            leading-[1.06]
            tracking-[-0.04em]
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          {title}
        </h1>

        {/* Accent */}
        <div className="mt-7 h-1 w-16 rounded-full bg-blue-400" />

        {/* Excerpt */}
        {excerpt && (
          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-blue-100/70
              sm:text-lg
              sm:leading-8
            "
          >
            {excerpt}
          </p>
        )}

        {/* =========================
            META
        ========================== */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* Author */}
          {author && (
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.06]
                px-3
                py-2.5
                backdrop-blur-sm
              "
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400/20 text-xs font-bold text-blue-200">
                {authorInitial || (
                  <UserRound className="h-4 w-4" />
                )}
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  {author.fullName}
                </p>

                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-blue-200/50">
                  Author
                </p>
              </div>
            </div>
          )}

          {/* Date */}
          {publishedDate && (
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-3.5
                py-3
                text-xs
                text-blue-100/70
              "
            >
              <CalendarDays className="h-4 w-4 text-blue-300" />

              {publishedDate}
            </div>
          )}

          {/* Reading time */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              px-3.5
              py-3
              text-xs
              text-blue-100/70
            "
          >
            <Clock3 className="h-4 w-4 text-blue-300" />

            {readingTime} min read
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
    </section>
  );
}