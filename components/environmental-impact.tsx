import { TreePine, Droplets, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function EnvironmentalImpact() {
  return (
    <section id="impact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              Environmental Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Making a Difference with Every Book
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              By choosing Loop Library, you're contributing to significant
              environmental conservation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-3">
          <Card className="overflow-hidden border-green-200 hover-card">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 flex items-center justify-center">
              <TreePine className="h-12 w-12 text-green-600" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold impact-counter">2.6 Tons</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
                Of wood saved for every ton of paper not produced through book
                sharing.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-green-200 hover-card">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 flex items-center justify-center">
              <Droplets className="h-12 w-12 text-green-600" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold impact-counter">
                24,000+ Liters
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
                Of water conserved for every ton of paper saved through our
                rental system.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-green-200 hover-card">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 flex items-center justify-center">
              <Zap className="h-12 w-12 text-green-600" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold impact-counter">5,000+ kWh</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
                Of electricity saved for every ton of paper not produced for new
                books.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold">Our Impact in Myanmar</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  In 2018, approximately 11,130 books were published in Myanmar.
                  By sharing just one book with five people instead of each
                  buying their own copy, we can save significant resources.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <BarChart3 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Impact Tracker</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 hover-card">
                <h4 className="font-bold text-lg mb-4">Books Shared</h4>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-green-600 impact-counter">
                    1,250
                  </span>
                  <span className="text-sm text-gray-500 mb-1">books</span>
                </div>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  45% of our 2024 goal
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 hover-card">
                <h4 className="font-bold text-lg mb-4">Trees Saved</h4>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-green-600 impact-counter">
                    325
                  </span>
                  <span className="text-sm text-gray-500 mb-1">trees</span>
                </div>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  65% of our 2024 goal
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 hover-card">
                <h4 className="font-bold text-lg mb-4">CO₂ Reduced</h4>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-green-600 impact-counter">
                    4.2
                  </span>
                  <span className="text-sm text-gray-500 mb-1">tons</span>
                </div>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  35% of our 2024 goal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
