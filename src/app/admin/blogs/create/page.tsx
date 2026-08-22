import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BlogForm from "@/components/admin/dashboard/blogs/BlogForm";

export default function CreateBlogPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/blogs"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
          aria-label="Back to blogs"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <div>
          <h1 className="text-2xl font-semibold">
            Create Blog
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Create and publish a new blog post.
          </p>
        </div>
      </div>

      {/* Form */}
      <BlogForm />
    </div>
  );
}