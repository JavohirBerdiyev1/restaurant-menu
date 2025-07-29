import Link from "next/link";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";


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


  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className={`h-px w-full ${grayLine}`} />
      <div className="flex items-center px-4 md:px-10 gap-4 py-4 bg-base shadow-elev relative">

        <nav
          className="flex overflow-x-auto gap-6 md:gap-8"
        >
          {menuCategories.map((m, idx) => (
            <Link
              key={m.id}
              href={`/${m.id}`}
              className={`relative font-forum uppercase tracking-wide whitespace-nowrap text-sm px-3 md:px-4
                ${m.id === currentPage ? gold : 'text-white hover:text-[#e0d3a3]'}
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                ${m.id === currentPage ? 'after:bg-[#e0d3a3]' : 'after:bg-transparent'}
                before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rotate-45 before:border before:border-[#e0d3a3] first:before:hidden`
              }
            >
              {m.name[lang]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto md:ml-0">
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
