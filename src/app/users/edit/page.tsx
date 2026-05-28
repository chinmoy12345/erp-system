"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  Pencil,
  Mail,
  ShieldCheck,
  Building2,
} from "lucide-react"

export default function EditUserPage() {
  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center">
              <Pencil size={28} />
            </div>

            <div>
              <h1 className="text-5xl font-black text-slate-900">
                Edit User
              </h1>

              <p className="text-slate-500 mt-2 text-lg">
                Update enterprise user information
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">

          <div className="grid md:grid-cols-2 gap-8">

            {/* NAME */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="John Doe"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="email"
                  defaultValue="john@company.com"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* ROLE */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Role
              </label>

              <div className="relative">

                <ShieldCheck
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <select className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500">

                  <option>SUPER_ADMIN</option>
                  <option selected>
                    HR_MANAGER
                  </option>

                  <option>EMPLOYEE</option>
                </select>
              </div>
            </div>

            {/* DEPARTMENT */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Department
              </label>

              <div className="relative">

                <Building2
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <select className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500">

                  <option selected>
                    Human Resources
                  </option>

                  <option>Sales</option>
                  <option>Support</option>
                </select>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 mt-10">

            <button className="border border-slate-200 px-7 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition">
              Cancel
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition">
              Update User
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}