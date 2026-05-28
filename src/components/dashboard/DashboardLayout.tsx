import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex bg-slate-100">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 min-h-screen flex flex-col">
        
        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <main className="flex-1 p-8">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}