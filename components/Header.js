import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const menuCategories = [
  { id: 'uzbek',    icon: '🇺🇿', name: { uz: "O'zbek taomlari", ru: 'Узбекская', en: 'Uzbek' } },
  { id: 'european', icon: '🍝',  name: { uz: 'Yevropa taomlari', ru: 'Европейская', en: 'European' } },
  { id: 'bar',      icon: '🍹',  name: { uz: 'Bar', ru: 'Бар', en: 'Bar' } },
]

export default function Header({ lang, setLang, currentPage }) {
  const { i18n } = useTranslation()

  const handleLangChange = (value) => {
    setLang(value)
    i18n.changeLanguage(value)
  }

  return (
    <header className="sticky top-0 z-50 bg-base shadow-elev px-4 py-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        {/* MENU */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide md:overflow-visible">
          {menuCategories.map((m) => (
            <Link
              key={m.id}
              href={`/${m.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm  md:text-base  ${
                m.id === currentPage
                  ? 'bg-accent text-black'
                  : 'text-white hover:bg-accent hover:text-black'
              }`}
            >
              <span>{m.icon}</span>
              <span className='text-white'>{m.name[lang]}</span>
            </Link>
          ))}
        </div>

        {/* LANGUAGE SELECT */}
        <div className="flex items-center gap-2 text-sm md:text-base text-white">
          <Globe className="w-4 h-4 md:w-5 md:h-5" />
          <select
            value={lang}
            onChange={(e) => handleLangChange(e.target.value)}
            className="border border-text-subtle bg-card text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="uz">O'z</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </div>
      </div>
    </header>
  )
}
