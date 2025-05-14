import Link from "next/link";
import { Recycle, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Recycle className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">Loop Library</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Redefining book rental services by promoting environmental
              sustainability, enhancing accessibility to literature, and
              fostering a community of shared resources.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="#features"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#impact"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Environmental Impact
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-green-600 dark:hover:text-green-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Taunggyi, Myanmar</li>
              <li>info@looplibrary.com</li>
              <li>+95 9 123 456 789</li>
            </ul>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium text-green-600">Coming Soon:</span>{" "}
                Mandalay and Yangon
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 Loop Library. All rights reserved.</p>
          <p className="mt-2">
            <span className="text-green-600">50%</span> of ad revenue is donated
            to literacy and environmental sustainability initiatives.
          </p>
        </div>
      </div>
    </footer>
  );
}
