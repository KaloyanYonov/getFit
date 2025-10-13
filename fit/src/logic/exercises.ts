export const allExercises = [
    {
        name: "Bench Press",
        muscleGroup: "Chest, Triceps, Shoulders",
        image: "https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg",
        description: "Classic push movement for upper body strength.",
        category: "push"  as const,
    },
    {
        name: "Push Ups",
        muscleGroup: "Chest,Triceps,Shoulders",
        image: "https://training.fit/wp-content/uploads/2020/02/liegestuetze.png",
        category : "push",
    },
    {
        name: "Overhead Press",
        muscleGroup: "Shoulders, Triceps",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-overhead-press.jpg",
        category: "push" as const,
    },
    {
        name: "Dips",
        muscleGroup: "Triceps, Chest",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/weighted-tricep-dips.jpg",
        category: "push" as const,
    },
    {
        name: "Pull-Ups",
        muscleGroup: "Back, Biceps",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/pull-up.jpg",
        category: "pull" as const,
    },
    {
        name: "Barbell Row",
        muscleGroup: "Back, Rear Delts",
        image: "https://training.fit/wp-content/uploads/2020/02/rudern-langhantel.png",
        category: "pull" as const,
    },
    {
        name: "Bicep Curls",
        muscleGroup: "Biceps",
        image: "https://training.fit/wp-content/uploads/2018/12/bizepscurls.png",
        category: "pull" as const,
    },
    {
        name: "Squats",
        muscleGroup: "Quads, Glutes",
        image: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-langhantel-800x448.png",
        category: "legs" as const,
    },
    {
        name: "Lunges",
        muscleGroup: "Quads, Hamstrings",
        image: "https://trainingstation.co.uk/cdn/shop/articles/Lunges-movment_d958998d-2a9f-430e-bdea-06f1e2bcc835_600x.webp?v=1741687877",
        category: "legs" as const,
    },
    {
        name: "Deadlifts",
        muscleGroup: "Hamstrings, Glutes, Lower Back",
        image: "https://training.fit/wp-content/uploads/2020/03/kreuzheben-gestreckte-beine.png",
        category: "legs" as const,
    },
] as const;

export type ExerciseCategory = "push" | "pull" | "legs";
