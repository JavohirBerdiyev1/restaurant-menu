import { useTranslation } from 'react-i18next'

export default function CategorySidebar({
  categories,
  activeCat,
  onCategoryClick,
  lang,
}) {
  const { t } = useTranslation()
  const gold = '#e0d3a3'

  return (
    <aside className="sticky top-20 h-[calc(100vh-80px)] w-60
                      border-x  border-white/10 pl-6 pr-4 ">

      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-full object-contain" />
      </div>

      <nav className="flex flex-col gap-4">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onCategoryClick(c.id)}
            className="w-full text-start"
          >
            {/* icon + label, mark whole group as inline‑block */}
            <span className="inline-flex items-center gap-2">
              <span className="text-[16px]">{c.icon}</span>

              <span
                className={`relative inline-block font-forum uppercase tracking-wide
                  ${activeCat === c.id ? `text-[${gold}]` : 'text-white hover:text-[#e0d3a3]'}
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                  ${activeCat === c.id ? `after:bg-[${gold}]` : 'after:bg-transparent'}`}
              >
                {c.name[lang]}
              </span>
            </span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
