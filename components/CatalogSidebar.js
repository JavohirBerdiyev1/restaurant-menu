import { useTranslation } from 'react-i18next'

export default function CategorySidebar({ categories, activeCat, onCategoryClick, lang }) {
  const { t } = useTranslation()

  return (
    <aside className="w-60 bg-base shadow-elev shrink-0 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto rounded-xl p-5">
      {/* LOGO */}
      <div className="flex items-center justify-center mb-10">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* CATEGORY LIST */}
      <nav className="space-y-3">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onCategoryClick(c.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium  transition-colors ${
              activeCat === c.id
                ? 'bg-accent text-black shadow-elev'
                : 'text-white hover:bg-card hover:text-accent'
            }`}
          >
            <span className="text-xl">{c.icon}</span>
            <span>{c.name[lang]}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
