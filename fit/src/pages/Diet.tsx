import { useState } from "react";
import { foodElements } from "../logic/foods";
import FoodItem from "../components/foodItem";


export default function Diet() {
    const [showVegan, setShowVegan] = useState(false);

    const visibleFoods = showVegan
        ? foodElements.filter((f) => f.isVegan)
        : foodElements;

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Diet Planner</h1>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={showVegan}
                        onChange={() => setShowVegan(!showVegan)}
                        className="w-4 h-4 accent-green-600"
                    />
                    <span className="text-gray-700 font-medium">Show vegan only</span>
                </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleFoods.map((f) => (
                    <FoodItem key={f.name} {...f} />
                ))}
            </div>
        </div>
    );
}
