"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  Pencil,
  DollarSign,
  Barcode,
} from "lucide-react"

export default function EditInventoryPage() {
  return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto">

        <div className="mb-10">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center">
              <Pencil size={28} />
            </div>

            <div>
              <h1 className="text-5xl font-black text-slate-900">
                Edit Product
              </h1>

              <p className="text-slate-500 text-lg mt-2">
                Update inventory information
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="block mb-3 font-semibold">
                Product Name
              </label>

              <input
                type="text"
                defaultValue="MacBook Pro M3"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4"
              />
            </div>

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
                  defaultValue="MBP-M3-2026"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4"
                />
              </div>
            </div>

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
                  defaultValue="2500"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4"
                />
              </div>
            </div>

            <div>
              <label className="block mb-3 font-semibold">
                Stock
              </label>

              <input
                type="number"
                defaultValue="15"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10">

            <button className="border border-slate-200 px-7 py-4 rounded-2xl">
              Cancel
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold">
              Update Product
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}