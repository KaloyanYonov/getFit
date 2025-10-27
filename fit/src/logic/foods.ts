export type FoodCategory =
  | "meats"
  | "dairy"
  | "fruits"
  | "vegetables"
  | "nuts"
  | "grains"
  | "legumes"

export type Food = {
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  image: string;
  isVegan: boolean;
  category: FoodCategory;
};

export const foodElements: Food[] = [
  {
    name: "Eggs",
    protein: 6,
    carbs: 10,
    fats: 15,
    calories: 30,
    image: "https://www.tasteofhome.com/wp-content/uploads/2025/01/Pressure-Cooker-Hard-Boiled-Eggs_EXPS_TOHD24_258639_ChristineMa_3.jpg",
    isVegan: false,
    category: "dairy",
  },
  {
    name: "Orange",
    protein: 0,
    carbs: 40,
    fats: 5,
    calories: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg",
    isVegan: true,
    category: "fruits",
  },
  {
    name: "Chicken Breast",
    protein: 31,
    carbs: 0,
    fats: 3.6,
    calories: 165,
    image: "https://www.allrecipes.com/thmb/4xpAgIpdeRXHnn3CFwvLrZI10u0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/260445easy-mediterranean-baked-chicken-breastKimvideo4x3-6fc05b993afe4da5846bdc13a9861844.jpg",
    isVegan: false,
    category: "meats",
  },
  {
    name: "Broccoli",
    protein: 3,
    carbs: 7,
    fats: 0,
    calories: 35,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCF-tHnjvbNbE-4F74XT4JrRaxY6-C_SGPGg&s",
    isVegan: true,
    category: "vegetables",
  },
  {
    name: "Almonds",
    protein: 21,
    carbs: 22,
    fats: 49,
    calories: 579,
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg",
    isVegan: true,
    category: "nuts",
  },
  {
    name: "Rice",
    protein: 2.7,
    carbs: 28,
    fats: 0.3,
    calories: 130,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
    isVegan: true,
    category: "grains",
  },
  {
    name: "Lentils",
    protein: 9,
    carbs: 20,
    fats: 0.4,
    calories: 116,
    image: "https://www.themediterraneandish.com/wp-content/uploads/2024/10/TMD-How-To-Cook-Lentils-Leads-02.jpg",
    isVegan: true,
    category: "legumes",
  },
  {
    name: "Raspberry",
    protein: 1.2,
    carbs: 12,
    fats: 0.7,
    calories: 52,
    image: "https://aroma.bg/wp-content/uploads/2019/10/shutterstock_59196439.jpg",
    isVegan: true,
    category: "fruits", 

  },
  {
    name: "Blueberry",
    protein : 1,
    carbs : 14,
    fats : 0.3,
    calories : 57,
    image : "https://www.bbassets.com/media/uploads/p/l/30009286_13-fresho-blueberry.jpg",
    isVegan: true,
    category: "fruits",
  },
  {
    name: "Blackberry",
    protein : 1.4,
    carbs : 9.6,
    fats : 0.5,
    calories : 43,
    image : "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/black-raspberries-1296x728-header.jpg?w=1155&h=1528",
    isVegan: true,
    category: "fruits",
  },
  {
    name: "Banana",
    protein : 1.1,
    carbs : 23,
    fats : 0.3,
    calories : 89,
    image : "https://images.everydayhealth.com/images/diet-nutrition/bananas-nutrition-facts-1440x810.jpg?w=508",
    isVegan: true,
    category: "fruits",
  },
  {
    name: "White Cheese",
    protein : 20,
    carbs : 1.5,
    fats : 20,
    calories: 270,
    image : "https://www.arditairko.lt/uploads/images/catalog_src/white-cheese-types_src_1.jpg",
    isVegan: false,
    category: "dairy",
  },
];
