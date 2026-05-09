import { useState } from 'react';
import { Cake, PieChart, Cookie, Coffee } from 'lucide-react';
import { categories } from '../../data/products';

const iconMap: Record<string, React.ElementType> = {
  Cake,
  PieChart,
  Cookie,
  Coffee,
};

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="urunler" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose font-medium text-sm tracking-wider uppercase">
            Lezzet Kategorileri
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Ürünlerimiz
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Cake;
            return (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="group bg-gradient-to-br from-cream to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-rose/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-rose group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-rose group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {category.count} ürün
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
