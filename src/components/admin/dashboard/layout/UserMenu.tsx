"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { toast } from "sonner";

import { AuthClient } from "@/services/auth.client";

type UserMenuProps = {
  fullName: string;
  email: string;
};

export default function UserMenu({
  fullName,
  email,
}: UserMenuProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);

      await AuthClient.logout();

      toast.success("Logged out successfully.");

      router.replace("/admin/login");

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Logout failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          {fullName.charAt(0).toUpperCase()}
        </div>

        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold text-slate-800">
            {fullName}
          </p>

          <p className="text-xs text-slate-500">
            {email}
          </p>
        </div>

        <ChevronDown
          className={`h-4 w-4 text-slate-500 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 p-4">
            <p className="font-semibold text-slate-900">
              {fullName}
            </p>

            <p className="text-sm text-slate-500">
              {email}
            </p>
          </div>

          <button
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-slate-50"
          >
            <User className="h-4 w-4" />
            Profile
          </button>

          <button
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-slate-50"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />

            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      )}
    </div>
  );
}