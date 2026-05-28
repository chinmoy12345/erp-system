// shared/components/rbac/Can.tsx
'use client';
import { usePermissions } from '@/shared/hooks/usePermissions';
import { Permission } from '@/shared/types/rbac';

interface CanProps {
  permission: Permission | Permission[];
  mode?: 'any' | 'all';
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function Can({ permission, mode = 'any', children, fallback = null }: CanProps) {
  const { can, canAny, canAll } = usePermissions();
  const permissions = Array.isArray(permission) ? permission : [permission];
  let allowed = false;
  if (mode === 'any') allowed = canAny(permissions);
  else allowed = canAll(permissions);
  return allowed ? children : fallback;
}