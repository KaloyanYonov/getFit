import { useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import { allExercises } from "../../logic/exercises";
import Calendar from "../../components/Calendar";

export default function UpperLower() {
    const [upperList, setUpperList] = useState<string[]>([]);
    const [lowerList, setLowerList] = useState<string[]>([]);

    const upperExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().match(/chest|tricep|shoulder|bicep|back|delts/)
    );

    const lowerExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().match(/quad|hamstring|glute|calf|lower back/)
    );

    function addExercise(name: string, category: "push" | "pull" | "legs") {
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
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Upper–Lower Split
            </h1>


            <p className="text-center text-gray-600 mb-10">
                A simple two-day split focusing on upper body and lower body alternation.
            </p>

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

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Upper Body
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {upperExercises.map((ex) => (
                        <ExerciseCard
                            key={ex.name}
                            {...ex}
                            addExercise={() => addExercise(ex.name, ex.category)}
                        />
                    ))}
                </div>

                {upperList.length > 0 && (
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-700 mb-2">Selected Upper Body Exercises</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            {upperList.map((ex) => (
                                <li key={ex}>{ex}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Lower Body
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {lowerExercises.map((ex) => (
                        <ExerciseCard
                            key={ex.name}
                            {...ex}
                            addExercise={() => addExercise(ex.name, ex.category)}
                        />
                    ))}
                </div>

                {lowerList.length > 0 && (
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-700 mb-2">Selected Lower Body Exercises</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            {lowerList.map((ex) => (
                                <li key={ex}>{ex}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </div>
    );
}
