import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 bg-green-50 dark:bg-gray-900 myanmar-pattern">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Log in to your account</CardTitle>
            <CardDescription>Enter your credentials to access your Loop Library account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="phone" className="mb-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="phone">Phone Number</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
              </TabsList>
              <TabsContent value="phone" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" placeholder="Enter your password" type="password" required />
                </div>
              </TabsContent>
              <TabsContent value="email" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password-email">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password-email" placeholder="Enter your password" type="password" required />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
              <label htmlFor="remember" className="text-sm text-gray-500 dark:text-gray-400">
                Remember me for 30 days
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-green-600 hover:bg-green-700">Log In</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
