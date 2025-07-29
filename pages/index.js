import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Header from '@/components/Header';

const categories = [
  { id: 'uzbek', name: { uz: "Milliy taomlar", ru: "Узбекская", en: "Uzbek" }, image: '/food/qozon1.jpg' },
  { id: 'european', name: { uz: "Yevropa taomlar", ru: "Европейская", en: "European" }, image: '/food/Baby%20Mozzarello..jpg' },
  { id: 'shashlik', name: { uz: "Shashlik", ru: "Шашлык", en: "Shashlik" }, image: '/shashlik-hero.jpg' },
  { id: 'bread', name: { uz: "Non", ru: "Хлеб", en: "Bread" }, image: '/non.jpg' },
  { id: 'bar', name: { uz: "Bar", ru: "Бар", en: "Bar" }, image: '/food/hero.jpg' },
  { id: 'hookah', name: { uz: "Kal\'yan", ru: "Кальян", en: "Hookah" }, image: '/hookah.jpg' },
];

export default function IndexPage() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'ru');

  const changeLang = (lng) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-base font-sans text-white">
      <Header lang={lang} setLang={changeLang} currentPage="home" />

      <section className="relative h-screen flex items-center justify-center text-center">
        <img src="/food/hero.jpg" alt="Restaurant" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-forum mb-4">{t('restaurant_name')}</h1>
          <p className="mb-6 text-lg md:text-2xl">Delicious taste awaits</p>
          <a href="#menu" className="inline-block bg-[#e0d3a3] text-black px-6 py-3 rounded-md font-semibold">Explore Menu</a>
        </div>
      </section>

      <section id="menu" className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2">
        {categories.map((c) => (
          <Link key={c.id} href={`/${c.id}`} className="relative h-48 rounded-xl overflow-hidden shadow-card group">
            <img src={c.image} alt={c.name[lang]} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <h3 className="relative z-10 flex items-end justify-center h-full pb-4 font-forum text-2xl">
              {c.name[lang]}
            </h3>
          </Link>
        ))}
      </section>

      <footer className="bg-base text-white py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-4 text-sm">
          <div className="md:col-span-2 flex flex-col items-start">
            <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
            <span className="font-forum text-xl">{t('restaurant_name')}</span>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('address')}</h4>
            <p>123 Tashkent Street</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('phone')}</h4>
            <p>+998 90 123 45 67</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Working Hours</h4>
            <p>10:00 - 23:00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
