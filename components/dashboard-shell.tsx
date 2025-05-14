import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { Recycle } from "lucide-react"
import Link from "next/link"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Loop Library</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/profile" className="text-sm font-medium">
              Profile
            </Link>
          </nav>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px]">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden py-6">
          <div className="flex flex-1 flex-col gap-4">{children}</div>
        </main>
      </div>
    </div>
  )
}
