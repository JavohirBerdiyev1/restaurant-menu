import { useState, useRef, useEffect } from 'react'
import { barItems } from '@/moke/data'
import { Heart, Globe } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import CategorySidebar from '@/components/CatalogSidebar'
import Header from '@/components/Header'

const categories = [
  { id: 'beverages', icon: '🥤', name: { uz: 'Ichimliklar', ru: 'Напитки', en: 'Beverages' } },
  { id: 'alcoholic', icon: '🍷', name: { uz: 'Alkogol', ru: 'Алкогольные', en: 'Alcoholic' } },
]

const menuCategories = [
  { id: 'uzbek', icon: '🇺🇿', name: { uz: "O'zbek taomlari", ru: 'Узбекская', en: 'Uzbek' } },
  { id: 'european', icon: '🍝', name: { uz: 'Yevropa taomlari', ru: 'Европейская', en: 'European' } },
  { id: 'bar', icon: '🍹', name: { uz: 'Bar', ru: 'Бар', en: 'Bar' } },
]

export default function BarPage() {
  const { i18n, t } = useTranslation()
  const [lang, setLang] = useState('uz')
  const [activeCat, setActiveCat] = useState('beverages')
  const [favs, setFavs] = useState([])
  const catRefs = useRef({})

  const changeLang = (l) => {
    i18n.changeLanguage(l)
    setLang(l)
  }

  const toggleFav = (id) => {
    setFavs((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 180
      for (const c of Object.keys(catRefs.current)) {
        const el = catRefs.current[c]
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveCat(c)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HEADER */}
      <Header lang={lang} setLang={changeLang} currentPage="bar"/>

      {/* BODY */}
      <div className="flex max-w-7xl mx-auto mt-6 px-4 gap-6">
        <CategorySidebar
          categories={categories}
          activeCat={activeCat}
          onCategoryClick={(id) => {
            setActiveCat(id)
            const el = catRefs.current[id]
            el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          lang={lang}
        />

        <main className="flex-1">
          {categories.map((c) => (
            <section key={c.id} ref={(el) => (catRefs.current[c.id] = el)} className="mb-12 scroll-mt-24">
              <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4">
                <span className="text-3xl">{c.icon}</span>
                {c.name[lang]}
              </h2>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
                {(barItems[c.id] || []).map((d) => (
                  <div key={d.id} className="bg-white rounded-xl shadow hover:shadow-md p-4 transition">
                    <div className="relative mb-3">
                      <img
                        src={d.image}
                        alt={d.name[lang]}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => toggleFav(d.id)}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favs.includes(d.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold truncate">{d.name[lang]}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{d.description[lang]}</p>
                    <div className="text-red-500 font-bold mt-2">{d.price.toLocaleString()} {t('som')}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}