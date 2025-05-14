"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Recycle } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:text-green-600"
          >
            <Recycle className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Loop Library</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#impact"
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
          >
            Environmental Impact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
          >
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup" className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
          </Link>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="#features"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#impact"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Environmental Impact
                </Link>
                <Link
                  href="#pricing"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#testimonials"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
