// shared/types/rbac.ts

// Company‑specific roles (for dashboard, inventory, sales, employees, crm)
export type CompanyRole = 'admin' | 'manager' | 'employee' | 'viewer';

// Owner (platform) roles
export type OwnerRole = 'super_admin' | 'support' | 'billing';

// All possible roles union
export type Role = CompanyRole | OwnerRole;

// Permission keys – you can extend this list as needed
export type Permission =
  // Dashboard & Analytics
  | 'view_dashboard'
  | 'view_analytics'
  | 'export_reports'
  // Inventory
  | 'view_inventory'
  | 'manage_inventory'
  // Sales / Orders
  | 'view_orders'
  | 'manage_orders'
  | 'create_invoice'
  // Employees / HR
  | 'view_employees'
  | 'manage_employees'
  // CRM (customers, leads, deals)
  | 'view_customers'
  | 'manage_customers'
  | 'view_leads'
  | 'manage_leads'
  | 'view_deals'
  | 'manage_deals'
  // Settings & RBAC
  | 'manage_company_settings'
  | 'manage_roles_permissions'
  // Owner portal only
  | 'view_all_companies'
  | 'manage_subscriptions'
  | 'view_platform_analytics';

// Permission map for each role (company scope)
export const companyRolePermissions: Record<CompanyRole, Permission[]> = {
  admin: [
    'view_dashboard',
    'view_analytics',
    'export_reports',
    'view_inventory',
    'manage_inventory',
    'view_orders',
    'manage_orders',
    'create_invoice',
    'view_employees',
    'manage_employees',
    'view_customers',
    'manage_customers',
    'view_leads',
    'manage_leads',
    'view_deals',
    'manage_deals',
    'manage_company_settings',
    'manage_roles_permissions',
  ],
  manager: [
    'view_dashboard',
    'view_analytics',
    'export_reports',
    'view_inventory',
    'manage_inventory',
    'view_orders',
    'manage_orders',
    'create_invoice',
    'view_employees',
    'view_customers',
    'manage_customers',
    'view_leads',
    'manage_leads',
    'view_deals',
    'manage_deals',
  ],
  employee: [
    'view_dashboard',
    'view_inventory',
    'view_orders',
    'view_customers',
    'view_leads',
  ],
  viewer: [
    'view_dashboard',
  ],
};

// Owner permissions
export const ownerPermissions: Record<OwnerRole, Permission[]> = {
  super_admin: [
    'view_all_companies',
    'manage_subscriptions',
    'view_platform_analytics',
    'view_analytics',
    'export_reports',
  ],
  support: [
    'view_all_companies',
    'view_platform_analytics',
  ],
  billing: [
    'view_all_companies',
    'manage_subscriptions',
  ],
};