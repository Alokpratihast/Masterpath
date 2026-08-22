


import Link from "next/link";
import { Plus } from "lucide-react";

import { BlogService } from "@/services/blogs.service";
import { BlogCategoryService } from "@/services/blogCategory.service";

import BlogTable from "@/components/admin/dashboard/blogs/BlogTable";
import BlogStats from "@/components/admin/dashboard/blogs/BlogStats";
import BlogFilters from "@/components/admin/dashboard/blogs/BlogFilters";
import BlogPagination from "@/components/admin/dashboard/blogs/BlogPagination";

type SearchParams = {
  page?: string;
  limit?: string;
  search?: string;
  status?: string;
  categoryId?: string;
};

type BlogsPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function BlogsPage({
  searchParams,
}: BlogsPageProps) {
  const params = await searchParams;

  const page = Math.max(
    1,
    Number(params.page) || 1
  );

  const limit = Math.min(
    50,
    Math.max(
      1,
      Number(params.limit) || 10
    )
  );

  const search =
    params.search?.trim() || undefined;

  const status =
    params.status === "PUBLISHED" ||
    params.status === "DRAFT"
      ? params.status
      : undefined;

  const categoryId =
    params.categoryId?.trim() || undefined;

  /**
   * Fetch blogs and categories
   * in parallel.
   */
  const [result, categories] =
    await Promise.all([
      BlogService.getBlogs({
        page,
        limit,
        search,
        status,
        categoryId,
      }),

      BlogCategoryService.getCategories(),
    ]);

  /**
   * Convert BlogTag relation into
   * the BlogTable format.
   */
  const blogs = result.blogs.map(
    (blog) => ({
      ...blog,

      tags: blog.tags.map(
        (blogTag) => blogTag.tag
      ),
    })
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Blogs
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage your blog posts,
            categories, tags and SEO.
          </p>
        </div>

        <Link
          href="/admin/blogs/create"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Create Blog
        </Link>
      </div>

      {/* Stats */}
      <BlogStats
        blogs={blogs}
        total={result.pagination.total}
      />

      {/* Filters */}
      <BlogFilters
  search={search || ""}
  status={status || ""}
  categoryId={categoryId || ""}
  categories={categories.map(
    (category) => ({
      id: category.id,
      name: category.name,
    })
  )}
/>

      {/* Blog Table */}
      <BlogTable blogs={blogs} />

      {/* Pagination */}
      <BlogPagination
  page={result.pagination.page}
  totalPages={
    result.pagination.totalPages
  }
  hasNextPage={
    result.pagination.hasNextPage
  }
  hasPreviousPage={
    result.pagination.hasPreviousPage
  }
/>
    </div>
  );
}