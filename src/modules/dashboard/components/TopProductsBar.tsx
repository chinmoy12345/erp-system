"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TOP_PRODUCTS } from '@/constants/dashboardMockData';

export function TopProductsBar() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-gray-800">Top Products</h3>
      <p className="mb-4 text-sm text-gray-500">By units sold</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={TOP_PRODUCTS} layout="vertical" margin={{ left: 80 }}>
          <XAxis type="number" tickFormatter={(v) => `${v / 1000}k`} />
          <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(v) => [`${v.toLocaleString()} units`, "Sales"]} />
          <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
            {TOP_PRODUCTS.map((entry, idx) => (<Cell key={`cell-${idx}`} fill={entry.color} />))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}