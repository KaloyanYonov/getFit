type AddFoodButtonProps = {
    onClick: () => void;
    text?: string;
};

export default function AddFoodButton({ onClick, text = "Add to diet" }: AddFoodButtonProps) {
    return (
        <button
            onClick={onClick}
            className="m-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
        >
            {text}
        </button>
    );

}
