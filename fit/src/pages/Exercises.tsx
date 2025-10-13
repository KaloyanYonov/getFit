import { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { allExercises } from "../logic/exercises";

export default function Exercises() {
    const [selected, setSelected] = useState<string[]>([]);

    function handleAdd(name: string) {
        if (!selected.includes(name)) {
            setSelected([...selected, name]);
        }
    }

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Exercise Library
            </h1>
            <p className="text-gray-600 text-center mb-10">
                Browse exercises and add them to your current split.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {allExercises.map((ex) => (
                    <ExerciseCard
                        key={ex.name}
                        {...ex}
                        addExercise={() => handleAdd(ex.name)}
                    />
                ))}
            </div>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Selected Exercises</h2>
                {selected.length > 0 ? (
                    <ul className="space-y-2 text-gray-700">
                        {selected.map((name) => (
                            <li key={name} className="font-medium">{name}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">No exercises selected yet.</p>
                )}
            </div>
        </div>
    );
}
