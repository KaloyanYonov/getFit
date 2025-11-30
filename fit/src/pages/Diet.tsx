import { useState } from "react";
import { foodElements } from "../logic/foods";
import type { FoodCategory } from "../logic/foods";
import FoodItem from "../components/foodItem";
import RemoveButton from "../components/RemoveButton";

export default function Diet() {
  const [neededCalories, setNeededCalories] = useState<number>(0);
  const [neededProtein, setNeededProtein] = useState<number>(0);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [showVegan, setShowVegan] = useState(false);
  const [category, setCategory] = useState<FoodCategory | "all">("all");
  const [error, setError] = useState<string>("");

  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [desiredWeight, setDesiredWeight] = useState<string>("");
  const [calculated, setCalculated] = useState(false);

  const [currentCalories, setCalories] = useState<number>(0);
  const [currentProtein, setCurrentProtein] = useState<number>(0);
  const [selectedFoods, setSelectedFoods] = useState<
    { name: string; grams: number; calories: number; protein: number; carbs: number; fats: number }[]
  >([]);

  const filteredFoods = foodElements.filter((food) => {
    const veganMatch = showVegan ? food.isVegan : true;
    const categoryMatch = category === "all" ? true : food.category === category;
    return veganMatch && categoryMatch;
  });

  function handleAdd(name: string, protein: number, carbs: number, fats: number, calories: number) {
    const gramsStr = prompt(`How many grams of ${name}?`, "100");
    if (!gramsStr) return;

    const grams = Number(gramsStr);
    if (isNaN(grams) || grams <= 0) return alert("Enter a valid number!");

    const m = grams / 100;

    const newItem = {
      name,
      grams,
      protein: protein * m,
      carbs: carbs * m,
      fats: fats * m,
      calories: calories * m,
    };

    setSelectedFoods((prev) => [...prev, newItem]);
    setCalories((prev) => prev + newItem.calories);
    setCurrentProtein((prev) => prev + newItem.protein);
  }

  function handleRemove(index: number) {
    setSelectedFoods((prev) => {
      const target = prev[index];
      if (!target) return prev;

      setCalories((x) => x - target.calories);
      setCurrentProtein((x) => x - target.protein);
      return prev.filter((_, i) => i !== index);
    });
  }

  const groupedFoods = filteredFoods.reduce(
    (acc, food) => {
      if (!acc[food.category]) acc[food.category] = [];
      acc[food.category].push(food);
      return acc;
    },
    {} as Record<FoodCategory, typeof foodElements>
  );

  if (!gender) {
    return (
      <div className="min-h-screen animate-fadeIn flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Select Your Gender</h1>
        <div className="flex gap-6">
          <button
            onClick={() => setGender("male")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Male
          </button>
          <button
            onClick={() => setGender("female")}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold transition"
          >
            Female
          </button>
        </div>
      </div>
    );
  }

  if (!calculated) {
    return (
      <div className="min-h-screen animate-fadeIn flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Enter Your Stats</h1>

        <div className="bg-white/80 backdrop-blur-sm shadow-xl p-10 rounded-2xl w-full max-w-md space-y-6">
          <div>
            <label className="block text-gray-800 mb-1 font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1 font-medium">Current Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-1 font-medium">Desired Weight (kg)</label>
            <input
              type="number"
              value={desiredWeight}
              onChange={(e) => setDesiredWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            onClick={() => {
              if (!age || Number(age) <= 0) return setError("Invalid age");
              if (!height || Number(height) <= 0) return setError("Invalid height");
              if (!weight || Number(weight) <= 0) return setError("Invalid weight");
              if (!desiredWeight || Number(desiredWeight) <= 0) return setError("Invalid desired weight");
              if (desiredWeight <= weight) return setError("Desired weight must be greater.");

              setError("");

              const h = Number(height);
              const w = Number(weight);
              const a = Number(age);

              const BMR =
                gender === "male"
                  ? 10 * w + 6.25 * h - 5 * a + 5
                  : 10 * w + 6.25 * h - 5 * a - 161;

              setNeededCalories(Math.round(BMR + 500));
              setNeededProtein(Math.round(w * 1.9));
              setCalculated(true);
            }}
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Continue
          </button>

          {error && <p className="text-red-600 font-medium text-center">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fadeIn bg-gradient-to-b from-blue-50 to-white px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Your Calorie Goal</h1>
        <p className="text-lg text-gray-700">
          You need <b>{neededCalories}</b> kcal/day and <b>{neededProtein}</b>g protein to bulk from <b>{weight}</b> kg to{" "}
          <b>{desiredWeight}</b> kg.
        </p>
        <p className="mt-2 text-gray-500 italic">(Simple estimate with moderate surplus)</p>

        <div className="mt-8 text-xl font-bold text-gray-800">
          <p>Current calories: {currentCalories.toFixed(0)}</p>
          <p className="mt-2">Current protein: {currentProtein.toFixed(1)}g</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
        <h2 className="text-3xl font-bold text-gray-900">Diet Planner</h2>

        <div className="flex items-center gap-6">
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
            onChange={(e) => setCategory(e.target.value as FoodCategory | "all")}
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="all">All foods</option>
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

      {Object.entries(groupedFoods).map(([categoryName, items]) => (
        <div key={categoryName} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2 capitalize">{categoryName}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((food) => (
              <FoodItem
                key={food.name}
                {...food}
                addFood={() => handleAdd(food.name, food.protein, food.carbs, food.fats, food.calories)}
              />
            ))}
          </div>
        </div>
      ))}

      <p className="mt-20 text-center italic text-gray-600">All nutrition values shown are per 100g.</p>

      {selectedFoods.length > 0 && (
        <div className="mt-16 p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Your Current Diet</h3>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-3 px-3">Food</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Calories</th>
                <th className="py-3 px-3">Protein</th>
                <th className="py-3 px-3">Carbs</th>
                <th className="py-3 px-3">Fats</th>
                <th className="py-3 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedFoods.map((food, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-3">{food.name}</td>
                  <td className="py-3 px-3">{food.grams}g</td>
                  <td className="py-3 px-3">{food.calories.toFixed(0)}</td>
                  <td className="py-3 px-3">{food.protein.toFixed(1)}</td>
                  <td className="py-3 px-3">{food.carbs.toFixed(1)}</td>
                  <td className="py-3 px-3">{food.fats.toFixed(1)}</td>
                  <td className="py-3 px-3 text-center">
                    <RemoveButton onClick={() => handleRemove(index)} text="Remove" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
