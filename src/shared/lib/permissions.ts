// shared/lib/permissions.ts
import {
  Permission,
  CompanyRole,
  OwnerRole,
  companyRolePermissions,
  ownerPermissions,
} from '@/shared/types/rbac';

export function hasPermission(
  role: CompanyRole | OwnerRole | null | undefined,
  permission: Permission
): boolean {
  if (!role) return false;
  // Check company roles
  if (role in companyRolePermissions) {
    return companyRolePermissions[role as CompanyRole].includes(permission);
  }
  // Check owner roles
  if (role in ownerPermissions) {
    return ownerPermissions[role as OwnerRole].includes(permission);
  }
  return false;
}

export function hasAnyPermission(
  role: CompanyRole | OwnerRole | null | undefined,
  permissions: Permission[]
): boolean {
  return permissions.some(p => hasPermission(role, p));
}

export function hasAllPermissions(
  role: CompanyRole | OwnerRole | null | undefined,
  permissions: Permission[]
): boolean {
  return permissions.every(p => hasPermission(role, p));
}

// Utility to get all permissions for a role
export function getPermissionsForRole(role: CompanyRole | OwnerRole): Permission[] {
  if (role in companyRolePermissions) {
    return companyRolePermissions[role as CompanyRole];
  }
  if (role in ownerPermissions) {
    return ownerPermissions[role as OwnerRole];
  }
  return [];
}