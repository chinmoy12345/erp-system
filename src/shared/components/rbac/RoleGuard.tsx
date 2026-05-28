// shared/components/rbac/RoleGuard.tsx
'use client';
import { usePermissions } from '@/shared/hooks/usePermissions';
import { Role } from '@/shared/types/rbac';

interface RoleGuardProps {
  roles: Role | Role[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RoleGuard({ roles, children, fallback = null }: RoleGuardProps) {
  const { role } = usePermissions();
  const allowedRoles = Array.isArray(roles) ? roles : [roles];
  const hasRole = role ? allowedRoles.includes(role) : false;
  return hasRole ? children : fallback;
}