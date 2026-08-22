import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BlogForm from "@/components/admin/dashboard/blogs/BlogForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlogPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/blogs"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <div>
          <h1 className="text-2xl font-semibold">
            Edit Blog
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Update your blog post.
          </p>
        </div>
      </div>

      {/* Blog Form */}
      <BlogForm blogId={id} />
    </div>
  );
}