import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PaymentMethods } from "@/components/payment-methods"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 bg-green-50 dark:bg-gray-900 myanmar-pattern">
        <div className="w-full max-w-md space-y-6">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
              <CardDescription>Enter your details below to create your Loop Library account</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="phone" className="mb-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="phone">Phone Number</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                <TabsContent value="phone" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Create a password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" placeholder="Confirm your password" type="password" required />
                  </div>
                </TabsContent>
                <TabsContent value="email" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name-email">Full Name</Label>
                    <Input id="name-email" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-email">Password</Label>
                    <Input id="password-email" placeholder="Create a password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password-email">Confirm Password</Label>
                    <Input id="confirm-password-email" placeholder="Confirm your password" type="password" required />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="location">City</Label>
                <select
                  id="location"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="taunggyi">Taunggyi</option>
                  <option value="mandalay" disabled>
                    Mandalay (Coming Soon)
                  </option>
                  <option value="yangon" disabled>
                    Yangon (Coming Soon)
                  </option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">Create Account</Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-green-600 hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>

          <PaymentMethods />
        </div>
      </main>
      <Footer />
    </div>
  )
}
