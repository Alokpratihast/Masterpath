import type { Category } from "@/types/filter";

const categories: Category[] = [
  "All",
  "Technology",
  "Finance",
  "Marketing",
  "HR",
];

type Props = {
  active: Category;
  onChange: (value: Category) => void;
};

export default function CategoryTabs({
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            active === category
              ? "bg-blue-700 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}