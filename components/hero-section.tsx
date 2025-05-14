import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Recycle, Truck, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900 eco-pattern">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-5">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-600 dark:border-green-800/30 dark:bg-green-800/20 dark:text-green-400">
                <Leaf className="mr-1 h-3.5 w-3.5" />
                <span>Eco-friendly Book Rental</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                A Sustainable Way to{" "}
                <span className="text-green-600">Read and Share</span> Books
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Loop Library redefines book rental services by promoting
                environmental sustainability, enhancing accessibility to
                literature, and fostering a community of shared resources.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-6 md:flex-row md:items-center">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1.5 dark:bg-green-800/30">
                  <Recycle className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Eco-friendly
                </span>
              </div>
              <div className="hidden md:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1.5 dark:bg-green-800/30">
                  <BookOpen className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Thousands of books
                </span>
              </div>
              <div className="hidden md:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1.5 dark:bg-green-800/30">
                  <Truck className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Bicycle delivery
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 p-4">
                  <div className="book-cover h-[180px] w-[120px] rounded-md bg-white shadow-lg transform rotate-[-6deg] dark:bg-gray-800">
                    <div className="h-full w-full rounded-md bg-gradient-to-br from-green-200 to-green-300 p-2 flex items-end">
                      <div className="w-full h-1/2 bg-white rounded dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div className="book-cover h-[180px] w-[120px] rounded-md bg-white shadow-lg transform rotate-[6deg] dark:bg-gray-800">
                    <div className="h-full w-full rounded-md bg-gradient-to-br from-blue-200 to-blue-300 p-2 flex items-end">
                      <div className="w-full h-1/2 bg-white rounded dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div className="book-cover h-[180px] w-[120px] rounded-md bg-white shadow-lg transform rotate-[3deg] dark:bg-gray-800">
                    <div className="h-full w-full rounded-md bg-gradient-to-br from-purple-200 to-purple-300 p-2 flex items-end">
                      <div className="w-full h-1/2 bg-white rounded dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <div className="book-cover h-[180px] w-[120px] rounded-md bg-white shadow-lg transform rotate-[-3deg] dark:bg-gray-800">
                    <div className="h-full w-full rounded-md bg-gradient-to-br from-yellow-200 to-yellow-300 p-2 flex items-end">
                      <div className="w-full h-1/2 bg-white rounded dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-green-600 font-medium">
                  Now in Taunggyi
                </p>
                <p className="text-xs text-gray-500">
                  Coming soon to Mandalay & Yangon
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 relative overflow-hidden h-16">
          <div className="delivery-animation absolute flex items-center">
            <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-md">
              <div className="rounded-full bg-green-100 p-1 dark:bg-green-800/30">
                <Truck className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-xs font-medium">
                Eco-friendly delivery in progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
