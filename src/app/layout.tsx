import type { Metadata } from 'next';
import '@/styles/globals.css';
import { QueryProvider } from '@/providers/QueryProvider';

export const metadata: Metadata = { title: 'ERP Dashboard', description: 'Enterprise ERP System' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}