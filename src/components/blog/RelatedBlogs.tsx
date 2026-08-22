import BlogCard from "./BlogCard";

type RelatedBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  featuredImageAlt?: string | null;
  publishedAt?: Date | string | null;

  category?: {
    id: string;
    name: string;
    slug: string;
  } | null;

  tags?: {
    id: string;
    name: string;
    slug: string;
  }[];

  author?: {
    id: string;
    fullName: string;
  } | null;
};

type RelatedBlogsProps = {
  blogs: RelatedBlog[];
};

export default function RelatedBlogs({
  blogs,
}: RelatedBlogsProps) {
  if (!blogs.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-t bg-muted/20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Continue Reading
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-foreground md:text-4xl">
              You May Also Like
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Explore more insights, tutorials, and
              practical guides from MasterPath.
            </p>
          </div>

          {/* Article count */}
          <div className="hidden rounded-full border border-border/60 bg-background px-4 py-2 text-xs font-medium text-muted-foreground sm:block">
            {Math.min(blogs.length, 3)}{" "}
            related{" "}
            {blogs.length === 1
              ? "article"
              : "articles"}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}