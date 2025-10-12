import ExerciseCard from "../../components/ExerciseCard";

export default function PPL() {
    const pushExercises = [
        {
            name: "Bench Press",
            muscleGroup: "Chest, Triceps, Shoulders",
            image: "https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg",
            description: "Classic push movement for upper body strength.",
        },
        {
            name: "Overhead Press",
            muscleGroup: "Shoulders, Triceps",
            image: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-overhead-press.jpg",
        },
        {
            name: "Dips",
            muscleGroup: "Triceps, Chest",
            image: "https://liftmanual.com/wp-content/uploads/2023/04/weighted-tricep-dips.jpg",
        },
    ];

    const pullExercises = [
        {
            name: "Pull-Ups",
            muscleGroup: "Back, Biceps",
            image: "https://liftmanual.com/wp-content/uploads/2023/04/pull-up.jpg",
        },
        {
            name: "Barbell Row",
            muscleGroup: "Back, Rear Delts",
            image: "https://training.fit/wp-content/uploads/2020/02/rudern-langhantel.png",
        },
        {
            name: "Bicep Curls",
            muscleGroup: "Biceps",
            image: "https://training.fit/wp-content/uploads/2018/12/bizepscurls.png",
        },
    ];

    const legExercises = [
        {
            name: "Squats",
            muscleGroup: "Quads, Glutes",
            image: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-langhantel-800x448.png",
        },
        {
            name: "Lunges",
            muscleGroup: "Quads, Hamstrings",
            image: "https://trainingstation.co.uk/cdn/shop/articles/Lunges-movment_d958998d-2a9f-430e-bdea-06f1e2bcc835_600x.webp?v=1741687877",
        },
        {
            name: "Deadlifts",
            muscleGroup: "Hamstrings, Glutes, Lower Back",
            image: "https://training.fit/wp-content/uploads/2020/03/kreuzheben-gestreckte-beine.png",
        },
    ];

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Push–Pull–Legs (PPL) Split
            </h1>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
                The Push–Pull–Legs routine divides training into three categories:
                <span className="font-semibold"> Push (chest, shoulders, triceps)</span>,{" "}
                <span className="font-semibold">Pull (back, biceps)</span>, and{" "}
                <span className="font-semibold">Legs (quads, hamstrings, glutes and calves)</span>.
                It’s one of the most efficient training splits for balanced muscle growth and recovery.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-10 text-center">
                <p className="text-blue-800 font-medium">
                    Recommended frequency: <span className="font-semibold">6 sessions per week</span>  
                    — e.g., Push (Mon), Pull (Tue), Legs (Wed), rest (Thu), repeat (Fri–Sun)
                </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6 mb-10 text-center">
                <p className="text-gray-600 italic">
                    Calendar will be here
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Push Day</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {pushExercises.map((ex) => (
                            <ExerciseCard key={ex.name} {...ex} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Pull Day</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {pullExercises.map((ex) => (
                            <ExerciseCard key={ex.name} {...ex} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Leg Day</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {legExercises.map((ex) => (
                            <ExerciseCard key={ex.name} {...ex} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
