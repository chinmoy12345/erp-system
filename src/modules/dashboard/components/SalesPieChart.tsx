"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { SALES_CATEGORIES } from '@/constants/dashboardMockData';

export function SalesPieChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-gray-800">Sales by Category</h3>
      <p className="mb-4 text-sm text-gray-500">Revenue distribution</p>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={SALES_CATEGORIES} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={true}>
            {SALES_CATEGORIES.map((entry, idx) => (<Cell key={`cell-${idx}`} fill={entry.color} />))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}