"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BookOpen, Search, Users, Settings, CreditCard, Leaf } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/my-books",
      label: "My Books",
      icon: BookOpen,
    },
    {
      href: "/dashboard/browse",
      label: "Browse Books",
      icon: Search,
    },
    {
      href: "/dashboard/community",
      label: "Community",
      icon: Users,
    },
    {
      href: "/dashboard/impact",
      label: "Environmental Impact",
      icon: Leaf,
    },
    {
      href: "/dashboard/subscription",
      label: "Subscription",
      icon: CreditCard,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  return (
    <nav className="grid items-start gap-2 py-4">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === route.href && "bg-muted")}>
            <route.icon className="h-4 w-4" />
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
