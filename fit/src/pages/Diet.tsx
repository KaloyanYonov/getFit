import { useState } from "react";
import { foodElements } from "../logic/foods";
import FoodItem from "../components/foodItem";

export default function Diet() {
  const [showVegan, setShowVegan] = useState(false);
  const [category, setCategory] = useState("all");

  const filteredFoods = foodElements.filter((f) => {
    const veganMatch = showVegan ? f.isVegan : true;
    const categoryMatch = category === "all" ? true : f.category === category;
    return veganMatch && categoryMatch;
  });

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Diet Planner</h1>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showVegan}
              onChange={() => setShowVegan(!showVegan)}
              className="w-4 h-4 accent-green-600"
            />
            <span className="text-gray-700 font-medium">Vegan only</span>
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="all">All categories</option>
            <option value="meats">Meats</option>
            <option value="dairy">Dairy</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="nuts">Nuts</option>
            <option value="grains">Grains</option>
            <option value="legumes">Legumes</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFoods.map((f) => (
          <FoodItem key={f.name} {...f} />
        ))}
      </div>
    </div>
  );
}
