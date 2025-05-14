import { Download, Search, CreditCard, Truck, Bike, Leaf } from "lucide-react";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-16 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-900 myanmar-pattern"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple Steps to Start Reading Sustainably
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our process is designed to be seamless and user-friendly, making
              sustainable reading accessible to everyone.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-4 text-center relative hover-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/30">
              <Download className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Download the App</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get our app from iOS or Android stores and create your account.
            </p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
              1
            </div>
            <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-green-200 dark:bg-green-800/50 transform -translate-y-1/2"></div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center relative hover-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/30">
              <Search className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Browse Books</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Explore our extensive catalog and find books you want to read.
            </p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
              2
            </div>
            <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-green-200 dark:bg-green-800/50 transform -translate-y-1/2"></div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center relative hover-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/30">
              <CreditCard className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Subscribe or Rent</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Choose a subscription plan or pay per rental at affordable rates.
            </p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
              3
            </div>
            <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-green-200 dark:bg-green-800/50 transform -translate-y-1/2"></div>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center hover-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800/30">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Receive & Return</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get books delivered by bicycle and return when you're done
              reading.
            </p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-medium">
              4
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">Payment Options</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                We offer multiple convenient payment methods to make renting
                books as easy as possible.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center payment-icon">
                  <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">KPay</span>
                  </div>
                  <span className="text-xs text-gray-500">KBZ Pay</span>
                </div>
                <div className="flex flex-col items-center payment-icon">
                  <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">Wave</span>
                  </div>
                  <span className="text-xs text-gray-500">Wave Money</span>
                </div>
                <div className="flex flex-col items-center payment-icon">
                  <div className="w-12 h-12 bg-[#e11b22] rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">A+</span>
                  </div>
                  <span className="text-xs text-gray-500">AYA Pay</span>
                </div>
                <div className="flex flex-col items-center payment-icon">
                  <div className="w-12 h-12 bg-[#f7941d] rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">MPT</span>
                  </div>
                  <span className="text-xs text-gray-500">Telecom Bill</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">Delivery Promise</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-800/50 rounded-lg shadow-sm">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Within 1 Hour</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Fast delivery to your doorstep
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-800/50 rounded-lg shadow-sm">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                    <Bike className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Eco-Friendly Transport</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Using bicycles and e-bikes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-800/50 rounded-lg shadow-sm">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Biodegradable Packaging</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Wrapped in recycled materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
