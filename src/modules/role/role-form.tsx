"use client"

import { useState } from "react"

import { PERMISSIONS } from "./role.constants"

export default function RoleForm() {
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
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      
      <h2 className="text-3xl font-bold mb-8">
        Create Role
      </h2>

      <div className="space-y-6">
        
        <div>
          <label className="block mb-2 font-semibold">
            Role Name
          </label>

          <input
            type="text"
            placeholder="Enter role name"
            className="w-full border border-slate-300 rounded-2xl px-5 py-4"
          />
        </div>

        <div>
          <label className="block mb-4 font-semibold">
            Select Permissions
          </label>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {PERMISSIONS.map((permission) => (
              <label
                key={permission}
                className="border border-slate-200 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-slate-50"
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

                <span>{permission}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl">
          Save Role
        </button>
      </div>
    </div>
  )
}