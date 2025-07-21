export const barItems = {
  beverages: [
    {
      id: 1,
      name: { uz: "Fresh apelsin", ru: "Свежий апельсин", en: "Fresh Orange" },
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop",
      price: 12000,
      description: { uz: "Yangi siqilgan apelsin sharbati", ru: "Свежевыжатый апельсиновый сок", en: "Freshly squeezed orange juice" }
    },
    {
      id: 2,
      name: { uz: "Mojito", ru: "Мохито", en: "Mojito" },
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop",
      price: 25000,
      description: { uz: "Klassik mojito kokteyli", ru: "Классический коктейль мохито", en: "Classic mojito cocktail" }
    },
    {
      id: 3,
      name: { uz: "Kofe Latte", ru: "Кофе Латте", en: "Coffee Latte" },
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
      price: 15000,
      description: { uz: "Kremli kofe latte", ru: "Кремовый кофе латте", en: "Creamy coffee latte" }
    }
  ],
  alcoholic: [
    {
      id: 4,
      name: { uz: "Vino (qizil)", ru: "Вино (красное)", en: "Wine (Red)" },
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop",
      price: 45000,
      description: { uz: "Sifatli qizil vino", ru: "Качественное красное вино", en: "Quality red wine" }
    },
    {
      id: 5,
      name: { uz: "Pivo", ru: "Пиво", en: "Beer" },
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop",
      price: 18000,
      description: { uz: "Sovuq pivo", ru: "Холодное пиво", en: "Cold beer" }
    }
  ]
}


// Mock data for European dishes
export const europeanDishes = {
  main_course: [
    { id: 111, name: { uz: 'Pasta Alfredo', ru: 'Паста Альфредо', en: 'Pasta Alfredo' }, image: '/food/паста альфредо..jpg', price: 0, description: { uz: 'Fettuchini, tovuq, qaymoq', ru: 'Феттучини с курицей', en: 'Fettuccine with chicken' } },
    { id: 112, name: { uz: 'Steyk Ribay', ru: 'Стейк рибай', en: 'Rib‑eye Steak' }, image: '/food/стейк рибай (2)..jpg', price: 0, description: { uz: 'Rib‑eye, rozmarin', ru: 'Рибай с розмарином', en: 'Rib‑eye with rosemary' } },
    { id: 113, name: { uz: 'Steyk Burger', ru: 'Стейк бургер', en: 'Steak Burger' }, image: '/food/стейк бургер..jpg', price: 0, description: { uz: 'Biftekli burger', ru: 'Бургер со стейком', en: 'Burger with steak patty' } },
    { id: 114, name: { uz: 'Govyaji Burger', ru: 'Классический говяжий бургер', en: 'Classic Beef Burger' }, image: '/food/Классический говяжий бургер (3)..jpg', price: 0, description: { uz: 'Kotleta, sous spayси', ru: 'Котлета, соус', en: 'Patty, spicy sauce' } },
    { id: 115, name: { uz: 'Medalyon', ru: 'Медальоны из бон филе', en: 'Beef Medallions' }, image: '/food/медальоны из бон филе..jpg', price: 0, description: { uz: 'Mol medalyon, qo‘ziqorin', ru: 'Говядина с грибами', en: 'Beef with mushrooms' } }
  ],

  grill: [
    { id: 121, name: { uz: 'BBQ Qanotchalar', ru: 'Крылышки BBQ', en: 'BBQ Wings' }, image: '/food/Крылышки BBQ ..jpg', price: 0, description: { uz: 'Qanotchalar, BBQ sous', ru: 'Крылышки, соус BBQ', en: 'Wings with BBQ sauce' } },
    { id: 122, name: { uz: 'Mol Kolbasa Gril', ru: 'Говяжий колбаски на гриле', en: 'Beef Sausages' }, image: '/food/говяжий колбаски на гриле..jpg', price: 0, description: { uz: 'Mol kolbasa, karam', ru: 'Колбаски, капуста', en: 'Sausages with cabbage' } },
    { id: 123, name: { uz: 'Tovuq Kolbasa Gril', ru: 'Куриные колбаски на гриле', en: 'Chicken Sausages' }, image: '/food/куриные колбаски на гриле (3)..jpg', price: 0, description: { uz: 'Tovuq kolbasa, karam', ru: 'Куриные колбаски, капуста', en: 'Chicken sausages' } }
  ],

  seafood: [
    { id: 131, name: { uz: 'Krevetka klyarda', ru: 'Креветки в кляре', en: 'Battered Shrimps' }, image: '/food/креветки в кляре..jpg', price: 0, description: { uz: 'Qovurilgan krevetka', ru: 'Жареные креветки', en: 'Fried shrimps' } },
    { id: 132, name: { uz: 'Pivo‑Krevetka', ru: 'Пивное креветки', en: 'Beer Shrimps' }, image: '/food/пивное креветки (3)..jpg', price: 0, description: { uz: 'Krevetka, limon', ru: 'Креветки с лимоном', en: 'Shrimps with lemon' } },
    { id: 133, name: { uz: 'Baliq Assorti', ru: 'Рыбное ассорти', en: 'Fish Assortment' }, image: '/food/Рыбное ассорти..jpg', price: 0, description: { uz: 'Dudlangan baliq to‘plami', ru: 'Набор копчёной рыбы', en: 'Smoked fish mix' } }
  ],

  salad: [
    { id: 141, name: { uz: 'Рулет баклажан', ru: 'Рулет баклажан', en: 'Eggplant Roll' }, image: '/food/рулет баклажан (2)..jpg', price: 0, description: { uz: 'Bodring, pishloq', ru: 'Баклажан, сыр', en: 'Eggplant & cheese' } },
    { id: 142, name: { uz: 'Хрустящие баклажаны', ru: 'Хрустящие баклажаны', en: 'Crispy Eggplant' }, image: '/food/хрустящие баклажаны..jpg', price: 0, description: { uz: 'Qarsildoq baklajon', ru: 'Хрустящий баклажан', en: 'Crispy eggplant' } },
    { id: 143, name: { uz: 'Наргиле', ru: 'Наргиле', en: 'Nargile Salad' }, image: '/food/Наргиле (2)..jpg', price: 0, description: { uz: 'Bon filet, rukola', ru: 'Бон филе, руккола', en: 'Beef fillet, arugula' } }
  ],

  nuts: [
    {
      id: 210,
      name: { uz: "Соленый орех", ru: "Соленый орех", en: "Salted Nuts" },
      image: "/food/соленый орех..jpg",
      description: {
        uz: "Bodom, keshyu, findiq va yer yong‘oqi",
        ru: "Миндаль, кешью, фундук, арахис",
        en: "Almonds, cashews, hazelnuts, peanuts"
      }
    },
    {
      id: 211,
      name: { uz: "Чупчима от Шефа", ru: "Чупчима от Шефа", en: "Chef’s Chupchima" },
      image: "/food/Чупчима от Шефа..jpg",
      description: {
        uz: "Maxsus ziravorli qo‘y go‘shti",
        ru: "Баранина с фирменными специями",
        en: "Lamb with chef’s signature spices"
      }
    },{ id: 151, name: { uz: 'Suzma', ru: 'Сузма', en: 'Suzma' }, image: '/food/Сузма..jpg', price: 0, description: { uz: 'Qo‘y suti suzmasi', ru: 'Сузма из овечьего молока', en: 'Fermented milk dip' },
  },
  { id: 152, name: { uz: 'Сулугуни', ru: 'Сулугуни', en: 'Suluguni' }, image: '/food/Сулугуни ..jpg', price: 0, description: { uz: 'Qattiq pishloq', ru: 'Грузинский сыр', en: 'Georgian cheese' } },

  ],
  dessert: [
    
    {
      id: 6,
      name: { uz: "Tiramisu", ru: "Тирамису", en: "Tiramisu" },
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      price: 25000,
      description: { uz: "Klassik italyan tiramisu", ru: "Классический итальянский тирамису", en: "Classic Italian tiramisu" }
    },
    {
      id: 7,
      name: { uz: "Cheesecake", ru: "Чизкейк", en: "Cheesecake" },
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
      price: 22000,
      description: { uz: "Kremli cheesecake", ru: "Кремовый чизкейк", en: "Creamy cheesecake" }
    }
  ],
}

export const topDishes = [
  {
    id: 1,
    name: { uz: "Plov", ru: "Плов", en: "Pilaf" },
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=300&fit=crop",
    price: 25000,
    rating: 4.9,
    description: { uz: "An'anaviy o'zbek plovi", ru: "Традиционный узбекский плов", en: "Traditional Uzbek pilaf" }
  },
  {
    id: 2,
    name: { uz: "Shashlik", ru: "Шашлык", en: "Shashlik" },
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&h=300&fit=crop",
    price: 35000,
    rating: 4.8,
    description: { uz: "Mazali go'sht shashlik", ru: "Вкусный мясной шашлык", en: "Delicious meat shashlik" }
  },
  {
    id: 3,
    name: { uz: "Lag'mon", ru: "Лагман", en: "Lagman" },
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop",
    price: 18000,
    rating: 4.7,
    description: { uz: "Issiq lag'mon sho'rva", ru: "Горячий лагман суп", en: "Hot lagman soup" }
  },
  {
    id: 4,
    name: { uz: "Manti", ru: "Манты", en: "Manti" },
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&h=300&fit=crop",
    price: 22000,
    rating: 4.6,
    description: { uz: "Bug'da pishgan manti", ru: "Манты на пару", en: "Steamed manti" }
  }
]

export const uzbekDishes = {
  soup: [
    {
      id: 1,
      name: { uz: 'Мастава', ru: 'Мастава', en: 'Mastava' },
      image: '/food/мастава (2)..jpg',
      price: 0,
      description: { uz: 'Guruchli sho‘rva, suzma bilan', ru: 'Суп с рисом и сузмой', en: 'Rice soup, served with suzma' }
    },
    {
      id: 2,
      name: { uz: 'Шурпа (mol)', ru: 'Шурпа из говядины', en: 'Beef Shurpa' },
      image: '/food/Шурпа из говядины (2)..jpg',
      price: 0,
      description: { uz: 'Mol go‘shti va sabzavotli sho‘rva', ru: 'Говяжий суп с овощами', en: 'Beef & vegetable soup' }
    },
    {
      id: 3,
      name: { uz: 'Шурпа (qo‘y)', ru: 'Шурпа баранина', en: 'Lamb Shurpa' },
      image: '/food/шурпа баранина..jpg',
      price: 0,
      description: { uz: 'Qo‘y go‘shti sho‘rvasi', ru: 'Бараний суп', en: 'Lamb soup' }
    }
  ],

  main_course: [
    {
      id: 4,
      name: { uz: 'Лагман', ru: 'Лагман', en: 'Lagman' },
      image: '/food/лагман (2)..jpg',
      price: 0,
      description: { uz: 'Qo‘l lagman, mol go‘shti', ru: 'Домашний лагман с говядиной', en: 'Hand‑pulled noodles with beef' }
    },
    {
      id: 5,
      name: { uz: 'Казан кебаб', ru: 'Казан кебаб', en: 'Kazan Kebab' },
      image: '/food/казан кебаб (2)..jpg',
      price: 0,
      description: { uz: 'Mol go‘shti, kartoshka', ru: 'Говядина с картофелем', en: 'Beef & potatoes' }
    },
    {
      id: 6,
      name: { uz: 'Туй кебаб', ru: 'Туй кебаб', en: 'Tuy Kebab' },
      image: '/food/Туй кебаб  (2)..jpg',
      price: 0,
      description: { uz: 'Bayramona kebab', ru: 'Праздничный кебаб', en: 'Festive kebab' }
    },
    {
      id: 7,
      name: { uz: 'Афганский жиз', ru: 'Афганский жиз', en: 'Afghan Zhiz' },
      image: '/food/Афганский жиз..jpg',
      price: 0,
      description: { uz: 'Mol go‘shti, piyoz, sariyog‘', ru: 'Говядина, лук, сливочное масло', en: 'Beef, onion, butter' }
    },
    {
      id: 8,
      name: { uz: 'Тушенка из говядины', ru: 'Тушенка из говядины', en: 'Beef Stew‑Jar', },
      image: '/food/тушенка из говядины (2)..jpg',
      price: 0,
      description: { uz: 'Konserva usuli, ziravorlar', ru: 'Консервы со специями', en: 'Canned beef with spices' }
    }
  ],

  salad: [
    { id: 21, name: { uz: 'Ачичук', ru: 'Ачичук', en: 'Achik‑chuchuk' }, image: '/food/Ачичук (Ачик-чучук) (3)..jpg', price: 0, description: { uz: 'Pomidor, bodring, piyoz', ru: 'Томаты, огурцы, лук', en: 'Tomato, cucumber, onion' } },
    { id: 22, name: { uz: 'Чирокчи', ru: 'Чирокчи', en: 'Chirokchi' }, image: '/food/чирокчи  (3)..jpg', price: 0, description: { uz: 'Pomidor, suzma, ko‘kat', ru: 'Томаты, сузма, зелень', en: 'Tomato, suzma, herbs' } },
    { id: 23, name: { uz: 'Мужской каприз', ru: 'Мужской каприз', en: 'Man’s Caprice' }, image: '/food/мужской каприз (2)..jpg', price: 0, description: { uz: 'Kazy, kolbasa, tuxum', ru: 'Казы, колбаса, яйца', en: 'Horse sausage, sausage, eggs' } },
    { id: 24, name: { uz: 'Салат Японский', ru: 'Салат японский', en: 'Japanese Salad' }, image: '/food/салат японский (2)..jpg', price: 0, description: { uz: 'Bodring, pomidor, go‘sht', ru: 'Огурцы, томаты, говядина', en: 'Cucumber, tomato, beef' } },
    { id: 25, name: { uz: 'Салат Весенний', ru: 'Салат весенний', en: 'Spring Salad' }, image: '/food/салат весенний (2)..jpg', price: 0, description: { uz: 'Bodring, ko‘kat, kefir', ru: 'Огурец, зелень, кефир', en: 'Cucumber, greens, kefir' } },
    { id: 26, name: { uz: 'Салат Оливье', ru: 'Салат Оливье', en: 'Olivier' }, image: '/food/салат оливье (2)..jpg', price: 0, description: { uz: 'Kartoshka, tuxum, mayonez', ru: 'Картофель, яйцо, майонез', en: 'Potato, egg, mayo' } },
    { id: 27, name: { uz: 'Салат Често', ru: 'Салат Често', en: 'Chesto' }, image: '/food/салат често (2)..jpg', price: 0, description: { uz: 'Tovuq, pomidor, suhri', ru: 'Курица, томат, сухари', en: 'Chicken, tomato, croutons' } },
    { id: 28, name: { uz: 'Салат Греческий', ru: 'Салат Греческий', en: 'Greek Salad' }, image: '/food/Салат Греческий (3)..jpg', price: 0, description: { uz: 'Aysberg, bodring, feta', ru: 'Айсберг, огурцы, фета', en: 'Iceberg, cucumber, feta' } },
    { id: 29, name: { uz: 'Салат свежий', ru: 'Свежий', en: 'Fresh Veg' }, image: '/food/свежий (2)..jpg', price: 0, description: { uz: 'Pomidor, bodring, ko‘kat', ru: 'Томаты, огурцы, зелень', en: 'Tomato, cucumber, herbs' } },
    ,{ id: 151, name: { uz: 'Suzma', ru: 'Сузма', en: 'Suzma' }, image: '/food/Сузма..jpg', price: 0, description: { uz: 'Qo‘y suti suzmasi', ru: 'Сузма из овечьего молока', en: 'Fermented milk dip' },
  },
  { id: 152, name: { uz: 'Сулугуни', ru: 'Сулугуни', en: 'Suluguni' }, image: '/food/Сулугуни ..jpg', price: 0, description: { uz: 'Qattiq pishloq', ru: 'Грузинский сыр', en: 'Georgian cheese' } },
  ],

  nuts: [
    {
      id: 41,
      name: { uz: 'Соленый орех', ru: 'Соленый орех', en: 'Salted Nuts' },
      image: '/food/соленый орех..jpg',
      price: 0,
      description: { uz: 'Bodom, keshyu, findiq, yer yong‘oq', ru: 'Миндаль, кешью, фундук, арахис', en: 'Almond, cashew, hazelnut, peanut' }
    }
  ],

  dessert: [
    {
      id: 6,
      name: { uz: "Halva", ru: "Халва", en: "Halva" },
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      price: 12000,
      description: { uz: "An'anaviy o'zbek halvasi", ru: "Традиционная узбекская халва", en: "Traditional Uzbek halva" }
    },
    {
      id: 12,
      name: { uz: "Shurva", ru: "Шурва", en: "Shurva" },
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      price: 15000,
      description: { uz: "An'anaviy o'zbek sho'rvasi", ru: "Традиционный узбекский суп", en: "Traditional Uzbek soup" }
    },
    {
      id: 32,
      name: { uz: "Mastava", ru: "Мастава", en: "Mastava" },
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      price: 18000,
      description: { uz: "Guruch va sabzavotli sho'rva", ru: "Суп с рисом и овощами", en: "Rice and vegetable soup" }
    },
    {
      id: 32,
      name: { uz: "Plov", ru: "Плов", en: "Pilaf" },
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      price: 25000,
      description: { uz: "Klassik o'zbek plovi", ru: "Классический узбекский плов", en: "Classic Uzbek pilaf" }
    },
    {
      id: 42,
      name: { uz: "Lag'mon", ru: "Лагман", en: "Lagman" },
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      price: 20000,
      description: { uz: "Qo'l lag'moni", ru: "Ручной лагман", en: "Hand-pulled lagman" }
    },
    {
      id: 52,
      name: { uz: "Manti", ru: "Манты", en: "Manti" },
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
      price: 22000,
      description: { uz: "Bug'da pishgan manti", ru: "Манты на пару", en: "Steamed dumplings" }
    },
    {
      id: 58,
      name: { uz: "Manti", ru: "Манты", en: "Manti" },
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
      price: 22000,
      description: { uz: "Bug'da pishgan manti", ru: "Манты на пару", en: "Steamed dumplings" }
    },
  ]
}