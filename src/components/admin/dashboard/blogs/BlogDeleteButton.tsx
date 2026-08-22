"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import DeleteBlogDialog from "./DeleteBlogDialog";

type BlogDeleteButtonProps = {
  blogId: string;
  blogTitle: string;
};

export default function BlogDeleteButton({
  blogId,
  blogTitle,
}: BlogDeleteButtonProps) {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
      >
        <Trash2 className="h-3.5 w-3.5" />
        Delete
      </button>

      <DeleteBlogDialog
        blogId={blogId}
        blogTitle={blogTitle}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}