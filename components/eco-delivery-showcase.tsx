"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Bike,
  Truck,
  MapPin,
  Leaf,
  Clock,
  Calendar,
  BarChart3,
  Zap,
} from "lucide-react";

export function EcoDeliveryShowcase() {
  const [activeTab, setActiveTab] = useState("visualization");

  return (
    <section className="py-16 px-4 overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Eco-Friendly Delivery Network
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our innovative delivery system uses zero-emission vehicles to bring
            books right to your doorstep while minimizing our carbon footprint.
          </p>
        </div>

        <Tabs
          defaultValue="visualization"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
              <TabsTrigger
                value="visualization"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/30"
              >
                <Bike className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Delivery</span> Routes
              </TabsTrigger>
              <TabsTrigger
                value="vehicles"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/30"
              >
                <Zap className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Delivery</span> Vehicles
              </TabsTrigger>
              <TabsTrigger
                value="zones"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/30"
              >
                <MapPin className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Delivery</span> Zones
              </TabsTrigger>
              <TabsTrigger
                value="impact"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/30"
              >
                <Leaf className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Environmental</span> Impact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="visualization" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-3d bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden bg-green-50 dark:bg-gray-700 border border-green-100 dark:border-gray-600">
                    {/* City map visualization */}
                    <div className="absolute inset-0 p-4">
                      <svg viewBox="0 0 800 600" className="w-full h-full">
                        {/* City roads */}
                        <path
                          d="M100,100 L700,100 L700,500 L100,500 Z"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                        />
                        <path
                          d="M100,300 L700,300"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                        />
                        <path
                          d="M400,100 L400,500"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                        />

                        {/* Delivery hubs */}
                        <circle cx="400" cy="300" r="20" fill="#16a34a" />
                        <text
                          x="400"
                          y="300"
                          textAnchor="middle"
                          fill="white"
                          fontSize="10"
                          dy=".3em"
                        >
                          HUB
                        </text>

                        <circle cx="200" cy="200" r="12" fill="#22c55e" />
                        <circle cx="600" cy="200" r="12" fill="#22c55e" />
                        <circle cx="200" cy="400" r="12" fill="#22c55e" />
                        <circle cx="600" cy="400" r="12" fill="#22c55e" />

                        {/* Animated delivery paths */}
                        <path
                          d="M400,300 Q300,250 200,200"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="animate-dash"
                        />
                        <path
                          d="M400,300 Q500,250 600,200"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="animate-dash animation-delay-2000"
                        />
                        <path
                          d="M400,300 Q300,350 200,400"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="animate-dash animation-delay-4000"
                        />
                        <path
                          d="M400,300 Q500,350 600,400"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="animate-dash animation-delay-6000"
                        />

                        {/* Delivery vehicles */}
                        <circle
                          cx="250"
                          cy="220"
                          r="6"
                          fill="#ef4444"
                          className="animate-delivery-1"
                        />
                        <circle
                          cx="550"
                          cy="220"
                          r="6"
                          fill="#ef4444"
                          className="animate-delivery-2"
                        />
                        <circle
                          cx="250"
                          cy="380"
                          r="6"
                          fill="#ef4444"
                          className="animate-delivery-3"
                        />
                        <circle
                          cx="550"
                          cy="380"
                          r="6"
                          fill="#ef4444"
                          className="animate-delivery-4"
                        />

                        {/* Buildings */}
                        <rect
                          x="150"
                          y="120"
                          width="30"
                          height="30"
                          fill="#94a3b8"
                        />
                        <rect
                          x="220"
                          y="150"
                          width="40"
                          height="20"
                          fill="#94a3b8"
                        />
                        <rect
                          x="170"
                          y="220"
                          width="20"
                          height="40"
                          fill="#94a3b8"
                        />

                        <rect
                          x="550"
                          y="120"
                          width="30"
                          height="30"
                          fill="#94a3b8"
                        />
                        <rect
                          x="620"
                          y="150"
                          width="40"
                          height="20"
                          fill="#94a3b8"
                        />
                        <rect
                          x="570"
                          y="220"
                          width="20"
                          height="40"
                          fill="#94a3b8"
                        />

                        <rect
                          x="150"
                          y="420"
                          width="30"
                          height="30"
                          fill="#94a3b8"
                        />
                        <rect
                          x="220"
                          y="450"
                          width="40"
                          height="20"
                          fill="#94a3b8"
                        />
                        <rect
                          x="170"
                          y="380"
                          width="20"
                          height="40"
                          fill="#94a3b8"
                        />

                        <rect
                          x="550"
                          y="420"
                          width="30"
                          height="30"
                          fill="#94a3b8"
                        />
                        <rect
                          x="620"
                          y="450"
                          width="40"
                          height="20"
                          fill="#94a3b8"
                        />
                        <rect
                          x="570"
                          y="380"
                          width="20"
                          height="40"
                          fill="#94a3b8"
                        />
                      </svg>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md text-xs">
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                        <span>Main Hub</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                        <span>Sub Hub</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span>Active Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Delivery Network</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our strategic hub-and-spoke delivery system ensures
                    efficient, eco-friendly book deliveries across the city.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Average Delivery Time
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          35 mins
                        </span>
                      </div>
                      <Progress
                        value={58}
                        className="h-2 bg-gray-100"
                        indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Coverage Area
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          85%
                        </span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-gray-100"
                        indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          On-time Delivery
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          97%
                        </span>
                      </div>
                      <Progress
                        value={97}
                        className="h-2 bg-gray-100"
                        indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        12
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Delivery Hubs
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        48
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Delivery Staff
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        350+
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Daily Deliveries
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">0</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Carbon Emissions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="vehicles" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-3d bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                <Card className="border-green-100 dark:border-green-900/30 hover-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        Standard Bicycle
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Eco-friendly
                      </Badge>
                    </div>
                    <CardDescription>
                      For small, quick deliveries
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-md mb-4 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Standard bicycle for deliveries"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Range:
                        </span>
                        <span className="font-medium">15-20 km</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Capacity:
                        </span>
                        <span className="font-medium">Up to 5 books</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Speed:
                        </span>
                        <span className="font-medium">15-20 km/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          CO2 Saved:
                        </span>
                        <span className="font-medium text-green-600">100%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100 dark:border-green-900/30 hover-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">E-Bike</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Low emission
                      </Badge>
                    </div>
                    <CardDescription>
                      For medium distance deliveries
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-md mb-4 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="E-bike for deliveries"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Range:
                        </span>
                        <span className="font-medium">40-60 km</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Capacity:
                        </span>
                        <span className="font-medium">Up to 15 books</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Speed:
                        </span>
                        <span className="font-medium">25-30 km/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          CO2 Saved:
                        </span>
                        <span className="font-medium text-green-600">95%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100 dark:border-green-900/30 hover-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Cargo E-Bike</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        High capacity
                      </Badge>
                    </div>
                    <CardDescription>For bulk deliveries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-md mb-4 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Cargo e-bike for deliveries"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Range:
                        </span>
                        <span className="font-medium">30-50 km</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Capacity:
                        </span>
                        <span className="font-medium">Up to 50 books</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Speed:
                        </span>
                        <span className="font-medium">20-25 km/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          CO2 Saved:
                        </span>
                        <span className="font-medium text-green-600">90%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="p-6 pt-0">
                <h3 className="text-xl font-bold mb-4">Vehicle Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4">Vehicle Type</th>
                        <th className="text-left py-3 px-4">Best For</th>
                        <th className="text-left py-3 px-4">Maintenance</th>
                        <th className="text-left py-3 px-4">
                          Weather Adaptability
                        </th>
                        <th className="text-left py-3 px-4">Cost Efficiency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4">Standard Bicycle</td>
                        <td className="py-3 px-4">
                          Urban centers, short distances
                        </td>
                        <td className="py-3 px-4">Very low</td>
                        <td className="py-3 px-4">Limited in rain/snow</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="mr-2">Excellent</span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Leaf
                                  key={i}
                                  className="h-4 w-4 text-green-500"
                                />
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4">E-Bike</td>
                        <td className="py-3 px-4">
                          Mixed terrain, medium distances
                        </td>
                        <td className="py-3 px-4">Low</td>
                        <td className="py-3 px-4">Good in most conditions</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="mr-2">Very Good</span>
                            <div className="flex">
                              {[1, 2, 3, 4].map((i) => (
                                <Leaf
                                  key={i}
                                  className="h-4 w-4 text-green-500"
                                />
                              ))}
                              <Leaf className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Cargo E-Bike</td>
                        <td className="py-3 px-4">
                          Bulk deliveries, hilly areas
                        </td>
                        <td className="py-3 px-4">Medium</td>
                        <td className="py-3 px-4">Good in most conditions</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="mr-2">Good</span>
                            <div className="flex">
                              {[1, 2, 3].map((i) => (
                                <Leaf
                                  key={i}
                                  className="h-4 w-4 text-green-500"
                                />
                              ))}
                              {[1, 2].map((i) => (
                                <Leaf
                                  key={i}
                                  className="h-4 w-4 text-gray-300 dark:text-gray-600"
                                />
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="zones" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-3d bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Delivery Zones</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We've divided the city into strategic delivery zones to
                    ensure efficient and timely book deliveries to all our
                    customers.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-200">
                          Zone A
                        </Badge>
                        <span>City Center</span>
                      </h4>
                      <div className="pl-10 space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Delivery Time:{" "}
                            <span className="font-medium">15-30 minutes</span>
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Service Hours:{" "}
                            <span className="font-medium">
                              7 AM - 10 PM daily
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Bike className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Vehicle:{" "}
                            <span className="font-medium">
                              Standard Bicycles
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Badge className="mr-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          Zone B
                        </Badge>
                        <span>Inner Suburbs</span>
                      </h4>
                      <div className="pl-10 space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Delivery Time:{" "}
                            <span className="font-medium">30-45 minutes</span>
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Service Hours:{" "}
                            <span className="font-medium">
                              8 AM - 9 PM daily
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Bike className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Vehicle:{" "}
                            <span className="font-medium">E-Bikes</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Badge className="mr-2 bg-teal-100 text-teal-800 hover:bg-teal-200">
                          Zone C
                        </Badge>
                        <span>Outer Suburbs</span>
                      </h4>
                      <div className="pl-10 space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Delivery Time:{" "}
                            <span className="font-medium">45-60 minutes</span>
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Service Hours:{" "}
                            <span className="font-medium">
                              9 AM - 8 PM daily
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Bike className="h-4 w-4 mr-2 text-gray-500" />
                          <span>
                            Vehicle:{" "}
                            <span className="font-medium">Cargo E-Bikes</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium mb-3">Expansion Timeline</h4>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-900/50"></div>

                      <div className="relative pl-10 pb-6">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        </div>
                        <h5 className="font-medium">
                          Phase 1: Current Coverage
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Downtown and inner suburbs fully covered
                        </p>
                      </div>

                      <div className="relative pl-10 pb-6">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        </div>
                        <h5 className="font-medium">Phase 2: Q3 2025</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Expansion to all outer suburbs
                        </p>
                      </div>

                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        </div>
                        <h5 className="font-medium">Phase 3: Q1 2026</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Expansion to neighboring towns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 h-full">
                    <h4 className="font-medium mb-4">Coverage Map</h4>
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-white dark:bg-gray-700 shadow-inner mb-4">
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                          {/* City outline */}
                          <path
                            d="M200,50 L300,150 L350,300 L200,350 L50,300 L100,150 Z"
                            fill="#f3f4f6"
                            stroke="#d1d5db"
                            strokeWidth="2"
                          />

                          {/* Zone A - City Center */}
                          <path
                            d="M200,120 L240,160 L260,240 L200,260 L140,240 L160,160 Z"
                            fill="#dcfce7"
                            stroke="#22c55e"
                            strokeWidth="2"
                          />
                          <text
                            x="200"
                            y="190"
                            textAnchor="middle"
                            fill="#166534"
                            fontSize="14"
                          >
                            Zone A
                          </text>

                          {/* Zone B - Inner Suburbs */}
                          <path
                            d="M200,90 L260,150 L290,260 L200,300 L110,260 L140,150 Z"
                            fill="#d1fae5"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />
                          <text
                            x="240"
                            y="120"
                            textAnchor="middle"
                            fill="#065f46"
                            fontSize="12"
                          >
                            Zone B
                          </text>

                          {/* Zone C - Outer Suburbs */}
                          <path
                            d="M200,50 L300,150 L350,300 L200,350 L50,300 L100,150 Z"
                            fill="none"
                            stroke="#14b8a6"
                            strokeWidth="2"
                            strokeDasharray="10,10"
                          />
                          <text
                            x="320"
                            y="200"
                            textAnchor="middle"
                            fill="#0f766e"
                            fontSize="12"
                          >
                            Zone C
                          </text>

                          {/* Main Hub */}
                          <circle cx="200" cy="200" r="10" fill="#16a34a" />
                          <text
                            x="200"
                            y="230"
                            textAnchor="middle"
                            fill="#166534"
                            fontSize="10"
                          >
                            Main Hub
                          </text>

                          {/* Sub Hubs */}
                          <circle cx="180" cy="150" r="6" fill="#22c55e" />
                          <circle cx="240" cy="180" r="6" fill="#22c55e" />
                          <circle cx="200" cy="250" r="6" fill="#22c55e" />
                          <circle cx="150" cy="200" r="6" fill="#22c55e" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Zone A Coverage
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            100%
                          </span>
                        </div>
                        <Progress
                          value={100}
                          className="h-2 bg-gray-100"
                          indicatorClassName="bg-green-600"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Zone B Coverage
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            85%
                          </span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-gray-100"
                          indicatorClassName="bg-emerald-600"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Zone C Coverage
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            40%
                          </span>
                        </div>
                        <Progress
                          value={40}
                          className="h-2 bg-gray-100"
                          indicatorClassName="bg-teal-600"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium mb-3">
                        Special Delivery Options
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge className="mt-0.5 mr-2 bg-amber-100 text-amber-800">
                            Express
                          </Badge>
                          <div>
                            <h5 className="text-sm font-medium">
                              Priority Delivery
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Get your books within 1 hour in Zone A & B
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Badge className="mt-0.5 mr-2 bg-purple-100 text-purple-800">
                            Scheduled
                          </Badge>
                          <div>
                            <h5 className="text-sm font-medium">
                              Time-slot Delivery
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Choose your preferred 2-hour delivery window
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Badge className="mt-0.5 mr-2 bg-blue-100 text-blue-800">
                            Bulk
                          </Badge>
                          <div>
                            <h5 className="text-sm font-medium">
                              Multi-book Delivery
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Special handling for orders of 10+ books
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="impact" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-3d bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Our eco-friendly delivery system significantly reduces carbon
                  emissions compared to traditional delivery methods.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Reduction in CO2 Emissions
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                    <Truck className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      12,500
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Liters of Fuel Saved Yearly
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                    <Leaf className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      28
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Tons of CO2 Prevented Yearly
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                    <Zap className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      85%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Renewable Energy for E-bikes
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Emissions Comparison</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Traditional Delivery Van
                          </span>
                          <span className="text-sm font-medium text-red-600">
                            245g CO2/km
                          </span>
                        </div>
                        <Progress
                          value={100}
                          className="h-3 bg-gray-100"
                          indicatorClassName="bg-red-500"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Electric Car
                          </span>
                          <span className="text-sm font-medium text-amber-600">
                            45g CO2/km
                          </span>
                        </div>
                        <Progress
                          value={18}
                          className="h-3 bg-gray-100"
                          indicatorClassName="bg-amber-500"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">E-Bike</span>
                          <span className="text-sm font-medium text-green-600">
                            5g CO2/km
                          </span>
                        </div>
                        <Progress
                          value={2}
                          className="h-3 bg-gray-100"
                          indicatorClassName="bg-green-500"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Standard Bicycle
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            0g CO2/km
                          </span>
                        </div>
                        <Progress
                          value={0}
                          className="h-3 bg-gray-100"
                          indicatorClassName="bg-green-500"
                        />
                      </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                      <p>
                        * CO2 emissions for e-bikes include manufacturing and
                        electricity generation. We use renewable energy sources
                        to charge our e-bike fleet, further reducing the actual
                        carbon footprint.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">
                      Sustainability Initiatives
                    </h4>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                          <span className="text-green-600 font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-medium">
                            Solar-Powered Charging Stations
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            All our e-bikes are charged using solar power at our
                            hub locations.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                          <span className="text-green-600 font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-medium">
                            Eco-friendly Packaging
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            All delivery bags and packaging materials are made
                            from recycled materials.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                          <span className="text-green-600 font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-medium">
                            Battery Recycling Program
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            We ensure proper recycling of all e-bike batteries
                            at the end of their lifecycle.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                          <span className="text-green-600 font-bold">4</span>
                        </div>
                        <div>
                          <h5 className="font-medium">Carbon Offset Program</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            We invest in reforestation projects to offset any
                            remaining carbon footprint.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default EcoDeliveryShowcase;
