// Mock Prisma client for static data
// Vercel doesn't support SQLite, so we use static data instead

export const prisma = {
  part: {
    findMany: async () => [],
    findUnique: async () => null,
  },
  order: {
    create: async () => ({}),
  },
};

// Static data for the app
export const parts = [
  { id: "1", name: "Mann Oil Filter", partNumber: "HU718/5x", brand: "Mercedes", category: "Engine", description: "High-quality oil filter for Mercedes C-Class and E-Class. Genuine Mann filter made in Germany.", priceUSD: 12.99, stockQuantity: 25, compatibleModels: ["C-Class W203", "E-Class W211", "CLK"], image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Oil+Filter" },
  { id: "2", name: "Bosch Brake Pads Front", partNumber: "BP0986", brand: "BMW", category: "Brakes", description: "Bosch brake pads for 3-Series and 5-Series. Low dust, quiet operation.", priceUSD: 45.00, stockQuantity: 18, compatibleModels: ["3-Series E90", "5-Series E60", "X3"], image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Brake+Pads" },
  { id: "3", name: "Bosch Air Filter", partNumber: "AF3456", brand: "Audi", category: "Engine", description: "Premium air filter for Audi A4 and A6. Improves engine performance.", priceUSD: 18.50, stockQuantity: 30, compatibleModels: ["A4 B8", "A6 C6", "Q5"], image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Air+Filter" },
  { id: "4", name: "Sachs Shock Absorber", partNumber: "SH1234", brand: "Volkswagen", category: "Suspension", description: "Sachs shock absorber for Golf and Passat. OEM quality.", priceUSD: 89.99, stockQuantity: 12, compatibleModels: ["Golf MK6", "Passat B7", "Jetta"], image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Shock+Absorber" },
  { id: "5", name: "Mann Fuel Filter", partNumber: "FK876", brand: "Mercedes", category: "Engine", description: "Fuel filter for diesel Mercedes models. Protects injection system.", priceUSD: 24.99, stockQuantity: 20, compatibleModels: ["E-Class W212", "ML-Class", "GLC"], image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Fuel+Filter" },
  { id: "6", name: "ATE Brake Discs", partNumber: "BD5678", brand: "BMW", category: "Brakes", description: "High-carbon brake discs for M Sport models. Superior heat dissipation.", priceUSD: 120.00, stockQuantity: 8, compatibleModels: ["M3", "M4", "M2"], image: "https://placehold.co/600x400/1e3a5f/ffffff?text=Brake+Discs" },
];

export const exchangeRate = 18;

export function getPartById(id: string) {
  return parts.find(p => p.id === id) || parts[0];
}

export function getPartsByBrand(brand: string) {
  return parts.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

export function getPartsByCategory(category: string) {
  return parts.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
