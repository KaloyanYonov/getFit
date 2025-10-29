type AddExerciseButtonProps = {
    onClick: () => void;
    text?: string;
};

export default function AddExerciseButton({ onClick, text = "Add Exercise" }: AddExerciseButtonProps) {
    return (
        <button
            onClick={onClick}
            className=" mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
        >
            {text}
        </button>
    );
}
