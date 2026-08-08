import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/admin/dashboard"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
        <GraduationCap className="h-6 w-6" />
      </div>

      <div>
        <h1 className="text-lg font-bold text-slate-900">
          NFS Masterpath
        </h1>

        <p className="text-xs text-slate-500">
          Admin Panel
        </p>
      </div>
    </Link>
  );
}