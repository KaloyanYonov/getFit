import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm, getFitnessAdvice, getFitnessGoal } from "../logic/validation";
import SubmitButton from "../components/submitButton";
import type { FitnessGoal } from "../logic/validation";
import ClearButton from "../components/clearButton";

export default function AdviceForm() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [advice, setAdvice] = useState<string | null>(null);
    const [goal, setGoal] = useState<FitnessGoal | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const validationError = validateForm(weight, height, age);
        if (validationError) {
            setError(validationError);
            setAdvice(null);
            setShowPopup(false);
            return;
        }

        setError(null);
        const result = getFitnessAdvice(Number(weight), Number(height));
        const goalType = getFitnessGoal(Number(weight), Number(height));

        setAdvice(result);
        setGoal(goalType);
        setShowPopup(true);
    }

    function handleRedirect() {
        if (goal === "bulk") navigate("/bulk");
        else if (goal === "cut") navigate("/cut");
        else navigate("/");
    }

    function handleClear() {
        setWeight("");
        setHeight("");
        setAge("");
       setAdvice(null);
        setGoal(null);
        setError(null);
        setShowPopup(false);
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6 py-12">
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-10 w-full max-w-md animate-fadeIn">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
                    Fitness Recommendation Form
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Enter your weight (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Enter your height (cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />

                    <SubmitButton />
                    <ClearButton onClick={handleClear} />
                </form>

                {error && (
                    <p className="text-red-600 text-center font-semibold mt-4">{error}</p>
                )}
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-8 w-11/12 max-w-md text-center shadow-2xl">
                        <img
                            src={
                                goal === "bulk"
                                    ? "https://bonytobeastly.com/wp-content/uploads/2020/11/how-to-lean-bulk-1-1024x584.jpg"
                                    : goal === "cut"
                                    ? "https://media.istockphoto.com/id/1351052872/vector/man-before-and-after-weight-loss.jpg?s=612x612&w=0&k=20&c=DYyOEhQOOm40H6aRabPO11Vq_j5NYiJZPLO_8u7dKkc="
                                    : "https://img.freepik.com/premium-vector/drawing-man-with-smile-his-face_1120554-4045.jpg"
                            }
                            alt="Fitness recommendation"
                            className="w-full h-48 object-cover rounded-xl mb-6"
                        />

                        <p className="text-gray-800 font-medium mb-6 px-2">
                            {advice}
                        </p>

                        <button
                            onClick={handleRedirect}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            View Suggested Plan
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
