import { useState, useRef, useEffect } from 'react';
import { businessLunchItems } from '@/moke/data';
import { useTranslation } from 'react-i18next';
import CategorySidebar from '@/components/CatalogSidebar';
import Header from '@/components/Header';

const categories = [
  {
    id: 'businessLunch',
    icon: '🍱',
    name: {
      uz: 'Biznes-lanch',
      ru: 'Бизнес-ланч',
      en: 'Business Lunch',
    },
  },
];

const txt = (field, lang) =>
  typeof field === 'string'
    ? field
    : field?.[lang] || field?.en || Object.values(field || {})[0] || '';

export default function BusinessLunchPage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [activeCat, setActiveCat] = useState('businessLunch');
  const catRefs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 180;
      for (const id of Object.keys(catRefs.current)) {
        const el = catRefs.current[id];
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveCat(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-base font-sans">
      <Header lang={lang} setLang={i18n.changeLanguage} currentPage="businessLunch" />

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
          {/* Hero rasm */}
          {/* <div className="relative h-[30vh] md:h-[40vh] w-full mb-8">
            <img src="/business-lunch.jpg" alt="Business Lunch" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div> */}

          <section
            ref={(el) => (catRefs.current.businessLunch = el)}
            className="mb-12 scroll-mt-24"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold mb-6 text-white">
              <span className="text-3xl">🍱</span>
              {categories[0].name[lang]}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {businessLunchItems.businessLunch.map((d) => (
                <div key={d.id} className="flex flex-col">
                  <div className="flex items-baseline mb-1 text-[#E0E0E0]">
                    <h3 className="text-sm tracking-wider uppercase whitespace-nowrap">
                      {txt(d.name, lang)}
                    </h3>
                    <div className="flex-grow h-px border-b-2 border-double border-[#a37e2c] mx-4" />
                    <p className="text-sm whitespace-nowrap">
                      {d.price.toLocaleString()} {t('som')}
                    </p>
                  </div>
                  {/* <p className="text-sm text-gray-400 capitalize">
                    {txt(d.description, lang)}
                  </p> */}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
