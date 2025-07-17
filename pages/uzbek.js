
// pages/uzbek.js
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Clock, Star, Heart, ShoppingCart, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { uzbekDishes } from '@/moke/data'

// Mock data for Uzbek dishes


const categories = [
  { id: 'soup', name: { uz: "Sho'rvalar", ru: "Супы", en: "Soups" }, icon: "🍲" },
  { id: 'main_course', name: { uz: "Asosiy taomlar", ru: "Основные блюда", en: "Main Courses" }, icon: "🍛" },
  { id: 'dessert', name: { uz: "Shirinliklar", ru: "Десерты", en: "Desserts" }, icon: "🍰" }
]

const menuCategories = [
  { id: 'uzbek', name: { uz: "O'zbek taomlari", ru: "Узбекская кухня", en: "Uzbek Cuisine" }, icon: "🇺🇿" },
  { id: 'european', name: { uz: "Yevropa taomlari", ru: "Европейская кухня", en: "European Cuisine" }, icon: "🍝" },
  { id: 'bar', name: { uz: "Bar", ru: "Бар", en: "Bar" }, icon: "🍹" }
]

export default function UzbekPage() {
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState('uz')
  const [activeCategory, setActiveCategory] = useState('soup')
  const [favorites, setFavorites] = useState([])
  const categoryRefs = useRef({})

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setCurrentLang(lng)
  }

  const toggleFavorite = (dishId) => {
    setFavorites(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    )
  }

  const scrollToCategory = (categoryId) => {
    const element = categoryRefs.current[categoryId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const categoryId of Object.keys(categoryRefs.current)) {
        const element = categoryRefs.current[categoryId]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(categoryId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-red-500 hover:text-red-600">
                <ArrowLeft className="w-5 h-5" />
                <span>Orqaga</span>
              </Link>
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍽️</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">{t('restaurant_name')}</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-600" />
              <select 
                value={currentLang} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Top Menu Navigation */}
      <nav className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {menuCategories.map((category) => (
              <Link 
                key={category.id}
                href={`/${category.id}`}
                className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition-colors ${
                  category.id === 'uzbek' 
                    ? 'border-b-2 border-red-500 text-red-500' 
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name[currentLang]}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Category Menu */}
      <div className="bg-white/70 backdrop-blur-lg border-b sticky top-32 z-30">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-red-500 text-white'
                    : 'text-gray-600 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name[currentLang]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🇺🇿 {menuCategories.find(c => c.id === 'uzbek')?.name[currentLang]}
            </h1>
            <p className="text-gray-600 text-lg">
              {currentLang === 'uz' ? 'An\'anaviy o\'zbek oshxonasining eng mazali taomları' : 
               currentLang === 'ru' ? 'Самые вкусные блюда традиционной узбекской кухни' : 
               'The most delicious dishes of traditional Uzbek cuisine'}
            </p>
          </div>

          {/* Dishes by Category */}
          {categories.map((category) => (
            <div 
              key={category.id} 
              ref={el => categoryRefs.current[category.id] = el}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.name[currentLang]}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uzbekDishes[category.id]?.map((dish) => (
                  <div key={dish.id} className="food-card p-6">
                    <div className="relative mb-4">
                      <img 
                        src={dish.image} 
                        alt={dish.name[currentLang]}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button 
                        onClick={() => toggleFavorite(dish.id)}
                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${favorites.includes(dish.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                        />
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {dish.name[currentLang]}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {dish.description[currentLang]}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-500">
                        {dish.price.toLocaleString()} {t('som')}
                      </span>
                      <button className="btn-primary">
                        <ShoppingCart className="w-4 h-4" />
                        <span>{t('add_to_cart')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🍽️</span>
                </div>
                <h3 className="text-xl font-bold">{t('restaurant_name')}</h3>
              </div>
              <p className="text-gray-400">
                {currentLang === 'uz' ? 'Eng mazali milliy taomlar' : 
                 currentLang === 'ru' ? 'Самые вкусные национальные блюда' : 
                 'The most delicious national dishes'}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {t('address')}
              </h4>
              <p className="text-gray-400">
                {currentLang === 'uz' ? 'Toshkent sh., Chilonzor tumani, Bunyodkor ko\'chasi 12' : 
                 currentLang === 'ru' ? 'г. Ташкент, Чиланзарский район, ул. Бунёдкор 12' : 
                 'Tashkent, Chilanzar district, Bunyodkor street 12'}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                {t('phone')}
              </h4>
              <p className="text-gray-400">+998 90 123 45 67</p>
              <p className="text-gray-400">+998 71 123 45 67</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 {t('restaurant_name')}. 
              {currentLang === 'uz' ? ' Barcha huquqlar himoyalangan.' : 
               currentLang === 'ru' ? ' Все права защищены.' : 
               ' All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}