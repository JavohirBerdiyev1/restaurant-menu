import Link from "next/link";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const menuCategories = [
  { id: "uzbek",    name: { uz: "Milliy taomlar",  ru: "Узбекская",   en: "Uzbek"    } },
  { id: "european", name: { uz: "Yevropa taomlar", ru: "Европейская", en: "European" } },
  { id: "shashlik", name: { uz: "Shashlik",        ru: "Шашлык",      en: "Shashlik" } },
  { id: "bread",    name: { uz: "Non",             ru: "Хлеб",        en: "Bread"    } },
  { id: "bar",      name: { uz: "Bar",             ru: "Бар",         en: "Bar"      } },
  { id: "hookah",   name: { uz: "Kal'yan",         ru: "Кальян",      en: "Hookah"   } },
];

export default function Header({ lang, setLang, currentPage }) {
  const { i18n } = useTranslation();
  const gold = "text-[#e0d3a3]"; // oltin rang
  const grayLine = "bg-white/10"; // chiziq rangi

  const change = (v) => {
    setLang(v);
    i18n.changeLanguage(v);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className={`h-px w-full ${grayLine}`} />
      <div className="flex items-center justify-between px-10 gap-8 py-4 sticky  bg-base shadow-elev">
        {/* MENU */}
        <nav className="flex gap-8">
          {menuCategories.map((m, idx) => (
            <div key={m.id} className="flex items-center">
              <Link
                href={`/${m.id}`}
                className={`relative font-forum text-white uppercase tracking-wide text-sm 
                  ${
                    m.id === currentPage
                      ? gold
                      : "text-white hover:text-[#e0d3a3]"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                  ${
                    m.id === currentPage
                      ? "after:bg-[#e0d3a3]"
                      : "after:bg-transparent"
                  }
                `}
              >
                {isClient && m.name[lang]}
              </Link>
              {idx < menuCategories.length - 1 && (
                <span className="mx-6 inline-block w-2 h-2 border border-[#e0d3a3] rotate-45" />
              )}
            </div>
          ))}
        </nav>

        {/* LANGUAGE SELECT */}
        <div className="flex items-center gap-2">
          <Globe className={`${gold} w-4 h-4`} />
          <select
            value={lang}
            onChange={(e) => change(e.target.value)}
            className={`appearance-none bg-transparent font-forum uppercase ${gold} outline-none`}
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
      <div className={`h-px w-full ${grayLine}`} />
    </header>
  );
}
