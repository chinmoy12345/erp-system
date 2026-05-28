"use client";
import { Menu, Search, Bell, User } from "lucide-react";

interface OwnerHeaderProps {
  title: string;
  onMenuClick: () => void;
  userName?: string;
}

export function OwnerHeader({ title, onMenuClick, userName = "Admin" }: OwnerHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Search className="h-5 w-5 text-gray-600" />
        </button>
        <button className="relative rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
            <User className="h-5 w-5" />
          </div>
          <span className="hidden text-sm font-medium sm:inline-block">{userName}</span>
        </div>
      </div>
    </header>
  );
}