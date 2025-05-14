import {
  BookOpen,
  Bike,
  Users,
  Leaf,
  CreditCard,
  BookMarked,
  Recycle,
  Heart,
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/30">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Read Sustainably
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Loop Library combines technology, sustainability, and community to
              create a unique book rental experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="feature-card hover-card">
            <div className="feature-icon">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Extensive Book Catalog</h3>
            <p className="feature-description">
              Access thousands of books across various genres, from bestsellers
              to rare finds.
            </p>
          </div>
          <div className="feature-card hover-card">
            <div className="feature-icon">
              <Bike className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Eco-Friendly Delivery</h3>
            <p className="feature-description">
              Books delivered to your doorstep using bicycles and e-bikes,
              minimizing carbon footprint.
            </p>
          </div>
          <div className="feature-card hover-card">
            <div className="feature-icon">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Community Building</h3>
            <p className="feature-description">
              Connect with fellow readers, join book clubs, and participate in
              literary events.
            </p>
          </div>
          <div className="feature-card hover-card">
            <div className="feature-icon">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Environmental Impact</h3>
            <p className="feature-description">
              Track your contribution to reducing paper waste and saving trees
              with every rental.
            </p>
          </div>
          <div className="feature-card hover-card">
            <div className="feature-icon">
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Flexible Payment Options</h3>
            <p className="feature-description">
              Multiple payment methods including KPay, WaveMoney, and telecom
              bill transfers.
            </p>
          </div>
          <div className="feature-card hover-card">
            <div className="feature-icon">
              <BookMarked className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Rent Your Own Books</h3>
            <p className="feature-description">
              Share your collection with others and earn from books sitting idle
              on your shelf.
            </p>
          </div>
          <div className="feature-card hover-card md:col-span-2 lg:col-span-1">
            <div className="feature-icon">
              <Recycle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Circular Economy</h3>
            <p className="feature-description">
              Be part of a sustainable ecosystem that maximizes the use of
              existing resources.
            </p>
          </div>
          <div className="feature-card hover-card md:col-span-2 lg:col-span-1">
            <div className="feature-icon">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="feature-title">Social Impact</h3>
            <p className="feature-description">
              50% of ad revenue is donated to literacy and environmental
              sustainability initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
