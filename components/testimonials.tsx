import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Community Says
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from readers who have embraced sustainable reading with Loop
              Library.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden hover-card shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16 border-2 border-green-200">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Avatar"
                  />
                  <AvatarFallback>KL</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Kyaw Lin</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Taunggyi
                  </p>
                  <div className="flex justify-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Loop Library has transformed how I read. I save money and
                    feel good about reducing my environmental footprint. The
                    bicycle delivery is so convenient!"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden hover-card shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16 border-2 border-green-200">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Avatar"
                  />
                  <AvatarFallback>MT</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">May Thu</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Taunggyi
                  </p>
                  <div className="flex justify-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I love being part of a community that cares about
                    sustainability. I've also made some great friends through
                    the reading clubs and events."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden hover-card shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16 border-2 border-green-200">
                  <AvatarImage
                    src="/placeholder.svg?height=64&width=64"
                    alt="Avatar"
                  />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Aung Ko</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Taunggyi
                  </p>
                  <div className="flex justify-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I've discovered so many new authors through Loop Library.
                    The VIP subscription is worth every kyat! I also earn money
                    by renting out my own books."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Join our growing community of environmentally conscious readers in
            Taunggyi. Soon expanding to Mandalay and Yangon to bring sustainable
            reading to all of Myanmar.
          </p>
        </div>
      </div>
    </section>
  );
}
