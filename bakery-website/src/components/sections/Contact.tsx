import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="iletisim" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-rose font-medium text-sm tracking-wider uppercase">
            İletişim
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Bize Ulaşın
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8">
              Şube Bilgilerimiz
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Bağdat Caddesi No: 42<br />
                    Kadıköy, İstanbul 34710
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:+902163456789" className="text-gray-600 hover:text-rose transition-colors">
                    (0216) 345 67 89
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <a href="mailto:info@tatliruya.com" className="text-gray-600 hover:text-rose transition-colors">
                    info@tatliruya.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-600">
                    Pazartesi - Cumartesi: 07:00 - 22:00<br />
                    Pazar: 08:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650735915!2d29.0553!3d40.9631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU3JzQ2LjMiTiAyOcKwMDMnMTguOCJF!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              Mesaj Gönderin
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all"
                  placeholder="Adınızı girin"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all"
                    placeholder="0555 555 55 55"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-rose hover:bg-rose-dark text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Gönderiliyor...
                  </>
                ) : status === 'success' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mesajınız Gönderildi!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
