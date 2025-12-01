import { useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import { allExercises } from "../../logic/exercises";
import Calendar from "../../components/Calendar";

export default function WholeBody() {
    const [selected, setSelected] = useState<string[]>([]);

    function addExercise(name: string) {
        if (!selected.includes(name)) {
            setSelected([...selected, name]);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-center text-gray-900 mb-6 animate-fadeIn">
                Whole Body Split
            </h1>

            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed animate-fadeIn">
                A full-body routine that combines compound movements from push, pull, and leg categories.
            </p>

            <div className="animate-fadeIn mb-16">
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
            </div>
          
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center animate-fadeIn max-w-7xl mx-auto">
                {allExercises.map((ex) => (
                    <ExerciseCard
                        key={ex.name}
                        {...ex}
                        addExercise={() => addExercise(ex.name)}
                    />
                ))}
            </div>

            {selected.length > 0 && (
                <div className="mt-16 bg-white/70 w-full backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md animate-fadeIn max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        Selected Whole-Body Exercises
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selected.map((ex) => (
                            <li key={ex}>{ex}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
