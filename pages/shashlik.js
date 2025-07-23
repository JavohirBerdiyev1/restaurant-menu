import { useState, useRef, useEffect } from 'react';
import { shashlikItems } from '@/moke/data';
import { useTranslation } from 'react-i18next';
import CategorySidebar from '@/components/CatalogSidebar';
import Header from '@/components/Header';

/* Faqat bitta bo‘lim */
const categories = [
  {
    id: 'shashlik',
    icon: '🍢',
    name: { uz: 'Shashlik', ru: 'Шашлык', en: 'Shashlik' },
  },
];

/* Matnni tilga mos chiqarish */
const getText = (field, lang) =>
  typeof field === 'string'
    ? field
    : field?.[lang] || field?.en || Object.values(field || {})[0] || '';

export default function ShashlikPage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [activeCat, setActiveCat] = useState('shashlik');
  const catRefs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 180;
      for (const c of Object.keys(catRefs.current)) {
        const el = catRefs.current[c];
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveCat(c);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-base font-sans">
      <Header lang={lang} setLang={i18n.changeLanguage} currentPage="shashlik" />
      <div className="flex max-w-7xl mx-auto mt-6 px-4 gap-6">
        <CategorySidebar
          categories={categories}
          activeCat={activeCat}
          onCategoryClick={(id) => {
            setActiveCat(id);
            catRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          lang={lang}
        />

        <main className="flex-1">
          {/* Hero */}
          <div className="relative h-[30vh] md:h-[40vh] w-full mb-8">
            <img src="/shashlik-hero.jpg" alt="Grill" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>

          {/* Shashlik bo‘limi */}
          <section
            ref={(el) => (catRefs.current.shashlik = el)}
            className="mb-12 scroll-mt-24"
          >
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-white">
              <span className="text-3xl">🍢</span>
              {categories[0].name[lang]}
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-6">
              {shashlikItems.shashlik.map((d) => (
                <div key={d.id} className="flex flex-col">
                  <div className="flex items-baseline mb-1 text-[#E0E0E0]">
                    <h3 className="text-lg tracking-wider uppercase whitespace-nowrap">
                      {getText(d.name, lang)}
                    </h3>
                    <div className="flex-grow h-px border-b-2 border-double border-[#a37e2c] mx-4" />
                    <p className="text-lg whitespace-nowrap">
                      {d.price.toLocaleString()} {t('som')}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 capitalize">
                    {getText(d.description, lang)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
