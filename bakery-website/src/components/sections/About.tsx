import { Award, Heart, Leaf } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: "30 Yıllık Tecrübe",
      description: "1995'ten beri nesilden nesile aktarılan tariflerimizle hizmetinizdeyiz."
    },
    {
      icon: Heart,
      title: "Taze Malzemeler",
      description: "Günlük taze üretilen ürünlerimizde en kaliteli malzemeleri kullanıyoruz."
    },
    {
      icon: Leaf,
      title: "Doğal İçerikler",
      description: "Katkı maddesiz, doğal ve organik içeriklerle hazırlanan ürünler."
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/imgs/pastry_chef.jpg"
                alt="Pastane şefimiz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-rose font-medium text-sm tracking-wider uppercase">
              Hikayemiz
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Tatlı Rüya'nın
              <span className="text-rose"> Öyküsü</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tatlı Rüya Pastanesi, 1995 yılında İstanbul'un Kadıköy ilçesinde küçük bir dükkân olarak başladı.
              Kurucumuz Ayşe Hanım'ın annesinden öğrendiği geleneksel tarifler ve modern dokunuşlarla, bugün İstanbul'un
              en sevilen pastanelerinden biri haline geldi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Her gün sabahın erken saatlerinde fırınımızda yeni çıkan ürünlerimizle başlıyoruz.
              Keklerimiz, cheesecake'lerimiz ve özel pastalarımız, binlerce mutlu müşterimizin favorisidir.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="w-14 h-14 bg-rose/10 rounded-xl flex items-center justify-center mx-auto sm:mx-0 mb-4">
                    <feature.icon className="w-7 h-7 text-rose" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
