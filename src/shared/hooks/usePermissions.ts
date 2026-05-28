// shared/hooks/usePermissions.ts
import { useAuth } from '@/shared/providers/AuthProvider';
import { Permission, CompanyRole, OwnerRole } from '@/shared/types/rbac';
import { hasPermission, hasAnyPermission, hasAllPermissions } from '@/shared/lib/permissions';

export function usePermissions() {
  const { user } = useAuth(); // assumes AuthProvider provides `user` with `role`

  const can = (permission: Permission): boolean => {
    if (!user?.role) return false;
    return hasPermission(user.role, permission);
  };

  const canAny = (permissions: Permission[]): boolean => {
    if (!user?.role) return false;
    return hasAnyPermission(user.role, permissions);
  };

  const canAll = (permissions: Permission[]): boolean => {
    if (!user?.role) return false;
    return hasAllPermissions(user.role, permissions);
  };

  const role = user?.role as CompanyRole | OwnerRole | undefined;

  return { can, canAny, canAll, role };
}