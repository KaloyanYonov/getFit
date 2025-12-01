import { Link } from "react-router-dom";

export default function Bulk() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-16 text-center">
            
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fadeIn">
                Welcome to the Bulking Program!
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed animate-fadeIn">
                Bulking means consuming more calories than you burn to gain lean muscle mass.
                Combined with structured training, it helps ensure that weight gain comes 
                primarily from muscle rather than fat.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 max-w-2xl mb-12 shadow-lg animate-fadeIn">
                <h2 className="text-3xl font-semibold text-blue-700 mb-4">
                    The Strategy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    A calorie surplus gives your body the resources to build new muscle tissue.
                    A good bulking phase includes high-protein meals, progressive overload in the gym,
                    and proper recovery between sessions.
                </p>
            </div>

            <div className="max-w-3xl w-full animate-fadeIn">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                    Common Training Splits
                </h2>

                <ul className=" italic grid gap-6 sm:grid-cols-2 text-lg text-gray-700">
                    {[
                        { to: "/splits/ppl", label: "Push–Pull–Legs (PPL)", desc: "6 days/week — balanced split" },
                        { to: "/splits/bro", label: "Bro Split", desc: "5 days/week — 1 muscle per day" },
                        { to: "/splits/upperlower", label: "Upper–Lower", desc: "4 days/week — great for progression" },
                        { to: "/splits/wholebody", label: "Whole Body Split", desc: "3 days/week — ideal for beginners" }
                    ].map((item) => (
                        <li
                            key={item.to}
                            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <Link
                                to={item.to}
                                className="font-semibold text-blue-600 hover:underline block"
                                state={{program : "bulk"}}
                            >
                                {item.label}
                            </Link>
                            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-blue-100 border border-blue-200 rounded-2xl p-6 mt-12 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fadeIn">
                <p className="text-lg text-gray-700 mb-2">
                    Click below for our recommended bulking diet
                </p>
                <Link to="/diet" className="font-semibold text-blue-700 hover:underline text-xl">
                    View Diet →
                </Link>
            </div>
        </div>
    );
}
