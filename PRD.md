# Lee Auto Spare - Product Requirements Document (PRD)

## 1. Executive Summary

**Product Name:** Lee Auto Spare  
**Tagline:** "Genuine German Car Parts in Zimbabwe"  
**Target Market:** Zimbabwe (Harare + Nationwide)  
**Business Model:** B2C E-commerce for automotive spare parts  
**Primary Brands:** Mercedes-Benz, BMW, Audi, Volkswagen

---

## 2. Business Objectives

### 2.1 Primary Goals
- Establish online presence for Lee Auto Spare business
- Enable customers to browse and inquire about parts via WhatsApp
- Reduce physical store dependency for part inquiries
- Expand customer reach beyond Harare to nationwide market

### 2.2 Success Metrics
- Website traffic: 1,000+ monthly visitors by Month 3
- WhatsApp inquiries: 50+ per month
- Conversion rate: 10% of inquiries to orders
- Customer satisfaction: 4.5+ star rating

---

## 3. Target Audience

### 3.1 Primary Personas

**Persona 1: Urban Car Owner (Tinashe, 35)**
- Owns Mercedes C-Class or BMW 3-Series
- Lives in Harare suburbs (Borrowdale, Mount Pleasant)
- Values convenience and genuine parts
- Comfortable with WhatsApp for business
- Income: $800-1,500/month

**Persona 2: Fleet Manager (Mr. Moyo, 45)**
- Manages company fleet (10+ German vehicles)
- Needs bulk orders and reliable supply
- Price-sensitive but prioritizes quality
- Prefers direct communication for negotiations
- Income: Business owner/Manager level

**Persona 3: Out-of-Town Mechanic (John, 28)**
- Runs auto repair shop in Bulawayo/Mutare
- Sources hard-to-find German parts
- Tech-savvy, uses mobile for business
- Needs delivery to remote areas
- Income: $400-800/month

### 3.2 User Needs
- Find specific parts by part number or vehicle model
- Verify part compatibility before purchase
- Compare prices (USD vs ZWL)
- Quick communication for stock availability
- Reliable delivery options

---

## 4. Functional Requirements

### 4.1 Core Features

#### 4.1.1 Product Catalog
**FR-001: Part Listings**
- Display parts with images, names, part numbers
- Show price in USD and ZWL (using exchange rate)
- Indicate stock availability (In Stock/Low Stock/Out of Stock)
- Filter by: Brand, Category, Price Range
- Search by: Part number, Part name, Car model

**FR-002: Part Detail Page**
- High-quality product images (placeholder for now)
- Full product description
- Technical specifications
- Compatible vehicle models list
- Related/recommended parts
- WhatsApp order button

#### 4.1.2 Brand Navigation
**FR-003: Brand Sections**
- Mercedes-Benz parts collection
- BMW parts collection
- Audi parts collection
- Volkswagen parts collection
- Brand-specific landing pages

#### 4.1.3 WhatsApp Integration
**FR-004: WhatsApp Click-to-Chat**
- Floating WhatsApp button (all pages)
- Pre-populated messages with part details
- Multiple contact numbers (sales, support)
- WhatsApp Business API ready (future)

#### 4.1.4 Shopping Cart (Phase 1: Inquiry)
**FR-005: Cart Functionality**
- Add/remove items
- Show item count
- Display subtotal
- Export cart to WhatsApp inquiry

### 4.2 Content Pages

#### 4.2.1 Homepage
**FR-006: Hero Section**
- Headline: "Genuine German Car Parts in Zimbabwe"
- Subheadline: "Premium OEM parts for Mercedes, BMW, Audi, VW"
- CTA: "Browse Parts" + "Find My Parts"
- Search bar (prominent)

**FR-007: Trust Signals**
- "Genuine Parts" badge
- "Fast Delivery" badge
- "WhatsApp Support" badge
- Payment methods display

**FR-008: Brand Showcase**
- 4 brand cards (Mercedes, BMW, Audi, VW)
- Part count per brand
- Click to browse by brand

**FR-009: How to Order**
- 4-step visual guide
- Find Part → Add to Cart → Checkout → Delivery

#### 4.2.2 About Us Page
**FR-010: Company Information**
- Lee Auto Spare story
- Years in business
- Specialization in German cars
- Location (Harare)
- Mission/vision

#### 4.2.3 Contact Page
**FR-011: Contact Information**
- WhatsApp numbers (2 lines)
- Physical address
- Business hours
- Email (optional)
- Embedded map (future)

### 4.3 Technical Features

#### 4.3.1 Responsive Design
**FR-012: Mobile-First**
- Optimized for mobile devices (70%+ traffic)
- Touch-friendly buttons
- Collapsible navigation
- Mobile-optimized images

#### 4.3.2 Performance
**FR-013: Page Speed**
- Target: < 3 seconds load time
- Optimized images
- Lazy loading
- Minimal JavaScript

#### 4.3.3 SEO
**FR-014: Search Optimization**
- Meta titles/descriptions
- Structured data (Schema.org)
- Sitemap.xml
- Robots.txt
- Image alt tags

---

## 5. Non-Functional Requirements

### 5.1 Design Requirements

#### 5.1.1 Brand Identity
**Colors:**
- Primary: Navy Blue `#1e3a5f` (trust, professionalism)
- Secondary: Orange `#f4a261` (action, warmth)
- Background: Light Gray `#f9fafb`
- Text: Dark Gray `#1f2937`

**Typography:**
- Headings: Bold, clean sans-serif
- Body: Readable, 16px minimum
- Accent: Orange for CTAs

**Logo:**
- Text-based: "LEE" in orange box + "AUTO SPARE"
- Tagline: "Genuine German Parts"

#### 5.1.2 UI Components
- Consistent button styles
- Card-based product display
- Icon set: Lucide React
- WhatsApp green accents

### 5.2 Technical Stack

**Frontend:**
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React

**Backend:**
- Static export (Phase 1)
- API routes for future dynamic features

**Database:**
- Phase 1: Static JSON data
- Phase 2: Prisma + PostgreSQL (Supabase)

**Hosting:**
- Platform: Vercel
- CDN: Vercel Edge Network
- Domain: Custom domain (leeautospare.co.zw)

### 5.3 Security
- HTTPS only
- No sensitive data collection (Phase 1)
- Environment variables for secrets

---

## 6. Product Data Structure

### 6.1 Part Schema
```typescript
interface Part {
  id: string;                    // Unique identifier
  name: string;                  // Display name
  partNumber: string;            // OEM part number
  brand: "Mercedes" | "BMW" | "Audi" | "Volkswagen";
  category: string;              // Engine, Brakes, Suspension, etc.
  description: string;           // Full description
  priceUSD: number;              // Base price
  stockQuantity: number;         // Available stock
  images: string[];              // Image URLs
  compatibleModels: string[];    // Car models
  specifications?: {             // Technical specs
    [key: string]: string;
  };
  isActive: boolean;             // Show/hide
}
```

### 6.2 Category Structure
- **Engine:** Oil filters, Air filters, Spark plugs, Belts
- **Brakes:** Brake pads, Brake discs, Brake fluid
- **Suspension:** Shocks, Springs, Control arms
- **Electrical:** Batteries, Alternators, Starters
- **Transmission:** Clutch kits, Transmission fluid
- **Body:** Mirrors, Lights, Bumpers

---

## 7. User Flows

### 7.1 Browse and Inquire
1. User lands on homepage
2. Searches for part or clicks brand
3. Views part listings
4. Clicks on specific part
5. Reviews details
6. Clicks WhatsApp button
7. Pre-filled message opens in WhatsApp
8. Customer service responds

### 7.2 Direct WhatsApp Contact
1. User clicks floating WhatsApp button
2. General inquiry message opens
3. User describes needed part
4. Support assists with finding part

---

## 8. Payment & Pricing

### 8.1 Currency Display
- Primary: USD (most transactions)
- Secondary: ZWL (at market rate)
- Exchange rate: Configurable (default 1:18)

### 8.2 Payment Methods (Future)
- EcoCash (USD and ZWL)
- Bank Transfer
- Cash on Delivery
- Innbucks
- Visa/Mastercard (future)

### 8.3 Pricing Strategy
- Competitive markup on genuine parts
- Bulk discounts for fleet customers
- Seasonal promotions

---

## 9. Delivery & Logistics

### 9.1 Delivery Zones
**Zone 1: Harare CBD/Suburbs**
- Same-day delivery
- Free delivery over $100

**Zone 2: Major Cities (Bulawayo, Mutare, Gweru)**
- 24-48 hour delivery
- $5-10 delivery fee

**Zone 3: Nationwide**
- 2-5 days
- $10-20 delivery fee
- Partner courier services

### 9.2 Order Fulfillment
- In-store pickup available
- Delivery tracking (future)
- Signature required for high-value items

---

## 10. Future Roadmap

### Phase 1: MVP (Current)
- [x] Static website
- [x] Product catalog (6 sample parts)
- [x] WhatsApp integration
- [x] Mobile responsive

### Phase 2: Enhanced Catalog
- [ ] Full parts database (200+ parts)
- [ ] Real photos of parts
- [ ] Advanced search/filter
- [ ] Related parts suggestions
- [ ] Customer reviews

### Phase 3: E-commerce
- [ ] User accounts
- [ ] Shopping cart checkout
- [ ] Online payments
- [ ] Order tracking
- [ ] Inventory management

### Phase 4: Advanced Features
- [ ] VIN decoder
- [ ] Part compatibility checker
- [ ] Loyalty program
- [ ] Mobile app
- [ ] Live chat support

---

## 11. Analytics & Tracking

### 11.1 Key Metrics
- Page views
- Unique visitors
- Top search queries
- Most viewed parts
- WhatsApp click-through rate
- Conversion rate (inquiry to order)

### 11.2 Tools
- Google Analytics 4
- Vercel Analytics
- WhatsApp Business metrics

---

## 12. Content Requirements

### 12.1 Product Content
- High-quality images (600x400 minimum)
- Detailed descriptions (100+ words)
- OEM part numbers
- Compatibility lists
- Installation guides (future)

### 12.2 Marketing Content
- About Us page
- How to order guide
- FAQ section
- Blog posts (SEO)
- Social media links

---

## 13. Legal & Compliance

### 13.1 Required Pages
- Terms of Service
- Privacy Policy
- Return/Refund Policy
- Cookie Policy

### 13.2 Data Protection
- No payment data stored (Phase 1)
- Customer data privacy
- GDPR compliance (if EU customers)

---

## 14. Maintenance & Support

### 14.1 Technical Maintenance
- Regular dependency updates
- Security patches
- Performance monitoring
- Backup strategy

### 14.2 Content Updates
- New parts added weekly
- Price updates (as market changes)
- Stock status updates
- Blog posts (monthly)

---

## 15. Budget & Timeline

### 15.1 Development Costs
- Initial development: Complete
- Vercel hosting: Free tier
- Domain: $10-15/year
- WhatsApp Business: Free

### 15.2 Timeline
- **Week 1:** Design & Development (Complete)
- **Week 2:** Content & Testing
- **Week 3:** Launch & Marketing
- **Week 4:** Feedback & Iteration

---

## 16. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Low internet penetration in rural areas | Medium | Optimize for low bandwidth |
| Currency volatility | High | Dynamic pricing updates |
| Delivery challenges | Medium | Partner with reliable couriers |
| Competition from informal market | Medium | Emphasize genuine parts |
| Technical issues | Low | Regular monitoring, backups |

---

## 17. Appendix

### 17.1 Glossary
- **OEM:** Original Equipment Manufacturer
- **SKU:** Stock Keeping Unit
- **VIN:** Vehicle Identification Number
- **CTA:** Call to Action

### 17.2 References
- Brand guidelines: Mercedes, BMW, Audi, VW
- Zimbabwe consumer protection laws
- E-commerce best practices

---

**Document Version:** 1.0  
**Last Updated:** March 2, 2026  
**Author:** Benjamin (AI Assistant)  
**Status:** Draft - Ready for Review

---

## Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | | | |
| Tech Lead | | | |
| Business Owner | | | |
