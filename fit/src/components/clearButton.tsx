type ClearButtonProps = {
    onClick: () => void;
};

export default function ClearButton({ onClick }: ClearButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-8 py-2 rounded-lg font-medium border border-gray-400 text-gray-700 
                       hover:bg-gray-100 hover:text-gray-900 transition focus:outline-none 
                       focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
        >
            Clear
        </button>
    );
}
