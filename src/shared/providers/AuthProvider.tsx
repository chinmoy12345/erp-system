// shared/providers/AuthProvider.tsx (partial)
import { createContext, useContext, useEffect, useState } from 'react';
import { Role } from '@/shared/types/rbac';

interface User {
  id: string;
  email: string;
  name: string;
  role: Role; // e.g., 'admin', 'manager', 'super_admin'
  companyId?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as any);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage/sessionStorage
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    const data = await res.json();
    // Assume backend returns user with role
    setUser(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('access_token', data.access_token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  };

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);