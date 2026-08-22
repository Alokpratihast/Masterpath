"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Pencil,
  ExternalLink,
} from "lucide-react";

import type { Blog } from "@/types/blog";
import BlogDeleteButton from "./BlogDeleteButton";

type BlogTableProps = {
  blogs: Blog[];
};

export default function BlogTable({
  blogs,
}: BlogTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-4 py-4 text-left font-medium">
                Blog
              </th>

              <th className="px-4 py-4 text-left font-medium">
                Category
              </th>

              <th className="px-4 py-4 text-left font-medium">
                Tags
              </th>

              <th className="px-4 py-4 text-left font-medium">
                Status
              </th>

              <th className="px-4 py-4 text-left font-medium">
                Published
              </th>

              <th className="px-4 py-4 text-right font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center"
                >
                  <div className="space-y-2">
                    <p className="font-medium">
                      No blogs found
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Create your first blog post.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b last:border-0 hover:bg-muted/20"
                >
                  {/* Blog */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      {/* Image */}
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border bg-muted">
                        {blog.featuredImage ? (
                          <Image
                            src={
                              blog.featuredImage
                            }
                            alt={
                              blog.featuredImageAlt ||
                              blog.title
                            }
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                            No image
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <div className="min-w-0">
                        <p className="truncate font-medium">
                          {blog.title}
                        </p>

                        <p className="mt-1 max-w-[300px] truncate text-xs text-muted-foreground">
                          /{blog.slug}
                        </p>

                        {blog.excerpt && (
                          <p className="mt-1 max-w-[300px] truncate text-xs text-muted-foreground">
                            {blog.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-4">
                    {blog.category ? (
                      <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                        {blog.category.name}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">
                        Uncategorized
                      </span>
                    )}
                  </td>

                  {/* Tags */}
                  <td className="px-4 py-4">
                    <div className="flex max-w-[220px] flex-wrap gap-1.5">
                      {blog.tags.length > 0 ? (
                        blog.tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="rounded-full border px-2 py-1 text-xs"
                          >
                            {tag.name}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          No tags
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    {blog.status ===
                    "PUBLISHED" ? (
                      <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-700">
                        Draft
                      </span>
                    )}
                  </td>

                  {/* Published */}
                  <td className="px-4 py-4">
                    {blog.publishedAt ? (
                      <div>
                        <p className="text-sm">
                          {new Date(
                            blog.publishedAt
                          ).toLocaleDateString(
                            "en-IN"
                          )}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {new Date(
                            blog.publishedAt
                          ).toLocaleTimeString(
                            "en-IN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">
                        Not published
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-2">
  <Link
    href={`/admin/blogs/${blog.id}/edit`}
    className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted"
  >
    <Pencil className="h-3.5 w-3.5" />
    Edit
  </Link>

  <BlogDeleteButton
    blogId={blog.id}
    blogTitle={blog.title}
  />

  <Link
    href={`/blog/${blog.slug}`}
    target="_blank"
    className="inline-flex items-center justify-center rounded-md border p-1.5 hover:bg-muted"
    aria-label="View blog"
  >
    <ExternalLink className="h-3.5 w-3.5" />
  </Link>
</div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}