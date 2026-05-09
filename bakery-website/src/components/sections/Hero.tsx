import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 bg-rose/20 backdrop-blur-sm rounded-full text-rose-light text-sm font-medium mb-6">
            1995'ten beri lezzetin adresi
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tatlı Rüya
            <span className="block text-gold">Pastanesi</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Her dilimde bir mutluluk, her ısırtmada bir anı. Özenle hazırlanan
            tatlılarımızle sizleri şımartıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#urunler"
              className="px-8 py-4 bg-rose hover:bg-rose-dark text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ürünlerimizi  Keşfedin
            </a>
            <a
              href="#iletisim"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 border border-white/30"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#hakkimizda"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </a>
    </section>
  );
}
