export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Çikolatalı Islak Kek",
    description: "Yoğun çikolata aromalı, nemli ve yumuşak dokulu özel kek",
    price: 120,
    category: "kekler",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    tags: ["çikolata", "popüler"]
  },
  {
    id: 2,
    name: "Limonlu Cheesecake",
    description: "Taze limonlu, kremanı ve tabanlı klasik Amerikan cheesecake",
    price: 150,
    category: "cheesecake",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400",
    tags: ["limon", "kremalı"]
  },
  {
    id: 3,
    name: "Frambuazlı Pasta",
    description: "Taze frambuazlar ile süslenmiş, hafif ve meyveli pasta",
    price: 180,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400",
    tags: ["meyveli", "frambuaz"]
  },
  {
    id: 4,
    name: "Klasik Croissant",
    description: "Taze fırından, tereyağlı orijinal Fransız croissant",
    price: 45,
    category: "hamurişi",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
    tags: ["klasik", "tereyağlı"]
  },
  {
    id: 5,
    name: "Çilekli Top Kek",
    description: "Mini çilekli top kekler, partiler için ideal",
    price: 90,
    category: "kekler",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400",
    tags: ["çilek", "mini"]
  },
  {
    id: 6,
    name: "Oreo Cheesecake",
    description: "Oreo bisküvili taban, kremanı üst kat",
    price: 160,
    category: "cheesecake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400",
    tags: ["çikolata", "oreo"]
  },
  {
    id: 7,
    name: "Karamelli Brownie",
    description: "İçi nemli, üstü çatlamış, karamel soslu brownie",
    price: 85,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
    tags: ["karamel", "çikolata"]
  },
  {
    id: 8,
    name: "Vişneli Kurabiye",
    description: "Taze vişne parçacıklı, çikolata kaplı kurabiye",
    price: 55,
    category: "hamurişi",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
    tags: ["vişne", "çikolata"]
  },
  {
    id: 9,
    name: "Magnolia",
    description: "Ev yapımı, hafif ve kremalı magnolia",
    price: 70,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
    tags: ["klasik", "kremalı"]
  },
  {
    id: 10,
    name: "Matcha Cheesecake",
    description: "Japon matcha çaylı, yeşil tea aromalı cheesecake",
    price: 170,
    category: "cheesecake",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400",
    tags: ["matcha", "özel"]
  },
  {
    id: 11,
    name: "Elmalı Turta",
    description: "Taze elma dilimli, tarçınlı klasik turta",
    price: 110,
    category: "pasta",
    image: "/imgs/apple_pie.jpg",
    tags: ["elma", "tarçın"]
  },
  {
    id: 12,
    name: "Suffle",
    description: "Taze fırından, sıcak çikolatalı souffle",
    price: 95,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400",
    tags: ["çikolata", "sıcak"]
  }
];

export const categories = [
  {
    id: 1,
    name: "Kekler",
    slug: "kekler",
    icon: "Cake",
    count: products.filter(p => p.category === "kekler").length
  },
  {
    id: 2,
    name: "Cheesecake",
    slug: "cheesecake",
    icon: "PieChart",
    count: products.filter(p => p.category === "cheesecake").length
  },
  {
    id: 3,
    name: "Pastalar",
    slug: "pasta",
    icon: "BirthdayCake",
    count: products.filter(p => p.category === "pasta").length
  },
  {
    id: 4,
    name: "Hamurişleri",
    slug: "hamurişi",
    icon: "Croissant",
    count: products.filter(p => p.category === "hamurişi").length
  }
];

export const specialProduct = {
  id: 0,
  name: "Günün Önerisi: San Sebastian Cheesecake",
  description: "Özel tarifimizle hazırlanan, dışı çıtır içi kremanı San Sebastian tarzı cheesecake. Sınırlı sayıda!",
  price: 200,
  category: "special",
  image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600",
  tags: ["özel", "sınırlı"]
};
