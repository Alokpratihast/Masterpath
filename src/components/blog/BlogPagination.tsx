"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

type BlogPaginationProps = {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export default function BlogPagination({
  page,
  totalPages,
  hasNextPage,
  hasPreviousPage,
}: BlogPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", String(newPage));

    router.push(
      `${pathname}?${params.toString()}`
    );
  };

  return (
    <nav
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-4
        rounded-2xl
        border
        border-border/60
        bg-muted/20
        px-4
        py-4
        sm:flex-row
        sm:px-5
      "
      aria-label="Blog pagination"
    >
      {/* Previous */}
      <button
        type="button"
        disabled={!hasPreviousPage}
        onClick={() =>
          changePage(page - 1)
        }
        className="
          group
          inline-flex
          h-10
          items-center
          gap-2
          rounded-xl
          border
          border-border/60
          bg-background
          px-4
          text-sm
          font-medium
          text-foreground
          shadow-sm
          transition-all
          hover:border-primary/30
          hover:bg-primary/5
          hover:text-primary
          disabled:cursor-not-allowed
          disabled:opacity-40
          disabled:hover:border-border/60
          disabled:hover:bg-background
          disabled:hover:text-foreground
        "
      >
        <ChevronLeft
          className="
            h-4
            w-4
            transition-transform
            group-hover:-translate-x-0.5
          "
        />

        Previous
      </button>

      {/* Page indicator */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Page
        </span>

        <span
          className="
            inline-flex
            h-9
            min-w-9
            items-center
            justify-center
            rounded-lg
            bg-[#071B3A]
            px-2.5
            text-sm
            font-semibold
            text-white
            shadow-sm
          "
        >
          {page}
        </span>

        <span className="text-sm text-muted-foreground">
          of {totalPages}
        </span>
      </div>

      {/* Next */}
      <button
        type="button"
        disabled={!hasNextPage}
        onClick={() =>
          changePage(page + 1)
        }
        className="
          group
          inline-flex
          h-10
          items-center
          gap-2
          rounded-xl
          border
          border-border/60
          bg-background
          px-4
          text-sm
          font-medium
          text-foreground
          shadow-sm
          transition-all
          hover:border-primary/30
          hover:bg-primary/5
          hover:text-primary
          disabled:cursor-not-allowed
          disabled:opacity-40
          disabled:hover:border-border/60
          disabled:hover:bg-background
          disabled:hover:text-foreground
        "
      >
        Next

        <ChevronRight
          className="
            h-4
            w-4
            transition-transform
            group-hover:translate-x-0.5
          "
        />
      </button>
    </nav>
  );
}