import { useState, useRef, useEffect } from "react";
import { europeanDishes, categories as catMap } from "@/moke/data";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import CategorySidebar from "@/components/CatalogSidebar";
import Header from "@/components/Header";

export default function EuropeanPage() {
  const { i18n, t } = useTranslation();
  // const [lang, setLang] = useState("uz");
  const [activeCat, setActiveCat] = useState("soup");
  const [favs, setFavs] = useState([]);
  const catRefs = useRef({});

  // JSON‑dagi kategoriyalarni avtomatik olish
  const categories = [
      {
        id: 'cold_appetizer',
        icon: '🥒',
        name: { uz: 'Sovuq zakuskalar', ru: 'Холодные закуски', en: 'Cold Appetizers' },
      },
      {
        id: 'nuts',
        icon: '🥜',
        name: { uz: 'ГОРЯЧИЙ ЗАКУСКИ', ru: 'ГОРЯЧИЙ ЗАКУСКИ', en: 'ГОРЯЧИЙ ЗАКУСКИ' },
      },
      {
        id: 'salad',
        icon: '🥗',
        name: { uz: 'Salatlar', ru: 'Салаты', en: 'Salads' },
      },
      {
        id: 'second_course',
        icon: '🍛',
        name: { uz: 'Ikkinchi taomlar', ru: 'Вторые блюда', en: 'Main Courses' },
      },
     
  ];

  
  const lang = i18n.language
  const changeLang = (l) => {
    i18n.changeLanguage(l);
  };

  const toggleFav = (id) =>
    setFavs((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

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
      <Header lang={lang} setLang={changeLang} currentPage="european" />

      <div className="flex max-w-7xl mx-auto mt-6 px-4 gap-6">
        <CategorySidebar
          categories={categories}
          activeCat={activeCat}
          onCategoryClick={(id) => {
            setActiveCat(id);
            catRefs.current[id]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          lang={lang}
        />

        <main className="flex-1">
          {categories.map((c) => (
            <section
              key={c.id}
              ref={(el) => (catRefs.current[c.id] = el)}
              className="mb-6 scroll-mt-24"
            >
              <h2 className="flex items-center gap-3 text-2xl mb-4 text-white font-forum">
                <span className="text-3xl">{c.icon}</span>
                {c.name[lang]}
              </h2>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                {(europeanDishes[c.id] || []).map((d) => {
                  const isFav = favs.includes(d.id);
                  return (
                    <div
                      key={d.id}
                      className="rounded-xl border border-white/10 overflow-hidden"
                    >
                      {/* image */}
                      <div className="relative">
                        <img
                          src={d.image}
                          alt={d.name[lang]}
                          className="w-full h-[180px] object-cover"
                        />
                      </div>

                      {/* text */}
                      <div className="p-2 text-center">
                        <h3 className="text-[18px] font-forum truncate text-white">
                          {d.name[lang]}
                        </h3>
                        <p className="text-[12px] text-text-muted line-clamp-2">
                          {d.description[lang]}
                        </p>
                        <div className="mt-2 font-forum text-accent">
                          {d?.price?.toLocaleString()} {t("som")}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
