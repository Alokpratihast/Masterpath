import Image from "next/image";
import { studentAchievements } from "@/data/studentAchievements";

export default function StudentAchievements() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Student Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Celebrating Our Students&apos; Success
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our students are building industry-ready skills and achieving
            their career goals through practical learning and professional
            training.
          </p>
        </div>

        {/* Certificates */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {studentAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={achievement.image}
                  alt={`${achievement.title} student certificate`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {achievement.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  MasterPath Student Achievement
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}