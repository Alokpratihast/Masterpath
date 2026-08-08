"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import { adminNav } from "./admin-nav";

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
      />

      {/* Sidebar */}

      <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-2xl lg:hidden">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <Logo />

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 p-4">
          {adminNav.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-5 w-5" />

                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}

        <div className="border-t border-slate-200 p-5">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()}
          </p>

          <p className="mt-1 text-center font-semibold text-slate-700">
            NFS MasterPath
          </p>
        </div>
      </aside>
    </>
  );
}