import { create } from 'zustand';

interface DashboardState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));