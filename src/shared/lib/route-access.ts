// shared/lib/route-access.ts
import { Permission, Role } from '@/shared/types/rbac';

// Define route patterns and their required role/permission
interface RouteRule {
  path: RegExp;
  allowedRoles?: Role[];
  requiredPermission?: Permission;
}

const routeRules: RouteRule[] = [
  // Owner routes
  { path: /^\/owner/, allowedRoles: ['super_admin', 'support', 'billing'] },
  // Company admin routes
  { path: /^\/settings\/roles/, allowedRoles: ['admin'] },
  { path: /^\/employees\/add/, allowedRoles: ['admin', 'manager'] },
  { path: /^\/inventory\/manage/, allowedRoles: ['admin', 'manager'] },
  // Analytics requires permission
  { path: /^\/analytics/, requiredPermission: 'view_analytics' },
];

export function checkRouteAccess(
  pathname: string,
  userRole: Role | null | undefined,
  userPermissions: Permission[]
): boolean {
  for (const rule of routeRules) {
    if (rule.path.test(pathname)) {
      if (rule.allowedRoles) {
        if (!userRole || !rule.allowedRoles.includes(userRole)) return false;
      }
      if (rule.requiredPermission) {
        if (!userPermissions.includes(rule.requiredPermission)) return false;
      }
      return true;
    }
  }
  return true; // no rule matched -> allow
}