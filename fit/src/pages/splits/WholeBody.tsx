import { useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import { allExercises } from "../../logic/exercises";
import Calendar from "../../components/Calendar";

export default function WholeBody() {
    const [selected, setSelected] = useState<string[]>([]);

    function addExercise(name: string, category: "push" | "pull" | "legs") {
        if (!selected.includes(name)) {
            setSelected([...selected, name]);
        }
    }

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Whole Body Split
            </h1>

            <p className="text-center text-gray-600 mb-10">
                A full-body routine that combines compound movements from push, pull, and leg categories.
            </p>

            <Calendar
                title="Weekly Schedule — Whole Body"
                days={[
                    { day: "Mon", type: "full" },
                    { day: "Tue", type: "rest" },
                    { day: "Wed", type: "full" },
                    { day: "Thu", type: "rest" },
                    { day: "Fri", type: "full" },
                    { day: "Sat", type: "rest" },
                    { day: "Sun", type: "rest" },
                ]}
            />


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {allExercises.map((ex) => (
                    <ExerciseCard
                        key={ex.name}
                        {...ex}
                        addExercise={() => addExercise(ex.name, ex.category)}
                    />
                ))}
            </div>

            {selected.length > 0 && (
                <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                        Selected Whole-Body Exercises
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {selected.map((ex) => (
                            <li key={ex}>{ex}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
