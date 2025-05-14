import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

interface BookCatalogItemProps {
  title: string
  author: string
  coverUrl: string
  price: string
  rentalPrice: string
  availability: "Available" | "Coming Soon" | "Rented Out"
}

export function BookCatalogItem({ title, author, coverUrl, price, rentalPrice, availability }: BookCatalogItemProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img src={coverUrl || "/placeholder.svg"} alt={title} className="w-full h-[240px] object-cover" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white/90"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <div className="absolute bottom-2 right-2">
          <Badge
            className={
              availability === "Available"
                ? "bg-green-600"
                : availability === "Coming Soon"
                  ? "bg-amber-500"
                  : "bg-red-500"
            }
          >
            {availability}
          </Badge>
        </div>
      </div>
      <CardContent className="flex-1 p-4">
        <div className="space-y-1">
          <h3 className="font-bold line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
          <div className="flex justify-between items-center pt-2">
            <div>
              <p className="text-xs text-muted-foreground">Market Price</p>
              <p className="font-medium">{price}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Rental (7 days)</p>
              <p className="font-medium text-green-600">{rentalPrice}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            Details
          </Button>
          <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
            Rent Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
