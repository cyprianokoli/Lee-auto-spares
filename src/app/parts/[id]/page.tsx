import Link from "next/link";
import { ShoppingCart, Phone, Truck, Shield, ChevronLeft } from "lucide-react";

// Exchange rate
const exchangeRate = 18;

export default function PartDetailPage() {
  // Sample part - in real app, fetch from database
  const part = {
    id: "1",
    name: "Mann Oil Filter",
    partNumber: "HU718/5x",
    brand: "Mercedes",
    category: "Engine",
    description: "High-quality oil filter for Mercedes C-Class and E-Class. Genuine Mann filter made in Germany.",
    priceUSD: 12.99,
    stockQuantity: 25,
    image: "https://via.placeholder.com/600x400/1e3a5f/ffffff?text=Oil+Filter",
    compatibleModels: ["C-Class W203", "E-Class W211", "CLK"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-[#f4a261] text-[#1e3a5f] font-bold text-xl px-3 py-1 rounded">
                LEE
              </div>
              <span className="text-lg font-bold hidden sm:block">AUTO SPARE</span>
            </Link>
            <Link href="/parts" className="flex items-center text-sm hover:text-[#f4a261]">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Parts
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div>
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                {part.brand} • {part.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{part.name}</h1>
              <p className="text-lg text-gray-600 mb-4">Part Number: {part.partNumber}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1e3a5f]">
                  ${part.priceUSD.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 ml-2">
                  USD
                </span>
                <div className="text-gray-500 mt-1">
                  (~${(part.priceUSD * exchangeRate).toFixed(0)} ZWL)
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {part.stockQuantity > 10 ? (
                  <span className="text-green-600 font-medium">✓ In Stock ({part.stockQuantity} available)</span>
                ) : part.stockQuantity > 0 ? (
                  <span className="text-orange-600 font-medium">⚠ Low Stock ({part.stockQuantity} left)</span>
                ) : (
                  <span className="text-red-600 font-medium">✗ Out of Stock</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{part.description}</p>

              {/* Compatible Models */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Compatible Models:</h3>
                <div className="flex flex-wrap gap-2">
                  {part.compatibleModels.map((model) => (
                    <span key={model} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#1e3a5f] hover:bg-[#152a45] text-white font-bold py-3 rounded-lg transition flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <a
                  href={`https://wa.me/263772341264?text=Hi, I'm interested in ${part.name} (Part #${part.partNumber}) for $${part.priceUSD}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Order via WhatsApp
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-1 text-[#1e3a5f]" />
                  <span className="text-xs text-gray-600">Genuine Parts</span>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-1 text-[#1e3a5f]" />
                  <span className="text-xs text-gray-600">Fast Delivery</span>
                </div>
                <div className="text-center">
                  <Phone className="h-6 w-6 mx-auto mb-1 text-[#1e3a5f]" />
                  <span className="text-xs text-gray-600">WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Float */}
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