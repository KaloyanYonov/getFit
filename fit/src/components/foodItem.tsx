import AddFoodButton from "./addFoodButton";

type FoodProps = {
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  image: string;
  isVegan?: boolean;
  category: string;
  addFood: (name: string, protein:number,carbs:number,fats:number,calories:number,image:string,
    category:string
  ) =>void;
};

export default function FoodItem({
  name,
  protein,
  carbs,
  fats,
  calories,
  image,
  isVegan,
  category,
  addFood
}: FoodProps) {
  return (
    <div className="relative bg-gray-100 rounded-xl shadow-md overflow-hidden w-full max-w-sm mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      {isVegan !== undefined && (
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-md ${
            isVegan ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {isVegan ? "Vegan" : "Non-Vegan"}
        </span>
      )}

      <img src={image} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-1 text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-3 italic">
          Category: <span className="font-medium">{category}</span>
        </p>

        <div className="flex flex-col gap-1 text-gray-700">
          <span><strong>Protein:</strong> {protein} g</span>
          <span><strong>Carbs:</strong> {carbs} g</span>
          <span><strong>Fats:</strong> {fats} g</span>
          <span><strong>Calories:</strong> {calories} kcal</span>
        </div>

        <AddFoodButton onClick={() => addFood(name,protein,carbs,fats,calories,image,category)} text="Add to diet"/>
        
      </div>
    </div>
  );
}
