import { Link } from "react-router-dom";

export default function Bulk() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                Welcome to the Bulking Program!
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mb-6 leading-relaxed">
                Bulking is the process of consuming more calories than you burn, allowing your
                body to gain muscle mass and strength over time. It’s best combined with
                structured weight training to ensure that the added weight comes primarily from
                muscle, not fat.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mb-10 shadow-sm">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">What is Bulking?</h2>
                <p className="text-gray-700 leading-relaxed">
                    In a calorie surplus, your body has enough nutrients to build new muscle
                    tissue. A well-planned bulking phase focuses on high-protein meals, progressive
                    overload in the gym, and adequate rest to recover between workouts.
                </p>
            </div>

            <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Common Training Splits
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 text-lg text-gray-700">
                    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                        <Link to="/splits/ppl" className="font-medium text-blue-600 hover:underline">
                            Push–Pull–Legs (PPL)
                        </Link>
                        <p className="text-sm text-gray-500">Train 6 days/week — balanced split</p>
                    </li>

                    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                        <Link to="/splits/bro" className="font-medium text-blue-600 hover:underline">
                            Bro Split
                        </Link>
                        <p className="text-sm text-gray-500">Classic 5-day split — 1 muscle per day</p>
                    </li>

                    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                        <Link to="/splits/upperlower" className="font-medium text-blue-600 hover:underline">
                            Upper–Lower
                        </Link>
                        <p className="text-sm text-gray-500">4 days/week — great for progression</p>
                    </li>

                    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                        <Link to="/splits/wholebody" className="font-medium text-blue-600 hover:underline">
                            Whole Body Split
                        </Link>
                        <p className="text-sm text-gray-500">3 days/week — ideal for beginners</p>
                    </li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 m-5 shadow hover:shadow-md transition">
                <p className="text-lg text-gray-500">Click below for ourrecommended diet for bulking</p>
                <Link to="/diet" className="font-medium text-blue-600 hover:underline">
                    Diet
                </Link>
            </div>
        </div>
    );
}
