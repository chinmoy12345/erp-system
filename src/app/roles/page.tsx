/*import RolePage from "@/modules/role/role.page"

export default function Page() {
  return <RolePage />
}*/



"use client"

import { useState } from "react"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  ShieldCheck,
  Plus,
  Search,
  Pencil,
  Trash2,
  Lock,
  Users,
  CheckCircle2,
} from "lucide-react"

const permissions = [
  "employee.create",
  "employee.edit",
  "employee.delete",
  "inventory.view",
  "inventory.edit",
  "sales.create",
  "sales.approve",
  "invoice.generate",
  "settings.manage",
]

const roles = [
  {
    id: 1,
    name: "SUPER_ADMIN",
    users: 2,
    color: "bg-purple-500",
  },

  {
    id: 2,
    name: "HR_MANAGER",
    users: 12,
    color: "bg-cyan-500",
  },

  {
    id: 3,
    name: "SALES_MANAGER",
    users: 8,
    color: "bg-emerald-500",
  },

  {
    id: 4,
    name: "EMPLOYEE",
    users: 48,
    color: "bg-orange-500",
  },
]

export default function RolePage() {
  const [selectedPermissions, setSelectedPermissions] =
    useState<string[]>([])

  const handlePermission = (
    permission: string
  ) => {
    if (
      selectedPermissions.includes(permission)
    ) {
      setSelectedPermissions(
        selectedPermissions.filter(
          (p) => p !== permission
        )
      )
    } else {
      setSelectedPermissions([
        ...selectedPermissions,
        permission,
      ])
    }
  }

  return (
    <DashboardLayout>
      
      <div className="space-y-8">

        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h1 className="text-4xl font-black text-slate-900">
                  Roles & Permissions
                </h1>

                <p className="text-slate-500 mt-1">
                  Enterprise access management system
                </p>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            
            <div className="relative">
              
              <Search
                size={20}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search roles..."
                className="pl-12 pr-5 py-4 rounded-2xl border border-slate-200 bg-white w-72 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">
              
              <Plus size={20} />

              Add Role
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-[32px] p-7 shadow-sm border border-slate-100">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Total Roles
                </p>

                <h2 className="text-5xl font-black mt-3">
                  12
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-purple-100 flex items-center justify-center">
                <ShieldCheck className="text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 shadow-sm border border-slate-100">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Permissions
                </p>

                <h2 className="text-5xl font-black mt-3">
                  38
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-cyan-100 flex items-center justify-center">
                <Lock className="text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 shadow-sm border border-slate-100">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Active Users
                </p>

                <h2 className="text-5xl font-black mt-3">
                  324
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center">
                <Users className="text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 shadow-sm border border-slate-100">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Security Score
                </p>

                <h2 className="text-5xl font-black mt-3">
                  98%
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center">
                <CheckCircle2 className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-white rounded-[36px] shadow-sm border border-slate-100 overflow-hidden">

            <div className="p-8 border-b border-slate-100">
              
              <h2 className="text-3xl font-bold text-slate-900">
                System Roles
              </h2>

              <p className="text-slate-500 mt-2">
                Manage company-wide access roles
              </p>
            </div>

            <div className="overflow-x-auto">
              
              <table className="w-full">
                
                <thead className="bg-slate-50">
                  <tr>
                    
                    <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                      Role
                    </th>

                    <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                      Users
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
                  {roles.map((role) => (
                    <tr
                      key={role.id}
                      className="border-t border-slate-100 hover:bg-slate-50 transition"
                    >
                      
                      <td className="px-8 py-6">
                        
                        <div className="flex items-center gap-4">
                          
                          <div
                            className={`w-12 h-12 rounded-2xl ${role.color}`}
                          />

                          <div>
                            <h3 className="font-bold text-slate-900">
                              {role.name}
                            </h3>

                            <p className="text-slate-500 text-sm">
                              Enterprise Role
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-8 py-6 font-semibold text-slate-700">
                        {role.users}
                      </td>

                      <td className="px-8 py-6">
                        
                        <div className="inline-flex bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                          Active
                        </div>
                      </td>

                      <td className="px-8 py-6">
                        
                        <div className="flex gap-3">
                          
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

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[36px] shadow-sm border border-slate-100 p-8">

            <div className="mb-8">
              
              <h2 className="text-3xl font-bold text-slate-900">
                Create Role
              </h2>

              <p className="text-slate-500 mt-2">
                Configure permissions and access
              </p>
            </div>

            <div className="space-y-6">
              
              <div>
                <label className="block mb-3 font-semibold text-slate-700">
                  Role Name
                </label>

                <input
                  type="text"
                  placeholder="Enter role name"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block mb-4 font-semibold text-slate-700">
                  Permissions
                </label>

                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                  
                  {permissions.map((permission) => (
                    <label
                      key={permission}
                      className={`flex items-center gap-4 border rounded-2xl p-4 cursor-pointer transition ${
                        selectedPermissions.includes(
                          permission
                        )
                          ? "border-slate-900 bg-slate-100"
                          : "border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      
                      <input
                        type="checkbox"
                        checked={selectedPermissions.includes(
                          permission
                        )}
                        onChange={() =>
                          handlePermission(permission)
                        }
                      />

                      <span className="font-medium text-slate-700">
                        {permission}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold text-lg transition">
                Save Role
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}