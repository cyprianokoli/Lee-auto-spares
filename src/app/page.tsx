import Link from "next/link";
import { Search, Phone, ShoppingCart, Truck, Shield, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-[#f4a261] text-[#1e3a5f] font-bold text-xl px-3 py-1 rounded">
                LEE
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold">AUTO SPARE</div>
                <div className="text-xs text-gray-300">Genuine German Parts</div>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by part number or car model..."
                  className="w-full px-4 py-2 pl-10 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/263772341264"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-lg">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-[#f4a261] text-[#1e3a5f] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-[#152a45] border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-6 py-2 text-sm overflow-x-auto">
              <Link href="/parts?brand=Mercedes" className="hover:text-[#f4a261] whitespace-nowrap">Mercedes</Link>
              <Link href="/parts?brand=BMW" className="hover:text-[#f4a261] whitespace-nowrap">BMW</Link>
              <Link href="/parts?brand=Audi" className="hover:text-[#f4a261] whitespace-nowrap">Audi</Link>
              <Link href="/parts?brand=Volkswagen" className="hover:text-[#f4a261] whitespace-nowrap">VW</Link>
              <Link href="/parts?category=Engine" className="hover:text-[#f4a261] whitespace-nowrap">Engine</Link>
              <Link href="/parts?category=Brakes" className="hover:text-[#f4a261] whitespace-nowrap">Brakes</Link>
              <Link href="/parts?category=Suspension" className="hover:text-[#f4a261] whitespace-nowrap">Suspension</Link>
              <Link href="/find-parts" className="hover:text-[#f4a261] whitespace-nowrap font-medium text-[#f4a261]">Find My Parts</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Genuine German Car Parts in Zimbabwe
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Premium OEM parts for Mercedes-Benz, BMW, Audi, and Volkswagen. 
              Available in Harare with nationwide delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/parts"
                className="bg-[#f4a261] hover:bg-[#e49151] text-[#1e3a5f] font-bold px-8 py-3 rounded-lg transition"
              >
                Browse Parts
              </Link>
              <Link
                href="/find-parts"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-lg transition"
              >
                Find Parts for My Car
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1e3a5f] text-white p-3 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Genuine Parts</h3>
                <p className="text-gray-600 text-sm">All parts are OEM genuine from Germany and Dubai</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#1e3a5f] text-white p-3 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Same-day in Harare, 48 hours nationwide</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#1e3a5f] text-white p-3 rounded-lg">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">WhatsApp Support</h3>
                <p className="text-gray-600 text-sm">Order and get support via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Mercedes", color: "#00adef", count: 45 },
              { name: "BMW", color: "#0066b1", count: 38 },
              { name: "Audi", color: "#ff0000", count: 32 },
              { name: "Volkswagen", color: "#00a1e4", count: 28 },
            ].map((brand) => (
              <Link
                key={brand.name}
                href={`/parts?brand=${brand.name}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center group"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.name[0]}
                </div>
                <h3 className="font-bold text-lg text-gray-900">{brand.name}</h3>
                <p className="text-gray-500 text-sm">{brand.count} parts</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">How to Order</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Find Your Part", desc: "Search by part number or car model" },
              { step: 2, title: "Add to Cart", desc: "Select quantity and add to cart" },
              { step: 3, title: "Checkout", desc: "Choose payment method" },
              { step: 4, title: "Delivery", desc: "Receive your parts fast" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#f4a261] text-[#1e3a5f] font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <p className="text-gray-300 mb-8">We accept multiple payment options for your convenience</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["EcoCash USD", "EcoCash ZWL", "Bank Transfer", "Cash on Delivery", "Visa/Mastercard"].map((method) => (
              <span key={method} className="bg-white/10 px-4 py-2 rounded-lg text-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Need Help Finding a Part?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the right part for your car. 
            Message us on WhatsApp for quick assistance.
          </p>
          <a
            href="https://wa.me/263772341264"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition"
          >
            <Phone className="h-5 w-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f35] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#f4a261] text-[#1e3a5f] font-bold text-xl px-3 py-1 rounded">
                  LEE
                </div>
                <span className="text-lg font-bold">AUTO SPARE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Genuine German car parts in Zimbabwe. Mercedes, BMW, Audi, VW.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/parts" className="hover:text-white">All Parts</Link></li>
                <li><Link href="/find-parts" className="hover:text-white">Find My Parts</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>WhatsApp: 0772 341 264</li>
                <li>Phone: 0774 723 980</li>
                <li>Harare, Zimbabwe</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Mon - Fri: 8am - 5pm</li>
                <li>Saturday: 8am - 1pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2025 Lee Auto Spare. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/263772341264"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition z-50"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}