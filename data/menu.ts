export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  largePrice?: number;
  hasSizes?: boolean;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  shortName: string;
  count: number;
}

export const menuCategories: MenuCategory[] = [
  { id: "all", name: "All Selections", shortName: "All", count: 70 },
  { id: "appetizers", name: "Appetizers", shortName: "Appetizers", count: 5 },
  { id: "soups", name: "Soups", shortName: "Soups", count: 2 },
  { id: "pizzas", name: "Pizzas, Thin Crust & De Pan", shortName: "Pizzas", count: 5 },
  { id: "breakfast", name: "Breakfast", shortName: "Breakfast", count: 3 },
  { id: "pastas", name: "Pastas", shortName: "Pastas", count: 4 },
  { id: "paninis", name: "Paninis", shortName: "Paninis", count: 3 },
  { id: "sandwiches", name: "Sandwiches", shortName: "Sandwiches", count: 4 },
  { id: "burgers", name: "Burgers", shortName: "Burgers", count: 2 },
  { id: "wraps", name: "Wraps", shortName: "Wraps", count: 2 },
  { id: "poultry", name: "Poultry", shortName: "Poultry", count: 3 },
  { id: "chinese", name: "Chinese", shortName: "Chinese", count: 3 },
  { id: "fish", name: "Fish", shortName: "Fish", count: 1 },
  { id: "espresso", name: "Espresso Based", shortName: "Espresso", count: 8 },
  { id: "cold-coffee", name: "Cold Coffee", shortName: "Cold Coffee", count: 6 },
  { id: "frappes", name: "Frappés", shortName: "Frappés", count: 4 },
  { id: "shakes", name: "Shakes & Smoothies", shortName: "Shakes", count: 2 },
  { id: "hot-teas", name: "Hot Teas", shortName: "Hot Teas", count: 3 },
  { id: "mohitos", name: "Mohito's", shortName: "Mohito's", count: 4 },
  { id: "desserts", name: "Desserts", shortName: "Desserts", count: 4 },
  { id: "soft-drinks", name: "Soft Drinks", shortName: "Soft Drinks", count: 5 },
];

export const menuItems: MenuItem[] = [
  // APPETIZERS
  {
    id: "app-1",
    name: "Tendered Chicken Strips",
    category: "appetizers",
    price: 840,
  },
  {
    id: "app-2",
    name: "Chicken Quesadilla",
    category: "appetizers",
    price: 1295,
    featured: true,
  },
  {
    id: "app-3",
    name: "Spicy BBQ Wings",
    category: "appetizers",
    price: 680,
  },
  {
    id: "app-4",
    name: "Dynamite Chicken",
    category: "appetizers",
    price: 995,
  },
  {
    id: "app-5",
    name: "Fries Basket",
    category: "appetizers",
    price: 645,
  },

  // SOUPS
  {
    id: "soup-1",
    name: "Mushroom Cream Chicken Soup",
    category: "soups",
    price: 350,
  },
  {
    id: "soup-2",
    name: "Hot & Sour Soup",
    category: "soups",
    price: 370,
  },

  // PIZZAS, THIN CRUST & DE PAN
  {
    id: "pizza-1",
    name: "Special Chicken Pizza",
    category: "pizzas",
    price: 1250,
    featured: true,
  },
  {
    id: "pizza-2",
    name: "Chicken Tikka",
    category: "pizzas",
    price: 1040,
  },
  {
    id: "pizza-3",
    name: "Pepperoni",
    category: "pizzas",
    price: 1040,
  },
  {
    id: "pizza-4",
    name: "Special Kabab Pizza",
    category: "pizzas",
    price: 1290,
  },
  {
    id: "pizza-5",
    name: "Chicken Fajita Pizza",
    category: "pizzas",
    price: 1040,
  },

  // BREAKFAST
  {
    id: "bf-1",
    name: "Pakistani Omelette",
    category: "breakfast",
    price: 945,
  },
  {
    id: "bf-2",
    name: "English Breakfast",
    category: "breakfast",
    price: 1100,
    featured: true,
  },
  {
    id: "bf-3",
    name: "Cheese Croissant",
    category: "breakfast",
    price: 1050,
  },

  // PASTAS
  {
    id: "pasta-1",
    name: "Fettuccine Alfredo",
    category: "pastas",
    price: 1100,
    featured: true,
  },
  {
    id: "pasta-2",
    name: "Penne Arrabiata",
    category: "pastas",
    price: 1040,
  },
  {
    id: "pasta-3",
    name: "Mac & Cheese Pasta",
    category: "pastas",
    price: 980,
  },
  {
    id: "pasta-4",
    name: "Lasagna Pasta",
    category: "pastas",
    price: 980,
  },

  // PANINIS
  {
    id: "panini-1",
    name: "Smoked Chicken Paninis",
    category: "paninis",
    price: 1040,
  },
  {
    id: "panini-2",
    name: "Chicken Mushroom Paninis",
    category: "paninis",
    price: 1195,
  },
  {
    id: "panini-3",
    name: "Pesto Basil Chicken Paninis",
    category: "paninis",
    price: 1140,
    featured: true,
  },

  // SANDWICHES
  {
    id: "sand-1",
    name: "Club Sandwich",
    category: "sandwiches",
    price: 1180,
  },
  {
    id: "sand-2",
    name: "Grilled Sandwich",
    category: "sandwiches",
    price: 1210,
  },
  {
    id: "sand-3",
    name: "Mexican Sandwich",
    category: "sandwiches",
    price: 1240,
  },
  {
    id: "sand-4",
    name: "Open Face Sandwich",
    category: "sandwiches",
    price: 1240,
  },

  // BURGERS
  {
    id: "burger-1",
    name: "Mushroom Swiss Burger",
    category: "burgers",
    price: 895,
    featured: true,
  },
  {
    id: "burger-2",
    name: "Grilled Cheese Burger",
    category: "burgers",
    price: 800,
  },

  // WRAPS
  {
    id: "wrap-1",
    name: "Chicken Chipotle Wraps",
    category: "wraps",
    price: 750,
  },
  {
    id: "wrap-2",
    name: "Grilled Chicken Wraps",
    category: "wraps",
    price: 650,
  },

  // POULTRY
  {
    id: "poultry-1",
    name: "Moroccan Chicken",
    category: "poultry",
    price: 1130,
    featured: true,
  },
  {
    id: "poultry-2",
    name: "Grilled Chicken with Tarragon",
    category: "poultry",
    price: 1190,
  },
  {
    id: "poultry-3",
    name: "Mushroom Chicken",
    category: "poultry",
    price: 1190,
  },

  // CHINESE
  {
    id: "chinese-1",
    name: "Chicken Cashew Nut",
    category: "chinese",
    price: 1310,
  },
  {
    id: "chinese-2",
    name: "Chicken Chilli Dry",
    category: "chinese",
    price: 1100,
  },
  {
    id: "chinese-3",
    name: "Basil Chicken",
    category: "chinese",
    price: 1240,
  },

  // FISH
  {
    id: "fish-1",
    name: "Fish & Chips",
    category: "fish",
    price: 1295,
    featured: true,
  },

  // ESPRESSO BASED
  {
    id: "esp-1",
    name: "Espresso Single Shot",
    category: "espresso",
    price: 350,
    hasSizes: false,
  },
  {
    id: "esp-2",
    name: "Espresso Double Shot",
    category: "espresso",
    price: 450,
    hasSizes: false,
  },
  {
    id: "esp-3",
    name: "Cappuccino",
    category: "espresso",
    price: 490,
    largePrice: 590,
    hasSizes: true,
    featured: true,
  },
  {
    id: "esp-4",
    name: "Vanilla Latte",
    category: "espresso",
    price: 490,
    largePrice: 490,
    hasSizes: true,
  },
  {
    id: "esp-5",
    name: "Caramel Latte",
    category: "espresso",
    price: 490,
    largePrice: 590,
    hasSizes: true,
  },
  {
    id: "esp-6",
    name: "Hazelnut Latte",
    category: "espresso",
    price: 490,
    largePrice: 590,
    hasSizes: true,
  },
  {
    id: "esp-7",
    name: "Cafe Latte",
    category: "espresso",
    price: 490,
    largePrice: 590,
    hasSizes: true,
    featured: true,
  },
  {
    id: "esp-8",
    name: "Cafe Mocha",
    category: "espresso",
    price: 490,
    largePrice: 590,
    hasSizes: true,
  },

  // COLD COFFEE
  {
    id: "cold-1",
    name: "Vanilla Over Ice",
    category: "cold-coffee",
    price: 499,
  },
  {
    id: "cold-2",
    name: "Caramel Over Ice",
    category: "cold-coffee",
    price: 499,
  },
  {
    id: "cold-3",
    name: "Hazelnut Over Ice",
    category: "cold-coffee",
    price: 499,
  },
  {
    id: "cold-4",
    name: "Ammercino Over Ice",
    category: "cold-coffee",
    price: 499,
  },
  {
    id: "cold-5",
    name: "Spanish Over Ice",
    category: "cold-coffee",
    price: 499,
    featured: true,
  },
  {
    id: "cold-6",
    name: "Mocha Over Ice",
    category: "cold-coffee",
    price: 499,
  },

  // FRAPPÉS
  {
    id: "frappe-1",
    name: "Caramel Frappe",
    category: "frappes",
    price: 499,
    featured: true,
  },
  {
    id: "frappe-2",
    name: "Vanilla Frappe",
    category: "frappes",
    price: 499,
  },
  {
    id: "frappe-3",
    name: "Hazelnut Frappe",
    category: "frappes",
    price: 499,
  },
  {
    id: "frappe-4",
    name: "Mocha Frappe",
    category: "frappes",
    price: 499,
  },

  // SHAKES & SMOOTHIES
  {
    id: "shake-1",
    name: "Strawberry",
    category: "shakes",
    price: 450,
  },
  {
    id: "shake-2",
    name: "Banana",
    category: "shakes",
    price: 450,
  },

  // HOT TEAS
  {
    id: "tea-1",
    name: "Chamomile Tea",
    category: "hot-teas",
    price: 250,
  },
  {
    id: "tea-2",
    name: "Green Tea",
    category: "hot-teas",
    price: 250,
  },
  {
    id: "tea-3",
    name: "Lemon Grass Tea",
    category: "hot-teas",
    price: 250,
  },

  // MOHITO'S
  {
    id: "mohito-1",
    name: "Mint Margarita",
    category: "mohitos",
    price: 450,
    featured: true,
  },
  {
    id: "mohito-2",
    name: "Lost Friend",
    category: "mohitos",
    price: 450,
  },
  {
    id: "mohito-3",
    name: "Peach & Pine",
    category: "mohitos",
    price: 450,
  },
  {
    id: "mohito-4",
    name: "Strawberry Mimosa",
    category: "mohitos",
    price: 450,
  },

  // DESSERTS
  {
    id: "dessert-1",
    name: "Cheesecake Slice",
    category: "desserts",
    price: 550,
    featured: true,
  },
  {
    id: "dessert-2",
    name: "Carrot Cake Slice",
    category: "desserts",
    price: 450,
  },
  {
    id: "dessert-3",
    name: "Fudge Cake Slice",
    category: "desserts",
    price: 390,
  },
  {
    id: "dessert-4",
    name: "Brownie Chocolate",
    category: "desserts",
    price: 325,
  },

  // SOFT DRINKS
  {
    id: "drink-1",
    name: "7Up Zero",
    category: "soft-drinks",
    price: 150,
  },
  {
    id: "drink-2",
    name: "Pepsi",
    category: "soft-drinks",
    price: 150,
  },
  {
    id: "drink-3",
    name: "Fanta",
    category: "soft-drinks",
    price: 150,
  },
  {
    id: "drink-4",
    name: "Small Water",
    category: "soft-drinks",
    price: 80,
  },
  {
    id: "drink-5",
    name: "Large Water",
    category: "soft-drinks",
    price: 150,
  },
];
