// src/modules/auth/types/index.ts
export interface User {
  id: string;
  email: string;
  name?: string;
  role?: 'admin' | 'manager' | 'employee' | 'viewer';
  companyId?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  company?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}