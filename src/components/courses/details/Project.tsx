import { FolderKanban } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

const ACCENT_STYLES = {
  blue: {
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    hoverBg: "group-hover:bg-[#2E5EFF]",
    hoverBorder: "hover:border-[#2E5EFF]",
    label: "text-[#2E5EFF]",
  },
  amber: {
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    hoverBg: "group-hover:bg-[#FFB020]",
    hoverBorder: "hover:border-[#FFB020]",
    label: "text-[#B87700]",
  },
  mint: {
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    hoverBg: "group-hover:bg-[#16C79A]",
    hoverBorder: "hover:border-[#16C79A]",
    label: "text-[#0E9A78]",
  },
  coral: {
    bg: "bg-[#FFE9E9]",
    fg: "text-[#D14747]",
    hoverBg: "group-hover:bg-[#FF6B6B]",
    hoverBorder: "hover:border-[#FF6B6B]",
    label: "text-[#D14747]",
  },
} as const;

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function Projects({ course }: Props) {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <FolderKanban className="h-4 w-4" />
            Live Projects
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Build Real Industry Projects
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.projectsList.map((project, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const styles = ACCENT_STYLES[accent];

            return (
              <div
                key={project}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.hoverBorder}`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`icon-pulse-wrap relative flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${styles.bg} ${styles.fg} ${styles.hoverBg}`}
                  >
                    <span className="icon-pulse-ring" />

                    <FolderKanban
                      className={`relative z-10 h-7 w-7 transition-colors duration-300 ${styles.fg} group-hover:text-white`}
                    />
                  </div>

                  <span
                    className={`text-xs font-black uppercase tracking-widest ${styles.label}`}
                  >
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {project}
                </h3>

                <p className="mt-3 text-slate-600">
                  Industry-oriented implementation with complete guidance.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
