// "use client";

// import { Search, X } from "lucide-react";

// type Category = {
//   id: string;
//   name: string;
// };

// type BlogFiltersProps = {
//   search: string;
//   status: string;
//   categoryId: string;

//   categories: Category[];

//   onSearchChange: (
//     value: string
//   ) => void;

//   onStatusChange: (
//     value: string
//   ) => void;

//   onCategoryChange: (
//     value: string
//   ) => void;

//   onClear: () => void;
// };

// export default function BlogFilters({
//   search,
//   status,
//   categoryId,
//   categories,
//   onSearchChange,
//   onStatusChange,
//   onCategoryChange,
//   onClear,
// }: BlogFiltersProps) {
//   const hasFilters =
//     search ||
//     status ||
//     categoryId;

//   return (
//     <div className="rounded-xl border bg-background p-4">
//       <div className="grid gap-3 md:grid-cols-[1fr_180px_200px_auto]">
//         {/* Search */}
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

//           <input
//             type="text"
//             value={search}
//             onChange={(event) =>
//               onSearchChange(
//                 event.target.value
//               )
//             }
//             placeholder="Search blogs..."
//             className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary"
//           />
//         </div>

//         {/* Status */}
//         <select
//           value={status}
//           onChange={(event) =>
//             onStatusChange(
//               event.target.value
//             )
//           }
//           className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
//         >
//           <option value="">
//             All Status
//           </option>

//           <option value="PUBLISHED">
//             Published
//           </option>

//           <option value="DRAFT">
//             Draft
//           </option>
//         </select>

//         {/* Category */}
//         <select
//           value={categoryId}
//           onChange={(event) =>
//             onCategoryChange(
//               event.target.value
//             )
//           }
//           className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
//         >
//           <option value="">
//             All Categories
//           </option>

//           {categories.map(
//             (category) => (
//               <option
//                 key={category.id}
//                 value={category.id}
//               >
//                 {category.name}
//               </option>
//             )
//           )}
//         </select>

//         {/* Clear */}
//         {hasFilters && (
//           <button
//             type="button"
//             onClick={onClear}
//             className="inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium hover:bg-muted"
//           >
//             <X className="h-4 w-4" />
//             Clear
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import {
  Search,
  X,
} from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

type Category = {
  id: string;
  name: string;
};

type BlogFiltersProps = {
  search: string;
  status: string;
  categoryId: string;
  categories: Category[];
};

export default function BlogFilters({
  search,
  status,
  categoryId,
  categories,
}: BlogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilters = (
    key: string,
    value: string
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Filter change hone par page 1 par wapas
    params.set("page", "1");

    router.push(
      `${pathname}?${params.toString()}`
    );
  };

  const clearFilters = () => {
    router.push(pathname);
  };

  const hasFilters =
    Boolean(search) ||
    Boolean(status) ||
    Boolean(categoryId);

  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="grid gap-3 md:grid-cols-[1fr_180px_200px_auto]">
        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="text"
            defaultValue={search}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                updateFilters(
                  "search",
                  event.currentTarget.value.trim()
                );
              }
            }}
            placeholder="Search blogs..."
            className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(event) =>
            updateFilters(
              "status",
              event.target.value
            )
          }
          className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">
            All Status
          </option>

          <option value="PUBLISHED">
            Published
          </option>

          <option value="DRAFT">
            Draft
          </option>
        </select>

        {/* Category */}
        <select
          value={categoryId}
          onChange={(event) =>
            updateFilters(
              "categoryId",
              event.target.value
            )
          }
          className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">
            All Categories
          </option>

          {categories.map(
            (category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            )
          )}
        </select>

        {/* Clear */}
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium hover:bg-muted"
          >
            <X className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        Press Enter to search.
      </p>
    </div>
  );
}