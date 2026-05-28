"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  Plus,
  Search,
  Filter,
  Boxes,
  PackageCheck,
  AlertTriangle,
  TrendingUp,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react"

const products = [
  {
    id: 1,
    name: "MacBook Pro M3",
    sku: "MBP-M3-2026",
    category: "Electronics",
    stock: 12,
    price: "$2,499",
    status: "In Stock",
  },

  {
    id: 2,
    name: "Gaming Keyboard",
    sku: "GK-9090",
    category: "Accessories",
    stock: 4,
    price: "$120",
    status: "Low Stock",
  },

  {
    id: 3,
    name: "Office Chair",
    sku: "CHR-2290",
    category: "Furniture",
    stock: 0,
    price: "$340",
    status: "Out of Stock",
  },

  {
    id: 4,
    name: "Dell Monitor",
    sku: "DM-4K-2026",
    category: "Electronics",
    stock: 18,
    price: "$890",
    status: "In Stock",
  },
]

export default function InventoryPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Inventory Management
            </h1>

            <p className="text-slate-500 text-lg mt-3">
              Manage products, stock levels and warehouse inventory
            </p>
          </div>

          <button className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-4 rounded-2xl flex items-center gap-3 font-semibold transition">

            <Plus size={20} />

            Add Product
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-500">
                  Total Products
                </p>

                <h2 className="text-5xl font-black mt-3">
                  1,248
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-cyan-100 flex items-center justify-center">
                <Boxes className="text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-500">
                  In Stock
                </p>

                <h2 className="text-5xl font-black mt-3">
                  1,120
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center">
                <PackageCheck className="text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-500">
                  Low Stock
                </p>

                <h2 className="text-5xl font-black mt-3">
                  28
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-500">
                  Revenue
                </p>

                <h2 className="text-5xl font-black mt-3">
                  $82K
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-purple-100 flex items-center justify-center">
                <TrendingUp className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-[36px] shadow-sm border border-slate-100 overflow-hidden">

          {/* TOP BAR */}
          <div className="p-8 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Product Inventory
              </h2>

              <p className="text-slate-500 mt-2">
                Monitor inventory and warehouse stock
              </p>
            </div>

            {/* FILTERS */}
            <div className="flex gap-4">

              <div className="relative">

                <Search
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-12 pr-5 py-4 rounded-2xl border border-slate-200 w-72 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <button className="border border-slate-200 px-5 py-4 rounded-2xl flex items-center gap-3 hover:bg-slate-50 transition">

                <Filter size={20} />

                Filter
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">
                <tr>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Product
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Category
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Stock
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Price
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Status
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >

                    {/* PRODUCT */}
                    <td className="px-8 py-6">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
                          {product.name.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">
                            {product.name}
                          </h3>

                          <p className="text-slate-500 text-sm">
                            SKU: {product.sku}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CATEGORY */}
                    <td className="px-8 py-6 font-medium text-slate-700">
                      {product.category}
                    </td>

                    {/* STOCK */}
                    <td className="px-8 py-6 font-bold text-slate-900">
                      {product.stock}
                    </td>

                    {/* PRICE */}
                    <td className="px-8 py-6 font-semibold text-slate-700">
                      {product.price}
                    </td>

                    {/* STATUS */}
                    <td className="px-8 py-6">

                      <div
                        className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                          product.status === "In Stock"
                            ? "bg-emerald-100 text-emerald-700"
                            : product.status === "Low Stock"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.status}
                      </div>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-8 py-6">

                      <div className="flex gap-3">

                        <button className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center hover:scale-105 transition">
                          <Eye size={18} />
                        </button>

                        <button className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center hover:scale-105 transition">
                          <Pencil size={18} />
                        </button>

                        <button className="w-11 h-11 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center hover:scale-105 transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}