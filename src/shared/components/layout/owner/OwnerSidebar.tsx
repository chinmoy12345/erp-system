"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface OwnerSidebarProps {
  title: string;
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function OwnerSidebar({ title, navItems, isOpen, onClose }: OwnerSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-6">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        <button onClick={onClose} className="lg:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}