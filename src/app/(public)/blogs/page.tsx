import BlogHero from "@/components/blog/BlogHero";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogPagination from "@/components/blog/BlogPagination";

import { BlogService } from "@/services/blogs.service";
import { BlogCategoryService } from "@/services/blogCategory.service";

type SearchParams = {
  page?: string;
  search?: string;
  category?: string;
};

type BlogPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;

  const page = Math.max(
    1,
    Number(params.page) || 1
  );

  const search =
    params.search?.trim() || undefined;

  const categoryId =
    params.category || undefined;

  /**
   * Fetch published blogs
   */
  const result =
    await BlogService.getBlogs({
      page,
      limit: 9,
      search,
      categoryId,
      status: "PUBLISHED",
    });

  /**
   * Fetch categories
   */
  const categories =
    await BlogCategoryService.getCategories();

  /**
   * Featured blog
   *
   * First published blog is used
   * as featured blog for now.
   */
  const featuredBlog =
    result.blogs[0] ?? null;

  /**
   * Remove featured blog from
   * normal grid.
   */
  const gridBlogs =
    result.blogs.filter(
      (blog) =>
        blog.id !== featuredBlog?.id
    );

  return (
    <main>
      {/* Hero */}
      <BlogHero />

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Search + Categories */}
        <div className="space-y-5">
          {/* Search */}
          <div className="max-w-xl">
            <BlogSearch
              value={search || ""}
            />
          </div>

          {/* Categories */}
          <BlogCategoryFilter
            categories={categories}
            value={categoryId || ""}
          />
        </div>

        {/* Featured */}
        {featuredBlog && (
          <div className="mt-10">
            <BlogFeatured
  blog={featuredBlog}
/>
          </div>
        )}

        {/* Blog Grid */}
        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">
              Latest Articles
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Explore our latest insights,
              guides, and resources.
            </p>
          </div>

          <BlogGrid
            blogs={gridBlogs.map(
              (blog) => ({
                ...blog,

                tags:
                  blog.tags.map(
                    (blogTag) =>
                      blogTag.tag
                  ),
              })
            )}
          />
        </section>

        {/* Pagination */}
        <div className="mt-10">
          <BlogPagination
            page={
              result.pagination.page
            }
            totalPages={
              result.pagination.totalPages
            }
            hasNextPage={
              result.pagination.hasNextPage
            }
            hasPreviousPage={
              result.pagination
                .hasPreviousPage
            }
          />
        </div>
      </div>
    </main>
  );
}