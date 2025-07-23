// components/CategorySidebar.js

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"; // <-- QO'SHING

export default function CategorySidebar({
  categories,
  activeCat,
  onCategoryClick,
  lang,
}) {
  const [isClient, setIsClient] = useState(false); // <-- QO'SHING

  useEffect(() => { // <-- QO'SHING
    setIsClient(true);
  }, []);

  return (
    <aside className="sticky top-20 h-[calc(100vh-80px)] w-60 border-x border-white/10 pl-6 pr-6">
      {/* ... boshqa kodlar ... */}
      <div className="mb-8">
        <img src="/logo-2.png" alt="Logo" className="w-full object-contain" />
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
                {isClient && c.name[lang]} {/* <-- O'ZGARTIRING */}
              </span>
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}