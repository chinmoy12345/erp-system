"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  UserPlus,
  Mail,
  Lock,
  Building2,
  ShieldCheck,
} from "lucide-react"

export default function AddUserPage() {
  return (
    <DashboardLayout>
      
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          
          <div className="flex items-center gap-4 mb-4">
            
            <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center">
              <UserPlus size={30} />
            </div>

            <div>
              <h1 className="text-5xl font-black text-slate-900">
                Add New User
              </h1>

              <p className="text-slate-500 mt-2 text-lg">
                Create and assign enterprise user access
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">
          
          <div className="grid md:grid-cols-2 gap-8">

            {/* FULL NAME */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Full Name
              </label>

              <div className="relative">
                
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative">
                
                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                
                <Lock
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* ROLE */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                User Role
              </label>

              <div className="relative">
                
                <ShieldCheck
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <select className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900">
                  
                  <option>SUPER_ADMIN</option>
                  <option>HR_MANAGER</option>
                  <option>SALES_MANAGER</option>
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

                <select className="w-full border border-slate-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-slate-900">
                  
                  <option>Management</option>
                  <option>Human Resources</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
              </div>
            </div>

            {/* STATUS */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Status
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900">
                
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-end gap-4 mt-10">
            
            <button className="border border-slate-200 px-7 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition">
              Cancel
            </button>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition">
              Create User
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}