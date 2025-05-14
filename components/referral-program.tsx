import { Users, Award, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReferralProgram() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              Referral Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Invite Friends, Get Rewards</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Share the joy of sustainable reading with your friends and earn exclusive benefits.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-800/30">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Invite Friends</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Share your unique referral link with friends and family.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-800/30">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">They Join Loop Library</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      When they sign up using your link and make their first rental.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-800/30">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Both Get Rewarded</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      You get one month of free subscription, they get a welcome discount.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/signup">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Start Referring</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-800/30">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Monthly Referral Rankings</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Top 10 referrers each month get special rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-800/30">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Exclusive Badges</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Earn unique profile badges to showcase your contribution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-800/30">
                    <Gift className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">VIP Upgrades</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Top referrers receive a free month of VIP subscription
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Top Referrers This Month</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-600">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h4 className="font-bold mt-2">Kyaw Lin</h4>
                <p className="text-sm text-gray-500">32 referrals</p>
                <div className="mt-2 referral-badge px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs rounded-full">
                  Gold Referrer
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h4 className="font-bold mt-2">May Thu</h4>
                <p className="text-sm text-gray-500">28 referrals</p>
                <div className="mt-2 referral-badge px-3 py-1 bg-gradient-to-r from-gray-500 to-gray-400 text-white text-xs rounded-full">
                  Silver Referrer
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-800">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h4 className="font-bold mt-2">Aung Ko</h4>
                <p className="text-sm text-gray-500">21 referrals</p>
                <div className="mt-2 referral-badge px-3 py-1 bg-gradient-to-r from-amber-800 to-amber-700 text-white text-xs rounded-full">
                  Bronze Referrer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
