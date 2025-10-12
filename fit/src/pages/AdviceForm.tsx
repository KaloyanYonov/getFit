import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm, getFitnessAdvice, getFitnessGoal} from "../logic/validation";
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
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <SubmitButton />
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            padding: "30px",
                            textAlign: "center",
                            width: "300px",
                            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                        }}
                    >
                        <img
                            src={
                                goal === "bulk"
                                    ? "/images/bulk.png"
                                    : goal === "cut"
                                    ? "/images/cut.png"
                                    : "/images/maintain.png"
                            }
                            alt="Fitness advice"
                            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
                        />
                        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{advice}</p>
                        <button
                            onClick={handleRedirect}
                            style={{
                                backgroundColor: "#007BFF",
                                color: "#fff",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "8px",
                                cursor: "pointer",
                            }}
                        >
                            View Suggested Plan
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
