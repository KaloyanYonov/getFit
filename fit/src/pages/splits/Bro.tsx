import { useState } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import { allExercises } from "../../logic/exercises";
import Calendar from "../../components/Calendar";

export default function Bro() {
    const [chestList, setChestList] = useState<string[]>([]);
    const [backList, setBackList] = useState<string[]>([]);
    const [shoulderList, setShoulderList] = useState<string[]>([]);
    const [armList, setArmList] = useState<string[]>([]);
    const [legList, setLegList] = useState<string[]>([]);

    const chestExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().includes("chest")
    );
    const backExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().includes("back")
    );
    const shoulderExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().includes("shoulder")
    );
    const armExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().includes("bicep") ||
        ex.muscleGroup.toLowerCase().includes("tricep")
    );
    const legExercises = allExercises.filter((ex) =>
        ex.muscleGroup.toLowerCase().includes("quad") ||
        ex.muscleGroup.toLowerCase().includes("hamstring") ||
        ex.muscleGroup.toLowerCase().includes("glute")
    );

    function addExercise(name: string, category: "push" | "pull" | "legs") {
        const exercise = allExercises.find((ex) => ex.name === name);
        if (!exercise) return;

        const group = exercise.muscleGroup.toLowerCase();

        if (group.includes("chest") && !chestList.includes(name)) {
            setChestList([...chestList, name]);
        }
        if (group.includes("back") && !backList.includes(name)) {
            setBackList([...backList, name]);
        }
        if (group.includes("shoulder") && !shoulderList.includes(name)) {
            setShoulderList([...shoulderList, name]);
        }
        if ((group.includes("bicep") || group.includes("tricep")) && !armList.includes(name)) {
            setArmList([...armList, name]);
        }
        if (
            (group.includes("quad") ||
                group.includes("hamstring") ||
                group.includes("glute")) &&
            !legList.includes(name)
        ) {
            setLegList([...legList, name]);
        }
    }

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Bro Split
            </h1>

            <Calendar
                title="Weekly Schedule — Bro Split"
                days={[
                    { day: "Mon", type: "chest" },
                    { day: "Tue", type: "back" },
                    { day: "Wed", type: "shoulders" },
                    { day: "Thu", type: "arms" },
                    { day: "Fri", type: "legs" },
                    { day: "Sat", type: "rest" },
                    { day: "Sun", type: "rest" },
                ]}
            />


            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Chest Exercises
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {chestExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {chestList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">
                                Selected Chest Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {chestList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Back Exercises
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {backExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {backList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">
                                Selected Back Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {backList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Shoulders Exercises
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {shoulderExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {shoulderList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">
                                Selected Shoulder Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {shoulderList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Arms Exercises
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {armExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {armList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">
                                Selected Arm Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {armList.map((ex) => (
                                    <li key={ex}>{ex}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Legs Exercises
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {legExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.name}
                                {...ex}
                                addExercise={() => addExercise(ex.name, ex.category)}
                            />
                        ))}
                    </div>

                    {legList.length > 0 && (
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-700 mb-2">
                                Selected Leg Exercises
                            </h3>
                            <ul className="list-disc list-inside text-gray-600">
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
