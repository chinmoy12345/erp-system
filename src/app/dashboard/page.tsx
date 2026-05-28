"use client";

import {
  KpiCardsGrid,
  RevenueChart,
  SalesPieChart,
  TopProductsBar,
  RecentOrdersTable,
  InventoryAlerts,
  RecentActivityFeed,
  WelcomeBanner,
} from '@/modules/dashboard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <KpiCardsGrid />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RevenueChart />
        <SalesPieChart />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TopProductsBar />
        <RecentOrdersTable />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <InventoryAlerts />
        <RecentActivityFeed />
      </div>
    </div>
  );
}