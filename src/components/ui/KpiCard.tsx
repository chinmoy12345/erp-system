"use client";
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { KpiCard as KpiCardType } from '@/types/dashboard';

export function KpiCard({ title, value, change, icon: Icon, color, bgLight }: KpiCardType) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className={`rounded-full ${bgLight} p-2`}>
          <Icon className={`h-5 w-5 ${color.replace("bg-", "text-")}`} />
        </div>
        <div className="flex items-center gap-1">
          {change >= 0 ? <ArrowUp className="h-4 w-4 text-green-600" /> : <ArrowDown className="h-4 w-4 text-red-600" />}
          <span className={`text-sm font-medium ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </div>
  );
}