const { prisma } = require('../src/lib/db');

const parts = [
  // Mercedes Parts
  {
    name: "Mann Oil Filter",
    partNumber: "HU718/5x",
    brand: "Mercedes",
    category: "Engine",
    description: "High-quality oil filter for Mercedes C-Class and E-Class",
    priceUSD: 12.99,
    stockQuantity: 25,
    compatibleModels: JSON.stringify(["C-Class W203", "E-Class W211", "CLK"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Oil+Filter"])
  },
  {
    name: "OEM Oil Filter",
    partNumber: "A0001802609",
    brand: "Mercedes",
    category: "Engine",
    description: "Genuine Mercedes oil filter for A-Class, B-Class, CLA",
    priceUSD: 18.50,
    stockQuantity: 18,
    compatibleModels: JSON.stringify(["A-Class", "B-Class", "CLA"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/1e3a5f/ffffff?text=OEM+Filter"])
  },
  {
    name: "Mann Air Filter",
    partNumber: "C32130",
    brand: "Mercedes",
    category: "Engine",
    description: "Engine air filter for C-Class and CLK models",
    priceUSD: 24.99,
    stockQuantity: 20,
    compatibleModels: JSON.stringify(["C-Class W202", "C-Class W203", "CLK"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Air+Filter"])
  },
  {
    name: "Brembo Front Brake Pads",
    partNumber: "BP1108",
    brand: "Mercedes",
    category: "Brakes",
    description: "High-performance brake pads for C-Class and E-Class",
    priceUSD: 65.99,
    stockQuantity: 15,
    compatibleModels: JSON.stringify(["C-Class W204", "E-Class W212"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Brake+Pads"])
  },
  {
    name: "Front Control Arm",
    partNumber: "2113308207",
    brand: "Mercedes",
    category: "Suspension",
    description: "Upper front control arm for E-Class and CLS",
    priceUSD: 124.99,
    stockQuantity: 8,
    compatibleModels: JSON.stringify(["E-Class W211", "CLS W219"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/1e3a5f/ffffff?text=Control+Arm"])
  },
  // BMW Parts
  {
    name: "OEM Oil Filter",
    partNumber: "11427566327",
    brand: "BMW",
    category: "Engine",
    description: "Genuine BMW oil filter for 3-Series and 5-Series",
    priceUSD: 12.99,
    stockQuantity: 30,
    compatibleModels: JSON.stringify(["320i", "325i", "328i", "330i", "525i", "530i"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/0066b1/ffffff?text=BMW+Filter"])
  },
  {
    name: "NGK Spark Plugs (Set of 4)",
    partNumber: "12122158252",
    brand: "BMW",
    category: "Engine",
    description: "Iridium spark plugs for 3-Series, 5-Series, X5",
    priceUSD: 59.96,
    stockQuantity: 12,
    compatibleModels: JSON.stringify(["328i", "335i", "535i", "X5 35i"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/0066b1/ffffff?text=Spark+Plugs"])
  },
  {
    name: "OEM Front Brake Pads",
    partNumber: "346850829",
    brand: "BMW",
    category: "Brakes",
    description: "Front brake pads for 3-Series and 5-Series",
    priceUSD: 89.99,
    stockQuantity: 14,
    compatibleModels: JSON.stringify(["328i", "335i", "528i", "535i"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/0066b1/ffffff?text=BMW+Brakes"])
  },
  {
    name: "Front Control Arm",
    partNumber: "31126774414",
    brand: "BMW",
    category: "Suspension",
    description: "Front control arm for 3-Series and 5-Series",
    priceUSD: 98.99,
    stockQuantity: 10,
    compatibleModels: JSON.stringify(["325i", "330i", "525i", "530i"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/0066b1/ffffff?text=BMW+Arm"])
  },
  // Audi Parts
  {
    name: "OEM Oil Filter",
    partNumber: "06J115403Q",
    brand: "Audi",
    category: "Engine",
    description: "Genuine Audi oil filter for A4, A5, Q5 2.0T",
    priceUSD: 12.99,
    stockQuantity: 22,
    compatibleModels: JSON.stringify(["A4 2.0T", "A5 2.0T", "Q5 2.0T"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/ff0000/ffffff?text=Audi+Filter"])
  },
  {
    name: "OEM Air Filter",
    partNumber: "8K0133843B",
    brand: "Audi",
    category: "Engine",
    description: "Engine air filter for A4, A5, Q5",
    priceUSD: 28.99,
    stockQuantity: 16,
    compatibleModels: JSON.stringify(["A4 B8", "A5", "Q5"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/ff0000/ffffff?text=Audi+Air"])
  },
  {
    name: "OEM Front Brake Pads",
    partNumber: "8K0698151M",
    brand: "Audi",
    category: "Brakes",
    description: "Front brake pads for A4, A5, Q5 2.0T",
    priceUSD: 78.99,
    stockQuantity: 12,
    compatibleModels: JSON.stringify(["A4 B8", "A5", "Q5 2.0T"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/ff0000/ffffff?text=Audi+Brakes"])
  },
  // VW Parts
  {
    name: "OEM Oil Filter",
    partNumber: "06J115403C",
    brand: "Volkswagen",
    category: "Engine",
    description: "Genuine VW oil filter for Jetta, Passat 2.0T",
    priceUSD: 11.99,
    stockQuantity: 28,
    compatibleModels: JSON.stringify(["Jetta 2.0T", "Passat 2.0T"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/00a1e4/ffffff?text=VW+Filter"])
  },
  {
    name: "OEM Air Filter",
    partNumber: "1K0129620G",
    brand: "Volkswagen",
    category: "Engine",
    description: "Engine air filter for Jetta, Golf 2.5L",
    priceUSD: 18.99,
    stockQuantity: 20,
    compatibleModels: JSON.stringify(["Jetta 2.5L", "Golf 2.5L"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/00a1e4/ffffff?text=VW+Air"])
  },
  {
    name: "OEM Front Brake Pads",
    partNumber: "5K0698151B",
    brand: "Volkswagen",
    category: "Brakes",
    description: "Front brake pads for Jetta, Golf, Passat",
    priceUSD: 58.99,
    stockQuantity: 15,
    compatibleModels: JSON.stringify(["Jetta", "Golf", "Passat"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/00a1e4/ffffff?text=VW+Brakes"])
  },
  // Accessories
  {
    name: "Bosch Wiper Blades (Pair)",
    partNumber: "3397008537",
    brand: "Universal",
    category: "Accessories",
    description: "High-quality wiper blades, 22 inch",
    priceUSD: 24.99,
    stockQuantity: 35,
    compatibleModels: JSON.stringify(["Universal - check size"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/333333/ffffff?text=Wipers"])
  },
  {
    name: "Bosch AGM Battery",
    partNumber: "H7-AGM",
    brand: "Universal",
    category: "Electrical",
    description: "80Ah AGM battery for German cars",
    priceUSD: 245.99,
    stockQuantity: 6,
    compatibleModels: JSON.stringify(["Mercedes", "BMW", "Audi", "VW"]),
    images: JSON.stringify(["https://via.placeholder.com/400x300/333333/ffffff?text=Battery"])
  }
];

async function seed() {
  console.log('Seeding database...');
  
  // Clear existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.part.deleteMany();
  
  // Insert parts
  for (const part of parts) {
    await prisma.part.create({ data: part });
  }
  
  // Set initial exchange rate (1 USD = 18 ZWL - adjust as needed)
  await prisma.exchangeRate.create({
    data: {
      usdToZwl: 18.0
    }
  });
  
  // Create admin user
  await prisma.adminUser.create({
    data: {
      username: 'admin',
      password: '$2a$10$YourHashedPasswordHere' // Change this!
    }
  });
  
  console.log('Database seeded successfully!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });