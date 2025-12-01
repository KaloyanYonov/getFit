import ExerciseCard from "../../components/ExerciseCard";
import { useState } from "react";

export default function Cardio() {

    const [exercises, setExercises] = useState<string[]>([]);

    function addExercise(name: string) {
        setExercises((prev) => {
            if (prev.includes(name)) {
                alert("Exercise already added.");
                return prev;
            }
            return [...prev, name];
    });
}


    const cardioExercises = [
        {
            name: "Running",
            muscleGroup: "Full Body / Legs",
            image: "https://media.istockphoto.com/id/1927579923/vector/running-man-and-woman.jpg?s=612x612&w=0&k=20&c=Es2yPOVrEBSg88q2QnmB-m87ACt7QTHzxINrL-7-xFY=",
            description: "A simple and effective way to burn calories, improve endurance, and maintain cardiovascular health.",
        },
        {
            name: "Cycling",
            muscleGroup: "Legs / Glutes",
            image: "https://img.freepik.com/premium-vector/cycling-illustration_677179-131.jpg",
            description: "Low-impact cardio that increases stamina while being gentle on the joints.",
        },
        {
            name: "Rowing Machine",
            muscleGroup: "Back / Shoulders / Legs",
            image: "https://media.istockphoto.com/id/1372103491/vector/training-athletes-on-a-rowing-machine-in-the-gym.jpg?s=612x612&w=0&k=20&c=PLrDtG-ZGy0QLfvnkIEoi35eq_7n325ujoZ-Pz3zDsA=",
            description: "A full-body movement that trains both cardio and strength simultaneously.",
        },
        {
            name: "Stair Climber",
            muscleGroup: "Quads / Glutes / Calves",
            image: "https://thumbs.dreamstime.com/b/illustration-shows-man-working-out-stair-stepper-machine-indoors-promoting-fitness-healthy-lifestyle-activity-energetic-376352063.jpg",
            description: "A highly efficient fat-burning exercise that targets lower-body muscles.",
        },
        {
            name: "Elliptical Trainer",
            muscleGroup: "Full Body",
            image: "https://img.freepik.com/premium-vector/working-out-elliptical-trainer-illustration_80802-1752.jpg",
            description: "Smooth, low-impact cardio ideal for maintaining intensity without stressing the joints.",
        },
        {
            name: "Jump Rope",
            muscleGroup: "Calves / Shoulders",
            image: "https://liftmanual.com/wp-content/uploads/2023/04/jump-rope.jpg",
            description: "High-calorie burn in a short time, great for coordination and conditioning.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center text-center px-6 py-16 animate-fadeIn bg-gradient-to-b from-red-50 to-white">

            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                Cardio & Conditioning
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed">
                Cardio helps increase calorie burn, support fat loss, improve endurance,
                and strengthen your heart. Including 2–4 sessions per week in a cutting or
                general fitness program can dramatically improve your overall conditioning.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl p-8 max-w-2xl mb-12 shadow-lg">
                <h2 className="text-3xl font-semibold text-red-700 mb-4">
                    The Strategy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Effective cardio focuses on maintaining moderate intensity for
                    sustained periods of time. Whether you're cutting, improving conditioning,
                    or boosting endurance, choose activities that fit your style—and stay consistent.
                </p>
            </div>

            <div className="max-w-5xl w-full">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                    Cardio Exercises
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {cardioExercises.map((ex) => (
                        <ExerciseCard
                            key={ex.name}
                            name={ex.name}
                            muscleGroup={ex.muscleGroup}
                            image={ex.image}
                            description={ex.description}
                            category="legs"
                            addExercise={() => addExercise(ex.name)}
                        />
                    ))}
                    <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Selected Exercises
                        </h3>

                        {exercises.length === 0 ? (
                            <p className="text-gray-500 italic">No exercises added yet.</p>
                        ) : (
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {exercises.map((name) => (
                                    <li key={name}>{name}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
