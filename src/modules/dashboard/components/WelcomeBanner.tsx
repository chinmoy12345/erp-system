"use client";
import { useEffect, useState } from "react";

export function WelcomeBanner() {
  const [dateStr, setDateStr] = useState("");
  useEffect(() => {
    setDateStr(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 p-6 text-white shadow-xl">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative z-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight">Good morning, John 👋</h3>
          <p className="text-indigo-100">Here's your executive summary for today</p>
          <div className="mt-2 flex items-center gap-4 text-sm text-indigo-200">
            <span className="flex items-center gap-1">📅 {dateStr}</span>
            <span className="flex items-center gap-1">🕒 Last sync: just now</span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="rounded-lg bg-white/10 px-3 py-1.5 text-right backdrop-blur-sm">
            <p className="text-xs text-indigo-200">Total revenue this month</p>
            <p className="text-lg font-semibold">$284,567</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/30 hover:shadow-md">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Report
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-4 h-1 w-full overflow-hidden rounded-full bg-white/20">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-300 to-white" />
      </div>
    </div>
  );
}