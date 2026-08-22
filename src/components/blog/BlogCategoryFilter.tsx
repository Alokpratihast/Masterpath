"use client";

import { useRouter, useSearchParams } from "next/navigation";

type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

type BlogCategoryFilterProps = {
  categories: BlogCategory[];
  value?: string;
};

export default function BlogCategoryFilter({
  categories,
  value = "",
}: BlogCategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (
    categoryId: string
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (categoryId) {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }

    // Category change par page 1 se start
    params.delete("page");

    const query = params.toString();

    router.push(
      query
        ? `/blogs?${query}`
        : "/blogs"
    );
  };

  const allItems = [
    {
      id: "",
      name: "All Articles",
    },
    ...categories,
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2">
        {allItems.map((category) => {
          const isActive =
            value === category.id;

          return (
            <button
              key={
                category.id || "all"
              }
              type="button"
              onClick={() =>
                handleCategoryChange(
                  category.id
                )
              }
              className={`
                group
                inline-flex
                items-center
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-200

                ${
                  isActive
                    ? "border-[#071B3A] bg-[#071B3A] text-white shadow-md"
                    : "border-border/70 bg-background text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                }
              `}
            >
              {/* Active indicator */}
              <span
                className={`
                  mr-2
                  h-1.5
                  w-1.5
                  rounded-full
                  transition-all
                  ${
                    isActive
                      ? "bg-blue-300"
                      : "bg-muted-foreground/30 group-hover:bg-primary"
                  }
                `}
              />

              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}