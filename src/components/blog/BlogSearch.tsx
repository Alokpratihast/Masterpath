"use client";

import {
  Search,
  X,
  ArrowRight,
} from "lucide-react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

type BlogSearchProps = {
  value?: string;
  placeholder?: string;
};

export default function BlogSearch({
  value = "",
  placeholder = "Search articles, guides, tutorials...",
}: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] =
    useState(value);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const params = new URLSearchParams(
      searchParams.toString()
    );

    const trimmedSearch =
      search.trim();

    if (trimmedSearch) {
      params.set(
        "search",
        trimmedSearch
      );
    } else {
      params.delete("search");
    }

    // Search ke baad page 1
    params.delete("page");

    const query = params.toString();

    router.push(
      query
        ? `/blogs?${query}`
        : "/blogs"
    );
  };

  const handleClear = () => {
    setSearch("");

    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.delete("search");
    params.delete("page");

    const query = params.toString();

    router.push(
      query
        ? `/blogs?${query}`
        : "/blogs"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div
        className="
          group
          relative
          flex
          min-h-[58px]
          items-center
          gap-3
          rounded-2xl
          border
          border-border/60
          bg-background
          px-4
          shadow-sm
          transition-all
          duration-200

          hover:border-primary/30
          hover:shadow-md

          focus-within:border-primary/50
          focus-within:ring-4
          focus-within:ring-primary/10
        "
      >
        {/* Search icon */}
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-primary/5
            text-primary
            transition-colors
            group-focus-within:bg-primary/10
          "
        >
          <Search className="h-4 w-4" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={(event) =>
            setSearch(
              event.target.value
            )
          }
          placeholder={placeholder}
          className="
            min-w-0
            flex-1
            bg-transparent
            text-sm
            text-foreground
            outline-none
            placeholder:text-muted-foreground/60
          "
          aria-label="Search articles"
        />

        {/* Clear */}
        {search && (
          <button
            type="button"
            onClick={handleClear}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-muted-foreground
              transition-colors
              hover:bg-muted
              hover:text-foreground
            "
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Search button */}
        <button
          type="submit"
          className="
            hidden
            h-9
            items-center
            gap-2
            rounded-xl
            bg-[#071B3A]
            px-4
            text-xs
            font-semibold
            text-white
            transition-all
            hover:bg-[#0B2A59]
            sm:inline-flex
          "
        >
          Search

          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </form>
  );
}