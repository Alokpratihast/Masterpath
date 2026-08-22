"use client";

import { useState } from "react";
import { Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";

type DeleteBlogDialogProps = {
  blogId: string;
  blogTitle: string;
  open: boolean;
  onClose: () => void;
};

export default function DeleteBlogDialog({
  blogId,
  blogTitle,
  open,
  onClose,
}: DeleteBlogDialogProps) {
  const router = useRouter();

  const [deleting, setDeleting] =
    useState(false);

  if (!open) {
    return null;
  }

  const handleDelete = async () => {
    try {
      setDeleting(true);

      const response = await fetch(
        `/api/admin/blogs/${blogId}`,
        {
          method: "DELETE",
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Failed to delete blog"
        );
      }

      onClose();

      router.refresh();
    } catch (error) {
      console.error(
        "Delete blog error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete blog"
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <Trash2 className="h-5 w-5 text-destructive" />
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Delete Blog
              </h2>

              <p className="text-sm text-muted-foreground">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={deleting}
            className="rounded-md p-1 hover:bg-muted"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-sm">
            Are you sure you want to delete:
          </p>

          <p className="mt-2 rounded-md bg-muted px-3 py-2 text-sm font-medium">
            {blogTitle}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={deleting}
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="inline-flex items-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Trash2 className="h-4 w-4" />

            {deleting
              ? "Deleting..."
              : "Delete Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}