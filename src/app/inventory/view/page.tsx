"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  PackageCheck,
  Barcode,
  DollarSign,
  Boxes,
} from "lucide-react"

export default function ViewInventoryPage() {
  return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-emerald-600 text-white flex items-center justify-center">
              <PackageCheck size={30} />
            </div>

            <div>
              <h1 className="text-5xl font-black text-slate-900">
                Product Details
              </h1>

              <p className="text-slate-500 text-lg mt-2">
                Inventory product overview
              </p>
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">
                MacBook Pro M3
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <Barcode className="text-slate-400" />

                  <div>
                    <p className="text-slate-500 text-sm">
                      SKU
                    </p>

                    <h3 className="font-bold">
                      MBP-M3-2026
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <DollarSign className="text-slate-400" />

                  <div>
                    <p className="text-slate-500 text-sm">
                      Price
                    </p>

                    <h3 className="font-bold">
                      $2,500
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Boxes className="text-slate-400" />

                  <div>
                    <p className="text-slate-500 text-sm">
                      Stock
                    </p>

                    <h3 className="font-bold">
                      15 Units
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>

              <div className="bg-slate-50 rounded-3xl p-8">

                <h3 className="text-2xl font-bold mb-5">
                  Product Description
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Apple MacBook Pro M3 with high performance chip,
                  ultra-fast SSD storage and premium display system.
                </p>

                <div className="mt-8">

                  <div className="inline-flex bg-emerald-100 text-emerald-700 px-5 py-3 rounded-full font-semibold">
                    In Stock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}