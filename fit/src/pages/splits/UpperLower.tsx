import { useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import { allExercises } from "../../logic/exercises";
import Calendar from "../../components/Calendar";
import { useLocation } from "react-router-dom";

export default function UpperLower() {
    const [upperList, setUpperList] = useState<string[]>([]);
    const [lowerList, setLowerList] = useState<string[]>([]);


    const location = useLocation();
    const program = location.state?.program || "bulk";

    const bgClass = program === "cut" ? "from-red-50 to-white" : "from-blue-50 to-white";

    const upperExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().match(/chest|tricep|shoulder|bicep|back|delts/)
    );

    const lowerExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().match(/quad|hamstring|glute|calf|lower back/)
    );

    function addExercise(name: string) {
        const exercise = allExercises.find((ex) => ex.name === name);
        if (!exercise) return;

        const group = exercise.muscleGroup.toLowerCase();

        if (group.match(/chest|tricep|shoulder|bicep|back|delts/)) {
            if (!upperList.includes(name)) setUpperList([...upperList, name]);
        }

        if (group.match(/quad|hamstring|glute|calf|lower back/)) {
            if (!lowerList.includes(name)) setLowerList([...lowerList, name]);
        }
    }

    return (
        <div className={`min-h-screen bg-gradient-to-b ${bgClass} px-6 py-12`}>
            <h1 className="text-5xl font-extrabold tracking-tight text-center text-gray-900 mb-6 animate-fadeIn">
                Upper–Lower Split
            </h1>

            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed animate-fadeIn">
                A simple two-day split focusing on upper body and lower body alternation.
            </p>

            <div className="animate-fadeIn mb-16">
                <Calendar
                    title="Weekly Schedule — Upper Lower Split"
                    days={[
                        { day: "Mon", type: "upper" },
                        { day: "Tue", type: "lower" },
                        { day: "Wed", type: "rest" },
                        { day: "Thu", type: "upper" },
                        { day: "Fri", type: "lower" },
                        { day: "Sat", type: "rest" },
                        { day: "Sun", type: "rest" },
                    ]}
                />
            </div>

            <div className="space-y-20 animate-fadeIn max-w-7xl mx-auto">

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                        Upper Body
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {upperExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name)}
                            />
                        ))}
                    </div>

                    {upperList.length > 0 && (
                        <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Selected Upper Body Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {upperList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                        Lower Body
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {lowerExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name)}
                            />
                        ))}
                    </div>

                    {lowerList.length > 0 && (
                        <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Selected Lower Body Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {lowerList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
}
