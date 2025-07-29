import { useState, useRef, useEffect } from "react";
import { barItems } from "@/moke/data";
import { useTranslation } from "react-i18next";
import CategorySidebar from "@/components/CatalogSidebar";
import Header from "@/components/Header";

/* --- Kategoriyalar avtomatik yaratiladi --- */
const iconMap = {
  soft_drinks: "🥤",
  coffee: "☕️",
  teas: "🍵",
  lemonades: "🍋",
  smoothies_detox: "🍓",
  alcohol_drinks: "🍸",
  beer: "🍺",
  tequila: "🥃",
  rum: "🏴‍☠️",
  liqueurs: "🍶",
  brandy: "🥃",
  vodka: "🥃",
  whisky: "🥃",
  infusions: "🍶",
  gin: "🍸",
  imported_wine: "🍷",
  sparkling_wine: "🍾",
};

/* --- yangi lug‘at --- */
const categoryNames = {
  soft_drinks:     { uz: 'Sovuq ichimliklar',       ru: 'Безалкогольные напитки', en: 'Soft Drinks' },
  coffee:          { uz: 'Kofe',                    ru: 'Кофе',                   en: 'Coffee' },
  teas:            { uz: 'Choylar',                 ru: 'Чаи',                    en: 'Teas' },
  lemonades:       { uz: 'Limonadlar',              ru: 'Лимонады',               en: 'Lemonades' },
  smoothies_detox: { uz: 'Smuzi / Detoks',          ru: 'Смузи / Детокс',         en: 'Smoothies / Detox' },
  alcohol_drinks:  { uz: 'Alkogolli kokteyllar',    ru: 'Алкогольные коктейли',   en: 'Alcoholic Cocktails' },
  beer:            { uz: 'Pivo / Sidr',             ru: 'Пиво / Сидр',            en: 'Beer / Cider' },
  tequila:         { uz: 'Tekila',                  ru: 'Текила',                 en: 'Tequila' },
  rum:             { uz: 'Rom',                     ru: 'Ром',                    en: 'Rum' },
  liqueurs:        { uz: 'Likyorlar',               ru: 'Ликёры',                 en: 'Liqueurs' },
  brandy:          { uz: 'Konyak / Brendi',         ru: 'Бренди / Коньяк',        en: 'Brandy / Cognac' },
  vodka:           { uz: 'Vodka',                   ru: 'Водка',                  en: 'Vodka' },
  whisky:          { uz: 'Viski',                   ru: 'Виски',                  en: 'Whisky' },
  infusions:       { uz: 'Nastoykalar',             ru: 'Настойки',               en: 'Infusions' },
  gin:             { uz: 'Jin',                     ru: 'Джин',                   en: 'Gin' },
  imported_wine:   { uz: 'Import vinolar',          ru: 'Импортное вино',         en: 'Imported Wine' },
  sparkling_wine:  { uz: 'Pushti / Gazli vino',     ru: 'Игристое вино',          en: 'Sparkling Wine' },
};

const categories = Object.keys(barItems).map((id) => ({
  id,
  icon: iconMap[id] ?? '🍹',
  name: categoryNames[id],
}));

export default function BarPage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const catRefs = useRef({});

  const changeLang = (l) => i18n.changeLanguage(l);

  const getText = (field) => {
    if (typeof field === "string") return field;
    if (field && typeof field === "object")
      return field[lang] || field.en || Object.values(field)[0] || "";
    return "";
  };

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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-base font-sans">
      <Header lang={lang} setLang={changeLang} currentPage="bar" />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-6 px-4 gap-6">
        <CategorySidebar
          categories={categories}
          activeCat={activeCat}
          onCategoryClick={(id) => {
            setActiveCat(id);
            const el = catRefs.current[id];
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          lang={lang}
        />

        <main className="flex-1">
          {/* Hero rasm */}
          <div className="relative h-[30vh] md:h-[40vh] w-full mb-8">
            <img
              src="/food/hero.jpg"
              alt="Bartender"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>

          {/* Mahsulotlar bo‘limlari */}
          {categories.map((c) => (
            <section
              key={c.id}
              ref={(el) => (catRefs.current[c.id] = el)}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-white">
                <span className="text-3xl">{c.icon}</span>
                {c.name[lang]}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-6">
                {(barItems[c.id] || []).map((d) => (
                  <div key={d.id} className="flex flex-col">
                    {/* nom va narx */}
                    <div className="flex items-baseline mb-1 text-[#E0E0E0]">
                      <h3 className="text-lg tracking-wider uppercase whitespace-nowrap">
                        {getText(d.name)}
                      </h3>
                      <div className="flex-grow h-px border-b-2 border-double border-[#a37e2c] mx-4" />
                      <p className="text-lg whitespace-nowrap">
                        {d.price ? d.price.toLocaleString() : "-"} {t("som")}
                      </p>
                    </div>

                    {/* tavsif / o‘lcham */}
                    {(d.description || d.volume) && (
                      <p className="text-sm text-gray-400 capitalize">
                        {getText(d.description) ||
                          `${d.volume ?? ""}${d.unit ?? ""}`.trim()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
