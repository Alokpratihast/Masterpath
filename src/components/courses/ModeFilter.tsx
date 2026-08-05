import type { Mode } from "@/types/filter";

const modes: Mode[] = [
  "All",
  "Classroom",
  "Online",
  "Hybrid",
];

type Props = {
  active: Mode;
  onChange: (value: Mode) => void;
};

export default function ModeFilter({
  active,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => onChange(mode)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            active === mode
              ? "bg-orange-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}