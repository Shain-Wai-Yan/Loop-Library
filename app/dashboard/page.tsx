import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BookMarked, Clock, Leaf, Bike } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BookCard } from "@/components/book-card"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome back! Manage your books and rentals.">
        <Button className="bg-green-600 hover:bg-green-700">Browse Books</Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Currently Reading</CardTitle>
            <BookOpen className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Books in your possession</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Books Rented</CardTitle>
            <BookMarked className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Total books you've rented</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Soon</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Book due in 2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Environmental Impact</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 kg</div>
            <p className="text-xs text-muted-foreground">CO2 emissions saved</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Currently Reading</TabsTrigger>
          <TabsTrigger value="history">Rental History</TabsTrigger>
          <TabsTrigger value="shared">My Shared Books</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BookCard
              title="The Great Gatsby"
              author="F. Scott Fitzgerald"
              coverUrl="/placeholder.svg?height=240&width=160"
              dueDate="May 20, 2024"
              progress={65}
            />
            <BookCard
              title="To Kill a Mockingbird"
              author="Harper Lee"
              coverUrl="/placeholder.svg?height=240&width=160"
              dueDate="May 25, 2024"
              progress={30}
            />
          </div>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BookCard
              title="1984"
              author="George Orwell"
              coverUrl="/placeholder.svg?height=240&width=160"
              returnedDate="April 15, 2024"
              completed
            />
            <BookCard
              title="Pride and Prejudice"
              author="Jane Austen"
              coverUrl="/placeholder.svg?height=240&width=160"
              returnedDate="March 30, 2024"
              completed
            />
            <BookCard
              title="The Hobbit"
              author="J.R.R. Tolkien"
              coverUrl="/placeholder.svg?height=240&width=160"
              returnedDate="March 10, 2024"
              completed
            />
          </div>
        </TabsContent>
        <TabsContent value="shared" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BookCard
              title="Harry Potter and the Philosopher's Stone"
              author="J.K. Rowling"
              coverUrl="/placeholder.svg?height=240&width=160"
              rentedCount={3}
              earnings="450 MMK"
              shared
            />
          </div>
        </TabsContent>
      </Tabs>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upcoming Deliveries</CardTitle>
          <CardDescription>Track your book deliveries in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                <Bike className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">The Alchemist by Paulo Coelho</h4>
                <p className="text-sm text-gray-500">Estimated delivery: Today, 2:30 PM</p>
              </div>
              <Button variant="outline" size="sm">
                Track
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
