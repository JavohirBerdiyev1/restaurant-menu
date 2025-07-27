// components/CategorySidebar.js

import { useTranslation } from "react-i18next";

export default function CategorySidebar({
  categories,
  activeCat,
  onCategoryClick,
  lang,
}) {
  return (
    <>
      <div className="md:hidden px-4 mb-4 overflow-x-auto">
        <nav className="flex gap-4">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onCategoryClick(c.id)}
              className="shrink-0 flex items-center gap-1 text-white"
            >
              <span>{c.icon}</span>
              <span
                className={`relative font-forum uppercase tracking-wide text-sm
                  ${activeCat === c.id ? 'text-[#e0d3a3]' : 'hover:text-[#e0d3a3]'}
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                  ${activeCat === c.id ? 'after:bg-[#e0d3a3]' : 'after:bg-transparent'}`}
              >
                {c.name[lang]}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <aside className="hidden md:block sticky top-20 h-[calc(100vh-80px)] w-60 border-x border-white/10 pl-6 pr-6">
        <div className="mb-8">
          <img src="/logo.png" alt="Logo" className="w-full object-contain" />
        </div>

        <nav className="flex flex-col gap-4">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onCategoryClick(c.id)}
              className="w-full text-start"
            >
              <span className="inline-flex items-center gap-2">
                <span className="text-[16px]">{c.icon}</span>
                <span
                  className={`relative inline-block font-forum uppercase tracking-wide
                    ${activeCat === c.id ? 'text-[#e0d3a3]' : 'text-white hover:text-[#e0d3a3]'}
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                    ${activeCat === c.id ? 'after:bg-[#e0d3a3]' : 'after:bg-transparent'} text-[14px]`}
                >
                  {c.name[lang]}
                </span>
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}