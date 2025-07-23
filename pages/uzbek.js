import { useState, useRef, useEffect } from 'react'
import { uzbekDishes } from '@/moke/data'
import { useTranslation } from 'react-i18next'
import CategorySidebar from '@/components/CatalogSidebar'
import Header from '@/components/Header'

export const categories = [
  {
    id: 'cold_appetizer',
    icon: '🥒',
    name: {
      uz: 'Sovuq zakuskalar',
      ru: 'Холодные закуски',
      en: 'Cold Appetizers',
    },
  },
  {
    id: 'salad',
    icon: '🥗',
    name: { uz: 'Salatlar', ru: 'Салаты', en: 'Salads' },
  },
  {
    id: 'first_course',
    icon: '🍲',
    name: {
      uz: 'Birinchi taomlar',
      ru: 'Первые блюда',
      en: 'Soups & First Courses',
    },
  },
  {
    id: 'second_course',
    icon: '🍛',
    name: {
      uz: 'Ikkinchi taomlar',
      ru: 'Вторые блюда',
      en: 'Main Courses',
    },
  },
];

export default function UzbekPage() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language
  const [activeCat, setActiveCat] = useState('soup')
  const [favs, setFavs] = useState([])
  const catRefs = useRef({})

  const changeLang = (l) => {
    i18n.changeLanguage(l)
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
              className="mb-6 scroll-mt-24"
            >
              <h2 className="flex items-center font-forum leading-3  gap-3 text-2xl font-semi mb-4 text-white">
                <span className="text-3xl ">{c.icon}</span>
                {c.name[lang]}
              </h2>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                {(uzbekDishes[c.id] || []).map((d) => {
                  const isFav = favs.includes(d.id)
                  return (
                    <div
                    key={d.id}
                    className="rounded-xl border border-white/10 overflow-hidden transition"
                  >
                    {/* IMAGE */}
                    <div className="relative">
                      <img
                        srcSet=""
                        src={d.image}
                        alt={d.name[lang]}
                        className="w-full h-[180px] object-cover"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <h3 className="text-[18px] font-forum tracking-[0.8px] font-medium truncate text-white">
                        {d.name[lang]}
                      </h3>
                      <p className="text-[12px] font-dm text-text-muted line-clamp-2">
                        {d.description[lang]}
                      </p>
                      <div className="mt-2 font-forum text-[16px] font-normal text-accent">
                        {d?.price?.toLocaleString()} {t('som')}
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
