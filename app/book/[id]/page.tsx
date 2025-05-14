import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Bike, Clock, Calendar, User, Heart } from "lucide-react"

export default function BookDetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <div className="space-y-4">
            <div className="aspect-[2/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=450&width=300"
                alt="To Kill a Mockingbird"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              <Button className="w-full bg-green-600 hover:bg-green-700">Rent Now</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>Fiction</Badge>
                <Badge variant="outline">Classic</Badge>
                <Badge className="bg-green-600">Available</Badge>
              </div>
              <h1 className="text-3xl font-bold">To Kill a Mockingbird</h1>
              <p className="text-xl text-muted-foreground">Harper Lee</p>

              <div className="flex items-center gap-1 mt-2">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm ml-1">4.8 (120 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">Market Price</p>
                <p className="text-xl font-bold">1,500 MMK</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">Rental (7 days)</p>
                <p className="text-xl font-bold text-green-600">225 MMK</p>
              </div>
              <div className="p-4 border rounded-lg flex items-center gap-2">
                <Bike className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Delivery</p>
                  <p className="font-medium">Free</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Time</p>
                  <p className="font-medium">Within 1 hour</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Book Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4 border rounded-lg mt-4">
                <p className="text-muted-foreground">
                  Set in the small Southern town of Maycomb, Alabama, during the Depression, "To Kill a Mockingbird"
                  follows three years in the life of 8-year-old Scout Finch, her brother, Jem, and their father,
                  Atticus--three years punctuated by the arrest and eventual trial of a young Black man accused of
                  raping a white woman. Though her story explores big themes, Harper Lee chooses to tell it through the
                  eyes of a child. The result is a tough and tender novel of race, class, justice, and the pain of
                  growing up.
                </p>
              </TabsContent>
              <TabsContent value="details" className="p-4 border rounded-lg mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Publisher</p>
                    <p className="font-medium">HarperCollins</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Publication Date</p>
                    <p className="font-medium">July 11, 1960</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Language</p>
                    <p className="font-medium">English</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pages</p>
                    <p className="font-medium">281</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ISBN</p>
                    <p className="font-medium">978-0061120084</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Condition</p>
                    <p className="font-medium">Good</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                        <User className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Kyaw Lin</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">April 15, 2024</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This book is a masterpiece. The condition was excellent and delivery was prompt. Highly recommend
                      renting from Loop Library!
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                        <User className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">May Thu</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <Star className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">March 22, 2024</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Great classic novel. The book was in good condition with just a few dog-eared pages. Delivery was
                      fast and convenient.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Load More Reviews
                </Button>
              </TabsContent>
            </Tabs>

            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
              <h3 className="font-bold mb-2">Environmental Impact</h3>
              <p className="text-sm text-muted-foreground">
                By renting this book instead of buying a new copy, you're helping save approximately:
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="font-bold text-green-600">0.6 kg</p>
                  <p className="text-xs text-muted-foreground">of wood</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-green-600">2,500 L</p>
                  <p className="text-xs text-muted-foreground">of water</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-green-600">0.7 kWh</p>
                  <p className="text-xs text-muted-foreground">of electricity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
