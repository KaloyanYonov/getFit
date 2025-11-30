import { useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import { allExercises } from "../../logic/exercises";
import Calendar from "../../components/Calendar";

export default function PPL() {
    const [pushList, setPushList] = useState<string[]>([]);
    const [pullList, setPullList] = useState<string[]>([]);
    const [legList, setLegList] = useState<string[]>([]);

    const pushExercises = allExercises.filter((ex) => ex.category === "push");
    const pullExercises = allExercises.filter((ex) => ex.category === "pull");
    const legExercises = allExercises.filter((ex) => ex.category === "legs");

    function addExercise(name: string, category: "push" | "pull" | "legs") {
        if (category === "push" && !pushList.includes(name)) {
            setPushList([...pushList, name]);
        } else if (category === "pull" && !pullList.includes(name)) {
            setPullList([...pullList, name]);
        } else if (category === "legs" && !legList.includes(name)) {
            setLegList([...legList, name]);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12">
            
            <h1 className="text-5xl font-extrabold tracking-tight text-center text-gray-900 mb-10 animate-fadeIn">
                Push–Pull–Legs (PPL) Split
            </h1>

            <div className="animate-fadeIn mb-16">
                <Calendar
                    title="Weekly Schedule — Push Pull Legs"
                    days={[
                        { day: "Mon", type: "push" },
                        { day: "Tue", type: "pull" },
                        { day: "Wed", type: "legs" },
                        { day: "Thu", type: "rest" },
                        { day: "Fri", type: "push" },
                        { day: "Sat", type: "pull" },
                        { day: "Sun", type: "legs" },
                    ]}
                />
            </div>

            <div className="space-y-20 animate-fadeIn max-w-7xl mx-auto">

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                        Push Exercises
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {pushExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {pushList.length > 0 && (
                        <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Selected Push Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {pushList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                        Pull Exercises
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {pullExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {pullList.length > 0 && (
                        <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Selected Pull Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {pullList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                        Leg Exercises
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {legExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {legList.length > 0 && (
                        <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Selected Leg Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {legList.map((ex) => (
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
