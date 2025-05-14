import { Heart, BookOpen, Leaf, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Philanthropy() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              Our Philanthropy
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Making a Difference Together</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              50% of our ad revenue is donated to literacy and environmental sustainability initiatives.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-16 w-16 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold mt-2">Our Commitment</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 dark:text-gray-400">
                At Loop Library, we believe in giving back to the community. That's why we donate 50% of our ad revenue
                to support literacy programs and environmental initiatives in Myanmar. Additionally, 5% of all VIP
                subscription fees are directed to charitable causes.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto" />
                  <p className="text-sm font-medium mt-2">50% of Ad Revenue</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto" />
                  <p className="text-sm font-medium mt-2">5% of VIP Subscriptions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Our Impact Areas</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-800/30">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Literacy Programs</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Supporting education and literacy initiatives across Myanmar, particularly in underserved
                      communities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-800/30">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Environmental Conservation</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Funding reforestation efforts and environmental education to offset the impact of paper
                      production.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-800/30">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Community Development</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Building libraries and reading spaces in communities that lack access to books and educational
                      resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/philanthropy">
                  <Button variant="outline" className="w-full">
                    Learn More About Our Initiatives
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Recent Philanthropy Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-green-600" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">School Library Project</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Established a new library at Taunggyi Primary School with over 500 books.
                  </p>
                  <div className="mt-2 text-xs text-green-600 font-medium">Completed: March 2024</div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-green-600" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">Tree Planting Initiative</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Planted 1,000 trees in partnership with local environmental organizations.
                  </p>
                  <div className="mt-2 text-xs text-green-600 font-medium">Completed: January 2024</div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-green-600" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">Reading Workshop</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Conducted reading workshops for 200 children in rural communities.
                  </p>
                  <div className="mt-2 text-xs text-green-600 font-medium">Completed: February 2024</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Join us on our journey to make life more meaningful for those in need. Every book you rent contributes
                to these initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
