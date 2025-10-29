import { useState } from "react";
import { foodElements } from "../logic/foods";
import type { FoodCategory } from "../logic/foods";
import FoodItem from "../components/foodItem";
import RemoveButton from "../components/RemoveButton";

export default function Diet() {
  const [neededCalories, setNeededCalories] = useState<number>(0);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [showVegan, setShowVegan] = useState(false);
  const [category, setCategory] = useState<FoodCategory | "all">("all");
  const [error, setError] = useState<string>("");

  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [desiredWeight, setDesiredWeight] = useState<string>("");
  const [calculated, setCalculated] = useState(false);


  // TODO: Add food item button and create calorie tracker (and other nutrients probably)
  const [currentCalories, setCalories] = useState<number>(0);
  const [selectedFoods, setSelectedFoods] = useState<
    { name: string; grams: number; calories: number; protein: number; carbs: number; fats: number }[]
  >([]);


  const filteredFoods = foodElements.filter((food) => {
    const veganMatch = showVegan ? food.isVegan : true;
    const categoryMatch = category === "all" ? true : food.category === category;
    return veganMatch && categoryMatch;
  });

  function handleAdd(name: string, protein: number, carbs: number, fats: number, calories: number) {
    const gramsStr = prompt(`How many grams of ${name} do you want to add?`, "100");
    if (!gramsStr) return;

    const grams = Number(gramsStr);
    if (isNaN(grams) || grams <= 0) return alert("Please enter a valid number!");

    const multiplier = grams / 100;

    const newItem = {
      name,
      grams,
      protein: protein * multiplier,
      carbs: carbs * multiplier,
      fats: fats * multiplier,
      calories: calories * multiplier,
    };

    setSelectedFoods((prev) => [...prev, newItem]);
    setCalories((prev) => prev + newItem.calories);
  }

  function handleRemove(index: number) {
    setSelectedFoods((prev) => {
      const foodToRemove = prev[index];
      if (!foodToRemove) return prev;

      setCalories((cals) => cals - foodToRemove.calories);
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
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Select Your Gender</h1>
        <div className="flex gap-6">
          <button
            onClick={() => setGender("male")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Male
          </button>
          <button
            onClick={() => setGender("female")}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            Female
          </button>
        </div>
      </div>
    );
  }


  if (!calculated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Enter Your Stats</h1>
        <div className="bg-white shadow-md p-8 rounded-xl w-full max-w-md space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 rounded-md w-full px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 rounded-md w-full px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Current Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 rounded-md w-full px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Desired Weight (kg)</label>
            <input
              type="number"
              value={desiredWeight}
              onChange={(e) => setDesiredWeight(e.target.value)}
              className="border border-gray-300 rounded-md w-full px-3 py-2"
            />
          </div>

          <button
            onClick={() => {
              if (!age || Number(age) < 0) {
                setError("Please enter a valid age");
                return;
              }
              if (!height || Number(height) < 0) {
                setError("Please enter a valid height");
                return;
              }
              if (!weight || Number(weight) < 0) {
                setError("Please enter a valid weight");
                return;
              }
              if (!desiredWeight || Number(desiredWeight) < 0) {
                setError("Please enter a valid desired weight");
                return;
              }
              if (desiredWeight <= weight) {
                setError("Desired weight must be greater than current weight for bulking.");
                return;
              }

              setError("");

              const h = Number(height);
              const w = Number(weight);
              const a = Number(age);

              const BMR =
                gender === "male"
                  ? 10 * w + 6.25 * h - 5 * a + 5
                  : 10 * w + 6.25 * h - 5 * a - 161;

              const bulkingCalories = BMR + 500;
              setNeededCalories(Math.round(bulkingCalories));
              setCalculated(true);
            }}
            className="mt-4 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Calculate Calories
          </button>

          {error && (
            <p className="text-red-600 text-sm font-medium mt-3">{error}</p>
          )}
        </div>
      </div>
    );
  }

  return (

    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Calorie Goal</h1>
        <p className="text-lg text-gray-700">
          You need approximately <b>{neededCalories}</b> kcal/day to bulk from{" "}
          <b>{weight}</b> kg to <b>{desiredWeight}</b> kg.
        </p>
        <p className="text-sm italic text-gray-500 mt-2">
          (This is a simple estimation assuming a moderate surplus.)
        </p>
        <p className="text-lg font-bold pt-10">Current calories: {currentCalories}</p>
      </div>

      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Diet Planner</h2>

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
            onChange={(e) => setCategory(e.target.value as FoodCategory | "all")}
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

      {Object.entries(groupedFoods).map(([categoryName, items]) => (
        <div key={categoryName} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 capitalize border-b pb-2 border-gray-300">
            {categoryName}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((f) => (
              <FoodItem key={f.name} {...f}
                addFood={() => handleAdd(f.name, f.protein, f.carbs, f.fats, f.calories)} />
            ))}
          </div>
        </div>
      ))}

      <p className="flex items-center justify-center mt-20 italic">
        All nutrition values are for 100g portions.
      </p>
      {selectedFoods.length > 0 && (
        <div className="mt-12 border bg-linear-90 from-purple-400 to-gray-500 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Your Current Diet</h3>
          <table className="w-full text-left bg-linear-90 from-purple-300 to-gray-400 border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3">Food</th>
                <th className="py-2 px-3">Amount (g)</th>
                <th className="py-2 px-3">Calories</th>
                <th className="py-2 px-3">Protein</th>
                <th className="py-2 px-3">Carbs</th>
                <th className="py-2 px-3">Fats</th>
                <th className="py-2 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedFoods.map((food, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">{food.name}</td>
                  <td className="py-2 px-3">{food.grams}</td>
                  <td className="py-2 px-3">{food.calories.toFixed(0)}</td>
                  <td className="py-2 px-3">{food.protein.toFixed(1)}</td>
                  <td className="py-2 px-3">{food.carbs.toFixed(1)}</td>
                  <td className="py-2 px-3">{food.fats.toFixed(1)}</td>
                  <td className="py-2 px-3 text-center">
                    <RemoveButton
                      onClick={() => handleRemove(index)}
                      text="Remove"
                    />
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
