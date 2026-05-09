import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-8 h-8 text-rose-light"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 25c0-8 8-14 8-14s8 6 8 14c0 4-4 6-8 6s-8-2-8-6z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <ellipse cx="20" cy="26" rx="6" ry="3" fill="currentColor" />
              </svg>
              <span className="font-serif text-xl font-bold">Tatlı Rüya</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              1995'ten bu yana İstanbul'un kalbinde, aileniz için en taze ve en lezzetli
              tatlıları hazırlıyoruz. Her bir ürünümüz, sevgi ve özenle yapılır.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {['Ana Sayfa', 'Hakkımızda', 'Ürünlerimiz', 'İletişim'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace('ı', 'i').replace('ü', 'u')}`}
                    className="text-gray-400 hover:text-rose-light transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-light flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Bağdat Caddesi No: 42<br />
                  Kadıköy, İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-light flex-shrink-0" />
                <a href="tel:+902163456789" className="text-gray-400 hover:text-rose-light transition-colors text-sm">
                  (0216) 345 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-light flex-shrink-0" />
                <a href="mailto:info@tatliruya.com" className="text-gray-400 hover:text-rose-light transition-colors text-sm">
                  info@tatliruya.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-gray-800 hover:bg-rose rounded-full transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-rose rounded-full transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-rose rounded-full transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Tatlı Rüya Pastanesi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
