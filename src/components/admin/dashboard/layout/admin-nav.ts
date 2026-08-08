import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  MessageSquare,
  BarChart3,
  ClipboardList,
  PhoneCall,
} from "lucide-react";

export type AdminNavItem = {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
};

export const adminNav: AdminNavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },

  {
    title: "Contact Messages",
    href: "/admin/contact",
    icon: MessageSquare,
  },

  {
    title: "ADD Leads",
    href: "/admin/neodove/dashboard",
    icon: BarChart3,
  },

  // {
  //   title: "NeoDove Leads",
  //   href: "/admin/neodove/leads",
  //   icon: Users,
  // },

  // {
  //   title: "Follow Ups",
  //   href: "/admin/neodove/followups",
  //   icon: PhoneCall,
  // },

  // {
  //   title: "Tasks",
  //   href: "/admin/neodove/tasks",
  //   icon: ClipboardList,
  // },

  // {
  //   title: "Settings",
  //   href: "/admin/settings",
  //   icon: Settings,
  // },
];