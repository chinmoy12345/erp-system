"use client";

import {
  OwnerKpiCards,
  SubscriptionChart,
  CompaniesTable,
  RecentSignups,
} from '@/modules/owner';

export default function OwnerDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-md">
        <h3 className="text-2xl font-bold">Application Owner Dashboard</h3>
        <p className="mt-1 text-indigo-100">
          Overview of your platform's growth, subscriptions, and company metrics.
        </p>
      </div>

      <OwnerKpiCards />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SubscriptionChart />
        <RecentSignups />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <CompaniesTable />
      </div>
    </div>
  );
}