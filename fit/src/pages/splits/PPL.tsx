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
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Push–Pull–Legs (PPL) Split
            </h1>

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

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Push Exercises</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {pushExercises.map((ex) => (
                            <ExerciseCard key={ex.name} {...ex} addExercise={() => addExercise(ex.name, ex.category)} />
                        ))}
                    </div>

                    {pushList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">Selected Push Exercises</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {pushList.map((ex) => <li key={ex}>{ex}</li>)}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Pull Exercises</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {pullExercises.map((ex) => (
                            <ExerciseCard key={ex.name} {...ex} addExercise={() => addExercise(ex.name, ex.category)} />
                        ))}
                    </div>

                    {pullList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">Selected Pull Exercises</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {pullList.map((ex) => <li key={ex}>{ex}</li>)}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Leg Exercises</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {legExercises.map((ex) => (
                            <ExerciseCard key={ex.name} {...ex} addExercise={() => addExercise(ex.name, ex.category)} />
                        ))}
                    </div>

                    {legList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">Selected Leg Exercises</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {legList.map((ex) => <li key={ex}>{ex}</li>)}
                            </ul>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
