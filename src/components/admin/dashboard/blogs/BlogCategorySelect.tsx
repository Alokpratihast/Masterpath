"use client";

import { useEffect, useState } from "react";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type BlogCategorySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function BlogCategorySelect({
  value,
  onChange,
}: BlogCategorySelectProps) {
  const [categories, setCategories] =
    useState<Category[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchCategories =
      async () => {
        try {
          setLoading(true);
          setError("");

          const response =
            await fetch(
              "/api/admin/blog-categories"
            );

          const result =
            await response.json();

          if (!response.ok) {
            throw new Error(
              result.message ||
                "Failed to fetch categories"
            );
          }

          setCategories(
            result.data || []
          );
        } catch (error) {
          console.error(
            "Category fetch error:",
            error
          );

          setError(
            "Failed to load categories"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchCategories();
  }, []);

  return (
    <div className="space-y-2">
      <label
        htmlFor="category"
        className="text-sm font-medium"
      >
        Category
      </label>

      <select
        id="category"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        disabled={loading}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">
          {loading
            ? "Loading categories..."
            : "Select category"}
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

      {error && (
        <p className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}