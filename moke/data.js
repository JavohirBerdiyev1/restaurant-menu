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
  soup: [
    {
      id: 1,
      name: { uz: "Borsh", ru: "Борщ", en: "Borsch" },
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      price: 18000,
      description: { uz: "Klassik rus borshi", ru: "Классический русский борщ", en: "Classic Russian borsch" }
    },
    {
      id: 2,
      name: { uz: "Solyanka", ru: "Солянка", en: "Solyanka" },
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      price: 20000,
      description: { uz: "Go'sht bilan solyanka", ru: "Солянка с мясом", en: "Meat solyanka" }
    }
  ],
  main_course: [
    {
      id: 3,
      name: { uz: "Bifshteks", ru: "Бифштекс", en: "Beefsteak" },
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      price: 45000,
      description: { uz: "Yumshoq mol go'shti", ru: "Нежная говядина", en: "Tender beef" }
    },
    {
      id: 4,
      name: { uz: "Pasta Karbonara", ru: "Паста Карбонара", en: "Pasta Carbonara" },
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      price: 28000,
      description: { uz: "Klassik italyan pastasi", ru: "Классическая итальянская паста", en: "Classic Italian pasta" }
    },
    {
      id: 5,
      name: { uz: "Schnitzel", ru: "Шницель", en: "Schnitzel" },
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop",
      price: 35000,
      description: { uz: "Nemis uslubida schnitzel", ru: "Шницель по-немецки", en: "German-style schnitzel" }
    }
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
  ]
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
      name: { uz: "Shurva", ru: "Шурва", en: "Shurva" },
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      price: 15000,
      description: { uz: "An'anaviy o'zbek sho'rvasi", ru: "Традиционный узбекский суп", en: "Traditional Uzbek soup" }
    },
    {
      id: 2,
      name: { uz: "Mastava", ru: "Мастава", en: "Mastava" },
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      price: 18000,
      description: { uz: "Guruch va sabzavotli sho'rva", ru: "Суп с рисом и овощами", en: "Rice and vegetable soup" }
    }
  ],
  main_course: [
    {
      id: 3,
      name: { uz: "Plov", ru: "Плов", en: "Pilaf" },
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      price: 25000,
      description: { uz: "Klassik o'zbek plovi", ru: "Классический узбекский плов", en: "Classic Uzbek pilaf" }
    },
    {
      id: 4,
      name: { uz: "Lag'mon", ru: "Лагман", en: "Lagman" },
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      price: 20000,
      description: { uz: "Qo'l lag'moni", ru: "Ручной лагман", en: "Hand-pulled lagman" }
    },
    {
      id: 5,
      name: { uz: "Manti", ru: "Манты", en: "Manti" },
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
      price: 22000,
      description: { uz: "Bug'da pishgan manti", ru: "Манты на пару", en: "Steamed dumplings" }
    }
  ],
  dessert: [
    {
      id: 6,
      name: { uz: "Halva", ru: "Халва", en: "Halva" },
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      price: 12000,
      description: { uz: "An'anaviy o'zbek halvasi", ru: "Традиционная узбекская халва", en: "Traditional Uzbek halva" }
    }
  ]
}