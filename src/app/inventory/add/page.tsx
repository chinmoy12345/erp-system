"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  PackagePlus,
  DollarSign,
  Boxes,
  Barcode,
} from "lucide-react"

export default function AddInventoryPage() {
  return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center">
              <PackagePlus size={30} />
            </div>

            <div>
              <h1 className="text-5xl font-black text-slate-900">
                Add Product
              </h1>

              <p className="text-slate-500 text-lg mt-2">
                Create new inventory product
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">

          <div className="grid md:grid-cols-2 gap-8">

            {/* PRODUCT NAME */}
            <div>
              <label className="block mb-3 font-semibold">
                Product Name
              </label>

              <input
                type="text"
                placeholder="MacBook Pro"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block mb-3 font-semibold">
                SKU
              </label>

              <div className="relative">

                <Barcode
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="SKU-2026"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block mb-3 font-semibold">
                Category
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900">

                <option>Electronics</option>
                <option>Accessories</option>
                <option>Furniture</option>
              </select>
            </div>

            {/* PRICE */}
            <div>
              <label className="block mb-3 font-semibold">
                Price
              </label>

              <div className="relative">

                <DollarSign
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="number"
                  placeholder="2500"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* STOCK */}
            <div>
              <label className="block mb-3 font-semibold">
                Stock Quantity
              </label>

              <div className="relative">

                <Boxes
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="number"
                  placeholder="100"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* STATUS */}
            <div>
              <label className="block mb-3 font-semibold">
                Status
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900">

                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <label className="block mb-3 font-semibold">
              Product Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter product description..."
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 mt-10">

            <button className="border border-slate-200 px-7 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition">
              Cancel
            </button>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition">
              Create Product
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}