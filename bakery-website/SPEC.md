# Tatlı Rüya Pastanesi - Web Sitesi Spesifikasyonu

## 1. Concept & Vision

"Tatlı Rüya Pastanesi" - Sıcak, davetkar ve lezzetli bir atmosfer sunan bir pastane web sitesi. Klasik Fransız pastane estetiğini modern minimalizm ile buluşturan, kullanıcıları tatlı dünyasına davet eden bir deneyim. Ziyaretçiler siteye girdiklerinde taze kek ve kremanın kokusunu hisseder gibi hissedecek.

## 2. Design Language

### Aesthetic Direction
- **Referans**: Paris'in butik pastaneleri + modern Skandinav minimalizmi
- **Karakter**: Sıcak, sofistike, davetkar, profesyonel

### Color Palette
```
Primary (Deep Rose):    #C44569
Secondary (Cream):      #FFF5E6
Accent (Gold):          #D4A574
Background:             #FFFAF5
Text Primary:           #2D2D2D
Text Secondary:         #6B6B6B
Highlight:              #F8E1D4
```

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Nunito (sans-serif, okunabilir, sıcak)
- **Accent**: Cormorant Garamond (italik vurgular için)

### Spatial System
- Base unit: 8px
- Section padding: 80px (desktop), 48px (mobile)
- Card spacing: 24px
- Content max-width: 1200px

### Motion Philosophy
- **Genel**: Yumuşak, zarif geçişler (300-500ms ease-out)
- **Hover**: Subtle scale (1.02-1.05) + shadow elevation
- **Scroll**: Fade-up animasyonları (staggered 100ms)
- **Images**: Gentle parallax effect

### Visual Assets
- **İkonlar**: Lucide Icons (ince çizgili)
- **Görseller**: Unsplash pastane/kek fotoğrafları (sıcak tonlu)
- **Dekoratif**: SVG dalgalı çizgiler, yumuşak köşeler

## 3. Layout & Structure

### Page Structure
```
├── Hero Section (Full viewport, overlay text)
├── Hakkımızda (Kısa hikaye)
├── Ürün Kategorileri (Grid kartlar)
├── Öne Çıkan Ürünler (Carousel/Grid)
├── Günün Önerisi (Highlighted special)
├── Şube Bilgileri (Harita + adres)
├── İletişim Formu
└── Footer (Sosyal medya + legal)
```

### Visual Pacing
- Hero: dramatic, full-bleed görsel
- Ürünler: organized grid, breathing room
- İletişim: clean, focused form

### Responsive Strategy
- Desktop: 3-column grids
- Tablet: 2-column grids
- Mobile: Single column, stacked layout
- Breakpoints: 768px, 1024px, 1280px

## 4. Features & Interactions

### Core Features
1. **Hero Slider**: Otomatik döngü, manuel kontrol, touch-friendly
2. **Ürün Galerisi**: Kategori filtreleme, hover zoom effect
3. **Sepet Sistemi**: LocalStorage ile sepet yönetimi
4. **İletişim Formu**: Validasyonlu form, success/error states
5. **Mobil Menü**: Hamburger menu, slide-in drawer

### Interaction Details
- **Ürün Kartları**:
  - Hover: scale(1.03), shadow elevation, "Sepete Ekle" butonu görünür
  - Click: Modal'da ürün detayı
- **Sepet**:
  - Header'da badge ile ürün sayısı
  - Hover'da mini preview
  - Smooth slide-in drawer
- **Form**:
  - Real-time validation
  - Submit'te loading spinner
  - Success'ta confetti efekti

### Edge Cases
- Boş sepet: İllüstrasyon + "Sepetiniz boş" mesajı
- Form hataları: Inline error messages
- Slow connection: Skeleton loaders

## 5. Component Inventory

### Navigation Bar
- **Default**: Transparent, scroll'da solid white
- **Mobile**: Hamburger icon, slide-in drawer
- **States**: Fixed top, blur backdrop

### Hero Section
- Full viewport background
- Gradient overlay for text readability
- CTA button with hover animation

### Product Card
- **Default**: Shadow-sm, rounded-xl
- **Hover**: Shadow-lg, scale(1.03)
- **Content**: Image, title, price, add-to-cart button
- **Loading**: Skeleton animation

### Category Card
- Icon + Title + Product count
- Hover: background highlight, icon scale

### Special Offer Card
- Gradient background
- Countdown timer (optional)
- Prominent CTA

### Contact Form
- Input fields with floating labels
- Submit button with loading state
- Success/Error feedback

### Footer
- Three columns: About, Links, Contact
- Social icons row
- Newsletter signup

## 6. Technical Approach

### Framework & Tools
- **Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS
- **State**: React useState/useContext
- **Storage**: LocalStorage for cart
- **Icons**: Lucide React

### Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Categories.tsx
│   │   ├── Products.tsx
│   │   ├── Special.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   └── features/
│       └── Cart.tsx
├── data/
│   └── products.ts
├── context/
│   └── CartContext.tsx
├── App.tsx
└── main.tsx
```

### Data Model
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
}

interface CartItem {
  product: Product;
  quantity: number;
}
```
