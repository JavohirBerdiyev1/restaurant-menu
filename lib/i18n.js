// lib/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  uz: {
    translation: {
      "uzbek_food": "O'zbek taomlari",
      "european_food": "Yevropa taomlari",
      "bar": "Bar",
      "top_dishes": "Top taomlar",
      "address": "Manzil",
      "phone": "Telefon",
      "welcome": "Xush kelibsiz",
      "restaurant_name": "Milliy Ta'mlar",
      "soup": "Shurva",
      "main_course": "Asosiy taomlar",
      "dessert": "Shirinliklar",
      "beverages": "Ichimliklar",
      "add_to_cart": "Qo'shish",
      "som": "so'm"
    }
  },
  ru: {
    translation: {
      "uzbek_food": "Узбекская кухня",
      "european_food": "Европейская кухня",
      "bar": "Бар",
      "top_dishes": "Топ блюда",
      "address": "Адрес",
      "phone": "Телефон",
      "welcome": "Добро пожаловать",
      "restaurant_name": "Национальные блюда",
      "soup": "Суп",
      "main_course": "Основные блюда",
      "dessert": "Десерты",
      "beverages": "Напитки",
      "add_to_cart": "Добавить",
      "som": "сум"
    }
  },
  en: {
    translation: {
      "uzbek_food": "Uzbek Cuisine",
      "european_food": "European Cuisine",
      "bar": "Bar",
      "top_dishes": "Top Dishes",
      "address": "Address",
      "phone": "Phone",
      "welcome": "Welcome",
      "restaurant_name": "National Dishes",
      "soup": "Soup",
      "main_course": "Main Course",
      "dessert": "Dessert",
      "beverages": "Beverages",
      "add_to_cart": "Add to Cart",
      "som": "som"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n