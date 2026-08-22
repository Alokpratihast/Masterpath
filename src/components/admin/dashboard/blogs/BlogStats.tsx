import {
  FileText,
  CheckCircle2,
  FileEdit,
} from "lucide-react";

import type { Blog } from "@/types/blog";

type BlogStatsProps = {
  blogs: Blog[];
  total: number;
};

export default function BlogStats({
  blogs,
  total,
}: BlogStatsProps) {
  const publishedCount = blogs.filter(
    (blog) => blog.status === "PUBLISHED"
  ).length;

  const draftCount = blogs.filter(
    (blog) => blog.status === "DRAFT"
  ).length;

  const stats = [
    {
      title: "Total Blogs",
      value: total,
      icon: FileText,
    },
    {
      title: "Published",
      value: publishedCount,
      icon: CheckCircle2,
    },
    {
      title: "Drafts",
      value: draftCount,
      icon: FileEdit,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border bg-background p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {stat.title}
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}