// "use client";

// import {
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// type BlogPaginationProps = {
//   page: number;
//   totalPages: number;
//   hasNextPage: boolean;
//   hasPreviousPage: boolean;
//   onPageChange: (
//     page: number
//   ) => void;
// };

// export default function BlogPagination({
//   page,
//   totalPages,
//   hasNextPage,
//   hasPreviousPage,
//   onPageChange,
// }: BlogPaginationProps) {
//   if (totalPages <= 1) {
//     return null;
//   }

//   return (
//     <div className="flex items-center justify-between border-t pt-4">
//       <p className="text-sm text-muted-foreground">
//         Page {page} of {totalPages}
//       </p>

//       <div className="flex items-center gap-2">
//         <button
//           type="button"
//           disabled={!hasPreviousPage}
//           onClick={() =>
//             onPageChange(page - 1)
//           }
//           className="inline-flex h-9 items-center gap-1 rounded-md border px-3 text-sm hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           <ChevronLeft className="h-4 w-4" />
//           Previous
//         </button>

//         <button
//           type="button"
//           disabled={!hasNextPage}
//           onClick={() =>
//             onPageChange(page + 1)
//           }
//           className="inline-flex h-9 items-center gap-1 rounded-md border px-3 text-sm hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           Next
//           <ChevronRight className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// }



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

  const changePage = (
    newPage: number
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set(
      "page",
      String(newPage)
    );

    router.push(
      `${pathname}?${params.toString()}`
    );
  };

  return (
    <div className="flex items-center justify-between border-t pt-4">
      <p className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={!hasPreviousPage}
          onClick={() =>
            changePage(page - 1)
          }
          className="inline-flex h-9 items-center gap-1 rounded-md border px-3 text-sm hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <button
          type="button"
          disabled={!hasNextPage}
          onClick={() =>
            changePage(page + 1)
          }
          className="inline-flex h-9 items-center gap-1 rounded-md border px-3 text-sm hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}