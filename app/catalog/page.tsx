import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Filter } from "lucide-react"
import { BookCatalogItem } from "@/components/book-catalog-item"

export default function CatalogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Book Catalog</h1>
            <p className="text-muted-foreground">Browse our extensive collection of books available for rental</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by title, author, or genre..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
            <div className="space-y-6 p-4 border rounded-lg">
              <div>
                <h3 className="font-medium mb-2">Genres</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="fiction" className="rounded text-green-600" />
                    <label htmlFor="fiction" className="text-sm">
                      Fiction
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="non-fiction" className="rounded text-green-600" />
                    <label htmlFor="non-fiction" className="text-sm">
                      Non-Fiction
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="mystery" className="rounded text-green-600" />
                    <label htmlFor="mystery" className="text-sm">
                      Mystery & Thriller
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="sci-fi" className="rounded text-green-600" />
                    <label htmlFor="sci-fi" className="text-sm">
                      Science Fiction
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="romance" className="rounded text-green-600" />
                    <label htmlFor="romance" className="text-sm">
                      Romance
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="biography" className="rounded text-green-600" />
                    <label htmlFor="biography" className="text-sm">
                      Biography
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Availability</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="available" className="rounded text-green-600" />
                    <label htmlFor="available" className="text-sm">
                      Available Now
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="coming-soon" className="rounded text-green-600" />
                    <label htmlFor="coming-soon" className="text-sm">
                      Coming Soon
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Rental Price</h3>
                <Slider defaultValue={[15]} max={100} step={1} className="my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">0%</span>
                  <span className="text-sm">15%</span>
                  <span className="text-sm">100%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Percentage of book market price</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Language</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="burmese" className="rounded text-green-600" />
                    <label htmlFor="burmese" className="text-sm">
                      Burmese
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="english" className="rounded text-green-600" />
                    <label htmlFor="english" className="text-sm">
                      English
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BookCatalogItem
                  title="To Kill a Mockingbird"
                  author="Harper Lee"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,500 MMK"
                  rentalPrice="225 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="1984"
                  author="George Orwell"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,800 MMK"
                  rentalPrice="270 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="The Great Gatsby"
                  author="F. Scott Fitzgerald"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,600 MMK"
                  rentalPrice="240 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="Pride and Prejudice"
                  author="Jane Austen"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,400 MMK"
                  rentalPrice="210 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="The Hobbit"
                  author="J.R.R. Tolkien"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="2,000 MMK"
                  rentalPrice="300 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="Harry Potter and the Philosopher's Stone"
                  author="J.K. Rowling"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="2,200 MMK"
                  rentalPrice="330 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="The Alchemist"
                  author="Paulo Coelho"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,700 MMK"
                  rentalPrice="255 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="The Catcher in the Rye"
                  author="J.D. Salinger"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,500 MMK"
                  rentalPrice="225 MMK"
                  availability="Available"
                />
                <BookCatalogItem
                  title="Lord of the Flies"
                  author="William Golding"
                  coverUrl="/placeholder.svg?height=240&width=160"
                  price="1,600 MMK"
                  rentalPrice="240 MMK"
                  availability="Available"
                />
              </div>

              <div className="flex justify-center">
                <Button variant="outline">Load More Books</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
