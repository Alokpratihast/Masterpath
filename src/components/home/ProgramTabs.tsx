

"use client";

type Category = "All" | "Technology" | "Finance" | "Marketing" | "HR";

const categories: Category[] = ["All", "Technology", "Finance", "Marketing", "HR"];

type ProgramTabsProps = {
  activeCategory: Category;
  onChange: (category: Category) => void;
};

export default function ProgramTabs({
  activeCategory,
  onChange,
}: ProgramTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300
              ${
                active
                  ? "bg-[#2E5EFF] text-white shadow-[0_10px_24px_-8px_rgba(46,94,255,0.55)]"
                  : "border-2 border-[#E4E9FB] bg-white text-[#5B6685] hover:border-[#2E5EFF] hover:text-[#2E5EFF]"
              }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
