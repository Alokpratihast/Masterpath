import type { Level } from "@/types/filter";

const levels: Level[] = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

type Props = {
  active: Level;
  onChange: (value: Level) => void;
};

export default function LevelFilter({
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onChange(level)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            active === level
              ? "bg-emerald-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}