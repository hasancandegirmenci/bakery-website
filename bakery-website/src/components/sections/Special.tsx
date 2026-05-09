import { Star, ShoppingBag } from 'lucide-react';
import { specialProduct } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Special() {
  const { addToCart } = useCart();

  return (
    <section id="ozel-teklif" className="py-20 md:py-32 bg-gradient-to-br from-rose via-rose-dark to-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={specialProduct.image}
                alt={specialProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-center text-sm">
                Günün<br />Önerisi
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-gold font-medium">Sınırlı Sayıda</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {specialProduct.name}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {specialProduct.description}
            </p>
            <div className="flex items-center gap-8 mb-8">
              <div>
                <span className="text-sm text-white/70">Fiyat</span>
                <div className="text-4xl font-bold text-gold">
                  ₺{specialProduct.price}
                </div>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div>
                <span className="text-sm text-white/70">Kategori</span>
                <div className="text-xl font-semibold">Cheesecake</div>
              </div>
            </div>
            <button
              onClick={() => addToCart(specialProduct)}
              className="px-8 py-4 bg-white hover:bg-gold text-rose hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              Hemen Sipariş Ver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
