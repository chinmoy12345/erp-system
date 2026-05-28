"use client";
import { Menu, Search, Bell, User, Calendar } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';

export function Header() {
  const { setSidebarOpen } = useDashboardStore();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden items-center gap-2 rounded-lg border px-3 py-1.5 text-sm sm:flex">
          <Calendar className="h-4 w-4" />
          <span>May 1 – May 31, 2025</span>
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Search className="h-5 w-5 text-gray-600" />
        </button>
        <button className="relative rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="flex items-center gap-2 rounded-full pl-2 pr-3 hover:bg-gray-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
            <User className="h-5 w-5" />
          </div>
          <span className="hidden text-sm font-medium sm:inline-block">John Admin</span>
        </button>
      </div>
    </header>
  );
}