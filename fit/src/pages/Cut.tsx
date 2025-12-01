import { Link } from "react-router-dom";

export default function Cut() {
  return (
    <div className="animate-fadeIn min-h-screen flex flex-col items-center px-6 py-16 justify-center text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fadeIn">
        Welcome to the Cutting Program!
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed animate-fadeIn">
        Cutting means eating slightly fewer calories than you burn in order to lose body fat
        while keeping your hard-earned muscle. With the right mix of nutrition, strength training,
        and smart cardio, cutting helps you achieve a leaner and more defined physique.
      </p>

      <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl p-8 max-w-2xl mb-12 shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">
          The Strategy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A small calorie deficit encourages your body to burn stored fat while preserving muscle.
          Effective cutting focuses on high-protein meals, consistent strength training,
          and light-to-moderate cardio to increase energy expenditure without risking muscle loss.
        </p>
      </div>

      <div className="max-w-3xl w-full animate-fadeIn">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Ideal Training Approaches
        </h2>

        <ul className="italic grid gap-6 sm:grid-cols-2 text-lg text-gray-700">
          {[
            { to: "/splits/ppl", label: "Push–Pull–Legs (PPL)", desc: "Great for maintaining strength" },
            { to: "/splits/upperlower", label: "Upper–Lower", desc: "Balanced recovery during deficit" },
            { to: "/splits/wholebody", label: "Full Body Workouts", desc: "Efficient & high-frequency stimulus" },
            { to: "/splits/cardio", label: "Cardio + Strength", desc: "Supports fat loss without overtraining" }
          ].map((item) => (
            <li
              key={item.to}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Link
                to={item.to}
                className="font-semibold text-red-600 hover:underline block"
              >
                {item.label}
              </Link>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-100 border border-red-200 rounded-2xl p-6 mt-12 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fadeIn">
        <p className="text-lg text-gray-700 mb-2">
          Click below for our recommended cutting diet
        </p>
        <Link to="/diet" className="font-semibold text-red-700 hover:underline text-xl">
          View Diet →
        </Link>
      </div>


    </div>
  );
}
