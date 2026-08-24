import BlogCard from "./BlogCard";

type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

type BlogTag = {
  id: string;
  name: string;
  slug: string;
};

type BlogAuthor = {
  id: string;
  fullName: string;
};

type BlogGridItem = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  featuredImageAlt?: string | null;
  publishedAt?: Date | string | null;
  category?: BlogCategory | null;
  tags?: BlogTag[];
  author?: BlogAuthor | null;
};

type BlogGridProps = {
  blogs: BlogGridItem[];
};

export default function BlogGrid({
  blogs,
}: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-20 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border bg-background shadow-sm">
          <span className="text-xl text-muted-foreground">
            ?
          </span>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          No results
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          No articles found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          We couldn&apos;t find any articles matching
          your current search or category. Try
          changing your filters and search again.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Section heading */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Latest Insights
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore Our Articles
          </h2>
        </div>

        <p className="hidden text-sm text-muted-foreground sm:block">
          {blogs.length}{" "}
          {blogs.length === 1
            ? "article"
            : "articles"}
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
}