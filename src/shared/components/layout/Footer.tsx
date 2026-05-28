"use client";
import { useLastUpdated } from '@/hooks/useLastUpdated';

export function Footer() {
  const lastUpdated = useLastUpdated();

  return (
    <div className="text-center text-xs text-gray-400">
      Last updated: {lastUpdated || "Loading..."} | Data refreshes every 30 seconds
    </div>
  );
}