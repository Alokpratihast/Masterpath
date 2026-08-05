"use client";

type Category =
  | "All"
  | "Technology"
  | "Finance"
  | "Marketing"
  | "HR";

const categories: Category[] = [
  "All",
  "Technology",
  "Finance",
  "Marketing",
  "HR",
];

type ProgramTabsProps = {
  activeCategory: Category;
  onChange: (category: Category) => void;
};

export default function ProgramTabs({
  activeCategory,
  onChange,
}: ProgramTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
              ${
                active
                  ? "bg-blue-700 text-white shadow-lg"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-700"
              }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}