import Link from "next/link";
import { Search, Filter, ShoppingCart, Phone } from "lucide-react";

// Sample parts data - in real app this comes from database
const sampleParts = [
  {
    id: "1",
    name: "Mann Oil Filter",
    partNumber: "HU718/5x",
    brand: "Mercedes",
    category: "Engine",
    priceUSD: 12.99,
    stockQuantity: 25,
    image: "https://via.placeholder.com/300x200/1e3a5f/ffffff?text=Oil+Filter"
  },
  {
    id: "2",
    name: "OEM Oil Filter",
    partNumber: "A0001802609",
    brand: "Mercedes",
    category: "Engine",
    priceUSD: 18.50,
    stockQuantity: 18,
    image: "https://via.placeholder.com/300x200/1e3a5f/ffffff?text=OEM+Filter"
  },
  {
    id: "3",
    name: "Brembo Front Brake Pads",
    partNumber: "BP1108",
    brand: "Mercedes",
    category: "Brakes",
    priceUSD: 65.99,
    stockQuantity: 15,
    image: "https://via.placeholder.com/300x200/1e3a5f/ffffff?text=Brake+Pads"
  },
  {
    id: "4",
    name: "OEM Oil Filter",
    partNumber: "11427566327",
    brand: "BMW",
    category: "Engine",
    priceUSD: 12.99,
    stockQuantity: 30,
    image: "https://via.placeholder.com/300x200/0066b1/ffffff?text=BMW+Filter"
  },
  {
    id: "5",
    name: "OEM Front Brake Pads",
    partNumber: "346850829",
    brand: "BMW",
    category: "Brakes",
    priceUSD: 89.99,
    stockQuantity: 14,
    image: "https://via.placeholder.com/300x200/0066b1/ffffff?text=BMW+Brakes"
  },
  {
    id: "6",
    name: "OEM Oil Filter",
    partNumber: "06J115403Q",
    brand: "Audi",
    category: "Engine",
    priceUSD: 12.99,
    stockQuantity: 22,
    image: "https://via.placeholder.com/300x200/ff0000/ffffff?text=Audi+Filter"
  }
];

const exchangeRate = 18; // 1 USD = 18 ZWL

export default function PartsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as homepage */}
      <header className="bg-[#1e3a5f] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-[#f4a261] text-[#1e3a5f] font-bold text-xl px-3 py-1 rounded">
                LEE
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold">AUTO SPARE</div>
              </div>
            </Link>

            <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-lg">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#f4a261] text-[#1e3a5f] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h2>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Brand</h3>
                <div className="space-y-2">
                  {["Mercedes", "BMW", "Audi", "Volkswagen"].map((brand) => (
                    <label key={brand} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {["Engine", "Brakes", "Suspension", "Electrical", "Body", "Accessories"].map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-3">Price Range (USD)</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Search and Sort */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search parts..."
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-gray-600 mb-4">Showing {sampleParts.length} parts</p>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleParts.map((part) => (
                <div key={part.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="relative">
                    <img
                      src={part.image}
                      alt={part.name}
                      className="w-full h-48 object-cover"
                    />
                    {part.stockQuantity < 5 && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Low Stock
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      {part.brand} • {part.category}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{part.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">Part #: {part.partNumber}</p>
                    
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-[#1e3a5f]">
                        ${part.priceUSD.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        (~${(part.priceUSD * exchangeRate).toFixed(0)} ZWL)
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/parts/${part.id}`}
                        className="flex-1 bg-[#1e3a5f] hover:bg-[#152a45] text-white text-center py-2 rounded-lg transition"
                      >
                        View Details
                      </Link>
                      <a
                        href={`https://wa.me/263772341264?text=Hi, I'm interested in ${part.name} (Part #${part.partNumber})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

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