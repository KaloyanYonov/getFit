import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm, getFitnessAdvice, getFitnessGoal } from "../logic/validation";
import SubmitButton from "../components/submitButton";
import type { FitnessGoal } from "../logic/validation";

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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Fitness Recommendation Form
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Enter your weight (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Enter your height (cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    />

                    <SubmitButton />
                </form>

                {error && (
                    <p className="text-red-600 text-center font-medium mt-4">{error}</p>
                )}
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 w-11/12 max-w-md text-center shadow-xl animate-fade-in">
                        <div className="mb-6">
                            <img
                                src={
                                    goal === "bulk"
                                        ? "https://bonytobeastly.com/wp-content/uploads/2020/11/how-to-lean-bulk-1-1024x584.jpg"
                                        : goal === "cut"
                                        ? "https://media.istockphoto.com/id/1351052872/vector/man-before-and-after-weight-loss.jpg?s=612x612&w=0&k=20&c=DYyOEhQOOm40H6aRabPO11Vq_j5NYiJZPLO_8u7dKkc="
                                        : "https://img.freepik.com/premium-vector/drawing-man-with-smile-his-face_1120554-4045.jpg"
                                }
                                alt="Fitness recommendation"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>

                        <p className="text-gray-800 font-semibold mb-6">{advice}</p>

                        <button
                            onClick={handleRedirect}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg 
                                       transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            View Suggested Plan
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
