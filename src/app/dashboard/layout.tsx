import { Sidebar } from '@/shared/components/layout/Sidebar';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-auto">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}