import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-900 myanmar-pattern"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Affordable Plans
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the option that works best for your reading habits.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-all duration-300 hover-card">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Pay Per Rental</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Perfect for occasional readers
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>15% of book market price</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>7 days rental period</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Free bicycle delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Extension available (5% per week)</span>
              </div>
            </div>
            <div className="mt-auto pt-6 space-y-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">15%</span>
                <span className="text-gray-500 dark:text-gray-400">
                  of book price
                </span>
              </div>
              <Link href="/signup" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-lg relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scale-105">
            <div className="absolute top-0 right-0">
              <div className="bg-green-600 text-white px-4 py-1 text-xs font-medium rounded-bl-lg">
                POPULAR
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Standard Subscription</h3>
              <p className="text-gray-500 dark:text-gray-400">
                For regular readers
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Unlimited rentals (2 books at a time)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>14 days rental period</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Priority delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Access to community events</span>
              </div>
            </div>
            <div className="mt-auto pt-6 space-y-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">1,000</span>
                <span className="text-gray-500 dark:text-gray-400">
                  MMK/month
                </span>
              </div>
              <Link href="/signup" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20">
                  Subscribe Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-all duration-300 hover-card">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">VIP Subscription</h3>
              <p className="text-gray-500 dark:text-gray-400">
                For avid book lovers
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Unlimited rentals (5 books at a time)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>30 days rental period</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Express delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Access to rare books collection</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Exclusive VIP events</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>5% of fee donated to charity</span>
              </div>
            </div>
            <div className="mt-auto pt-6 space-y-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">10,000</span>
                <span className="text-gray-500 dark:text-gray-400">
                  MMK/month
                </span>
              </div>
              <Link href="/signup" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  Go Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover-card">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Rent Out Your Books
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
              Have books collecting dust on your shelf? Share them with others
              and earn money!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
                    1
                  </div>
                  <p className="text-sm">List your books on our platform</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
                    2
                  </div>
                  <p className="text-sm">We handle delivery and returns</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
                    3
                  </div>
                  <p className="text-sm">Earn 15% of the book's market price</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h4 className="font-medium mb-3">Your Earnings</h4>
                <p className="text-sm text-gray-500 mb-4">
                  For a book with market price of 10,000 MMK:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm p-2 bg-white/80 dark:bg-gray-800/50 rounded">
                    <span>Rental fee (15%)</span>
                    <span className="font-medium">1,500 MMK</span>
                  </div>
                  <div className="flex justify-between text-sm p-2 bg-white/80 dark:bg-gray-800/50 rounded">
                    <span>Loop Library commission (20%)</span>
                    <span className="font-medium">-300 MMK</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-medium p-2 bg-white/80 dark:bg-gray-800/50 rounded">
                    <span>Your earnings per rental</span>
                    <span className="text-green-600">1,200 MMK</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20">
                  Start Sharing Your Books
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
