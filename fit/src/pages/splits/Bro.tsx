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

    function addExercise(name: string) {
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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-center text-gray-900 mb-10 animate-fadeIn">
                Bro Split
            </h1>

            <div className="animate-fadeIn mb-16">
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
            </div>

            <div className="space-y-20 animate-fadeIn max-w-7xl mx-auto">
                {[
                    { title: "Chest Exercises", exercises: chestExercises, selected: chestList },
                    { title: "Back Exercises", exercises: backExercises, selected: backList },
                    { title: "Shoulder Exercises", exercises: shoulderExercises, selected: shoulderList },
                    { title: "Arm Exercises", exercises: armExercises, selected: armList },
                    { title: "Leg Exercises", exercises: legExercises, selected: legList }
                ].map((section) => (
                    <section key={section.title}>
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                            {section.title}
                        </h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                            {section.exercises.map((ex) => (
                                <ExerciseCard
                                    key={ex.name}
                                    {...ex}
                                    addExercise={() => addExercise(ex.name)}
                                />
                            ))}
                        </div>

                        {section.selected.length > 0 && (
                            <div className="mt-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Selected {section.title}
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {section.selected.map((ex) => (
                                        <li key={ex}>{ex}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                ))}

            </div>
        </div>
    );
}
