import { useState, useRef, useEffect } from 'react'
import { uzbekDishes } from '@/moke/data'
import { Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CategorySidebar from '@/components/CatalogSidebar'
import Header from '@/components/Header'

const categories = [
  { id: 'soup',         icon: '🍲', name: { uz: "Sho'rvalar",     ru: 'Супы',          en: 'Soups' } },
  { id: 'main_course',  icon: '🍛', name: { uz: 'Asosiy taomlar', ru: 'Основные блюда', en: 'Main Courses' } },
  { id: 'dessert',      icon: '🍰', name: { uz: 'Shirinliklar',   ru: 'Десерты',       en: 'Desserts' } },
]

export default function UzbekPage() {
  const { i18n, t } = useTranslation()
  const [lang, setLang] = useState('uz')
  const [activeCat, setActiveCat] = useState('soup')
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
    <div className="min-h-screen bg-base font-sans">
      {/* HEADER */}
      <Header lang={lang} setLang={changeLang} currentPage="uzbek" />

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
            <section
              key={c.id}
              ref={(el) => (catRefs.current[c.id] = el)}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 text-white">
                <span className="text-3xl">{c.icon}</span>
                {c.name[lang]}
              </h2>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
                {(uzbekDishes[c.id] || []).map((d) => {
                  const isFav = favs.includes(d.id)
                  return (
                    <div
                      key={d.id}
                      className="bg-card rounded-xl shadow-card hover:shadow-elev transition"
                    >
                      {/* IMAGE – padding yo‘q */}
                      <div className="relative mb-3">
                        <img
                          srcSet=""
                          src={d.image}
                          alt={d.name[lang]}
                          className="w-full h-40 object-cover rounded-t-xl"
                        />
                        <button
                          onClick={() => toggleFav(d.id)}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-elev"
                          aria-label="Favorite"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              isFav
                                ? 'text-accent-alt fill-accent-alt'
                                : 'text-text-subtle'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="px-4 pb-4">
                        <h3 className="text-lg font-semibold truncate text-white">
                          {d.name[lang]}
                        </h3>
                        <p className="text-sm text-text-muted line-clamp-2">
                          {d.description[lang]}
                        </p>
                        <div className="mt-2 font-bold text-accent">
                          {d.price.toLocaleString()} {t('som')}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
